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

var _init = require("./init");

var _utility = require("../helper/utility");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This is the Base class to fetch and store data to Firestore
 */
var Base = /*#__PURE__*/function () {
  function Base() {
    (0, _classCallCheck2["default"])(this, Base);
    this.db = _init.db;
    this.collection = '';
    this.storageRef = 'images';
  }
  /**
   * Return the collection name
   * @param {String} collection
   */


  (0, _createClass2["default"])(Base, [{
    key: "getRef",
    value: function getRef(collection) {
      return this.db.collection(collection);
    }
    /**
     * Return all data from a collection with pagination support.
     * @param {Object} query
     */

  }, {
    key: "all",
    value: function () {
      var _all = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var query,
            limit,
            page,
            data,
            startAt,
            totalPosts,
            nextData,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                limit = query.limit ? query.limit : 1000;
                page = query.page ? query.page : 1;
                _context2.prev = 3;
                _context2.next = 6;
                return this.getRef(this.collection).get().then( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(snapshot) {
                    var docsAt, startAt, totalPosts;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            docsAt = (page - 1) * limit;
                            startAt = snapshot.docs[docsAt];
                            totalPosts = snapshot.docs.length;
                            return _context.abrupt("return", {
                              startAt: startAt,
                              totalPosts: totalPosts
                            });

                          case 4:
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

              case 6:
                data = _context2.sent;
                startAt = data.startAt, totalPosts = data.totalPosts;
                _context2.next = 10;
                return this.getRef(this.collection) // .orderBy('createdAt', 'desc')
                .limit(Number(limit)).startAt(startAt).get().then(function (docSnapshot) {
                  var data = docSnapshot.docs.map(function (doc) {
                    return _objectSpread(_objectSpread({}, doc.data()), {}, {
                      id: doc.id
                    });
                  });
                  return data;
                });

              case 10:
                nextData = _context2.sent;
                return _context2.abrupt("return", {
                  data: nextData,
                  total: totalPosts
                });

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](3);
                console.log(_context2.t0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 14]]);
      }));

      function all() {
        return _all.apply(this, arguments);
      }

      return all;
    }()
    /**
     * Fetch a document by its ID
     * @param {Object} query
     */

  }, {
    key: "byId",
    value: function () {
      var _byId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var query,
            id,
            data,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                id = query.id ? query.id : null;
                _context3.prev = 2;
                _context3.next = 5;
                return this.getRef(this.collection).doc(id).get().then(function (item) {
                  return _objectSpread(_objectSpread({}, item.data()), {}, {
                    id: id
                  });
                });

              case 5:
                data = _context3.sent;
                return _context3.abrupt("return", data);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                console.log(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function byId() {
        return _byId.apply(this, arguments);
      }

      return byId;
    }()
    /**
     * Fetch collection with where conditions
     * @param {Object} query
     */

  }, {
    key: "where",
    value: function () {
      var _where = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var query,
            limit,
            field,
            operator,
            value,
            multiple,
            data,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                limit = query.limit ? query.limit : 1000;
                field = query.field ? query.field : null;
                operator = query.operator ? query.operator : '==';
                value = query.value ? query.value : null;
                multiple = query.multiple ? query.multiple : false;
                data = [];
                _context4.prev = 7;
                _context4.next = 10;
                return this.getRef(this.collection).limit(Number(limit)).where(field, operator, value).get().then(function (snapshot) {
                  snapshot.docs.map(function (doc) {
                    data.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
                      id: doc.id
                    }));
                  });
                });

              case 10:
                if (!multiple) {
                  _context4.next = 14;
                  break;
                }

                return _context4.abrupt("return", data);

              case 14:
                return _context4.abrupt("return", data[0] ? data[0] : {});

              case 15:
                _context4.next = 20;
                break;

              case 17:
                _context4.prev = 17;
                _context4.t0 = _context4["catch"](7);
                console.log(_context4.t0);

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[7, 17]]);
      }));

      function where() {
        return _where.apply(this, arguments);
      }

      return where;
    }()
    /**
     * Fetch documents which falls between two range
     * @param {Object} query
     */

  }, {
    key: "range",
    value: function () {
      var _range = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var query,
            field,
            min,
            max,
            posts,
            data,
            _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
                field = query.field, min = query.min, max = query.max;
                posts = [];
                _context5.prev = 3;
                _context5.next = 6;
                return this.getRef(this.collection).where(field, '>=', min).where(field, '<=', max).get().then(function (snapshot) {
                  snapshot.docs.map(function (doc) {
                    posts.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
                      id: doc.id
                    }));
                  });
                  return posts;
                });

              case 6:
                data = _context5.sent;
                return _context5.abrupt("return", data);

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](3);
                console.log(_context5.t0);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 10]]);
      }));

      function range() {
        return _range.apply(this, arguments);
      }

      return range;
    }()
    /**
     * Delete a document by its ID
     * @param {Object} query
     */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var query,
            id,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                query = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
                id = query.id ? query.id : null;
                _context6.prev = 2;
                _context6.next = 5;
                return this.getRef(this.collection).doc(id)["delete"]() // Deleting a document does not delete its subcollections!
                .then(function () {
                  return {
                    id: id
                  };
                });

              case 5:
                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](2);
                console.error('Error removing document: ', _context6.t0);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 7]]);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /**
     * Push a new document under a specific collection
     * @param {Object} query
     */

  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _this = this;

        var query,
            data,
            post,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                query = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
                data = query.data ? query.data : {};
                data = (0, _utility.validatePostDataWithLocation)(data);
                data = _objectSpread(_objectSpread({}, data), {}, {
                  createdAt: (0, _utility.getTimeStamp)()
                });
                _context7.prev = 4;
                _context7.next = 7;
                return this.getRef(this.collection).add(data).then(function (doc) {
                  return _this.byId({
                    id: doc.id
                  });
                });

              case 7:
                post = _context7.sent;
                return _context7.abrupt("return", post);

              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](4);
                console.error('Error adding document: ', _context7.t0);

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[4, 11]]);
      }));

      function add() {
        return _add.apply(this, arguments);
      }

      return add;
    }() // if you are not sure weather to add or update

  }, {
    key: "set",
    value: function () {
      var _set = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var _this2 = this;

        var query,
            id,
            data,
            post,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                query = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
                id = query.id ? query.id : null; // id is required

                data = query.data ? query.data : {};
                data = (0, _utility.validatePostDataWithLocation)(data);
                data = _objectSpread(_objectSpread({}, data), {}, {
                  updatedAt: (0, _utility.getTimeStamp)()
                });
                _context8.prev = 5;
                _context8.next = 8;
                return this.getRef(this.collection).doc(id).set(data, {
                  merge: true
                }).then(function () {
                  return _this2.byId({
                    id: id
                  });
                });

              case 8:
                post = _context8.sent;
                return _context8.abrupt("return", post);

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](5);
                console.error('Error updating document: ', _context8.t0);

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[5, 12]]);
      }));

      function set() {
        return _set.apply(this, arguments);
      }

      return set;
    }()
    /**
     * Update a document by ID and new data
     * @param {Object} query
     */

  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        var _this3 = this;

        var query,
            id,
            data,
            post,
            _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                query = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
                id = query.id ? query.id : null;
                data = query.data ? query.data : {};
                data = (0, _utility.validatePostDataWithLocation)(data);
                data = _objectSpread(_objectSpread({}, data), {}, {
                  updatedAt: (0, _utility.getTimeStamp)()
                });
                _context9.prev = 5;
                _context9.next = 8;
                return this.getRef(this.collection).doc(id).update(data).then(function () {
                  return _this3.byId({
                    id: id
                  });
                });

              case 8:
                post = _context9.sent;
                return _context9.abrupt("return", post);

              case 12:
                _context9.prev = 12;
                _context9.t0 = _context9["catch"](5);
                console.error('Error updating document: ', _context9.t0);

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[5, 12]]);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);
  return Base;
}();

exports["default"] = Base;