webpackHotUpdate(7,{

/***/ "./components/AppLayout/FooterElement/FooterElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__("./utilities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);


var _jsxFileName = "C:\\Users\\arual\\Desktop\\Gits\\ampersand-labs\\components\\AppLayout\\FooterElement\\FooterElement.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FooterElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FooterElement, _React$Component);

  function FooterElement() {
    _classCallCheck(this, FooterElement);

    return _possibleConstructorReturn(this, (FooterElement.__proto__ || Object.getPrototypeOf(FooterElement)).apply(this, arguments));
  }

  _createClass(FooterElement, [{
    key: "render",
    value: function render() {
      var _this = this;

      var lists = this.props.children.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          key: i,
          style: {
            fontSize: '0.8em',
            margin: 'auto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          key: i,
          href: Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* convert */])(_this.props.page) + '/' + Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* convert */])(item),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, item));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          margin: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: {
          fontSize: '1.2em',
          fontWeight: 'bold',
          margin: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: '/' + Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* convert */])(this.props.page),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.page)), lists);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return FooterElement;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FooterElement, "FooterElement", "C:\\Users\\arual\\Desktop\\Gits\\ampersand-labs\\components\\AppLayout\\FooterElement\\FooterElement.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.dea5d6abda895d93ea2a.hot-update.js.map