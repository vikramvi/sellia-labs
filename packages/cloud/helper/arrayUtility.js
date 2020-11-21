"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedPosts = exports.objectIntersection = exports.updatedResult = exports.objectToArray = exports.arrayToObject = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var arrayToObject = function arrayToObject(array) {
  var keyField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  return array.reduce(function (obj, item) {
    obj[item[keyField]] = item;
    return obj;
  }, {});
};

exports.arrayToObject = arrayToObject;

var objectToArray = function objectToArray(objectData) {
  var array = Object.keys(objectData).map(function (i) {
    return objectData[i];
  });
  return array;
};

exports.objectToArray = objectToArray;

var updatedResult = function updatedResult(oldArray, newArray) {
  var keyField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var oldArrayObj = arrayToObject(oldArray, keyField);
  var newArrayObj = arrayToObject(newArray, keyField);

  var updatedResultObj = _objectSpread(_objectSpread({}, oldArrayObj), newArrayObj);

  var updatedResultArray = objectToArray(updatedResultObj);
  return updatedResultArray;
};

exports.updatedResult = updatedResult;

var objectIntersection = function objectIntersection() {
  var oldObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var newObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var searched = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (Object.keys(oldObject).length) {
    var filterObject = {};

    for (var key in oldObject) {
      if (newObject.hasOwnProperty(key)) {
        filterObject[key] = newObject[key];
      }
    }

    return filterObject;
  } else {
    if (searched) {
      return {};
    } else {
      return newObject;
    }
  }
}; // This function take existing post results and new post results
// if any id of the new post results match with existing Post
// it replace the old Post item with new Post
// else the Post item get pushed to the existing post results
// return the updated post results
// NB: array to object conversion or storing object in
// state can not keep up with the post order id (ex: recent post ids) as object will
// always self ordered from small to large id hence this function is necessary to keep the sorted order
// otherwise you have to manually handle your result sorted order for object type state


exports.objectIntersection = objectIntersection;

var updatedPosts = function updatedPosts(oldPost, newPost) {
  var keyField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var updatedPost = (0, _toConsumableArray2["default"])(oldPost);

  if (updatedPost.length) {
    newPost.forEach(function (Post) {
      var index = updatedPost.findIndex(function (oldPost) {
        return oldPost[keyField] === Post[keyField];
      });

      if (index === -1) {
        updatedPost.push(Post);
      } else {
        updatedPost[index] = Post;
      }
    });
  } else {
    return (0, _toConsumableArray2["default"])(newPost);
  }

  return updatedPost;
};

exports.updatedPosts = updatedPosts;