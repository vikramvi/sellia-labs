module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		11: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("U1TB");


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

/***/ "2QC+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const IconFont = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('i').withConfig({
  displayName: "Icon__IconFont",
  componentId: "oq3270-0"
})(styled_system__WEBPACK_IMPORTED_MODULE_4__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"]);

const Icon = (_ref) => {
  let {
    name
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["name"]);

  return __jsx(IconFont, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: `ion-${name}`
  }, props));
};

Icon.defaultProps = {
  color: '#333333',
  fontSize: 24
};
/* harmony default export */ __webpack_exports__["a"] = (Icon);

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

/***/ "4dh2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TagGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TagGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div').withConfig({
  displayName: "TagGroup__TagGroupWrapper",
  componentId: "sc-1dmilwj-0"
})(["display:flex;align-items:center;justify-content:flex-start;margin-top:", ";margin-bottom:", ";"], props => props.marginTop ? props.marginTop : 0, props => props.marginBottom ? props.marginBottom : 0);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('span').withConfig({
  displayName: "TagGroup__Label",
  componentId: "sc-1dmilwj-1"
})(["min-width:50px;height:33px;background-color:#f2a43e;border:none;border-radius:5px;position:relative;color:#ffffff;font-weight:600;font-size:14px;line-height:32px;text-indent:5px;box-shadow:-1px 2px 2px rgba(0,0,0,0.16);display:inline-block;text-decoration:none;transition:background 250ms ease-in-out,transform 150ms ease;box-sizing:border-box;margin-right:10px;padding-right:32px;padding-left:10px;&:hover,&:focus{background-color:#ec921d;}&:focus{outline:1px solid #fff;outline-offset:-4px;}&:active{transform:scale(0.99);}&:after{content:'';width:0;height:0;display:block;border-top:16px solid transparent;border-bottom:16px solid transparent;border-right:20px solid #ffffff;position:absolute;right:-1px;top:0;border-radius:5px 0 0 5px;}"]);
const TagWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('span').withConfig({
  displayName: "TagGroup__TagWrapper",
  componentId: "sc-1dmilwj-2"
})(["display:inline-block;padding:0 7px;height:22px;line-height:22px;border-radius:3px;opacity:1;color:", ";font-size:", ";background-color:", ";font-weight:400;cursor:pointer;"], props => props.color ? props.color : '#595959', props => props.size ? props.size : '12px', props => props.bg ? props.bg : '#e2e2e2');

const Tag = ({
  style,
  bgColor,
  size,
  tagColor,
  tagContent
}) => __jsx(TagWrapper, {
  style: style,
  bg: bgColor,
  size: size,
  color: tagColor
}, tagContent);

const LabelTag = props => __jsx(Label, {
  style: props.style
}, props.tagContent);
const TagGroup = props => __jsx(TagGroupWrapper, {
  marginBottom: props.marginBottom,
  marginTop: props.marginTop,
  style: props.style
}, props.children);
/* harmony default export */ __webpack_exports__["c"] = (Tag);

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

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ "BnVt":
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),

/***/ "Bt1m":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzAgMjA1Ij48ZGVmcz48c3R5bGU+LmJ7ZmlsbDojOTk5fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc2IC05NCkiPjxyZWN0IHdpZHRoPSIyNzAiIGhlaWdodD0iMjA1IiByeD0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NiA5NCkiIGZpbGw9IiNmN2Y3ZjciLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzg1IDE3NCkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjYuOTgzIDM3LjY0MWE2LjU4OCA2LjU4OCAwIDAxLTQuMTM0LTEuNTQybC03LjYzOC02LjcyN2EzLjM2MyAzLjM2MyAwIDAwLTQuMzQ1LS4yMUwwIDM3LjE1djUuMTg1YTIuNTIzIDIuNTIzIDAgMDAyLjM3OCAyLjY2aDM4LjY5YTIuOTUxIDIuOTUxIDAgMDAzLjA4My0yLjY2M1YyOC43NDFsLTEzLjggNy45ODhhNi4zNzcgNi4zNzcgMCAwMS0zLjM2OC45MTJ6Ii8+PGNpcmNsZSBjbGFzcz0iYiIgY3g9IjMuMDgzIiBjeT0iMy4wODMiIHI9IjMuMDgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy4zMzkgMTcuODgpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik01MS40MzkgNS40NzdhMi41OTMgMi41OTMgMCAwMC0xLjg5Mi0xLjA1MUwxMS4zNTYuMDExYTIuNzkxIDIuNzkxIDAgMDAtMy4xNTMgMi4zODZsLS42MzEgNS40NjZoMzMuNWE2LjAyNiA2LjAyNiAwIDAxNS44ODYgNS44MTZ2MjQuNzMzYzAtLjE0LjYzMS0uMjguOTExLS41NjFhMi4zODIgMi4zODIgMCAwMC45MTEtMS44OTJsMy4yOTMtMjguNDVhMi43MzMgMi43MzMgMCAwMC0uNjM0LTIuMDMyeiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNDEuMDY4IDEwLjY2NEgyLjU5N2EyLjgyOSAyLjgyOSAwIDAwLTIuNTkzIDMuMDEydjE5Ljk3MWw5LjI1LTYuNzI3YTYuMTY3IDYuMTY3IDAgMDE3Ljc3OC4zNWw3LjcwOCA2LjcyN2EzLjU3NCAzLjU3NCAwIDAwNC4xMzQuMzVsMTUuMjc2LTguOVYxMy42NzZhMy4yMjMgMy4yMjMgMCAwMC0zLjA4Mi0zLjAxMnpNMjYuNDIyIDI2Ljg1YTUuODg2IDUuODg2IDAgMTE1Ljg4Ni01Ljg4NiA1Ljg4NiA1Ljg4NiAwIDAxLTUuODg2IDUuODg2eiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "Cgap":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vE1u");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/MbW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div').withConfig({
  displayName: "Card__CardWrapper",
  componentId: "sc-1tufk6z-0"
})(_base__WEBPACK_IMPORTED_MODULE_5__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_3__["opacity"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__[/* cards */ "b"], Object(_base__WEBPACK_IMPORTED_MODULE_5__[/* themed */ "b"])('Card'));

const Card = (_ref) => {
  let {
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["children"]);

  return __jsx(CardWrapper, props, children);
};

Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "DUv9":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialInstagram");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

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

/***/ "GGfl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rNCn");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TPw6");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Oi65");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit_iconic_locked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("VgrN");
/* harmony import */ var react_icons_kit_iconic_locked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_iconic_locked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_iconic_phone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vFPT");
/* harmony import */ var react_icons_kit_iconic_phone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_iconic_phone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reusecore_src_elements_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("dwm8");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Ax/r");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YhXy");
/* harmony import */ var _components_AuthHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("bWI6");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Wc11");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("bKIR");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("BHux");
/* harmony import */ var core_graphql_Mutations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("23at");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _helpers_authHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("ke4W");
/* harmony import */ var _helpers_session__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("mYvP");
/* harmony import */ var _helpers_redirect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("dCsE");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



















const SignInEnhancher = Object(formik__WEBPACK_IMPORTED_MODULE_4__["withFormik"])({
  enableReinitialize: true,
  mapPropsToValues: props => ({
    email: '',
    password: '',
    remember: false
  }),
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email('Invalid email address').required('Email is required!'),
    password: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required('Password is required')
  })
});
let token = '';

