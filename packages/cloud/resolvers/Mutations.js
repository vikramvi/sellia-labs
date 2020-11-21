"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Post = _interopRequireDefault(require("../lib/Post"));

var _Author = _interopRequireDefault(require("../lib/Author"));

var _Category = _interopRequireDefault(require("../lib/Category"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var post = new _Post["default"]();
var category = new _Category["default"]();
var author = new _Author["default"]();
/**
 * All the mutation throughout the App
 */

var Mutation = {
  /**
   * Mutation for adding a new post to Firestore
   */
  addPost: function () {
    var _addPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref) {
      var input, postData, allPost, postsData, postSlug, index, slug, uniqueIdentifier, data, favoritedBy, _data, image, price, _slug, title, id, favoritePost, geopointLocation, _data2, categories, _image, _price, _slug2, _title, _id, status, condition, formattedLocation, isNegotiable, geohash, createdAt, categoryPost;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              input = _ref.input;
              postData = {
                authorId: input.authorId,
                title: input.title,
                slug: input.slug,
                status: input.status,
                content: input.content,
                image: input.image,
                categories: (0, _toConsumableArray2["default"])(input.categories),
                price: input.price,
                isNegotiable: input.isNegotiable,
                condition: input.condition,
                gallery: input.gallery,
                location: input.location ? input.location : null,
                formattedLocation: input.location ? input.location : null,
                contactNumber: input.contactNumber
              }; // post slug duplication check start

              _context2.next = 4;
              return post.all();

            case 4:
              allPost = _context2.sent;
              postsData = allPost && allPost.data && allPost.data.length ? allPost.data : [];
              postSlug = input.slug;
              index = -1;

              if (postsData && postsData.length) {
                index = postsData.findIndex(function (post) {
                  return post.slug === postSlug;
                });
              }

              if (index !== -1) {
                uniqueIdentifier = Date.now();
                slug = "".concat(postsData[index].slug, "-").concat(uniqueIdentifier);
              } else {
                slug = postSlug;
              } // post slug duplication check end


              if (!(input && input.id)) {
                _context2.next = 17;
                break;
              }

              _context2.next = 13;
              return post.update({
                data: _objectSpread({}, postData),
                id: input.id
              });

            case 13:
              data = _context2.sent;

              // Start updating the updated post data on the user favorite post
              if (data && data.favoritedBy && data.favoritedBy.length) {
                favoritedBy = data.favoritedBy;
                _data = data, image = _data.image, price = _data.price, _slug = _data.slug, title = _data.title, id = _data.id;
                favoritePost = {
                  image: image,
                  price: price,
                  slug: _slug,
                  title: title,
                  id: id
                };
                favoritedBy.forEach(function (userId) {
                  author.update({
                    data: {
                      favorite: favoritePost
                    },
                    id: userId
                  });
                });
              } // End updating the updated post data on the user favorite post


              _context2.next = 20;
              break;

            case 17:
              _context2.next = 19;
              return post.add({
                data: _objectSpread(_objectSpread({}, postData), {}, {
                  slug: slug
                })
              });

            case 19:
              data = _context2.sent;

            case 20:
              geopointLocation = data.location ? data.location : null; // const geopointHash = data.location ? data.location : null;
              // formated location for the client

              data = _objectSpread(_objectSpread({}, data), {}, {
                location: postData.location ? postData.location : null
              }); // add the same post into the assinged category

              if (input && input.categories) {
                _data2 = data, categories = _data2.categories, _image = _data2.image, _price = _data2.price, _slug2 = _data2.slug, _title = _data2.title, _id = _data2.id, status = _data2.status, condition = _data2.condition, formattedLocation = _data2.formattedLocation, isNegotiable = _data2.isNegotiable, geohash = _data2.geohash, createdAt = _data2.createdAt;
                categoryPost = {
                  image: _image,
                  price: _price,
                  slug: _slug2,
                  title: _title,
                  id: _id,
                  status: status,
                  location: geopointLocation,
                  condition: condition,
                  formattedLocation: formattedLocation,
                  isNegotiable: isNegotiable,
                  geohash: geohash,
                  createdAt: createdAt
                };
                categories.forEach( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(categoryItem) {
                    var categoryId, categoryById, postId, categoryPosts, _index;

                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            categoryId = categoryItem.id;
                            _context.next = 3;
                            return category.byId({
                              id: categoryId
                            });

                          case 3:
                            categoryById = _context.sent;

                            if (categoryById.hasOwnProperty('posts')) {
                              if (input && input.id) {
                                // updated post will be updated into the category
                                postId = input.id;
                                categoryPosts = categoryById['posts'];
                                _index = categoryPosts.findIndex(function (post) {
                                  return post.id === postId;
                                });

                                if (_index !== -1) {
                                  // if the post id avaialable in the category
                                  categoryById['posts'][_index] = categoryPost;
                                } else {
                                  // if the post id is not available in the category
                                  categoryById['posts'].push(categoryPost);
                                }
                              } else {
                                // push the new post into the category
                                categoryById['posts'].push(categoryPost);
                              }
                            } else {
                              // if category doesn't have any posts in it
                              categoryById['posts'] = {};
                              categoryById['posts'].push(categoryPost);
                            }

                            _context.next = 7;
                            return category.update({
                              id: categoryId,
                              data: categoryById
                            });

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              }

              return _context2.abrupt("return", data);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function addPost(_x, _x2) {
      return _addPost.apply(this, arguments);
    }

    return addPost;
  }(),

  /**
   * Add Category mutation
   */
  addCategory: function () {
    var _addCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
      var input, categoryData, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              input = _ref3.input;
              categoryData = {
                slug: input.slug,
                name: input.name,
                image: input.image
              };

              if (!(input && input.id)) {
                _context3.next = 8;
                break;
              }

              _context3.next = 5;
              return category.update({
                data: _objectSpread({}, categoryData),
                id: input.id
              });

            case 5:
              data = _context3.sent;
              _context3.next = 11;
              break;

            case 8:
              _context3.next = 10;
              return category.add({
                data: _objectSpread({}, categoryData)
              });

            case 10:
              data = _context3.sent;

            case 11:
              return _context3.abrupt("return", data);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function addCategory(_x4, _x5) {
      return _addCategory.apply(this, arguments);
    }

    return addCategory;
  }(),

  /**
   * Add or edit Author mutation
   */
  addAuthor: function () {
    var _addAuthor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_, _ref4) {
      var input, authorData, data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              input = _ref4.input;
              authorData = {
                email: input.email,
                username: input.username,
                website: input.website,
                address: input.address,
                name: input.name,
                image: input.image,
                mobile: input.mobile
              };

              if (!(input && input.id)) {
                _context4.next = 8;
                break;
              }

              _context4.next = 5;
              return author.update({
                data: _objectSpread({}, authorData),
                id: input.id
              });

            case 5:
              data = _context4.sent;
              _context4.next = 11;
              break;

            case 8:
              _context4.next = 10;
              return author.add({
                data: _objectSpread({}, authorData)
              });

            case 10:
              data = _context4.sent;

            case 11:
              return _context4.abrupt("return", data);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function addAuthor(_x6, _x7) {
      return _addAuthor.apply(this, arguments);
    }

    return addAuthor;
  }(),

  /**
   * Logout mutation
   */
  logout: function logout(_, _ref5, _ref6) {
    var input = _ref5.input;
    var req = _ref6.req;
    return {
      userId: '',
      email: '',
      error: false
    };
  },

  /**
   * Login Mutation
   */
  login: function () {
    var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_, _ref7, _ref8) {
      var input, req, firebaseAdmin, _yield$author$verifyT, userId, email, error;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              input = _ref7.input;
              req = _ref8.req, firebaseAdmin = _ref8.firebaseAdmin;
              _context5.next = 4;
              return author.verifyToken({
                input: input,
                firebaseAdmin: firebaseAdmin
              });

            case 4:
              _yield$author$verifyT = _context5.sent;
              userId = _yield$author$verifyT.userId;
              email = _yield$author$verifyT.email;
              error = _yield$author$verifyT.error;
              return _context5.abrupt("return", {
                userId: userId,
                email: email,
                error: error
              });

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function login(_x8, _x9, _x10) {
      return _login.apply(this, arguments);
    }

    return login;
  }(),

  /**
   * Registration Mutation
   */
  register: function () {
    var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_, _ref9, _ref10) {
      var input, firebaseAdmin, _yield$author$verifyT2, userId, email, error;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              input = _ref9.input;
              firebaseAdmin = _ref10.firebaseAdmin;
              _context6.next = 4;
              return author.verifyToken({
                input: input,
                firebaseAdmin: firebaseAdmin
              });

            case 4:
              _yield$author$verifyT2 = _context6.sent;
              userId = _yield$author$verifyT2.userId;
              email = _yield$author$verifyT2.email;
              error = _yield$author$verifyT2.error;

              if (!userId) {
                _context6.next = 11;
                break;
              }

              _context6.next = 11;
              return author.set({
                data: {
                  id: userId,
                  email: email ? email : '',
                  mobile: input.mobile ? input.mobile : []
                },
                id: userId
              });

            case 11:
              return _context6.abrupt("return", {
                userId: userId,
                email: email,
                error: error
              });

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function register(_x11, _x12, _x13) {
      return _register.apply(this, arguments);
    }

    return register;
  }(),

  /**
   * Mutation for Handling user favorite posts
   */
  handleFav: function () {
    var _handleFav = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_, _ref11) {
      var input, userId, postId, postById, userById, postFavoritedBy, index, image, price, slug, title, id, favouritePost, userPost, _index2, userData, userFavoriteData;

      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              input = _ref11.input;
              userId = input.id;
              postId = input.postId;
              _context7.next = 5;
              return post.byId({
                id: postId
              });

            case 5:
              postById = _context7.sent;
              _context7.next = 8;
              return author.byId({
                id: userId
              });

            case 8:
              userById = _context7.sent;
              postFavoritedBy = [];

              if (postById && postById.favouritedBy && postById.favouritedBy.length) {
                // if favouritedBy property available with some userId
                postFavoritedBy = postById.favouritedBy;
                index = postFavoritedBy.indexOf(userId);

                if (index !== -1) {
                  //remove favourited user from the post
                  postFavoritedBy.splice(index, 1);
                } else {
                  // add favourited user in the post
                  postFavoritedBy.push(userId);
                }
              } else {
                // if favouritedBy property not available or return an empty array
                postFavoritedBy.push(userId);
              }

              _context7.next = 13;
              return post.update({
                data: _objectSpread(_objectSpread({}, postById), {}, {
                  favouritedBy: postFavoritedBy
                }),
                id: postId
              });

            case 13:
              // End add or remove userId from post.favouritedBy array
              // Start User Favorite add or remove
              image = postById.image, price = postById.price, slug = postById.slug, title = postById.title, id = postById.id;
              favouritePost = {
                image: image,
                price: price,
                slug: slug,
                title: title,
                id: id
              };
              userPost = [];

              if (userById && userById.favourite && userById.favourite.length) {
                userPost = userById.favourite;
                _index2 = userPost.findIndex(function (post) {
                  return post.id === postId;
                });

                if (_index2 !== -1) {
                  //remove post from the user, favourite property
                  userPost.splice(_index2, 1);
                } else {
                  // add post into the user, favourite property
                  userPost.push(favouritePost);
                }
              } else {
                // if favourite property not available in user or return an empty array
                userPost.push(favouritePost);
              }

              _context7.next = 19;
              return author.update({
                data: _objectSpread(_objectSpread({}, userById), {}, {
                  favourite: userPost
                }),
                id: userId
              });

            case 19:
              userData = _context7.sent;
              userFavoriteData = [];

              if (userData && userData.favourite && userData.favourite.length) {
                userFavoriteData = userData.favourite;
              } // End User Favorite add or remove


              return _context7.abrupt("return", {
                data: userFavoriteData
              });

            case 23:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function handleFav(_x14, _x15) {
      return _handleFav.apply(this, arguments);
    }

    return handleFav;
  }()
};
exports.Mutation = Mutation;