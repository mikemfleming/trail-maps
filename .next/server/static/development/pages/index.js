module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [[39.40129, -105.16704], [39.34047, -105.33928], [39.31752, -105.45923], [39.40688, -105.74722], [39.46624, -105.90594], [39.51566, -105.93486], [39.53905, -106.04060], [39.49538, -106.13492], [39.25098, -106.42387], [39.09610, -106.36725], [39.03737, -106.39609], [38.92422, -106.46622], [38.82954, -106.41554], [38.69175, -106.41573], [38.55320, -106.29416], [38.44246, -106.25827], [38.28068, -106.43349], [38.23933, -106.55878], [38.12980, -106.70033], [37.97579, -106.88257], [37.95766, -107.01877], [37.91457, -107.28790], [37.85671, -107.34581], [37.84935, -107.47388], [37.74584, -107.55498], [37.72591, -107.57681], [37.74024, -107.70810], [37.71508, -107.90474], [37.60534, -108.00638], [37.41658, -107.97279], [37.33119, -107.90295]].map(function (t) {
  return {
    lat: t[0],
    lng: t[1]
  };
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/miek/Documents/ct-maps/pages/index.js";





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    MAPS_KEY = _getConfig.publicRuntimeConfig.MAPS_KEY;

console.log(next_config__WEBPACK_IMPORTED_MODULE_3___default()());
console.log("maps key ".concat(MAPS_KEY));

var MyMapComponent = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(MAPS_KEY),
  loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }),
  containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '100vh',
      width: '100vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }),
  mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
    defaultZoom: 8,
    defaultCenter: {
      lat: 38.45,
      lng: -106.6
    },
    defaultMapTypeId: "satellite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_4___default.a.map(function (_ref) {
    var lat = _ref.lat,
        lng = _ref.lng;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      key: "".concat(lat, ",").concat(lng),
      clickable: true,
      position: {
        lat: lat,
        lng: lng
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }));
});

function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_4___default.a.map(function (_ref2, idx) {
    var lat = _ref2.lat,
        lng = _ref2.lng;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return alert("".concat(lat, ",").concat(lng));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, lat, ",", lng);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyMapComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miek/Documents/ct-maps/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map