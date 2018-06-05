/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./development/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./development/Duck1.js":
/*!******************************!*\
  !*** ./development/Duck1.js ***!
  \******************************/
/*! exports provided: printSomething */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printSomething\", function() { return printSomething; });\n\r\nfunction printSomething(){\r\n\talert(\"Duck 1 executed\");\r\n}\n\n//# sourceURL=webpack:///./development/Duck1.js?");

/***/ }),

/***/ "./development/Duck2.js":
/*!******************************!*\
  !*** ./development/Duck2.js ***!
  \******************************/
/*! exports provided: printSomething */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printSomething\", function() { return printSomething; });\n\r\nfunction printSomething(){\r\n\talert(\"Duck 2 executed\");\r\n}\n\n//# sourceURL=webpack:///./development/Duck2.js?");

/***/ }),

/***/ "./development/Duck3.js":
/*!******************************!*\
  !*** ./development/Duck3.js ***!
  \******************************/
/*! exports provided: printSomething */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printSomething\", function() { return printSomething; });\n\r\nfunction printSomething(){\r\n\talert(\"Duck 3 executed\");\r\n}\n\n//# sourceURL=webpack:///./development/Duck3.js?");

/***/ }),

/***/ "./development/main.js":
/*!*****************************!*\
  !*** ./development/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Duck1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Duck1.js */ \"./development/Duck1.js\");\n/* harmony import */ var _Duck2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duck2.js */ \"./development/Duck2.js\");\n/* harmony import */ var _Duck3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Duck3.js */ \"./development/Duck3.js\");\n\r\n\r\n\r\n\r\n_Duck1_js__WEBPACK_IMPORTED_MODULE_0__[\"printSomething\"]();\r\n_Duck2_js__WEBPACK_IMPORTED_MODULE_1__[\"printSomething\"]();\r\n_Duck3_js__WEBPACK_IMPORTED_MODULE_2__[\"printSomething\"]();\n\n//# sourceURL=webpack:///./development/main.js?");

/***/ })

/******/ });