module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: [BABEL] D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\pages\\index.js: .value is not a valid Plugin property\n    at D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\config\\validation\\plugins.js:52:56\n    at Array.forEach (<anonymous>)\n    at validatePluginObject (D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\config\\validation\\plugins.js:50:20)\n    at D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\config\\full.js:206:53\n    at cachedFunction (D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\config\\caching.js:40:17)\n    at loadPluginDescriptor (D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\config\\full.js:198:10)\n    at D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\config\\full.js:54:16\n    at Array.map (<anonymous>)\n    at recurseDescriptors (D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\config\\full.js:53:36)\n    at loadFullConfig (D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\config\\full.js:103:6)\n    at D:\\workspace\\node\\testexample\\ex9_nextjs\\ex1_basic\\node_modules\\@babel\\core\\lib\\transform.js:26:33\n    at process._tickCallback (internal/process/next_tick.js:112:11)");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map