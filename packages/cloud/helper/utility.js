"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortByKey = sortByKey;
exports.pagination = pagination;
exports.getDocsInsideRedius = getDocsInsideRedius;
exports.fuzzySearch = fuzzySearch;
exports.getGeoHash = exports.validatePostDataWithLocation = exports.getTimeStamp = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ngeohash = _interopRequireDefault(require("ngeohash"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

var _fuse = _interopRequireDefault(require("fuse.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *
 * @param {Float} lat
 * @param {Float} lng
 * @param {Number} precession
 * @returns {String}
 */
var getGeoHash = function getGeoHash(lat, lng) {
  var precession = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  var hash = _ngeohash["default"].encode(lat, lng, precession);

  return hash;
};
/**
 * Get timestamp value from firestore
 */


exports.getGeoHash = getGeoHash;

var getTimeStamp = function getTimeStamp() {
  return _app["default"].firestore.FieldValue.serverTimestamp();
};
/**
 * Process post data with location
 * @param {Object} data
 */


exports.getTimeStamp = getTimeStamp;

var validatePostDataWithLocation = function validatePostDataWithLocation(data) {
  var post = data;

  if (data && data.location && data.location.lat && data.location.lng) {
    var _data$location = data.location,
        lat = _data$location.lat,
        lng = _data$location.lng;
    var hash = getGeoHash(lat, lng);
    post = _objectSpread(_objectSpread({}, data), {}, {
      geohash: hash,
      location: new _app["default"].firestore.GeoPoint(Number(lat), Number(lng))
    });
  }

  return post;
};
/**
 * Sort an array of object with any specific object key
 * @param {Array} array
 * @param {String} key
 * @param {String} type
 * @returns {Array}
 */


exports.validatePostDataWithLocation = validatePostDataWithLocation;

function sortByKey(array, key) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';

  if (array && array.length) {
    return array.sort(function (a, b) {
      if (type === 'asc') {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });
  } else {
    return array;
  }
}
/**
 * Find document inside a given radius
 * @param {Array} array
 * @param {Number} radius
 */


function getDocsInsideRedius(array, radius) {
  var data = [];
  array.forEach(function (item) {
    if (item.distance <= radius) {
      data.push(item);
    }
  });
  return data;
}
/**
 * Calculating the pagination functionality
 * @param {Array} array
 * @param {Number} pageNumber
 * @param {Number} limit
 */


function pagination(array) {
  var pageNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startAt = (pageNumber - 1) * limit;
  var endAt = pageNumber * limit;
  var data = array && array.length ? array.slice(startAt, endAt) : array;
  return data;
}
/**
 * Search an array of object in specific keys using fuse.js
 * @param {Array} data
 * @param {String} text
 */


function fuzzySearch(data, text) {
  var options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ['title', 'description', 'content', 'author']
  };
  var fuse = new _fuse["default"](data, options); // "list" is the item array

  var result = fuse.search(text);
  return result;
}