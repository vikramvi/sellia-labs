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

var _Category = _interopRequireDefault(require("./Category"));

var _utility = require("../helper/utility");

var _geohashUtility = require("../helper/geohashUtility");

var _arrayUtility = require("../helper/arrayUtility");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Post = /*#__PURE__*/function (_Base) {
  (0, _inherits2["default"])(Post, _Base);

  var _super = _createSuper(Post);

  function Post(args) {
    var _this;

    (0, _classCallCheck2["default"])(this, Post);
    _this = _super.call(this, args);
    _this.collection = 'posts';
    return _this;
  }
  /**
   * @param  {String} path
   * @return {arrayObject} posts
   */


  (0, _createClass2["default"])(Post, [{
    key: "allPost",
    value: function () {
      var _allPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var query,
            status,
            limit,
            page,
            data,
            startAt,
            total,
            nextData,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                status = query.status ? query.status : 'publish';
                limit = query.limit ? query.limit : 10;
                page = query.page ? query.page : 1;
                _context2.prev = 4;
                _context2.next = 7;
                return this.getRef('posts').where('status', '==', status).get().then( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(snapshot) {
                    var docsAt, startAt, total;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            docsAt = (page - 1) * limit;
                            startAt = snapshot.docs[docsAt];
                            total = snapshot.docs.length;
                            return _context.abrupt("return", {
                              startAt: startAt,
                              total: total
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

              case 7:
                data = _context2.sent;
                startAt = data.startAt, total = data.total;
                _context2.next = 11;
                return this.getRef('posts').where('status', '==', status).limit(Number(limit)).startAt(startAt).get().then(function (docSnapshot) {
                  var data = docSnapshot.docs.map(function (doc) {
                    return _objectSpread(_objectSpread({}, doc.data()), {}, {
                      id: doc.id
                    });
                  });
                  return data;
                });

              case 11:
                nextData = _context2.sent;
                return _context2.abrupt("return", {
                  data: nextData,
                  total: total
                });

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](4);
                console.log(_context2.t0, 'Error');

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 15]]);
      }));

      function allPost() {
        return _allPost.apply(this, arguments);
      }

      return allPost;
    }()
    /**
     * @param  {String} path
     * @return {ArrayObject} posts
     */

  }, {
    key: "relatedPosts",
    value: function () {
      var _relatedPosts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var query,
            value,
            field,
            category,
            result,
            postData,
            categoryPosts,
            posts,
            _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                _context3.prev = 1;
                value = query.value, field = query.field;
                category = new _Category["default"]();
                _context3.next = 6;
                return this.where({
                  field: field,
                  value: value
                });

              case 6:
                result = _context3.sent;
                postData = result ? result.categories.map(function (category) {
                  return category.slug;
                }) : [];
                _context3.next = 10;
                return category.postBySlugs({
                  data: postData
                });

              case 10:
                categoryPosts = _context3.sent;
                posts = categoryPosts[0] ? categoryPosts[0].filter(function (post) {
                  return post.slug !== value;
                }) : []; // posts = categoryPosts[0].filter(post => post.slug !== value);

                return _context3.abrupt("return", posts.slice(0, 4));

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0, 'Error');

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 15]]);
      }));

      function relatedPosts() {
        return _relatedPosts.apply(this, arguments);
      }

      return relatedPosts;
    }()
    /**
     * Fetch posts near to the user location it is used for search page
     * @param {Object} query
     */

  }, {
    key: "nearestPosts",
    value: function () {
      var _nearestPosts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var query,
            location,
            radius,
            limit,
            page,
            center,
            collection,
            nearestPoints,
            data,
            nearestInsideRadius,
            nearestData,
            nearest,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                location = query.location, radius = query.radius;
                limit = query.limit ? query.limit : 1000;
                page = query.page ? query.page : 1;
                center = {
                  lat: Number(location.lat),
                  lon: Number(location.lng)
                };
                collection = this.getRef(this.collection);
                _context4.next = 8;
                return (0, _geohashUtility.getNearestDocs)(collection, center, radius);

              case 8:
                nearestPoints = _context4.sent;
                data = nearestPoints.length ? nearestPoints[0] : [];
                nearestInsideRadius = (0, _utility.getDocsInsideRedius)(data, radius);
                nearestData = (0, _utility.sortByKey)(nearestInsideRadius, 'distance');
                nearest = (0, _utility.pagination)(nearestData, page, limit);
                return _context4.abrupt("return", nearest);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function nearestPosts() {
        return _nearestPosts.apply(this, arguments);
      }

      return nearestPosts;
    }()
    /**
     * Fetch posts near to the user location
     * @param {Object} query
     */

  }, {
    key: "nearest",
    value: function () {
      var _nearest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var query,
            location,
            radius,
            limit,
            page,
            center,
            collection,
            nearestPoints,
            data,
            nearestInsideRadius,
            nearestData,
            nearest,
            _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
                location = query.location, radius = query.radius;
                limit = query.limit ? query.limit : 1000;
                page = query.page ? query.page : 1;
                center = {
                  lat: Number(location.lat),
                  lon: Number(location.lng)
                };
                collection = this.getRef(this.collection);
                _context5.next = 8;
                return (0, _geohashUtility.getNearestDocs)(collection, center, radius);

              case 8:
                nearestPoints = _context5.sent;
                data = nearestPoints.length ? nearestPoints[0] : [];
                nearestInsideRadius = (0, _utility.getDocsInsideRedius)(data, radius);
                nearestData = (0, _utility.sortByKey)(nearestInsideRadius, 'distance');
                nearest = (0, _utility.pagination)(nearestData, page, limit);
                return _context5.abrupt("return", {
                  data: nearest,
                  total: nearestData.length
                });

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function nearest() {
        return _nearest.apply(this, arguments);
      }

      return nearest;
    }()
    /**
     * Get user distance from the post location
     * @param {Object} query
     */

  }, {
    key: "userDistance",
    value: function () {
      var _userDistance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var query,
            userLocation,
            postLocation,
            location1,
            location2,
            dist,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                query = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
                userLocation = query.userLocation, postLocation = query.postLocation;
                location1 = [Number(userLocation.lat), Number(userLocation.lng)];
                location2 = [Number(postLocation.lat), Number(postLocation.lng)];
                _context6.next = 6;
                return (0, _geohashUtility.distance)(location1, location2);

              case 6:
                dist = _context6.sent;
                return _context6.abrupt("return", dist);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function userDistance() {
        return _userDistance.apply(this, arguments);
      }

      return userDistance;
    }()
    /**
     * The full search functionality
     * @param {Object} query
     */

  }, {
    key: "search",
    value: function () {
      var _search = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var query,
            searched,
            category,
            data,
            categories,
            condition,
            isNegotiable,
            price,
            location,
            radius,
            sorting,
            page,
            limit,
            text,
            filteredObject,
            _limit,
            allPosts,
            allPostsData,
            postData,
            allPostsDataObject,
            categoryPosts,
            categoryPostsLastItem,
            categoryPostsObject,
            field,
            min,
            max,
            pricePosts,
            pricePostObject,
            conditionPosts,
            conditionPostsObject,
            isNegotiablePosts,
            isNegotiablePostsObject,
            nearestPosts,
            nearestPostsObject,
            _allPosts,
            _allPostsData,
            _allPostsDataObject,
            ObjectToArray,
            filteredArray,
            paginatedData,
            filterdData,
            _args7 = arguments;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                query = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
                searched = false;
                category = new _Category["default"]();
                data = query.data ? query.data : {};
                categories = data.categories, condition = data.condition, isNegotiable = data.isNegotiable, price = data.price, location = data.location, radius = data.radius, sorting = data.sorting, page = data.page, limit = data.limit, text = data.text;
                filteredObject = {};

                if (searched) {
                  _context7.next = 56;
                  break;
                }

                if (!text) {
                  _context7.next = 17;
                  break;
                }

                _limit = 10000;
                _context7.next = 11;
                return this.all({
                  limit: _limit
                });

              case 11:
                allPosts = _context7.sent;
                allPostsData = allPosts.data;
                postData = (0, _utility.fuzzySearch)(allPostsData, text);
                allPostsDataObject = (0, _arrayUtility.arrayToObject)(postData, 'id');
                filteredObject = (0, _arrayUtility.objectIntersection)(filteredObject, allPostsDataObject, searched);
                searched = true;

              case 17:
                if (!(categories && categories.length)) {
                  _context7.next = 25;
                  break;
                }

                _context7.next = 20;
                return category.postBySlugs({
                  data: categories
                });

              case 20:
                categoryPosts = _context7.sent;
                categoryPostsLastItem = categoryPosts[categoryPosts.length - 1]; // const categoryPostsObject = arrayToObject(
                //   categoryPostsLastItem,
                //   'postId'
                // );

                categoryPostsObject = (0, _arrayUtility.arrayToObject)(categoryPostsLastItem, 'id');
                filteredObject = (0, _arrayUtility.objectIntersection)(filteredObject, categoryPostsObject, searched);
                searched = true;

              case 25:
                if (!(price && price.length && price.length > 1)) {
                  _context7.next = 35;
                  break;
                }

                field = 'price';
                min = price[0];
                max = price[1];
                _context7.next = 31;
                return this.range({
                  field: field,
                  min: min,
                  max: max
                });

              case 31:
                pricePosts = _context7.sent;
                pricePostObject = (0, _arrayUtility.arrayToObject)(pricePosts, 'id');
                filteredObject = (0, _arrayUtility.objectIntersection)(filteredObject, pricePostObject, searched);
                searched = true;

              case 35:
                if (!(condition !== null && condition !== undefined)) {
                  _context7.next = 42;
                  break;
                }

                _context7.next = 38;
                return this.where({
                  field: 'condition',
                  value: condition,
                  multiple: true
                });

              case 38:
                conditionPosts = _context7.sent;
                conditionPostsObject = (0, _arrayUtility.arrayToObject)(conditionPosts, 'id');
                filteredObject = (0, _arrayUtility.objectIntersection)(filteredObject, conditionPostsObject, searched);
                searched = true;

              case 42:
                if (!(isNegotiable !== null && isNegotiable !== undefined)) {
                  _context7.next = 49;
                  break;
                }

                _context7.next = 45;
                return this.where({
                  field: 'isNegotiable',
                  value: isNegotiable,
                  multiple: true
                });

              case 45:
                isNegotiablePosts = _context7.sent;
                isNegotiablePostsObject = (0, _arrayUtility.arrayToObject)(isNegotiablePosts, 'id');
                filteredObject = (0, _arrayUtility.objectIntersection)(filteredObject, isNegotiablePostsObject, searched);
                searched = true;

              case 49:
                if (!(location && radius)) {
                  _context7.next = 56;
                  break;
                }

                _context7.next = 52;
                return this.nearestPosts({
                  location: location,
                  radius: radius
                });

              case 52:
                nearestPosts = _context7.sent;
                nearestPostsObject = (0, _arrayUtility.arrayToObject)(nearestPosts, 'id');
                filteredObject = (0, _arrayUtility.objectIntersection)(filteredObject, nearestPostsObject, searched);
                searched = true;

              case 56:
                if (searched) {
                  _context7.next = 63;
                  break;
                }

                _context7.next = 59;
                return this.all({});

              case 59:
                _allPosts = _context7.sent;
                _allPostsData = _allPosts.data;
                _allPostsDataObject = (0, _arrayUtility.arrayToObject)(_allPostsData, 'id');
                filteredObject = (0, _arrayUtility.objectIntersection)(filteredObject, _allPostsDataObject, searched);

              case 63:
                ObjectToArray = (0, _arrayUtility.objectToArray)(filteredObject);
                filteredArray = ObjectToArray.filter(function (post) {
                  return post.status === 'publish';
                }); // Sorting Start

                if (sorting && Object.keys(sorting).length && sorting['field'] && sorting['type']) {
                  if (sorting['field'] === 'distance') {
                    if (location && radius) {
                      filteredArray = (0, _utility.sortByKey)(filteredArray, sorting['field'], sorting['type']);
                    }
                  } else {
                    filteredArray = (0, _utility.sortByKey)(filteredArray, sorting['field'], sorting['type']);
                  }
                } // Sorting End
                // Pagination Start


                paginatedData = (0, _utility.pagination)(filteredArray, page, limit); // Pagination End

                filterdData = {
                  data: paginatedData,
                  total: filteredArray.length
                };
                return _context7.abrupt("return", filterdData);

              case 69:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function search() {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }]);
  return Post;
}(_Base2["default"]);

var _default = Post;
exports["default"] = _default;