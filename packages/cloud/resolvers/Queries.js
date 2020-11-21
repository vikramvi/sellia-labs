"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryQuery = exports.PostQuery = exports.AuthorQuery = exports.Query = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Post = _interopRequireDefault(require("../lib/Post"));

var _Category = _interopRequireDefault(require("../lib/Category"));

var _Author = _interopRequireDefault(require("../lib/Author"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _post = new _Post["default"]();

var _category = new _Category["default"]();

var _author = new _Author["default"]();
/**
 * All the query throughout the App
 */


var Query = {
  posts: function posts(_, args) {
    return _post.allPost({
      limit: args.limit,
      page: args.page,
      status: args.status
    });
  },
  searchPosts: function () {
    var _searchPosts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _post.search({
                data: args.searchParams
              });

            case 2:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function searchPosts(_x, _x2) {
      return _searchPosts.apply(this, arguments);
    }

    return searchPosts;
  }(),
  nearest: function () {
    var _nearest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, args) {
      var radius, location, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              radius = args.radius ? args.radius : 5000;
              location = args.location ? args.location : {
                lat: 40.706877,
                lng: -74.011265
              };
              _context2.next = 4;
              return _post.nearest({
                limit: args.limit,
                page: args.page,
                radius: radius,
                location: location
              });

            case 4:
              data = _context2.sent;
              return _context2.abrupt("return", data);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function nearest(_x3, _x4) {
      return _nearest.apply(this, arguments);
    }

    return nearest;
  }(),
  post: function () {
    var _post2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, args) {
      var postData, distance, userLocation, postLocation;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!args.slug) {
                _context3.next = 15;
                break;
              }

              _context3.next = 3;
              return _post.where({
                value: args.slug,
                field: 'slug'
              });

            case 3:
              postData = _context3.sent;
              distance = false;

              if (!(args.lat && args.lng && postData && postData.formattedLocation && postData.formattedLocation.lat && postData.formattedLocation.lng)) {
                _context3.next = 11;
                break;
              }

              userLocation = {
                lat: args.lat,
                lng: args.lng
              };
              postLocation = {
                lat: postData.formattedLocation.lat,
                lng: postData.formattedLocation.lng
              };
              _context3.next = 10;
              return _post.userDistance({
                userLocation: userLocation,
                postLocation: postLocation
              });

            case 10:
              distance = _context3.sent;

            case 11:
              if (distance) {
                postData = _objectSpread(_objectSpread({}, postData), {}, {
                  distance: distance
                });
              }

              return _context3.abrupt("return", postData);

            case 15:
              if (!args.id) {
                _context3.next = 17;
                break;
              }

              return _context3.abrupt("return", _post.byId({
                id: args.id,
                lat: args.lat,
                lng: args.lng
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function post(_x5, _x6) {
      return _post2.apply(this, arguments);
    }

    return post;
  }(),
  authors: function authors(_, args) {
    return _author.all({
      limit: args.limit,
      page: args.page
    });
  },
  author: function author(_, args) {
    if (args.username) {
      return _author.where({
        value: args.username,
        field: 'username'
      });
    } else if (args.id) {
      return _author.byId({
        id: args.id
      });
    }
  },
  categories: function categories(_, args) {
    return _category.all({
      limit: args.limit,
      page: args.page
    });
  },
  category: function category(_, args) {
    if (args.slug) {
      return _category.where({
        value: args.slug,
        field: 'slug'
      });
    } else if (args.id) {
      return _category.byId({
        id: args.id
      });
    }
  }
};
exports.Query = Query;
var AuthorQuery = {
  posts: function posts(authorData, args) {
    return _author.posts({
      id: authorData.id,
      limit: args.limit,
      page: args.page
    });
  },
  favourite: function favourite(authorData, args) {
    return _author.favourite({
      id: authorData.id,
      limit: args.limit,
      page: args.page
    });
  },
  draft: function draft(authorData, args) {
    return _author.posts({
      id: authorData.id,
      status: 'draft',
      limit: args.limit,
      page: args.page
    });
  }
};
exports.AuthorQuery = AuthorQuery;
var PostQuery = {
  author: function author(postData) {
    return _author.byId({
      id: postData.authorId
    });
  },
  related: function related(postData, args) {
    return _post.relatedPosts({
      value: postData.slug,
      field: 'slug'
    });
  }
};
exports.PostQuery = PostQuery;
var CategoryQuery = {
  posts: function posts(categoryData, args) {
    return _category.posts({
      value: categoryData.slug,
      limit: args.limit,
      page: args.page,
      field: 'slug'
    });
  }
};
exports.CategoryQuery = CategoryQuery;