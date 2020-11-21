module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/profile/[username].js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!**************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!**********************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!******************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!**************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "core-js/library/fn/set");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!**********************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!***************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!******************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!********************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/@headless/core/graphql/Mutations/Author.js":
/*!*******************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/Author.js ***!
  \*******************************************************************************************************/
/*! exports provided: UPDATE_AUTHOR, HANDLE_FAV, GET_VERIFICATION_CODE, VERIFY_CODE, LOGIN, LOGOUT, REGISTER, RESET_PASS, FOREGET_PASS_MAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AUTHOR", function() { return UPDATE_AUTHOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_FAV", function() { return HANDLE_FAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_VERIFICATION_CODE", function() { return GET_VERIFICATION_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_CODE", function() { return VERIFY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASS", function() { return RESET_PASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOREGET_PASS_MAIL", function() { return FOREGET_PASS_MAIL; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_AUTHOR = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($author: authorInput!) {
    addAuthor(input: $author) {
      id
      name
      address
      website
      email
      mobile {
        number
      }
      username
      image {
        url
        largeUrl
      }
    }
  }
`;
const HANDLE_FAV = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($fav: adFavInput!) {
    handleFav(input: $fav) {
      data {
        id
      }
    }
  }
`;
const GET_VERIFICATION_CODE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation GetVerificationCode($mobileNumber: InputMobileNumber!) {
    getVerificationCode(input: $mobileNumber) {
      id
      code
    }
  }
`;
const VERIFY_CODE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation VerifyCode($verify: InputVerifyNumber!) {
    verifyCode(input: $verify) {
      token
    }
  }
`;
const LOGIN = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation Login($user: RegisterInput!) {
    login(input: $user) {
      userId
      email
      error
    }
  }
`;
const LOGOUT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation Logout($user: RegisterInput!) {
    logout(input: $user) {
      userId
      email
      error
    }
  }
`;
const REGISTER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation Register($user: RegisterInput!) {
    register(input: $user) {
      userId
      email
      error
    }
  }
`;
const RESET_PASS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation ResetPass($resetPass: ResetPassInput!) {
    resetPass(input: $resetPass) {
      userId
      token
    }
  }
`;
const FOREGET_PASS_MAIL = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation ForgetPassMail($forgetPassMail: ForgetPassMailInput!) {
    forgetPassMail(input: $forgetPassMail) {
      message
    }
  }
`;

/***/ }),

/***/ "../../node_modules/@headless/core/graphql/Mutations/Image.js":
/*!******************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/Image.js ***!
  \******************************************************************************************************/
/*! exports provided: UPLOAD_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE", function() { return UPLOAD_IMAGE; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const UPLOAD_IMAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UploadImage($image: Upload!) {
    addImage(input: $image) {
      id
      url
    }
  }
`;

/***/ }),

/***/ "../../node_modules/@headless/core/graphql/Mutations/Post.js":
/*!*****************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/Post.js ***!
  \*****************************************************************************************************/
/*! exports provided: ADD_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ADD_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation AddPost($post: postInput!) {
    addPost(input: $post) {
      id
      createdAt
      title
      content
      contactNumber
      status
      slug
      price
      location {
        lat
        lng
        formattedAddress
      }
      categories {
        id
      }
      image {
        url
        largeUrl
      }
      gallery {
        url
        largeUrl
      }
      isNegotiable
      condition
    }
  }
`;

/***/ }),

/***/ "../../node_modules/@headless/core/graphql/Mutations/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/index.js ***!
  \******************************************************************************************************/
/*! exports provided: ADD_POST, UPDATE_AUTHOR, UPLOAD_IMAGE, GET_VERIFICATION_CODE, VERIFY_CODE, LOGIN, LOGOUT, REGISTER, RESET_PASS, FOREGET_PASS_MAIL, HANDLE_FAV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ "../../node_modules/@headless/core/graphql/Mutations/Post.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return _Post__WEBPACK_IMPORTED_MODULE_0__["ADD_POST"]; });

/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Author */ "../../node_modules/@headless/core/graphql/Mutations/Author.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_AUTHOR", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["UPDATE_AUTHOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_VERIFICATION_CODE", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["GET_VERIFICATION_CODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERIFY_CODE", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["VERIFY_CODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["REGISTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESET_PASS", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["RESET_PASS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOREGET_PASS_MAIL", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["FOREGET_PASS_MAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_FAV", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__["HANDLE_FAV"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "../../node_modules/@headless/core/graphql/Mutations/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE", function() { return _Image__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE"]; });






/***/ }),

/***/ "../../node_modules/@headless/core/graphql/Profile.query.js":
/*!****************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Profile.query.js ***!
  \****************************************************************************************************/
/*! exports provided: GET_PROFILE_INFO, GET_AUTHOR_INFO, GET_PUBLISHED_POST, GET_FAVOURITE_POST, GET_DRAFT_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE_INFO", function() { return GET_PROFILE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTHOR_INFO", function() { return GET_AUTHOR_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PUBLISHED_POST", function() { return GET_PUBLISHED_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FAVOURITE_POST", function() { return GET_FAVOURITE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DRAFT_POST", function() { return GET_DRAFT_POST; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const AuthorPostsFragment = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  fragment AuthorPostsQuery on Post {
    id
    slug
    image {
      url
      largeUrl
    }
    title
    price
  }
`;
const GET_PROFILE_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Author($USERNAME: ID!, $LIMIT: Int) {
    author(id: $USERNAME) {
      id
      name
      username
      address
      mobile {
        number
      }
      website
      image {
        url
        largeUrl
      }
      posts(limit: $LIMIT) {
        total
      }
      favourite(limit: $LIMIT) {
        total
      }
      draft(limit: $LIMIT) {
        total
      }
    }
  }
`;
const GET_AUTHOR_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Author($USERNAME: ID!) {
    author(id: $USERNAME) {
      id
      name
      image {
        url
        largeUrl
      }
    }
  }
`;
const GET_PUBLISHED_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Author($USERNAME: ID!, $LIMIT: Int, $page: Int) {
    author(id: $USERNAME) {
      id
      username
      posts(limit: $LIMIT, page: $page) {
        data {
          ...AuthorPostsQuery
        }
        total
      }
    }
  }
  ${AuthorPostsFragment}
`;
const GET_FAVOURITE_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Author($USERNAME: ID!, $LIMIT: Int, $page: Int) {
    author(id: $USERNAME) {
      id
      favourite(limit: $LIMIT, page: $page) {
        data {
          ...AuthorPostsQuery
        }
        total
      }
    }
  }
  ${AuthorPostsFragment}
`;
const GET_DRAFT_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Author($USERNAME: ID!, $LIMIT: Int, $page: Int) {
    author(id: $USERNAME) {
      id
      draft(limit: $LIMIT, page: $page) {
        data {
          ...AuthorPostsQuery
        }
        total
      }
    }
  }
  ${AuthorPostsFragment}
`;

/***/ }),

/***/ "../../node_modules/@headless/core/navigation/constant.js":
/*!**************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/navigation/constant.js ***!
  \**************************************************************************************************/
/*! exports provided: HOME_PAGE, HOME_VIEW_PAGE, SEARCH_PAGE, NEAREST_POST_PAGE, RECENT_POST_PAGE, FAVOURITE_PAGE, PROFILE_PAGE, USER_FAVOURITE_POST, USER_DRAFT_POST, CATEGORIES_PAGE, SINGLE_CATEGORY_PAGE, SINGLE_POST_PAGE, ADMOB_VIEW, SIGNIN_PAGE, SIGNUP_PAGE, SIGNUP_MOBILE_PAGE, FORGET_PASSWORD_PAGE, RESET_PASSWORD_PAGE, ADD_POST, SEARCH_ARCHIVE_PAGE, ACCOUNT_SETTING_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_VIEW_PAGE", function() { return HOME_VIEW_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PAGE", function() { return SEARCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEAREST_POST_PAGE", function() { return NEAREST_POST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECENT_POST_PAGE", function() { return RECENT_POST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAVOURITE_PAGE", function() { return FAVOURITE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_PAGE", function() { return PROFILE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_FAVOURITE_POST", function() { return USER_FAVOURITE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DRAFT_POST", function() { return USER_DRAFT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES_PAGE", function() { return CATEGORIES_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_CATEGORY_PAGE", function() { return SINGLE_CATEGORY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_POST_PAGE", function() { return SINGLE_POST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMOB_VIEW", function() { return ADMOB_VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_PAGE", function() { return SIGNIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_PAGE", function() { return SIGNUP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_MOBILE_PAGE", function() { return SIGNUP_MOBILE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_PASSWORD_PAGE", function() { return FORGET_PASSWORD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD_PAGE", function() { return RESET_PASSWORD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ARCHIVE_PAGE", function() { return SEARCH_ARCHIVE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_SETTING_PAGE", function() { return ACCOUNT_SETTING_PAGE; });
const HOME_PAGE = '/';
const HOME_VIEW_PAGE = 'home';
const SEARCH_PAGE = '/search';
const NEAREST_POST_PAGE = '/nearest-posts';
const RECENT_POST_PAGE = '/recent-posts';
const FAVOURITE_PAGE = '/favourites';
const PROFILE_PAGE = '/profile';
const USER_FAVOURITE_POST = 'favourite-post';
const USER_DRAFT_POST = '/draft-post';
const CATEGORIES_PAGE = '/categories';
const SINGLE_CATEGORY_PAGE = '/category';
const SINGLE_POST_PAGE = '/post';
const ADMOB_VIEW = 'AdmobView';
const SIGNIN_PAGE = '/signin';
const SIGNUP_PAGE = '/signup';
const SIGNUP_MOBILE_PAGE = 'SignupMobilePage';
const FORGET_PASSWORD_PAGE = '/forget-password';
const RESET_PASSWORD_PAGE = '/reset-password';
const ADD_POST = '/add-post';
const SEARCH_ARCHIVE_PAGE = 'SearchArchivePage';
const ACCOUNT_SETTING_PAGE = '/account-settings';

/***/ }),

/***/ "../../node_modules/@headless/core/static/images/headless-logo.svg":
/*!***********************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/headless-logo.svg ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4NCiAgPGcgaWQ9Ikdyb3VwXzM3NCIgZGF0YS1uYW1lPSJHcm91cCAzNzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjggLTEyOSkiPg0KICAgIDxnIGlkPSJHcm91cF8zNzMiIGRhdGEtbmFtZT0iR3JvdXAgMzczIj4NCiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMzA3IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAzMDciIHdpZHRoPSIyNCIgaGVpZ2h0PSI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjggMTQ3KSIgZmlsbD0iIzI5MjkyOSIvPg0KICAgICAgPGcgaWQ9IlJlY3RhbmdsZV8zMDYiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDMwNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI4IDEyOSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5MjkyOSIgc3Ryb2tlLXdpZHRoPSI0Ij4NCiAgICAgICAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBzdHJva2U9Im5vbmUiLz4NCiAgICAgICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSJub25lIi8+DQogICAgICA8L2c+DQogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzMwOCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzA4IiB3aWR0aD0iNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQwIDEzNykiIGZpbGw9IiMyOTI5MjkiLz4NCiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMzA5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAzMDkiIHdpZHRoPSI0IiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTIgMTM3KSIgZmlsbD0iIzI5MjkyOSIvPg0KICAgIDwvZz4NCiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzMxMCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzEwIiB3aWR0aD0iMjAiIGhlaWdodD0iNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMyIDE0NykiIGZpbGw9IiNmZjU4NTgiLz4NCiAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/@headless/core/static/images/no-result.svg":
/*!*******************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/no-result.svg ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/no-result-ecb0d0c6f7be91ec3ed1cb0e8d181db5.svg";

/***/ }),

