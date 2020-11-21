"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var express = require('express');

var bodyParser = require('body-parser');

var next = require('next');

var dev = process.env.NODE_ENV !== 'production';
var app = express();
app.use(bodyParser.json());
app.get('/add-post/:id', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var nextApp, actualPage, queryParams;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nextApp = next({
              dev: dev,
              conf: {
                distDir: 'next',
                publicRuntimeConfig: {
                  // Will be available on both server and client
                  staticFolder: '../../public'
                }
              }
            });
            _context.next = 3;
            return nextApp.prepare();

          case 3:
            actualPage = '/add-post';
            queryParams = {
              id: req.params.id
            };
            res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            nextApp.render(req, res, actualPage, queryParams);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/post/:slug', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var nextApp, actualPage, queryParams;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nextApp = next({
              dev: dev,
              conf: {
                distDir: 'next',
                publicRuntimeConfig: {
                  // Will be available on both server and client
                  staticFolder: '../../public'
                }
              }
            });
            _context2.next = 3;
            return nextApp.prepare();

          case 3:
            actualPage = '/single-post';
            queryParams = {
              slug: req.params.slug
            };
            res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            nextApp.render(req, res, actualPage, queryParams);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get('/category/:slug', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var nextApp, actualPage, queryParams;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            nextApp = next({
              dev: dev,
              conf: {
                distDir: 'next',
                publicRuntimeConfig: {
                  // Will be available on both server and client
                  staticFolder: '../../public'
                }
              }
            });
            _context3.next = 3;
            return nextApp.prepare();

          case 3:
            actualPage = '/single-category';
            queryParams = {
              slug: req.params.slug
            };
            res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            nextApp.render(req, res, actualPage, queryParams);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.get('/profile/:username', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var nextApp, actualPage, queryParams;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            nextApp = next({
              dev: dev,
              conf: {
                distDir: 'next',
                publicRuntimeConfig: {
                  // Will be available on both server and client
                  staticFolder: '../../public'
                }
              }
            });
            _context4.next = 3;
            return nextApp.prepare();

          case 3:
            actualPage = '/profile';
            queryParams = {
              username: req.params.username
            };
            res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            nextApp.render(req, res, actualPage, queryParams);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app.get('*', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var nextApp, handle;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            nextApp = next({
              dev: dev,
              conf: {
                distDir: 'next',
                publicRuntimeConfig: {
                  staticFolder: '../../public'
                }
              }
            });
            _context5.next = 3;
            return nextApp.prepare();

          case 3:
            handle = nextApp.getRequestHandler();
            return _context5.abrupt("return", handle(req, res));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = app;
exports["default"] = _default;