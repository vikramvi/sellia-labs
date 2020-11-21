module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ _app_CustomApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/next/app.js
var app = __webpack_require__("Khd+");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@headless/core/static/global.style.js

const GlobalStyles = external_styled_components_["createGlobalStyle"]`

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  padding-top: 76px;
  font-family: 'Lato', sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
}

h1,
h2,
h3,
h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}

.contactModal {
  /* border: 1px solid red; */
  padding: 0;
}

.outlineButton {
  transition: all 0.3s ease;
}

.outlineButton i {
  transition: all 0.3s ease;
}

.outlineButton:hover {
  border-color: #30c56d !important;
}

.outlineButton:hover i {
  color: #30c56d !important;
}


`;
// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__("lzCH");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/@redq/reuse-modal/lib/index.css
var lib = __webpack_require__("2p10");

// EXTERNAL MODULE: /Users/bhavikshah/Work/headless-graphql/node_modules/rc-slider/assets/index.css
var assets = __webpack_require__("iVUM");

// CONCATENATED MODULE: ./theme/colors.js
const colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  textColor: '#484848',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#30C56D',
  // 8
  primaryHover: '#006b70',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  fontColor: '#333333'
};
/* harmony default export */ var theme_colors = (colors);
// CONCATENATED MODULE: ./theme/index.js

const theme = {
  breakpoints: ['32em', '48em', '64em'],
  space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: theme_colors,
  colorStyles: {
    primary: {
      color: theme_colors.primary,
      borderColor: theme_colors.primary,
      '&:hover': {
        color: theme_colors.primaryHover,
        borderColor: theme_colors.primaryHover
      }
    },
    secondary: {
      color: theme_colors.secondary,
      borderColor: theme_colors.secondary,
      '&:hover': {
        color: theme_colors.primaryHover,
        borderColor: theme_colors.primaryHover
      }
    },
    warning: {
      color: theme_colors.yellow,
      borderColor: theme_colors.yellow,
      '&:hover': {
        color: theme_colors.yellowHover,
        borderColor: theme_colors.yellowHover
      }
    },
    error: {
      color: theme_colors.secondaryHover,
      borderColor: theme_colors.secondaryHover,
      '&:hover': {
        color: theme_colors.secondary,
        borderColor: theme_colors.secondary
      }
    },
    primaryWithBg: {
      color: theme_colors.white,
      backgroundColor: theme_colors.primary,
      borderColor: theme_colors.primary,
      '&:hover': {
        backgroundColor: theme_colors.primaryHover,
        borderColor: theme_colors.primaryHover
      }
    },
    secondaryWithBg: {
      color: theme_colors.white,
      backgroundColor: theme_colors.secondary,
      borderColor: theme_colors.secondary,
      '&:hover': {
        backgroundColor: theme_colors.secondaryHover,
        borderColor: theme_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: theme_colors.white,
      backgroundColor: theme_colors.yellow,
      borderColor: theme_colors.yellow,
      '&:hover': {
        backgroundColor: theme_colors.yellowHover,
        borderColor: theme_colors.yellowHover
      }
    },
    errorWithBg: {
      color: theme_colors.white,
      backgroundColor: theme_colors.secondaryHover,
      borderColor: theme_colors.secondaryHover,
      '&:hover': {
        backgroundColor: theme_colors.secondary,
        borderColor: theme_colors.secondary
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: theme_colors.primary,
      '&:hover': {
        color: theme_colors.primaryHover
      },
      backgroundColor: theme_colors.transparent,
      textDecoration: 'underline',
      height: 'auto',
      padding: 0
    },
    linkButton: {
      border: 0,
      color: theme_colors.fontColor,
      '&:hover': {
        color: theme_colors.primaryHover
      },
      backgroundColor: theme_colors.transparent,
      textDecoration: 'none',
      padding: '5px 0px'
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: theme_colors.transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  }
};
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;








class _app_CustomApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(external_styled_components_["ThemeProvider"], {
      theme: theme
    }, __jsx(external_react_default.a.Fragment, null, __jsx(GlobalStyles, null), __jsx(Component, pageProps)));
  }

}

/***/ }),

/***/ "2p10":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HaU7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Khd+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HaU7")


/***/ }),

/***/ "Y3ZS":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iVUM":
/***/ (function(module, exports) {



/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lzCH":
/***/ (function(module, exports) {



/***/ })

/******/ });