const SignInForm = ({
  handleSubmit,
  values,
  handleChange,
  touched,
  errors,
  setFieldValue,
  handleBlur
}) => {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const handleCheckboxChange = checked => {
    setFieldValue('remember', checked);
  };

  const [loginMutation, {
    data
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__["useMutation"])(core_graphql_Mutations__WEBPACK_IMPORTED_MODULE_16__[/* LOGIN */ "c"]);

  handleSubmit = async () => {
    setLoading(true);

    if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(errors).length) {
      const {
        email,
        password
      } = values;
      const provider = 'password';
      const {
        user,
        error
      } = await _helpers_authHelper__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].login(provider, email, password);

      if (user) {
        token = await user.getIdToken();
        setFieldValue('token', token);
      } else if (error) {
        setLoading(false);
        setError(error);
      }
    } else {
      setLoading(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    (async function () {
      try {
        if (values.token) {
          const res = await loginMutation({
            variables: {
              user: {
                email: values.email,
                token: values.token
              }
            }
          });

          if (res && res.data && res.data.login) {
            setLoading(false);
            const user = res.data.login;
            Object(_helpers_session__WEBPACK_IMPORTED_MODULE_19__[/* setFirebaseCookie */ "c"])('id_token', values.token);
            Object(_helpers_session__WEBPACK_IMPORTED_MODULE_19__[/* setFirebaseCookie */ "c"])('user', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, user));
            Object(_helpers_redirect__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"])({}, '/');
          }
        }
      } catch (error) {
        setLoading(false);
        return error;
      }
    })();
  }, [values.token]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_AuthHeader__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null), __jsx(_style__WEBPACK_IMPORTED_MODULE_15__[/* FormGroup */ "b"], {
    className: errors.email ? 'hasErrorMsg' : ''
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
    elementType: "input",
    elementConfig: {
      type: 'email',
      required: 'required'
    },
    onBlur: handleBlur('email'),
    value: values.email,
    error: errors.email,
    touched: touched,
    label: "Email",
    changed: handleChange('email')
  }), __jsx("span", {
    className: "errorMsg"
  }, errors.email && touched.email && errors.email)), __jsx(_style__WEBPACK_IMPORTED_MODULE_15__[/* FormGroup */ "b"], {
    className: errors.password ? 'hasErrorMsg' : ''
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
    elementType: "input",
    elementConfig: {
      type: 'password',
      required: 'required'
    },
    onBlur: handleBlur('password'),
    value: values.password,
    error: errors.password,
    touched: touched,
    label: "Password",
    changed: handleChange('password')
  }), __jsx("span", {
    className: "errorMsg"
  }, errors.password && touched.password && errors.password)), error.message ? __jsx(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    flexBox: true,
    mt: 25,
    mb: 35,
    justifyContent: "center",
    alignItems: "center"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_15__[/* ErrorNotification */ "a"], null, error.message)) : '', __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"] //disabled={errors.length !== 0}
  , {
    onClick: handleSubmit,
    isLoading: loading,
    loaderColor: "#fff",
    title: "Sign in now",
    width: 1,
    icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6___default.a, {
      icon: react_icons_kit_iconic_locked__WEBPACK_IMPORTED_MODULE_7__["locked"],
      size: 16
    })
  }), __jsx(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    fontSize: 14,
    color: "#8C8C8C",
    content: "Or",
    textAlign: "center",
    mt: 16
  }), __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    title: "Sign in with",
    bg: "#5CABE6",
    width: 1,
    icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6___default.a, {
      icon: react_icons_kit_iconic_phone__WEBPACK_IMPORTED_MODULE_8__["phone"],
      size: 16
    }),
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/mobile-signin')
  }), __jsx(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    flexBox: true,
    mb: 25,
    mt: 25,
    justifyContent: "center"
  }, __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    fontSize: 12,
    title: "Forgot Password ?",
    variant: "textButton",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/forget-password'),
    style: {
      minHeight: 'auto'
    }
  })), __jsx(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    flexBox: true,
    mt: 0,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }, __jsx(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    color: "#8C8C8C",
    content: "Don't have an account?",
    mb: "5px"
  }), __jsx(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    title: "Sign Up",
    ml: "5px",
    mb: "5px",
    variant: "textButton",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/signup'),
    style: {
      minHeight: 'auto'
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (SignInEnhancher(SignInForm));

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

/***/ "KaAA":
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

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

/***/ "OOfv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-image"
var external_react_image_ = __webpack_require__("bYH+");
var external_react_image_default = /*#__PURE__*/__webpack_require__.n(external_react_image_);

// CONCATENATED MODULE: ./components/UserInfoBox/userInfoBox.style.js


const Image = external_styled_components_default()(external_react_image_default.a).withConfig({
  displayName: "userInfoBoxstyle__Image",
  componentId: "hvwsex-0"
})(["width:100%;height:100%;border-radius:0;object-fit:cover;"]);
const InfoBox = external_styled_components_default.a.div.withConfig({
  displayName: "userInfoBoxstyle__InfoBox",
  componentId: "hvwsex-1"
})(["display:flex;flex-direction:row;align-items:center;"]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "userInfoBoxstyle__ImageWrapper",
  componentId: "hvwsex-2"
})(["width:", ";height:", ";display:flex;flex-shrink:0;overflow:hidden;position:relative;border-radius:", "px;"], props => props.imgWidth ? props.imgWidth : '100%', props => props.imgHeight ? props.imgHeight : '100%', props => props.imgRadius ? props.imgRadius : 19);
const Information = external_styled_components_default.a.div.withConfig({
  displayName: "userInfoBoxstyle__Information",
  componentId: "hvwsex-3"
})(["width:100%;display:flex;flex-direction:column;margin-left:10px;overflow:hidden;"]);
const Title = external_styled_components_default.a.span.withConfig({
  displayName: "userInfoBoxstyle__Title",
  componentId: "hvwsex-4"
})(["font-size:14px;font-weight:700;color:#333333;margin-bottom:5px;"]);
const PostedTime = external_styled_components_default.a.span.withConfig({
  displayName: "userInfoBoxstyle__PostedTime",
  componentId: "hvwsex-5"
})(["font-size:12px;font-weight:400;color:#8c8c8c;"]);
const AddressInfo = external_styled_components_default.a.div.withConfig({
  displayName: "userInfoBoxstyle__AddressInfo",
  componentId: "hvwsex-6"
})(["display:flex;flex-direction:row;align-items:center;margin-bottom:5px;"]);
const Address = external_styled_components_default.a.span.withConfig({
  displayName: "userInfoBoxstyle__Address",
  componentId: "hvwsex-7"
})(["color:#8c8c8c;font-size:14px;line-height:17px;"]);
const OtherInfo = external_styled_components_default()(AddressInfo).withConfig({
  displayName: "userInfoBoxstyle__OtherInfo",
  componentId: "hvwsex-8"
})(["margin-bottom:5px;"]);
const PhoneNo = external_styled_components_default()(Address).withConfig({
  displayName: "userInfoBoxstyle__PhoneNo",
  componentId: "hvwsex-9"
})([""]);
const CallNowText = external_styled_components_default()(Address).withConfig({
  displayName: "userInfoBoxstyle__CallNowText",
  componentId: "hvwsex-10"
})(["color:#30c56d;font-weight:700;"]);
const EditButton = external_styled_components_default.a.div.withConfig({
  displayName: "userInfoBoxstyle__EditButton",
  componentId: "hvwsex-11"
})(["position:absolute;padding:9px;width:100%;text-align:center;background-color:rgba(0,0,0,0.3);bottom:0;left:0;color:#fff;font-size:15px;"]);
const IconBox = external_styled_components_default.a.span.withConfig({
  displayName: "userInfoBoxstyle__IconBox",
  componentId: "hvwsex-12"
})(["display:inline-block;color:#bababa;margin-right:7px;margin-top:3px;"]);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/user-placeholder.svg
var user_placeholder = __webpack_require__("EV4e");
var user_placeholder_default = /*#__PURE__*/__webpack_require__.n(user_placeholder);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/navigation/constant.js
var constant = __webpack_require__("IzIT");

// CONCATENATED MODULE: ./components/UserInfoBox/index.js
var __jsx = external_react_default.a.createElement;






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
  return __jsx(InfoBox, {
    style: style
  }, __jsx(ImageWrapper, {
    imgWidth: imgWidth,
    imgHeight: imgHeight,
    imgRadius: imgRadius
  }, __jsx(Image, {
    src: source,
    loader: __jsx(Image, {
      src: user_placeholder_default.a
    }),
    unloader: __jsx(Image, {
      src: user_placeholder_default.a
    })
  }), userId && userId === authorId && __jsx(link_default.a, {
    href: `${constant["a" /* ACCOUNT_SETTING_PAGE */]}?view=edit-profile`
  }, __jsx("a", null, __jsx(EditButton, null, "Edit")))), __jsx(Information, {
    style: informationStyle
  }, title && __jsx(link_default.a, {
    href: `${constant["f" /* PROFILE_PAGE */]}/${author}`
  }, __jsx("a", null, __jsx(Title, {
    onClick: onAuthorTitlePress,
    style: titleStyle
  }, title))), postedTime && __jsx(PostedTime, null, postedTime), address !== '' && addressIcon ? __jsx(AddressInfo, null, addressIcon && __jsx(IconBox, null, addressIcon), address && __jsx(Address, null, address)) : null, website !== '' && websiteIcon ? __jsx(OtherInfo, null, websiteIcon && __jsx(IconBox, null, websiteIcon), website && __jsx(PhoneNo, null, website)) : null, phoneNumber !== '' && phoneIcon ? __jsx(OtherInfo, null, phoneIcon && __jsx(IconBox, null, phoneIcon), phoneNumber && __jsx(PhoneNo, null, phoneNumber)) : null));
};

// SingleList.defaultProps = {
//   activeOpacity: 0.8,
//   disabled: false,
//   disabledStyle: { opacity: 0.3 },
//   checked: false,
//   onValueChange: () => {},
// };
/* harmony default export */ var UserInfoBox = __webpack_exports__["a"] = (UserInformation);

/***/ }),

/***/ "OYcf":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/more");

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

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

/***/ "U1TB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-styled-flexboxgrid"
var external_react_styled_flexboxgrid_ = __webpack_require__("4a4h");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Box/index.js
var Box = __webpack_require__("bKIR");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Text/index.js
var Text = __webpack_require__("Ax/r");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/TagGroup/index.js
var TagGroup = __webpack_require__("4dh2");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/ModalContainer/ShareModal/style.js

