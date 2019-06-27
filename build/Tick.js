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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("React");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tick = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tick = exports.Tick = function Tick(_ref) {
  var size = _ref.size;
  return _react2.default.createElement(
    'div',
    { style: { width: size, height: size, margin: 'auto' } },
    _react2.default.createElement(
      'style',
      { jsx: true },
      '\n          .circular-chart {\n          display: block;\n          margin: 10px auto;\n          max-width: 80%;\n          max-height: 250px;\n        }\n\n          .circle {\n          stroke: #c1cd23;\n          fill: none;\n          stroke-width: 1.8;\n          stroke-linecap: round;\n          animation: progress 1s ease-out forwards;\n          // transform-origin: center;\n        }\n\n          @keyframes progress {\n          0% {\n            stroke-dasharray: 0, 100;\n        }\n        }\n          .tick {\n          fill: none;\n          stroke: #c1cd23;\n          stroke-width: 1.8px;\n          stroke-linecap: round;\n\n          /* Stroke-dasharray property */\n          stroke-dasharray: 50px;\n          stroke-dashoffset: 50px;\n          animation: move 1s ease-out forwards;\n          -webkit-animation-delay: 0.8s;\n          -moz-animation-delay: 0.8s;\n          -o-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n        }\n          @keyframes move {\n          100% {\n            stroke-dashoffset: 0;\n        }\n        }\n      '
    ),
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 36 36', className: 'circular-chart' },
      _react2.default.createElement('path', {
        className: 'circle',
        strokeDasharray: '92, 100',
        d: 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831',
        transform: 'rotate(75, 18, 18)'
      }),
      _react2.default.createElement('path', { className: 'tick', id: 'svg_2', d: 'm80.5,196.4375l60.5,60.5625l111,-112', transform: 'translate(4, -5)' }),
      _react2.default.createElement('path', {
        className: 'tick',
        id: 'svg_3',
        d: 'm3.063615,19.054611l10.56037,10.568181l17.248714,-17.373705',
        transform: 'translate(4, -5)'
      })
    )
  );
};

/***/ })
/******/ ]);