"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Permissions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlShield = require("graphql-shield");

/**
 * Check if the user authenticated
 */
var isAuthenticated = (0, _graphqlShield.rule)()( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, ctx, info) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", ctx.isVerified);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * Is the user owner of the post he is trying to modify
 */

var isOwner = (0, _graphqlShield.rule)()( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parent, args, ctx, info) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(args.input.authorId !== 'false')) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", true);

          case 2:
            return _context2.abrupt("return", false);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}());
/**
 * Is the user Admin
 */

var isAdmin = (0, _graphqlShield.rule)()( /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parent, args, ctx, info) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", true);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}());
/**
 * Is the user editing his own profile
 */

var isSameUser = (0, _graphqlShield.rule)()( /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(parent, args, ctx, info) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(args.input.id !== 'false')) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", true);

          case 2:
            return _context4.abrupt("return", false);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x13, _x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}());
var Permissions = (0, _graphqlShield.shield)({
  Mutation: {
    addPost: (0, _graphqlShield.and)(isAuthenticated, isOwner),
    addCategory: (0, _graphqlShield.and)(isAuthenticated, isAdmin),
    logout: isAuthenticated,
    handleFav: isAuthenticated,
    addAuthor: isSameUser
  }
});
exports.Permissions = Permissions;