/***/ "../../node_modules/@headless/core/static/images/oops.svg":
/*!**************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/oops.svg ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTcwLjMzMyIgaGVpZ2h0PSI1NzAiIHZpZXdCb3g9IjAgMCAxMTcwLjMzMyA1NzAiPgogIDxnIGlkPSJHcm91cF8yMzAiIGRhdGEtbmFtZT0iR3JvdXAgMjMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzg4IC04OTkpIj4KICAgIDxnIGlkPSJHcm91cF8yMTkiIGRhdGEtbmFtZT0iR3JvdXAgMjE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDcwMCkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEiIHdpZHRoPSIxMTcwIiBoZWlnaHQ9IjU3MCIgcng9IjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4OCAxOTkpIiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMjI5IiBkYXRhLW5hbWU9Ikdyb3VwIDIyOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODI1IDc0OSkiPgogICAgICA8ZyBpZD0iX8OOw5PDiF8xXzFfIiBkYXRhLW5hbWU9IuKAlMOOw5PDiF8xXzFfIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTUwKSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTcyIiBkYXRhLW5hbWU9IlBhdGggMTcyIiBkPSJNMjYzLjMzMiw3MTAuMzM3Yy0xMy40MTMtMi45LTE3NC41NzEtMjkuMDM2LTE2Mi43MDgtMjIxLjc4NHMyNi43NTMtMjUwLjcxNSw4OS40MDktMjcxLjkyMlM0MDUsOTUuMDcyLDUyNC41MSwxOTAuNDlzMjQ4LjQ4MSwxODEsMTk3LjMsMzMzLjM1LTU5LjU1NywyMDMuMTc1LTE5My4wODQsMTk1LjRTMzI3LjExMyw3MjQuMTMzLDI2My4zMzIsNzEwLjMzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDAgLTE1MCkiIGZpbGw9IiNmOWY5ZjkiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iX8OOw5PDiF8yIiBkYXRhLW5hbWU9IuKAlMOOw5PDiF8yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjQuMTI2IDI0MC43MDQpIj4KICAgICAgICA8ZyBpZD0iR3JvdXBfMjI4IiBkYXRhLW5hbWU9Ikdyb3VwIDIyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CiAgICAgICAgICA8ZyBpZD0iR3JvdXBfMjIwIiBkYXRhLW5hbWU9Ikdyb3VwIDIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wOTkgMjYuNzkyKSI+CiAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MyIgZGF0YS1uYW1lPSJQYXRoIDE3MyIgZD0iTTY2NC45MzEsNzM5LjA1OWExNC41OTQsMTQuNTk0LDAsMCwwLDEuODg3LTIwLjU1NEw1NTYuNDQzLDU4NS44MThhMTQ1LjIyNiwxNDUuMjI2LDAsMCwwLDQzLjUtOTEuMDcxYzcuMzUzLTgwLjEtNTEuODM1LTE1MS4yNTYtMTMxLjkzOS0xNTguNjA5UzMxNi43NDYsMzg3Ljk3MiwzMDkuMzkzLDQ2OC4wNzZzNTEuODM1LDE1MS4yNTcsMTMxLjkzOSwxNTguNjFhMTQ1LjA1OCwxNDUuMDU4LDAsMCwwLDg1LjE2Mi0xOC4zNjRsNi45LTQuNTY0TDY0NC4zNzcsNzM3LjE3MkExNC41OTQsMTQuNTk0LDAsMCwwLDY2NC45MzEsNzM5LjA1OVpNNTY4LjU1Niw0OTEuODY2QTExNC4zNjgsMTE0LjM2OCwwLDEsMSw0NjUuMTIxLDM2Ny41MjIsMTE0LjUsMTE0LjUsMCwwLDEsNTY4LjU1Niw0OTEuODY2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwOC43NzUgLTMzNS41MTkpIiBmaWxsPSIjZWZlZmVmIi8+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8ZyBpZD0iR3JvdXBfMjIxIiBkYXRhLW5hbWU9Ikdyb3VwIDIyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi41NzIgNTcuNjU2KSI+CiAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzE3NCIgZGF0YS1uYW1lPSJQYXRoIDE3NCIgZD0iTTMyNS4yMTQsNDU2LjJhMjQyLjA3OSwyNDIuMDc5LDAsMCwwLTE0LjczNSwzOC40MDUsMTE5Ljc1NCwxMTkuNzU0LDAsMCwwLTMuOTk0LDM3LjI3OSwxNDUuNywxNDUuNywwLDAsMCwyMC4wMDYsNjcuNzI2LDE0Ny42LDE0Ny42LDAsMCwwLDExNS4yNDcsNzEuODc4YzI5Ljk2NiwyLjI4NCw2Mi43NjEtNC4zOTQsODguMDU5LTIxLjEyNCwxLjI4Mi0uODQ4LTEuNzY2LS41NDUtMi4zNTktLjE1My0yMy40NjYsMTUuNTE4LTUzLjY0NiwyMS44MS04MS40NjQsMjAuMTJhMTQ1LDE0NSwwLDAsMS02Ny4zODMtMjEuMzc1Yy0zOC42MzctMjMuOTQtNjQuNTU4LTY1LjYzNy02OC42LTExMC45NDUtMS4yMjItMTMuNzE5LS42OTEtMjcuNjI2LDIuNzI3LTQxLDMuNjQyLTE0LjI1NCw5LjIzNC0yOC4wNDIsMTUuNTEzLTQxLjMyMy4yNTMtLjUzNS0yLjYzOC0uMy0zLjAyMy41MTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA2LjM2NSAtNDEwLjMzOSkiIGZpbGw9IiM2YTc5YTgiLz4KICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTc1IiBkYXRhLW5hbWU9IlBhdGggMTc1IiBkPSJNNjY1Ljk2OCw3NjQuOTg1bDQzLjEsNTEuODExLDU5LjQ1LDcxLjQ2OGMxLjc2NCwyLjEyLDMuNDgzLDQuMjksNS4zLDYuMzY4LDcuNTM3LDguNjMsMjEuNzQxLDYuNDU2LDI3LjIxMS0zLjMzMi4yNi0uNDY1LTIuNTc3LS4yODQtMy4wMjMuNTE1LTUuMTIxLDkuMTY0LTE1LjczNyw4LjM4Ny0yMS45MTEsMS4wMy0xLjk3Mi0yLjM0OS0zLjkyMy00LjcxNi01Ljg4NC03LjA3NGwtMjQuNTg5LTI5LjU2TDY4My42MzIsNzgxLjdsLTE0Ljc4OC0xNy43NzhjLS41LS42LTMuMzk0LjQ0My0yLjg3NSwxLjA2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MzguMTk3IC01MjMuMzk3KSIgZmlsbD0iIzZhNzlhOCIvPgogICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xNzYiIGRhdGEtbmFtZT0iUGF0aCAxNzYiIGQ9Ik00NDUuMyw0MDEuODFhMTEyLjQzOCwxMTIuNDM4LDAsMCwxLDEwNS40NC01LjYxMUExMTQuMjY1LDExNC4yNjUsMCwwLDEsNjE2LjEsNTEwLjE0NGMtLjA0Mi40OCwyLjk3NC4xNDEsMy4wNTktLjgyYTExNC44MzQsMTE0LjgzNCwwLDAsMC0xMTUuMy0xMjUuMDcxLDExOC45NzcsMTE4Ljk3NywwLDAsMC02MC45MjQsMTcuNGMtMS4zLjc4OCwxLjc1Ny41MTgsMi4zNTkuMTUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM1Ni4zMjUgLTM4NC4yNTEpIiBmaWxsPSIjNmE3OWE4Ii8+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8ZyBpZD0iR3JvdXBfMjIzIiBkYXRhLW5hbWU9Ikdyb3VwIDIyMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMzIgMTQuODE4KSI+CiAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzE3NyIgZGF0YS1uYW1lPSJQYXRoIDE3NyIgZD0iTTY3Ny4xNjksNzIxLjc4MWExNC42LDE0LjYsMCwwLDAsMS44ODctMjAuNTU1TDU2OC42OCw1NjguNTRhMTQ1LjIyNSwxNDUuMjI1LDAsMCwwLDQzLjUtOTEuMDcxYzcuMzUzLTgwLjEtNTEuODM1LTE1MS4yNTctMTMxLjkzOS0xNTguNjA5UzMyOC45ODMsMzcwLjY5MywzMjEuNjMsNDUwLjhzNTEuODM1LDE1MS4yNTcsMTMxLjkzOSwxNTguNjFhMTQ1LjA2MiwxNDUuMDYyLDAsMCwwLDg1LjE2Mi0xOC4zNjRsNi45LTQuNTY0TDY1Ni42MTQsNzE5Ljg5NEExNC42LDE0LjYsMCwwLDAsNjc3LjE2OSw3MjEuNzgxWk01ODAuNzkzLDQ3NC41ODdBMTE0LjM2OCwxMTQuMzY4LDAsMSwxLDQ3Ny4zNTgsMzUwLjI0MywxMTQuNSwxMTQuNSwwLDAsMSw1ODAuNzkzLDQ3NC41ODdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzE5LjQ4MyAtMzE3LjIxKSIgZmlsbD0iI2ZmZiIvPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXBfMjIyIiBkYXRhLW5hbWU9Ikdyb3VwIDIyMiI+CiAgICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTc4IiBkYXRhLW5hbWU9IlBhdGggMTc4IiBkPSJNNjc3LjU0Niw3MjEuNTY5YzYuNjg5LTUuOTU1LDcuMTMzLTE1LjM0MSwxLjUzOC0yMi4xODItMS44MjctMi4yMzQtMy42OTEtNC40MzctNS41MzYtNi42NTVsLTI1LjAxMy0zMC4wNy02My45NDUtNzYuODctMTUuMzg4LTE4LjUtLjE0NCwxLjAzNGExNDguMTM5LDE0OC4xMzksMCwxLDAtMzMuODI1LDI0LjcyOWMzLjY2MS0xLjk1Nyw3LjA0OC00LjI3LDEwLjUwOC02LjU1OGwtMi40LjAzMiw0Mi42NjUsNTEuMjg5LDYxLjExNSw3My40NjhjMi4yNTcsMi43MTMsNC40OTQsNS40NDMsNi43NzIsOC4xNGExNi43LDE2LjcsMCwwLDAsMjMuMzg1LDIuMzczYzEuNjMzLTEuMjc4LS44NjktMi4xMDgtMS45ODUtMS4yMzUtNi41MzYsNS4xMTQtMTQuMiwyLjgzMy0xOS4xMTItMy4wNjlsLTYuMzUyLTcuNjM1LTI1LjczOS0zMC45NDEtNjIuOTUzLTc1LjY3OS0xNC45ODEtMTguMDA5Yy0uNTY2LS42ODEtMS43ODYtLjM3NC0yLjQuMDMyLTUwLjgxLDMzLjYtMTE5LjM3OSwyOS41NDEtMTY2Ljg5NC04LjA3N0MzMzIuNiw1NDIuMTQ0LDMxMi40LDQ4My4xMTEsMzI1Ljk0Nyw0MjguM2MxMy40MDYtNTQuMjQ2LDU4LjY3MS05Ny4wNDMsMTEzLjYyOC0xMDcuMjUxLDU2LjAzNy0xMC40MDksMTE0LjA1OCwxNC40NjksMTQ1LjksNjEuNTM3YTE0NC44MiwxNDQuODIsMCwwLDEtMy40OCwxNjcuMzA2LDE0OS41NDUsMTQ5LjU0NSwwLDAsMS0xNS40NTgsMTcuNjYuNzguNzgsMCwwLDAtLjE0NCwxLjAzNGw0MC4xNzgsNDguMyw2MC40MjQsNzIuNjM4LDguMjkyLDkuOTY4Yy40NzcuNTczLjk3MSwxLjEzNiwxLjQzMiwxLjcyMWExNC4wNTQsMTQuMDU0LDAsMCwxLTEuNjkzLDE5LjU4QzY3My42MzgsNzIyLjAyOSw2NzYuNjI2LDcyMi4zODgsNjc3LjU0Niw3MjEuNTY5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMxOC41OTggLTMxNi42MTMpIiBmaWxsPSIjNmE3OWE4Ii8+CiAgICAgICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMTc5IiBkYXRhLW5hbWU9IlBhdGggMTc5IiBkPSJNNTk2LjcxMiw0OTIuNDc2Yy00LjQ2Nyw0Ni42ODUtMzcuOTIsODYuOTg4LTgzLjQzMSw5OS4wNDItNDUuOTQ5LDEyLjE2OS05NS41NTItNi45NzktMTIyLjE1MS00Ni4xNjRTMzY1LjM1MSw0NTIuOSwzOTMuNCw0MTQuNjczYzI4LjA3OS0zOC4yNTcsNzguMzIyLTU1LjEyMSwxMjMuNzQzLTQxLjEzOCw0NC4zMDYsMTMuNjM5LDc2LjU1NCw1NC41MDgsNzkuNzg1LDEwMC43MDlhMTE1LjgsMTE1LjgsMCwwLDEtLjIyLDE4LjIzMWMtLjEyOSwxLjQ2NywyLjk3NC45ODQsMy4wODYtLjI4Miw0LjI0MS00OC4yMzgtMjIuOC05NS4xNzctNjYuOTY0LTExNS4zLTQzLjc0NS0xOS45MjgtOTYuNTQ4LTEwLjE2OC0xMzAuNTI5LDIzLjcyNi0zNC41NTYsMzQuNDY3LTQzLjY4OSw4OC43MDgtMjEuOSwxMzIuNDY2LDIxLjU0Miw0My4yNjksNjguOTc0LDY5LjAzMSwxMTcuMDIzLDYzLjQzNSw0Ny4wNTYtNS40ODEsODcuMzE5LTQwLjE3LDk5LjIwOC04Ni4xYTExNy4zMTIsMTE3LjMxMiwwLDAsMCwzLjE2NS0xOC4yMjdDNTk5LjkzOCw0OTAuNzMsNTk2LjgzMyw0OTEuMjEsNTk2LjcxMiw0OTIuNDc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNi45NDUgLTMzNC45NTcpIiBmaWxsPSIjNmE3OWE4Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgIDwvZz4KICAgICAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNCIgZGF0YS1uYW1lPSJFbGxpcHNlIDQiIGN4PSIxMTQuMzY4IiBjeT0iMTE0LjM2OCIgcj0iMTE0LjM2OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxNjEuNzQxKSByb3RhdGUoLTQ1KSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC41Ii8+CiAgICAgICAgICA8ZyBpZD0iR3JvdXBfMjI0IiBkYXRhLW5hbWU9Ikdyb3VwIDIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYuMDIzIDQ2LjQ2MikiPgogICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xODAiIGRhdGEtbmFtZT0iUGF0aCAxODAiIGQ9Ik00OTUuNCwzNjcuMDE4Yy00Ny43MjUtNC4yLTk0LjY0NSwyMS44NzctMTE1LjUzMSw2NS4xNzUtMjEuMTM2LDQzLjgxNS0xMS43NjQsOTcuNTEsMjIuODEsMTMxLjY3NCwzNC40MjUsMzQuMDE3LDg4LjAxNSw0Mi44LDEzMS42MTcsMjEuODc4LDQzLjUyMS0yMC44ODMsNzAuMjc0LTY3LjY0Miw2NS40MDctMTE1LjgtNC44MTMtNDcuNjIyLTQwLjE4Ny04OC4zLTg2LjU3Mi05OS45MjVhMTE5Ljc1MywxMTkuNzUzLDAsMCwwLTE3LjczLTNjLTEuMjg2LS4xMjMtMy4yMDgsMS43LTEuMTQ2LDEuOSw0Ni42MzQsNC40NjIsODYuNjIzLDM4LjE0Miw5OC45NjEsODMuMzU5LDEyLjQ2LDQ1LjY2Mi01LjU1LDk1LjYtNDQuMzE4LDEyMi43NDMtMzkuMSwyNy4zNzYtOTIuNSwyNi41MjgtMTMwLjkxMi0xLjcyNC0zNy44NzgtMjcuODU4LTU0LjkyNC03Ny41NTktNDIuMTItMTIyLjgsMTIuNzQ1LTQ1LjAzMyw1My41MjktNzguNTI4LDEwMC4yNzgtODEuOGExMTUuMDQ2LDExNS4wNDYsMCwwLDEsMTguMTExLjIxN0M0OTUuNTM5LDM2OS4wMjgsNDk3LjQ2NCwzNjcuMiw0OTUuNCwzNjcuMDE4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM2OC42NTYgLTM2Ni41NzcpIiBmaWxsPSIjNmE3OWE4Ii8+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8ZyBpZD0iR3JvdXBfMjI3IiBkYXRhLW5hbWU9Ikdyb3VwIDIyNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTIuNzc5IDEzOS44NTEpIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwXzIyNSIgZGF0YS1uYW1lPSJHcm91cCAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjEyMiAzMy42MDgpIj4KICAgICAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xODEiIGRhdGEtbmFtZT0iUGF0aCAxODEiIGQ9Ik01NjgsNTg1LjQ3OGMtNi4yNzItNy42NTEtMTUuODUyLTEzLjI4LTI1LjE5My0xNi4xMzItMTUuNy00Ljc5NC0zMy4wMzctMS43LTQ2LjY5LDcuMmE0NS4wNjQsNDUuMDY0LDAsMCwwLTguOTI3LDcuMjkzYy0xLjI2MSwxLjQsMS42ODIsMS43LDIuNTIzLjc2Miw2LjA0MS02LjcxNSwxNS4wODUtMTEuMzc2LDIzLjY3My0xMy42ODZhNTEuMzM0LDUxLjMzNCwwLDAsMSw0NC41MjUsOS4xMTksNDIuOTEsNDIuOTEsMCwwLDEsNy4yNzYsNi43MzdjLjguOTc4LDMuNzMtLjE3OCwyLjgxNS0xLjI5NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00ODYuODg0IC01NjcuMDk5KSIgZmlsbD0iIzZhNzlhOCIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzE4MiIgZGF0YS1uYW1lPSJQYXRoIDE4MiIgZD0iTTQ5MC4zLDUxOS43OWE1LjcyOSw1LjcyOSwwLDEsMC01Ljc1Nyw1LjdBNS43Myw1LjczLDAsMCwwLDQ5MC4zLDUxOS43OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NTUuODEyIC01MTQuMDMzKSIgZmlsbD0iIzZhNzlhOCIvPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzUiIGRhdGEtbmFtZT0iRWxsaXBzZSA1IiBjeD0iNS43MjkiIGN5PSI1LjcyOSIgcj0iNS43MjkiIHRyYW5zZm9ybT0ibWF0cml4KDAuMDUzLCAtMC45OTksIDAuOTk5LCAwLjA1MywgMTAxLjMyMiwgMTEuNTc2KSIgZmlsbD0iIzZhNzlhOCIvPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXBfMjI2IiBkYXRhLW5hbWU9Ikdyb3VwIDIyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxOS4xNzkpIj4KICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV82IiBkYXRhLW5hbWU9IkVsbGlwc2UgNiIgY3g9IjguMzAyIiBjeT0iMTEuMDciIHJ4PSI4LjMwMiIgcnk9IjExLjA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEuNDY4KSByb3RhdGUoLTAuNjIpIiBmaWxsPSIjZmY5YzgxIi8+CiAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkVsbGlwc2VfNyIgZGF0YS1uYW1lPSJFbGxpcHNlIDciIGN4PSI4LjMwMiIgY3k9IjExLjA3IiByeD0iOC4zMDIiIHJ5PSIxMS4wNyIgdHJhbnNmb3JtPSJtYXRyaXgoMSwgLTAuMDExLCAwLjAxMSwgMSwgMTE5LjAwMiwgMC4xOCkiIGZpbGw9IiNmZjljODEiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPHRleHQgaWQ9Ik9vcHNfU29tZXRoaW5nX1dlbnRfV3JvbmdfIiBkYXRhLW5hbWU9Ik9vcHMhClNvbWV0aGluZyBXZW50IFdyb25nIOKApiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDg4IDExNzIpIiBmaWxsPSIjZmY5YzgxIiBmb250LXNpemU9IjI4IiBmb250LWZhbWlseT0iTGF0by1CbGFjaywgTGF0byIgZm9udC13ZWlnaHQ9IjgwMCI+PHRzcGFuIHg9IjAiIHk9IjAiPk9vcHMhPC90c3Bhbj48dHNwYW4geD0iMCIgeT0iNDUiPlNvbWV0aGluZyBXZW50IFdyb25nIOKApjwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "../../node_modules/@headless/core/static/images/thumb-grid-placeholder.svg":
/*!********************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/thumb-grid-placeholder.svg ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzAgMjA1Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZjdmN2Y3O30uYntmaWxsOiM5OTk7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc2IC05NCkiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMjcwIiBoZWlnaHQ9IjIwNSIgcng9IjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzYgOTQpIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM4NSAxNDcuNTk3KSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyNi40MDMpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iYiIgZD0iTTI2Ljk4MywyNDcuODE0YTYuNTg4LDYuNTg4LDAsMCwxLTQuMTM0LTEuNTQybC03LjYzOC02LjcyN2EzLjM2MywzLjM2MywwLDAsMC00LjM0NS0uMjFMMCwyNDcuMzIzdjUuMTg1YTIuNTIzLDIuNTIzLDAsMCwwLDIuMzc4LDIuNjZjLjA3MiwwLC4xNDQsMCwuMjE1LDBINDEuMDY4YTIuOTUxLDIuOTUxLDAsMCwwLDMuMDgzLTIuNjYzVjIzOC45MTRsLTEzLjgsNy45ODhBNi4zNzcsNi4zNzcsMCwwLDEsMjYuOTgzLDI0Ny44MTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0yMTAuMTczKSIvPjxjaXJjbGUgY2xhc3M9ImIiIGN4PSIzLjA4MyIgY3k9IjMuMDgzIiByPSIzLjA4MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuMzM5IDE3Ljg4KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTAwLjMyMiwzMS44OGEyLjU5MywyLjU5MywwLDAsMC0xLjg5Mi0xLjA1MUw2MC4yMzksMjYuNDE0QTIuNzkxLDIuNzkxLDAsMCwwLDU3LjA4NiwyOC44bC0uNjMxLDUuNDY2aDMzLjVhNi4wMjYsNi4wMjYsMCwwLDEsNS44ODYsNS44MTZWNjQuODE1YzAtLjE0LjYzMS0uMjguOTExLS41NjFhMi4zODIsMi4zODIsMCwwLDAsLjkxMS0xLjg5MmwzLjI5My0yOC40NUEyLjczMywyLjczMywwLDAsMCwxMDAuMzIyLDMxLjg4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ4Ljg4MyAtMjYuNDAzKSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNDEuMDk0LDEwNS45SDIuNjIzQTIuODI5LDIuODI5LDAsMCwwLC4wMywxMDguOTEydjE5Ljk3MWw5LjI1LTYuNzI3YTYuMTY3LDYuMTY3LDAsMCwxLDcuNzc4LjM1bDcuNzA4LDYuNzI3YTMuNTc0LDMuNTc0LDAsMCwwLDQuMTM0LjM1bDE1LjI3Ni04LjlWMTA4LjkxMkEzLjIyMywzLjIyMywwLDAsMCw0MS4wOTQsMTA1LjlaTTI2LjQ0OCwxMjIuMDg2YTUuODg2LDUuODg2LDAsMSwxLDUuODg2LTUuODg2QTUuODg2LDUuODg2LDAsMCwxLDI2LjQ0OCwxMjIuMDg2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDI2IC05NS4yMzYpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "../../node_modules/@headless/core/static/images/user-placeholder.svg":
/*!**************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/user-placeholder.svg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTIgMTEyLjAwNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6Izc3NztvcGFjaXR5OjAuNzU7fS5ie2ZpbGw6I2Y3ZjdmNzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yOC44MjksNzguOWwtMTYuNzEsOS4xMTVhMTUuMDE2LDE1LjAxNiwwLDAsMC0yLjY4MiwxLjkwOCw1NS45NjcsNTUuOTY3LDAsMCwwLDcxLjkwOS4xODZBMTQuODI0LDE0LjgyNCwwLDAsMCw3OC40LDg4LjEzOUw2MC41MDcsNzkuMTkzYTYuODI0LDYuODI0LDAsMCwxLTMuNzcyLTYuMVY2Ni4wN2EyNy4wMjUsMjcuMDI1LDAsMCwwLDEuNjkzLTIuMTc3LDQxLjE3Miw0MS4xNzIsMCwwLDAsNS41NjItMTEuMjA5LDUuNjIsNS42MiwwLDAsMCwzLjk4Ni01LjM0N1YzOS44NDRBNS41OTQsNS41OTQsMCwwLDAsNjYuMSwzNS42OTFWMjQuODU5UzY4LjMyOCw4LDQ1LjUsOHMtMjAuNiwxNi44NTgtMjAuNiwxNi44NThWMzUuNjkxYTUuNTg3LDUuNTg3LDAsMCwwLTEuODcyLDQuMTUzdjcuNDk0YTUuNjE4LDUuNjE4LDAsMCwwLDIuNTkxLDQuNzE1QTM3LjE4NywzNy4xODcsMCwwLDAsMzIuMzg3LDY2LjA3djYuODQ3QTYuODMxLDYuODMxLDAsMCwxLDI4LjgyOSw3OC45WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNTA2IDguOTA3KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNNTYuOTU5LjAwOEE1NS45NjcsNTUuOTY3LDAsMCwwLDE5Ljk2Niw5OC44MTdhMTQuODc5LDE0Ljg3OSwwLDAsMSwyLjY1Ni0xLjg4OWwxNi43MS05LjExNWE2LjgyNiw2LjgyNiwwLDAsMCwzLjU1Ny01Ljk5MVY3NC45NzVhMzcuMTUyLDM3LjE1MiwwLDAsMS02Ljc3NS0xNC4wMTcsNS42Miw1LjYyLDAsMCwxLTIuNTkxLTQuNzE1VjQ4Ljc0OUE1LjU5NCw1LjU5NCwwLDAsMSwzNS40LDQ0LjZWMzMuNzY0UzMzLjE3LDE2LjkwNiw1NiwxNi45MDYsNzYuNiwzMy43NjQsNzYuNiwzMy43NjRWNDQuNmE1LjU4Nyw1LjU4NywwLDAsMSwxLjg3Miw0LjE1M3Y3LjQ5NGE1LjYyLDUuNjIsMCwwLDEtMy45ODYsNS4zNDdBNDEuMTcyLDQxLjE3MiwwLDAsMSw2OC45MjksNzIuOGEyNy4wMjUsMjcuMDI1LDAsMCwxLTEuNjkzLDIuMTc3VjgyYTYuODIxLDYuODIxLDAsMCwwLDMuNzcyLDYuMUw4OC45LDk3LjA0NGExNC45LDE0LjksMCwwLDEsMi45MzcsMS45N0E1NS45ODksNTUuOTg5LDAsMCwwLDU2Ljk1OS4wMDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!*************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/client/link.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "../../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../../node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!***************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/client/router.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!********************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/client/with-router.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/amp-context.js":
/*!*****************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/amp-context.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/amp.js":
/*!*********************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/amp.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "../../node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!**************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/head.js":
/*!**********************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/head.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "../../node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

const side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "../../node_modules/next/dist/next-server/lib/side-effect.js"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "../../node_modules/next/dist/next-server/lib/amp-context.js");

const head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "../../node_modules/next/dist/next-server/lib/head-manager-context.js");

const amp_1 = __webpack_require__(/*! ./amp */ "../../node_modules/next/dist/next-server/lib/amp.js");

