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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppLayout/AppLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__ = __webpack_require__("antd/lib/menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FooterElement_FooterElement__ = __webpack_require__("./components/AppLayout/FooterElement/FooterElement.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities__ = __webpack_require__("./utilities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);






var _jsxFileName = "C:\\Users\\arual\\Desktop\\LearnDifferent\\components\\AppLayout\\AppLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Header = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Header,
    Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content,
    Footer = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Footer;

var AppLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppLayout, _React$Component);

  function AppLayout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AppLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AppLayout.__proto__ || Object.getPrototypeOf(AppLayout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        current: 'home',
        pages: [{
          page: 'Quiénes Somos',
          subs: ['']
        }, {
          page: 'Proyecto',
          subs: ['Plan de Investigación', 'Preguntas de Investigación', 'Metas de Ingeniería', 'Hipótesis y Resultados Esperados', 'Metodología']
        }, {
          page: 'Documentación',
          subs: ['Fase 1', 'Fase 2']
        }]
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          current: event.key
        });
      }
    }), _temp));
  }

  _createClass(AppLayout, [{
    key: "render",
    value: function render() {
      var footerLinks = this.state.pages.map(function (page, i) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
          key: i,
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
          style: {
            margin: 'auto',
            padding: '0.8em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__FooterElement_FooterElement__["a" /* default */], {
          key: i,
          page: page['page'],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, page['subs']));
      });
      var navbarLinks = this.state.pages.map(function (page, i) {
        if (i < 6) {
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
            key: i,
            href: '/' + Object(__WEBPACK_IMPORTED_MODULE_6__utilities__["a" /* convert */])(page['page']),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, page['page']));
        } else {
          return null;
        }
      });
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
        justify: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a, {
        theme: "light",
        onClick: this.handleClick,
        selectedKeys: this.state.current,
        mode: "horizontal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, navbarLinks), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Content, {
        style: {
          padding: '4em 2em 4em',
          backgroundColor: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Footer, {
        style: {
          backgroundColor: ' #b2bec3',
          margin: 'auto',
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        align: "top",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, footerLinks)));
    }
  }]);

  return AppLayout;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);



/***/ }),

/***/ "./components/AppLayout/FooterElement/FooterElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__("./utilities.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);


var _jsxFileName = "C:\\Users\\arual\\Desktop\\LearnDifferent\\components\\AppLayout\\FooterElement\\FooterElement.js";

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
          href: '/' + Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* convert */])(_this.props.page) + '/' + Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* convert */])(item),
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
  }]);

  return FooterElement;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./pages/proyecto/hipotesis-y-resultados-esperados.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppLayout_AppLayout__ = __webpack_require__("./components/AppLayout/AppLayout.js");


var _jsxFileName = "C:\\Users\\arual\\Desktop\\LearnDifferent\\pages\\proyecto\\hipotesis-y-resultados-esperados.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_AppLayout_AppLayout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, "Hip\xF3tesis"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, "Un cambio en el m\xE9todo de ense\xF1anza puede hacer una gran diferencia en el desempe\xF1o y motivaci\xF3n de los alumnos, adem\xE1s de apoyar en el desarrollo de habilidades \u201Csuaves\u201D, aquellas que son transversales y de utilidad en todas las \xE1reas de conocimiento y profesionales; como el liderazgo, la cooperaci\xF3n, la responsabilidad y adaptabilidad."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Resultados Esperados"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Poco a poco, esperamos que los alumnos se vean m\xE1s motivados y comprometidos con el aprendizaje y que este experimento impacte de manera positiva sus vidas, y mejore su desempe\xF1o acad\xE9mico. Los alumnos re-encontrar\xE1n su pasi\xF3n por el aprendizaje, (algo que la escuela les suele quitar) y aprender\xE1n a investigar cosas por su cuenta, algo que les servir\xE1 para todo en la vida. Adem\xE1s de esto, creemos que los alumnos desarrollar\xE1n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/Soft_skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "\"habilidades suaves\"")), ", habilidades que son \xFAtiles independientemente de la disciplina a la que se apliquen."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Por el lado de los profesores, su motivaci\xF3n ser\xE1 la que mueva a los estudiantes a estar m\xE1s motivados, y al ver que ellos toman m\xE1s gusto por el aprendizaje los profesores se ver\xE1n positivamente afectados, creando as\xED un ciclo. Los buenos resultados depender\xE1n de la disposici\xF3n del profesor, por lo que nos involucraremos de una manera cercana con ellos."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Al finalizar el experimento, se realizar\xE1n entrevistas a los alumnos que el profesor haya visto que han sido impactados de mayor manera, y se analizar\xE1 de manera profunda como cambi\xF3 (para bien o para mal) el comportamiento y las calificaciones del alumno. Se les pedir\xE1 tambi\xE9n dar retroalimentaci\xF3n sobre el experimento, y si les gustar\xEDa que todas sus clases se impartieran de manera similar."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Aunado a esto, se tomar\xE1 en cuenta la opini\xF3n del profesor analizando los comportamientos que vio en sus diferentes grupos, y si ha notado cambios significativos, tanto en forma acad\xE9mica como social y personal."));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./utilities.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convert; });


//converts a Normal String to kebab-case
var convert = function convert(string) {
  return string.split(" ").join("-").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/proyecto/hipotesis-y-resultados-esperados.js");


/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/layout":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/row":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=hipotesis-y-resultados-esperados.js.map