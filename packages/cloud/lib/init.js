"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebaseAuth = exports.storage = exports.db = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/storage");

require("firebase/auth");

var _firebase = require("../firebase.config");

_app["default"].initializeApp(_firebase.config);

var db = _app["default"].firestore();

exports.db = db;

var storage = _app["default"].storage();

exports.storage = storage;
var firebaseAuth = _app["default"].auth; // db.settings({
//   timestampsInSnapshots: true,
// });

exports.firebaseAuth = firebaseAuth;