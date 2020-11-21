"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _api = _interopRequireDefault(require("./functions/api"));

var _generateThumb = _interopRequireDefault(require("./functions/generateThumb"));

require('@babel/polyfill');

require('dotenv').config();

var functions = require('firebase-functions');

var next = require('next'); // exports.next = functions.https.onRequest(app);


var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev: dev,
  conf: {
    distDir: 'next',
    publicRuntimeConfig: {
      staticFolder: '../../public'
    }
  }
});
var handle = app.getRequestHandler();
exports.api = functions.https.onRequest(_api["default"]);
exports.generateThumbnail = _generateThumb["default"];
exports.next = functions.https.onRequest(function (req, res) {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested

  return app.prepare().then(function () {
    return handle(req, res);
  });
});