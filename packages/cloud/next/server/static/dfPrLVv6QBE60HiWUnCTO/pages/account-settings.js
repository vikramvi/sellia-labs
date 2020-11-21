module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		20: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/MbW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rNCn");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "0FtI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// EXTERNAL MODULE: external "firebase/storage"
var storage_ = __webpack_require__("ha8t");

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__("EuFW");

// CONCATENATED MODULE: ./helpers/firebase.config.js
const config = {
  apiKey: "AIzaSyBNxNm3WHGdtx0Ng2G3it4JoWJG6j33QzQ",
  authDomain: "sellia-42377.firebaseapp.com",
  databaseURL: "https://sellia-42377.firebaseio.com",
  projectId: "sellia-42377",
  storageBucket: "sellia-42377.appspot.com",
  messagingSenderId: "811194527227"
};
// CONCATENATED MODULE: ./helpers/init.js
/* unused harmony export db */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseAuth; });




 // https://github.com/zeit/next.js/issues/1999#issuecomment-302244429
// For stopping reinitialization

if (!app_default.a.apps.length) {
  app_default.a.initializeApp(config);
}

const db = app_default.a.firestore();
const storage = app_default.a.storage();
const firebaseAuth = app_default.a.auth;


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GYaf");


/***/ }),

/***/ "23at":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/Post.js

const ADD_POST = external_graphql_tag_default.a`
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
// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/Author.js

const UPDATE_AUTHOR = external_graphql_tag_default.a`
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
const HANDLE_FAV = external_graphql_tag_default.a`
  mutation($fav: adFavInput!) {
    handleFav(input: $fav) {
      data {
        id
      }
    }
  }
`;
const GET_VERIFICATION_CODE = external_graphql_tag_default.a`
  mutation GetVerificationCode($mobileNumber: InputMobileNumber!) {
    getVerificationCode(input: $mobileNumber) {
      id
      code
    }
  }
`;
const VERIFY_CODE = external_graphql_tag_default.a`
  mutation VerifyCode($verify: InputVerifyNumber!) {
    verifyCode(input: $verify) {
      token
    }
  }
`;
const LOGIN = external_graphql_tag_default.a`
  mutation Login($user: RegisterInput!) {
    login(input: $user) {
      userId
      email
      error
    }
  }
`;
const LOGOUT = external_graphql_tag_default.a`
  mutation Logout($user: RegisterInput!) {
    logout(input: $user) {
      userId
      email
      error
    }
  }
`;
const REGISTER = external_graphql_tag_default.a`
  mutation Register($user: RegisterInput!) {
    register(input: $user) {
      userId
      email
      error
    }
  }
`;
const RESET_PASS = external_graphql_tag_default.a`
  mutation ResetPass($resetPass: ResetPassInput!) {
    resetPass(input: $resetPass) {
      userId
      token
    }
  }
`;
const FOREGET_PASS_MAIL = external_graphql_tag_default.a`
  mutation ForgetPassMail($forgetPassMail: ForgetPassMailInput!) {
    forgetPassMail(input: $forgetPassMail) {
      message
    }
  }
`;
// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/Image.js

const UPLOAD_IMAGE = external_graphql_tag_default.a`
  mutation UploadImage($image: Upload!) {
    addImage(input: $image) {
      id
      url
    }
  }
`;
// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/index.js
/* concated harmony reexport ADD_POST */__webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST; });
/* concated harmony reexport UPDATE_AUTHOR */__webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_AUTHOR; });
/* unused concated harmony import UPLOAD_IMAGE */
/* unused concated harmony import GET_VERIFICATION_CODE */
/* unused concated harmony import VERIFY_CODE */
/* concated harmony reexport LOGIN */__webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN; });
/* unused concated harmony import LOGOUT */
/* concated harmony reexport REGISTER */__webpack_require__.d(__webpack_exports__, "d", function() { return REGISTER; });
/* unused concated harmony import RESET_PASS */
/* unused concated harmony import FOREGET_PASS_MAIL */
/* concated harmony reexport HANDLE_FAV */__webpack_require__.d(__webpack_exports__, "b", function() { return HANDLE_FAV; });





/***/ }),

/***/ "2MIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("uFB0"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4a4h":
/***/ (function(module, exports) {

module.exports = require("react-styled-flexboxgrid");

/***/ }),

/***/ "5+dE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("LcAa");

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

/***/ "5MSs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./helpers/session.js
var session = __webpack_require__("mYvP");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-icons-kit/ionicons/naviconRound"
var naviconRound_ = __webpack_require__("WP9X");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/plusRound"
var plusRound_ = __webpack_require__("tC7y");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/more"
var more_ = __webpack_require__("OYcf");

// CONCATENATED MODULE: ./components/Loader/spinnerLoader.js
var __jsx = external_react_default.a.createElement;


const circleFadeDelay = Object(external_styled_components_["keyframes"])(["0%,39%,100%{opacity:0;}40%{opacity:1;}"]);
const SpinnerWrapper = external_styled_components_default()('div').withConfig({
  displayName: "spinnerLoader__SpinnerWrapper",
  componentId: "jyu1mj-0"
})(["margin:40px auto;width:40px;height:40px;position:relative;"]);
const FullPageSpinnerWrapper = external_styled_components_default()('div').withConfig({
  displayName: "spinnerLoader__FullPageSpinnerWrapper",
  componentId: "jyu1mj-1"
})(["width:100%;height:100%;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;background-color:rgba(255,255,255,0.9);z-index:999999;"]);
const SpinnerBall = external_styled_components_default()('div').withConfig({
  displayName: "spinnerLoader__SpinnerBall",
  componentId: "jyu1mj-2"
})(["width:100%;height:100%;position:absolute;left:0;top:0;&:before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:", " 1.2s infinite ease-in-out both;animation:", " 1.2s infinite ease-in-out both;}&.singleSpinner2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg);&:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s;}}&.singleSpinner3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg);&:before{-webkit-animation-delay:-1s;animation-delay:-1s;}}&.singleSpinner4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);&:before{-webkit-animation-delay:-0.9s;animation-delay:-0.9s;}}&.singleSpinner5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg);&:before{-webkit-animation-delay:-0.8s;animation-delay:-0.8s;}}&.singleSpinner6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg);&:before{-webkit-animation-delay:-0.7s;animation-delay:-0.7s;}}&.singleSpinner7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);&:before{-webkit-animation-delay:-0.6s;animation-delay:-0.6s;}}&.singleSpinner8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg);&:before{-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}}&.singleSpinner9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg);&:before{-webkit-animation-delay:-0.4s;animation-delay:-0.4s;}}&.singleSpinner10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);&:before{-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}}&.singleSpinner11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg);&:before{-webkit-animation-delay:-0.2s;animation-delay:-0.2s;}}&.singleSpinner12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg);&:before{-webkit-animation-delay:-0.1s;animation-delay:-0.1s;}}"], circleFadeDelay, circleFadeDelay);

const SpinnerLoader = props => __jsx(SpinnerWrapper, null, Array.apply(null, {
  length: 12
}).map((e, i) => __jsx(SpinnerBall, {
  className: `singleSpinner` + (i + 1),
  key: i
})));

const FullPageSpinner = props => __jsx(FullPageSpinnerWrapper, null, __jsx(SpinnerLoader, null));


// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/index.js + 3 modules
var Mutations = __webpack_require__("23at");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Profile.query.js
var Profile_query = __webpack_require__("mz0A");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./helpers/authHelper.js
var authHelper = __webpack_require__("ke4W");

// EXTERNAL MODULE: ./helpers/redirect.js
var redirect = __webpack_require__("dCsE");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/androidClose"
var androidClose_ = __webpack_require__("SYf/");

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Button/index.js + 1 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: ./components/Logo/index.js
var Logo = __webpack_require__("IDnS");

// EXTERNAL MODULE: ./components/InputSearch/index.js + 1 modules
var InputSearch = __webpack_require__("qK9r");

// CONCATENATED MODULE: ./components/Search/Search.style.js

const SearchWrapper = external_styled_components_default()('div').withConfig({
  displayName: "Searchstyle__SearchWrapper",
  componentId: "sc-1gt92og-0"
})(["position:relative;width:100%;margin-left:50px;@media only screen and (max-width:479px){margin-left:0px;}"]);
const SearchBox = external_styled_components_default()('div').withConfig({
  displayName: "Searchstyle__SearchBox",
  componentId: "sc-1gt92og-1"
})(["border-radius:3px;position:absolute;border:1px solid #e2e2e2;top:0;right:0;@media only screen and (max-width:767px){top:3px;form{height:40px;}}&.expanded{width:100%;opacity:1;transition:width ease-in-out 500ms,opacity ease-in-out 500ms;@media only screen and (max-width:767px){width:calc(100% - 10px);}}&.collapsed{width:0;opacity:0;transition:width ease-in-out 500ms,opacity ease-in-out 500ms;}"]);
const SearchResultWrapper = external_styled_components_default()('ul').withConfig({
  displayName: "Searchstyle__SearchResultWrapper",
  componentId: "sc-1gt92og-2"
})(["box-sizing:border-box;position:absolute;background-color:#fff;z-index:10;width:100%;list-style-type:none;border-radius:0 0 3px 3px;padding:0;width:100%;margin:4px 0 0;padding-bottom:10px;box-shadow:0 3px 10px rgba(0,0,0,0.16);&.showSuggestion{opacity:1;transition:opacity ease-in-out 500ms;}&.hideSuggestion{opacity:0;transition:opacity ease-in-out 500ms;}"]);
const ItemWrapper = external_styled_components_default()('li').withConfig({
  displayName: "Searchstyle__ItemWrapper",
  componentId: "sc-1gt92og-3"
})(["padding:0.7rem 1.5rem;cursor:pointer;font-family:'Lato',sans-serif;font-size:16px;font-weight:400;color:#333;&:hover{background-color:#f4f4f4;}"]);
const SubmenuHeading = external_styled_components_default()('div').withConfig({
  displayName: "Searchstyle__SubmenuHeading",
  componentId: "sc-1gt92og-4"
})(["display:flex;align-items:center;justify-content:space-between;padding:1.25rem 1.5rem 0.5rem;h3{font-size:14px;font-family:'Poppins';font-weight:600;margin:0;}button{background-color:transparent;border:0;outline:0;font-family:'Lato',sans-serif;font-size:14px;font-weight:400;color:#333;box-shadow:none;cursor:pointer;padding:0;}"]);
/* harmony default export */ var Search_style = (SearchWrapper);
// EXTERNAL MODULE: external "react-icons-kit/ionicons/androidSearch"
var androidSearch_ = __webpack_require__("um89");

// CONCATENATED MODULE: ./components/Search/index.js
var Search_jsx = external_react_default.a.createElement;






function Search() {
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(external_react_["useState"])('');
  const {
    0: toggleSearch,
    1: setToggleSearch
  } = Object(external_react_["useState"])(false);
  let searchRef = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
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

  return Search_jsx(Search_style, {
    ref: searchRef
  }, Search_jsx("div", {
    style: {
      display: 'flex'
    }
  }, Search_jsx(Button["a" /* default */], {
    icon: Search_jsx(external_react_icons_kit_default.a, {
      icon: androidSearch_["androidSearch"],
      size: 24
    }),
    variant: "outlined",
    color: "#8C8C8C",
    onClick: () => setToggleSearch(true),
    style: {
      marginLeft: 'auto',
      border: 'none'
    }
  })), Search_jsx(SearchBox, {
    className: toggleSearch ? 'expanded' : 'collapsed'
  }, Search_jsx(InputSearch["a" /* default */], {
    type: "text",
    value: searchValue,
    changed: handleSearchInput,
    searchText: searchValue,
    buttonIcon: Search_jsx(external_react_icons_kit_default.a, {
      icon: androidSearch_["androidSearch"],
      size: 21
    }),
    placeholder: "10,000 products available"
  })));
}
// EXTERNAL MODULE: ./components/DropdownMenu/index.js + 1 modules
var DropdownMenu = __webpack_require__("Wh0Z");

