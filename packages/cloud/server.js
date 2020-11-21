"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _graphqlYoga = require("graphql-yoga");

var _resolvers = require("./resolvers");

var _TypeDefs = require("./TypeDefs");

var _AuthMiddleware = require("./middlewares/AuthMiddleware");

var bodyParser = require('body-parser');

var admin = require('firebase-admin');

var cors = require('cors');

var firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(require('./config')),
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
}();

var pubsub = new _graphqlYoga.PubSub(); // context

var context = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var token, user, isVerified;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = req.request && req.request.headers && req.request.headers.authorization ? req.request.headers.authorization : '';
            _context2.next = 3;
            return getUser(token);

          case 3:
            user = _context2.sent;
            isVerified = user && user.userId ? true : false;
            return _context2.abrupt("return", {
              req: req,
              token: token,
              user: user,
              isVerified: isVerified,
              pubsub: pubsub,
              firebaseAdmin: firebaseAdmin
            });

          case 6:
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

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: _TypeDefs.typeDefs,
  resolvers: _resolvers.resolvers,
  middlewares: [_AuthMiddleware.Permissions],
  context: context
});
var options = {
  port: 4000,
  endpoint: '/',
  playground: '/playground' // cors: {
  //   credentials: true,
  //   origin: [process.env.APP_FRONT_END_URL], // your frontend url.
  // },

};
var app = server.express; // enable cors

var corsOptions = {
  origin: process.env.APP_FRONT_END_URL,
  credentials: true // <-- REQUIRED backend setting

};
app.use(cors(corsOptions));
app.use(bodyParser.json());
server.start(options, function (_ref3) {
  var port = _ref3.port;
  return console.log("GraphQl Server Started at Port: ".concat(port));
});