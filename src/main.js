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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Extension__ = __webpack_require__(2);


var extention = new __WEBPACK_IMPORTED_MODULE_0__modules_Extension__["a" /* default */]();
extention.execute();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhpInfo__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhpCode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FaviconIcon__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchBar__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var _class = function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: 'execute',
        value: function execute() {
            new __WEBPACK_IMPORTED_MODULE_3__SearchBar__["a" /* default */]().focusOnSearchBarOnHomePage();
            new __WEBPACK_IMPORTED_MODULE_2__FaviconIcon__["a" /* default */]().replaceWithCustomIcon();
            new __WEBPACK_IMPORTED_MODULE_1__PhpCode__["a" /* default */]().beautifyPhpCodeExamples();
            new __WEBPACK_IMPORTED_MODULE_0__PhpInfo__["a" /* default */]().animatePhpVersionAppearing();
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    faviconSrc: 'https://raw.githubusercontent.com/SerhiiCho/php_revival/master/src/images/icon-48.png',
    selectors: {
        codeExamples: '.example-contents .phpcode code span span',
        phpVersionInfo: '#layout-content .refnamediv .verinfo'
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.phpVersion = document.querySelector(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].selectors.phpVersionInfo);
    }

    _createClass(_class, [{
        key: 'animatePhpVersionAppearing',
        value: function animatePhpVersionAppearing() {
            if (!this.phpVersion) return this;

            this.phpVersion.classList.add('verinfo--show');

            return this;
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.codeAreas = document.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].selectors.codeExamples);
    }

    _createClass(_class, [{
        key: 'beautifyPhpCodeExamples',
        value: function beautifyPhpCodeExamples() {
            if (!this.codeAreas) return this;

            this.codeAreas.forEach(function (area) {
                var oldHtml = area.innerHTML;
                var newHtml = oldHtml.replace('&lt;?php<br><br>', '&lt;?php<br>').replace('&lt;?php<br>', '&lt;?php<br><br>').replace(/([;]+)<br>([a-z\/])/, ';<br><br>$2').replace(/function\(/, 'function (');

                area.innerHTML = newHtml;
            });

            return this;
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.link = document.createElement('link');
    }

    _createClass(_class, [{
        key: 'replaceWithCustomIcon',
        value: function replaceWithCustomIcon() {
            if (!this.link) return this;

            link.rel = 'shortcut icon';
            link.href = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].faviconSrc;

            document.head.appendChild(link);

            return this;
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.searchBar = document.querySelector('.search-query.tt-query');
    }

    _createClass(_class, [{
        key: 'focusOnSearchBarOnHomePage',
        value: function focusOnSearchBarOnHomePage() {
            if (!this.searchBar || window.location.pathname !== '/') return this;

            this.searchBar.focus();

            return this;
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ })
/******/ ]);