const ShareModalWrapper = external_styled_components_default()('div').withConfig({
  displayName: "style__ShareModalWrapper",
  componentId: "xnvf0t-0"
})(["display:flex;flex-direction:column;"]);
const ShareLinkWrapper = external_styled_components_default()('div').withConfig({
  displayName: "style__ShareLinkWrapper",
  componentId: "xnvf0t-1"
})(["display:flex;align-items:center;width:100%;"]);
const ShareLink = external_styled_components_default()('input').withConfig({
  displayName: "style__ShareLink",
  componentId: "xnvf0t-2"
})(["font-size:16px;line-height:38px;color:#595959;width:100%;height:40px;background-color:#ffffff;border:1px solid #e2e2e2;padding:0 15px;border-radius:3px 0 0 3px;outline:0;&:focus{box-shadow:none;}"]);
const CopyButton = external_styled_components_default()('button').withConfig({
  displayName: "style__CopyButton",
  componentId: "xnvf0t-3"
})(["background-color:#e2e2e2;font-size:16px;line-height:38px;height:40px;color:#8c8c8c;font-weight:700;border:none;padding:0 1.5rem;cursor:pointer;border:0;outline:0;border-radius:0 3px 3px 0;flex-shrink:0;position:relative;"]);
const Notify = external_styled_components_default.a.span.withConfig({
  displayName: "style__Notify",
  componentId: "xnvf0t-4"
})(["background-color:#eee;color:#595959;padding:0 20px;position:absolute;top:-50px;right:0;border-radius:3px;:after{content:' ';position:absolute;right:10px;bottom:-10px;border-top:10px solid #e2e2e2;border-right:10px solid transparent;border-left:10px solid transparent;border-bottom:none;}"]);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "react-custom-share"
var external_react_custom_share_ = __webpack_require__("W1Sp");

// CONCATENATED MODULE: ./components/SocialShare/index.js
var __jsx = external_react_default.a.createElement;

 // import icons



const ShareBlockStandards = external_styled_components_default()(external_react_custom_share_["ShareBlockStandard"]).withConfig({
  displayName: "SocialShare__ShareBlockStandards",
  componentId: "zzsjz1-0"
})([".rcs-buttons{justify-content:flex-start !important;.rcs-button{margin:0;margin-right:15px;margin-top:15px;width:35px;height:35px;svg{width:16px;}}}"]);

const SocialShare = props => {
  // create object with props for shareBlock
  const shareBlockProps = {
    url: props.url,
    // localhost url is not shareable in facebook
    button: external_react_custom_share_["ShareButtonRoundSquare"],
    buttons: [{
      network: 'Twitter',
      icon: fa_["FaTwitter"]
    }, {
      network: 'Facebook',
      icon: fa_["FaFacebook"]
    }, {
      network: 'GooglePlus',
      icon: fa_["FaGooglePlus"]
    }, {
      network: 'Email',
      icon: fa_["FaEnvelope"]
    }, {
      network: 'Linkedin',
      icon: fa_["FaLinkedin"]
    }],
    text: props.title,
    longtext: props.subTitle
  };
  return __jsx(ShareBlockStandards, shareBlockProps);
};

/* harmony default export */ var components_SocialShare = (SocialShare);
// EXTERNAL MODULE: external "react-copy-to-clipboard"
var external_react_copy_to_clipboard_ = __webpack_require__("WxHd");

// CONCATENATED MODULE: ./containers/ModalContainer/ShareModal/index.js
var ShareModal_jsx = external_react_default.a.createElement;






class ShareModal_ShareModal extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
      text: props.data.link
    };
  }

  render() {
    return ShareModal_jsx(ShareModalWrapper, null, ShareModal_jsx(Text["a" /* default */], {
      type: "heading",
      as: "h3",
      fontSize: 20,
      fontWeight: 600,
      color: "#333333",
      mb: "5px",
      content: this.props.data.title
    }), ShareModal_jsx(Text["a" /* default */], {
      content: `Posted by ${this.props.data.author}`,
      type: "normal",
      size: "medium",
      color: "#595959",
      mb: 15,
      style: {
        fontWeight: '400'
      }
    }), ShareModal_jsx(ShareLinkWrapper, null, ShareModal_jsx(ShareLink, {
      type: "text",
      value: this.state.text,
      onChange: e => {
        this.setState({
          text: e.target.value,
          isCpoied: false
        });
      }
    }), ShareModal_jsx(external_react_copy_to_clipboard_["CopyToClipboard"], {
      onCopy: () => {
        this.setState({
          isCpoied: true
        });
      },
      text: this.state.text
    }, ShareModal_jsx(CopyButton, null, this.state.isCpoied ? ShareModal_jsx(Notify, null, "Copied") : null, "Copy link"))), ShareModal_jsx(components_SocialShare, {
      url: this.state.text,
      title: this.props.data.title
    }));
  }

}

/* harmony default export */ var ModalContainer_ShareModal = (ShareModal_ShareModal);
// EXTERNAL MODULE: ./containers/SignInForm/index.js
var SignInForm = __webpack_require__("GGfl");

// CONCATENATED MODULE: ./containers/ModalContainer/LoginModal/index.js
var LoginModal_jsx = external_react_default.a.createElement;



const LoginModal = () => {
  return LoginModal_jsx("div", {
    className: "NoMargin"
  }, LoginModal_jsx(SignInForm["a" /* default */], null));
};

/* harmony default export */ var ModalContainer_LoginModal = (LoginModal);
// CONCATENATED MODULE: ./containers/ModalContainer/ContactInfoModal/index.js
var ContactInfoModal_jsx = external_react_default.a.createElement;




const ContactInfoModal = props => {
  return ContactInfoModal_jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, ContactInfoModal_jsx(Box["a" /* default */], {
    flexBox: true,
    style: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: 30,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30
    }
  }, ContactInfoModal_jsx(Text["a" /* default */], {
    content: "Contact Info",
    as: "h3",
    fontSize: 20,
    fontWeight: 600,
    color: "#333333",
    mb: 10
  }), ContactInfoModal_jsx(Text["a" /* default */], {
    content: props.data.contactNumber,
    as: "span",
    fontSize: 14,
    fontWeight: 400,
    color: "#595959",
    mb: 4
  })), ContactInfoModal_jsx(Box["a" /* default */], {
    flexBox: true,
    style: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: '#F8F8F8',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30
    }
  }, ContactInfoModal_jsx(Text["a" /* default */], {
    content: "Reporting a safety issue",
    as: "span",
    fontSize: 16,
    fontWeight: 700,
    color: "#333333",
    mb: 10
  }), ContactInfoModal_jsx(Text["a" /* default */], {
    content: "if you feel that you have been the victim of a spam, please report your situation to us immediately.",
    as: "span",
    fontSize: 14,
    fontWeight: 400,
    color: "#595959",
    mb: 3
  })));
};

/* harmony default export */ var ModalContainer_ContactInfoModal = (ContactInfoModal);
// EXTERNAL MODULE: ./Config.js
var Config = __webpack_require__("aZpa");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Mutations/index.js + 3 modules
var Mutations = __webpack_require__("23at");

// EXTERNAL MODULE: ./helpers/authHelper.js
var authHelper = __webpack_require__("ke4W");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./components/AddressBox/style.js

const AddressBox = external_styled_components_default()('div').withConfig({
  displayName: "style__AddressBox",
  componentId: "sc-16bt0kk-0"
})(["display:flex;padding:15px;border-radius:5px;flex-direction:row;align-items:center;justify-content:space-between;border:1px solid #e2e2e2;"]);
const Address = external_styled_components_default()('div').withConfig({
  displayName: "style__Address",
  componentId: "sc-16bt0kk-1"
})(["display:flex;flex-direction:column;padding-right:30px;width:100%;flex-shrink:1;"]);
const Place = external_styled_components_default()('span').withConfig({
  displayName: "style__Place",
  componentId: "sc-16bt0kk-2"
})(["font-family:'Lato',sans-serif;color:#595959;font-size:12px;font-weight:700;margin-bottom:5px;line-height:1.5;"]);
const Location = external_styled_components_default()('span').withConfig({
  displayName: "style__Location",
  componentId: "sc-16bt0kk-3"
})(["font-family:'Lato',sans-serif;color:#8c8c8c;font-size:12px;font-weight:400;"]);

// CONCATENATED MODULE: ./components/ImageHolder/imageHolder.style.js

const ImageHolder = external_styled_components_default.a.div.withConfig({
  displayName: "imageHolderstyle__ImageHolder",
  componentId: "rfwyp9-0"
})(["display:flex;flex-shrink:0;width:", ";height:", ";"], props => props.imgWidth ? props.imgWidth : '100%', props => props.imgHeight ? props.imgHeight : '100%');
const Images = external_styled_components_default.a.img.withConfig({
  displayName: "imageHolderstyle__Images",
  componentId: "rfwyp9-1"
})(["width:100%;height:100%;"]);

// CONCATENATED MODULE: ./components/ImageHolder/IconHolder.js
var IconHolder_jsx = external_react_default.a.createElement;



const IconBox = ({
  imgWidth,
  imgHeight,
  className,
  style,
  imgStyle,
  source
}) => {
  return IconHolder_jsx(ImageHolder, {
    style: style,
    imgWidth: imgWidth,
    imgHeight: imgHeight,
    className: className
  }, IconHolder_jsx(Images, {
    style: imgStyle,
    src: source
  }));
};

/* harmony default export */ var IconHolder = (IconBox);
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/images/location.png
var images_location = __webpack_require__("WvYn");
var location_default = /*#__PURE__*/__webpack_require__.n(images_location);

// CONCATENATED MODULE: ./components/AddressBox/index.js
var AddressBox_jsx = external_react_default.a.createElement;






