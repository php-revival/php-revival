/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Adders/CopyButtonAdder.ts":
/*!******************************************!*\
  !*** ./src/ts/Adders/CopyButtonAdder.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var copyIcon_1 = __importDefault(__webpack_require__(/*! @/templates/icons/copyIcon */ "./src/ts/templates/icons/copyIcon.ts"));
var CodeCopier_1 = __importDefault(__webpack_require__(/*! @/modules/CodeCopier */ "./src/ts/modules/CodeCopier.ts"));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var SHOW_TOOLTIP_CLASS = 'php-revival-copy-icon__tooltip--show';
var REMOVE_TOOLTIP_AFTER = 1000;
var CopyButtonAdder = /*#__PURE__*/function () {
  function CopyButtonAdder() {
    _classCallCheck(this, CopyButtonAdder);
  }
  _createClass(CopyButtonAdder, [{
    key: "add",
    value: function add() {
      var targetsList = document.querySelectorAll(conf_1["default"].selectors.targetForCodeExamples);
      var targets = Array.from(targetsList);
      if (!targets.length) {
        return;
      }
      for (var _i = 0, _targets = targets; _i < _targets.length; _i++) {
        var target = _targets[_i];
        var icon = "<div title=\"Copy to a clipboard\">".concat(copyIcon_1["default"], "</div>");
        target.insertAdjacentHTML('afterbegin', icon);
      }
      this.listenForButtonClick(targets);
    }
  }, {
    key: "listenForButtonClick",
    value: function listenForButtonClick(targets) {
      var _this = this;
      var _iterator = _createForOfIteratorHelper(targets),
        _step;
      try {
        var _loop = function _loop() {
          var target = _step.value;
          var copyIcon = target.querySelector(conf_1["default"].selectors.copyCodeIcons);
          if (!copyIcon) {
            return 1; // continue
          }
          copyIcon.addEventListener('click', function () {
            return _this.copyCode(target);
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          if (_loop()) continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "copyCode",
    value: function copyCode(target) {
      var _this2 = this;
      new CodeCopier_1["default"](target).copy().then(function () {
        return _this2.showTooltip(target, 'Copied!', true);
      })["catch"](function (err) {
        _this2.showTooltip(target, 'Error!', false);
        console.error('[PHP Revival]: Copy failed', err);
      });
    }
  }, {
    key: "showTooltip",
    value: function showTooltip(target, text, isSuccess) {
      var tooltip = this.createTooltipElement(text, isSuccess);
      target.appendChild(tooltip);
      this.displayTooltipElement(tooltip);
      this.removeTooltipAfterDelay(tooltip);
    }
  }, {
    key: "displayTooltipElement",
    value: function displayTooltipElement(tooltip) {
      setTimeout(function () {
        return tooltip.classList.add(SHOW_TOOLTIP_CLASS);
      }, 100);
    }
  }, {
    key: "removeTooltipAfterDelay",
    value: function removeTooltipAfterDelay(tooltip) {
      setTimeout(function () {
        tooltip.classList.remove(SHOW_TOOLTIP_CLASS);
        setTimeout(function () {
          return tooltip.remove();
        }, 300);
      }, REMOVE_TOOLTIP_AFTER);
    }
  }, {
    key: "createTooltipElement",
    value: function createTooltipElement(text, isSuccess) {
      var tooltip = document.createElement('div');
      tooltip.textContent = text;
      var extraClass = isSuccess ? 'php-revival-copy-icon__tooltip--green' : 'php-revival-copy-icon__tooltip--red';
      tooltip.classList.add(extraClass);
      tooltip.classList.add('php-revival-copy-icon__tooltip');
      document.body.appendChild(tooltip);
      return tooltip;
    }
  }]);
  return CopyButtonAdder;
}();
exports["default"] = CopyButtonAdder;

/***/ }),

/***/ "./src/ts/Adders/HomeLinksAdder.ts":
/*!*****************************************!*\
  !*** ./src/ts/Adders/HomeLinksAdder.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var homeSidebarLinkTemplate_1 = __importDefault(__webpack_require__(/*! @/templates/homeSidebarLinkTemplate */ "./src/ts/templates/homeSidebarLinkTemplate.ts"));
var HomeLinksAdder = /*#__PURE__*/function () {
  function HomeLinksAdder() {
    _classCallCheck(this, HomeLinksAdder);
  }
  _createClass(HomeLinksAdder, [{
    key: "add",
    value: function add() {
      var target = document.querySelector(conf_1["default"].selectors.home.targetForHomeLinks);
      if (window.location.pathname !== '/' || !target) {
        return;
      }
      var div = document.createElement('div');
      var _iterator = _createForOfIteratorHelper(conf_1["default"].homeLinks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var link = _step.value;
          div.appendChild((0, homeSidebarLinkTemplate_1["default"])(link));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      target.insertAdjacentElement('afterend', div);
    }
  }]);
  return HomeLinksAdder;
}();
exports["default"] = HomeLinksAdder;

/***/ }),

/***/ "./src/ts/Adders/PlayButtonAdder.ts":
/*!******************************************!*\
  !*** ./src/ts/Adders/PlayButtonAdder.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var playIcon_1 = __importDefault(__webpack_require__(/*! @/templates/icons/playIcon */ "./src/ts/templates/icons/playIcon.ts"));
