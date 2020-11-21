"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Base2 = _interopRequireDefault(require("./Base"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Author class to run author base query
 */
var Author = /*#__PURE__*/function (_Base) {
  (0, _inherits2["default"])(Author, _Base);

  var _super = _createSuper(Author);

  function Author(args) {
    var _this;

    (0, _classCallCheck2["default"])(this, Author);
    _this = _super.call(this, args);
    _this.collection = 'users';
    return _this;
  }
  /**
   * Verify the current user's token
   * @param {Object} query
   * @returns {userId, email, error}
   */


  (0, _createClass2["default"])(Author, [{
    key: "verifyToken",
    value: function () {
      var _verifyToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var query,
            input,
            firebaseAdmin,
            token,
            user,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                input = query.input, firebaseAdmin = query.firebaseAdmin;
                token = input.token;
                _context.prev = 3;
                _context.next = 6;
                return firebaseAdmin.auth().verifyIdToken(token).then(function (user) {
                  return user;
                });

              case 6:
                user = _context.sent;
                return _context.abrupt("return", {
                  userId: user.user_id,
                  email: user.email,
                  error: false
                });

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", {
                  userId: '',
                  email: '',
                  error: _context.t0
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      function verifyToken() {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }()
    /**
     * @param  {String} path
     * @return {arrayObject} posts
     */

  }, {
    key: "posts",
    value: function () {
      var _posts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var query,
            id,
            status,
            limit,
            page,
            data,
            startAt,
            total,
            nextData,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                id = query.id ? query.id : null;
                status = query.status ? query.status : 'publish';
                limit = query.limit ? query.limit : 10;
                page = query.page ? query.page : 1;
                _context3.prev = 5;
                _context3.next = 8;
                return this.getRef('posts').where('authorId', '==', id).where('status', '==', status).get().then( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(snapshot) {
                    var docsAt, startAt, total;
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            docsAt = (page - 1) * limit;
                            startAt = snapshot.docs[docsAt];
                            total = snapshot.docs.length;
                            return _context2.abrupt("return", {
                              startAt: startAt,
                              total: total
                            });

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 8:
                data = _context3.sent;
                startAt = data.startAt, total = data.total;
                _context3.next = 12;
                return this.getRef('posts').where('authorId', '==', id).where('status', '==', status).limit(Number(limit)).startAt(startAt).get().then(function (docSnapshot) {
                  var data = docSnapshot.docs.map(function (doc) {
                    return _objectSpread(_objectSpread({}, doc.data()), {}, {
                      id: doc.id
                    });
                  });
                  return data;
                });

              case 12:
                nextData = _context3.sent;
                return _context3.abrupt("return", {
                  data: nextData,
                  total: total
                });

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](5);
                console.log(_context3.t0, 'Error');

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 16]]);
      }));

      function posts() {
        return _posts.apply(this, arguments);
      }

      return posts;
    }()
    /**
     * Fetch user favorite posts
     * @param {Object} query
     */

  }, {
    key: "favourite",
    value: function () {
      var _favourite = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var query,
            limit,
            page,
            id,
            data,
            posts,
            startAt,
            endAt,
            userFav,
            totalFav,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                limit = query.limit ? query.limit : 10;
                page = query.page ? query.page : 1;
                id = query.id ? query.id : null;
                _context4.prev = 4;
                _context4.next = 7;
                return this.getRef(this.collection).doc(id).get().then(function (item) {
                  return _objectSpread(_objectSpread({}, item.data()), {}, {
                    id: id
                  });
                });

              case 7:
                data = _context4.sent;
                posts = data ? data.favourite : [];
                startAt = (page - 1) * limit;
                endAt = page * limit;
                userFav = posts && posts.length ? posts.slice(startAt, endAt) : [];
                totalFav = posts && posts.length ? posts.length : 0;
                return _context4.abrupt("return", {
                  data: userFav,
                  total: totalFav
                });

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](4);
                console.log(_context4.t0);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4, 16]]);
      }));

      function favourite() {
        return _favourite.apply(this, arguments);
      }

      return favourite;
    }()
  }]);
  return Author;
}(_Base2["default"]);

var _default = Author;
exports["default"] = _default;