function defaultHead(inAmpMode = false) {
  const head = [react_1.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      key: "viewport",
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new _Set();
  const tags = new _Set();
  const metaTypes = new _Set();
  const metaCategories = {};
  return h => {
    if (h.key && typeof h.key !== 'number' && h.key.indexOf('.$') === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
      return true;
    }

    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new _Set();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;
    return react_1.default.cloneElement(c, {
      key
    });
  });
}

const Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head({
  children
}) {
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => react_1.default.createElement(Effect, {
    reduceComponentsToState: reduceComponents,
    handleStateChange: updateHead,
    inAmpMode: amp_1.isInAmpMode(ampState)
  }, children)));
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/mitt.js":
/*!**********************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/mitt.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router-context.js":
/*!********************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/router-context.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
/*!*******************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/router/router.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "../../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!********************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!******************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/side-effect.js":
/*!*****************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/side-effect.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "../../node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __webpack_require__(/*! react */ "react");

const isServer = true;

exports.default = () => {
  const mountedInstances = new _Set();
  let state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState([...mountedInstances], component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return class extends react_1.Component {
    // Used when server rendering
    static rewind() {
      const recordedState = state;
      state = undefined;
      mountedInstances.clear();
      return recordedState;
    }

    constructor(props) {
      super(props);

      if (isServer) {
        mountedInstances.add(this);
        emitChange(this);
      }
    }

    componentDidMount() {
      mountedInstances.add(this);
      emitChange(this);
    }

    componentDidUpdate() {
      emitChange(this);
    }

    componentWillUnmount() {
      mountedInstances.delete(this);
      emitChange(this);
    }

    render() {
      return null;
    }

  };
};

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
/*!***********************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/next-server/lib/utils.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../../node_modules/next/dist/pages/_error.js":
/*!**************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/dist/pages/_error.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../../node_modules/next/dist/next-server/lib/head.js"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};
/**
* `Error` component used for handling errors.
*/

class Error extends _react.default.Component {
  static getInitialProps(_ref) {
    let {
      res,
      err
    } = _ref;
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    return {
      statusCode
    };
  }

  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return _react.default.createElement("div", {
      style: styles.error
    }, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, statusCode, ": ", title)), _react.default.createElement("div", null, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? _react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, _react.default.createElement("div", {
      style: styles.desc
    }, _react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "../../node_modules/next/error.js":
/*!**************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/error.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "../../node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "../../node_modules/next/link.js":
/*!*************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/link.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../../node_modules/next/node_modules/react-is/index.js":
/*!************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/next/node_modules/react-is/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../node_modules/rc-drawer/assets/index.css":
/*!***************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/rc-drawer/assets/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Animation/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Animation/index.js ***!
  \******************************************************************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
const AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 1s linear infinite;"], spinner);


/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Box/index.js":
/*!************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Box/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Box/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "m50ttq-0"
})(_base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return __jsx(BoxWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/button.style.js":
/*!**********************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Button/button.style.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");





const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('heights.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('widths.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radius.0', '3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_4__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Button/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "../../node_modules/reusecore/src/elements/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");


var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Button/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const Button = (_ref) => {
  let {
    type,
    title,
    icon,
    disabled,
    iconPosition,
    onClick,
    loader,
    loaderColor,
    isMaterial,
    isLoading,
    className
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  const buttonIcon = isLoading !== false ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, loader ? loader : __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loaderColor: loaderColor || '#30C56D',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })) : icon && __jsx("span", {
    className: "btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, icon); // set icon position

  const position = iconPosition || 'right';
  return __jsx(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), position === 'left' && buttonIcon, title && __jsx("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, title), position === 'right' && buttonIcon);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Card/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Card/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('div').withConfig({
  displayName: "Card__CardWrapper",
  componentId: "sc-1tufk6z-0"
})(_base__WEBPACK_IMPORTED_MODULE_8__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"], Object(_base__WEBPACK_IMPORTED_MODULE_8__["themed"])('Card'));

const Card = (_ref) => {
  let {
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return __jsx(CardWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), children);
};

Card.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
}, styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"].propTypes, _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"].propTypes);
Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Drawer/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Drawer/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Drawer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const Drawer = (_ref) => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, closeButton), children));
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set drawer width. Default value is 300px. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set drawer position left || right || top || bottom. */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  // drawerHandler: PropTypes.element.isRequired
  drawerHandler: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element
};
Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Heading/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Heading/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "vaqy1n-0"
})(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

const Heading = (_ref) => {
  let {
    content
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return __jsx(HeadingWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/ListGrid/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/ListGrid/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Text */ "../../node_modules/reusecore/src/elements/Text/index.js");

var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/ListGrid/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const LoadMore = ({
  handleLoadMore,
  showButton,
  buttonText,
  buttonVariant,
  loaderColor,
  isLoading,
  loadMoreComponent,
  loadMoreWrapperStyle,
  loadMoreButtonStyle
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, showButton ? __jsx(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loadMoreWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), loadMoreComponent ? loadMoreComponent : __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: buttonVariant,
    title: buttonText || 'Load More',
    isLoading: isLoading,
    loader: __jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      loaderColor: loaderColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }),
    onClick: handleLoadMore
  }, loadMoreButtonStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))) : null);
};

const ListGrid = ({
  data = [],
  total,
  component,
  columnWidth,
  postCount,
  totalPost,
  pagination,
  paginationComponent,
  handleLoadMore,
  loadMoreComponent,
  infinityScroll,
  placeholder,
  loading,
  isLoading,
  limit,
  buttonText,
  buttonVariant,
  loaderColor,
  componentWrapperStyle,
  componentContainerStyle,
  loadMoreWrapperStyle,
  loadMoreButtonStyle,
  paginationWrapperStyle,
  className
}) => {
  const Limit = limit ? Number(limit) : 1;
  const limits = [];

  for (let i = 0; i < Limit; i++) {
    limits.push(i);
  } // const grabPostNumber = data.length;


  let showButton = postCount < totalPost;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, componentWrapperStyle, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), data.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data.map((item, index) => __jsx(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: columnWidth,
    key: index
  }, componentContainerStyle, {
    className: "singleGridBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), component(item, index)))) : null, loading && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, limits.map(index => __jsx(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: columnWidth,
    key: index
  }, componentContainerStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), placeholder ? placeholder : __jsx(_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: "Loading ...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }))))), postCount < totalPost && __jsx(LoadMore, {
    showButton: showButton,
    handleLoadMore: handleLoadMore,
    isLoading: isLoading,
    buttonText: buttonText,
    buttonVariant: buttonVariant,
    loaderColor: loaderColor,
    loadMoreComponent: loadMoreComponent,
    loadMoreButtonStyle: loadMoreButtonStyle,
    loadMoreWrapperStyle: loadMoreWrapperStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), paginationComponent && __jsx(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, paginationWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }), paginationComponent));
};