var CodeCopier_1 = __importDefault(__webpack_require__(/*! @/modules/CodeCopier */ "./src/ts/modules/CodeCopier.ts"));
var convertPHPVersionToNumeric_1 = __importDefault(__webpack_require__(/*! @/modules/convertPHPVersionToNumeric */ "./src/ts/modules/convertPHPVersionToNumeric.ts"));
var MAX_URL_LENGTH = 2040;
var PlayButtonAdder = /*#__PURE__*/function () {
  function PlayButtonAdder() {
    _classCallCheck(this, PlayButtonAdder);
  }
  _createClass(PlayButtonAdder, [{
    key: "add",
    value: function add() {
      var targetsList = document.querySelectorAll(conf_1["default"].selectors.targetForCodeExamples);
      var targets = Array.from(targetsList);
      if (!targets.length) {
        return;
      }
      for (var _i = 0, _targets = targets; _i < _targets.length; _i++) {
        var target = _targets[_i];
        var icon = "<div title=\"Evaluate in Sandbox\">".concat(playIcon_1["default"], "</div>");
        target.insertAdjacentHTML('afterbegin', icon);
      }
      this.listenForButtonClick(targets);
    }
  }, {
    key: "listenForButtonClick",
    value: function listenForButtonClick(targets) {
      var _this = this;
      var _iterator = _createForOfIteratorHelper(targets),
        _step;
      try {
        var _loop = function _loop() {
          var target = _step.value;
          var playIcon = target.querySelector(conf_1["default"].selectors.playCodeIcons);
          if (!playIcon) {
            return 1; // continue
          }
          playIcon.addEventListener('click', function () {
            return _this.redirectToSandbox(target);
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          if (_loop()) continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "redirectToSandbox",
    value: function redirectToSandbox(target) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var code, url, phpVersion;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.copyCode(target);
            case 2:
              code = _context.sent;
              if (code) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              if (this.missingOpeningTag(code)) {
                code = this.prependPHPOpeningTag(code);
              }
              url = "".concat(conf_1["default"].sandboxURL, "?c=").concat(encodeURIComponent(code));
              if (!this.isURLTooLong(url)) {
                _context.next = 10;
                break;
              }
              window.open("".concat(conf_1["default"].sandboxURL, "?c=[paste your code here]"), '_blank');
              return _context.abrupt("return");
            case 10:
              phpVersion = this.getPHPVersion(target);
              if (!phpVersion) {
                _context.next = 14;
                break;
              }
              window.open("".concat(url, "&v=").concat(phpVersion), '_blank');
              return _context.abrupt("return");
            case 14:
              window.open(url, '_blank');
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "missingOpeningTag",
    value: function missingOpeningTag(code) {
      return !code.startsWith('<?php');
    }
  }, {
    key: "getPHPVersion",
    value: function getPHPVersion(target) {
      var parent = target.parentElement;
      if (!parent) {
        return null;
      }
      var labelElem = parent.querySelector('.php8-compare__label');
      if (!labelElem) {
        return null;
      }
      var version = labelElem.textContent;
      if (!version) {
        return null;
      }
      return (0, convertPHPVersionToNumeric_1["default"])(version);
    }
  }, {
    key: "prependPHPOpeningTag",
    value: function prependPHPOpeningTag(code) {
      return "<?php\n".concat(code);
    }
  }, {
    key: "isURLTooLong",
    value: function isURLTooLong(url) {
      return url.length > MAX_URL_LENGTH;
    }
  }, {
    key: "copyCode",
    value: function copyCode(target) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return new CodeCopier_1["default"](target).copy();
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.error('[PHP Revival]: Coping failed', _context2.t0);
              return _context2.abrupt("return", null);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 6]]);
      }));
    }
  }]);
  return PlayButtonAdder;
}();
exports["default"] = PlayButtonAdder;

/***/ }),

/***/ "./src/ts/Adders/RecommendedVideoAdder.ts":
/*!************************************************!*\
  !*** ./src/ts/Adders/RecommendedVideoAdder.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var recommendedVideosTemplate_1 = __importDefault(__webpack_require__(/*! @/templates/recommendedVideosTemplate */ "./src/ts/templates/recommendedVideosTemplate.ts"));
var recommendedVideos_1 = __importDefault(__webpack_require__(/*! @/modules/recommendedVideos */ "./src/ts/modules/recommendedVideos.ts"));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var arrShuffle_1 = __importDefault(__webpack_require__(/*! @/modules/arrShuffle */ "./src/ts/modules/arrShuffle.ts"));
var RecommendedVideoAdder = /*#__PURE__*/function () {
  function RecommendedVideoAdder() {
    _classCallCheck(this, RecommendedVideoAdder);
    this.restOfTheCards = [];
  }
  _createClass(RecommendedVideoAdder, [{
    key: "add",
    value: function add() {
      var _this = this;
      var target = document.querySelector(conf_1["default"].selectors.home.targetForRandVideos);
      if (!target || window.location.pathname !== '/') {
        return;
      }
      var cards = (0, arrShuffle_1["default"])(recommendedVideos_1["default"]);
      var takenCards = this.getOnlySomeCards(cards, 7);
      this.restOfTheCards = this.excludeCardsFromTheRest(cards, takenCards);
      this.insertCardsIntoDOM('afterend', takenCards, target, true);
      setTimeout(function () {
        _this.insertMoreVideosAfterClick();
        var container = document.querySelector('.revival-recommended-video-container');
        if (container) {
          container.style.opacity = '1';
        }
      }, 500);
    }
  }, {
    key: "insertMoreVideosAfterClick",
    value: function insertMoreVideosAfterClick() {
      var _this2 = this;
      var button = document.getElementById('revival-show-more-recommended');
      button.addEventListener('click', function () {
        var takenCards = _this2.getOnlySomeCards((0, arrShuffle_1["default"])(_this2.restOfTheCards), 12);
        _this2.restOfTheCards = _this2.excludeCardsFromTheRest(_this2.restOfTheCards, takenCards);
        _this2.insertCardsIntoDOM('beforebegin', takenCards, button, false);
        if (_this2.restOfTheCards.length === 0) {
          button.remove();
        }
      });
    }
  }, {
    key: "insertCardsIntoDOM",
    value: function insertCardsIntoDOM(where, cards, elem, wrap) {
      elem.insertAdjacentHTML(where, (0, recommendedVideosTemplate_1["default"])(cards, wrap));
    }
  }, {
    key: "getOnlySomeCards",
    value: function getOnlySomeCards(cards, numberToGet) {
      return cards.slice(0, numberToGet);
    }
  }, {
    key: "excludeCardsFromTheRest",
    value: function excludeCardsFromTheRest(cards, excludeCards) {
      return cards.filter(function (card) {
        return !excludeCards.find(function (excludeCard) {
          return excludeCard.title === card.title;
        });
      });
    }
  }]);
  return RecommendedVideoAdder;
}();
exports["default"] = RecommendedVideoAdder;