// EXTERNAL MODULE: external "react-image"
var external_react_image_ = __webpack_require__("bYH+");
var external_react_image_default = /*#__PURE__*/__webpack_require__.n(external_react_image_);

// CONCATENATED MODULE: ./components/Menu/style.js

const MenuWrapper = external_styled_components_default()('nav').withConfig({
  displayName: "style__MenuWrapper",
  componentId: "sc-19pp6gi-0"
})(["display:block;@media (min-width:768px){display:flex;align-items:center;flex-shrink:0;}"]);
const MenuItemWrapper = external_styled_components_default()('span').withConfig({
  displayName: "style__MenuItemWrapper",
  componentId: "sc-19pp6gi-1"
})(["display:block;padding-top:0.5rem;padding-bottom:0.5rem;color:#595959;a{color:#595959;}@media (min-width:768px){display:inline-block;padding-left:", ";padding-right:", ";flex-shrink:0;}"], props => props.paddingX || '1rem', props => props.paddingX || '1rem');
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/user-placeholder.svg
var user_placeholder = __webpack_require__("EV4e");
var user_placeholder_default = /*#__PURE__*/__webpack_require__.n(user_placeholder);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/navigation/constant.js
var constant = __webpack_require__("IzIT");

// CONCATENATED MODULE: ./components/Menu/index.js
var Menu_jsx = external_react_default.a.createElement;








const imageStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%'
};
const DROPDOWN_MENU_ITEMS = [Menu_jsx(link_default.a, {
  href: constant["h" /* SEARCH_PAGE */]
}, Menu_jsx("a", null, "Search Page")), Menu_jsx(link_default.a, {
  href: constant["e" /* NEAREST_POST_PAGE */]
}, Menu_jsx("a", null, "Nearest Post Page")), Menu_jsx(link_default.a, {
  href: constant["g" /* RECENT_POST_PAGE */]
}, Menu_jsx("a", null, "Recent Post Page")), Menu_jsx(link_default.a, {
  href: constant["c" /* CATEGORIES_PAGE */]
}, Menu_jsx("a", null, "Category Page"))];

const Menu = ({
  className,
  userId,
  isLoggedIn,
  logout,
  buttonIcon,
  dropdownMenuIcon,
  avatar
}) => {
  const PROFILE_MENU_ITEMS = [Menu_jsx(link_default.a, {
    href: `${constant["f" /* PROFILE_PAGE */]}/[username]`,
    as: `${constant["f" /* PROFILE_PAGE */]}/${userId}`
  }, Menu_jsx("a", null, "Profile")), Menu_jsx(link_default.a, {
    href: `${constant["a" /* ACCOUNT_SETTING_PAGE */]}?view=edit-profile`
  }, Menu_jsx("a", null, "Account Setting")), Menu_jsx(Button["a" /* default */], {
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
    }
  })];
  return Menu_jsx(MenuWrapper, {
    className: className
  }, Menu_jsx(MenuItemWrapper, null, Menu_jsx(link_default.a, {
    href: constant["d" /* HOME_PAGE */]
  }, Menu_jsx("a", null, " Home "))), Menu_jsx(MenuItemWrapper, null, Menu_jsx(DropdownMenu["a" /* default */], {
    content: dropdownMenuIcon,
    dropdownDirection: "right",
    dropdownItems: DROPDOWN_MENU_ITEMS
  })), Menu_jsx(MenuItemWrapper, null, Menu_jsx(link_default.a, {
    href: `${constant["b" /* ADD_POST */]}/[id]`,
    as: `${constant["b" /* ADD_POST */]}/new`
  }, Menu_jsx("a", null, Menu_jsx(Button["a" /* default */], {
    title: "Add Post",
    icon: buttonIcon,
    iconPosition: "left",
    bg: "transparent",
    color: "#30C56D",
    border: "1px solid #30C56D"
  })))), !isLoggedIn ? Menu_jsx(MenuItemWrapper, {
    paddingX: "0"
  }, Menu_jsx(link_default.a, {
    href: constant["i" /* SIGNIN_PAGE */]
  }, Menu_jsx("a", null, Menu_jsx(Button["a" /* default */], {
    title: "Join Us"
  })))) : Menu_jsx(MenuItemWrapper, null, Menu_jsx(DropdownMenu["a" /* default */], {
    dropdownDirection: "right",
    content: Menu_jsx(external_react_image_default.a, {
      src: avatar,
      loader: Menu_jsx("img", {
        style: imageStyle,
        src: user_placeholder_default.a,
        alt: "profile picture"
      }),
      unloader: Menu_jsx("img", {
        style: imageStyle,
        src: user_placeholder_default.a,
        alt: "profile picture"
      }),
      style: imageStyle
    }),
    dropdownItems: PROFILE_MENU_ITEMS
  })));
};

/* harmony default export */ var components_Menu = (Menu);
// CONCATENATED MODULE: ./components/Navbar/style.js

const NavbarWrapper = external_styled_components_default()('header').withConfig({
  displayName: "style__NavbarWrapper",
  componentId: "cxp4rl-0"
})(["box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;position:fixed;width:100%;height:76px;top:0;left:0;z-index:10;background-color:#ffffff;box-shadow:0 3px 7px rgba(0,0,0,0.06);padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";@media (min-width:769px){.sm-hidden{display:none;}}@media (min-width:992px){.md-hidden{display:none;}}@media (max-width:768px){.md-show{display:none;}height:60px;padding-left:", ";padding-right:", ";}@media (max-width:992px){.lg-show{display:none;}}"], props => props.paddingY || 0, props => props.paddingY || 0, props => props.paddingX || '2rem', props => props.paddingX || '2rem', props => props.paddingX || '1rem', props => props.paddingX || '0');
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/headless-logo.svg
var headless_logo = __webpack_require__("Ppj3");
var headless_logo_default = /*#__PURE__*/__webpack_require__.n(headless_logo);

// CONCATENATED MODULE: ./components/Navbar/index.js
var Navbar_jsx = external_react_default.a.createElement;









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
  return Navbar_jsx(NavbarWrapper, null, Navbar_jsx(Logo["a" /* default */], {
    logoSrc: headless_logo_default.a,
    title: "Headless Logo"
  }), pathname !== '/' && pathname !== constant["h" /* SEARCH_PAGE */] ? Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx(Search, {
    className: "topSearch lg-show",
    style: {
      flexGrow: 1,
      marginLeft: 100,
      marginRight: 100
    }
  })) : null, Navbar_jsx(Button["a" /* default */], {
    icon: buttonIcon,
    onClick: onToggle,
    className: "sm-hidden",
    variant: "textButton"
  }), Navbar_jsx(components_Menu, {
    className: "md-show",
    userId: userId,
    isLoggedIn: isLoggedIn,
    logout: logout,
    buttonIcon: menuButtonIcon,
    dropdownMenuIcon: dropdownMenuIcon,
    avatar: avatar
  }));
};

/* harmony default export */ var components_Navbar = (Navbar);
// CONCATENATED MODULE: ./components/SocialIcon/socialicon.style.js

const SocialIconWrapper = external_styled_components_default()('div').withConfig({
  displayName: "socialiconstyle__SocialIconWrapper",
  componentId: "sc-1vildsp-0"
})(["position:relative;a{display:inline-block;color:#fff;text-decoration:none;transition:0.15s ease-in-out;margin:0 0.8em;&:first-child{margin-left:0;}&:last-child{margin-right:0;}&:hover{> div{color:#30c56d !important;}}> div{display:block;transition:0.15s ease-in-out;}}"]);
/* harmony default export */ var socialicon_style = (SocialIconWrapper);
// CONCATENATED MODULE: ./components/SocialIcon/index.js
var SocialIcon_jsx = external_react_default.a.createElement;




const SocialIcon = props => SocialIcon_jsx(socialicon_style, {
  className: props.className
}, props.icons.map((icon, index) => SocialIcon_jsx(link_default.a, {
  href: icon.path,
  key: index
}, SocialIcon_jsx("a", {
  "aria-label": `social-icon-${index}`
}, icon.icon))));

/* harmony default export */ var components_SocialIcon = (SocialIcon);
// CONCATENATED MODULE: ./components/Footer/style.js

const FooterWrapper = external_styled_components_default()('footer').withConfig({
  displayName: "style__FooterWrapper",
  componentId: "sc-3qovoe-0"
})(["display:flex;justify-content:space-between;align-items:center;padding-left:2rem;padding-right:2rem;padding-top:1.5rem;padding-bottom:1.5rem;background-color:#333;color:#fff;@media (max-width:576px){flex-direction:column;}.footer-copyright{margin:0;display:block;font-size:16px;color:#fff;text-align:right;line-height:1.2;a{color:#fff;text-decoration:none;transition:0.15s ease-in-out;&:hover{color:#30c56d;}}@media screen and (max-width:576px){font-size:14px;margin-top:15px;}}"]);
/* harmony default export */ var style = (FooterWrapper);
// EXTERNAL MODULE: external "react-icons-kit/ionicons/socialTwitter"
var socialTwitter_ = __webpack_require__("F6u6");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/socialPinterest"
var socialPinterest_ = __webpack_require__("hhSj");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/socialInstagram"
var socialInstagram_ = __webpack_require__("DUv9");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/socialFacebook"
var socialFacebook_ = __webpack_require__("9yR2");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/socialGoogleplus"
var socialGoogleplus_ = __webpack_require__("Xz64");

// CONCATENATED MODULE: ./components/Footer/index.js
var Footer_jsx = external_react_default.a.createElement;









const SOCIAL_ICONS = [{
  icon: Footer_jsx(external_react_icons_kit_default.a, {
    icon: socialFacebook_["socialFacebook"],
    size: 18,
    color: "#fff"
  }),
  path: '#'
}, {
  icon: Footer_jsx(external_react_icons_kit_default.a, {
    icon: socialTwitter_["socialTwitter"],
    size: 18,
    color: "#fff"
  }),
  path: '#'
}, {
  icon: Footer_jsx(external_react_icons_kit_default.a, {
    icon: socialInstagram_["socialInstagram"],
    size: 18,
    color: "#fff"
  }),
  path: '#'
}, {
  icon: Footer_jsx(external_react_icons_kit_default.a, {
    icon: socialPinterest_["socialPinterest"],
    size: 18,
    color: "#fff"
  }),
  path: '#'
}, {
  icon: Footer_jsx(external_react_icons_kit_default.a, {
    icon: socialGoogleplus_["socialGoogleplus"],
    size: 18,
    color: "#fff"
  }),
  path: '#'
}];

const footer = () => Footer_jsx(style, null, Footer_jsx(components_SocialIcon, {
  className: "social-icon",
  icons: SOCIAL_ICONS
}), Footer_jsx("p", {
  className: "footer-copyright"
}, "\xA9 ", new Date().getFullYear(), " Headless -", Footer_jsx("a", {
  href: "http://redq.io"
}, "RedQ, Inc.")));

