"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _AuthMiddleware = require("../middlewares/AuthMiddleware");

require('dotenv').config();

var _require = require('apollo-server-cloud-functions'),
    ApolloServer = _require.ApolloServer;

var admin = require('firebase-admin');

var _require2 = require('../resolvers'),
    resolvers = _require2.resolvers;

var _require3 = require('../TypeDefs'),
    typeDefs = _require3.typeDefs;

var firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(require('../config')),
  databaseURL: process.env.FIREBASE_DATABASE_URL
}, 'server');

var getUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return firebaseAdmin.auth().verifyIdToken(token).then(function (user) {
              return user;
            });

          case 3:
            user = _context.sent;
            return _context.abrupt("return", {
              userId: user.user_id,
              email: user.email,
              error: false
            });

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              userId: '',
              email: '',
              error: _context.t0
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}(); // context


var context = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var token, user, isVerified;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = req.request && req.request.headers && req.request.headers.authorization ? req.request.headers.authorization : '';

            if (!token) {
              _context2.next = 7;
              break;
            }

            _context2.next = 4;
            return getUser(token);

          case 4:
            _context2.t0 = _context2.sent;
            _context2.next = 8;
            break;

          case 7:
            _context2.t0 = {};

          case 8:
            user = _context2.t0;
            isVerified = user && user.userId ? true : false;
            return _context2.abrupt("return", {
              req: req,
              token: token,
              user: user,
              isVerified: isVerified,
              firebaseAdmin: firebaseAdmin
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function context(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  middlewares: [_AuthMiddleware.Permissions],
  context: context,
  playground: true,
  introspection: true
});
var api = server.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
});
var _default = api;
exports["default"] = _default;