/***/ }),

/***/ "./src/ts/Adders/SearchIconAdder.ts":
/*!******************************************!*\
  !*** ./src/ts/Adders/SearchIconAdder.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var searchIcon_1 = __importDefault(__webpack_require__(/*! @/templates/icons/searchIcon */ "./src/ts/templates/icons/searchIcon.ts"));
var SearchIconAdder = /*#__PURE__*/function () {
  function SearchIconAdder() {
    _classCallCheck(this, SearchIconAdder);
  }
  _createClass(SearchIconAdder, [{
    key: "add",
    value: function add() {
      var target = document.querySelector(conf_1["default"].selectors.targetForSearchIcon);
      if (!target) {
        console.warn("[PHP Revival]: Could not find target for search icon: ".concat(conf_1["default"].selectors.targetForSearchIcon));
        return;
      }
      target.insertAdjacentHTML('afterbegin', searchIcon_1["default"]);
    }
  }]);
  return SearchIconAdder;
}();
exports["default"] = SearchIconAdder;

/***/ }),

/***/ "./src/ts/Extension.ts":
/*!*****************************!*\
  !*** ./src/ts/Extension.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var default_1 = /*#__PURE__*/function () {
  function default_1() {
    _classCallCheck(this, default_1);
  }
  _createClass(default_1, [{
    key: "applyAdders",
    value: function applyAdders(adders) {
      adders.forEach(function (adder) {
        return adder.add();
      });
      return this;
    }
  }, {
    key: "applyModifiers",
    value: function applyModifiers(modifiers) {
      modifiers.forEach(function (modifier) {
        return modifier.modify();
      });
      return this;
    }
  }]);
  return default_1;
}();
exports["default"] = default_1;

/***/ }),

/***/ "./src/ts/Modifiers/CodeSampleModifier.ts":
/*!************************************************!*\
  !*** ./src/ts/Modifiers/CodeSampleModifier.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var CodeSampleModifier = /*#__PURE__*/function () {
  function CodeSampleModifier() {
    _classCallCheck(this, CodeSampleModifier);
    this.codeAreas = document.querySelectorAll(conf_1["default"].selectors.codeExamples);
    this.staticClasses = document.querySelectorAll(conf_1["default"].selectors.docs.classMethods);
  }
  _createClass(CodeSampleModifier, [{
    key: "modify",
    value: function modify() {
      if (!this.codeAreas || !this.staticClasses) {
        return;
      }
      this.beautifyPhpCodeExamples();
      this.addColorToStaticClassCallInClassExamples();
    }
  }, {
    key: "beautifyPhpCodeExamples",
    value: function beautifyPhpCodeExamples() {
      this.codeAreas.forEach(function (area) {
        var oldHtml = area.innerHTML;
        var newHtml = oldHtml.replace('&lt;?PHP', '&lt;?php').replace(/\}<br>(\w|\$)/, '}<br><br>$1').replace(/([;]+)<br>([a-z\/])/, ';<br><br>$2').replace(/function\(/, 'function (').replace(/([;}])<br>([&nbsp;\s]+ (if|while|foreach|for|which))/, '$1<br><br>$2').replace(/(if|while|foreach|for|which)\(/, '$1 (');
        area.innerHTML = newHtml;
      });
    }
  }, {
    key: "addColorToStaticClassCallInClassExamples",
    value: function addColorToStaticClassCallInClassExamples() {
      this.staticClasses.forEach(function (el) {
        var items = el.innerText.split('::');
        if (items.length === 2) {
          el.innerHTML = "<span class=\"code-orange\">".concat(items[0], "</span>::").concat(items[1]);
        }
      });
    }
  }]);
  return CodeSampleModifier;
}();
exports["default"] = CodeSampleModifier;

/***/ }),

/***/ "./src/ts/Modifiers/ContributeModifier.ts":
/*!************************************************!*\
  !*** ./src/ts/Modifiers/ContributeModifier.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var closeIcon_1 = __importDefault(__webpack_require__(/*! @/templates/icons/closeIcon */ "./src/ts/templates/icons/closeIcon.ts"));
var SHOW_MODAL_CLASS = 'contribute--show';
var ContributeModifier = /*#__PURE__*/function () {
  function ContributeModifier() {
    _classCallCheck(this, ContributeModifier);
    this.modal = document.querySelector(conf_1["default"].selectors.docs.contributeModal);
    this.linksSection = document.querySelector(conf_1["default"].selectors.docs.contributeModalLinks);
  }
  _createClass(ContributeModifier, [{
    key: "modify",
    value: function modify() {
      if (!this.modal || !this.linksSection) {
        return;
      }
      this.addOpenModalButton();
      this.removeDotsFromLinks();
      this.addDescription();
      this.insertCloseIconIntoModal();
    }
  }, {
    key: "addDescription",
    value: function addDescription() {
      this.linksSection.insertAdjacentHTML('afterbegin', '<p>You can help PHP community by submitting a pull request or report a bug</p>');
    }
  }, {
    key: "removeDotsFromLinks",
    value: function removeDotsFromLinks() {
      this.linksSection.innerHTML = this.linksSection.innerHTML.replace(/•/g, '');
    }
  }, {
    key: "addOpenModalButton",
    value: function addOpenModalButton() {
      var elem = document.querySelector('body.docs');
      if (!elem) {
        return;
      }
      var btn = this.createButtonElement();
      this.listenForOpenModal(btn);
      this.closeOnEscapeKey();
      elem.appendChild(btn);
    }
  }, {
    key: "insertCloseIconIntoModal",
    value: function insertCloseIconIntoModal() {
      var btn = this.createCloseIconButton();
      this.listenForCloseModal(btn);
      this.modal.appendChild(btn);
    }
  }, {
    key: "createCloseIconButton",
    value: function createCloseIconButton() {
      var button = document.createElement('button');
      button.type = 'button';
      button.id = 'php-revival-close-button';
      button.classList.add('contribute__close-btn');
      button.innerHTML = closeIcon_1["default"];
      return button;
    }
  }, {
    key: "listenForOpenModal",
    value: function listenForOpenModal(btn) {
      var _this = this;
      btn.addEventListener('click', function () {
        _this.modal.classList.toggle(SHOW_MODAL_CLASS);
      });
    }
  }, {
    key: "closeOnEscapeKey",
    value: function closeOnEscapeKey() {
      var _this2 = this;
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          _this2.modal.classList.remove(SHOW_MODAL_CLASS);
        }
      });
    }
  }, {
    key: "listenForCloseModal",
    value: function listenForCloseModal(btn) {
      var _this3 = this;
      btn.addEventListener('click', function () {
        _this3.modal.classList.remove(SHOW_MODAL_CLASS);
      });
    }
  }, {
    key: "createButtonElement",
    value: function createButtonElement() {
      var button = document.createElement('button');
      button.type = 'button';
      button.id = 'php-revival-contribute-button';
      button.classList.add('php-revival-contribute-button');
      button.textContent = 'Contribute';
      return button;
    }
  }]);
  return ContributeModifier;
}();
exports["default"] = ContributeModifier;