/* harmony default export */ var Footer = (footer);
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Drawer/index.js
var Drawer = __webpack_require__("f9PX");

// CONCATENATED MODULE: ./containers/Layout/index.js
var Layout_jsx = external_react_default.a.createElement;





















const Main = external_styled_components_default.a.main.withConfig({
  displayName: "Layout__Main",
  componentId: "sc-1ece30d-0"
})(["min-height:100vh;min-height:calc(100vh - 153px);"]);
const DrawerWrapper = external_styled_components_default()('div').withConfig({
  displayName: "Layout__DrawerWrapper",
  componentId: "sc-1ece30d-1"
})(["display:inline-flex;flex-direction:column;height:100%;width:100%;padding:70px 20px 50px;"]);
const DrawerLink = external_styled_components_default()('span').withConfig({
  displayName: "Layout__DrawerLink",
  componentId: "sc-1ece30d-2"
})(["display:inline-flex;padding:11px 0;a{color:#333;}"]);
/* harmony default export */ var Layout = (({
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
  } = Object(external_react_["useState"])(false);
  const {
    0: loggingOut,
    1: setloggingOut
  } = Object(external_react_["useState"])(false);
  let userAvatar = '';
  let userFallbackAvatar = '';
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(Profile_query["a" /* GET_AUTHOR_INFO */], {
    variables: {
      USERNAME: userId
    }
  });
  userAvatar = data && data.author && data.author.image && data.author.image.url ? data.author.image.url : '';
  userFallbackAvatar = data && data.author && data.author.image && data.author.image.largeUrl ? data.author.image.largeUrl : '';
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(storePosition);
  };

  const storePosition = position => {
    Object(session["c" /* setFirebaseCookie */])('currentLocation', {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  };

  const handleLogout = async () => {
    setloggingOut(true);
    const isLoggedOut = await authHelper["a" /* default */].logout();
    setloggingOut(false);

    if (isLoggedOut === true) {
      Object(session["b" /* removeFirebaseCookie */])('id_token');
      Object(session["b" /* removeFirebaseCookie */])('user');
      Object(redirect["a" /* default */])({}, '/');
    }
  };

  const handleToggle = () => toggleDrawer(!drawerState);

  const DRAWER_MENU = [{
    path: constant["d" /* HOME_PAGE */],
    name: 'Home'
  }, {
    path: `${constant["b" /* ADD_POST */]}/new`,
    name: 'Add Post'
  }, {
    path: constant["h" /* SEARCH_PAGE */],
    name: 'Search Page'
  }, {
    path: constant["e" /* NEAREST_POST_PAGE */],
    name: 'Nearest Post Page'
  }, {
    path: constant["g" /* RECENT_POST_PAGE */],
    name: 'Recent Post Page'
  }, {
    path: constant["c" /* CATEGORIES_PAGE */],
    name: 'Category Page'
  }];
  return Layout_jsx(external_react_default.a.Fragment, null, loggingOut && Layout_jsx(FullPageSpinner, null), Layout_jsx(components_Navbar, {
    onToggle: handleToggle,
    userId: userId,
    history: history,
    isLoggedIn: isLoggedIn,
    location: location,
    logout: handleLogout,
    buttonIcon: Layout_jsx(external_react_icons_kit_default.a, {
      icon: naviconRound_["naviconRound"],
      size: 21,
      color: "#ffffff"
    }),
    menuButtonIcon: Layout_jsx(external_react_icons_kit_default.a, {
      icon: plusRound_["plusRound"],
      size: 20,
      color: "#595959"
    }),
    dropdownMenuIcon: Layout_jsx(external_react_icons_kit_default.a, {
      icon: more_["more"],
      size: 40,
      color: "#595959"
    }),
    pathname: pathname,
    avatar: [userAvatar, userFallbackAvatar]
  }), drawerState && Layout_jsx(Drawer["a" /* default */], {
    open: drawerState,
    onClose: handleToggle,
    toggleHandler: handleToggle,
    isLoggedIn: isLoggedIn,
    userId: userId,
    logout: logout,
    closeButton: Layout_jsx(external_react_icons_kit_default.a, {
      icon: androidClose_["androidClose"],
      size: 21,
      color: "#333333"
    }),
    closeButtonStyle: {
      display: 'inline-flex',
      position: 'absolute',
      top: 20,
      right: 20,
      cursor: 'pointer'
    }
  }, Layout_jsx(DrawerWrapper, null, DRAWER_MENU.map((item, index) => Layout_jsx(DrawerLink, {
    key: index
  }, Layout_jsx(link_default.a, {
    href: item.path
  }, Layout_jsx("a", null, item.name)))), isLoggedIn ? Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(DrawerLink, {
    key: constant["f" /* PROFILE_PAGE */]
  }, Layout_jsx(link_default.a, {
    href: `${constant["f" /* PROFILE_PAGE */]}/[username]`,
    as: `${constant["f" /* PROFILE_PAGE */]}/${userId}`
  }, Layout_jsx("a", null, "Profile"))), Layout_jsx(DrawerLink, {
    key: constant["a" /* ACCOUNT_SETTING_PAGE */]
  }, Layout_jsx(link_default.a, {
    href: `${constant["a" /* ACCOUNT_SETTING_PAGE */]}?view=edit-profile`
  }, Layout_jsx("a", null, "Account Setting"))), Layout_jsx(Button["a" /* default */], {
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
    }
  })) : Layout_jsx(link_default.a, {
    href: constant["i" /* SIGNIN_PAGE */]
  }, Layout_jsx(Button["a" /* default */], {
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
    }
  })))), Layout_jsx(Main, null, children), Layout_jsx(Footer, null));
});
// CONCATENATED MODULE: ./hoc/withLayout.js
var withLayout_jsx = external_react_default.a.createElement;



/**
 * HOC for all pages except authentication routes like login route.
 *  This is where we have placed our top bar and menus
 */

/* harmony default export */ var hoc_withLayout = __webpack_exports__["a"] = (ComposedComponent => class withLayout extends external_react_["Component"] {
  static async getInitialProps(context) {
    const token = await Object(session["a" /* getFirebaseCookie */])('id_token', context);
    const location = await Object(session["a" /* getFirebaseCookie */])('currentLocation', context);
    const user = await Object(session["a" /* getFirebaseCookie */])('user', context);
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
    return withLayout_jsx(Layout, {
      userId: this.props.userId,
      isLoggedIn: this.props.isLoggedIn,
      pathname: this.props.pathname
    }, withLayout_jsx(ComposedComponent, this.props));
  }

});

/***/ }),

/***/ "5Tpg":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("FIas");

var _Object$defineProperty = __webpack_require__("LcAa");

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

/***/ "5sXw":
/***/ (function(module, exports) {



/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "7xIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Tpg");

var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("uFB0"));

var _defineProperty = _interopRequireDefault(__webpack_require__("LcAa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("L9lV"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("wsRY");

var _withRouter = _interopRequireDefault(__webpack_require__("2MIm"));

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

/***/ "8k7s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9yR2":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialFacebook");

/***/ }),

/***/ "Ax/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-15lufec-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["content"]);

  return __jsx(TextWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Text);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "BHux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorNotification; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "style__FormGroup",
  componentId: "sc-19nqvft-0"
})(["position:relative;span.errorMsg{position:absolute;bottom:-30px;right:0;font-size:12px;color:red;opacity:0;visibility:hidden;transform:scale(0.96);transition:all 300ms ease-out;}&.hasErrorMsg{span.errorMsg{opacity:1;visibility:visible;transform:scale(1);bottom:-22px;right:0;}}"]);
const ErrorNotification = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('p').withConfig({
  displayName: "style__ErrorNotification",
  componentId: "sc-19nqvft-1"
})(["font-family:'Poppins';font-weight:500;font-size:14px;text-align:center;width:100%;color:#f15251;border-radius:3px;"]);


/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "DUv9":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialInstagram");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EV4e":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTIgMTEyLjAwNCI+PHBhdGggZD0iTTM5LjMzNSA4Ny44MDdsLTE2LjcxIDkuMTE1YTE1LjAxNiAxNS4wMTYgMCAwMC0yLjY4MiAxLjkwOCA1NS45NjcgNTUuOTY3IDAgMDA3MS45MDkuMTg2IDE0LjgyNCAxNC44MjQgMCAwMC0yLjk0Ni0xLjk3TDcxLjAxMyA4OC4xYTYuODI0IDYuODI0IDAgMDEtMy43NzItNi4xdi03LjAyM2EyNy4wMjUgMjcuMDI1IDAgMDAxLjY5My0yLjE3NyA0MS4xNzIgNDEuMTcyIDAgMDA1LjU2Mi0xMS4yMDkgNS42MiA1LjYyIDAgMDAzLjk4Ni01LjM0N3YtNy40OTNhNS41OTQgNS41OTQgMCAwMC0xLjg3Ni00LjE1M1YzMy43NjZzMi4yMjgtMTYuODU5LTIwLjYtMTYuODU5LTIwLjYgMTYuODU4LTIwLjYgMTYuODU4djEwLjgzM2E1LjU4NyA1LjU4NyAwIDAwLTEuODcyIDQuMTUzdjcuNDk0YTUuNjE4IDUuNjE4IDAgMDAyLjU5MSA0LjcxNSAzNy4xODcgMzcuMTg3IDAgMDA2Ljc2OCAxNC4wMTd2Ni44NDdhNi44MzEgNi44MzEgMCAwMS0zLjU1OCA1Ljk4M3oiIGZpbGw9IiM3NzciIG9wYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Ik01Ni45NTkuMDA4YTU1Ljk2NyA1NS45NjcgMCAwMC0zNi45OTMgOTguODA5IDE0Ljg3OSAxNC44NzkgMCAwMTIuNjU2LTEuODg5bDE2LjcxLTkuMTE1YTYuODI2IDYuODI2IDAgMDAzLjU1Ny01Ljk5MXYtNi44NDdhMzcuMTUyIDM3LjE1MiAwIDAxLTYuNzc1LTE0LjAxNyA1LjYyIDUuNjIgMCAwMS0yLjU5MS00LjcxNXYtNy40OTRBNS41OTQgNS41OTQgMCAwMTM1LjQgNDQuNlYzMy43NjRTMzMuMTcgMTYuOTA2IDU2IDE2LjkwNnMyMC42IDE2Ljg1OCAyMC42IDE2Ljg1OFY0NC42YTUuNTg3IDUuNTg3IDAgMDExLjg3MiA0LjE1M3Y3LjQ5NGE1LjYyIDUuNjIgMCAwMS0zLjk4NiA1LjM0N0E0MS4xNzIgNDEuMTcyIDAgMDE2OC45MjkgNzIuOGEyNy4wMjUgMjcuMDI1IDAgMDEtMS42OTMgMi4xNzdWODJhNi44MjEgNi44MjEgMCAwMDMuNzcyIDYuMUw4OC45IDk3LjA0NGExNC45IDE0LjkgMCAwMTIuOTM3IDEuOTdBNTUuOTg5IDU1Ljk4OSAwIDAwNTYuOTU5LjAwOHoiIGZpbGw9IiNmN2Y3ZjciLz48L3N2Zz4="

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "F6u6":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialTwitter");

/***/ }),

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "GYaf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-styled-flexboxgrid"
var external_react_styled_flexboxgrid_ = __webpack_require__("4a4h");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./hoc/secretPage.js
var secretPage = __webpack_require__("qGTc");

