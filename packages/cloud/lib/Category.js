"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Base2 = _interopRequireDefault(require("./Base"));

var _arrayUtility = require("../helper/arrayUtility");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Category class to work with category collection
 */
var Category = /*#__PURE__*/function (_Base) {
  (0, _inherits2["default"])(Category, _Base);

  var _super = _createSuper(Category);

  function Category(args) {
    var _this;

    (0, _classCallCheck2["default"])(this, Category);
    _this = _super.call(this, args);
    _this.collection = 'category';
    return _this;
  }
  /**
   * Fetch Posts under Category
   * @param {Object} query
   */


  (0, _createClass2["default"])(Category, [{
    key: "posts",
    value: function () {
      var _posts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var query,
            limit,
            page,
            field,
            value,
            data,
            posts,
            startAt,
            endAt,
            categoryPosts,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                limit = query.limit ? query.limit : 1000;
                page = query.page ? query.page : 1;
                field = query.field ? query.field : null;
                value = query.value ? query.value : null;
                _context.next = 7;
                return this.where({
                  field: field,
                  value: value
                });

              case 7:
                data = _context.sent;
                posts = data && Object.keys(data).length ? data.posts : [];
                startAt = (page - 1) * limit;
                endAt = page * limit;
                categoryPosts = posts && posts.length ? posts.slice(startAt, endAt) : [];
                return _context.abrupt("return", {
                  data: categoryPosts,
                  total: posts.length
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function posts() {
        return _posts.apply(this, arguments);
      }

      return posts;
    }()
    /**
     * Fetch Posts by category slug
     * @param {Object} query
     */

  }, {
    key: "postBySlugs",
    value: function () {
      var _postBySlugs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _this2 = this;

        var query,
            data,
            categoryPosts,
            field,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                data = query.data;
                categoryPosts = [];
                field = 'slug';
                return _context3.abrupt("return", Promise.all(data.map(function (slug) {
                  return new Promise( /*#__PURE__*/function () {
                    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
                      var result, posts;
                      return _regenerator["default"].wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return _this2.where({
                                field: field,
                                value: slug
                              });

                            case 2:
                              result = _context2.sent;
                              posts = result.posts;
                              categoryPosts = (0, _arrayUtility.updatedResult)(categoryPosts, posts, 'id');
                              resolve(categoryPosts);

                            case 6:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x, _x2) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                })));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function postBySlugs() {
        return _postBySlugs.apply(this, arguments);
      }

      return postBySlugs;
    }()
  }]);
  return Category;
}(_Base2["default"]);

var _default = Category;
exports["default"] = _default;