ListGrid.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  totalPost: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  columnWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array]),
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  paginationComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  handleLoadMore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  loadMoreComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  infinityScroll: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  listWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  componentWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  componentContainerStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  loadMoreWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  loadMoreStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  paginationWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ListGrid.defaultProps = {
  componentWrapperStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: '-1rem',
    ml: '-1rem'
  },
  componentContainerStyle: {
    pr: '1rem',
    pl: '1rem'
  },
  loadMoreWrapperStyle: {
    flexBox: true,
    justifyContent: 'center',
    mt: '1rem'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ListGrid);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Loader/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.style */ "../../node_modules/reusecore/src/elements/Loader/loader.style.js");


var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Loader/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const Loader = (_ref) => {
  let {
    loaderColor,
    className
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_loader_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/loader.style.js":
/*!**********************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Loader/loader.style.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animation */ "../../node_modules/reusecore/src/elements/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");






const LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], props => props.loaderColor ? props.loaderColor : '#000000', _Animation__WEBPACK_IMPORTED_MODULE_4__["AnimSpinner"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_5__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Text/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Text/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Text/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-15lufec-0"
})(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return __jsx(TextWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/base.js":
/*!*******************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/base.js ***!
  \*******************************************************************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "../../node_modules/reusecore/src/theme/customVariant.js":
/*!*************************************************************************************************!*\
  !*** /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/theme/customVariant.js ***!
  \*************************************************************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

const buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
const colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
const sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
const cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "./Config.js":
/*!*******************!*\
  !*** ./Config.js ***!
  \*******************/
/*! exports provided: GRAPHQL_URL, GOOGLE_API_KEY, CURRENCY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQL_URL", function() { return GRAPHQL_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_API_KEY", function() { return GOOGLE_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY", function() { return CURRENCY; });
let GRAPHQL_URL = '';

if (true) {
  GRAPHQL_URL = "http://localhost:4000";
}

if (false) {}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || null;
const CURRENCY = "$" || false;


/***/ }),

/***/ "./components/DropdownMenu/index.js":
/*!******************************************!*\
  !*** ./components/DropdownMenu/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/DropdownMenu/style.js");

var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/DropdownMenu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const DropdownMenu = props => {
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    show: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  const handleToggle = () => {
    setMenuState(prevState => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menuState, {
      show: !prevState.show
    }));
  };

  const handleDocumentClick = () => {
    if (menuState.show) {
      handleToggle();
    }
  };

  const {
    content,
    dropdownItems,
    dropdownDirection,
    className
  } = props;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["DropdownMenuWrapper"], {
    onClick: e => e.stopPropagation(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("span", {
    onClick: handleToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, content), menuState.show && __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["DropdownMenuItemsWrapper"], {
    className: className,
    dropdownDirection: dropdownDirection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, dropdownItems && dropdownItems.map((item, index) => __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["DropdownMenuItemWrapper"], {
    key: index,
    onClick: handleToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, item))));
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);

/***/ }),

/***/ "./components/DropdownMenu/style.js":
/*!******************************************!*\
  !*** ./components/DropdownMenu/style.js ***!
  \******************************************/
/*! exports provided: DropdownMenuWrapper, DropdownMenuItemsWrapper, DropdownMenuItemWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuWrapper", function() { return DropdownMenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuItemsWrapper", function() { return DropdownMenuItemsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuItemWrapper", function() { return DropdownMenuItemWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DropdownMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "style__DropdownMenuWrapper",
  componentId: "sc-1y0vj8w-0"
})(["position:relative;cursor:pointer;transition:0.2s ease-in-out;"]);
const DropdownMenuItemsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('ul').withConfig({
  displayName: "style__DropdownMenuItemsWrapper",
  componentId: "sc-1y0vj8w-1"
})(["margin-top:40px;padding:0;list-style:none;background-color:#ffffff;position:absolute;top:0;left:", ";right:", ";z-index:15;min-width:190px;box-shadow:0 3px 10px rgba(0,0,0,0.16);border-radius:3px;"], props => props.dropdownDirection === 'left' ? '0' : 'auto', props => props.dropdownDirection === 'right' ? '0' : 'auto');
const DropdownMenuItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('li').withConfig({
  displayName: "style__DropdownMenuItemWrapper",
  componentId: "sc-1y0vj8w-2"
})(["transition:background-color 0.3s ease-in-out;a{display:block;padding:10px 15px;}&:hover{background-color:#e2e2e2;}"]);

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocialIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SocialIcon */ "./components/SocialIcon/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Footer/style.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ionicons/socialTwitter */ "react-icons-kit/ionicons/socialTwitter");
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_ionicons_socialPinterest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/ionicons/socialPinterest */ "react-icons-kit/ionicons/socialPinterest");
/* harmony import */ var react_icons_kit_ionicons_socialPinterest__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialPinterest__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit_ionicons_socialInstagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit/ionicons/socialInstagram */ "react-icons-kit/ionicons/socialInstagram");
/* harmony import */ var react_icons_kit_ionicons_socialInstagram__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialInstagram__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/ionicons/socialFacebook */ "react-icons-kit/ionicons/socialFacebook");
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGoogleplus */ "react-icons-kit/ionicons/socialGoogleplus");
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/Footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const SOCIAL_ICONS = [{
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icon: react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_7__["socialFacebook"],
    size: 18,
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }),
  path: '#'
}, {
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_4__["socialTwitter"],
    size: 18,
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }),
  path: '#'
}, {
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icon: react_icons_kit_ionicons_socialInstagram__WEBPACK_IMPORTED_MODULE_6__["socialInstagram"],
    size: 18,
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }),
  path: '#'
}, {
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icon: react_icons_kit_ionicons_socialPinterest__WEBPACK_IMPORTED_MODULE_5__["socialPinterest"],
    size: 18,
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }),
  path: '#'
}, {
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icon: react_icons_kit_ionicons_socialGoogleplus__WEBPACK_IMPORTED_MODULE_8__["socialGoogleplus"],
    size: 18,
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }),
  path: '#'
}];

const footer = () => __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx(_SocialIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
  className: "social-icon",
  icons: SOCIAL_ICONS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("p", {
  className: "footer-copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "\xA9 ", new Date().getFullYear(), " Headless -", __jsx("a", {
  href: "http://redq.io",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "RedQ, Inc.")));

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/Footer/style.js":
/*!************************************!*\
  !*** ./components/Footer/style.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('footer').withConfig({
  displayName: "style__FooterWrapper",
  componentId: "sc-3qovoe-0"
})(["display:flex;justify-content:space-between;align-items:center;padding-left:2rem;padding-right:2rem;padding-top:1.5rem;padding-bottom:1.5rem;background-color:#333;color:#fff;@media (max-width:576px){flex-direction:column;}.footer-copyright{margin:0;display:block;font-size:16px;color:#fff;text-align:right;line-height:1.2;a{color:#fff;text-decoration:none;transition:0.15s ease-in-out;&:hover{color:#30c56d;}}@media screen and (max-width:576px){font-size:14px;margin-top:15px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "./components/InputSearch/index.js":
/*!*****************************************!*\
  !*** ./components/InputSearch/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/InputSearch/style.js");
/* harmony import */ var core_navigation_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/navigation/constant */ "../../node_modules/@headless/core/navigation/constant.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/InputSearch/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const InputSearch = ({
  type,
  value,
  buttonText,
  buttonIcon,
  placeholder,
  changed,
  style,
  onKeyPress,
  onBlur
}) => {
  const handleSearch = e => {
    e.preventDefault();

    if (value.trim()) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`${core_navigation_constant__WEBPACK_IMPORTED_MODULE_3__["SEARCH_PAGE"]}?text=${value.trim()}`);
    }
  };

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SearchInputWrapper"], {
    onSubmit: handleSearch,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SearchInput"], {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: changed,
    onKeyPress: onKeyPress,
    onBlur: onBlur,
    "aria-label": "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["SearchButton"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, buttonIcon, " ", buttonText));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSearch);

/***/ }),

/***/ "./components/InputSearch/style.js":
/*!*****************************************!*\
  !*** ./components/InputSearch/style.js ***!
  \*****************************************/
/*! exports provided: SearchInputWrapper, SearchInput, SearchButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputWrapper", function() { return SearchInputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return SearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchButton", function() { return SearchButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SearchInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "style__SearchInputWrapper",
  componentId: "sc-4tc750-0"
})(["display:flex;flex-direction:row;width:100%;height:49px;border-radius:3px;background-color:#ffffff;overflow:hidden;@media screen and (max-width:767px){line-height:40px;}"]);
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "style__SearchInput",
  componentId: "sc-4tc750-1"
})(["line-height:49px;flex-grow:1;font-size:14px;border:none;padding-left:1rem;@media screen and (max-width:767px){line-height:40px;}&:focus{outline:0;}&::-webkit-input-placeholder{font-size:16px;color:#8c8c8c;}&:-moz-placeholder{font-size:16px;color:#8c8c8c;}&::-moz-placeholder{font-size:16px;color:#8c8c8c;}&:-ms-input-placeholder{font-size:16px;color:#8c8c8c;}"]);
const SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "style__SearchButton",
  componentId: "sc-4tc750-2"
})(["background-color:#30c56d;font-size:16px;line-height:22px;color:#ffffff;font-family:'Lato';font-weight:bold;border:none;padding-left:1.5rem;padding-right:1.5rem;cursor:pointer;flex-shrink:0;display:flex;align-items:center;svg{margin-right:10px;}a{font-size:16px;color:#ffffff;font-family:'Lato';font-weight:bold;display:flex;align-items:center;}@media screen and (max-width:500px){padding-left:12px;padding-right:12px;font-size:14px;min-width:50px;svg{margin-right:5px;}a{font-size:14px;}}"]);

/***/ }),

/***/ "./components/Loader/spinnerLoader.js":
/*!********************************************!*\
  !*** ./components/Loader/spinnerLoader.js ***!
  \********************************************/
/*! exports provided: FullPageSpinner, SpinnerLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPageSpinner", function() { return FullPageSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerLoader", function() { return SpinnerLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/Loader/spinnerLoader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const circleFadeDelay = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%,39%,100%{opacity:0;}40%{opacity:1;}"]);
const SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div').withConfig({
  displayName: "spinnerLoader__SpinnerWrapper",
  componentId: "jyu1mj-0"
})(["margin:40px auto;width:40px;height:40px;position:relative;"]);
const FullPageSpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div').withConfig({
  displayName: "spinnerLoader__FullPageSpinnerWrapper",
  componentId: "jyu1mj-1"
})(["width:100%;height:100%;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;background-color:rgba(255,255,255,0.9);z-index:999999;"]);
const SpinnerBall = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div').withConfig({
  displayName: "spinnerLoader__SpinnerBall",
  componentId: "jyu1mj-2"
})(["width:100%;height:100%;position:absolute;left:0;top:0;&:before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:", " 1.2s infinite ease-in-out both;animation:", " 1.2s infinite ease-in-out both;}&.singleSpinner2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg);&:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s;}}&.singleSpinner3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg);&:before{-webkit-animation-delay:-1s;animation-delay:-1s;}}&.singleSpinner4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);&:before{-webkit-animation-delay:-0.9s;animation-delay:-0.9s;}}&.singleSpinner5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg);&:before{-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}}&.singleSpinner6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg);&:before{-webkit-animation-delay:-0.7s;animation-delay:-0.7s;}}&.singleSpinner7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);&:before{-webkit-animation-delay:-0.6s;animation-delay:-0.6s;}}&.singleSpinner8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg);&:before{-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}}&.singleSpinner9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg);&:before{-webkit-animation-delay:-0.4s;animation-delay:-0.4s;}}&.singleSpinner10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);&:before{-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}}&.singleSpinner11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg);&:before{-webkit-animation-delay:-0.2s;animation-delay:-0.2s;}}&.singleSpinner12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg);&:before{-webkit-animation-delay:-0.1s;animation-delay:-0.1s;}}"], circleFadeDelay, circleFadeDelay);

const SpinnerLoader = props => __jsx(SpinnerWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}, Array.apply(null, {
  length: 12
}).map((e, i) => __jsx(SpinnerBall, {
  className: `singleSpinner` + (i + 1),
  key: i,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
})));

const FullPageSpinner = props => __jsx(FullPageSpinnerWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, __jsx(SpinnerLoader, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186
  },
  __self: undefined
}));



/***/ }),