const AddressComp = ({
  style,
  className,
  location,
  distance
}) => {
  return AddressBox_jsx(AddressBox, {
    style: style,
    className: className
  }, AddressBox_jsx(Address, null, AddressBox_jsx(Place, {
    location: location
  }, location), AddressBox_jsx(Location, {
    distance: distance
  }, distance)), AddressBox_jsx(IconHolder, {
    source: location_default.a,
    imgWidth: "28px",
    imgHeight: "28px"
  }));
};

AddressBox.propTypes = {
  /** Place name. */
  location: external_prop_types_default.a.string,

  /** Location Name */
  distance: external_prop_types_default.a.string,

  /** Custom style */
  style: external_prop_types_default.a.any,

  /** Class name*/
  className: external_prop_types_default.a.string
};
/* harmony default export */ var components_AddressBox = (AddressComp);
// EXTERNAL MODULE: ./components/Icon/index.js
var Icon = __webpack_require__("2QC+");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Button/index.js + 1 modules
var Button = __webpack_require__("YhXy");

// EXTERNAL MODULE: ./components/UserInfoBox/index.js + 1 modules
var UserInfoBox = __webpack_require__("OOfv");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// CONCATENATED MODULE: ./components/Truncate/index.js

var Truncate_jsx = external_react_default.a.createElement;


class Truncate_ReadMore extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      expanded: false
    });

    Object(defineProperty["a" /* default */])(this, "toggleLines", event => {
      event.preventDefault();
      this.setState({
        expanded: !this.state.expanded
      });
    });
  }

  render() {
    const {
      children,
      more,
      less,
      character
    } = this.props;
    const {
      expanded
    } = this.state;
    if (!children) return '';
    return Truncate_jsx(external_react_["Fragment"], null, children && children.length < character || expanded ? children : children.substring(0, character), children && children.length > character && !expanded && Truncate_jsx("span", null, Truncate_jsx("a", {
      href: "#",
      onClick: this.toggleLines,
      style: {
        marginLeft: 15,
        color: '#30C56D'
      }
    }, more)), children && children.length > character && expanded && Truncate_jsx("span", null, Truncate_jsx("a", {
      href: "#",
      onClick: this.toggleLines,
      style: {
        marginLeft: 15,
        color: '#30C56D'
      }
    }, less)));
  }

}

Truncate_ReadMore.defaultProps = {
  character: 150,
  more: 'more',
  less: 'less'
};
/* harmony default export */ var Truncate = (Truncate_ReadMore);
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/navigation/constant.js
var constant = __webpack_require__("IzIT");

// CONCATENATED MODULE: ./containers/SinglePost/Description/description.style.js

const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "descriptionstyle__ButtonWrapper",
  componentId: "puyjjc-0"
})(["display:flex;flex-direction:row;@media screen and (max-width:1023px){width:100%;margin-top:20px;.outlineButton{width:calc(50% - 5px);}}"]);
const InfoBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "descriptionstyle__InfoBoxWrapper",
  componentId: "puyjjc-1"
})(["display:flex;flex-direction:row;align-items:flex-start;margin-bottom:30px;", ";@media screen and (max-width:1023px){flex-direction:column;}"], ''
/* padding: 20px 35px; */
);
const AlignCenterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "descriptionstyle__AlignCenterWrapper",
  componentId: "puyjjc-2"
})(["display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;"]);
const DescriptionBlock = external_styled_components_default.a.div.withConfig({
  displayName: "descriptionstyle__DescriptionBlock",
  componentId: "puyjjc-3"
})(["display:block;font-family:'Lato';font-size:15px;line-height:22px;color:#595959;"]);

// CONCATENATED MODULE: ./containers/SinglePost/Description/index.js
var Description_jsx = external_react_default.a.createElement;





















const timeFormatAMPM = date => {
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

const Description = ({
  postData,
  isLoggedIn,
  userId
}) => {
  let userFavList = [];
  let userNewFavList = [];
  let publishTime = '';
  const {
    0: btnLoading,
    1: setBtnLoading
  } = Object(external_react_["useState"])(false);
  const favouritedBy = postData && postData.favouritedBy ? postData.favouritedBy : [];
  const contactNumber = postData && postData.contactNumber ? postData.contactNumber : '';
  const authorImage = postData.author && postData.author.image && postData.author.image.url ? postData.author.image.url : null;
  const authorFallbackImage = postData.author && postData.author.image && postData.author.image.largeUrl ? postData.author.image.largeUrl : null;

  if (favouritedBy.includes(userId)) {
    userFavList.push({
      id: postData.id
    });
  }

  const {
    0: userFav,
    1: setUserfav
  } = Object(external_react_["useState"])(userFavList);

  const isFavourite = (id, favList) => {
    const favItem = favList.filter(item => item.id === id);

    if (favItem.length) {
      return true;
    }

    return false;
  };

  const isFav = isFavourite(postData.id, userFav);
  const handleFavMutation = Object(react_hooks_["useMutation"])(Mutations["b" /* HANDLE_FAV */], {
    variables: {
      fav: {
        id: userId,
        postId: postData.id
      }
    }
  });

  const handleFavourite = async () => {
    setBtnLoading(true);

    if (isLoggedIn) {
      await authHelper["a" /* default */].refreshToken();
    }

    if (isLoggedIn) {
      try {
        const {
          data
        } = await handleFavMutation();
        userNewFavList = data && data.handleFav && data.handleFav.data && data.handleFav.data.length ? data.handleFav.data : [];

        if (userFav.length !== userNewFavList.length) {
          setUserfav(userNewFavList);
        }

        setBtnLoading(false);
      } catch (error) {
        setBtnLoading(false);
      }
    } else {
      setBtnLoading(false); // SHOW MODAL

      Object(reuse_modal_["openModal"])({
        config: {
          disableDragging: false,
          minHeight: 'auto',
          width: 'auto',
          height: 'auto',
          enableResizing: false,
          disableDragging: true,
          transition: {
            tension: 150
          }
        },
        springStyle: {
          backgroundColor: '#ffffff',
          overflowY: 'auto'
        },
        modalClass: 'customModal',
        closeOnClickOutside: true,
        component: ModalContainer_LoginModal,
        componentProps: {}
      });
    }
  };

  if (postData && postData.createdAt && postData.createdAt.seconds) {
    const timeCalculation = new Date(postData.createdAt.seconds * 1000);
    publishTime = timeFormatAMPM(timeCalculation);
  } else if (postData && postData.createdAt && postData.createdAt._seconds) {
    const timeCalculation = new Date(postData.createdAt._seconds * 1000);
    publishTime = timeFormatAMPM(timeCalculation);
  }

  const adsCategory = (category, index) => {
    return Description_jsx(link_default.a, {
      key: index,
      href: {
        pathname: `${constant["j" /* SINGLE_CATEGORY_PAGE */]}/${category.slug}`,
        state: {
          termId: category.id
        }
      }
    }, Description_jsx("a", null, Description_jsx(TagGroup["c" /* default */], {
      tagContent: category.name,
      style: {
        marginRight: 10
      }
    })));
  };

  return Description_jsx(external_react_["Fragment"], null, Description_jsx(Text["a" /* default */], {
    content: postData.title,
    as: "span",
    fontSize: 18,
    fontWeight: 600,
    color: "#333333"
  }), Description_jsx(TagGroup["b" /* TagGroup */], {
    marginBottom: "25px",
    style: {
      marginTop: 25,
      width: '100%'
    }
  }, Description_jsx(TagGroup["a" /* LabelTag */], {
    tagContent: `${Config["a" /* CURRENCY */]} ${postData.price}`
  }), postData.isNegotiable && Description_jsx(Text["a" /* default */], {
    content: "Negotiable",
    as: "span",
    fontSize: 14,
    fontWeight: 400,
    color: "#595959",
    mb: 0
  })), postData && postData.distance ? Description_jsx(components_AddressBox, {
    distance: postData.distance ? `Approximately ${Math.floor(postData.distance)} km away` : '',
    location: postData.formattedLocation ? postData.formattedLocation.formattedAddress : '',
    style: {
      marginBottom: '20px'
    }
  }) : Description_jsx("p", null) // <p>Please Enable your location to get distance</p>
  , Description_jsx(Button["a" /* default */], {
    iconPosition: "left",
    title: "Show Contact",
    bg: "#30C56D",
    style: {
      marginBottom: 38,
      width: '100%'
    },
    icon: Description_jsx(Icon["a" /* default */], {
      name: "ios-call",
      fontSize: 19,
      color: "#fff",
      mr: 10
    }),
    onClick: () => Object(reuse_modal_["openModal"])({
      config: {
        disableDragging: false,
        className: 'contactModal',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 150
        }
      },
      closeOnClickOutside: true,
      component: ModalContainer_ContactInfoModal,
      componentProps: {
        data: {
          contactNumber: contactNumber
        }
      }
    })
  }), Description_jsx(InfoBoxWrapper, null, Description_jsx(UserInfoBox["a" /* default */], {
    imgWidth: "45px",
    imgHeight: "45px",
    imgRadius: 30,
    source: [authorImage, authorFallbackImage],
    title: postData && postData.author && postData.author.name ? postData.author.name : '',
    author: postData.authorId,
    postedTime: publishTime !== '' ? `Ad posted at ${publishTime}` : '',
    style: {
      flexGrow: 1
    }
  }), Description_jsx(ButtonWrapper, {
    style: {
      flexGrow: 0
    }
  }, Description_jsx(Button["a" /* default */], {
    variant: "outlined",
    icon: Description_jsx(Icon["a" /* default */], {
      name: "ios-share-alt",
      fontSize: 18,
      color: "#8C8C8C"
    }),
    height: 40,
    width: 40,
    className: "outlineButton",
    style: {
      marginRight: 10,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#e2e2e2',
      minHeight: 'auto',
      minWidth: 'auto'
    },
    onClick: () => Object(reuse_modal_["openModal"])({
      config: {
        disableDragging: false,
        className: 'shareModal',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 150
        }
      },
      withRnd: false,
      closeOnClickOutside: true,
      component: ModalContainer_ShareModal,
      componentProps: {
        data: {
          author: postData.author.name,
          link:  false ? undefined : null,
          title: postData.title
        }
      }
    })
  }), Description_jsx(Button["a" /* default */], {
    variant: "outlined",
    className: "outlineButton",
    isLoading: btnLoading,
    icon: Description_jsx(Icon["a" /* default */], {
      name: "ios-heart",
      fontSize: 18,
      color: isFav ? '#30C56D' : '#8C8C8C'
    }),
    height: 40,
    width: 40,
    style: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: isFav ? '#30C56D' : '#e2e2e2',
      minHeight: 'auto',
      minWidth: 'auto',
      padding: 0
    },
    onClick: handleFavourite
  }))), Description_jsx(Text["a" /* default */], {
    content: "Description",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#333333",
    mb: 15,
    style: {
      display: 'inline-block'
    }
  }), postData && Description_jsx(TagGroup["c" /* default */], {
    bgColor: postData.condition ? '#00b6ff' : '#30C56D',
    tagContent: postData.condition ? 'New' : 'Used',
    size: "14px",
    tagColor: "#ffffff",
    style: {
      marginLeft: 15,
      fontWeight: 700
    }
  }), Description_jsx(AlignCenterWrapper, {
    style: {
      marginBottom: 15
    }
  }, Description_jsx(DescriptionBlock, null, Description_jsx(Truncate, {
    character: 150
  }, postData.content))), Description_jsx(AlignCenterWrapper, {
    style: {
      marginTop: 25,
      marginBottom: 25
    }
  }, postData.categories && postData.categories.length ? postData.categories.map(adsCategory) : null), isLoggedIn && postData.authorId && userId === postData.authorId ? Description_jsx(Button["a" /* default */], {
    title: "Edit",
    variant: "textButton",
    style: {
      minHeight: 'auto',
      minWidth: 'auto'
    },
    onClick: () => router_default.a.push(`${constant["b" /* ADD_POST */]}/${postData.id}`)
  }) : null);
};