/***/ }),

/***/ "./src/ts/Modifiers/HomeHeroModifier.ts":
/*!**********************************************!*\
  !*** ./src/ts/Modifiers/HomeHeroModifier.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var HomeHeroModifier = /*#__PURE__*/function () {
  function HomeHeroModifier() {
    _classCallCheck(this, HomeHeroModifier);
  }
  _createClass(HomeHeroModifier, [{
    key: "modify",
    value: function modify() {
      var hero = document.querySelector(conf_1["default"].selectors.home.hero);
      if (!hero) {
        return;
      }
      this.elements = {
        logo: hero.querySelector('.hero-logo'),
        text: hero.querySelector('.hero-text'),
        buttons: hero.querySelector('.hero-actions')
      };
      this.wrapInRow(hero);
      this.wrapTextAndButtons();
      hero.style.opacity = '1';
    }
  }, {
    key: "wrapInRow",
    value: function wrapInRow(hero) {
      if (!this.elements) {
        return;
      }
      var heroRow = document.createElement('div');
      heroRow.classList.add('php-revival-hero-row');
      heroRow.appendChild(this.elements.logo);
      heroRow.appendChild(this.elements.text);
      heroRow.appendChild(this.elements.buttons);
      hero.prepend(heroRow);
    }
  }, {
    key: "wrapTextAndButtons",
    value: function wrapTextAndButtons() {
      if (!this.elements) {
        return;
      }
      var row = document.querySelector('.php-revival-hero-row');
      var heroTextAndButtons = document.createElement('div');
      heroTextAndButtons.classList.add('php-revival-hero-row__text-and-buttons');
      heroTextAndButtons.appendChild(this.elements.text);
      heroTextAndButtons.appendChild(this.elements.buttons);
      row.appendChild(heroTextAndButtons);
    }
  }]);
  return HomeHeroModifier;
}();
exports["default"] = HomeHeroModifier;

/***/ }),

/***/ "./src/ts/Modifiers/LogoModifier.ts":
/*!******************************************!*\
  !*** ./src/ts/Modifiers/LogoModifier.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var getImageUrl_1 = __importDefault(__webpack_require__(/*! @/modules/getImageUrl */ "./src/ts/modules/getImageUrl.ts"));
var conf_1 = __importDefault(__webpack_require__(/*! @/conf */ "./src/ts/conf.ts"));
var LogoModifier = /*#__PURE__*/function () {
  function LogoModifier() {
    _classCallCheck(this, LogoModifier);
  }
  _createClass(LogoModifier, [{
    key: "modify",
    value: function modify() {
      var logo = document.querySelector(conf_1["default"].selectors.home.logo);
      if (!logo) {
        return;
      }
      logo.src = (0, getImageUrl_1["default"])('logo.webp');
    }
  }]);
  return LogoModifier;
}();
exports["default"] = LogoModifier;

/***/ }),

/***/ "./src/ts/Modifiers/ToggleCommentsModifier.ts":
/*!****************************************************!*\
  !*** ./src/ts/Modifiers/ToggleCommentsModifier.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var commentIcon_1 = __importDefault(__webpack_require__(/*! @/templates/icons/commentIcon */ "./src/ts/templates/icons/commentIcon.ts"));