/***/ "./components/Logo/index.js":
/*!**********************************!*\
  !*** ./components/Logo/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/Logo/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "Logo__LogoImage",
  componentId: "sc-1wwkau4-0"
})(["display:block;width:45px;height:auto;", " @media (max-width:1023px){width:35px;}"], props => props.auto && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["margin-left:auto;margin-right:auto;"]));
function Logo(_ref) {
  let {
    logoSrc,
    title
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["logoSrc", "title"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(LogoImage, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DropdownMenu */ "./components/DropdownMenu/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/Menu/style.js");
/* harmony import */ var core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/static/images/user-placeholder.svg */ "../../node_modules/@headless/core/static/images/user-placeholder.svg");
/* harmony import */ var core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/navigation/constant */ "../../node_modules/@headless/core/navigation/constant.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/Menu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const imageStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%'
};
const DROPDOWN_MENU_ITEMS = [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["SEARCH_PAGE"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Search Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["NEAREST_POST_PAGE"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Nearest Post Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["RECENT_POST_PAGE"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Recent Post Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["CATEGORIES_PAGE"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Category Page"))];

const Menu = ({
  className,
  userId,
  isLoggedIn,
  logout,
  buttonIcon,
  dropdownMenuIcon,
  avatar
}) => {
  const PROFILE_MENU_ITEMS = [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["PROFILE_PAGE"]}/[username]`,
    as: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["PROFILE_PAGE"]}/${userId}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["ACCOUNT_SETTING_PAGE"]}?view=edit-profile`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Account Setting")), __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: logout,
    title: "Logout",
    variant: "textButton",
    width: 1,
    color: "#EF5A5A",
    style: {
      minHeight: 'auto',
      minWidth: 'auto',
      textDecoration: 'none',
      justifyContent: 'flex-start',
      marginLeft: '-4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })];
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MenuWrapper"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MenuItemWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["HOME_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, " Home "))), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MenuItemWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: dropdownMenuIcon,
    dropdownDirection: "right",
    dropdownItems: DROPDOWN_MENU_ITEMS,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MenuItemWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["ADD_POST"]}/[id]`,
    as: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["ADD_POST"]}/new`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Add Post",
    icon: buttonIcon,
    iconPosition: "left",
    bg: "transparent",
    color: "#30C56D",
    border: "1px solid #30C56D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })))), !isLoggedIn ? __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MenuItemWrapper"], {
    paddingX: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["SIGNIN_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Join Us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })))) : __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MenuItemWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dropdownDirection: "right",
    content: __jsx(react_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
      src: avatar,
      loader: __jsx("img", {
        style: imageStyle,
        src: core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "profile picture",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: undefined
      }),
      unloader: __jsx("img", {
        style: imageStyle,
        src: core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "profile picture",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: undefined
      }),
      style: imageStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }),
    dropdownItems: PROFILE_MENU_ITEMS,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Menu/style.js":
/*!**********************************!*\
  !*** ./components/Menu/style.js ***!
  \**********************************/
/*! exports provided: MenuWrapper, MenuItemWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemWrapper", function() { return MenuItemWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('nav').withConfig({
  displayName: "style__MenuWrapper",
  componentId: "sc-19pp6gi-0"
})(["display:block;@media (min-width:768px){display:flex;align-items:center;flex-shrink:0;}"]);
const MenuItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "style__MenuItemWrapper",
  componentId: "sc-19pp6gi-1"
})(["display:block;padding-top:0.5rem;padding-bottom:0.5rem;color:#595959;a{color:#595959;}@media (min-width:768px){display:inline-block;padding-left:", ";padding-right:", ";flex-shrink:0;}"], props => props.paddingX || '1rem', props => props.paddingX || '1rem');

/***/ }),

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo */ "./components/Logo/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Search */ "./components/Search/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/Navbar/style.js");
/* harmony import */ var core_static_images_headless_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/static/images/headless-logo.svg */ "../../node_modules/@headless/core/static/images/headless-logo.svg");
/* harmony import */ var core_static_images_headless_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_static_images_headless_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/navigation/constant */ "../../node_modules/@headless/core/navigation/constant.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/Navbar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Navbar = ({
  onToggle,
  userId,
  isLoggedIn,
  logout,
  buttonIcon,
  menuButtonIcon,
  dropdownMenuIcon,
  pathname,
  avatar
}) => {
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["NavbarWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logoSrc: core_static_images_headless_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    title: "Headless Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), pathname !== '/' && pathname !== core_navigation_constant__WEBPACK_IMPORTED_MODULE_7__["SEARCH_PAGE"] ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "topSearch lg-show",
    style: {
      flexGrow: 1,
      marginLeft: 100,
      marginRight: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })) : null, __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: buttonIcon,
    onClick: onToggle,
    className: "sm-hidden",
    variant: "textButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "md-show",
    userId: userId,
    isLoggedIn: isLoggedIn,
    logout: logout,
    buttonIcon: menuButtonIcon,
    dropdownMenuIcon: dropdownMenuIcon,
    avatar: avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Navbar/style.js":
/*!************************************!*\
  !*** ./components/Navbar/style.js ***!
  \************************************/
/*! exports provided: NavbarWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarWrapper", function() { return NavbarWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('header').withConfig({
  displayName: "style__NavbarWrapper",
  componentId: "cxp4rl-0"
})(["box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;position:fixed;width:100%;height:76px;top:0;left:0;z-index:10;background-color:#ffffff;box-shadow:0 3px 7px rgba(0,0,0,0.06);padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";@media (min-width:769px){.sm-hidden{display:none;}}@media (min-width:992px){.md-hidden{display:none;}}@media (max-width:768px){.md-show{display:none;}height:60px;padding-left:", ";padding-right:", ";}@media (max-width:992px){.lg-show{display:none;}}"], props => props.paddingY || 0, props => props.paddingY || 0, props => props.paddingX || '2rem', props => props.paddingX || '2rem', props => props.paddingX || '1rem', props => props.paddingX || '0');

/***/ }),

/***/ "./components/NoItemFound.js":
/*!***********************************!*\
  !*** ./components/NoItemFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoItemFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_static_images_no_result_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/static/images/no-result.svg */ "../../node_modules/@headless/core/static/images/no-result.svg");
/* harmony import */ var core_static_images_no_result_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_static_images_no_result_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/NoItemFound.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "NoItemFound__StyledImage",
  componentId: "sc-1h12hqu-0"
})(["display:block;max-width:100%;height:auto;"]);
function NoItemFound() {
  return __jsx(StyledImage, {
    src: core_static_images_no_result_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

/***/ }),

/***/ "./components/OnError.js":
/*!*******************************!*\
  !*** ./components/OnError.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoItemFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_static_images_oops_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/static/images/oops.svg */ "../../node_modules/@headless/core/static/images/oops.svg");
/* harmony import */ var core_static_images_oops_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_static_images_oops_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/OnError.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "OnError__StyledImage",
  componentId: "sc-1jsdirs-0"
})(["display:block;max-width:100%;height:auto;"]);
function NoItemFound() {
  return __jsx(StyledImage, {
    src: core_static_images_oops_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

/***/ }),

/***/ "./components/PageMeta/index.js":
/*!**************************************!*\
  !*** ./components/PageMeta/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/PageMeta/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageMeta = ({
  title,
  description
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, title), __jsx("meta", {
  name: "description",
  content: description,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (PageMeta);

/***/ }),

/***/ "./components/Placeholder/index.js":
/*!*****************************************!*\
  !*** ./components/Placeholder/index.js ***!
  \*****************************************/
/*! exports provided: PostLoader, ProfileAvatarLoader, ListLoader, CategoryLoader, CategoryLoaderCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoader", function() { return PostLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAvatarLoader", function() { return ProfileAvatarLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLoader", function() { return ListLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryLoader", function() { return CategoryLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryLoaderCard", function() { return CategoryLoaderCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/Placeholder/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const PostLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  height: 300,
  width: 260,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "1.61",
  rx: "0",
  ry: "0",
  width: "260",
  height: "220",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "235",
  rx: "0",
  ry: "0",
  width: "200",
  height: "12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "255",
  rx: "0",
  ry: "0",
  width: "120",
  height: "12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("rect", {
  x: "142.63",
  y: "122.61",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}));

const ProfileAvatarLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  height: 160,
  width: 400,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("rect", {
  x: "142.63",
  y: "122.61",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("circle", {
  cx: "80",
  cy: "80",
  r: "80",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("rect", {
  x: "190",
  y: "50",
  rx: "0",
  ry: "0",
  width: "170",
  height: "20",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("rect", {
  x: "190",
  y: "82",
  rx: "0",
  ry: "0",
  width: "13",
  height: "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("rect", {
  x: "213",
  y: "82",
  rx: "0",
  ry: "0",
  width: "180",
  height: "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("rect", {
  x: "190",
  y: "107",
  rx: "0",
  ry: "0",
  width: "13",
  height: "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("rect", {
  x: "213",
  y: "107",
  rx: "0",
  ry: "0",
  width: "140",
  height: "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}));

const GalleryLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  height: 850,
  width: 730,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), __jsx("circle", {
  cx: "86.78",
  cy: "84.61",
  r: "1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "0",
  rx: "0",
  ry: "0",
  width: "730",
  height: "650",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "670",
  rx: "0",
  ry: "0",
  width: "140",
  height: "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx("rect", {
  x: "160",
  y: "670",
  rx: "0",
  ry: "0",
  width: "140",
  height: "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}), __jsx("rect", {
  x: "180",
  y: "670",
  rx: "0",
  ry: "0",
  width: "140",
  height: "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}), __jsx("rect", {
  x: "320",
  y: "670",
  rx: "0",
  ry: "0",
  width: "140",
  height: "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx("rect", {
  x: "480",
  y: "670",
  rx: "0",
  ry: "0",
  width: "140",
  height: "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}));

const ListLoader = props => __jsx("div", {
  style: {
    marginTop: 15,
    marginBottom: 15
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  height: 160,
  width: 600,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "0",
  rx: "0",
  ry: "0",
  width: "180",
  height: "160",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}), __jsx("rect", {
  x: "200",
  y: "0",
  rx: "0",
  ry: "0",
  width: "390",
  height: "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}), __jsx("rect", {
  x: "200",
  y: "23",
  rx: "0",
  ry: "0",
  width: "280",
  height: "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}), __jsx("rect", {
  x: "200",
  y: "63",
  rx: "0",
  ry: "0",
  width: "70",
  height: "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}), __jsx("rect", {
  x: "300",
  y: "63",
  rx: "0",
  ry: "0",
  width: "60",
  height: "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}), __jsx("rect", {
  x: "200",
  y: "100",
  rx: "0",
  ry: "0",
  width: "10",
  height: "10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}), __jsx("rect", {
  x: "220",
  y: "100",
  rx: "0",
  ry: "0",
  width: "130",
  height: "10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}), __jsx("rect", {
  x: "220",
  y: "120",
  rx: "0",
  ry: "0",
  width: "130",
  height: "10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}), __jsx("rect", {
  x: "420",
  y: "110",
  rx: "0",
  ry: "0",
  width: "180",
  height: "10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
})));

const CategoryLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  height: 70,
  width: 400,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb" // style={{ width: '100%', height: '100%' }}

}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}), __jsx("circle", {
  cx: "55",
  cy: "30",
  r: "30",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}), __jsx("circle", {
  cx: "86.78",
  cy: "84.61",
  r: "1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}), __jsx("rect", {
  x: "105",
  y: "15",
  rx: "0",
  ry: "0",
  width: "170",
  height: "10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}), __jsx("rect", {
  x: "105",
  y: "35",
  rx: "0",
  ry: "0",
  width: "70",
  height: "10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}));

const CategoryLoaderCard = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  height: 120,
  width: 150,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}), __jsx("circle", {
  cx: "75",
  cy: "50",
  r: "25",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}), __jsx("rect", {
  x: "25",
  y: "85",
  rx: "0",
  ry: "0",
  width: "100",
  height: "15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}));



/***/ }),

/***/ "./components/PostCard/index.js":
/*!**************************************!*\
  !*** ./components/PostCard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Card */ "../../node_modules/reusecore/src/elements/Card/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/static/images/thumb-grid-placeholder.svg */ "../../node_modules/@headless/core/static/images/thumb-grid-placeholder.svg");
/* harmony import */ var core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/PostCard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const PostCard = (_ref) => {
  let {
    imageSrc,
    title,
    price,
    currency,
    imageStyle,
    titleStyle,
    priceStyle
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["imageSrc", "title", "price", "currency", "imageStyle", "titleStyle", "priceStyle"]);

  return __jsx(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), imageSrc && __jsx(react_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
    src: imageSrc,
    alt: title,
    style: imageStyle,
    loader: __jsx("img", {
      src: core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }),
    unloader: __jsx("img", {
      src: core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), title && __jsx(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    mb: "1",
    mt: 15,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), price && currency && __jsx(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: `${currency} ${price}`
  }, priceStyle, {
    mb: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })));
};

PostCard.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  postNumber: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  imageStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  postNumberStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
PostCard.defaultProps = {
  boxShadow: 'none',
  borderRadius: '3px',
  mb: '40px',
  color: '#595959',
  imageStyle: {
    width: '100%',
    height: '210px',
    color: '#fff',
    borderRadius: '3px',
    objectFit: 'cover'
  },
  titleStyle: {
    fontSize: '14px',
    mt: '10px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/Search/Search.style.js":
/*!*******************************************!*\
  !*** ./components/Search/Search.style.js ***!
  \*******************************************/
/*! exports provided: SearchBox, SearchResultWrapper, ItemWrapper, SubmenuHeading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultWrapper", function() { return SearchResultWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuHeading", function() { return SubmenuHeading; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "Searchstyle__SearchWrapper",
  componentId: "sc-1gt92og-0"
})(["position:relative;width:100%;margin-left:50px;@media only screen and (max-width:479px){margin-left:0px;}"]);
const SearchBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "Searchstyle__SearchBox",
  componentId: "sc-1gt92og-1"
})(["border-radius:3px;position:absolute;border:1px solid #e2e2e2;top:0;right:0;@media only screen and (max-width:767px){top:3px;form{height:40px;}}&.expanded{width:100%;opacity:1;transition:width ease-in-out 500ms,opacity ease-in-out 500ms;@media only screen and (max-width:767px){width:calc(100% - 10px);}}&.collapsed{width:0;opacity:0;transition:width ease-in-out 500ms,opacity ease-in-out 500ms;}"]);
const SearchResultWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('ul').withConfig({
  displayName: "Searchstyle__SearchResultWrapper",
  componentId: "sc-1gt92og-2"
})(["box-sizing:border-box;position:absolute;background-color:#fff;z-index:10;width:100%;list-style-type:none;border-radius:0 0 3px 3px;padding:0;width:100%;margin:4px 0 0;padding-bottom:10px;box-shadow:0 3px 10px rgba(0,0,0,0.16);&.showSuggestion{opacity:1;transition:opacity ease-in-out 500ms;}&.hideSuggestion{opacity:0;transition:opacity ease-in-out 500ms;}"]);
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('li').withConfig({
  displayName: "Searchstyle__ItemWrapper",
  componentId: "sc-1gt92og-3"
})(["padding:0.7rem 1.5rem;cursor:pointer;font-family:'Lato',sans-serif;font-size:16px;font-weight:400;color:#333;&:hover{background-color:#f4f4f4;}"]);
const SubmenuHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "Searchstyle__SubmenuHeading",
  componentId: "sc-1gt92og-4"
})(["display:flex;align-items:center;justify-content:space-between;padding:1.25rem 1.5rem 0.5rem;h3{font-size:14px;font-family:'Poppins';font-weight:600;margin:0;}button{background-color:transparent;border:0;outline:0;font-family:'Lato',sans-serif;font-size:14px;font-weight:400;color:#333;box-shadow:none;cursor:pointer;padding:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SearchWrapper);

/***/ }),

/***/ "./components/Search/index.js":
/*!************************************!*\
  !*** ./components/Search/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputSearch */ "./components/InputSearch/index.js");
/* harmony import */ var _Search_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search.style */ "./components/Search/Search.style.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ionicons_androidSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ionicons/androidSearch */ "react-icons-kit/ionicons/androidSearch");
/* harmony import */ var react_icons_kit_ionicons_androidSearch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_androidSearch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/Search/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Search() {
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: toggleSearch,
    1: setToggleSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let searchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleSearchInput = event => {
    setSearchValue(event.target.value);
  };

  const handleClickOutside = event => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setToggleSearch(false);
    }
  };

  return __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: searchRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icon: react_icons_kit_ionicons_androidSearch__WEBPACK_IMPORTED_MODULE_4__["androidSearch"],
      size: 24,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }),
    variant: "outlined",
    color: "#8C8C8C",
    onClick: () => setToggleSearch(true),
    style: {
      marginLeft: 'auto',
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_2__["SearchBox"], {
    className: toggleSearch ? 'expanded' : 'collapsed',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_InputSearch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "text",
    value: searchValue,
    changed: handleSearchInput,
    searchText: searchValue,
    buttonIcon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icon: react_icons_kit_ionicons_androidSearch__WEBPACK_IMPORTED_MODULE_4__["androidSearch"],
      size: 21,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }),
    placeholder: "10,000 products available",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/SocialIcon/index.js":