// EXTERNAL MODULE: ./hoc/withLayout.js + 12 modules
var withLayout = __webpack_require__("5MSs");

// EXTERNAL MODULE: ./components/PageMeta/index.js
var PageMeta = __webpack_require__("lrOO");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Author.js

const GET_AUTHOR = external_graphql_tag_default.a`
  query GetAuthor($id: ID!) {
    author(id: $id) {
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
const GET_AUTHOR_FAV = external_graphql_tag_default.a`
  query GetAuthor($id: ID) {
    author(id: $id) {
      name
      favourite {
        data {
          id
        }
      }
    }
  }
`;
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: external "react-icons-kit/ionicons/androidLock"
var androidLock_ = __webpack_require__("iVe0");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/iosArrowForward"
var iosArrowForward_ = __webpack_require__("I4xl");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/iosTelephone"
var iosTelephone_ = __webpack_require__("pHa2");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react-image"
var external_react_image_ = __webpack_require__("bYH+");
var external_react_image_default = /*#__PURE__*/__webpack_require__.n(external_react_image_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/user-placeholder.svg
var user_placeholder = __webpack_require__("EV4e");
var user_placeholder_default = /*#__PURE__*/__webpack_require__.n(user_placeholder);

// CONCATENATED MODULE: ./components/ProfileSettingInfo/index.js


var __jsx = external_react_default.a.createElement;





const ImageStyle = {
  overflow: 'hidden',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: 15,
  width: 32,
  height: 32
};

const ProfileSettingInfo = (_ref) => {
  let {
    avatarImage,
    avatarIcon,
    description,
    title,
    iconRight,
    imageProps,
    avatarIconProps,
    style
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["avatarImage", "avatarIcon", "description", "title", "iconRight", "imageProps", "avatarIconProps", "style"]);

  return __jsx(Box["a" /* default */], Object(esm_extends["a" /* default */])({
    flexBox: true,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #e2e2e2",
    style: {
      cursor: 'pointer'
    },
    pt: 15,
    pb: 15
  }, props), __jsx(Box["a" /* default */], {
    flexBox: true,
    alignItems: "center"
  }, avatarImage && __jsx(external_react_image_default.a, {
    src: avatarImage,
    loader: __jsx("img", {
      style: ImageStyle,
      src: user_placeholder_default.a
    }),
    unloader: __jsx("img", {
      style: ImageStyle,
      src: user_placeholder_default.a
    }),
    alt: title,
    style: ImageStyle
  }), avatarIcon && __jsx(Box["a" /* default */], {
    flexBox: true,
    alignItems: "center",
    justifyContent: "center",
    mr: 15,
    width: 26,
    height: 26,
    style: style // {...avatarIconProps}

  }, avatarIcon), __jsx(Box["a" /* default */], {
    color: "#333333"
  }, title && __jsx(Text["a" /* default */], {
    content: title,
    fontSize: "14px",
    mb: "0",
    fontWeight: 400
  }), description && __jsx(Text["a" /* default */], {
    fontSize: "12px",
    content: description,
    mb: "0"
  }))), iconRight && iconRight);
};

/* harmony default export */ var components_ProfileSettingInfo = (ProfileSettingInfo);
// CONCATENATED MODULE: ./containers/AccountSetting/Sidebar/index.js
var Sidebar_jsx = external_react_default.a.createElement;







/* harmony default export */ var Sidebar = (({
  image,
  name,
  onToggleClick
}) => Sidebar_jsx(Box["a" /* default */], {
  pl: 25,
  pr: 25,
  pb: 10,
  pt: 10,
  borderRadius: "3px",
  border: "1px solid #e2e2e2"
}, Sidebar_jsx(components_ProfileSettingInfo, {
  avatarImage: image,
  title: name || 'My Profile' // description="Edit Profile"
  ,
  iconRight: Sidebar_jsx(external_react_icons_kit_default.a, {
    icon: iosArrowForward_["iosArrowForward"],
    size: 18,
    color: "#BABABA"
  }),
  onClick: () => onToggleClick('edit-profile')
}), Sidebar_jsx(components_ProfileSettingInfo, {
  title: "Change Password",
  avatarIcon: Sidebar_jsx(external_react_icons_kit_default.a, {
    icon: androidLock_["androidLock"],
    size: 18
  }),
  iconRight: Sidebar_jsx(external_react_icons_kit_default.a, {
    icon: iosArrowForward_["iosArrowForward"],
    size: 18,
    color: "#BABABA"
  }),
  onClick: () => onToggleClick('change-password'),
  style: {
    backgroundColor: '#3093FF',
    color: '#fff',
    borderRadius: '3px'
  }
}), Sidebar_jsx(components_ProfileSettingInfo, {
  title: "Mobile Numbers",
  borderBottom: "none",
  avatarIcon: Sidebar_jsx(external_react_icons_kit_default.a, {
    icon: iosTelephone_["iosTelephone"],
    size: 21
  }),
  iconRight: Sidebar_jsx(external_react_icons_kit_default.a, {
    icon: iosArrowForward_["iosArrowForward"],
    size: 18
  }),
  onClick: () => onToggleClick('add-mobile-number'),
  style: {
    backgroundColor: '#FF7946',
    color: '#fff',
    borderRadius: '3px'
  }
})));
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./components/Input/index.js + 1 modules
var Input = __webpack_require__("Wc11");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Heading/index.js
var Heading = __webpack_require__("rNkn");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Button/index.js + 1 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/iosCamera"
var iosCamera_ = __webpack_require__("S1dW");

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");
var external_react_dropzone_default = /*#__PURE__*/__webpack_require__.n(external_react_dropzone_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Image/index.js
var Image = __webpack_require__("iP0v");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/AccountSetting/EditProfile/UploadImage/style.js

const UploadIconWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "style__UploadIconWrapper",
  componentId: "sc-1ddlto2-0"
})(["position:absolute;display:flex;justify-content:center;align-items:center;background-color:#30c56d;width:38px;height:38px;bottom:0;right:0;z-index:1;border:2px solid #ffffff;border-radius:19px;color:#ffffff;cursor:pointer;"]);
// CONCATENATED MODULE: ./containers/AccountSetting/EditProfile/UploadImage/index.js
var UploadImage_jsx = external_react_default.a.createElement;









const PickImages = ({
  onPreviewDrop,
  proPic,
  maxSize,
  onDropRejected
}) => UploadImage_jsx(Box["a" /* default */], {
  flexBox: true,
  justifyContent: "center",
  pt: 40,
  pb: 66
}, UploadImage_jsx(external_react_dropzone_default.a, {
  onDrop: onPreviewDrop,
  maxSize: maxSize,
  onDropRejected: onDropRejected,
  multiple: false
}, ({
  getRootProps,
  getInputProps
}) => {
  return UploadImage_jsx("div", getRootProps(), UploadImage_jsx("input", getInputProps()), UploadImage_jsx("div", {
    style: {
      border: 'none',
      width: '112px',
      height: '112px',
      cursor: 'pointer',
      position: 'relative',
      outline: 'none'
    }
  }, proPic != null ? UploadImage_jsx(external_react_default.a.Fragment, null, UploadImage_jsx(Image["a" /* default */], {
    key: proPic.preview,
    src: proPic.preview,
    alt: proPic.preview,
    width: "112px",
    height: "112px",
    style: {
      borderRadius: '100%'
    }
  }), UploadImage_jsx(UploadIconWrapper, null, UploadImage_jsx(external_react_icons_kit_default.a, {
    icon: iosCamera_["iosCamera"],
    size: 30
  }))) : UploadImage_jsx(external_react_default.a.Fragment, null, UploadImage_jsx("div", {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#f7f7f7',
      borderRadius: '100%'
    }
  }, UploadImage_jsx(Image["a" /* default */], {
    src: user_placeholder_default.a,
    alt: "PlaceHolder Image",
    width: "112px",
    height: "112px",
    style: {
      borderRadius: '100%'
    }
  })), UploadImage_jsx(UploadIconWrapper, null, UploadImage_jsx(external_react_icons_kit_default.a, {
    icon: iosCamera_["iosCamera"],
    size: 30
  })))));
})); // export default Favorites;


/* harmony default export */ var UploadImage = (PickImages);
// EXTERNAL MODULE: external "react-icons-kit/ionicons/androidDone"
var androidDone_ = __webpack_require__("fvsJ");

// CONCATENATED MODULE: ./containers/ModalContainer/SuccessModal/style.js

const SuccessModalWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "style__SuccessModalWrapper",
  componentId: "jddd5p-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const IconWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "style__IconWrapper",
  componentId: "jddd5p-1"
})(["display:flex;justify-content:center;align-items:center;background-color:#30c56d;color:#ffffff;width:50px;height:50px;border-radius:50%;margin-top:10px;margin-bottom:35px;"]);
/* harmony default export */ var SuccessModal_style = (SuccessModalWrapper);
// CONCATENATED MODULE: ./containers/ModalContainer/SuccessModal/index.js
var SuccessModal_jsx = external_react_default.a.createElement;






const SuccessModal = props => SuccessModal_jsx(SuccessModal_style, null, SuccessModal_jsx(IconWrapper, null, SuccessModal_jsx(external_react_icons_kit_default.a, {
  icon: androidDone_["androidDone"],
  size: 28
})), SuccessModal_jsx(Text["a" /* default */], {
  content: "Congrats!!!",
  as: "span",
  fontSize: 21,
  fontWeight: 700,
  color: "#333333",
  mb: 15
}), SuccessModal_jsx(Text["a" /* default */], {
  content: "Your account information saved successfully",
  as: "span",
  fontSize: 16,
  fontWeight: 400,
  color: "#8C8C8C",
  style: {
    textAlign: 'center'
  }
}));

/* harmony default export */ var ModalContainer_SuccessModal = (SuccessModal);
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Alert/index.js + 1 modules
var Alert = __webpack_require__("OvRI");

// EXTERNAL MODULE: ./helpers/uploadMultipleImage.js + 1 modules
var uploadMultipleImage = __webpack_require__("xgNA");

// EXTERNAL MODULE: ./helpers/authHelper.js
var authHelper = __webpack_require__("ke4W");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/index.js + 3 modules
var Mutations = __webpack_require__("23at");

// CONCATENATED MODULE: ./containers/AccountSetting/EditProfile/index.js

var EditProfile_jsx = external_react_default.a.createElement;














let imagesUrl = [];
const EditProfileEnhancher = Object(external_formik_["withFormik"])({
  enableReinitialize: 'true',
  mapPropsToValues: props => {
    const {
      author,
      loading
    } = props;
    const name = !loading && author && author.name ? author.name : '';
    const website = !loading && author && author.website ? author.website : '';
    const address = !loading && author && author.address ? author.address : '';
    return {
      name,
      address,
      website
    };
  },
  displayName: 'EditProfileForm' // helps with React DevTools

});

const EditProfile = props => {
  const {
    0: localImage,
    1: setImage
  } = Object(external_react_["useState"])(null);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');
  const {
    0: btnLoading,
    1: setBtnLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: uploadRejected,
    1: setUploadRejected
  } = Object(external_react_["useState"])(false);
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    loading,
    author
  } = props;
  Object(external_react_["useEffect"])(() => {
    (async function () {
      if (values.image) {
        try {
          await addAuthor({
            variables: {
              author: Object(objectSpread["a" /* default */])({}, author, values)
            }
          });
          setBtnLoading(false);
        } catch (error) {
          setError(error.graphQLErrors[0].message);
          setBtnLoading(false);
        }
      }
    })();
  }, [values.image]);

  const onPreviewDrop = images => {
    setUploadRejected(false);
    images.map(image => {
      image.preview = URL.createObjectURL(image);
    });

    if (images.length) {
      setImage(images[0]);
    }
  };

  const onDropRejected = () => {
    setUploadRejected(true);
  };

  let avatar;

  if (!loading && author && author.image && author.image.largeUrl) {
    avatar = {
      preview: author.image.largeUrl
    };
  }

  if (localImage !== null) {
    avatar = localImage;
  }

  const handlesSubmit = async () => {
    setBtnLoading(true);
    await authHelper["a" /* default */].refreshToken();

    if (localImage) {
      imagesUrl = await Object(uploadMultipleImage["a" /* uploadMultipleImages */])([localImage]);
      setFieldValue('image', imagesUrl[0][0]);
    } else {
      try {
        await addAuthor({
          variables: {
            author: Object(objectSpread["a" /* default */])({}, author, values)
          }
        });
        setBtnLoading(false);
        if (error != '') Object(reuse_modal_["openModal"])({
          config: {
            disableDragging: false,
            minHeight: 'auto',
            size: {
              width: 350,
              height: 260
            },
            enableResizing: {
              bottom: true,
              bottomLeft: true,
              bottomRight: true,
              left: true,
              right: true,
              top: true,
              topLeft: true,
              topRight: true
            }
          },
          modalClass: 'customModal',
          closeOnClickOutside: true,
          component: ModalContainer_SuccessModal
        });
      } catch (error) {
        setBtnLoading(false);
        setError(error.graphQLErrors[0].message);
      }
    }
  };

  const [addAuthor] = Object(react_hooks_["useMutation"])(Mutations["e" /* UPDATE_AUTHOR */]);
  return EditProfile_jsx(external_react_default.a.Fragment, null, EditProfile_jsx(Heading["a" /* default */], {
    as: "h3",
    content: "Profile Setting",
    fontSize: 18,
    color: "#333333",
    fontWeight: 600
  }), uploadRejected && EditProfile_jsx(Alert["a" /* default */], {
    colors: "error",
    mb: 30
  }, EditProfile_jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, "Maximum upload size 1MB")), EditProfile_jsx(UploadImage, {
    onPreviewDrop: onPreviewDrop,
    proPic: avatar,
    maxSize: 1024000,
    onDropRejected: onDropRejected
  }), EditProfile_jsx(Input["a" /* default */], {
    elementType: "input",
    elementConfig: {
      type: 'text',
      required: 'required'
    },
    label: "Name",
    changed: handleChange('name'),
    value: values.name,
    error: errors.name,
    touched: touched
  }), EditProfile_jsx(Input["a" /* default */], {
    elementType: "input",
    elementConfig: {
      type: 'text',
      required: 'required'
    },
    label: "Address",
    changed: handleChange('address'),
    value: values.address,
    error: errors.address,
    touched: touched
  }), EditProfile_jsx(Input["a" /* default */], {
    elementType: "input",
    elementConfig: {
      type: 'text',
      required: 'required'
    },
    label: "Web",
    changed: handleChange('website'),
    value: values.website,
    error: errors.website,
    touched: touched
  }), EditProfile_jsx(Button["a" /* default */], {
    onClick: handlesSubmit,
    title: "Save Changes",
    bg: "#30C56D",
    color: "#ffffff",
    mt: 10,
    width: 1,
    isLoading: btnLoading,
    loaderColor: "#ffffff",
    iconPosition: "left"
  }));
};

/* harmony default export */ var AccountSetting_EditProfile = (EditProfileEnhancher(EditProfile));
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: ./containers/SignInForm/style.js
var SignInForm_style = __webpack_require__("BHux");

// CONCATENATED MODULE: ./containers/AccountSetting/ChangePassword/index.js

var ChangePassword_jsx = external_react_default.a.createElement;









const ResetPassEnhancer = Object(external_formik_["withFormik"])({
  mapPropsToValues: props => ({
    currentPass: '',
    newPass: '',
    confirmPass: ''
  }),
  validationSchema: external_yup_["object"]().shape({
    currentPass: external_yup_["string"]().required('Current Password is required!'),
    newPass: external_yup_["string"]().required('New Password is required'),
    confirmPass: external_yup_["string"]().oneOf([external_yup_["ref"]('newPass'), null], "Password don't match").required('Password Confirm is required')
  })
});

const ResetPass = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur
}) => {
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])('');
  const {
    0: isSubmitted,
    1: setIssubmit
  } = Object(external_react_["useState"])(false);

  handleSubmit = async () => {
    setIssubmit(true);

    if (keys_default()(errors).length !== 0) {
      return;
    }

    const hasPasswordReset = await authHelper["a" /* default */].changePassword(values.currentPass, values.newPass);

    if (hasPasswordReset && !hasPasswordReset.error) {
      setMessage('Password Reset Successful!');
    } else if (hasPasswordReset.error) {
      setMessage(hasPasswordReset.error.message);
    }
  };

  return ChangePassword_jsx(external_react_default.a.Fragment, null, ChangePassword_jsx(Heading["a" /* default */], {
    as: "h3",
    content: "Password Setting",
    pb: 32,
    fontSize: 18,
    color: "#333333",
    fontWeight: 600
  }), ChangePassword_jsx(SignInForm_style["b" /* FormGroup */], {
    className: errors.currentPass ? 'hasErrorMsg' : ''
  }, ChangePassword_jsx(Input["a" /* default */], {
    elementType: "input",
    elementConfig: {
      type: 'password',
      required: 'required'
    },
    onBlur: handleBlur('currentPass'),
    label: "Current Password",
    changed: handleChange('currentPass'),
    secureTextEntry: true,
    value: values.currentPass,
    error: errors.currentPass,
    touched: touched
  }), ChangePassword_jsx("span", {
    className: "errorMsg"
  }, errors.currentPass && touched.currentPass || isSubmitted && errors.currentPass ? errors.currentPass : null)), ChangePassword_jsx(SignInForm_style["b" /* FormGroup */], {
    className: errors.newPass ? 'hasErrorMsg' : ''
  }, ChangePassword_jsx(Input["a" /* default */], {
    elementType: "input",
    elementConfig: {
      type: 'password',
      required: 'required'
    },
    label: "New Password",
    changed: handleChange('newPass'),
    secureTextEntry: true,
    onBlur: handleBlur('newPass'),
    value: values.newPass,
    secureTextEntry: true,
    error: errors.newPass,
    touched: touched
  }), ChangePassword_jsx("span", {
    className: "errorMsg"
  }, errors.newPass && touched.newPass || isSubmitted && errors.newPass ? errors.newPass : null)), ChangePassword_jsx(SignInForm_style["b" /* FormGroup */], {
    className: errors.confirmPass ? 'hasErrorMsg' : ''
  }, ChangePassword_jsx(Input["a" /* default */], {
    elementType: "input",
    elementConfig: {
      type: 'password',
      required: 'required'
    },
    label: "Confirm Password",
    changed: handleChange('confirmPass'),
    onBlur: handleBlur('confirmPass'),
    secureTextEntry: true,
    value: values.confirmPass,
    secureTextEntry: true,
    error: errors.confirmPass,
    touched: touched
  }), ChangePassword_jsx("span", {
    className: "errorMsg"
  }, errors.confirmPass && touched.confirmPass || isSubmitted && errors.confirmPass ? errors.confirmPass : null)), message ? ChangePassword_jsx(Box["a" /* default */], {
    flexBox: true,
    mt: 20,
    mb: 15,
    justifyContent: "center",
    alignItems: "center"
  }, ChangePassword_jsx(SignInForm_style["a" /* ErrorNotification */], null, message)) : '', ChangePassword_jsx(Button["a" /* default */], {
    onClick: handleSubmit // disabled={Object.keys(errors).length !== 0}
    ,
    title: "Save Changes",
    bg: "#30C56D",
    color: "#ffffff",
    width: 1,
    mt: 10
  }));
};

/* harmony default export */ var ChangePassword = (ResetPassEnhancer(ResetPass));
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: external "react-icons-kit/ionicons/androidDelete"
var androidDelete_ = __webpack_require__("hmjs");

// EXTERNAL MODULE: external "react-icons-kit/ionicons/iosTrash"
var iosTrash_ = __webpack_require__("pEN5");

// CONCATENATED MODULE: ./containers/ModalContainer/ConfirmReportModal/style.js

const ReportModalWrapper = external_styled_components_default()('div').withConfig({
  displayName: "style__ReportModalWrapper",
  componentId: "j1km2m-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:15px;background:#ffffff;"]);
const style_IconWrapper = external_styled_components_default()('span').withConfig({
  displayName: "style__IconWrapper",
  componentId: "j1km2m-1"
})(["display:flex;justify-content:center;align-items:center;background-color:#ff7946;color:#ffffff;width:50px;height:50px;border-radius:3px;margin-top:10px;margin-bottom:40px;"]);
const ButtonWrapper = external_styled_components_default()('div').withConfig({
  displayName: "style__ButtonWrapper",
  componentId: "j1km2m-2"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;margin-top:30px;"]);

// CONCATENATED MODULE: ./containers/ModalContainer/ConfirmReportModal/index.js
var ConfirmReportModal_jsx = external_react_default.a.createElement;







const ConfirmReportModal = ({
  data: {
    handleRemoveMobile,
    item,
    closeModal
  }
}) => {
  const removeMobile = () => {
    handleRemoveMobile(item);
    closeModal();
  };

  return ConfirmReportModal_jsx(ReportModalWrapper, null, ConfirmReportModal_jsx(style_IconWrapper, null, ConfirmReportModal_jsx(external_react_icons_kit_default.a, {
    icon: iosTrash_["iosTrash"],
    size: 32
  })), ConfirmReportModal_jsx(Text["a" /* default */], {
    content: "Confirm Delete?",
    as: "span",
    fontSize: 21,
    fontWeight: 700,
    color: "#333333",
    mb: 10
  }), ConfirmReportModal_jsx(Text["a" /* default */], {
    content: `You can't resote your account, it will permanently deleted`,
    as: "span",
    fontSize: 16,
    fontWeight: 400,
    color: "#8C8C8C",
    style: {
      textAlign: 'center'
    }
  }), ConfirmReportModal_jsx(ButtonWrapper, null, ConfirmReportModal_jsx(Button["a" /* default */], {
    title: "Cancel",
    mr: 20,
    onClick: closeModal,
    style: {
      width: '100%',
      backgroundColor: '#E2E2E2',
      color: '#595959',
      fontWeight: 600
    }
  }), ConfirmReportModal_jsx(Button["a" /* default */], {
    title: "Delete",
    onClick: removeMobile,
    style: {
      width: '100%',
      backgroundColor: '#EF5A5A',
      color: '#FFFFFF',
      fontWeight: 600
    }
  })));
};