var ToggleCommentsModifier = /*#__PURE__*/function () {
  function ToggleCommentsModifier() {
    _classCallCheck(this, ToggleCommentsModifier);
    this.layout = document.querySelector('#layout-content');
    this.commentsSection = document.querySelector('#usernotes');
  }
  _createClass(ToggleCommentsModifier, [{
    key: "modify",
    value: function modify() {
      if (!this.commentsSection || !this.layout) {
        return;
      }
      this.goggleComments(false);
      var btn = this.createShowCommentsButton();
      this.layout.appendChild(btn);
    }
  }, {
    key: "goggleComments",
    value: function goggleComments(show) {
      this.commentsSection.style.display = show ? 'block' : 'none';
    }
  }, {
    key: "createShowCommentsButton",
    value: function createShowCommentsButton() {
      var _this = this;
      var div = document.createElement('div');
      div.classList.add('php-revival-show-comments');
      var btn = document.createElement('button');
      btn.innerHTML = "".concat(commentIcon_1["default"], " Show Comments");
      btn.addEventListener('click', function () {
        btn.remove();
        _this.goggleComments(true);
      });
      div.appendChild(btn);
      return div;
    }
  }]);
  return ToggleCommentsModifier;
}();
exports["default"] = ToggleCommentsModifier;

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Extension_1 = __importDefault(__webpack_require__(/*! @/Extension */ "./src/ts/Extension.ts"));
var RecommendedVideoAdder_1 = __importDefault(__webpack_require__(/*! @/Adders/RecommendedVideoAdder */ "./src/ts/Adders/RecommendedVideoAdder.ts"));
var HomeLinksAdder_1 = __importDefault(__webpack_require__(/*! @/Adders/HomeLinksAdder */ "./src/ts/Adders/HomeLinksAdder.ts"));
var SearchIconAdder_1 = __importDefault(__webpack_require__(/*! @/Adders/SearchIconAdder */ "./src/ts/Adders/SearchIconAdder.ts"));
var CopyButtonAdder_1 = __importDefault(__webpack_require__(/*! @/Adders/CopyButtonAdder */ "./src/ts/Adders/CopyButtonAdder.ts"));
var CodeSampleModifier_1 = __importDefault(__webpack_require__(/*! @/Modifiers/CodeSampleModifier */ "./src/ts/Modifiers/CodeSampleModifier.ts"));
var LogoModifier_1 = __importDefault(__webpack_require__(/*! @/Modifiers/LogoModifier */ "./src/ts/Modifiers/LogoModifier.ts"));
var HomeHeroModifier_1 = __importDefault(__webpack_require__(/*! @/Modifiers/HomeHeroModifier */ "./src/ts/Modifiers/HomeHeroModifier.ts"));
var ContributeModifier_1 = __importDefault(__webpack_require__(/*! @/Modifiers/ContributeModifier */ "./src/ts/Modifiers/ContributeModifier.ts"));
var ToggleCommentsModifier_1 = __importDefault(__webpack_require__(/*! @/Modifiers/ToggleCommentsModifier */ "./src/ts/Modifiers/ToggleCommentsModifier.ts"));
var PlayButtonAdder_1 = __importDefault(__webpack_require__(/*! @/Adders/PlayButtonAdder */ "./src/ts/Adders/PlayButtonAdder.ts"));
new Extension_1["default"]().applyAdders([new RecommendedVideoAdder_1["default"](), new HomeLinksAdder_1["default"](), new SearchIconAdder_1["default"](), new CopyButtonAdder_1["default"](), new PlayButtonAdder_1["default"]()]).applyModifiers([new CodeSampleModifier_1["default"](), new HomeHeroModifier_1["default"](), new LogoModifier_1["default"](), new ContributeModifier_1["default"](), new ToggleCommentsModifier_1["default"]()]);

/***/ }),

/***/ "./src/ts/conf.ts":
/*!************************!*\
  !*** ./src/ts/conf.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var config = {
  selectors: {
    codeExamples: '.example-contents .phpcode code span span, #usernotes .note .text .phpcode code span.html span',
    searchQuery: '.search-query.tt-query',
    targetForSearchIcon: '#topsearch',
    targetForCodeExamples: '.example-contents > .phpcode',
    copyCodeIcons: '.php-revival-copy-icon',
    playCodeIcons: '.php-revival-play-icon',
    docs: {
      classMethods: '.partintro .classsynopsis .methodname .methodname',
      contributeModal: 'body.docs .contribute',
      contributeModalLinks: 'body.docs .contribute .edit-bug'
    },
    home: {
      hero: 'body.home .hero',
      logo: 'body.home img.hero-logo',
      targetForHomeLinks: '.tips > .inner > .panel',
      targetForRandVideos: 'body.home .tips .inner'
    }
  },
  homeLinks: [{
    link: 'https://github.com/php/php-src',
    iconName: 'github.png',
    title: 'PHP Source'
  }, {
    link: 'https://x.com/official_php',
    iconName: 'x.svg',
    title: 'PHP Official'
  }, {
    link: 'https://onlinephp.io/',
    iconName: 'onlinephp.png',
    title: 'PHP Sandbox'
  }, {
    link: 'https://opencollective.com/phpfoundation',
    iconName: 'phpfoundation.png',
    title: 'PHP Foundation'
  }, {
    link: 'https://hub.docker.com/_/php',
    iconName: 'docker.png',
    title: 'Official Docker Image'
  }],
  sandboxURL: 'https://onlinephp.io/'
};
exports["default"] = config;

/***/ }),

/***/ "./src/ts/modules/CodeCopier.ts":
/*!**************************************!*\
  !*** ./src/ts/modules/CodeCopier.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var CodeCopier = /*#__PURE__*/function () {
  function CodeCopier(target) {
    _classCallCheck(this, CodeCopier);
    this.target = target;
    this.lastCopiedAt = 0;
  }
  _createClass(CodeCopier, [{
    key: "copy",
    value: function copy() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var code, cleanCode;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              code = this.target.querySelector('code');
              if (code) {
                _context.next = 4;
                break;
              }
              console.warn('[PHP Revival] Code element not found');
              return _context.abrupt("return", null);
            case 4:
              cleanCode = this.cleanCode(code.innerHTML);
              return _context.abrupt("return", this.copyTextToClipboard(cleanCode, this.target));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "cleanCode",
    value: function cleanCode(code) {
      return code.replace(/<br ?\/?>/g, "\n").replace(/<[^>]*>/g, '').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    }
  }, {
    key: "copyTextToClipboard",
    value: function copyTextToClipboard(text, target) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.notAllowedToCopy()) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", null);
            case 2:
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                return navigator.clipboard.writeText(text).then(function () {
                  return resolve(text);
                })["catch"](function (err) {
                  return reject(err);
                })["finally"](function () {
                  return _this.lastCopiedAt = Date.now();
                });
              }));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "notAllowedToCopy",
    value: function notAllowedToCopy() {
      return Date.now() - this.lastCopiedAt < 1300;
    }
  }]);
  return CodeCopier;
}();
exports["default"] = CodeCopier;

/***/ }),

/***/ "./src/ts/modules/arrShuffle.ts":
/*!**************************************!*\
  !*** ./src/ts/modules/arrShuffle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = function (arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};

/***/ }),

/***/ "./src/ts/modules/convertPHPVersionToNumeric.ts":
/*!******************************************************!*\
  !*** ./src/ts/modules/convertPHPVersionToNumeric.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = function (version) {
  version = version.replace('PHP < 8.0', '7.4.0').replace('PHP < 8.1', '8.0.0').replace('PHP < 8.2', '8.1.0').replace('PHP < 8.3', '8.2.0').replace('PHP < 8.4', '8.3.0').replace('PHP < 9.0', '8.4.0').replace('PHP < 9.1', '9.0.0').replace('PHP < 9.2', '9.1.0').replace('PHP < 9.3', '9.2.0').replace('PHP < 9.4', '9.3.0');
  if (version.startsWith('PHP <')) {
    return null;
  }
  if (version.match(/PHP *([\d.]+)/)) {
    return version.replace('PHP ', '') + '.0';
  }
  if (!version.match(/[\d.]+/)) {
    return null;
  }
  return version;
};

/***/ }),