/*!****************************************!*\
  !*** ./components/SocialIcon/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _socialicon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socialicon.style */ "./components/SocialIcon/socialicon.style.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/SocialIcon/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SocialIcon = props => __jsx(_socialicon_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: props.className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.icons.map((icon, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: icon.path,
  key: index,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  "aria-label": `social-icon-${index}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, icon.icon))));

/* harmony default export */ __webpack_exports__["default"] = (SocialIcon);

/***/ }),

/***/ "./components/SocialIcon/socialicon.style.js":
/*!***************************************************!*\
  !*** ./components/SocialIcon/socialicon.style.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SocialIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "socialiconstyle__SocialIconWrapper",
  componentId: "sc-1vildsp-0"
})(["position:relative;a{display:inline-block;color:#fff;text-decoration:none;transition:0.15s ease-in-out;margin:0 0.8em;&:first-child{margin-left:0;}&:last-child{margin-right:0;}&:hover{> div{color:#30c56d !important;}}> div{display:block;transition:0.15s ease-in-out;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (SocialIconWrapper);

/***/ }),

/***/ "./components/TabView/index.js":
/*!*************************************!*\
  !*** ./components/TabView/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabViewStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabViewStyle */ "./components/TabView/tabViewStyle.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/TabView/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TabViewMenu = ({
  style,
  onClick,
  menuIcon,
  iconPosition,
  menuText,
  count,
  menuTextSize,
  menuTextColor,
  menuTextLineHeight,
  countTextColor,
  countTextSize,
  countTextLineHeight,
  key
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, menuIcon || menuText ? __jsx(_tabViewStyle__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: style,
    onClick: onClick,
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, menuIcon && iconPosition === 'left' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, menuIcon), menuText && __jsx(_tabViewStyle__WEBPACK_IMPORTED_MODULE_2__["MenuText"], {
    menuTextColor: menuTextColor,
    menuTextSize: menuTextSize,
    menuTextLineHeight: menuTextLineHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, menuText), __jsx(_tabViewStyle__WEBPACK_IMPORTED_MODULE_2__["CountText"], {
    countTextColor: countTextColor,
    countTextSize: countTextSize,
    countTextLineHeight: countTextLineHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, count), menuIcon && iconPosition === 'right' && __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, menuIcon)) : null);
};

TabViewMenu.propTypes = {
  /** style props allow you to customize menu layout & spacing **/
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /** Callback function when TabViewMenu is pressed. **/
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** Custom text for TabViewMenu item */
  menuText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Custom menu text size for TabViewMenu item */
  menuTextSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Custom menu text line height for TabViewMenu item */
  menuTextLineHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Custom menu text color for TabViewMenu item */
  menuTextColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Allow you to change icon position */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'right'])
};
TabViewMenu.defaultProps = {
  iconPosition: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (TabViewMenu);

/***/ }),

/***/ "./components/TabView/tabViewStyle.js":
/*!********************************************!*\
  !*** ./components/TabView/tabViewStyle.js ***!
  \********************************************/
/*! exports provided: TouchableOpacity, MenuText, CountText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchableOpacity", function() { return TouchableOpacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuText", function() { return MenuText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountText", function() { return CountText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const TouchableOpacity = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('button').withConfig({
  displayName: "tabViewStyle__TouchableOpacity",
  componentId: "sc-6e80n6-0"
})(["flex-direction:row;align-items:center;background-color:transparent;border:0;outline:0;padding:0;cursor:pointer;"]);
const MenuText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "tabViewStyle__MenuText",
  componentId: "sc-6e80n6-1"
})(["color:", ";font-size:", "px;line-height:", "px;text-transform:capitalize;font-weight:500;"], props => props.menuTextColor ? props.menuTextColor : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), props => props.menuTextSize ? props.menuTextSize : 16, props => props.menuTextLineHeight ? props.menuTextLineHeight : 19);
const CountText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "tabViewStyle__CountText",
  componentId: "sc-6e80n6-2"
})(["color:", ";font-size:", "px;line-height:", "px;text-transform:capitalize;font-weight:500;margin-left:10px;"], props => props.countTextColor ? props.countTextColor : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), props => props.countTextSize ? props.countTextSize : 16, props => props.countTextLineHeight ? props.countTextLineHeight : 19);


/***/ }),

/***/ "./components/UserInfoBox/index.js":
/*!*****************************************!*\
  !*** ./components/UserInfoBox/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userInfoBox.style.js */ "./components/UserInfoBox/userInfoBox.style.js");
/* harmony import */ var core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/static/images/user-placeholder.svg */ "../../node_modules/@headless/core/static/images/user-placeholder.svg");
/* harmony import */ var core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_navigation_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/navigation/constant */ "../../node_modules/@headless/core/navigation/constant.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/components/UserInfoBox/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const UserInformation = ({
  imgWidth,
  imgHeight,
  source,
  title,
  style,
  imgRadius,
  address,
  addressIcon,
  phoneIcon,
  phoneNumber,
  website,
  websiteIcon,
  titleStyle,
  informationStyle,
  onAuthorTitlePress,
  author,
  postedTime,
  userId,
  authorId
}) => {
  return __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["InfoBox"], {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    imgWidth: imgWidth,
    imgHeight: imgHeight,
    imgRadius: imgRadius,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: source,
    loader: __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }),
    unloader: __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: core_static_images_user_placeholder_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), userId && userId === authorId && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_SETTING_PAGE"]}?view=edit-profile`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["EditButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Edit")))), __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["Information"], {
    style: informationStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, title && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_5__["PROFILE_PAGE"]}/${author}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    onClick: onAuthorTitlePress,
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, title))), postedTime && __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["PostedTime"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, postedTime), address !== '' && addressIcon ? __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["AddressInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, addressIcon && __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["IconBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, addressIcon), address && __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["Address"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, address)) : null, website !== '' && websiteIcon ? __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["OtherInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, websiteIcon && __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["IconBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, websiteIcon), website && __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["PhoneNo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, website)) : null, phoneNumber !== '' && phoneIcon ? __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["OtherInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, phoneIcon && __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["IconBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, phoneIcon), phoneNumber && __jsx(_userInfoBox_style_js__WEBPACK_IMPORTED_MODULE_3__["PhoneNo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, phoneNumber)) : null));
};

UserInformation.propTypes = {
  source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  imgHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  imgWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  callNowText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  imgRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  phoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  informationStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}; // SingleList.defaultProps = {
//   activeOpacity: 0.8,
//   disabled: false,
//   disabledStyle: { opacity: 0.3 },
//   checked: false,
//   onValueChange: () => {},
// };

/* harmony default export */ __webpack_exports__["default"] = (UserInformation);

/***/ }),

/***/ "./components/UserInfoBox/userInfoBox.style.js":
/*!*****************************************************!*\
  !*** ./components/UserInfoBox/userInfoBox.style.js ***!
  \*****************************************************/
/*! exports provided: InfoBox, ImageWrapper, Information, Image, Title, PostedTime, AddressInfo, Address, OtherInfo, PhoneNo, CallNowText, EditButton, IconBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Information", function() { return Information; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostedTime", function() { return PostedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressInfo", function() { return AddressInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherInfo", function() { return OtherInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNo", function() { return PhoneNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNowText", function() { return CallNowText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditButton", function() { return EditButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBox", function() { return IconBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_1__);


const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_image__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "userInfoBoxstyle__Image",
  componentId: "hvwsex-0"
})(["width:100%;height:100%;border-radius:0;object-fit:cover;"]);
const InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "userInfoBoxstyle__InfoBox",
  componentId: "hvwsex-1"
})(["display:flex;flex-direction:row;align-items:center;"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "userInfoBoxstyle__ImageWrapper",
  componentId: "hvwsex-2"
})(["width:", ";height:", ";display:flex;flex-shrink:0;overflow:hidden;position:relative;border-radius:", "px;"], props => props.imgWidth ? props.imgWidth : '100%', props => props.imgHeight ? props.imgHeight : '100%', props => props.imgRadius ? props.imgRadius : 19);
const Information = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "userInfoBoxstyle__Information",
  componentId: "hvwsex-3"
})(["width:100%;display:flex;flex-direction:column;margin-left:10px;overflow:hidden;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "userInfoBoxstyle__Title",
  componentId: "hvwsex-4"
})(["font-size:14px;font-weight:700;color:#333333;margin-bottom:5px;"]);
const PostedTime = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "userInfoBoxstyle__PostedTime",
  componentId: "hvwsex-5"
})(["font-size:12px;font-weight:400;color:#8c8c8c;"]);
const AddressInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "userInfoBoxstyle__AddressInfo",
  componentId: "hvwsex-6"
})(["display:flex;flex-direction:row;align-items:center;margin-bottom:5px;"]);
const Address = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "userInfoBoxstyle__Address",
  componentId: "hvwsex-7"
})(["color:#8c8c8c;font-size:14px;line-height:17px;"]);
const OtherInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(AddressInfo).withConfig({
  displayName: "userInfoBoxstyle__OtherInfo",
  componentId: "hvwsex-8"
})(["margin-bottom:5px;"]);
const PhoneNo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Address).withConfig({
  displayName: "userInfoBoxstyle__PhoneNo",
  componentId: "hvwsex-9"
})([""]);
const CallNowText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Address).withConfig({
  displayName: "userInfoBoxstyle__CallNowText",
  componentId: "hvwsex-10"
})(["color:#30c56d;font-weight:700;"]);
const EditButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "userInfoBoxstyle__EditButton",
  componentId: "hvwsex-11"
})(["position:absolute;padding:9px;width:100%;text-align:center;background-color:rgba(0,0,0,0.3);bottom:0;left:0;color:#fff;font-size:15px;"]);
const IconBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "userInfoBoxstyle__IconBox",
  componentId: "hvwsex-12"
})(["display:inline-block;color:#bababa;margin-right:7px;margin-top:3px;"]);


/***/ }),

/***/ "./containers/Layout/index.js":
/*!************************************!*\
  !*** ./containers/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_naviconRound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/naviconRound */ "react-icons-kit/ionicons/naviconRound");
/* harmony import */ var react_icons_kit_ionicons_naviconRound__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_naviconRound__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ionicons_plusRound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ionicons/plusRound */ "react-icons-kit/ionicons/plusRound");
/* harmony import */ var react_icons_kit_ionicons_plusRound__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_plusRound__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_ionicons_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/ionicons/more */ "react-icons-kit/ionicons/more");
/* harmony import */ var react_icons_kit_ionicons_more__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_more__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loader_spinnerLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loader/spinnerLoader */ "./components/Loader/spinnerLoader.js");
/* harmony import */ var core_graphql_Mutations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/graphql/Mutations */ "../../node_modules/@headless/core/graphql/Mutations/index.js");
/* harmony import */ var core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/graphql/Profile.query */ "../../node_modules/@headless/core/graphql/Profile.query.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_authHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/authHelper */ "./helpers/authHelper.js");
/* harmony import */ var _helpers_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/session */ "./helpers/session.js");
/* harmony import */ var _helpers_redirect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/redirect */ "./helpers/redirect.js");
/* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/ionicons/androidClose */ "react-icons-kit/ionicons/androidClose");
/* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Navbar */ "./components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core/navigation/constant */ "../../node_modules/@headless/core/navigation/constant.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/containers/Layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





