/* harmony default export */ var ModalContainer_ConfirmReportModal = (ConfirmReportModal);
// CONCATENATED MODULE: ./containers/AccountSetting/AddMobileNumber/MobileNumberList/index.js
var MobileNumberList_jsx = external_react_default.a.createElement;







/* harmony default export */ var MobileNumberList = (({
  items,
  handleRemoveMobile
}) => {
  const handleRemove = item => {
    handleRemoveMobile(item);
  };

  return MobileNumberList_jsx(external_react_default.a.Fragment, null, items.map((item, index) => MobileNumberList_jsx(Box["a" /* default */], {
    flexBox: true,
    key: index,
    justifyContent: "space-between",
    alignItems: "center",
    style: {
      padding: '10px 15px',
      backgroundColor: '#f1f1f1',
      marginBottom: 40
    }
  }, MobileNumberList_jsx("p", {
    color: "#8c8c8c",
    style: {
      margin: 0
    }
  }, item.number), MobileNumberList_jsx(Button["a" /* default */], {
    icon: MobileNumberList_jsx(external_react_icons_kit_default.a, {
      icon: androidDelete_["androidDelete"],
      size: 21
    }),
    variant: "textButton",
    color: "#8C8C8C",
    style: {
      minWidth: 30,
      minHeight: 30
    },
    onClick: () => Object(reuse_modal_["openModal"])({
      config: {
        width: 'auto',
        height: 'auto',
        transition: {
          tension: 150
        }
      },
      springStyle: {
        backgroundColor: '#ffffff',
        padding: 0
      },
      closeOnClickOutside: true,
      component: ModalContainer_ConfirmReportModal,
      componentProps: {
        data: {
          handleRemoveMobile,
          item,
          closeModal: reuse_modal_["closeModal"]
        }
      }
    })
  }))));
});
// CONCATENATED MODULE: ./containers/AccountSetting/AddMobileNumber/index.js