/***/ "./src/ts/modules/getImageUrl.ts":
/*!***************************************!*\
  !*** ./src/ts/modules/getImageUrl.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = function (uri) {
  return chrome.runtime.getURL("images/".concat(uri));
};

/***/ }),

/***/ "./src/ts/modules/recommendedVideos.ts":
/*!*********************************************!*\
  !*** ./src/ts/modules/recommendedVideos.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var recommendedVideos = [{
  title: "How to get ready for PHP 8 | Sebastian Bergmann",
  link: "https://youtu.be/RjiOKgmqosQ",
  img: "how-to-get-ready-for-php-8.jpg",
  date: "2018-11-27"
}, {
  title: "Factory Pattern - Object Oriented PHP Tutorial",
  link: "https://youtu.be/H5lor4wyl1Y",
  img: "object-oriented-php-tutorial.jpg",
  date: "2019-12-02"
}, {
  title: "Php Objects & Static Methods (Object Oriented Php 2020)",
  link: "https://youtu.be/_Zd9B_jUwlw",
  img: "objects-and-static-methods.jpg",
  date: "2020-01-20"
}, {
  title: "Building a PHP Framework ep1: The dependency injection container",
  link: "https://youtu.be/8bfuR6nEpwY",
  img: "the-dependency-injection-container.jpg",
  date: "2018-05-22"
}, {
  title: "Marco Pivetta – From helpers to middleware",
  link: "https://youtu.be/MjpiHy_e8kQ",
  img: "from-helpers-to-middleware.jpg",
  date: "2019-12-05"
}, {
  title: "PHP UK Conference 2018 - Kat Zien - Performance optimisation: how do I go about it?",
  link: "https://youtu.be/4hB7tGcz1l8",
  img: "performance-optimisation-how-do-I-go-about-it.jpg",
  date: "2018-03-29"
}, {
  title: "Test to Break Principles - Rob Waller - PHP UK Conference 2019",
  link: "https://youtu.be/JDwFyRXbVHQ",
  img: "test-to-break-principles-rob-waller.jpg",
  date: "2019-03-20"
}, {
  title: "PHP Solid Principles ~ Lesson 1: Single Responsibility",
  link: "https://youtu.be/ARxZV8OZ8Cg",
  img: "php-solid-principles-single-responsibility.jpg",
  date: "2019-12-03"
}, {
  title: "Top 100 PHP Functions ( 1 - 10 ) | Learn PHP Programming",
  link: "https://youtu.be/t9FrpTZm1ds",
  img: "top-100-php-functions-1-10.jpg",
  date: "2018-11-19"
}, {
  title: "What Is Object-Oriented Programming?",
  link: "https://youtu.be/3rrnnbz-mY8",
  img: "What-Is-Object-Oriented-Programming.jpg",
  date: "2018-04-06"
}, {
  title: "Controlling the Variables - Thijs Feryn - PHP UK Conference 2019",
  link: "https://youtu.be/f3EU-sd9KPY",
  img: "controlling-the-variables.jpg",
  date: "2019-03-19"
}, {
  title: "Create a WordPress Plugin from Scratch - Part 1",
  link: "https://youtu.be/Z7QfH-s-15s",
  img: "Create-a-WordPress-Plugin-from-Scratch-Part-1.jpg",
  date: "2017-08-11"
}, {
  title: "PHP cURL Tutorial - Learn PHP Programming",
  link: "https://youtu.be/1X2-UEUqrd8",
  img: "PHP-cURL-Tutorial-Learn-PHP-Programming.jpg",
  date: "2016-10-31"
}, {
  title: "PHP Regular Expressions Tutorial",
  link: "https://youtu.be/wnu4febXKx0",
  img: "PHP-Regular-Expressions-Tutorial.jpg",
  date: "2016-11-27"
}, {
  title: "Set up Xdebug for Local PHP Development",
  link: "https://youtu.be/iSSjeelN5NU",
  img: "Set-up-Xdebug-for-Local-PHP-Development.jpg",
  date: "2017-08-09"
}, {
  title: "PHP UK Conference 2018 - Mark Niebergall -Debugging PHP with Xdebug",
  link: "https://youtu.be/4wkHBwkhu7g",
  img: "PHP-UK-Conference-2018-Mark-Niebergall-Debugging-PHP-with-Xdebug.jpg",
  date: "2018-03-29"
}, {
  title: "Functional Programming in PHP",
  link: "https://youtu.be/LZh4_q04aKo",
  img: "Functional-Programming-in-PHP.jpg",
  date: "2018-10-05"
}, {
  title: "PHP REST API From Scratch [1] - Database & Read",
  link: "https://youtu.be/OEWXbpUMODk",
  img: "PHP-REST-API-From-Scratch-1-Database-Read.jpg",
  date: "2018-05-27"
}, {
  title: "Authentication With Slim 4 (Lesson 1: Setup Slim)",
  link: "https://youtu.be/3Hg2WPwDyG8",
  img: "Authentication-With-Slim-4-Lesson-1-Setup-Slim.jpg",
  date: "2020-02-17"
}, {
  title: "PHP UK Conference 2017 - Gareth Ellis - Introduction to SOLID",
  link: "https://youtu.be/86Tt2pW9pv4",
  img: "PHP-UK-Conference-2017-Gareth Ellis-Introduction-to-SOLID.jpg",
  date: "2017-04-03"
}, {
  title: "#devbreak19 - 25 Years of PHP",
  link: "https://youtu.be/80ysU2Xl4Zk",
  img: "devbreak19-25-Years-of-PHP.jpg",
  date: "2019-08-07"
}, {
  title: "25 years of PHP - Rasmus Lerdorf",
  link: "https://youtu.be/nmD1Q4FsXCc",
  img: "25-years-of-PHP-Rasmus-Lerdorf-video.jpg",
  date: "2019-07-11"
}, {
  title: "What is Class in PHP - OOP Tutorial - in 5 Minutes",
  link: "https://youtu.be/pObVzQjRWtg",
  img: "What-is-Class-in-PHP-OOP-Tutorial-in-5-Minutes.jpg",
  date: "2020-04-03"
}, {
  title: "Object Oriented programming in PHP | PHP for Beginners - Part 20",
  link: "https://youtu.be/cNe_24n3maY",
  img: "Object-Oriented-programming-in-PHP.jpg",
  date: "2020-04-16"
}, {
  title: "Serverless PHP applications with Bref - Matthiew Napoli - PHP UK 2020",
  link: "https://youtu.be/R2V4QTM2aes",
  img: "Serverless-PHP-applications-with-Bre-Matthiew-Napoli-PHP-UK-2020.jpg",
  date: "2020-03-12"
}, {
  title: "What's new in PHP 8.0",
  link: "https://youtu.be/uU1-ZqIbYes",
  img: "Whats-new-in-PHP-8-0.webp",
  date: "2020-11-28"
}, {
  title: "Laravel Crash Course 2020",
  link: "https://youtu.be/MFh0Fd7BsjE",
  img: "Laravel-Crash-Course-2020.webp",
  date: "2020-11-16"
}, {
  title: "5 Exciting New Features in PHP 8.1",
  link: "https://youtu.be/T8QZkpVvDxc",
  img: "5-Exciting-New-Features-in-PHP-81.webp",
  date: "2021-10-12"
}, {
  title: "What’s New in PHP 8.1: Enums, First-Class Callables, Fibers, Readonly Properties, and More",
  link: "https://youtu.be/rgrQSmUiFJQ",
  img: "Whats-New-in-PHP-81-Enums-First-Class-Callables-Fibers-Readonly-Properties-and-More.webp",
  date: "2021-11-25"
}, {
  title: "Unit Testing with PHP Unit",
  link: "https://youtu.be/a5ZKCFINUkU",
  img: "Unit-Testing-with-PHP-Unit.webp",
  date: "2021-03-07"
}, {
  title: "PHP Unit Testing with PHPUnit | Automated PHP Testing Tutorial [2021]",
  link: "https://youtu.be/kkU43JdJQBE",
  img: "PHP-Unit-Testing-with-PHPUnit-Automated-PHP-Testing-Tutorial-2021.webp",
  date: "2021-05-10"
}, {
  title: "5 Reasons to Use PHP 8: New Syntax Features",
  link: "https://youtu.be/F-AWT88vsyM",
  img: "5-Reasons-to-Use-PHP-8-New-Syntax-Features.webp",
  date: "2021-11-05"
}, {
  title: "The Future of PHP",
  link: "https://www.youtube.com/watch?v=wuJ2W3n0vXg",
  img: "The-Future-of-PHP.webp",
  date: "2022-08-04"
}, {
  title: "Why use PHP in 2022?",
  link: "https://www.youtube.com/watch?v=X5lxnlcjrWM",
  img: "Why-use-PHP-in-2022.webp",
  date: "2022-06-15"
}, {
  title: "The evolution of PHP",
  link: "https://www.youtube.com/watch?v=x9bSUo6TGgY",
  img: "From-PHP-5-6-to-PHP-8-2.webp",
  date: "2022-07-17"
}, {
  title: "Celebrating PHP 8.3",
  link: "https://www.youtube.com/live/VWryF035B6U?si=HzqFkcaMdIBgGlVa",
  img: "Celebrating-PHP-8-3.webp",
  date: "2023-11-23"
}, {
  title: "Breaking changes in PHP 8.3!",
  link: "https://youtu.be/mGf_ShkSdmE?si=EBC9q0RDM5gIvLBR",
  img: "Breaking-changes-in-PHP-8-3.webp",
  date: "2023-10-26"
}, {
  title: "PHP For Beginners - Complete Laracasts Course",
  link: "https://youtu.be/fw5ObX8P6as?si=L7E6jf4UNTNOxLy1",
  img: "PHP-For-Beginners-Complete-Laracasts-Course.webp",
  date: "2023-11-21"
}, {
  title: "In Defence of PHP - Stephen Rees-Carter - NDC Security 2023",
  link: "https://youtu.be/zlPBufBzscg?si=7yYQlVjPl5A-ej7N",
  img: "In-Defence-of-PHP-Stephen-Rees-Carter-NDC-Security-2023.webp",
  date: "2023-04-20"
}, {
  title: "Readonly clones, #[Override], and json_validate: what's new in PHP 8.3",
  link: "https://youtu.be/nJFsD0bnlTI?si=Y51fxIQFM3C91CTZ",
  img: "Readonly-clones-and-json_validate-whats-new-in-PHP-8-3.webp",
  date: "2023-10-05"
}, {
  title: "\"Developing Symfony applications in 2023\" [eng] / Nicolas Grekas",
  link: "https://youtu.be/EwAVP3BoNOg?si=zTioUaqULIyZsMdH",
  img: "Developing-Symfony-applications-in-2023-Nicolas-Grekas.webp",
  date: "2023-11-24"
}, {
  title: "Is PHP 8.3 adding types to class constants?!",
  link: "https://youtu.be/E8lbWznz1d0?si=OWZMOXmR-MmIvjo5",
  img: "Is-PHP-8-3-adding-types-to-class-constants.webp",
  date: "2023-10-13"
}, {
  title: "Clean your controller with Laravel prepareForValidation method",
  link: "https://youtu.be/RbMlMAULJm8?si=lj_ExcBmAeKgIkMs",
  img: "Clean your controller with Laravel prepareForValidation method.webp",
  date: "2022-09-24"
}, {
  title: "Logging Unique Views in Laravel with Redis: Playing with Redis sets and HyperLogLog (1/4)",
  link: "https://youtu.be/FGLDa3e4ZGM?si=Z4_l2wqn09oPViiI",
  img: "Logging Unique Views in Laravel with Redis- Playing with Redis sets and HyperLogLog (1-4).webp",
  date: "2024-02-20"
}, {
  title: "Up And Running with Pest: Introduction and demo (01/35)",
  link: "https://youtu.be/jyfoHw05Mbw?si=8VfLZqiwmJPf1TQ6",
  img: "Up And Running with Pest- Introduction and demo (01-35).webp",
  date: "2022-03-28"
}, {
  title: "What's New in PHP 8.3 - Derick Rethans",
  link: "https://youtu.be/3U0DGhzSH2U?si=x6EHaR5jvJmorgV0",
  img: "What's New in PHP 8.3 - Derick Rethans.webp",
  date: "2024-02-22"
}, {
  title: "Boosting Frontend Speed: Quick Wins for Backend Developers - Paul Conroy",
  link: "https://youtu.be/BZuWGil_7kY?si=zqeyIP2afbIrT2ts",
  img: "Boosting Frontend Speed- Quick Wins for Backend Developers - Paul Conroy.webp",
  date: "2024-02-21"
}, {
  title: "PHP is the future",
  link: "https://youtu.be/xmvD_EjNE-4?si=iu_8S-Imzwd-jPqf",
  img: "PHP is the future.webp",
  date: "2023-05-12"
}, {
  title: "Jr. Devs: Want More Opportunities? Learn PHP!",
  link: "https://youtu.be/0ysPpAr3-w4?si=BbcQYnPOvDkCQgiE",
  img: "JrDevs Want More Opportunities Learn PHP.webp",
  date: "2024-04-08"
}, {
  title: "Learn Object Oriented PHP for Beginners | OOP PHP Tutorial",
  link: "https://youtu.be/yrFr5PMdk2A?si=A2JP_ytKYSTLyRnZ",
  img: "Learn Object Oriented PHP for Beginners OOP PHP Tutorial.webp",
  date: "2023-08-30"
}];
exports["default"] = recommendedVideos;

/***/ }),

