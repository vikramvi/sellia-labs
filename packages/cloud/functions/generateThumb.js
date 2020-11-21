/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for t`he specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var functions = require('firebase-functions');

var admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(require('../config')),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

var mkdirp = require('mkdirp-promise');

var spawn = require('child-process-promise').spawn;

var path = require('path');

var os = require('os');

var fs = require('fs'); // Max height and width of the thumbnail in pixels.


var THUMB_MAX_HEIGHT = 360;
var THUMB_MAX_WIDTH = 420; // Thumbnail prefix added to file names.

var THUMB_PREFIX = 'thumb_';
/**
 * When an image is uploaded in the Storage bucket We generate a thumbnail automatically using
 * ImageMagick.
 * After the thumbnail has been generated and uploaded to Cloud Storage,
 * we write the public URL to the Firebase Realtime Database.
 */

var generateThumbnail = functions.storage.object().onFinalize( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(object) {
    var filePath, contentType, fileDir, fileName, thumbFilePath, tempLocalFile, tempLocalDir, tempLocalThumbFile, bucket, file, thumbFile, metadata, config, results, thumbResult, originalResult, thumbFileUrl, fileUrl;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // File and directory paths.
            filePath = object.name;
            contentType = object.contentType; // This is the image MIME type

            fileDir = path.dirname(filePath);
            fileName = path.basename(filePath);
            thumbFilePath = path.normalize(path.join(fileDir, "".concat(THUMB_PREFIX).concat(fileName)));
            tempLocalFile = path.join(os.tmpdir(), filePath);
            tempLocalDir = path.dirname(tempLocalFile);
            tempLocalThumbFile = path.join(os.tmpdir(), thumbFilePath); // Exit if this is triggered on a file that is not an image.

            if (contentType.startsWith('image/')) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", console.log('This is not an image.'));

          case 10:
            if (!fileName.startsWith(THUMB_PREFIX)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", console.log('Already a Thumbnail.'));

          case 12:
            // Cloud Storage files.
            bucket = admin.storage().bucket(object.bucket);
            file = bucket.file(filePath);
            thumbFile = bucket.file(thumbFilePath);
            metadata = {
              contentType: contentType // To enable Client-side caching you can set the Cache-Control headers here. Uncomment below.
              // 'Cache-Control': 'public,max-age=3600',

            }; // Create the temp directory where the storage file will be downloaded.

            _context.next = 18;
            return mkdirp(tempLocalDir);

          case 18:
            _context.next = 20;
            return file.download({
              destination: tempLocalFile
            });

          case 20:
            console.log('The file has been downloaded to', tempLocalFile); // Generate a thumbnail using ImageMagick.

            _context.next = 23;
            return spawn('convert', [tempLocalFile, '-thumbnail', "".concat(THUMB_MAX_WIDTH, "x").concat(THUMB_MAX_HEIGHT, ">"), tempLocalThumbFile], {
              capture: ['stdout', 'stderr']
            });

          case 23:
            console.log('Thumbnail created at', tempLocalThumbFile); // Uploading the Thumbnail.

            _context.next = 26;
            return bucket.upload(tempLocalThumbFile, {
              destination: thumbFilePath,
              metadata: metadata
            });

          case 26:
            console.log('Thumbnail uploaded to Storage at', thumbFilePath); // Once the image has been uploaded delete the local files to free up disk space.

            fs.unlinkSync(tempLocalFile);
            fs.unlinkSync(tempLocalThumbFile); // Get the Signed URLs for the thumbnail and original image.

            config = {
              action: 'read',
              expires: '03-01-2500'
            };
            _context.next = 32;
            return Promise.all([thumbFile.getSignedUrl(config), file.getSignedUrl(config)]);

          case 32:
            results = _context.sent;
            console.log('Got Signed URLs.');
            thumbResult = results[0];
            originalResult = results[1];
            thumbFileUrl = thumbResult[0];
            fileUrl = originalResult[0]; // Add the URLs to the Database

            _context.next = 40;
            return admin.database().ref('images').push({
              path: fileUrl,
              thumbnail: thumbFileUrl
            });

          case 40:
            return _context.abrupt("return", console.log('Thumbnail URLs saved to database.'));

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var _default = generateThumbnail;
exports["default"] = _default;