/* harmony default export */ var SinglePost_Description = (Description);
// EXTERNAL MODULE: ./components/Loader/CardLoader.js
var CardLoader = __webpack_require__("uyVz");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/ListGrid/index.js
var ListGrid = __webpack_require__("hWNl");

// EXTERNAL MODULE: ./components/PostCard/index.js
var PostCard = __webpack_require__("t9+S");

// CONCATENATED MODULE: ./containers/SinglePost/RelatedPost/index.js

var RelatedPost_jsx = external_react_default.a.createElement;








const RelatedPost = props => {
  const relatedItem = props.related ? props.related : [];

  const renderRelatedPost = item => {
    const postImg = item.image ? item.image.url : '';
    const postFallbackImg = item.image ? item.image.largeUrl : '';
    const title = item.title ? item.title : '';
    const price = item.price ? item.price : '';
    return RelatedPost_jsx(link_default.a, {
      href: `${constant["k" /* SINGLE_POST_PAGE */]}/[slug]`,
      as: `${constant["k" /* SINGLE_POST_PAGE */]}/${item.slug}`
    }, RelatedPost_jsx("a", null, RelatedPost_jsx(PostCard["a" /* default */], {
      currency: Config["a" /* CURRENCY */],
      title: title,
      price: price,
      imageSrc: [postImg, postFallbackImg]
    })));
  };

  return RelatedPost_jsx(Box["a" /* default */], {
    mt: 30,
    width: 1
  }, RelatedPost_jsx(ListGrid["a" /* default */], {
    data: relatedItem,
    columnWidth: [1, 1 / 2, 1 / 3, 1 / 4],
    limit: props.limit,
    component: renderRelatedPost,
    loading: props.loading,
    placeholder: RelatedPost_jsx(CardLoader["a" /* default */], null)
  }));
};

/* harmony default export */ var SinglePost_RelatedPost = (RelatedPost);
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__("EGWi");
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// CONCATENATED MODULE: ./components/Loader/SinglePageDescriptionLoader.js

var SinglePageDescriptionLoader_jsx = external_react_default.a.createElement;



