import geohash from 'ngeohash';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Fuse from 'fuse.js';

/**
 *
 * @param {Float} lat
 * @param {Float} lng
 * @param {Number} precession
 * @returns {String}
 */
const getGeoHash = function(lat, lng, precession = 10) {
  const hash = geohash.encode(lat, lng, precession);
  return hash;
};

/**
 * Get timestamp value from firestore
 */
const getTimeStamp = () => {
  return firebase.firestore.FieldValue.serverTimestamp();
};

/**
 * Process post data with location
 * @param {Object} data
 */
const validatePostDataWithLocation = data => {
  let post = data;
  if (data && data.location && data.location.lat && data.location.lng) {
    const { lat, lng } = data.location;
    const hash = getGeoHash(lat, lng);
    post = {
      ...data,
      geohash: hash,
      location: new firebase.firestore.GeoPoint(Number(lat), Number(lng)),
    };
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
function sortByKey(array, key, type = 'asc') {
  if (array && array.length) {
    return array.sort(function(a, b) {
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
  const data = [];
  array.forEach(item => {
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
function pagination(array, pageNumber = 1, limit = 10) {
  const startAt = (pageNumber - 1) * limit;
  const endAt = pageNumber * limit;
  const data = array && array.length ? array.slice(startAt, endAt) : array;
  return data;
}

/**
 * Search an array of object in specific keys using fuse.js
 * @param {Array} data
 * @param {String} text
 */
function fuzzySearch(data, text) {
  const options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ['title', 'description', 'content', 'author'],
  };
  const fuse = new Fuse(data, options); // "list" is the item array
  const result = fuse.search(text);
  return result;
}

export {
  getTimeStamp,
  validatePostDataWithLocation,
  getGeoHash,
  sortByKey,
  pagination,
  getDocsInsideRedius,
  fuzzySearch,
};