var AddMobileNumber_jsx = external_react_default.a.createElement;










const MobileNumbersEnhancer = Object(external_formik_["withFormik"])({
  mapPropsToValues: props => {
    const {
      author,
      loading
    } = props;
    const mobile = !loading && author && author.mobile && author.mobile.length ? author.mobile : [];
    const number = '';
    const code = '';
    return {
      mobile,
      number,
      code
    };
  },
  handleSubmit: (values, {
    props,
    setSubmitting
  }) => {}
});

const Recaptcha = () => {
  Object(external_react_["useEffect"])(() => {
    window.recaptchaVerifier = new external_firebase_default.a.auth.RecaptchaVerifier('recaptcha');
    window.recaptchaVerifier.render().then(function (widgetId) {
      window.recaptchaWidgetId = widgetId;
    });
  }, []);
  return AddMobileNumber_jsx("div", {
    id: "recaptcha"
  });
};

const AddMobileNumber = ({
  values,
  touched,
  handleChange,
  handleSubmit,
  userInfo,
  showModal,
  author,
  setFieldValue,
  loading
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    confirmResult: false,
    isMobileVerified: false,
    wrongCode: false
  });
  const [handleAuthorMutation, {
    data
  }] = Object(react_hooks_["useMutation"])(Mutations["e" /* UPDATE_AUTHOR */]);
  const {
    confirmResult,
    isMobileVerified,
    wrongCode
  } = state;

  const HandleStoringMobileNumber = async () => {
    await authHelper["a" /* default */].refreshToken();
    await handleAuthorMutation({
      variables: {
        author: Object(objectSpread["a" /* default */])({}, author, {
          mobile: values.mobile
        })
      }
    });
  };

  const handleRemove = async item => {
    await authHelper["a" /* default */].refreshToken();
    let mobileNumber = values.mobile;
    const index = mobileNumber.indexOf(item);

    if (index > -1) {
      mobileNumber.splice(index, 1);
    }

    setFieldValue('mobile', mobileNumber);
    await handleAuthorMutation({
      variables: {
        author: Object(objectSpread["a" /* default */])({}, author, {
          mobile: values.mobile
        })
      }
    });
  };

  const handleGetVerificationCode = async () => {
    const confirmResult = await authHelper["a" /* default */].login('phone', null, null, values.number);
    setState(Object(objectSpread["a" /* default */])({}, state, {
      confirmResult
    }));
  };

  const handleVerifyCode = async () => {
    let mobileNumbers = values.mobile;

    try {
      const isVerified = await authHelper["a" /* default */].confirmVerification(state.confirmResult, values.code);

      if (!isVerified.error) {
        setState(Object(objectSpread["a" /* default */])({}, state, {
          isMobileVerified: true
        }));
        mobileNumbers.push({
          number: values.number
        });
        setFieldValue('mobile', mobileNumbers);
      } else {
        setState(Object(objectSpread["a" /* default */])({}, state, {
          wrongCode: true
        }));
      }
    } catch (error) {
      console.error(error);
      setState(Object(objectSpread["a" /* default */])({}, state, {
        wrongCode: true
      }));
    }
  };

  return AddMobileNumber_jsx(external_react_default.a.Fragment, null, AddMobileNumber_jsx(Heading["a" /* default */], {
    as: "h3",
    content: "Mobile Number Settings",
    fontSize: 18,
    color: "#333333",
    fontWeight: 600,
    mb: 30
  }), values.mobile && AddMobileNumber_jsx(MobileNumberList, {
    items: values.mobile,
    handleRemoveMobile: item => handleRemove(item)
  }), !confirmResult ? AddMobileNumber_jsx(external_react_default.a.Fragment, null, AddMobileNumber_jsx(Input["a" /* default */], {
    elementType: "input",
    elementConfig: {
      type: 'text',
      required: 'required'
    },
    label: "Enter Number(ex. +30*********)",
    changed: handleChange('number'),
    value: values.number,
    touched: touched
  }), AddMobileNumber_jsx(Recaptcha, null), AddMobileNumber_jsx(Button["a" /* default */], {
    onClick: handleGetVerificationCode,
    title: "Send Verification Code",
    bg: "#30C56D",
    color: "#ffffff",
    mt: 30,
    width: 1
  })) : null, !isMobileVerified && confirmResult ? AddMobileNumber_jsx(external_react_default.a.Fragment, null, AddMobileNumber_jsx(Input["a" /* default */], {
    elementType: "input",
    elementConfig: {
      type: 'text',
      required: 'required'
    },
    label: "Verify Code",
    changed: handleChange('code'),
    value: values.code,
    touched: touched
  }), AddMobileNumber_jsx(Button["a" /* default */], {
    onClick: handleVerifyCode,
    title: "Verify Code",
    bg: "#30C56D",
    color: "#ffffff",
    width: 1
  })) : null, isMobileVerified ? AddMobileNumber_jsx(external_react_default.a.Fragment, null, AddMobileNumber_jsx("p", {
    style: {
      color: '#30C56D',
      textAlign: 'center'
    }
  }, "Your number is verified!"), AddMobileNumber_jsx(Button["a" /* default */], {
    onClick: HandleStoringMobileNumber,
    title: "Save Mobile Number",
    bg: "#30C56D",
    color: "#ffffff",
    mt: 30,
    width: 1
  })) : '', !isMobileVerified && wrongCode ? AddMobileNumber_jsx("p", {
    style: {
      color: '#EF5A5A',
      textAlign: 'center'
    }
  }, "Invalid code!") : '');
};

/* harmony default export */ var AccountSetting_AddMobileNumber = (MobileNumbersEnhancer(AddMobileNumber));
// EXTERNAL MODULE: ./helpers/apollo.js
var apollo = __webpack_require__("TWi5");

// CONCATENATED MODULE: ./pages/account-settings.js

var account_settings_jsx = external_react_default.a.createElement;














const AccountSettings = Object(withLayout["a" /* default */])(({
  userId
}) => {
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(GET_AUTHOR, {
    variables: {
      id: userId
    }
  });
  const {
    query: {
      view
    }
  } = Object(router_["useRouter"])();
  if (error) return account_settings_jsx("div", null, error.message);
  const author = data && data.author ? data.author : {};
  const imageUrl = author && author.image ? author.image.url : '';
  const imageLargeUrl = author && author.image ? author.image.largeUrl : '';

  const handleTabToggle = newTabState => {
    const href = `/account-settings?view=${newTabState}`;
    const as = `/account-settings?view=${newTabState}`;
    router_default.a.push(href, as, {
      shallow: true
    });
  };

  return account_settings_jsx(external_react_default.a.Fragment, null, account_settings_jsx(PageMeta["a" /* default */], {
    title: view === 'edit-profile' && 'Edit Profile' || view === 'change-password' && 'Change Password' || view === 'add-mobile-number' && 'Add mobile number',
    description: "Account Settings"
  }), account_settings_jsx(external_react_styled_flexboxgrid_["Grid"], {
    style: {
      paddingTop: '80px',
      paddingBottom: '50px'
    }
  }, account_settings_jsx(external_react_styled_flexboxgrid_["Row"], null, account_settings_jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    mdOffset: 1,
    md: 10
  }, account_settings_jsx(external_react_styled_flexboxgrid_["Row"], null, account_settings_jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 5,
    md: 4
  }, account_settings_jsx(Sidebar, {
    onToggleClick: handleTabToggle,
    image: [imageUrl, imageLargeUrl]
  })), account_settings_jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 7,
    md: 8
  }, account_settings_jsx(Box["a" /* default */], {
    pl: [20, 95],
    pr: [20, 95],
    pb: 32,
    pt: 32,
    borderRadius: "3px",
    border: "1px solid #e2e2e2"
  }, view === 'edit-profile' && account_settings_jsx(AccountSetting_EditProfile, {
    author: author,
    loading: loading,
    error: error
  }), view === 'change-password' && account_settings_jsx(ChangePassword, null), view === 'add-mobile-number' && account_settings_jsx(AccountSetting_AddMobileNumber, {
    author: author,
    loading: loading,
    error: error
  }))))))), account_settings_jsx(reuse_modal_["Modal"], null));
});
/* harmony default export */ var account_settings = __webpack_exports__["default"] = (Object(apollo["a" /* withApollo */])(Object(secretPage["a" /* default */])(AccountSettings)));

/***/ }),

/***/ "I4xl":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/iosArrowForward");

/***/ }),

/***/ "IDnS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jvFD");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);


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
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["logoSrc", "title"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", null, __jsx(LogoImage, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    src: logoSrc,
    alt: title
  }, props))));
}

/***/ }),

/***/ "IzIT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HOME_PAGE; });
/* unused harmony export HOME_VIEW_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SEARCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NEAREST_POST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RECENT_POST_PAGE; });
/* unused harmony export FAVOURITE_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PROFILE_PAGE; });
/* unused harmony export USER_FAVOURITE_POST */
/* unused harmony export USER_DRAFT_POST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CATEGORIES_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SINGLE_CATEGORY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SINGLE_POST_PAGE; });
/* unused harmony export ADMOB_VIEW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SIGNIN_PAGE; });
/* unused harmony export SIGNUP_PAGE */
/* unused harmony export SIGNUP_MOBILE_PAGE */
/* unused harmony export FORGET_PASSWORD_PAGE */
/* unused harmony export RESET_PASSWORD_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_POST; });
/* unused harmony export SEARCH_ARCHIVE_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT_SETTING_PAGE; });
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

/***/ "JeHL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Tpg");

var _interopRequireDefault = __webpack_require__("lpv4");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("JeHL"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("7xIC"));

var _rewriteUrlForExport = __webpack_require__("5+dE");

var _utils = __webpack_require__("fvxO");
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

    if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "L9lV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("Ml6p");

var _Object$assign = __webpack_require__("OCF2");

var _Object$defineProperty = __webpack_require__("LcAa");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("YBsB"));

const utils_1 = __webpack_require__("fvxO");

const rewrite_url_for_export_1 = __webpack_require__("5+dE");