const SinglePageDescriptionLoader = props => SinglePageDescriptionLoader_jsx(external_react_content_loader_default.a, Object(esm_extends["a" /* default */])({
  height: 632,
  width: 362,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props), SinglePageDescriptionLoader_jsx("rect", {
  x: "690.23",
  y: "-59",
  rx: "4",
  ry: "4",
  width: "117",
  height: "6.4"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "673",
  y: "-53",
  rx: "3",
  ry: "3",
  width: "85",
  height: "6.4"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "498",
  y: "-54",
  rx: "3",
  ry: "3",
  width: "350",
  height: "6.4"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "506",
  y: "-41",
  rx: "3",
  ry: "3",
  width: "380",
  height: "6.4"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "610",
  y: "-49",
  rx: "3",
  ry: "3",
  width: "201",
  height: "6.4"
}), SinglePageDescriptionLoader_jsx("circle", {
  cx: "686",
  cy: "-42",
  r: "30"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "547.23",
  y: "-138.33",
  rx: "0",
  ry: "0",
  width: "751.66",
  height: "460.15"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "524.23",
  y: "7.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "504.23",
  y: "290.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "526.23",
  y: "38.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "469.23",
  y: "524.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "623.23",
  y: "523.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "305.23",
  y: "-64.33",
  rx: "0",
  ry: "0",
  width: "450",
  height: "17.94"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "380.38",
  y: "-55.47",
  rx: "0",
  ry: "0",
  width: "323.2",
  height: "16.16"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "258.23",
  y: "13.67",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "254.23",
  y: "10.67",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "212.23",
  y: "11.67",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "0.23",
  y: "4.67",
  rx: "0",
  ry: "0",
  width: "366",
  height: "20"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "0.23",
  y: "36.67",
  rx: "0",
  ry: "0",
  width: "294",
  height: "18"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "-1.04",
  y: "70.67",
  rx: "0",
  ry: "0",
  width: "92.4",
  height: "36.75"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "20.23",
  y: "86.67",
  rx: "0",
  ry: "0",
  width: "5",
  height: "1"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "590.23",
  y: "-52.33",
  rx: "0",
  ry: "0",
  width: "17",
  height: "4"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "95.23",
  y: "102.67",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "97.23",
  y: "95.67",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "531.23",
  y: "-59.33",
  rx: "0",
  ry: "0",
  width: "138",
  height: "14"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "109.23",
  y: "70.67",
  rx: "0",
  ry: "0",
  width: "94",
  height: "36"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "1.23",
  y: "127.67",
  rx: "0",
  ry: "0",
  width: "362",
  height: "79"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "-0.77",
  y: "227.67",
  rx: "0",
  ry: "0",
  width: "364",
  height: "45"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "247.23",
  y: "293.67",
  rx: "0",
  ry: "0",
  width: "118",
  height: "40"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "0.23",
  y: "377.67",
  rx: "0",
  ry: "0",
  width: "113",
  height: "29"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "128.23",
  y: "377.67",
  rx: "0",
  ry: "0",
  width: "75.26",
  height: "28"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "1.23",
  y: "420.67",
  rx: "0",
  ry: "0",
  width: "361",
  height: "20"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "1.23",
  y: "452.67",
  rx: "0",
  ry: "0",
  width: "310",
  height: "18"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "0.23",
  y: "484.67",
  rx: "0",
  ry: "0",
  width: "229",
  height: "18"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "-0.77",
  y: "513.67",
  rx: "0",
  ry: "0",
  width: "140",
  height: "15.96"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "1.23",
  y: "546.67",
  rx: "0",
  ry: "0",
  width: "77",
  height: "28"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "94.23",
  y: "546.67",
  rx: "0",
  ry: "0",
  width: "74",
  height: "28"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "187.23",
  y: "547.67",
  rx: "0",
  ry: "0",
  width: "58.24",
  height: "28.08"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "-0.77",
  y: "584.67",
  rx: "0",
  ry: "0",
  width: "364.62",
  height: "26"
}), SinglePageDescriptionLoader_jsx("circle", {
  cx: "39.43",
  cy: "324.87",
  r: "37.2"
}), SinglePageDescriptionLoader_jsx("circle", {
  cx: "610.74",
  cy: "-51.82",
  r: "24.51"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "84.23",
  y: "297.67",
  rx: "0",
  ry: "0",
  width: "90",
  height: "15"
}), SinglePageDescriptionLoader_jsx("rect", {
  x: "85.23",
  y: "326.67",
  rx: "0",
  ry: "0",
  width: "57",
  height: "15"
}));

/* harmony default export */ var Loader_SinglePageDescriptionLoader = (SinglePageDescriptionLoader);
// CONCATENATED MODULE: ./components/Loader/SliderLoader.js

var SliderLoader_jsx = external_react_default.a.createElement;



const SliderLoader = props => SliderLoader_jsx(external_react_content_loader_default.a, Object(esm_extends["a" /* default */])({
  rtl: true,
  height: 650,
  width: 760,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props), SliderLoader_jsx("rect", {
  x: "690.23",
  y: "-59",
  rx: "4",
  ry: "4",
  width: "117",
  height: "6.4"
}), SliderLoader_jsx("rect", {
  x: "673",
  y: "-53",
  rx: "3",
  ry: "3",
  width: "85",
  height: "6.4"
}), SliderLoader_jsx("rect", {
  x: "498",
  y: "-54",
  rx: "3",
  ry: "3",
  width: "350",
  height: "6.4"
}), SliderLoader_jsx("rect", {
  x: "506",
  y: "-41",
  rx: "3",
  ry: "3",
  width: "380",
  height: "6.4"
}), SliderLoader_jsx("rect", {
  x: "610",
  y: "-49",
  rx: "3",
  ry: "3",
  width: "201",
  height: "6.4"
}), SliderLoader_jsx("circle", {
  cx: "686",
  cy: "-42",
  r: "30"
}), SliderLoader_jsx("rect", {
  x: "3.23",
  y: "3.67",
  rx: "0",
  ry: "0",
  width: "751.66",
  height: "494.78"
}), SliderLoader_jsx("rect", {
  x: "4.23",
  y: "523.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SliderLoader_jsx("rect", {
  x: "159.23",
  y: "523.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SliderLoader_jsx("rect", {
  x: "314.23",
  y: "523.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SliderLoader_jsx("rect", {
  x: "469.23",
  y: "524.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}), SliderLoader_jsx("rect", {
  x: "623.23",
  y: "523.67",
  rx: "0",
  ry: "0",
  width: "132",
  height: "119"
}));

/* harmony default export */ var Loader_SliderLoader = (SliderLoader);
// CONCATENATED MODULE: ./components/Loader/index.js
var Loader_jsx = external_react_default.a.createElement;





const Loader_Loader = () => Loader_jsx(external_react_content_loader_default.a, null, Loader_jsx("rect", {
  x: "80",
  y: "40",
  rx: "3",
  ry: "3",
  width: "250",
  height: "10"
}));

/* harmony default export */ var components_Loader = (Loader_Loader);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__("KaAA");

// CONCATENATED MODULE: ./containers/SinglePost/singlePost.style.js




const Carousel = external_styled_components_default()(external_react_responsive_carousel_["Carousel"]).withConfig({
  displayName: "singlePoststyle__Carousel",
  componentId: "sc-13rjncz-0"
})([".carousel.carousel-slider .slider-wrapper ul.slider{min-height:590px;@media only screen and (max-width:1200px){min-height:470px;}@media only screen and (max-width:1023px){min-height:297px;}@media only screen and (max-width:480px){min-height:237px;}}.carousel.carousel-slider .slider-wrapper ul.slider .slide{background-color:#e2e2e2;}.carousel.carousel-slider .control-arrow{width:40px;height:60px;top:50%;margin-top:-30px;opacity:0.9;background-color:#ffffff;border-radius:3px;font-size:22px;padding:0;&.control-prev{left:10px;&:before{border-right-color:#e2e2e2;}}&.control-next{right:10px;&:before{border-left-color:#e2e2e2;}}}.carousel .thumbs-wrapper{margin:15px 0 0;.thumbs{padding:0;margin:0;.thumb{width:calc(20% - 8px);height:100px;box-sizing:border-box;padding:0;overflow:hidden;border:0;margin-right:10px;@media screen and (min-width:768px) and (max-width:1023px){width:calc(33.333% - 6px);}@media screen and (max-width:580px){width:calc(33.333% - 6px);}&.selected{border:0;padding:0;border-bottom:3px solid #30c56d;}&:last-child{margin-right:0;}}}.control-next{&.control-arrow{right:0;width:40px;height:calc(100% - 3px);top:0;margin-top:0;background-color:rgba(0,0,0,0.6);padding:0;}}.control-prev{&.control-arrow{left:0;width:40px;height:calc(100% - 3px);top:0;margin-top:0;background-color:rgba(0,0,0,0.6);padding:0;}}}"]);
const DescriptionWrapper = external_styled_components_default()('div').withConfig({
  displayName: "singlePoststyle__DescriptionWrapper",
  componentId: "sc-13rjncz-1"
})(["padding:20px 35px;"]);
const singlePost_style_InfoBoxWrapper = external_styled_components_default()('div').withConfig({
  displayName: "singlePoststyle__InfoBoxWrapper",
  componentId: "sc-13rjncz-2"
})(["display:flex;flex-direction:row;align-items:flex-start;margin-bottom:20px;", ";"], ''
/* padding: 20px 35px; */
);
const PricingSection = external_styled_components_default()('div').withConfig({
  displayName: "singlePoststyle__PricingSection",
  componentId: "sc-13rjncz-3"
})(["background-color:#f8f8f8;padding:10px 35px;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:5px;"]);
const singlePost_style_AlignCenterWrapper = external_styled_components_default()('div').withConfig({
  displayName: "singlePoststyle__AlignCenterWrapper",
  componentId: "sc-13rjncz-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;"]);
const PriceTag = external_styled_components_default()('div').withConfig({
  displayName: "singlePoststyle__PriceTag",
  componentId: "sc-13rjncz-5"
})(["padding:10px;background-color:#ffedd6;display:flex;flex-direction:row;align-items:center;justify-content:space-between;border-radius:3px;"]);
const TagName = external_styled_components_default()(Text["a" /* default */]).withConfig({
  displayName: "singlePoststyle__TagName",
  componentId: "sc-13rjncz-6"
})(["font-size:14px;font-weight:400;color:", ";"], Object(external_styled_theme_["palette"])('text', 0));
const TagBullet = external_styled_components_default()('div').withConfig({
  displayName: "singlePoststyle__TagBullet",
  componentId: "sc-13rjncz-7"
})(["width:10px;height:10px;display:flex;border-radius:10px;background-color:#f2a43e;flex-shrink:0;margin-right:10px;"]);
const GridPostsHolder = external_styled_components_default()('div').withConfig({
  displayName: "singlePoststyle__GridPostsHolder",
  componentId: "sc-13rjncz-8"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin:0 -8px;padding:0 35px;"]);
const SectionWrapper = external_styled_components_default()('div').withConfig({
  displayName: "singlePoststyle__SectionWrapper",
  componentId: "sc-13rjncz-9"
})(["padding:50px 0;"]);

// CONCATENATED MODULE: ./containers/SinglePost/index.js
var SinglePost_jsx = external_react_default.a.createElement;









const SinglePost = ({
  data,
  loading,
  error,
  isLoggedIn,
  userId,
  location,
  QUERY_VARIABLES
}) => {
  const post = data && data.post ? data.post : {};
  if (error) return SinglePost_jsx("p", null, `Error! ${error.message}`);

  const Loader = () => SinglePost_jsx(external_react_styled_flexboxgrid_["Row"], null, SinglePost_jsx(external_react_styled_flexboxgrid_["Col"], {
    sm: 8
  }, SinglePost_jsx(Loader_SliderLoader, null)), SinglePost_jsx(external_react_styled_flexboxgrid_["Col"], {
    sm: 4
  }, SinglePost_jsx(Loader_SinglePageDescriptionLoader, null)));

  const postImage = !loading && post && post.image && post.image.largeUrl !== null ? post.image.largeUrl : '';
  let postGallery = !loading && post && post.gallery ? post.gallery : [];
  return SinglePost_jsx(SectionWrapper, null, SinglePost_jsx(external_react_styled_flexboxgrid_["Grid"], null, loading ? SinglePost_jsx(Loader, null) : SinglePost_jsx(external_react_styled_flexboxgrid_["Row"], null, SinglePost_jsx(external_react_styled_flexboxgrid_["Col"], {
    sm: 7,
    md: 8,
    xs: 12,
    style: {
      paddingLeft: 15,
      paddingRight: 15,
      marginBottom: 30
    }
  }, !postGallery.length && postImage ? SinglePost_jsx("img", {
    src: postImage,
    style: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '3px'
    }
  }) : SinglePost_jsx(Carousel, {
    showIndicators: false
  }, postGallery.map((image, index) => SinglePost_jsx("div", {
    key: index,
    style: {
      height: 'auto'
    }
  }, SinglePost_jsx("img", {
    src: image.largeUrl,
    style: {
      maxWidth: '100%',
      height: '100%'
    }
  }))))), SinglePost_jsx(external_react_styled_flexboxgrid_["Col"], {
    sm: 5,
    md: 4,
    xs: 12,
    style: {
      paddingLeft: 15,
      paddingRight: 15
    }
  }, SinglePost_jsx(SinglePost_Description, {
    loading: loading,
    postData: post,
    isLoggedIn: isLoggedIn,
    userId: userId
  }))), SinglePost_jsx(external_react_styled_flexboxgrid_["Row"], {
    style: {
      margin: 0
    }
  }, SinglePost_jsx(Box["a" /* default */], {
    mt: 50,
    flexBox: true,
    justifyContent: "space-between",
    style: {
      width: '100%'
    }
  }, post.related && post.related.length ? SinglePost_jsx(Text["a" /* default */], {
    content: "Related Ads",
    as: "span",
    fontSize: 18,
    fontWeight: 600,
    color: "#333333",
    style: {
      margin: 0
    }
  }) : null), SinglePost_jsx(SinglePost_RelatedPost, {
    related: post.related,
    id: post.id,
    loading: loading,
    limit: QUERY_VARIABLES.LIMIT
  }))));
};

/* harmony default export */ var containers_SinglePost = (SinglePost);
// EXTERNAL MODULE: ./hoc/withLayout.js + 12 modules
var withLayout = __webpack_require__("5MSs");

// EXTERNAL MODULE: ./components/PageMeta/index.js
var PageMeta = __webpack_require__("lrOO");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/graphql/Post.query.js
var Post_query = __webpack_require__("upyU");

// EXTERNAL MODULE: ./helpers/apollo.js
var apollo = __webpack_require__("TWi5");

// CONCATENATED MODULE: ./pages/post/[slug].js

var _slug_jsx = external_react_default.a.createElement;








/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Object(apollo["a" /* withApollo */])(Object(withLayout["a" /* default */])(({
  isLoggedIn,
  userId,
  location
}) => {
  const {
    query: {
      slug
    }
  } = Object(router_["useRouter"])();
  let QUERY_VARIABLES = {
    lat: location && location.lat ? location.lat : null,
    lng: location && location.lng ? location.lng : null,
    LIMIT: 4,
    slug: slug
  };
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(Post_query["a" /* GET_POST */], {
    variables: QUERY_VARIABLES
  });
  if (error) return _slug_jsx("p", null, error.message);
  const title = data && data.post ? data.post.title : '';
  const content = data && data.post ? data.post.content : '';
  return _slug_jsx(external_react_default.a.Fragment, null, _slug_jsx(PageMeta["a" /* default */], {
    title: title,
    description: content
  }), _slug_jsx(containers_SinglePost, {
    data: data,
    loading: loading,
    userId: userId,
    isLoggedIn: isLoggedIn,
    error: error,
    QUERY_VARIABLES: QUERY_VARIABLES
  }), _slug_jsx(reuse_modal_["Modal"], null));
})));

/***/ }),