const Main = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main.withConfig({
  displayName: "Layout__Main",
  componentId: "sc-1ece30d-0"
})(["min-height:100vh;min-height:calc(100vh - 153px);"]);
const DrawerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div').withConfig({
  displayName: "Layout__DrawerWrapper",
  componentId: "sc-1ece30d-1"
})(["display:inline-flex;flex-direction:column;height:100%;width:100%;padding:70px 20px 50px;"]);
const DrawerLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('span').withConfig({
  displayName: "Layout__DrawerLink",
  componentId: "sc-1ece30d-2"
})(["display:inline-flex;padding:11px 0;a{color:#333;}"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  userId = '',
  history,
  isLoggedIn,
  location,
  logout,
  pathname
}) => {
  const {
    0: drawerState,
    1: toggleDrawer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loggingOut,
    1: setloggingOut
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let userAvatar = '';
  let userFallbackAvatar = '';
  const {
    data,
    error,
    loading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_8__["GET_AUTHOR_INFO"], {
    variables: {
      USERNAME: userId
    }
  });
  userAvatar = data && data.author && data.author.image && data.author.image.url ? data.author.image.url : '';
  userFallbackAvatar = data && data.author && data.author.image && data.author.image.largeUrl ? data.author.image.largeUrl : '';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (false) {}
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(storePosition);
  };

  const storePosition = position => {
    Object(_helpers_session__WEBPACK_IMPORTED_MODULE_11__["setFirebaseCookie"])('currentLocation', {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  };

  const handleLogout = async () => {
    setloggingOut(true);
    const isLoggedOut = await _helpers_authHelper__WEBPACK_IMPORTED_MODULE_10__["default"].logout();
    setloggingOut(false);

    if (isLoggedOut === true) {
      Object(_helpers_session__WEBPACK_IMPORTED_MODULE_11__["removeFirebaseCookie"])('id_token');
      Object(_helpers_session__WEBPACK_IMPORTED_MODULE_11__["removeFirebaseCookie"])('user');
      Object(_helpers_redirect__WEBPACK_IMPORTED_MODULE_12__["default"])({}, '/');
    }
  };

  const handleToggle = () => toggleDrawer(!drawerState);

  const DRAWER_MENU = [{
    path: core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["HOME_PAGE"],
    name: 'Home'
  }, {
    path: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["ADD_POST"]}/new`,
    name: 'Add Post'
  }, {
    path: core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["SEARCH_PAGE"],
    name: 'Search Page'
  }, {
    path: core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["NEAREST_POST_PAGE"],
    name: 'Nearest Post Page'
  }, {
    path: core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["RECENT_POST_PAGE"],
    name: 'Recent Post Page'
  }, {
    path: core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["CATEGORIES_PAGE"],
    name: 'Category Page'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loggingOut && __jsx(_components_Loader_spinnerLoader__WEBPACK_IMPORTED_MODULE_6__["FullPageSpinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onToggle: handleToggle,
    userId: userId,
    history: history,
    isLoggedIn: isLoggedIn,
    location: location,
    logout: handleLogout,
    buttonIcon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_14___default.a, {
      icon: react_icons_kit_ionicons_naviconRound__WEBPACK_IMPORTED_MODULE_3__["naviconRound"],
      size: 21,
      color: "#ffffff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: undefined
    }),
    menuButtonIcon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_14___default.a, {
      icon: react_icons_kit_ionicons_plusRound__WEBPACK_IMPORTED_MODULE_4__["plusRound"],
      size: 20,
      color: "#595959",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: undefined
    }),
    dropdownMenuIcon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_14___default.a, {
      icon: react_icons_kit_ionicons_more__WEBPACK_IMPORTED_MODULE_5__["more"],
      size: 40,
      color: "#595959",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: undefined
    }),
    pathname: pathname,
    avatar: [userAvatar, userFallbackAvatar],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), drawerState && __jsx(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: drawerState,
    onClose: handleToggle,
    toggleHandler: handleToggle,
    isLoggedIn: isLoggedIn,
    userId: userId,
    logout: logout,
    closeButton: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_14___default.a, {
      icon: react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_13__["androidClose"],
      size: 21,
      color: "#333333",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: undefined
    }),
    closeButtonStyle: {
      display: 'inline-flex',
      position: 'absolute',
      top: 20,
      right: 20,
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx(DrawerWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, DRAWER_MENU.map((item, index) => __jsx(DrawerLink, {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: item.path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, item.name)))), isLoggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(DrawerLink, {
    key: core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["PROFILE_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["PROFILE_PAGE"]}/[username]`,
    as: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["PROFILE_PAGE"]}/${userId}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, "Profile"))), __jsx(DrawerLink, {
    key: core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["ACCOUNT_SETTING_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["ACCOUNT_SETTING_PAGE"]}?view=edit-profile`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, "Account Setting"))), __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleLogout,
    title: "Logout",
    variant: "textButton",
    width: 1,
    color: "#EF5A5A",
    style: {
      minHeight: 'auto',
      minWidth: 'auto',
      textDecoration: 'none',
      justifyContent: 'flex-start',
      marginTop: 8,
      marginLeft: '-4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  })) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: core_navigation_constant__WEBPACK_IMPORTED_MODULE_19__["SIGNIN_PAGE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Login",
    variant: "textButton",
    width: 1,
    color: "#30C56D",
    style: {
      minHeight: 'auto',
      minWidth: 'auto',
      textDecoration: 'none',
      justifyContent: 'flex-start',
      marginTop: 8,
      marginLeft: '-4px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  })))), __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./containers/Profile/index.js":
/*!*************************************!*\
  !*** ./containers/Profile/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "../../node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-styled-flexboxgrid */ "react-styled-flexboxgrid");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Placeholder */ "./components/Placeholder/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/graphql/Profile.query */ "../../node_modules/@headless/core/graphql/Profile.query.js");
/* harmony import */ var _components_UserInfoBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UserInfoBox */ "./components/UserInfoBox/index.js");
/* harmony import */ var _components_TabView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TabView */ "./components/TabView/index.js");
/* harmony import */ var _userListing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userListing */ "./containers/Profile/userListing.js");
/* harmony import */ var _userFavourite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userFavourite */ "./containers/Profile/userFavourite.js");
/* harmony import */ var _userDraft__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userDraft */ "./containers/Profile/userDraft.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/containers/Profile/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function Profile({
  username,
  userId
}) {
  if (!username) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
      statusCode: "404",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  }

  const {
    0: tabStates,
    1: setTabState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    tabState: 'postlist'
  });

  const handleTabToggle = tabState => {
    setTabState({
      tabState: tabState
    });
  };

  const QUERY_VARIABLES = {
    USERNAME: username,
    limit: 12
  };
  const {
    data,
    loading,
    error,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_6__["GET_PROFILE_INFO"], {
    variables: QUERY_VARIABLES
  });
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, error.message);
  if (loading) return __jsx("div", {
    style: {
      height: '170px',
      width: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_Placeholder__WEBPACK_IMPORTED_MODULE_4__["ProfileAvatarLoader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
  const favouritePostCount = data && data.author && data.author.favourite ? data.author.favourite.total : 0;
  const draftPostCount = data && data.author && data.author.draft ? data.author.draft.total : 0;
  const authorNumber = data && data.author && data.author.mobile && data.author.mobile[0] ? data.author.mobile[0].number : '';
  const imageUrl = data && data.author && data.author.image ? data.author.image.url : '';
  const imageLargeUrl = data && data.author && data.author.image ? data.author.image.largeUrl : '';
  const {
    id,
    name,
    posts,
    address,
    website
  } = data.author;
  return __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingTop: 70
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_components_UserInfoBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    source: [imageUrl, imageLargeUrl],
    imgWidth: "120px",
    imgHeight: "120px",
    imgRadius: 85,
    informationStyle: {
      marginLeft: 30,
      width: 'auto'
    },
    author: id,
    userId: userId,
    authorId: id,
    title: name,
    titleStyle: {
      display: 'block',
      color: '#333333',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: '10px',
      lineHeight: '22px',
      textTransform: 'capitalize'
    },
    addressIcon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosPin"], {
      size: 21,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }),
    address: address,
    websiteIcon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosGlobe"], {
      size: 20,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }),
    website: website,
    phoneIcon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosCall"], {
      size: 20,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }),
    phoneNumber: authorNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx("div", {
    style: {
      paddingTop: 60,
      paddingLeft: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    style: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingTop: 10,
      paddingBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_components_TabView__WEBPACK_IMPORTED_MODULE_8__["default"], {
    menuIcon: __jsx("span", {
      style: {
        color: tabStates.tabState === 'postlist' ? '#333333' : '#8C8C8C',
        marginRight: 7
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosPaper"], {
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })),
    iconPosition: "left",
    menuText: "Published",
    menuTextColor: tabStates.tabState === 'postlist' ? '#333333' : '#8C8C8C',
    count: posts && posts.total ? posts.total : 0,
    onClick: handleTabToggle.bind(this, 'postlist'),
    style: {
      marginRight: 50,
      display: 'inline-flex',
      marginBottom: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(_components_TabView__WEBPACK_IMPORTED_MODULE_8__["default"], {
    menuIcon: __jsx("span", {
      style: {
        color: tabStates.tabState === 'favorite' ? '#333333' : '#8C8C8C',
        marginRight: 7
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosHeart"], {
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    })),
    iconPosition: "left",
    menuText: "Favourite",
    menuTextColor: tabStates.tabState === 'favorite' ? '#333333' : '#8C8C8C',
    count: favouritePostCount,
    onClick: handleTabToggle.bind(this, 'favorite'),
    style: {
      marginRight: 50,
      display: 'inline-flex',
      marginBottom: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), userId && userId === id ? __jsx(_components_TabView__WEBPACK_IMPORTED_MODULE_8__["default"], {
    menuIcon: __jsx("span", {
      style: {
        color: tabStates.tabState === 'draft' ? '#333333' : '#8C8C8C',
        marginRight: 7
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoMdArchive"], {
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    })),
    iconPosition: "left",
    menuText: "Drafts",
    menuTextColor: tabStates.tabState === 'draft' ? '#333333' : '#8C8C8C',
    count: draftPostCount,
    onClick: handleTabToggle.bind(this, 'draft'),
    style: {
      marginRight: 50,
      display: 'inline-flex',
      marginBottom: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }) : null)), __jsx("div", {
    style: {
      paddingBottom: 80,
      paddingTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, tabStates.tabState === 'postlist' ? __jsx(_userListing__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }) : null, tabStates.tabState === 'favorite' ? __jsx(_userFavourite__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }) : null, tabStates.tabState === 'draft' && userId === id ? __jsx(_userDraft__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }) : null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./containers/Profile/userDraft.js":
/*!*****************************************!*\
  !*** ./containers/Profile/userDraft.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Placeholder */ "./components/Placeholder/index.js");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-styled-flexboxgrid */ "react-styled-flexboxgrid");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_navigation_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/navigation/constant */ "../../node_modules/@headless/core/navigation/constant.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/graphql/Profile.query */ "../../node_modules/@headless/core/graphql/Profile.query.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Config */ "./Config.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard/index.js");
/* harmony import */ var reusecore_src_elements_ListGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/ListGrid */ "../../node_modules/reusecore/src/elements/ListGrid/index.js");
/* harmony import */ var _components_NoItemFound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/NoItemFound */ "./components/NoItemFound.js");
/* harmony import */ var _components_OnError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/OnError */ "./components/OnError.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/containers/Profile/userDraft.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function UserListingPost({
  router: {
    query: {
      username
    }
  }
}) {
  const {
    0: loadingMore,
    1: toggleLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: page,
    1: paginate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  let QUERY_VARIABLES;
  QUERY_VARIABLES = {
    USERNAME: username,
    LIMIT: 12
  };
  const {
    data,
    loading,
    error,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_7__["GET_DRAFT_POST"], {
    variables: QUERY_VARIABLES
  });
  const userDraftPosts = data && data.author && data.author.draft && data.author.draft.data ? data.author.draft.data : [];
  const totalPost = data && data.author && data.author.draft ? data.author.draft.total : 0;
  const postCount = userDraftPosts.length;
  if (error) return __jsx(_components_OnError__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  });
  return __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, !loading && userDraftPosts.length === 0 ? __jsx(_components_NoItemFound__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }) : __jsx(reusecore_src_elements_ListGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: userDraftPosts,
    totalPost: totalPost,
    postCount: postCount,
    columnWidth: ['100%', '50%', '33.33%', '25%'],
    component: item => {
      const postImg = item.image ? item.image.url : '';
      const postFallbackImage = item.image ? item.image.largeUrl : '';
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_5__["SINGLE_POST_PAGE"]}/${item.slug}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        currency: _Config__WEBPACK_IMPORTED_MODULE_8__["CURRENCY"],
        title: item.title,
        price: item.price,
        imageSrc: [postImg, postFallbackImage],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })));
    },
    loading: loading ? loading : loadingMore,
    placeholder: __jsx(_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__["PostLoader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }),
    limit: QUERY_VARIABLES.LIMIT,
    handleLoadMore: loading => {
      toggleLoading(true);
      paginate(page + 1);
      fetchMore({
        variables: {
          page: page + 1
        },
        updateQuery: (prev, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            toggleLoading(false);
            return prev;
          }

          const oldPosts = prev.author.draft.data;
          const newPosts = fetchMoreResult.author.draft.data;

          if (postCount && totalPost) {
            if (postCount <= totalPost) {
              toggleLoading(false);
              const concatedPosts = oldPosts.concat(newPosts);
              fetchMoreResult.author.draft.data = concatedPosts;
              return fetchMoreResult;
            }
          }
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
}));

/***/ }),

/***/ "./containers/Profile/userFavourite.js":
/*!*********************************************!*\
  !*** ./containers/Profile/userFavourite.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Placeholder */ "./components/Placeholder/index.js");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-styled-flexboxgrid */ "react-styled-flexboxgrid");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_navigation_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/navigation/constant */ "../../node_modules/@headless/core/navigation/constant.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/graphql/Profile.query */ "../../node_modules/@headless/core/graphql/Profile.query.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Config */ "./Config.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard/index.js");
/* harmony import */ var reusecore_src_elements_ListGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/ListGrid */ "../../node_modules/reusecore/src/elements/ListGrid/index.js");
/* harmony import */ var _components_NoItemFound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/NoItemFound */ "./components/NoItemFound.js");
/* harmony import */ var _components_OnError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/OnError */ "./components/OnError.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/containers/Profile/userFavourite.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(function FavouritePost({
  router: {
    query: {
      username
    }
  }
}) {
  const {
    0: loadingMore,
    1: toggleLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: page,
    1: paginate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1); // QUERY SECTION

  let QUERY_VARIABLES;
  QUERY_VARIABLES = {
    USERNAME: username,
    LIMIT: 12
  };
  const {
    data,
    loading,
    error,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_6__["GET_FAVOURITE_POST"], {
    variables: QUERY_VARIABLES
  });
  const favouritePosts = data && data.author && data.author.favourite && data.author.favourite.data ? data.author.favourite.data : [];
  const favouritePostCount = data && data.author && data.author.favourite ? data.author.favourite.total : 0;
  const totalPost = favouritePostCount; // this line will be removed by GET ALL POST

  const postCount = favouritePosts.length;
  if (error) return __jsx(_components_OnError__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }); // Post Loop Control Area

  return __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, !loading && favouritePosts.length === 0 ? __jsx(_components_NoItemFound__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }) : __jsx(reusecore_src_elements_ListGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: favouritePosts,
    totalPost: totalPost,
    postCount: postCount,
    columnWidth: ['100%', '50%', '33.33%', '25%'],
    component: item => {
      const postImg = item.image ? item.image.url : '';
      const postFallbackImage = item.image ? item.image.largeUrl : '';
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_4__["SINGLE_POST_PAGE"]}/${item.slug}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        currency: _Config__WEBPACK_IMPORTED_MODULE_7__["CURRENCY"],
        title: item.title,
        price: item.price,
        imageSrc: [postImg, postFallbackImage],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })));
    },
    loading: loading ? loading : loadingMore,
    placeholder: __jsx(_components_Placeholder__WEBPACK_IMPORTED_MODULE_2__["PostLoader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }),
    limit: QUERY_VARIABLES.LIMIT,
    handleLoadMore: loading => {
      toggleLoading(true);
      paginate(page + 1);
      fetchMore({
        variables: {
          page: page + 1
        },
        updateQuery: (prev, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            toggleLoading(false);
            return prev;
          }

          const oldPosts = prev.author.favourite.data;
          const newPosts = fetchMoreResult.author.favourite.data;

          if (postCount && totalPost) {
            if (postCount <= totalPost) {
              toggleLoading(false);
              const concatedPosts = oldPosts.concat(newPosts);
              fetchMoreResult.author.favourite.data = concatedPosts;
              return fetchMoreResult;
            }
          }
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
}));

/***/ }),

/***/ "./containers/Profile/userListing.js":
/*!*******************************************!*\
  !*** ./containers/Profile/userListing.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Placeholder */ "./components/Placeholder/index.js");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-styled-flexboxgrid */ "react-styled-flexboxgrid");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_navigation_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/navigation/constant */ "../../node_modules/@headless/core/navigation/constant.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/graphql/Profile.query */ "../../node_modules/@headless/core/graphql/Profile.query.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Config */ "./Config.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard/index.js");