const route_matcher_1 = __webpack_require__("TBBy");

const route_regex_1 = __webpack_require__("uChv");

const is_dynamic_1 = __webpack_require__("Lko9");

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

      if (false) {}

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
        if (false) {}

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

        if (false) {} // @ts-ignore pathname is always defined


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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

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
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
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

/***/ "LcAa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "Lko9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("LcAa");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "LvlT":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "Ml6p":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "OCF2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "OYcf":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/more");

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "OvRI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/theme/customVariant.js
var customVariant = __webpack_require__("vE1u");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/base.js
var base = __webpack_require__("/MbW");

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Alert/alert.style.js





const AlertStyle = external_styled_components_default.a.div.withConfig({
  displayName: "alertstyle__AlertStyle",
  componentId: "sc-11s191n-0"
})(["padding:20px 25px;border-radius:4px;border-width:1px;border-style:solid;border-color:", ";font-size:", "px;color:", ";p{&:last-child{margin-bottom:0;}}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}", " ", ""], Object(external_styled_system_["themeGet"])('colors.borderColor', '#dadada'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('colors.textColor', '#484848'), customVariant["c" /* colorStyle */], base["a" /* base */]); // prop types can also be added from the style functions

AlertStyle.propTypes = Object(objectSpread["a" /* default */])({}, external_styled_system_["variant"].propTypes);
AlertStyle.displayName = 'AlertStyle';
/* harmony default export */ var alert_style = (AlertStyle);
// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Alert/index.js


var __jsx = external_react_default.a.createElement;



const Alert = (_ref) => {
  let {
    className,
    isMaterial,
    children
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "isMaterial", "children"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__alert']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  return __jsx(alert_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' ')
  }, props), children);
};

Alert.defaultProps = {};
/* harmony default export */ var elements_Alert = __webpack_exports__["a"] = (Alert);

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "Ppj3":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGcgZGF0YS1uYW1lPSJHcm91cCAzNzQiPjxnIGRhdGEtbmFtZT0iR3JvdXAgMzczIj48cGF0aCBkYXRhLW5hbWU9IlJlY3RhbmdsZSAzMDciIGZpbGw9IiMyOTI5MjkiIGQ9Ik0wIDE4aDI0djRIMHoiLz48ZyBkYXRhLW5hbWU9IlJlY3RhbmdsZSAzMDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI5MjkyOSIgc3Ryb2tlLXdpZHRoPSI0Ij48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMiAyaDM2djM2SDJ6Ii8+PC9nPjxwYXRoIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDMwOCIgZmlsbD0iIzI5MjkyOSIgZD0iTTEyIDhoNHYyNGgtNHoiLz48cGF0aCBkYXRhLW5hbWU9IlJlY3RhbmdsZSAzMDkiIGZpbGw9IiMyOTI5MjkiIGQ9Ik0yNCA4aDR2MjRoLTR6Ii8+PC9nPjxwYXRoIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDMxMCIgZmlsbD0iI2ZmNTg1OCIgZD0iTTQgMThoMjB2NEg0eiIvPjwvZz48L3N2Zz4="

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "S1dW":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/iosCamera");

/***/ }),

/***/ "SYf/":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidClose");

/***/ }),

/***/ "TBBy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("TPw6");

var _Object$defineProperty = __webpack_require__("LcAa");

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

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "TPw6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TWi5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withApollo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rNCn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TG1l");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("LvlT");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("mYvP");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("aZpa");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










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
        pageProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["apolloClient", "apolloState"]);

    const client = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
      // We pass in the apolloClient directly when using getDataFromTree
      if (apolloClient) {
        return apolloClient;
      } // Otherwise initClient using apolloState


      return initApolloClient(apolloState, {
        getToken
      });
    }, []);
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
      client: client
    }, __jsx(PageComponent, pageProps));
  };

  if (false) {}

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
            } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7fVs", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, pageProps, {
                apolloClient
              })
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }
        } // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually


        next_head__WEBPACK_IMPORTED_MODULE_3___default.a.rewind();
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, pageProps, {
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
      fetchOptions.agent = new (__webpack_require__("eYSm"))(process.env.https_proxy);
    }
  }

  const httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_7__["HttpLink"]({
    uri: _Config__WEBPACK_IMPORTED_MODULE_11__[/* GRAPHQL_URL */ "c"],
    // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()),
    fetchOptions
  });
  const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_8__["setContext"])((request, {
    headers
  }) => {
    const token = getToken();
    return {
      headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, headers, {
        authorization: token ? token : ''
      })
    };
  }); // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  return new apollo_client__WEBPACK_IMPORTED_MODULE_5__["ApolloClient"]({
    ssrMode: true,
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_6__["InMemoryCache"]({
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
  const token = Object(_session__WEBPACK_IMPORTED_MODULE_10__[/* getFirebaseCookie */ "a"])('id_token', ctx);
  return token;
}

/***/ }),

/***/ "Tqks":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "WP9X":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/naviconRound");

/***/ }),

/***/ "Wc11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Input/Input.style.js

const InputField = external_styled_components_default()('div').withConfig({
  displayName: "Inputstyle__InputField",
  componentId: "meglxz-0"
})(["position:relative;margin-bottom:2rem;input,textarea,select{font-size:16px;padding:10px 0;display:block;width:100%;border:none;color:#8c8c8c;border-bottom:1px solid #e2e2e2;}input:focus,textarea:focus,select:focus{outline:none;}label{color:#8c8c8c;font-size:16px;font-weight:normal;position:absolute;pointer-events:none;left:0;top:10px;transition:0.2s ease all;-moz-transition:0.2s ease all;-webkit-transition:0.2s ease all;}&.is-focus label,input:focus ~ label,input:valid ~ label,textarea:focus ~ label,textarea:valid ~ label,select:focus ~ label,select:valid ~ label{top:-20px;font-size:14px;color:#595959;}.highlight{position:absolute;height:1px;top:auto;left:50%;bottom:0;width:0;pointer-events:none;transition:all 0.2s ease;}input:focus ~ .highlight,textarea:focus ~ .highlight,select:focus ~ .highlight{width:100%;height:2px;background-color:#30c56d;left:0;}"]);
/* harmony default export */ var Input_style = (InputField);
// CONCATENATED MODULE: ./components/Input/index.js

var __jsx = external_react_default.a.createElement;

 // get input focus class

const getInputFocusClass = value => {
  if (value !== '' && value != null) {
    return 'is-focus';
  } else {
    return '';
  }
};

const input = props => {
  let inputElement;

  switch (props.elementType) {
    case 'input':
      inputElement = __jsx("input", Object(esm_extends["a" /* default */])({}, props.elementConfig, {
        value: props.value,
        onChange: props.changed,
        onBlur: props.onBlur
      }));
      break;

    case 'select':
      inputElement = __jsx("select", {
        value: props.value,
        onChange: props.changed
      }, props.elementConfig.options.map(option => __jsx("option", {
        key: option.value,
        value: option.value
      }, option.name)));
      break;

    case 'textarea':
      inputElement = __jsx("textarea", Object(esm_extends["a" /* default */])({}, props.elementConfig, {
        value: props.value,
        onChange: props.changed,
        rows: props.rows
      }));
      break;

    default:
      inputElement = __jsx("input", Object(esm_extends["a" /* default */])({}, props, {
        value: props.value
      }));
  }

  return __jsx(Input_style, {
    style: props.style,
    className: `${getInputFocusClass(props.value)}`
  }, inputElement, __jsx("span", {
    className: "highlight"
  }), __jsx("label", {
    htmlFor: props.label
  }, " ", props.label, " "));
};

/* harmony default export */ var Input = __webpack_exports__["a"] = (input);

/***/ }),

/***/ "Wh0Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/DropdownMenu/style.js

const DropdownMenuWrapper = external_styled_components_default()('div').withConfig({
  displayName: "style__DropdownMenuWrapper",
  componentId: "sc-1y0vj8w-0"
})(["position:relative;cursor:pointer;transition:0.2s ease-in-out;"]);
const DropdownMenuItemsWrapper = external_styled_components_default()('ul').withConfig({
  displayName: "style__DropdownMenuItemsWrapper",
  componentId: "sc-1y0vj8w-1"
})(["margin-top:40px;padding:0;list-style:none;background-color:#ffffff;position:absolute;top:0;left:", ";right:", ";z-index:15;min-width:190px;box-shadow:0 3px 10px rgba(0,0,0,0.16);border-radius:3px;"], props => props.dropdownDirection === 'left' ? '0' : 'auto', props => props.dropdownDirection === 'right' ? '0' : 'auto');
const DropdownMenuItemWrapper = external_styled_components_default()('li').withConfig({
  displayName: "style__DropdownMenuItemWrapper",
  componentId: "sc-1y0vj8w-2"
})(["transition:background-color 0.3s ease-in-out;a{display:block;padding:10px 15px;}&:hover{background-color:#e2e2e2;}"]);
// CONCATENATED MODULE: ./components/DropdownMenu/index.js

var __jsx = external_react_default.a.createElement;



const DropdownMenu = props => {
  const {
    0: menuState,
    1: setMenuState
  } = Object(external_react_["useState"])({
    show: false
  });
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  const handleToggle = () => {
    setMenuState(prevState => Object(objectSpread["a" /* default */])({}, menuState, {
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
  return __jsx(DropdownMenuWrapper, {
    onClick: e => e.stopPropagation()
  }, __jsx("span", {
    onClick: handleToggle
  }, content), menuState.show && __jsx(DropdownMenuItemsWrapper, {
    className: className,
    dropdownDirection: dropdownDirection
  }, dropdownItems && dropdownItems.map((item, index) => __jsx(DropdownMenuItemWrapper, {
    key: index,
    onClick: handleToggle
  }, item))));
};

/* harmony default export */ var components_DropdownMenu = __webpack_exports__["a"] = (DropdownMenu);

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Xz64":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGoogleplus");

/***/ }),

/***/ "YBsB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("Tqks");

var _Object$defineProperty = __webpack_require__("LcAa");

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

/***/ "YhXy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/theme/customVariant.js
var customVariant = __webpack_require__("vE1u");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/base.js
var base = __webpack_require__("/MbW");

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Button/button.style.js





const ButtonStyle = external_styled_components_default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'), Object(external_styled_system_["themeGet"])('heights.3', '48'), Object(external_styled_system_["themeGet"])('widths.3', '48'), Object(external_styled_system_["themeGet"])('radius.0', '3'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), external_styled_system_["alignItems"], external_styled_system_["boxShadow"], customVariant["a" /* buttonStyle */], customVariant["c" /* colorStyle */], customVariant["d" /* sizeStyle */], base["a" /* base */]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(objectSpread["a" /* default */])({}, external_styled_system_["alignItems"].propTypes, external_styled_system_["boxShadow"].propTypes, external_styled_system_["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ var button_style = (ButtonStyle);
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Loader/index.js + 2 modules
var Loader = __webpack_require__("gTHO");

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Button/index.js


var __jsx = external_react_default.a.createElement;




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
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

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


  const buttonIcon = isLoading !== false ? __jsx(external_react_["Fragment"], null, loader ? loader : __jsx(Loader["a" /* default */], {
    loaderColor: loaderColor || '#30C56D'
  })) : icon && __jsx("span", {
    className: "btn-icon"
  }, icon); // set icon position

  const position = iconPosition || 'right';
  return __jsx(button_style, Object(esm_extends["a" /* default */])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props), position === 'left' && buttonIcon, title && __jsx("span", {
    className: "btn-text"
  }, title), position === 'right' && buttonIcon);
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ var elements_Button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "aZpa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GRAPHQL_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GOOGLE_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY; });
let GRAPHQL_URL = '';