/***/ "VgrN":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/iconic/locked");

/***/ }),

/***/ "W1Sp":
/***/ (function(module, exports) {

module.exports = require("react-custom-share");

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

/***/ "WvYn":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABGlBMVEUAAAD///+AgICqqqqAgICSkpKAgICVlZWGhoaMjIySkpKLi4uQkJCKioqOjo6JiYmNjY2IiIiPj4+KioqKioqLi4uOjo6KioqMjIyMjIyKioqKioqLi4uNjY2MjIyLi4uNjY2Li4uLi4uMjIyKioqLi4uMjIyKioqMjIyMjIyLi4uLi4uMjIyLi4uMjIyLi4uMjIyMjIyLi4uMjIyLi4uMjIyLi4uMjIyLi4uMjIyMjIyLi4uLi4uMjIyMjIyLi4uMjIyLi4uLi4uLi4uLi4uMjIyLi4uLi4uMjIyLi4uMjIyMjIyLi4uMjIyLi4uMjIyMjIyMjIyLi4uMjIyLi4uLi4uMjIyLi4uMjIyLi4uMjIyMjIyMjIyMjIywLV48AAAAXXRSTlMAAQIDBgcIDBMUFRYXGBscHR4gIyUsLTIzRUZIS0xUVldYYWZpcHN0fH6AhoyNjo+QkpOVlpeYmZydn7S1try9wcLExtjZ2tzd3uLk5+jp6+/x8vP09fb3+Pn6/P5lH+jxAAABLklEQVQYGWXBh1qCYAAF0FtqE2hnUpm2HVm2d5laWOZKQ8T7/q/Rz/yAzoEnkTqpasNB462kxhGRadHXzCBIemLIkwTfVpsRbRUudcx/xpuwKR1GdfvsKLBUGPFTWNHJCoQ0w36LszijkAagMWhYngdkg4IGbDBgdKNAOKdtA3n6zPslWGSDtjye6THX4bik4wV1eq4nj2FZNOioY0CXIe+yAOGGrj56dF3EPskjYNGkq4caHYa8T2Ebt/TU8ExHOd4k37MTayY9L8jRZsgH/NqLLd+Z9OWQpO10qnaYWLgaMSAJfFDQZ6an5bLBIA1AmkIRc0WdYWkIr6S+WhgwogKL0mG/y6iOAtsm/xurcKltRrRV+KQHhjxKCNpp0fedRUQiVapqw0HjrZSKw/UHo9bCF1aKL4YAAAAASUVORK5CYII="

/***/ }),

/***/ "WxHd":
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

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

/***/ "bWI6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IDnS");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bKIR");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rNkn");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ax/r");
/* harmony import */ var core_static_images_headless_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Ppj3");
/* harmony import */ var core_static_images_headless_logo_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_static_images_headless_logo_svg__WEBPACK_IMPORTED_MODULE_7__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const AuthHeader = (_ref) => {
  let {
    image,
    title,
    description
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["image", "title", "description"]);

  return __jsx(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], props, image && __jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], image), title && __jsx(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, title, {
    style: {
      marginTop: 20,
      textAlign: "center",
      fontWeight: 600
    }
  })), description && __jsx(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, description, {
    style: {
      textAlign: "center",
      lineHeight: "1.5"
    }
  })));
};

AuthHeader.defaultProps = {
  mb: "50px",
  image: {
    logoSrc: core_static_images_headless_logo_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    title: "Headless Logo",
    auto: true
  },
  title: {
    content: "Welcome to Sellia"
  },
  description: {
    content: "World’s largest advertising platform. Advertising was never been so easy."
  }
};
/* harmony default export */ __webpack_exports__["a"] = (AuthHeader);

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

/***/ "dwm8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("wk2l");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/hooks/toggle/index.js

/* harmony default export */ var toggle = (initialValue => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(initialValue);
  const toggler = Object(external_react_["useCallback"])(() => setValue(value => !value));
  return [value, toggler];
});
// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/hooks/index.js

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("o9XM");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/theme/lightenDarken.js


const pad = (num, totalChars) => {
  let pad = '0';
  num = num + '';

  while (num.length < totalChars) {
    num = pad + num;
  }

  return num;
}; // Ratio is between 0 and 1


const changeColor = (color, ratio, darker) => {
  // Trim trailing/leading whitespace
  color = color.replace(/^\s*|\s*$/, ''); // Expand three-digit hex

  color = color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, '#$1$1$2$2$3$3'); // Calculate ratio

  const difference = Math.round(ratio * 256) * (darker ? -1 : 1),
        // Determine if input is RGB(A)
  rgb = color.match(new RegExp('^rgba?\\(\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '\\s*,\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '\\s*,\\s*' + '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' + '(?:\\s*,\\s*' + '(0|1|0?\\.\\d+))?' + '\\s*\\)$', 'i')),
        alpha = !!rgb && rgb[4] != null ? rgb[4] : null,
        // Convert hex to decimal
  decimal = !!rgb ? [rgb[1], rgb[2], rgb[3]] : color.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
    return parse_int_default()(arguments[1], 16) + ',' + parse_int_default()(arguments[2], 16) + ',' + parse_int_default()(arguments[3], 16);
  }).split(/,/); // Return RGB(A)

  return !!rgb ? 'rgb' + (alpha !== null ? 'a' : '') + '(' + Math[darker ? 'max' : 'min'](parse_int_default()(decimal[0], 10) + difference, darker ? 0 : 255) + ', ' + Math[darker ? 'max' : 'min'](parse_int_default()(decimal[1], 10) + difference, darker ? 0 : 255) + ', ' + Math[darker ? 'max' : 'min'](parse_int_default()(decimal[2], 10) + difference, darker ? 0 : 255) + (alpha !== null ? ', ' + alpha : '') + ')' : // Return hex
  ['#', pad(Math[darker ? 'max' : 'min'](parse_int_default()(decimal[0], 10) + difference, darker ? 0 : 255).toString(16), 2), pad(Math[darker ? 'max' : 'min'](parse_int_default()(decimal[1], 10) + difference, darker ? 0 : 255).toString(16), 2), pad(Math[darker ? 'max' : 'min'](parse_int_default()(decimal[2], 10) + difference, darker ? 0 : 255).toString(16), 2)].join('');
};

const lightenColor = (color, ratio) => {
  return changeColor(color, ratio, false);
};

const darkenColor = (color, ratio) => {
  return changeColor(color, ratio, true);
};


// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/base.js
var base = __webpack_require__("/MbW");

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Switch/switch.style.js