/* harmony import */ var reusecore_src_elements_ListGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/ListGrid */ "../../node_modules/reusecore/src/elements/ListGrid/index.js");
/* harmony import */ var _components_NoItemFound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/NoItemFound */ "./components/NoItemFound.js");
/* harmony import */ var _components_OnError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/OnError */ "./components/OnError.js");
var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/containers/Profile/userListing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function UserListingPost({
  router: {
    query: {
      username
    }
  }
}) {
  const {
    0: loadingMore,
    1: toggleLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: page,
    1: paginate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1); // QUERY SECTION

  let QUERY_VARIABLES = {
    USERNAME: username,
    LIMIT: 12
  };
  const {
    data,
    loading,
    error,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(core_graphql_Profile_query__WEBPACK_IMPORTED_MODULE_7__["GET_PUBLISHED_POST"], {
    variables: QUERY_VARIABLES
  });
  const userListingPosts = data && data.author && data.author.posts && data.author.posts.data ? data.author.posts.data : [];
  const publishedPostCount = data && data.author && data.author.posts ? data.author.posts.total : 0;
  const totalPost = publishedPostCount; // this line will be removed by GET ALL POST

  const postCount = userListingPosts.length;
  if (error) return __jsx(_components_OnError__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  });
  return __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, !loading && userListingPosts.length === 0 ? __jsx(_components_NoItemFound__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }) : __jsx(reusecore_src_elements_ListGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: userListingPosts,
    totalPost: totalPost,
    postCount: postCount,
    columnWidth: ['100%', '50%', '33.33%', '25%'],
    component: item => {
      const postImg = item.image ? item.image.url : '';
      const postFallbackImage = item.image ? item.image.largeUrl : '';
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `${core_navigation_constant__WEBPACK_IMPORTED_MODULE_5__["SINGLE_POST_PAGE"]}/${item.slug}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        currency: _Config__WEBPACK_IMPORTED_MODULE_8__["CURRENCY"],
        title: item.title,
        price: item.price,
        imageSrc: [postImg, postFallbackImage],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })));
    },
    loading: loading ? loading : loadingMore,
    placeholder: __jsx(_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__["PostLoader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }),
    limit: QUERY_VARIABLES.LIMIT,
    handleLoadMore: loading => {
      toggleLoading(true);
      paginate(page + 1);
      fetchMore({
        variables: {
          page: page + 1
        },
        updateQuery: (prev, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            toggleLoading(false);
            return prev;
          }

          const oldPosts = prev.author.posts.data;
          const newPosts = fetchMoreResult.author.posts.data;

          if (postCount && totalPost) {
            if (postCount <= totalPost) {
              toggleLoading(false);
              const concatedPosts = oldPosts.concat(newPosts);
              fetchMoreResult.author.posts.data = concatedPosts;
              return fetchMoreResult;
            }
          }
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }));
}));

/***/ }),

/***/ "./helpers/apollo.js":
/*!***************************!*\
  !*** ./helpers/apollo.js ***!
  \***************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./session */ "./helpers/session.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Config */ "./Config.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/helpers/apollo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










 // import cookie from 'cookie';

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["apolloClient", "apolloState"]);

    const client = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(() => {
      // We pass in the apolloClient directly when using getDataFromTree
      if (apolloClient) {
        return apolloClient;
      } // Otherwise initClient using apolloState


      return initApolloClient(apolloState, {
        getToken
      });
    }, []);
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["ApolloProvider"], {
      client: client,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(PageComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })));
  };

  if (true) {
    // Find correct display name
    const displayName = PageComponent.displayName || PageComponent.name || 'Component'; // Warn if old way of installing apollo is used

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    } // Set correct display name for devtools


    WithApollo.displayName = `withApollo(${displayName})`; // Add some prop types

    WithApollo.propTypes = {
      // Used for getDataFromTree rendering
      apolloClient: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object,
      // Used for client/server rendering
      apolloState: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object
    };
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Run all GraphQL queries in the component tree
      // and extract the resulting data

      const apolloClient = ctx.apolloClient = initApolloClient({}, {
        getToken: () => getToken(ctx)
      });
      const pageProps = PageComponent.getInitialProps ? await PageComponent.getInitialProps(ctx) : {}; // Only on the server

      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return {};
        }

        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ "@apollo/react-ssr", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
                apolloClient
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }
        } // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually


        next_head__WEBPACK_IMPORTED_MODULE_4___default.a.rewind();
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        apolloState
      });
    };
  }

  return WithApollo;
}
let apolloClient = null;
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */

function initApolloClient(...args) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(...args);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createApolloClient(...args);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */


function createApolloClient(initialState = {}, {
  getToken
}) {
  const fetchOptions = {}; // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
  // 'https-proxy-agent' is required here because it's a sever-side only module

  if (true) {
    if (process.env.https_proxy) {
      fetchOptions.agent = new (__webpack_require__(/*! https-proxy-agent */ "https-proxy-agent"))(process.env.https_proxy);
    }
  }

  const httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_8__["HttpLink"]({
    uri: _Config__WEBPACK_IMPORTED_MODULE_12__["GRAPHQL_URL"],
    // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()),
    fetchOptions
  });
  const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_9__["setContext"])((request, {
    headers
  }) => {
    const token = getToken();
    return {
      headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
        authorization: token ? token : ''
      })
    };
  }); // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  return new apollo_client__WEBPACK_IMPORTED_MODULE_6__["ApolloClient"]({
    ssrMode: true,
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__["InMemoryCache"]({
      dataIdFromObject: object => object.id || null,
      addTypename: false
    }).restore(initialState)
  });
}
/**
 * Get the user token from cookie
 * @param {Object} req
 */


function getToken(ctx) {
  // const cookies = cookie.parse(req ? req.headers.cookie || '' : document.cookie)
  const token = Object(_session__WEBPACK_IMPORTED_MODULE_11__["getFirebaseCookie"])('id_token', ctx);
  return token;
}

/***/ }),

/***/ "./helpers/authHelper.js":
/*!*******************************!*\
  !*** ./helpers/authHelper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./helpers/init.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session */ "./helpers/session.js");




/**
 * Firebase Authentication helper functions
 */

class AuthHelper {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "signUp", async (provider, email, password) => {
      try {
        switch (provider) {
          case 'password':
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
              Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().createUserWithEmailAndPassword(email, password).then(result => {
                resolve(result);
              }).catch(error => {
                resolve({
                  error
                });
              });
            });
        }
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "forgetPass", async email => {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().sendPasswordResetEmail(email).then(result => {
          resolve(true);
        }).catch(error => {
          resolve({
            error
          });
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "reauthenticate", async currentPassword => {
      var user = Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().currentUser;
      var cred = _init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"].EmailAuthProvider.credential(user.email, currentPassword);
      return user.reauthenticateWithCredential(cred);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "changePassword", async (currentPassword, newPassword) => new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
      try {
        this.reauthenticate(currentPassword).then(() => {
          var user = Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().currentUser;
          user.updatePassword(newPassword).then(() => {
            resolve(true);
          }).catch(error => {
            resolve({
              error
            });
          });
        }).catch(error => {
          resolve({
            error
          });
        });
      } catch (error) {
        resolve({
          error
        });
      }
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "login", async (provider, email = null, password = null, phoneNumber = null) => {
      try {
        switch (provider) {
          case 'password':
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
              Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().signInWithEmailAndPassword(email, password).then(result => {
                resolve(result);
              }).catch(error => {
                resolve({
                  error
                });
              });
            });

          case 'google':
            var authProvider = new _init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"].GoogleAuthProvider();
            return Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().signInWithPopup(authProvider);

          case 'facebook':
            var authProvider = new _init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"].FacebookAuthProvider();
            return Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().signInWithPopup(authProvider);

          case 'twitter':
            var authProvider = new _init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"].TwitterAuthProvider();
            return Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().signInWithPopup(authProvider);

          case 'phone':
            let appVerifier;
            appVerifier = window.recaptchaVerifier;
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
              Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().signInWithPhoneNumber(phoneNumber, appVerifier).then(result => {
                resolve(result);
              }).catch(error => {
                resolve({
                  error
                });
              });
            });
        }
      } catch (error) {
        console.error(error);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "confirmVerification", async (confirmationResult, code) => {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        confirmationResult.confirm(code).then(result => {
          resolve(result.user);
        }).catch(function (error) {
          resolve({
            error
          });
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getToken", async User => {
      try {
        return User.getIdToken();
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "refreshToken", async () => {
      await Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().currentUser.getIdToken(true).then(function (idToken) {
        Object(_session__WEBPACK_IMPORTED_MODULE_3__["setFirebaseCookie"])('id_token', idToken);
      }).catch(function (error) {});
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "logout", async () => {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        try {
          Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().signOut().then(() => {
            resolve(true);
          });
        } catch (error) {
          reject(false);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "isAuthenticated", async () => {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        const unsubscribe = Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().onAuthStateChanged(authUser => {
          resolve(authUser);
          unsubscribe();
        }, error => reject(error));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getCurrentUser", async () => {
      return Object(_init__WEBPACK_IMPORTED_MODULE_2__["firebaseAuth"])().currentUser;
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthHelper());

/***/ }),

/***/ "./helpers/firebase.config.js":
/*!************************************!*\
  !*** ./helpers/firebase.config.js ***!
  \************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
  apiKey: "AIzaSyBNxNm3WHGdtx0Ng2G3it4JoWJG6j33QzQ",
  authDomain: "sellia-42377.firebaseapp.com",
  databaseURL: "https://sellia-42377.firebaseio.com",
  projectId: "sellia-42377",
  storageBucket: "sellia-42377.appspot.com",
  messagingSenderId: "811194527227"
};

/***/ }),

/***/ "./helpers/init.js":
/*!*************************!*\
  !*** ./helpers/init.js ***!
  \*************************/
/*! exports provided: db, storage, firebaseAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseAuth", function() { return firebaseAuth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase.config */ "./helpers/firebase.config.js");




 // https://github.com/zeit/next.js/issues/1999#issuecomment-302244429
// For stopping reinitialization

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_4__["config"]);
}

const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();
const firebaseAuth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth;


/***/ }),

/***/ "./helpers/redirect.js":
/*!*****************************!*\
  !*** ./helpers/redirect.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Redirect to any given url
 */

/* harmony default export */ __webpack_exports__["default"] = ((context = {}, target) => {
  if (context.res) {
    context.res.writeHead(303, {
      Location: target
    });
    context.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(target);
  }
});

/***/ }),

/***/ "./helpers/session.js":
/*!****************************!*\
  !*** ./helpers/session.js ***!
  \****************************/
/*! exports provided: getCookie, setCookie, removeCookie, setFirebaseCookie, removeFirebaseCookie, getFirebaseCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFirebaseCookie", function() { return setFirebaseCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFirebaseCookie", function() { return removeFirebaseCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirebaseCookie", function() { return getFirebaseCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);


const FIREBASE_COOKIE = '__session';

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};

const getCookieFromServer = (ctx, key = 'id_token') => {
  const cookie = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(ctx);
  const token = cookie && cookie[key] ? cookie[key] : false;
  if (!token) return null;
  return token;
};

const getCookie = (key, context = {}) => {
  return  false ? undefined : getCookieFromServer(context, key);
};
const setCookie = (key, token) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, token, {
    expires: 7
  });
};
const removeCookie = key => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key);
};
const setFirebaseCookie = (key, token) => {
  // get cookie from __session using getCookie function
  // parse the data from cookie
  // assign the token to the key
  // call set cookie function with the new data
  try {
    const cookieData = getCookie(FIREBASE_COOKIE);
    const data = cookieData ? JSON.parse(cookieData) : {};
    data[key] = token;
    setCookie(FIREBASE_COOKIE, data);
  } catch (error) {
    console.log(error, 'setFirebaseCookie');
  }
};
const removeFirebaseCookie = key => {
  // get cookie from __session  using getCookie function
  // parse the data from cookie
  // remove the key from the data
  // call set cookie function with the new data
  try {
    const cookieData = getCookie(FIREBASE_COOKIE);
    const data = cookieData ? JSON.parse(cookieData) : {};

    if (data && data.hasOwnProperty(key)) {
      delete data[key];
      setCookie(FIREBASE_COOKIE, data);
    } else {// console.log(
      //   `${key} is probably not available inside the cookie removeFirebaseCookie`
      // );
    }
  } catch (error) {
    console.log(error, 'removeFirebaseCookie');
  }
};
const getFirebaseCookie = (key, context = false) => {
  // get cookie from __session using getCookie function
  // parse the data from cookie
  // get the relatedData using the key
  try {
    const cookieData = getCookie(FIREBASE_COOKIE, context);
    const data = cookieData ? JSON.parse(cookieData) : {};

    if (data && data.hasOwnProperty(key)) {
      return data[key];
    } else {// console.log(
      //   `${key} is probably not available inside the cookie getFirebaseCookie`
      // );
    }
  } catch (error) {
    console.log(error, 'getFirebaseCookie');
  }
};

/***/ }),

/***/ "./hoc/withLayout.js":
/*!***************************!*\
  !*** ./hoc/withLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/session */ "./helpers/session.js");
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Layout */ "./containers/Layout/index.js");

var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/hoc/withLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/**
 * HOC for all pages except authentication routes like login route.
 *  This is where we have placed our top bar and menus
 */

/* harmony default export */ __webpack_exports__["default"] = (ComposedComponent => class withLayout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps(context) {
    const token = await Object(_helpers_session__WEBPACK_IMPORTED_MODULE_2__["getFirebaseCookie"])('id_token', context);
    const location = await Object(_helpers_session__WEBPACK_IMPORTED_MODULE_2__["getFirebaseCookie"])('currentLocation', context);
    const user = await Object(_helpers_session__WEBPACK_IMPORTED_MODULE_2__["getFirebaseCookie"])('user', context);
    const isLoggedIn = token ? true : false;
    return {
      isLoggedIn,
      pathname: context.pathname,
      location,
      userId: user ? user.userId : 'false',
      email: user ? user.email : false,
      error: user ? user.error : false
    };
  }

  render() {
    return __jsx(_containers_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userId: this.props.userId,
      isLoggedIn: this.props.isLoggedIn,
      pathname: this.props.pathname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(ComposedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }

});

/***/ }),

/***/ "./pages/profile/[username].js":
/*!*************************************!*\
  !*** ./pages/profile/[username].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/Profile */ "./containers/Profile/index.js");
/* harmony import */ var _hoc_withLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hoc/withLayout */ "./hoc/withLayout.js");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageMeta */ "./components/PageMeta/index.js");
/* harmony import */ var _helpers_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/apollo */ "./helpers/apollo.js");

var _jsxFileName = "/Users/bhavikshah/Work/headless-graphql/packages/web/pages/profile/[username].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_apollo__WEBPACK_IMPORTED_MODULE_6__["withApollo"])(Object(_hoc_withLayout__WEBPACK_IMPORTED_MODULE_4__["default"])(props => {
  const {
    query: {
      username
    }
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_PageMeta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Profile Page",
    description: "Profile Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_containers_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    username: username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })));
})));

/***/ }),

/***/ 7:
/*!*******************************************!*\
  !*** multi ./pages/profile/[username].js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bhavikshah/Work/headless-graphql/packages/web/pages/profile/[username].js */"./pages/profile/[username].js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "https-proxy-agent":
/*!************************************!*\
  !*** external "https-proxy-agent" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https-proxy-agent");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/ionicons/androidClose":
/*!********************************************************!*\
  !*** external "react-icons-kit/ionicons/androidClose" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidClose");

/***/ }),

/***/ "react-icons-kit/ionicons/androidSearch":
/*!*********************************************************!*\
  !*** external "react-icons-kit/ionicons/androidSearch" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidSearch");

/***/ }),

/***/ "react-icons-kit/ionicons/more":
/*!************************************************!*\
  !*** external "react-icons-kit/ionicons/more" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/more");

/***/ }),

/***/ "react-icons-kit/ionicons/naviconRound":
/*!********************************************************!*\
  !*** external "react-icons-kit/ionicons/naviconRound" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/naviconRound");

/***/ }),

/***/ "react-icons-kit/ionicons/plusRound":
/*!*****************************************************!*\
  !*** external "react-icons-kit/ionicons/plusRound" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/plusRound");

/***/ }),

/***/ "react-icons-kit/ionicons/socialFacebook":
/*!**********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialFacebook" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialFacebook");

/***/ }),

/***/ "react-icons-kit/ionicons/socialGoogleplus":
/*!************************************************************!*\
  !*** external "react-icons-kit/ionicons/socialGoogleplus" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGoogleplus");

/***/ }),

/***/ "react-icons-kit/ionicons/socialInstagram":
/*!***********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialInstagram" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialInstagram");

/***/ }),

/***/ "react-icons-kit/ionicons/socialPinterest":
/*!***********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialPinterest" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialPinterest");

/***/ }),

/***/ "react-icons-kit/ionicons/socialTwitter":
/*!*********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialTwitter" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialTwitter");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "react-styled-flexboxgrid":
/*!*******************************************!*\
  !*** external "react-styled-flexboxgrid" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-styled-flexboxgrid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "styled-theme":
/*!*******************************!*\
  !*** external "styled-theme" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[username].js.map