/***/ "./src/ts/templates/cardItemTemplate.ts":
/*!**********************************************!*\
  !*** ./src/ts/templates/cardItemTemplate.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var getImageUrl_1 = __importDefault(__webpack_require__(/*! @/modules/getImageUrl */ "./src/ts/modules/getImageUrl.ts"));
exports["default"] = function (card) {
  var src = (0, getImageUrl_1["default"])("recommended-videos/".concat(card.img));
  return "\n        <a href=\"".concat(card.link, "\" class=\"revival-recommended-video\" target=\"_blank\">\n            <img src=\"").concat(src, "\" alt=\"").concat(card.title, "\">\n            <span>").concat(card.title, "</span>\n        </a>\n    ");
};

/***/ }),

/***/ "./src/ts/templates/homeSidebarLinkTemplate.ts":
/*!*****************************************************!*\
  !*** ./src/ts/templates/homeSidebarLinkTemplate.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var getImageUrl_1 = __importDefault(__webpack_require__(/*! @/modules/getImageUrl */ "./src/ts/modules/getImageUrl.ts"));
exports["default"] = function (link) {
  var src = (0, getImageUrl_1["default"])("icons/".concat(link.iconName));
  var img = createImage(src);
  var span = createSpan(link.title);
  var a = createLink(img, span, link.link);
  return createParagraph(a);
};
function createParagraph(a) {
  var p = document.createElement('p');
  p.classList.add('panel', 'php-revival-panel');
  p.appendChild(a);
  return p;
}
function createImage(src) {
  var img = document.createElement('img');
  img.src = src;
  return img;
}
function createSpan(title) {
  var span = document.createElement('span');
  span.textContent = title;
  return span;
}
function createLink(img, span, href) {
  var a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  a.appendChild(img);
  a.appendChild(span);
  return a;
}