const SwitchStyle = external_styled_components_default.a.div.withConfig({
  displayName: "switchstyle__SwitchStyle",
  componentId: "sc-4kcvhk-0"
})(["display:inline-flex;.reusecore__field-label{color:", ";font-size:", "px;font-weight:", ";}&.label_left{label{display:flex;align-items:center;.reusecore__field-label{margin-right:", "px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.reusecore__field-label{margin-left:", "px;}}}&.label_top{label{.reusecore__field-label{display:flex;margin-bottom:", "px;}}}&.label_bottom{label{.reusecore__field-label{display:flex;margin-top:", "px;}}}input[type='checkbox']{&.switch{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;left:0;pointer-events:none;&:checked + div{width:", ";background-position:0 0;background-color:", ";> div{background-color:", ";left:calc( ", " / 2 + 3px );}}}+ div{vertical-align:middle;width:", ";height:calc( ", " / 2 );border-radius:450px;border-width:2px;border-style:solid;border-color:", ";transition-duration:0.4s;transition-property:background-color,box-shadow;cursor:pointer;box-sizing:border-box;position:relative;> div{float:left;width:calc( ", " / 2 - 8px );height:calc( ", " / 2 - 8px );border-radius:50%;pointer-events:none;top:2px;left:2px;position:absolute;background-color:", ";transition-timing-function:cubic-bezier(1,0,0,1);transition-duration:0.4s;transition-property:left,background-color;}}}&.is-material{&.label_top{label{.reusecore__field-label{margin-bottom:", "px;}}}&.label_bottom{label{.reusecore__field-label{margin-top:", "px;}}}input[type='checkbox']{&.switch{&:checked + div{width:", ";background-color:", ";> div{background-color:", ";left:calc( ", " - ", " / 2 + 1px );}}}+ div{width:", ";height:calc( ", " / 4 );border-width:0;background-color:", ";> div{width:calc( ", " / 2 );height:calc( ", " / 2 );top:calc( -", " / 8 );left:0;background-color:", ";box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}}}}", ""], Object(external_styled_system_["themeGet"])('colors.labelColor', '#767676'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), props => props.switchSize ? props.switchSize : '80px', props => props.switchColor ? props.switchColor : '#028489', Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), props => props.switchSize ? props.switchSize : '80px', props => props.switchSize ? props.switchSize : '80px', props => props.switchSize ? props.switchSize : '80px', props => props.switchColor ? props.switchColor : '#028489', props => props.switchSize ? props.switchSize : '80px', props => props.switchSize ? props.switchSize : '80px', props => props.switchColor ? props.switchColor : '#028489', Object(external_styled_system_["themeGet"])('space.3', '10'), Object(external_styled_system_["themeGet"])('space.3', '10'), props => props.switchSize ? props.switchSize : '50px', props => props.switchColor ? lightenColor(props.switchColor, 0.2) : lightenColor('#028489', 0.2), props => props.switchColor ? props.switchColor : '#028489', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', props => props.barColor ? props.barColor : '#a0a0a0', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', props => props.switchSize ? props.switchSize : '50px', Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), base["a" /* base */]); // prop types can also be added from the style functions

SwitchStyle.propTypes = {};
SwitchStyle.displayName = 'SwitchStyle';
/* harmony default export */ var switch_style = (SwitchStyle);
// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/reusecore/src/elements/Switch/index.js


var __jsx = external_react_default.a.createElement;




const Switch = (_ref) => {
  let {
    className,
    switchColor,
    isChecked,
    labelText,
    labelPosition,
    switchSize,
    isMaterial,
    barColor,
    onChange,
    onFocus,
    onBlur,
    handleOnChange
  } = _ref,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "switchColor", "isChecked", "labelText", "labelPosition", "switchSize", "isMaterial", "barColor", "onChange", "onFocus", "onBlur", "handleOnChange"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__switch']; // Add label position class

  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  }

  handleOnChange = event => {
    onChange(!isChecked);
  };

  const LabelField = labelText && __jsx("span", {
    className: "reusecore__field-label"
  }, labelText);

  const position = labelPosition || 'top';
  return __jsx(switch_style, Object(esm_extends["a" /* default */])({
    className: addAllClasses.join(' '),
    switchColor: switchColor,
    switchSize: switchSize,
    barColor: barColor
  }, props), __jsx("label", null, position === 'left' || position === 'right' || position === 'top' ? LabelField : '', __jsx("input", {
    checked: isChecked,
    onChange: handleOnChange,
    onBlur: onBlur,
    onFocus: onFocus,
    className: "switch",
    type: "checkbox",
    value: isChecked
  }), __jsx("div", null, __jsx("div", null)), position === 'bottom' && LabelField));
};

Switch.defaultProps = {
  isChecked: false,
  labelPosition: 'top',
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {}
};
/* harmony default export */ var elements_Switch = __webpack_exports__["a"] = (Switch);

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

/***/ "hWNl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bKIR");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YhXy");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gTHO");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ax/r");

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, showButton ? __jsx(_Box__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], loadMoreWrapperStyle, loadMoreComponent ? loadMoreComponent : __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    variant: buttonVariant,
    title: buttonText || 'Load More',
    isLoading: isLoading,
    loader: __jsx(_Loader__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      loaderColor: loaderColor
    }),
    onClick: handleLoadMore
  }, loadMoreButtonStyle))) : null);
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Box__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, componentWrapperStyle, {
    className: className
  }), data.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data.map((item, index) => __jsx(_Box__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    width: columnWidth,
    key: index
  }, componentContainerStyle, {
    className: "singleGridBox"
  }), component(item, index)))) : null, loading && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, limits.map(index => __jsx(_Box__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    width: columnWidth,
    key: index
  }, componentContainerStyle), placeholder ? placeholder : __jsx(_Text__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    content: "Loading ..."
  }))))), postCount < totalPost && __jsx(LoadMore, {
    showButton: showButton,
    handleLoadMore: handleLoadMore,
    isLoading: isLoading,
    buttonText: buttonText,
    buttonVariant: buttonVariant,
    loaderColor: loaderColor,
    loadMoreComponent: loadMoreComponent,
    loadMoreButtonStyle: loadMoreButtonStyle,
    loadMoreWrapperStyle: loadMoreWrapperStyle
  }), paginationComponent && __jsx(_Box__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], paginationWrapperStyle, paginationComponent));
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
/* harmony default export */ __webpack_exports__["a"] = (ListGrid);

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "hhSj":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialPinterest");

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

/***/ "o9XM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

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

/***/ "t9+S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wk2l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Cgap");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rNkn");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ax/r");
/* harmony import */ var core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Bt1m");
/* harmony import */ var core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bYH+");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_7__);


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
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["imageSrc", "title", "price", "currency", "imageStyle", "titleStyle", "priceStyle"]);

  return __jsx(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], props, imageSrc && __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
    src: imageSrc,
    alt: title,
    style: imageStyle,
    loader: __jsx("img", {
      src: core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_6___default.a
    }),
    unloader: __jsx("img", {
      src: core_static_images_thumb_grid_placeholder_svg__WEBPACK_IMPORTED_MODULE_6___default.a
    })
  }), title && __jsx(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    content: title
  }, titleStyle, {
    mb: "1",
    mt: 15
  })), price && currency && __jsx(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    content: `${currency} ${price}`
  }, priceStyle, {
    mb: "0"
  })));
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
/* harmony default export */ __webpack_exports__["a"] = (PostCard);

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

/***/ "upyU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_POST_FOR_EDIT; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getPost($slug: String, $lat: Float, $lng: Float) {
    post(slug: $slug, lat: $lat, lng: $lng) {
      id
      title
      content
      price
      authorId
      slug
      contactNumber
      condition
      isNegotiable
      createdAt
      distance
      author {
        name
        username
        image {
          url
          largeUrl
        }
      }
      image {
        url
        largeUrl
      }
      gallery {
        url
        largeUrl
      }
      favouritedBy
      formattedLocation {
        lat
        lng
        formattedAddress
      }
      categories {
        id
        slug
        name
      }
      related(limit: 4) {
        id
        title
        slug
        price
        image {
          url
          largeUrl
        }
      }
    }
  }
`;
const GET_POST_FOR_EDIT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      price
      slug
      status
      condition
      isNegotiable
      authorId
      contactNumber
      image {
        url
        largeUrl
      }
      gallery {
        url
        largeUrl
      }
      formattedLocation {
        lat
        lng
        formattedAddress
      }
      categories {
        id
        slug
        name
        value
        label
      }
    }
  }
`;

/***/ }),

/***/ "uyVz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pneb");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const CardLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  rtl: true,
  height: 260,
  width: 276,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props), __jsx("rect", {
  x: "561.23",
  y: "-60",
  rx: "4",
  ry: "4",
  width: "117",
  height: "6.4"
}), __jsx("rect", {
  x: "588",
  y: "-55",
  rx: "3",
  ry: "3",
  width: "85",
  height: "6.4"
}), __jsx("rect", {
  x: "0.03",
  y: "201.77",
  rx: "3",
  ry: "3",
  width: "276.5",
  height: "16.45"
}), __jsx("rect", {
  x: "1",
  y: "228.54",
  rx: "3",
  ry: "3",
  width: "163.4",
  height: "13.76"
}), __jsx("rect", {
  x: "500",
  y: "-54.48",
  rx: "3",
  ry: "3",
  width: "132.66",
  height: "14.85"
}), __jsx("circle", {
  cx: "600",
  cy: "-51",
  r: "30"
}), __jsx("rect", {
  x: "0.23",
  y: "-0.33",
  rx: "0",
  ry: "0",
  width: "276",
  height: "191.25"
}), __jsx("rect", {
  x: "173.23",
  y: "68.67",
  rx: "0",
  ry: "0",
  width: "1",
  height: "7"
}));

/* harmony default export */ __webpack_exports__["a"] = (CardLoader);

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

/***/ "vFPT":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/iconic/phone");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

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