if (false) {}

if ( true && !process.env.isStaging) {
  GRAPHQL_URL = "";
}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || null;
const CURRENCY = "$" || false;


/***/ }),

/***/ "bKIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "m50ttq-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["children"]);

  return __jsx(BoxWrapper, props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Box);
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "bYH+":
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dCsE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Redirect to any given url
 */

/* harmony default export */ __webpack_exports__["a"] = ((context = {}, target) => {
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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eYSm":
/***/ (function(module, exports) {

module.exports = require("https-proxy-agent");

/***/ }),

/***/ "f9PX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ik7d");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5sXw");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);


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
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props), __jsx("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle
  }, closeButton), children));
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["a"] = (Drawer);

/***/ }),

/***/ "fvsJ":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidDone");

/***/ }),

/***/ "fvxO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("TPw6");

var _Object$defineProperty = __webpack_require__("LcAa");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gTHO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/theme/customVariant.js
var customVariant = __webpack_require__("vE1u");

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Animation/index.js

const spinner = Object(external_styled_components_["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
const AnimSpinner = Object(external_styled_components_["css"])(["animation:", " 1s linear infinite;"], spinner);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/base.js
var base = __webpack_require__("/MbW");

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Loader/loader.style.js






const LoaderStyle = external_styled_components_default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], props => props.loaderColor ? props.loaderColor : '#000000', AnimSpinner, customVariant["c" /* colorStyle */], base["a" /* base */]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(objectSpread["a" /* default */])({}, external_styled_system_["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ var loader_style = (LoaderStyle);
// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Loader/index.js


var __jsx = external_react_default.a.createElement;



const Loader = (_ref) => {
  let {
    loaderColor,
    className
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(loader_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props));
};

Loader.defaultProps = {};
/* harmony default export */ var elements_Loader = __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "hhSj":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialPinterest");

/***/ }),

/***/ "hmjs":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidDelete");

/***/ }),

/***/ "iP0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "xwdy9p-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Image'));

const Image = (_ref) => {
  let {
    src,
    alt
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["src", "alt"]);

  return __jsx(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Image);
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "iVe0":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidLock");

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ke4W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ml6p");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("znL5");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0FtI");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mYvP");




/**
 * Firebase Authentication helper functions
 */

class AuthHelper {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "signUp", async (provider, email, password) => {
      try {
        switch (provider) {
          case 'password':
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
              Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().createUserWithEmailAndPassword(email, password).then(result => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "forgetPass", async email => {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().sendPasswordResetEmail(email).then(result => {
          resolve(true);
        }).catch(error => {
          resolve({
            error
          });
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "reauthenticate", async currentPassword => {
      var user = Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().currentUser;
      var cred = _init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"].EmailAuthProvider.credential(user.email, currentPassword);
      return user.reauthenticateWithCredential(cred);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "changePassword", async (currentPassword, newPassword) => new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
      try {
        this.reauthenticate(currentPassword).then(() => {
          var user = Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().currentUser;
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "login", async (provider, email = null, password = null, phoneNumber = null) => {
      try {
        switch (provider) {
          case 'password':
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
              Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().signInWithEmailAndPassword(email, password).then(result => {
                resolve(result);
              }).catch(error => {
                resolve({
                  error
                });
              });
            });

          case 'google':
            var authProvider = new _init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"].GoogleAuthProvider();
            return Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().signInWithPopup(authProvider);

          case 'facebook':
            var authProvider = new _init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"].FacebookAuthProvider();
            return Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().signInWithPopup(authProvider);

          case 'twitter':
            var authProvider = new _init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"].TwitterAuthProvider();
            return Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().signInWithPopup(authProvider);

          case 'phone':
            let appVerifier;
            appVerifier = window.recaptchaVerifier;
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
              Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().signInWithPhoneNumber(phoneNumber, appVerifier).then(result => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "confirmVerification", async (confirmationResult, code) => {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "getToken", async User => {
      try {
        return User.getIdToken();
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "refreshToken", async () => {
      await Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().currentUser.getIdToken(true).then(function (idToken) {
        Object(_session__WEBPACK_IMPORTED_MODULE_3__[/* setFirebaseCookie */ "c"])('id_token', idToken);
      }).catch(function (error) {});
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "logout", async () => {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        try {
          Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().signOut().then(() => {
            resolve(true);
          });
        } catch (error) {
          reject(false);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "isAuthenticated", async () => {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        const unsubscribe = Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().onAuthStateChanged(authUser => {
          resolve(authUser);
          unsubscribe();
        }, error => reject(error));
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "getCurrentUser", async () => {
      return Object(_init__WEBPACK_IMPORTED_MODULE_2__[/* firebaseAuth */ "a"])().currentUser;
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new AuthHelper());

/***/ }),

/***/ "lpv4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "lrOO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageMeta = ({
  title,
  description
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
  name: "description",
  content: description
}));

/* harmony default export */ __webpack_exports__["a"] = (PageMeta);

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mYvP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCookie */
/* unused harmony export setCookie */
/* unused harmony export removeCookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setFirebaseCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeFirebaseCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFirebaseCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3i/4");
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

/***/ "mz0A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_PROFILE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_AUTHOR_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_PUBLISHED_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_FAVOURITE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_DRAFT_POST; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "pEN5":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/iosTrash");

/***/ }),

/***/ "pHa2":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/iosTelephone");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "pneb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OCF2");
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

/***/ "qGTc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dCsE");
/* harmony import */ var _helpers_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mYvP");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * HOC for all the secret route
 */

/* harmony default export */ __webpack_exports__["a"] = (ComposedComponent => class SecretPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps(context) {
    const token = Object(_helpers_session__WEBPACK_IMPORTED_MODULE_2__[/* getFirebaseCookie */ "a"])('id_token', context);
    let user = false;
    user = Object(_helpers_session__WEBPACK_IMPORTED_MODULE_2__[/* getFirebaseCookie */ "a"])('user', context);
    const isLoggedIn = token ? true : false;

    if (!isLoggedIn) {
      Object(_helpers_redirect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(context, '/signin');
    }

    return {
      isLoggedIn,
      userId: user ? user.userId : 'false',
      email: user ? user.email : false,
      error: user ? user.error : false
    }; // return {
    //   isLoggedIn: true,
    //   userId: '3OqYVOVFVWagABCNpt040372egy2',
    //   email: 'paulruet58@gmail.com',
    //   error: user ? user.error : false,
    // };
  }

  render() {
    return __jsx(ComposedComponent, this.props);
  }

});

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qK9r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/InputSearch/style.js

const SearchInputWrapper = external_styled_components_default.a.form.withConfig({
  displayName: "style__SearchInputWrapper",
  componentId: "sc-4tc750-0"
})(["display:flex;flex-direction:row;width:100%;height:49px;border-radius:3px;background-color:#ffffff;overflow:hidden;@media screen and (max-width:767px){line-height:40px;}"]);
const SearchInput = external_styled_components_default.a.input.withConfig({
  displayName: "style__SearchInput",
  componentId: "sc-4tc750-1"
})(["line-height:49px;flex-grow:1;font-size:14px;border:none;padding-left:1rem;@media screen and (max-width:767px){line-height:40px;}&:focus{outline:0;}&::-webkit-input-placeholder{font-size:16px;color:#8c8c8c;}&:-moz-placeholder{font-size:16px;color:#8c8c8c;}&::-moz-placeholder{font-size:16px;color:#8c8c8c;}&:-ms-input-placeholder{font-size:16px;color:#8c8c8c;}"]);
const SearchButton = external_styled_components_default.a.button.withConfig({
  displayName: "style__SearchButton",
  componentId: "sc-4tc750-2"
})(["background-color:#30c56d;font-size:16px;line-height:22px;color:#ffffff;font-family:'Lato';font-weight:bold;border:none;padding-left:1.5rem;padding-right:1.5rem;cursor:pointer;flex-shrink:0;display:flex;align-items:center;svg{margin-right:10px;}a{font-size:16px;color:#ffffff;font-family:'Lato';font-weight:bold;display:flex;align-items:center;}@media screen and (max-width:500px){padding-left:12px;padding-right:12px;font-size:14px;min-width:50px;svg{margin-right:5px;}a{font-size:14px;}}"]);
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/navigation/constant.js
var constant = __webpack_require__("IzIT");

// CONCATENATED MODULE: ./components/InputSearch/index.js
var __jsx = external_react_default.a.createElement;





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
      router_default.a.push(`${constant["h" /* SEARCH_PAGE */]}?text=${value.trim()}`);
    }
  };

  return __jsx(SearchInputWrapper, {
    onSubmit: handleSearch,
    style: style
  }, __jsx(SearchInput, {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: changed,
    onKeyPress: onKeyPress,
    onBlur: onBlur,
    "aria-label": "search"
  }), __jsx(SearchButton, {
    type: "submit"
  }, buttonIcon, " ", buttonText));
};

/* harmony default export */ var components_InputSearch = __webpack_exports__["a"] = (InputSearch);

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "rNCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FIas");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8k7s");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TPw6");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("znL5");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "rNkn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MbW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "vaqy1n-0"
})(_base__WEBPACK_IMPORTED_MODULE_4__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ "b"])('Heading'));

const Heading = (_ref) => {
  let {
    content
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["content"]);

  return __jsx(HeadingWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Heading);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tC7y":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/plusRound");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uChv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("LcAa");

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

/***/ "uFB0":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("OCF2");

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

/***/ "um89":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidSearch");

/***/ }),

/***/ "vE1u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4JT2");
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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wk2l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("8k7s");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

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

/***/ "wsRY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("LcAa");

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

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "xgNA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("Ml6p");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./helpers/generateThumbUrl.js
/**
 * Find out the thumbnail url of an image from the original url
 * @param {String} imageUrl
 */
const getThumbUrl = imageUrl => {
  const imageName = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
  const thumbImageName = `thumb_${imageName}`;
  const extractedUrl = imageUrl.substr(0, imageUrl.lastIndexOf('/') + 1);
  const finalUrl = `${extractedUrl}${thumbImageName}`;
  return finalUrl;
};
// EXTERNAL MODULE: ./helpers/init.js + 1 modules
var init = __webpack_require__("0FtI");

// CONCATENATED MODULE: ./helpers/uploadMultipleImage.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uploadMultipleImages; });



/**
 * Helper functions to upload multiple image to firebase storage
 * @param {Array} images
 */

async function uploadMultipleImages(images) {
  let allImages = [];

  init["b" /* storage */].ref().constructor.prototype.putFiles = function (files) {
    var ref = this;
    return promise_default.a.all(files.map(function (file) {
      return ref.child(file.name).put(file);
    }));
  };

  const uploadedImages = await init["b" /* storage */].ref().putFiles(images).then(function (metadatas) {
    return metadatas;
  });
  return promise_default.a.all(uploadedImages.map(snapshot => {
    return new promise_default.a(async (resolve, reject) => {
      await snapshot.ref.getDownloadURL().then(function (downloadURL) {
        const thumbUrl = getThumbUrl(downloadURL);
        allImages.push({
          url: thumbUrl,
          largeUrl: downloadURL
        });
      });
      resolve(allImages);
    });
  }));
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "znL5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LcAa");
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

/***/ })

/******/ });