/***/ }),

/***/ "./src/ts/templates/icons/closeIcon.ts":
/*!*********************************************!*\
  !*** ./src/ts/templates/icons/closeIcon.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18 18 6M6 6l12 12\" />\n</svg>";

/***/ }),

/***/ "./src/ts/templates/icons/commentIcon.ts":
/*!***********************************************!*\
  !*** ./src/ts/templates/icons/commentIcon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z\" />\n</svg>";

/***/ }),

/***/ "./src/ts/templates/icons/copyIcon.ts":
/*!********************************************!*\
  !*** ./src/ts/templates/icons/copyIcon.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = "<svg class=\"php-revival-copy-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n    <path d=\"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z\"></path>\n    <path d=\"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z\"></path>\n</svg>";

/***/ }),

/***/ "./src/ts/templates/icons/playIcon.ts":
/*!********************************************!*\
  !*** ./src/ts/templates/icons/playIcon.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"white\" viewBox=\"0 0 24 24\" stroke-width=\"1\" stroke=\"currentColor\" class=\"php-revival-play-icon\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z\" />\n</svg>";

/***/ }),

/***/ "./src/ts/templates/icons/searchIcon.ts":
/*!**********************************************!*\
  !*** ./src/ts/templates/icons/searchIcon.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"php-revival-search-icon\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\" />\n</svg>";

/***/ }),

/***/ "./src/ts/templates/recommendedVideosTemplate.ts":
/*!*******************************************************!*\
  !*** ./src/ts/templates/recommendedVideosTemplate.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var cardItemTemplate_1 = __importDefault(__webpack_require__(/*! @/templates/cardItemTemplate */ "./src/ts/templates/cardItemTemplate.ts"));
exports["default"] = function (cards, wrap) {
  var result = wrap ? '<div class="revival-recommended-video-container">' : '';
  cards.forEach(function (card) {
    return result += (0, cardItemTemplate_1["default"])(card);
  });
  result += wrap ? "<button type=\"button\" id=\"revival-show-more-recommended\">Show more</button></div>" : '';
  return result;
};

/***/ }),

/***/ "./src/sass/app.sass":
/*!***************************!*\
  !*** ./src/sass/app.sass ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/extension/main": 0,
/******/ 			"extension/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkphp_revival"] = self["webpackChunkphp_revival"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["extension/main"], () => (__webpack_require__("./src/ts/app.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["extension/main"], () => (__webpack_require__("./src/sass/app.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;