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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Alert/Geral.js":
/*!***********************************!*\
  !*** ./components/Alert/Geral.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Alert\\Geral.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class AlertGeral extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!this.props.aviso) return null;
    return __jsx("div", {
      className: "alert alert-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, this.props.aviso.message));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AlertGeral);

/***/ }),

/***/ "./components/Campos/Pesquisa.js":
/*!***************************************!*\
  !*** ./components/Campos/Pesquisa.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Campos\\Pesquisa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Pesquisa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      termo: ""
    });
  }

  submitPesquisa() {
    const {
      termo
    } = this.state;
    this.props.fetchTermo(termo);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: "/pesquisa",
      query: {
        termo
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "flex-3 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("input", {
      name: "pesquisa",
      value: this.state.termo,
      onChange: e => this.setState({
        termo: e.target.value
      }),
      placeholder: "Digite aqui a sua pesquisa...",
      className: "input-pesquisa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }), __jsx("button", {
      onClick: () => this.submitPesquisa(),
      className: "button-pesquisa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "fa fa-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(Pesquisa));

/***/ }),

/***/ "./components/Cards/Carrinho.js":
/*!**************************************!*\
  !*** ./components/Cards/Carrinho.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Cards\\Carrinho.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CardCarrinho extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      cartQtd: 0
    });
  }

  componentDidMount() {
    this.setState({
      cartQtd: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCountItemsCart"])()
    });
  }

  render() {
    return __jsx("div", {
      className: "itens-cabecalho flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/area-cliente",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, "Minha Conta"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/carrinho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-shopping-cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, this.state.cartQtd || 0))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardCarrinho);

/***/ }),

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultDescricao = '';
const defaultOGURL = '';
const defaultOGImage = "/static/logo.jpg";

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, props.title || ""), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescricao,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/static/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:title",
  content: props.title || "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescricao,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:site",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image:width",
  content: "600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image:height",
  content: "600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
  crossOrigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/style.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}), props.pagSeguro ? __jsx("script", {
  type: "text/javascript",
  src: "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 17
  }
}) : null, props.children);

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/Inputs/FormRadio.js":
/*!****************************************!*\
  !*** ./components/Inputs/FormRadio.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormRadio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Inputs\\FormRadio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FormRadio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      checked,
      label,
      onChange
    } = this.props;
    return __jsx("div", {
      className: "form-input form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("input", {
      type: "radio",
      checked: checked,
      name: name,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "\xA0", label));
  }

}

/***/ }),

/***/ "./components/Inputs/FormSimples.js":
/*!******************************************!*\
  !*** ./components/Inputs/FormSimples.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSimples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Inputs\\FormSimples.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FormSimples extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      value,
      name,
      placeholder,
      type,
      label,
      onChange,
      erro
    } = this.props;
    return __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, label && __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 28
      }
    }, label), __jsx("input", {
      type: type,
      value: value,
      name: name,
      placeholder: placeholder,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), erro && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, erro));
  }

}

/***/ }),

/***/ "./components/Item/DadosDaLoja.js":
/*!****************************************!*\
  !*** ./components/Item/DadosDaLoja.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Item\\DadosDaLoja.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DadosDaLoja extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (!this.props.loja) return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 38
      }
    });
    const {
      nome,
      cnpj,
      email,
      endereco,
      telefones
    } = this.props.loja;
    return __jsx("div", {
      className: "flex-1 dados-da-loja",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, "Entre em Contato")), __jsx("p", {
      className: "loja-nome",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, "Nome: ", nome), __jsx("p", {
      className: "loja-cnpj",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, "CNPJ: ", cnpj), __jsx("p", {
      className: "loja-email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, "E-mail: ", __jsx("a", {
      href: `mailto:${email}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 51
      }
    }, email)), __jsx("p", {
      className: "loja-telefones",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, "Telefones:"), telefones.map((telefone, index) => __jsx("p", {
      className: "loja-telefone",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, "\xA0\xA0", __jsx("a", {
      href: `phone:${telefone}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }
    }, telefone))), __jsx("p", {
      className: "loja-endereco",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, endereco.local, ", ", endereco.numero, " - ", endereco.bairro), __jsx("p", {
      className: "loja-cidade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, endereco.cidade, "/", endereco.estado, " - ", endereco.CEP));
  }

}

const mapStateToProps = state => ({
  loja: state.loja.loja
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(DadosDaLoja));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./components/Style.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children,
  title,
  description,
  url,
  image,
  pagSeguro
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: title,
  description: description,
  url: url,
  ogImage: image,
  pagSeguro: pagSeguro,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx(_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("div", {
  className: "body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, children), __jsx("footer", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "flex flex-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, "\xA9 Sams Papelaria"))));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Listas/Categorias.js":
/*!*****************************************!*\
  !*** ./components/Listas/Categorias.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Listas\\Categorias.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Categorias extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      categorias
    } = this.props;
    return __jsx("div", {
      className: "categorias flex horizontal-mb",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, categorias.map(categoria => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/categoria/${categoria.nome}?id=${categoria._id}`,
      key: categoria._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "categoria-item flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    }, categoria.nome)))));
  }

}

const mapStateToProps = state => ({
  categorias: state.categoria.categorias
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Categorias));

/***/ }),

/***/ "./components/Listas/Paginas.js":
/*!**************************************!*\
  !*** ./components/Listas/Paginas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Listas\\Paginas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Paginas = () => __jsx("div", {
  className: "flex-1 flex vertical institucional",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, "P\xE1ginas")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, "P\xE1gina Inicial")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/carrinho",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }
}, "Ver Carrinho")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/area-cliente/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
}, "Minha Conta")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/sobre",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
}, "Sobre a Loja")));

/* harmony default export */ __webpack_exports__["default"] = (Paginas);

/***/ }),

/***/ "./components/Listas/RedesSociais.js":
/*!*******************************************!*\
  !*** ./components/Listas/RedesSociais.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Listas\\RedesSociais.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const REDES_SOCIAIS = [{
  nome: "facebook",
  url: "#"
}, {
  nome: "instagram",
  url: "#"
}, {
  nome: "twitter",
  url: "#"
}, {
  nome: "whatsapp",
  url: "#"
}];

const RedesSociais = () => __jsx("div", {
  className: "flex-1 flex vertical",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Redes Sociais")), __jsx("div", {
  className: "flex-1 flex redes-sociais wrap",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, REDES_SOCIAIS.map((item, idx) => __jsx("div", {
  className: "flex-1 flex",
  key: idx,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 21
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: item.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 25
  }
}, __jsx("i", {
  className: `fa fa-${item.nome} fa-lg`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 29
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (RedesSociais);

/***/ }),

/***/ "./components/Logo/Cabecalho.js":
/*!**************************************!*\
  !*** ./components/Logo/Cabecalho.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\sams-papelaria\\loja\\components\\Logo\\Cabecalho.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LogoCabecalho = () => __jsx("div", {
  className: "flex-2 flex flex-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("img", {
  src: "/static/logo.jpg",
  className: "logo",
  width: "90%",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (LogoCabecalho);

/***/ }),

/***/ "./components/Style.js":
/*!*****************************!*\
  !*** ./components/Style.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2676204307",
  __self: undefined
}, "body{margin:0;padding:0;}body,*{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;}.container,.container-big{width:calc(100% - 20px);padding:0 10px;max-width:1200px;margin:0 auto;}.container-big{max-width:1440px;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flex-1{-webkit-flex:1;-ms-flex:1;flex:1;}.flex-2{-webkit-flex:2;-ms-flex:2;flex:2;}.flex-3{-webkit-flex:3;-ms-flex:3;flex:3;}.flex-4{-webkit-flex:4;-ms-flex:4;flex:4;}.flex-5{-webkit-flex:5;-ms-flex:5;flex:5;}.flex-6{-webkit-flex:6;-ms-flex:6;flex:6;}.wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrap-1{-webkit-flex-basis:calc(100% - 50px);-ms-flex-preferred-size:calc(100% - 50px);flex-basis:calc(100% - 50px);max-width:calc(100% - 50px);}.wrap-2{-webkit-flex-basis:calc(50% - 50px);-ms-flex-preferred-size:calc(50% - 50px);flex-basis:calc(50% - 50px);max-width:calc(50% - 50px);}.wrap-3{-webkit-flex-basis:calc(32% - 50px);-ms-flex-preferred-size:calc(32% - 50px);flex-basis:calc(32% - 50px);max-width:calc(32% - 50px);}.wrap-4{-webkit-flex-basis:calc(25% - 50px);-ms-flex-preferred-size:calc(25% - 50px);flex-basis:calc(25% - 50px);max-width:calc(25% - 50px);}.wrap-5{-webkit-flex-basis:calc(20% - 50px);-ms-flex-preferred-size:calc(20% - 50px);flex-basis:calc(20% - 50px);max-width:calc(20% - 50px);}.vertical{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flex-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text-center{text-align:center;}select{font-size:1rem;}@media screen and (max-width:720px){.wrap-mb{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrap-2-mb{-webkit-flex-basis:calc(50% - 20px);-ms-flex-preferred-size:calc(50% - 20px);flex-basis:calc(50% - 20px);max-width:calc(50% - 20px);}.produto.wrap-2-mb{-webkit-flex-basis:calc(50% - 50px);-ms-flex-preferred-size:calc(50% - 50px);flex-basis:calc(50% - 50px);max-width:calc(50% - 50px);}.horizontal-mb{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.horizontal{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxzYW1zLXBhcGVsYXJpYVxcbG9qYVxcY29tcG9uZW50c1xcU3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLEFBSWtCLEFBR2tELEFBS25DLEFBS1AsQUFFRCxBQUNKLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUVNLEFBRVcsQUFJRCxBQUlBLEFBSUEsQUFJQSxBQUlDLEFBR04sQUFHSSxBQUdGLEFBSVAsQUFJSCxBQUdVLEFBRU8sQUFJQSxBQUdHLEFBQ0EsU0ExRXpCLE1BNkRNLEVBakRFLENBOEN0QixDQTFEZSxLQVFJLFNBT0YsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLE1BWEksaUJBTnJCLEFBT2tCLENBWUssQUEwQ08sWUFTVSxDQS9EckIsSUFJRSxJQThCYSxBQThCTSxtQkFwQmpCLEVBTkEsTUFuQlEsQUFJQSxBQUlBLEFBSUEsQUFVUixBQWdCWSxBQUlBLEdBOUNILHdCQUtoQyxBQUlBLEFBSUEsQUFJQSxBQTBCSSxBQUlBLElBOUNKLHNEQTRCd0IsRUFOQSxNQUdBIiwiZmlsZSI6IkM6XFxzYW1zLXBhcGVsYXJpYVxcbG9qYVxcY29tcG9uZW50c1xcU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgIFxyXG4gICAgYm9keSB7IFxyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwOyB9XHJcbiAgICBib2R5LCAqIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIsXHJcbiAgICAuY29udGFpbmVyLWJpZyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bzsgfVxyXG4gICAgLmNvbnRhaW5lci1iaWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTQ0MHB4OyB9XHJcblxyXG4gICAgLmZsZXggeyBkaXNwbGF5OiBmbGV4OyB9XHJcbiAgICAuZmxleC0xIHsgZmxleDogMTsgfVxyXG4gICAgLmZsZXgtMiB7IGZsZXg6IDI7IH1cclxuICAgIC5mbGV4LTMgeyBmbGV4OiAzOyB9XHJcbiAgICAuZmxleC00IHsgZmxleDogNDsgfVxyXG4gICAgLmZsZXgtNSB7IGZsZXg6IDU7IH1cclxuICAgIC5mbGV4LTYgeyBmbGV4OiA2OyB9XHJcblxyXG4gICAgLndyYXAgeyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAgIC53cmFwLTEgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtMiB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtMyB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMzIlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDMyJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtNCB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjUlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDI1JSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtNSB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDIwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuXHJcbiAgICAuZmxleC1jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICAgIC5mbGV4LXN0YXJ0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtcmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KXtcclxuICAgICAgICAud3JhcC1tYiB7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4gICAgICAgIC53cmFwLTItbWIge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdXRvLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvcml6b250YWwtbWIgeyBmbGV4LWRpcmVjdGlvbjogcm93OyB9XHJcbiAgICAgICAgLmhvcml6b250YWwgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgICB9XHJcblxyXG4gICAgYH08L3N0eWxlPlxyXG4pIl19 */\n/*@ sourceURL=C:\\\\sams-papelaria\\\\loja\\\\components\\\\Style.js */"));

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, versao, loja, baseImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versao", function() { return versao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loja", function() { return loja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseImg", function() { return baseImg; });
const API = "http://localhost:3000",
      versao = "v1",
      loja = "5f0cd822b0484c2d148b793b",
      baseImg = API + "/public/images/";

/***/ }),

/***/ "./containers/Cabecalho/index.js":
/*!***************************************!*\
  !*** ./containers/Cabecalho/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Logo/Cabecalho */ "./components/Logo/Cabecalho.js");
/* harmony import */ var _components_Campos_Pesquisa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Campos/Pesquisa */ "./components/Campos/Pesquisa.js");
/* harmony import */ var _components_Cards_Carrinho__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Cards/Carrinho */ "./components/Cards/Carrinho.js");
/* harmony import */ var _components_Listas_Categorias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Listas/Categorias */ "./components/Listas/Categorias.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Cabecalho\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Cabecalho extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderCabecalhoNormal() {
    return __jsx("div", {
      className: "Header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "header-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx(_components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }), __jsx(_components_Campos_Pesquisa__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }), __jsx(_components_Cards_Carrinho__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "categorias-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, __jsx(_components_Listas_Categorias__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    })));
  }

  renderCabecalhoSimples() {
    return __jsx("div", {
      className: "Header No-Links Header-Simples",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "header-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx(_components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    })));
  }

  render() {
    const {
      simples
    } = this.props;
    return simples ? this.renderCabecalhoSimples() : this.renderCabecalhoNormal();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cabecalho);

/***/ }),

/***/ "./containers/Carrinho/ListaDeProdutos.js":
/*!************************************************!*\
  !*** ./containers/Carrinho/ListaDeProdutos.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Carrinho\\ListaDeProdutos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class ListaDeProdutos extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderCabecalhoCarrinho(semAlteracoes) {
    return __jsx("div", {
      className: "carrinho-cabecalho no-mb-flex flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "Quantidade")), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "Pre\xE7o Unit\xE1rio")), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, "Pre\xE7o Total")), !semAlteracoes && __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 38
      }
    }));
  }

  changeQuantidade(e, quantidade, item, index) {
    if (Number(e.target.value) < 1) return;
    let novaQuantidade = Number(e.target.value);
    let change = novaQuantidade - quantidade;

    if (novaQuantidade >= item.variacao.quantidade) {
      return alert("Não temos essa quantidade em estoque.");
    }

    Object(_utils_cart__WEBPACK_IMPORTED_MODULE_5__["addCart"])({
      produto: item.produto._id,
      variacao: item.variacao._id,
      quantidade: change,
      precoUnitario: item.precoUnitario
    }, false);
    this.props.updateQuantidade(change, index);
  }

  removerProdutoCarrinho(index) {
    if (window.confirm("Você deseja realmente remover esse produto?")) {
      this.props.removerProduto(index);
    }
  }

  renderProduto(item, semAlteracoes, index) {
    if (!item.variacao || !item.variacao._id || !item.produto || !item.produto._id) return null;
    const foto = item.variacao.fotos && item.variacao.fotos.length > 0 ? item.variacao.fotos[0] : item.produto.fotos[0];
    const nome = item.produto.titulo + " - " + item.variacao.nome;
    const {
      quantidade,
      precoUnitario
    } = item;
    return __jsx("div", {
      key: index,
      className: "carrinho-item flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-4 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "produto-image flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _config__WEBPACK_IMPORTED_MODULE_1__["baseImg"] + foto,
      alt: nome,
      width: "100px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "produto-titulo flex-4 flex flex-start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, nome))), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, semAlteracoes ? __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 26
      }
    }, quantidade) : __jsx("input", {
      type: "number",
      value: quantidade,
      className: "produto-quantidade",
      onChange: e => this.changeQuantidade(e, quantidade, item, index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 26
      }
    })), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(precoUnitario))), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(precoUnitario * quantidade))), !semAlteracoes && __jsx("div", {
      className: "flex-1 flex flex-center",
      onClick: () => this.removerProdutoCarrinho(index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "btn-remover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, "Remover")));
  }

  renderProdutos(semAlteracoes) {
    return this.props.carrinho.map((item, index) => this.renderProduto(item, semAlteracoes, index));
  }

  render() {
    const {
      semAlteracoes,
      carrinho
    } = this.props;
    return __jsx("div", {
      className: "Lista-De-Produtos flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, this.renderCabecalhoCarrinho(semAlteracoes), carrinho && this.renderProdutos(semAlteracoes));
  }

}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(ListaDeProdutos));

/***/ }),

/***/ "./containers/Checkout/CheckoutButton.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/CheckoutButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Checkout\\CheckoutButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CheckoutButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      disabled: false,
      aviso: null
    });

    _defineProperty(this, "toggleDisabled", () => this.setState({
      disabled: !this.state.disabled
    }));
  }

  calcularValorTotal(carrinho, freteSelecionado) {
    const valorProdutos = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0);
    const valorFrete = Number(freteSelecionado.Valor.replace(',', '.'));
    return valorProdutos + valorFrete;
  }

  validarFormulario() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
      dadosCobranca,
      dadosEntregaIgualDadosCobranca,
      CPFboleto,
      numeroCartao,
      nomeCartao,
      mesCartao,
      anoCartao,
      parcelasCartaoSelecionada,
      CVVCartao,
      credit_card_token
    } = this.props.form;
    const {
      tipoPagamentoSelecionado
    } = this.props;
    let temErro = false;
    if (!nome) temErro = true;
    if (!CPF || CPF.length !== 14) temErro = true;
    if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validateCPF"])(CPF)) temErro = true;
    if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true;
    if (!telefone || telefone.length < 11) temErro = true;
    if (!local) temErro = true;
    if (!numero) temErro = true;
    if (!bairro) temErro = true;
    if (!cidade) temErro = true;
    if (!estado) temErro = true;
    if (!CEP || CEP.length !== 9) temErro = true;

    if (!dadosEntregaIgualDadosCobranca) {
      if (!dadosCobranca.local) temErro = true;
      if (!dadosCobranca.numero) temErro = true;
      if (!dadosCobranca.bairro) temErro = true;
      if (!dadosCobranca.cidade) temErro = true;
      if (!dadosCobranca.estado) temErro = true;
      if (!dadosCobranca.CEP || dadosCobranca.CEP.length !== 9) temErro = true;
    }

    if (tipoPagamentoSelecionado === "boleto") {
      if (!CPFboleto && !CPF) temErro = true;
      if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validateCPF"])(CPFboleto)) temErro = true;
    } else {
      if (!numeroCartao || numeroCartao.length !== 19) temErro = true;
      if (!nomeCartao) temErro = true;
      if (!mesCartao || mesCartao.length !== 2) temErro = true;
      if (!anoCartao || anoCartao.length !== 4) temErro = true;
      if (!parcelasCartaoSelecionada) temErro = true;
      if (!credit_card_token) temErro = true;
      if (!CVVCartao || CVVCartao.length !== 3) temErro = true;
    }

    return !temErro;
  }

  validate() {
    const {
      freteSelecionado,
      tipoPagamentoSelecionado
    } = this.props;
    const validarFormulario = this.validarFormulario();
    return validarFormulario && freteSelecionado && tipoPagamentoSelecionado;
  }

  handleSubmit() {
    const {
      form,
      freteSelecionado,
      token,
      senderHash,
      tipoPagamentoSelecionado
    } = this.props;
    const carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_3__["getCart"])();
    const valorTotal = this.calcularValorTotal(carrinho, freteSelecionado);
    if (!this.validate()) return null;
    this.toggleDisabled();
    this.props.novoPedido(form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho, error => {
      console.log('pedido finalizado');

      if (error) {
        this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }

      this.toggleDisabled();
    });
  }

  render() {
    return __jsx("div", {
      className: "flex flex-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_5__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-cta btn-success",
      disabled: this.state.disabled,
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, this.state.disabled ? "ENVIANDO..." : "CONCLUIR PEDIDO")));
  }

}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho,
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  freteSelecionado: state.carrinho.freteSelecionado,
  form: state.checkout.form,
  token: state.auth.token,
  senderHash: state.checkout.senderHash,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_2__["default"])(CheckoutButton));

/***/ }),

/***/ "./containers/Checkout/DadosCliente.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosCliente.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cliente_DadosCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cliente/DadosCliente */ "./containers/Cliente/DadosCliente.js");
/* harmony import */ var _Cliente_ClienteLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cliente/ClienteLogin */ "./containers/Cliente/ClienteLogin.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Checkout\\DadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class DadosCliente extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate() {
    this.fetchCliente();
  }

  fetchCliente() {
    const {
      usuario,
      token,
      cliente
    } = this.props;

    if (usuario && token && !cliente) {
      this.props.fetchCliente(usuario._id, token);
    }
  }

  render() {
    const {
      usuario,
      permissaoInicial,
      permitir
    } = this.props;
    return usuario || permissaoInicial ? __jsx(_Cliente_DadosCliente__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }) : __jsx(_Cliente_ClienteLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
      permitir: permitir,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    });
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosCliente));

/***/ }),

/***/ "./containers/Checkout/DadosEntrega.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosEntrega.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Checkout\\DadosEntrega.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class DadosEntregaContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {
        dadosCobranca: {}
      }
    });

    _defineProperty(this, "onChange", (field, value, prefix) => this.props.setForm({
      [field]: value
    }, prefix).then(() => this.validate()));

    _defineProperty(this, "onChangeCEP", (field, value, prefix) => {
      this.props.setForm({
        [field]: value
      }, prefix).then(() => {
        this.validate();

        if (value.length === 9) {
          axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://viacep.com.br/ws/${value.replace('-', '')}/json/unicode`).then(response => {
            this.props.setForm({
              "local": response.data["logradouro"],
              "bairro": response.data["bairro"],
              "cidade": response.data["localidade"],
              "estado": response.data["uf"]
            }, prefix).then(() => this.validate());
          }).catch(e => console.log(e));
        }
      });
    });
  }

  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cliente && this.props.cliente) {
      this.fetchCliente();
    }
  }

  fetchCliente() {
    const {
      cliente
    } = this.props;
    this.props.setForm({
      dadosEntregaIgualDadosCobranca: true,
      local: cliente ? cliente.endereco.local : "",
      numero: cliente ? cliente.endereco.numero : "",
      bairro: cliente ? cliente.endereco.bairro : "",
      complemento: cliente ? cliente.endereco.complemento : "",
      cidade: cliente ? cliente.endereco.cidade : "",
      estado: cliente ? cliente.endereco.estado : "",
      CEP: cliente ? cliente.endereco.CEP : "",
      dadosCobranca: {
        local: cliente ? cliente.endereco.local : "",
        numero: cliente ? cliente.endereco.numero : "",
        bairro: cliente ? cliente.endereco.bairro : "",
        complemento: cliente ? cliente.endereco.complemento : "",
        cidade: cliente ? cliente.endereco.cidade : "",
        estado: cliente ? cliente.endereco.estado : "",
        CEP: cliente ? cliente.endereco.CEP : ""
      }
    });
  }

  validate() {
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
      dadosCobranca
    } = this.props.form;
    const erros = {
      dadosCobranca: {}
    };
    if (!local) erros.local = "Preencha aqui com o seu endereço";
    if (!numero) erros.numero = "Preencha aqui com o seu número";
    if (!bairro) erros.bairro = "Preencha aqui com o seu bairro";
    if (!cidade) erros.cidade = "Preencha aqui com a sua cidade";
    if (!estado) erros.estado = "Selecione o seu estado";
    if (!CEP || CEP.length !== 9) erros.CEP = "Digite aqui seu CEP";

    if (!dadosEntregaIgualDadosCobranca) {
      if (!dadosCobranca.local) erros.dadosCobranca.local = "Preencha aqui com o seu endereço";
      if (!dadosCobranca.numero) erros.dadosCobranca.numero = "Preencha aqui com o seu número";
      if (!dadosCobranca.bairro) erros.dadosCobranca.bairro = "Preencha aqui com o seu bairro";
      if (!dadosCobranca.cidade) erros.dadosCobranca.cidade = "Preencha aqui com a sua cidade";
      if (!dadosCobranca.estado) erros.dadosCobranca.estado = "Selecione o seu estado";
      if (!dadosCobranca.CEP || dadosCobranca.CEP.length !== 9) erros.dadosCobranca.CEP = "Digite aqui seu CEP";
    }

    this.setState({
      erros
    });
    return Object.keys(erros).length === 1 && Object.keys(erros.dadosCobranca).length === 0;
  }

  renderDadosDeEntrega() {
    if (!this.props.form) return null;
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, "DADOS DE ENTREGA")), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CEP || "",
      erro: erros.CEP,
      name: "CEP",
      placeholder: "12345-789",
      label: "CEP",
      onChange: e => this.onChangeCEP("CEP", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatCEP"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: local || "",
      erro: erros.local,
      name: "local",
      placeholder: "Rua, Avenida, ...",
      label: "Endere\xE7o (Rua, Avenida,..)",
      onChange: e => this.onChange("local", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: numero || "",
      erro: erros.numero,
      name: "numero",
      placeholder: "9999",
      label: "N\xFAmero",
      onChange: e => this.onChange("numero", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: bairro || "",
      erro: erros.bairro,
      name: "bairro",
      placeholder: "Bairro",
      label: "Bairro",
      onChange: e => this.onChange("bairro", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: complemento || "",
      erro: erros.complemento,
      name: "complemento",
      placeholder: "Complemento",
      label: "Complemento",
      onChange: e => this.onChange("complemento", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: cidade || "",
      erro: erros.cidade,
      name: "cidade",
      placeholder: "Cidade",
      label: "Cidade",
      onChange: e => this.onChange("cidade", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex vertical form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, "Estado"), __jsx("select", {
      value: estado,
      onChange: e => this.onChange("estado", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 25
      }
    }, __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 29
      }
    }, "Selecione..."), Object.keys(_utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"]).map(abbr => __jsx("option", {
      key: abbr,
      value: abbr,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 67
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"][abbr]))), erros.estado && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 44
      }
    }, erros.estado))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx("input", {
      checked: dadosEntregaIgualDadosCobranca || true,
      type: "checkbox",
      onChange: () => this.props.setForm({
        "dadosEntregaIgualDadosCobranca": !dadosEntregaIgualDadosCobranca
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }
    }, "\xA0Os dados de entrega s\xE3o iguais aos dados de cobran\xE7a")));
  }

  renderDadosDeCobranca() {
    if (!this.props.form || !this.props.form.dadosCobranca) return null;
    const {
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form.dadosCobranca;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 21
      }
    }, "DADOS DE COBRAN\xC7A")), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CEP || "",
      erro: erros.dadosCobranca.CEP,
      name: "CEP",
      placeholder: "12345-789",
      label: "CEP",
      onChange: e => this.onChangeCEP("CEP", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatCEP"])(e.target.value), 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: local || "",
      erro: erros.dadosCobranca.local,
      name: "local",
      placeholder: "Rua, Avenida, ...",
      label: "Endere\xE7o (Rua, Avenida,..)",
      onChange: e => this.onChange("local", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: numero || "",
      erro: erros.dadosCobranca.numero,
      name: "numero",
      placeholder: "9999",
      label: "N\xFAmero",
      onChange: e => this.onChange("numero", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(e.target.value), 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: bairro || "",
      erro: erros.dadosCobranca.bairro,
      name: "bairro",
      placeholder: "Bairro",
      label: "Bairro",
      onChange: e => this.onChange("bairro", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: complemento || "",
      erro: erros.dadosCobranca.complemento,
      name: "complemento",
      placeholder: "Complemento",
      label: "Complemento",
      onChange: e => this.onChange("complemento", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: cidade || "",
      erro: erros.dadosCobranca.cidade,
      name: "cidade",
      placeholder: "Cidade",
      label: "Cidade",
      onChange: e => this.onChange("cidade", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex vertical form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 25
      }
    }, "Estado"), __jsx("select", {
      value: estado,
      onChange: e => this.onChange("estado", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }, __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 29
      }
    }, "Selecione..."), Object.keys(_utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"]).map(abbr => __jsx("option", {
      key: abbr,
      value: abbr,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 67
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"][abbr]))), erros.dadosCobranca.estado && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 58
      }
    }, erros.dadosCobranca.estado))));
  }

  render() {
    const {
      dadosEntregaIgualDadosCobranca
    } = this.props.form;
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 13
      }
    }, this.renderDadosDeEntrega(), !dadosEntregaIgualDadosCobranca && this.renderDadosDeCobranca());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosEntregaContainer));

/***/ }),

/***/ "./containers/Checkout/DadosFrete.js":
/*!*******************************************!*\
  !*** ./containers/Checkout/DadosFrete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Checkout\\DadosFrete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class DadosFrete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const {
      form
    } = this.props;

    if (form) {
      this.props.calcularFrete(form.CEP, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])());
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.form.CEP !== this.props.form.CEP && this.props.form.CEP.length === 9) {
      this.props.calcularFrete(this.props.form.CEP, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])());
    }
  }

  selecionarFrete(frete) {
    this.props.selecionarFrete(frete);
  }

  render() {
    const {
      fretes,
      freteSelecionado
    } = this.props;
    return __jsx("div", {
      className: "Dados-Frete",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, "M\xC9TODOS DE ENTREGA"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, (fretes || []).map((frete, index) => __jsx("div", {
      className: "flex-1",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "frete_selecionado",
      checked: freteSelecionado ? freteSelecionado.Codigo === frete.Codigo : false,
      onChange: () => this.selecionarFrete(frete),
      label: `
                                        ${_utils__WEBPACK_IMPORTED_MODULE_5__["codigosCorreios"][frete.Codigo]} 
                                        (${frete.PrazoEntrega} dias úteis) - 
                                        ${Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatMoney"])(frete.Valor.replace(',', '.'))}
                                    `,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }
    })))));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  fretes: state.carrinho.fretes,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosFrete));

/***/ }),

/***/ "./containers/Checkout/DadosPagamento.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/DadosPagamento.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Checkout\\DadosPagamento.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class DadosPagamento extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {}
    });

    _defineProperty(this, "onChange", (field, value) => this.props.setForm({
      [field]: value
    }).then(() => this.validate()));
  }

  componentDidMount() {
    this.props.getSessionPagamento();
  }

  componentDidUpdate(prevProps) {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      credit_card_token,
      bandeira_cartao,
      parcelasCartao
    } = this.props.form;

    if (!bandeira_cartao && numeroCartao && numeroCartao.split(' ').join('').length > 7) {
      this.getBrand();
    }

    if (!credit_card_token && numeroCartao && numeroCartao.split(' ').join('').length === 16 && mesCartao && mesCartao.length === 2 && anoCartao && anoCartao.length === 4 && CVVCartao && CVVCartao.length === 3 && bandeira_cartao) this.submitCartaoHash();
    if (!parcelasCartao && bandeira_cartao || parcelasCartao && bandeira_cartao && prevProps.freteSelecionado !== this.props.freteSelecionado) this.getParcelas();
  }

  getBrand() {
    const {
      numeroCartao
    } = this.props.form;
    PagSeguroDirectPayment.getBrand({
      cardBin: numeroCartao.split(' ').join('').slice(0, 6),
      success: r => this.props.setForm({
        bandeira_cartao: r.brand
      }),
      error: r => console.log(r)
    });
  }

  submitCartaoHash() {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      bandeira_cartao
    } = this.props.form;
    const params = {
      cardNumber: numeroCartao.split(' ').join(''),
      brand: bandeira_cartao.name,
      cvv: CVVCartao,
      expirationMonth: mesCartao,
      expirationYear: anoCartao,
      success: r => this.props.setForm({
        credit_card_token: r.card.token
      }),
      error: r => console.log(r)
    };
    PagSeguroDirectPayment.createCardToken(params);
  }

  getParcelas() {
    const {
      freteSelecionado,
      carrinho
    } = this.props;
    const {
      bandeira_cartao
    } = this.props.form;
    let valorTotal = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0);
    let freteValor = Number(freteSelecionado.Valor.replace(',', '.'));
    PagSeguroDirectPayment.getInstallments({
      amount: valorTotal + freteValor,
      maxInstallmentNoInterest: 6,
      maxInstallment: 6,
      brand: bandeira_cartao.name,
      success: data => {
        this.props.setForm({
          parcelasCartao: data.installments
        });
        this.props.setForm({
          parcelasCartaoSelecionada: data.installments[bandeira_cartao.name][0]
        });
      },
      error: r => console.log(r)
    });
  }

  renderOpcoesPagamento() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    return __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tipo_pagamento_selecionado",
      checked: tipoPagamentoSelecionado === 'boleto',
      onChange: () => this.props.setTipoPagamento("boleto"),
      label: "Boleto Banc\xE1rio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tipo_pagamento_selecionado",
      checked: tipoPagamentoSelecionado === 'cartao',
      onChange: () => this.props.setTipoPagamento("cartao"),
      label: "Cart\xE3o de Cr\xE9dito",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    })));
  }

  validate() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    const {
      CPF,
      CPFboleto,
      numeroCartao,
      nomeCartao,
      mesCartao,
      anoCartao,
      parcelasCartaoSelecionada,
      CVVCartao
    } = this.props.form;
    const erros = {};

    if (tipoPagamentoSelecionado === "boleto") {
      if (!CPFboleto && !CPF) erros.CPFboleto = "Preencha aqui com o seu CPF";
      if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_7__["validateCPF"])(CPFboleto)) erros.CPFboleto = "Preencha aqui com o seu CPF corretamente";
    } else {
      if (!numeroCartao || numeroCartao.length !== 19) erros.numeroCartao = "Preencha aqui com o número do seu cartão";
      if (!nomeCartao) erros.nomeCartao = "Preencha aqui com o nome que está no cartão";
      if (!mesCartao || mesCartao.length !== 2) erros.mesCartao = "Preencha aqui com o mês de vencimento do cartão";
      if (!anoCartao || anoCartao.length !== 4) erros.anoCartao = "Preencha aqui com o ano de vencimento do cartão";
      if (!parcelasCartaoSelecionada) erros.parcelasCartaoSelecionada = "Selecione uma forma de pagamento";
      if (!CVVCartao || CVVCartao.length !== 3) erros.CVVCartao = "Preencha aqui com o código de segurança do cartão";
    }

    this.setState({
      erros
    });
    return !(Object.keys(erros).length > 0);
  }

  renderPagamentoComBoleto() {
    const {
      CPF,
      CPFboleto
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "Dados-Pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: CPFboleto || CPF,
      name: "CPF",
      erro: erros.CPFboleto,
      placeholder: "CPF",
      label: "CPF",
      onChange: e => this.onChange("CPFboleto", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatCPF"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }));
  }

  renderPagamentoComCartao() {
    const {
      nomeCartao,
      numeroCartao,
      CVVCartao,
      mesCartao,
      anoCartao,
      parcelasCartao,
      parcelasCartaoSelecionada,
      bandeira_cartao
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "Dados-Pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: nomeCartao,
      erro: erros.nomeCartao,
      name: "nomeCartao",
      placeholder: "Nome como escrito no cart\xE3o",
      label: "Nome Completo no Cart\xE3o",
      onChange: e => this.onChange("nomeCartao", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: numeroCartao,
      erro: erros.numeroCartao,
      name: "numeroCartao",
      placeholder: "XXXX XXXX XXXX XXXX",
      label: "N\xFAmero do Cart\xE3o",
      onChange: e => this.onChange("numeroCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatCartao"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: CVVCartao,
      erro: erros.CVVCartao,
      name: "CVVCartao",
      placeholder: "XXX",
      label: "C\xF3digo de Seguran\xE7a do Cart\xE3o",
      onChange: e => this.onChange("CVVCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 3)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }
    }, "Data de Validade")), __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: mesCartao,
      erro: erros.mesCartao,
      name: "mesCartao",
      placeholder: "MM",
      label: "M\xEAs",
      onChange: e => this.onChange("mesCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 2)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 21
      }
    }), __jsx("span", {
      className: "slash-pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 21
      }
    }, "\xA0/\xA0"), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: anoCartao,
      erro: erros.anoCartao,
      name: "anoCartao",
      placeholder: "AAAA",
      label: "Ano",
      onChange: e => this.onChange("anoCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 4)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 21
      }
    })), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 21
      }
    }, "Parcelas")), parcelasCartao && parcelasCartaoSelecionada && __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 25
      }
    }, __jsx("select", {
      name: "parcela",
      value: parcelasCartaoSelecionada.quantity,
      onChange: e => this.onChange("parcelasCartaoSelecionada", parcelasCartao[bandeira_cartao.name][e.target.value - 1]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 29
      }
    }, !parcelasCartaoSelecionada && __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 37
      }
    }, "Selecione a quantidade de parcelas para pagamento"), parcelasCartao[bandeira_cartao.name].slice(0, 6).map((item, index) => __jsx("option", {
      key: index,
      value: item.quantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 41
      }
    }, item.quantity, "x de ", Object(_utils__WEBPACK_IMPORTED_MODULE_6__["formatMoney"])(item.totalAmount / item.quantity), " sem juros"))), erros.parcelasCartaoSelecionada && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 33
      }
    }, erros.parcelasCartaoSelecionada)));
  }

  render() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    return __jsx("div", {
      className: "Dados-Pagamento-Container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 17
      }
    }, "DADOS DE PAGAMENTO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }
    }), this.renderOpcoesPagamento(), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }
    }), tipoPagamentoSelecionado === 'boleto' && this.renderPagamentoComBoleto(), tipoPagamentoSelecionado === 'cartao' && this.renderPagamentoComCartao());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado,
  sessionId: state.checkout.sessionId,
  senderHash: state.checkout.senderHash,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosPagamento));

/***/ }),

/***/ "./containers/Checkout/DadosPedido.js":
/*!********************************************!*\
  !*** ./containers/Checkout/DadosPedido.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carrinho_ListaDeProdutos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Carrinho/ListaDeProdutos */ "./containers/Carrinho/ListaDeProdutos.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Checkout\\DadosPedido.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DadosPedido extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Dados-Pedido-Container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "DADOS DO PEDIDO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx(_Carrinho_ListaDeProdutos__WEBPACK_IMPORTED_MODULE_1__["default"], {
      semAlteracoes: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DadosPedido);

/***/ }),

/***/ "./containers/Checkout/SubmitDadosCliente.js":
/*!***************************************************!*\
  !*** ./containers/Checkout/SubmitDadosCliente.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Checkout\\SubmitDadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class SubmitDadosCliente extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      aviso: null
    });

    _defineProperty(this, "callback", error => {
      if (!error) {
        this.props.permitir();
        this.setState({
          aviso: null
        });
      } else {
        this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }
    });

    _defineProperty(this, "validate", () => {
      const {
        email,
        senha,
        nome,
        CPF,
        dataDeNascimento,
        telefone,
        local,
        numero,
        bairro,
        cidade,
        estado,
        CEP
      } = this.props.form;
      const {
        usuario
      } = this.props;
      let temErro = false;
      if (!usuario && !email) temErro = true;
      if (!usuario && !senha) temErro = true;
      if (!nome) temErro = true;
      if (!CPF || CPF.length !== 14) temErro = true;
      if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["validateCPF"])(CPF)) temErro = true;
      if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true;
      if (!telefone || telefone.length < 11) temErro = true;
      if (!local) temErro = true;
      if (!numero) temErro = true;
      if (!bairro) temErro = true;
      if (!cidade) temErro = true;
      if (!estado) temErro = true;
      if (!CEP || CEP.length !== 9) temErro = true;
      return !temErro;
    });
  }

  handleSubmit() {
    if (!this.validate()) return null;
    const {
      token,
      form,
      cliente
    } = this.props;
    if (!token) this.props.newCliente(form, this.callback);else this.props.updateCliente(form, cliente._id, token, this.callback);
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_1__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex flex-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-success btn-cta",
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, "CONTINUAR PEDIDO")));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(SubmitDadosCliente));

/***/ }),

/***/ "./containers/Checkout/index.js":
/*!**************************************!*\
  !*** ./containers/Checkout/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DadosCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DadosCliente */ "./containers/Checkout/DadosCliente.js");
/* harmony import */ var _DadosEntrega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DadosEntrega */ "./containers/Checkout/DadosEntrega.js");
/* harmony import */ var _SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitDadosCliente */ "./containers/Checkout/SubmitDadosCliente.js");
/* harmony import */ var _DadosFrete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DadosFrete */ "./containers/Checkout/DadosFrete.js");
/* harmony import */ var _DadosPagamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DadosPagamento */ "./containers/Checkout/DadosPagamento.js");
/* harmony import */ var _DadosPedido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DadosPedido */ "./containers/Checkout/DadosPedido.js");
/* harmony import */ var _CheckoutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckoutButton */ "./containers/Checkout/CheckoutButton.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Checkout\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class CheckoutContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      permissaoInicial: false,
      permissaoCheckout: false
    });
  }

  render() {
    const {
      permissaoInicial,
      permissaoCheckout
    } = this.state;
    const {
      usuario,
      freteSelecionado
    } = this.props;
    return __jsx("div", {
      className: "Checkout container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "CONCLUINDO SEU PEDIDO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }), __jsx(_DadosCliente__WEBPACK_IMPORTED_MODULE_1__["default"], {
      usuario: usuario,
      permissaoInicial: permissaoInicial,
      permitir: () => this.setState({
        permissaoInicial: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), (permissaoInicial || usuario) && __jsx(_DadosEntrega__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 54
      }
    }), (permissaoInicial || usuario) && __jsx(_SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_3__["default"], {
      permitir: () => this.setState({
        permissaoCheckout: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }), permissaoCheckout && __jsx(_DadosFrete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 40
      }
    }), permissaoCheckout && freteSelecionado && __jsx(_DadosPagamento__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 60
      }
    }), permissaoCheckout && freteSelecionado && __jsx(_DadosPedido__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 60
      }
    }), permissaoCheckout && freteSelecionado && __jsx(_CheckoutButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 60
      }
    }));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_9__["default"])(CheckoutContainer));

/***/ }),

/***/ "./containers/Cliente/ClienteLogin.js":
/*!********************************************!*\
  !*** ./containers/Cliente/ClienteLogin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Cliente\\ClienteLogin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ClienteLogin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: "",
      senha: "",
      aviso: null,
      erros: {}
    });

    _defineProperty(this, "onChange", (field, e) => this.setState({
      [field]: e.target.value
    }, () => this.validate()));
  }

  renderAvisoDeRegistro() {
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, "Comprar como Visitante/Realizar Registro"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-success",
      onClick: () => this.props.permitir(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }, "CONTINUAR")));
  }

  validate() {
    const {
      email,
      senha
    } = this.state;
    const erros = {};
    if (!email) erros.email = "Preencha aqui com o seu email";
    if (!senha) erros.senha = "Preencha aqui com a sua senha";
    this.setState({
      erros,
      aviso: null
    });
    return !(Object.keys(erros).length > 0);
  }

  handleSubmit() {
    if (!this.validate()) return null;
    const {
      email,
      senha
    } = this.state;
    this.props.autenticar({
      email,
      password: senha
    }, false, error => {
      if (error) this.setState({
        aviso: {
          status: false,
          message: error.message
        }
      });
    });
  }

  renderFormLogin() {
    const {
      email,
      senha,
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Fazer Login"), __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_4__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: email,
      name: "email",
      label: "E-mail",
      erro: erros.email,
      placeholder: "E-mail",
      onChange: e => this.onChange("email", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: senha,
      name: "senha",
      erro: erros.senha,
      label: "Senha",
      type: "password",
      placeholder: "Senha",
      onChange: e => this.onChange("senha", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-success",
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, "ENTRAR")));
  }

  render() {
    return __jsx("div", {
      className: "Cliente-Login flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, this.renderAvisoDeRegistro(), this.renderFormLogin());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(ClienteLogin));

/***/ }),

/***/ "./containers/Cliente/DadosCliente.js":
/*!********************************************!*\
  !*** ./containers/Cliente/DadosCliente.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Cliente\\DadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class DadosClienteContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {}
    });

    _defineProperty(this, "onChange", (field, e, value) => {
      this.props.setForm({
        [field]: value || e.target.value
      }, null).then(() => this.validate());
    });
  }

  componentDidMount() {
    this.props.setForm({
      email: "",
      senha: "",
      nome: this.props.cliente ? this.props.cliente.nome : "",
      CPF: this.props.cliente ? this.props.cliente.cpf : "",
      telefone: this.props.cliente && this.props.cliente.telefones ? this.props.cliente.telefones[0] : "",
      dataDeNascimento: this.props.cliente ? moment__WEBPACK_IMPORTED_MODULE_4___default()(this.props.cliente.dataDeNascimento).format("DD/MM/YYYY") : ""
    });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cliente && this.props.cliente) {
      const {
        nome,
        cpf,
        telefones,
        dataDeNascimento
      } = this.props.cliente;
      this.props.setForm({
        nome,
        CPF: cpf,
        telefone: telefones[0],
        dataDeNascimento: moment__WEBPACK_IMPORTED_MODULE_4___default()(dataDeNascimento).format("DD/MM/YYYY")
      });
    }
  }

  validate() {
    const {
      email,
      senha,
      nome,
      CPF,
      dataDeNascimento,
      telefone
    } = this.props.form;
    const {
      usuario
    } = this.props;
    const erros = {};
    if (!usuario && !email) erros.email = "Preencha aqui com o seu email";
    if (!usuario && !senha) erros.senha = "Preencha aqui com a sua senha";
    if (!nome) erros.nome = "Preencha aqui com o seu nome";
    if (!CPF || CPF.length !== 14) erros.CPF = "Preencha aqui com o seu CPF";
    if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_5__["validateCPF"])(CPF)) erros.CPF = "Preencha aqui com o seu CPF corretamente";
    if (!dataDeNascimento || dataDeNascimento.length !== 10) erros.dataDeNascimento = "Preencha aqui com a sua data de nascimento";
    if (!telefone || telefone.length < 11) erros.telefone = "Preencha aqui com o seu telefone";
    this.setState({
      erros
    });
    return !(Object.keys(erros).length > 0);
  }

  renderDadosRegistro() {
    const {
      email,
      senha
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: email || "",
      name: "email",
      placeholder: "E-mail",
      label: "E-mail",
      erro: erros.email,
      onChange: e => this.onChange("email", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: senha || "",
      name: "senha",
      placeholder: "Senha",
      label: "Senha",
      type: "password",
      erro: erros.senha,
      onChange: e => this.onChange("senha", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    })));
  }

  renderDadosUsuario() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: nome || "",
      name: "nome",
      placeholder: "Nome",
      label: "Nome",
      erro: erros.nome,
      onChange: e => this.onChange("nome", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CPF || "",
      name: "CPF",
      placeholder: "CPF",
      label: "CPF",
      erro: erros.CPF,
      onChange: e => this.onChange("CPF", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatCPF"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: dataDeNascimento || "",
      erro: erros.dataDeNascimento,
      name: "dataDeNascimento",
      placeholder: "DD/MM/AAAA",
      label: "Data de Nascimento",
      onChange: e => this.onChange("dataDeNascimento", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatDataDeNascimento"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: telefone || "",
      erro: erros.telefone,
      name: "telefone",
      placeholder: "(34) 1234-5678",
      label: "Telefone/Celular",
      onChange: e => this.onChange("telefone", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatTelefone"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }))));
  }

  render() {
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }
    }, "DADOS DO CLIENTE")), !this.props.usuario && this.renderDadosRegistro(), this.renderDadosUsuario());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosClienteContainer));

/***/ }),

/***/ "./containers/Rodape/index.js":
/*!************************************!*\
  !*** ./containers/Rodape/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Listas_Paginas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Listas/Paginas */ "./components/Listas/Paginas.js");
/* harmony import */ var _components_Listas_RedesSociais__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Listas/RedesSociais */ "./components/Listas/RedesSociais.js");
/* harmony import */ var _components_Item_DadosDaLoja__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Item/DadosDaLoja */ "./components/Item/DadosDaLoja.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\containers\\Rodape\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Rodape extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Rodape",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx(_components_Listas_Paginas__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }), __jsx(_components_Listas_RedesSociais__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }), __jsx(_components_Item_DadosDaLoja__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Rodape);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
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

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
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


const createRouter = (...args) => {
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
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
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
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

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
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
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
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
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
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

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

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Cabecalho */ "./containers/Cabecalho/index.js");
/* harmony import */ var _containers_Checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Checkout */ "./containers/Checkout/index.js");
/* harmony import */ var _containers_Rodape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Rodape */ "./containers/Rodape/index.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\pages\\checkout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Checkout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps({
    res
  }) {
    if (res) {
      res.writeHead(302, {
        Location: "/carrinho"
      });
      res.end();
    }

    return {};
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Checkout | Sams Papelaria - Sua melhor escolha",
      pagSeguro: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(_containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      simples: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }), __jsx(_containers_Checkout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx(_containers_Rodape__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }));
  }

}

/***/ }),

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: reauthenticate, getUser, autenticar, desautenticar, updateSenha, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reauthenticate", function() { return reauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autenticar", function() { return autenticar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desautenticar", function() { return desautenticar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSenha", function() { return updateSenha; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");








const reauthenticate = token => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"],
  payload: token
});
const getUser = ({
  token
}) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios`, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
    payload: response.data.usuario
  })).catch(e => console.log(e));
};
const autenticar = ({
  email,
  password
}, goTo = false, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios/login`, {
    email,
    password
  }).then(response => {
    Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_3__["setCookie"])('token', response.data.usuario.token);
    if (goTo) next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(goTo);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR"],
      payload: response.data
    });
    dispatch(Object(_clienteActions__WEBPACK_IMPORTED_MODULE_7__["fetchCliente"])(response.data.usuario._id, response.data.usuario.token));
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_6__["default"])(e)));
};
const desautenticar = () => dispatch => {
  Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_3__["removeCookie"])('token');
  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DESAUTENTICAR"]
  });
};
const updateSenha = (data, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios`, {
    password: data.novaSenha
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
      payload: response.data.usuario
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_6__["default"])(e)));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reauthenticate,
  getUser,
  autenticar,
  desautenticar,
  updateSenha
});

/***/ }),

/***/ "./redux/actions/carrinhoActions.js":
/*!******************************************!*\
  !*** ./redux/actions/carrinhoActions.js ***!
  \******************************************/
/*! exports provided: setCarrinho, cleanCarrinho, fetchProdutoCarrinho, fetchVariacoesCarrinho, calcularFrete, removerProduto, updateQuantidade, selecionarFrete, cleanFretes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCarrinho", function() { return setCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCarrinho", function() { return cleanCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutoCarrinho", function() { return fetchProdutoCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoesCarrinho", function() { return fetchVariacoesCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcularFrete", function() { return calcularFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removerProduto", function() { return removerProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuantidade", function() { return updateQuantidade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selecionarFrete", function() { return selecionarFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanFretes", function() { return cleanFretes; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./redux/types.js");




const setCarrinho = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_CARRINHO"],
  carrinho: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCart"])()
});
const cleanCarrinho = () => {
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["cleanCart"])();
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_CARRINHO"]
  };
};
const fetchProdutoCarrinho = (id, idxCarrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/produtos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_1__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUTO_CARRINHO"],
    payload: response.data,
    idxCarrinho
  })).catch(e => console.log(e));
};
const fetchVariacoesCarrinho = (id, produto, idxCarrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/variacoes/${id}?produto=${produto}&loja=${_config__WEBPACK_IMPORTED_MODULE_1__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VARIACAO_CARRINHO"],
    payload: response.data,
    idxCarrinho
  })).catch(e => console.log(e));
};
const calcularFrete = (cep, carrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/entregas/calcular`, {
    cep,
    carrinho
  }).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VALOR_ENTREGA"],
    payload: response.data,
    cep
  })).catch(e => console.log(e));
};
const removerProduto = index => {
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["removeCart"])(index);
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["REMOVE_PROD_CART"],
    idxCarrinho: index
  };
};
const updateQuantidade = (change, index) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_QTD_CART"],
  change,
  idxCarrinho: index
});
const selecionarFrete = freteSelecionado => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_FRETE_CART"],
  freteSelecionado
});
const cleanFretes = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_FRETES"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  setCarrinho,
  cleanCarrinho,
  fetchProdutoCarrinho,
  fetchVariacoesCarrinho,
  calcularFrete,
  updateQuantidade,
  selecionarFrete,
  removerProduto,
  cleanFretes
});

/***/ }),

/***/ "./redux/actions/categoriaActions.js":
/*!*******************************************!*\
  !*** ./redux/actions/categoriaActions.js ***!
  \*******************************************/
/*! exports provided: fetchCategorias, fetchCategoria, fetchProdutosCategoria, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategorias", function() { return fetchCategorias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategoria", function() { return fetchCategoria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosCategoria", function() { return fetchProdutosCategoria; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



const fetchCategorias = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/disponiveis?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIAS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchCategoria = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchProdutosCategoria = (id, atual = 0, limit = 20) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/${id}/produtos?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${atual}&limit=${limit}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA_PRODUTOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCategorias,
  fetchCategoria,
  fetchProdutosCategoria
});

/***/ }),

/***/ "./redux/actions/checkoutActions.js":
/*!******************************************!*\
  !*** ./redux/actions/checkoutActions.js ***!
  \******************************************/
/*! exports provided: setForm, cleanForm, setTipoPagamento, getSessionPagamento, novoPedido, pagarPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setForm", function() { return setForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanForm", function() { return cleanForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTipoPagamento", function() { return setTipoPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionPagamento", function() { return getSessionPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novoPedido", function() { return novoPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagarPedido", function() { return pagarPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");








const setForm = (payload, prefix) => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_FORM"],
    payload,
    prefix
  });
  return Promise.resolve();
};
const cleanForm = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FORM"]
});
const setTipoPagamento = tipoPagamentoSelecionado => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TIPO_PAGAMENTO"],
  tipoPagamentoSelecionado
});
const getSessionPagamento = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pagamentos/session`).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SESSION_ID"],
      payload: response.data
    });
    PagSeguroDirectPayment.setSessionId(response.data.sessionId);
    let senderHash = PagSeguroDirectPayment.getSenderHash();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SENDER_HASH"],
      senderHash
    });
  }).catch(e => console.log(e));
};
const novoPedido = (form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_3__["getCart"])(), cb = null) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pedidos?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    carrinho,
    entrega: {
      custo: freteSelecionado.Valor.replace(',', '.'),
      tipo: freteSelecionado.Codigo.toString(),
      prazo: freteSelecionado.PrazoEntrega,
      endereco: {
        local: form.local,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado,
        CEP: form.CEP
      }
    },
    pagamento: {
      valor: tipoPagamentoSelecionado === "cartao" ? form.parcelasCartaoSelecionada.totalAmount : valorTotal,
      forma: tipoPagamentoSelecionado === "cartao" ? "creditCard" : "boleto",
      parcelas: tipoPagamentoSelecionado === "cartao" ? form.parcelasCartaoSelecionada.quantity : 1,
      enderecoEntregaIgualCobranca: form.dadosEntregaIgualDadosCobranca,
      endereco: {
        local: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.local : form.local,
        numero: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.numero : form.numero,
        complemento: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.complemento : form.complemento,
        bairro: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.bairro : form.bairro,
        cidade: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.cidade : form.cidade,
        estado: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.estado : form.estado,
        CEP: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.CEP : form.CEP
      },
      cartao: tipoPagamentoSelecionado === "cartao" ? {
        nomeCompleto: form.nomeCartao.trim(),
        codigoArea: form.telefone.slice(0, 2),
        telefone: form.telefone.slice(2).trim(),
        dataDeNascimento: form.dataDeNascimento,
        credit_card_token: form.credit_card_token,
        cpf: form.CPF
      } : undefined
    }
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["NOVO_PEDIDO"],
      payload: response.data
    });
    dispatch(pagarPedido(response.data.pedido.pagamento._id, token, senderHash, cb));
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e)));
};
const pagarPedido = (id, token, senderHash, cb = null) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pagamentos/pagar/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    senderHash
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["PAGAR_PEDIDO"],
      payload: response.data
    });
    cb(null);
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/sucesso');
    dispatch(Object(_carrinhoActions__WEBPACK_IMPORTED_MODULE_7__["cleanCarrinho"])());
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e)));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  setForm,
  cleanForm,
  setTipoPagamento,
  getSessionPagamento,
  novoPedido,
  pagarPedido
});

/***/ }),

/***/ "./redux/actions/clienteActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/clienteActions.js ***!
  \*****************************************/
/*! exports provided: getRawData, fetchCliente, newCliente, updateCliente, logoutCliente, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawData", function() { return getRawData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCliente", function() { return fetchCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCliente", function() { return newCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCliente", function() { return updateCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutCliente", function() { return logoutCliente; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");








const getRawData = data => {
  let _data = data.split('/');

  let ano = _data[2];

  let _mes = Number(_data[1]);

  let mes = _mes < 10 ? "0" + _mes : _mes;

  let _dia = Number(_data[0]) + 1;

  let dia = _dia < 10 ? "0" + _dia : _dia;
  return `${ano}-${mes}-${dia}`;
};
const fetchCliente = (id, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
  }).catch(e => console.log(e));
};
const newCliente = (form, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    nome: form.nome,
    password: form.senha,
    cpf: form.CPF,
    email: form.email,
    telefones: [form.telefone],
    endereco: {
      local: form.local,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      CEP: form.CEP
    },
    dataDeNascimento: getRawData(form.dataDeNascimento)
  }).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
    dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_6__["autenticar"])({
      email: form.email,
      password: form.senha
    }, null, cb));
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const updateCliente = (form, id, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    nome: form.nome,
    cpf: form.CPF,
    telefones: [form.telefone],
    endereco: {
      local: form.local,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      CEP: form.CEP
    },
    dataDeNascimento: getRawData(form.dataDeNascimento)
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const logoutCliente = () => dispatch => {
  dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_6__["desautenticar"])());
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CLIENTE"]
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCliente,
  newCliente,
  updateCliente,
  logoutCliente
});

/***/ }),

/***/ "./redux/actions/errorHandling.js":
/*!****************************************!*\
  !*** ./redux/actions/errorHandling.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const errorHandling = error => {
  console.log(error, error.response ? error.response.data : null);

  if (!error.response || !error.response.data) {
    return {
      status: 500,
      message: "Ocorreu um erro no servidor. Tente novamente."
    };
  }

  if (error.response.data.status === 401) {
    return {
      status: 401,
      message: "Você não tem autorização para acessar esses dados."
    };
  }

  const _errors = error.response.data.errors || error.response.data.error;

  if (_errors && typeof _errors === "string") return {
    status: 400,
    message: _errors
  };
  let msg = 'Erro: ';

  if (!Array.isArray(_errors)) {
    Object.keys(_errors).forEach((erro, index) => {
      msg += `${erro}${_errors[erro].message || (_errors[erro].properties ? _errors[erro].properties.message : "") || _errors[erro]}\n`;
    });
  } else {
    msg += `Preencha corretamente ${_errors.length > 1 ? "os campos " : "o campo "} de:`;

    _errors.forEach((item, index) => {
      const field = item.field[item.field.length - 1];
      msg += ` ${field}${index === _errors.length - 1 ? "." : ","}`;
    });
  }

  return {
    status: 400,
    message: msg
  };
};

/* harmony default export */ __webpack_exports__["default"] = (errorHandling);

/***/ }),

/***/ "./redux/actions/helpers.js":
/*!**********************************!*\
  !*** ./redux/actions/helpers.js ***!
  \**********************************/
/*! exports provided: getHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
const getHeaders = token => ({
  headers: {
    "Authorization": `Ecommerce ${token}`
  }
});

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _categoriaActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoriaActions */ "./redux/actions/categoriaActions.js");
/* harmony import */ var _lojaActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lojaActions */ "./redux/actions/lojaActions.js");
/* harmony import */ var _produtoActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtoActions */ "./redux/actions/produtoActions.js");
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");
/* harmony import */ var _checkoutActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkoutActions */ "./redux/actions/checkoutActions.js");
/* harmony import */ var _pedidoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pedidoActions */ "./redux/actions/pedidoActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _authActions__WEBPACK_IMPORTED_MODULE_0__["default"]), _categoriaActions__WEBPACK_IMPORTED_MODULE_1__["default"]), _lojaActions__WEBPACK_IMPORTED_MODULE_2__["default"]), _produtoActions__WEBPACK_IMPORTED_MODULE_3__["default"]), _carrinhoActions__WEBPACK_IMPORTED_MODULE_4__["default"]), _clienteActions__WEBPACK_IMPORTED_MODULE_5__["default"]), _checkoutActions__WEBPACK_IMPORTED_MODULE_6__["default"]), _pedidoActions__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "./redux/actions/lojaActions.js":
/*!**************************************!*\
  !*** ./redux/actions/lojaActions.js ***!
  \**************************************/
/*! exports provided: fetchDadosLoja, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDadosLoja", function() { return fetchDadosLoja; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



const fetchDadosLoja = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/lojas/${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DADOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDadosLoja
});

/***/ }),

/***/ "./redux/actions/pedidoActions.js":
/*!****************************************!*\
  !*** ./redux/actions/pedidoActions.js ***!
  \****************************************/
/*! exports provided: fetchPedidos, fetchPedido, cancelarPedido, cleanPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedidos", function() { return fetchPedidos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedido", function() { return fetchPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelarPedido", function() { return cancelarPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPedido", function() { return cleanPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");






const fetchPedidos = ({
  offset,
  limit,
  token
}) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}&offset=${offset}&limit=${limit}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchPedido = (id, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDO"],
    payload: response.data
  })).catch(e => console.log(e));
};
const cancelarPedido = (id, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CANCELAR_PEDIDO"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_4__["default"])(e)));
};
const cleanPedido = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_PEDIDO"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchPedidos,
  fetchPedido,
  cancelarPedido,
  cleanPedido
});

/***/ }),

/***/ "./redux/actions/produtoActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/produtoActions.js ***!
  \*****************************************/
/*! exports provided: fetchProdutosPaginaInicial, fetchTermo, fetchProdutosPesquisa, fetchProduto, fetchAvaliacoes, fetchVariacoes, novaAvaliacao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPaginaInicial", function() { return fetchProdutosPaginaInicial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTermo", function() { return fetchTermo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPesquisa", function() { return fetchProdutosPesquisa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduto", function() { return fetchProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvaliacoes", function() { return fetchAvaliacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoes", function() { return fetchVariacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novaAvaliacao", function() { return novaAvaliacao; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");




const fetchProdutosPaginaInicial = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/disponiveis?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${0}&limit=${4}&sortType=${"preco-crescente"}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchTermo = termo => ({
  type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PESQUISA"],
  termo
});
const fetchProdutosPesquisa = (termo, atual = 0, limit = 20) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/search/${termo}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${atual}&limit=${limit}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS_PESQUISA"],
    payload: response.data,
    termo
  })).catch(e => console.log(e));
};
const fetchProduto = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchAvaliacoes = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}/avaliacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&id=${id}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_AVALIACOES"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchVariacoes = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}/variacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&id=${id}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_VARIACOES"],
    payload: response.data
  })).catch(e => console.log(e));
};
const novaAvaliacao = ({
  nome,
  token,
  produto,
  texto,
  pontuacao
}, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/avaliacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&produto=${produto}`, {
    nome,
    texto,
    pontuacao
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["NOVA_AVALIACAO"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchProdutosPaginaInicial,
  fetchTermo,
  fetchProdutosPesquisa,
  fetchProduto,
  fetchAvaliacoes,
  fetchVariacoes,
  novaAvaliacao
});

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: REGISTER, AUTENTICAR_TOKEN, USER, AUTENTICAR, FETCH_CATEGORIAS, FETCH_DADOS, FETCH_PRODUTOS, FETCH_CATEGORIA, FETCH_CATEGORIA_PRODUTOS, FETCH_PESQUISA, FETCH_PRODUTOS_PESQUISA, FETCH_PRODUTO, FETCH_PRODUTO_AVALIACOES, FETCH_PRODUTO_VARIACOES, NOVA_AVALIACAO, SET_CARRINHO, CLEAN_CARRINHO, FETCH_PRODUTO_CARRINHO, FETCH_VARIACAO_CARRINHO, FETCH_VALOR_ENTREGA, UPDATE_QTD_CART, UPDATE_FRETE_CART, REMOVE_PROD_CART, CLEAN_FRETES, FETCH_CLIENTE, SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH, NOVO_PEDIDO, PAGAR_PEDIDO, LOGOUT_CLIENTE, DESAUTENTICAR, FETCH_PEDIDOS, FETCH_PEDIDO, CLEAN_PEDIDO, CANCELAR_PEDIDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR_TOKEN", function() { return AUTENTICAR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR", function() { return AUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIAS", function() { return FETCH_CATEGORIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DADOS", function() { return FETCH_DADOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS", function() { return FETCH_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA", function() { return FETCH_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA_PRODUTOS", function() { return FETCH_CATEGORIA_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PESQUISA", function() { return FETCH_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_PESQUISA", function() { return FETCH_PRODUTOS_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO", function() { return FETCH_PRODUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_AVALIACOES", function() { return FETCH_PRODUTO_AVALIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_VARIACOES", function() { return FETCH_PRODUTO_VARIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVA_AVALIACAO", function() { return NOVA_AVALIACAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CARRINHO", function() { return SET_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_CARRINHO", function() { return CLEAN_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_CARRINHO", function() { return FETCH_PRODUTO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VARIACAO_CARRINHO", function() { return FETCH_VARIACAO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VALOR_ENTREGA", function() { return FETCH_VALOR_ENTREGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QTD_CART", function() { return UPDATE_QTD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRETE_CART", function() { return UPDATE_FRETE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PROD_CART", function() { return REMOVE_PROD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FRETES", function() { return CLEAN_FRETES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENTE", function() { return FETCH_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FORM", function() { return SET_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FORM", function() { return CLEAN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TIPO_PAGAMENTO", function() { return SET_TIPO_PAGAMENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SESSION_ID", function() { return FETCH_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SENDER_HASH", function() { return FETCH_SENDER_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVO_PEDIDO", function() { return NOVO_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGAR_PEDIDO", function() { return PAGAR_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_CLIENTE", function() { return LOGOUT_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESAUTENTICAR", function() { return DESAUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDOS", function() { return FETCH_PEDIDOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDO", function() { return FETCH_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_PEDIDO", function() { return CLEAN_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCELAR_PEDIDO", function() { return CANCELAR_PEDIDO; });
const REGISTER = "register",
      AUTENTICAR_TOKEN = "AUTENTICAR_TOKEN",
      USER = "user",
      AUTENTICAR = 'AUTENTICAR',
      FETCH_CATEGORIAS = "fetch_categorias",
      FETCH_DADOS = 'fetch_dados',
      FETCH_PRODUTOS = "FETCH_PRODUTOS",
      FETCH_CATEGORIA = 'FETCH_CATEGORIA',
      FETCH_CATEGORIA_PRODUTOS = 'FETCH_CATEGORIA_PRODUTOS',
      FETCH_PESQUISA = 'FETCH_PESQUISA',
      FETCH_PRODUTOS_PESQUISA = 'FETCH_PRODUTOS_PESQUISA',
      FETCH_PRODUTO = 'FETCH_PRODUTO',
      FETCH_PRODUTO_AVALIACOES = 'FETCH_PRODUTO_AVALIACOES',
      FETCH_PRODUTO_VARIACOES = 'FETCH_PRODUTO_VARIACOES',
      NOVA_AVALIACAO = 'NOVA_AVALIACAO',
      SET_CARRINHO = 'SET_CARRINHO',
      CLEAN_CARRINHO = 'CLEAN_CARRINHO',
      FETCH_PRODUTO_CARRINHO = 'FETCH_PRODUTO_CARRINHO',
      FETCH_VARIACAO_CARRINHO = 'FETCH_VARIACAO_CARRINHO',
      FETCH_VALOR_ENTREGA = 'FETCH_VALOR_ENTREGA',
      UPDATE_QTD_CART = 'UPDATE_QTD_CART',
      UPDATE_FRETE_CART = 'UPDATE_FRETE_CART',
      REMOVE_PROD_CART = 'REMOVE_PROD_CART',
      CLEAN_FRETES = 'CLEAN_FRETES',
      FETCH_CLIENTE = 'FETCH_CLIENTE',
      SET_FORM = 'SET_FORM',
      CLEAN_FORM = 'CLEAN_FORM',
      SET_TIPO_PAGAMENTO = 'SET_TIPO_PAGAMENTO',
      FETCH_SESSION_ID = 'FETCH_SESSION_ID',
      FETCH_SENDER_HASH = 'FETCH_SENDER_HASH',
      NOVO_PEDIDO = 'NOVO_PEDIDO',
      PAGAR_PEDIDO = 'PAGAR_PEDIDO',
      LOGOUT_CLIENTE = 'LOGOUT_CLIENTE',
      DESAUTENTICAR = 'DESAUTENTICAR',
      FETCH_PEDIDOS = 'FETCH_PEDIDOS',
      FETCH_PEDIDO = 'FETCH_PEDIDO',
      CLEAN_PEDIDO = 'CLEAN_PEDIDO',
      CANCELAR_PEDIDO = 'CANCELAR_PEDIDO';

/***/ }),

/***/ "./utils/cart.js":
/*!***********************!*\
  !*** ./utils/cart.js ***!
  \***********************/
/*! exports provided: getCart, cleanCart, addCart, getCountItemsCart, removeCart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCart", function() { return cleanCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCart", function() { return addCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountItemsCart", function() { return getCountItemsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCart", function() { return removeCart; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const _saveCart = item => {
  let cart = getCart();
  let found;
  cart = cart.map(_item => {
    if (_item.produto === item.produto && _item.variacao === item.variacao) {
      found = true;
      return _objectSpread(_objectSpread({}, _item), {}, {
        quantidade: Number(_item.quantidade) + Number(item.quantidade)
      });
    } else return _item;
  });
  if (!found) cart.push(item);
  localStorage.setItem("@cart", JSON.stringify(cart));
};

const getCart = () => JSON.parse(localStorage.getItem("@cart") || "[]");
const cleanCart = () => localStorage.removeItem("@cart");
const addCart = (item, goToCart = true) => {
  _saveCart(item);

  if (goToCart) next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/carrinho");
};
const getCountItemsCart = () => getCart().reduce((c, {
  quantidade
}) => c + (Number(quantidade) || 1), 0);
const removeCart = index => {
  let cart = getCart();
  cart = cart.reduce((all, item, _index) => index !== _index ? all.concat([item]) : all, []);
  localStorage.setItem("@cart", JSON.stringify(cart));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getCart,
  addCart,
  cleanCart,
  getCountItemsCart,
  removeCart
});

/***/ }),

/***/ "./utils/cookie.js":
/*!*************************!*\
  !*** ./utils/cookie.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) return undefined;

  const _cookie = req.headers.cookie.split(";").find(c => c.trim().startsWith(`${key}=`));

  return _cookie ? _cookie.split("=")[1] : undefined;
};

/***/ }),

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: numberPattern, formatCEP, formatCPF, formatDataDeNascimento, formatTelefone, formatNumber, formatCartao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberPattern", function() { return numberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCEP", function() { return formatCEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCPF", function() { return formatCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataDeNascimento", function() { return formatDataDeNascimento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTelefone", function() { return formatTelefone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCartao", function() { return formatCartao; });
const numberPattern = /\d+/g;
const formatCEP = value => {
  const auxCep = (value || "").match(numberPattern);

  const _cep = (auxCep || []).join('');

  return _cep.length > 5 ? _cep.slice(0, 5) + '-' + _cep.slice(5, 8) : _cep;
};
const formatCPF = value => {
  const auxCPF = (value || "").match(numberPattern);

  const _CPF = (auxCPF || []).join('');

  if (_CPF.length > 9) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9) + '-' + _CPF.slice(9, 11);
  if (_CPF.length > 6) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9);
  if (_CPF.length > 3) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6);
  return _CPF;
};
const formatDataDeNascimento = value => {
  const auxData = (value || "").match(numberPattern);

  const _data = (auxData || []).join('');

  if (_data.length > 4) return _data.slice(0, 2) + '/' + _data.slice(2, 4) + '/' + _data.slice(4, 8);
  if (_data.length > 2) return _data.slice(0, 2) + '/' + _data.slice(2, 4);
  return _data;
};
const formatTelefone = value => {
  const auxTelefone = (value || "").match(numberPattern);

  const _telefone = (auxTelefone || []).join('');

  return _telefone.length > 2 ? _telefone.slice(0, 2) + ' ' + _telefone.slice(2, 12) : _telefone;
};
const formatNumber = (value, limit) => {
  const auxN = (value || "").match(numberPattern);

  const _n = (auxN || []).join('');

  return limit ? _n.slice(0, limit) : _n;
};
const formatCartao = value => {
  const auxCartao = (value || "").match(numberPattern);

  const _cartao = (auxCartao || []).join('');

  if (_cartao.length > 12) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8) + ' ' + _cartao.slice(8, 12) + ' ' + _cartao.slice(12, 16);
  if (_cartao.length > 8) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8) + ' ' + _cartao.slice(8, 12);
  if (_cartao.length > 4) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8);
  return _cartao;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  numberPattern,
  formatCEP,
  formatCPF,
  formatDataDeNascimento,
  formatTelefone,
  formatNumber,
  formatCartao
});

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: formatMoney, codigosCorreios, ESTADOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codigosCorreios", function() { return codigosCorreios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESTADOS", function() { return ESTADOS; });
const formatMoney = value => "R$ " + Number(value || 0).toFixed(2).replace(".", ",");
const codigosCorreios = {
  "40010": "Sedex",
  "41106": "PAC"
};
const ESTADOS = {
  "AC": "Acre",
  "AL": "Alagoas",
  "AP": "Amapá",
  "AM": "Amazonas",
  "BA": "Bahia",
  "CE": "Ceará",
  "DF": "Distrito Federal",
  "ES": "Espírito Santo",
  "GO": "Goiás",
  "MA": "Maranhão",
  "MT": "Mato Grosso",
  "MS": "Mato Grosso do Sul",
  "MG": "Minas Gerais",
  "PA": "Pará",
  "PB": "Paraíba",
  "PR": "Paraná",
  "PE": "Pernambuco",
  "PI": "Piauí",
  "RJ": "Rio de Janeiro",
  "RN": "Rio Grande do Norte",
  "RS": "Rio Grande do Sul",
  "RO": "Rondônia",
  "RR": "Roraima",
  "SC": "Santa Catarina",
  "SP": "São Paulo",
  "SE": "Sergipe",
  "TO": "Tocantins"
};

/***/ }),

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: onlyNumbers, validateCPF, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return onlyNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateCPF", function() { return validateCPF; });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./utils/format.js");

const onlyNumbers = value => {
  const auxCep = (value || "").match(_format__WEBPACK_IMPORTED_MODULE_0__["numberPattern"]);
  return (auxCep || []).join("");
};
const validateCPF = _strCPF => {
  const strCPF = onlyNumbers(_strCPF);
  if (strCPF.length !== 11) return false;
  let soma;
  let resto;
  soma = 0;
  if (strCPF == "00000000000") return false;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCPF.substring(9, 10))) return false;
  soma = 0;

  for (var j = 1; j <= 10; j++) {
    soma = soma + parseInt(strCPF.substring(j - 1, j)) * (12 - j);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  validateCPF,
  onlyNumbers
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsZXJ0L0dlcmFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FtcG9zL1Blc3F1aXNhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZHMvQ2FycmluaG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1SYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtU2ltcGxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW0vRGFkb3NEYUxvamEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0YXMvQ2F0ZWdvcmlhcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3Rhcy9QYWdpbmFzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdGFzL1JlZGVzU29jaWFpcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28vQ2FiZWNhbGhvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2FiZWNhbGhvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2FycmluaG8vTGlzdGFEZVByb2R1dG9zLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2hlY2tvdXQvQ2hlY2tvdXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc0NsaWVudGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc0VudHJlZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc0ZyZXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2hlY2tvdXQvRGFkb3NQYWdhbWVudG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc1BlZGlkby5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L1N1Ym1pdERhZG9zQ2xpZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2xpZW50ZS9DbGllbnRlTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DbGllbnRlL0RhZG9zQ2xpZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1JvZGFwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NhcnJpbmhvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NhdGVnb3JpYUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jaGVja291dEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jbGllbnRlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2Vycm9ySGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9sb2phQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3BlZGlkb0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9wcm9kdXRvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQWxlcnRHZXJhbCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiYXZpc28iLCJtZXNzYWdlIiwiUGVzcXVpc2EiLCJ0ZXJtbyIsInN1Ym1pdFBlc3F1aXNhIiwic3RhdGUiLCJmZXRjaFRlcm1vIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbm5lY3QiLCJhY3Rpb25zIiwiQ2FyZENhcnJpbmhvIiwiY2FydFF0ZCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q291bnRJdGVtc0NhcnQiLCJkZWZhdWx0RGVzY3JpY2FvIiwiZGVmYXVsdE9HVVJMIiwiZGVmYXVsdE9HSW1hZ2UiLCJIZWFkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsIm9nSW1hZ2UiLCJwYWdTZWd1cm8iLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsInN0cmluZyIsIkZvcm1SYWRpbyIsIm5hbWUiLCJjaGVja2VkIiwibGFiZWwiLCJvbkNoYW5nZSIsIkZvcm1TaW1wbGVzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZXJybyIsIkRhZG9zRGFMb2phIiwiUmVhY3QiLCJsb2phIiwibm9tZSIsImNucGoiLCJlbWFpbCIsImVuZGVyZWNvIiwidGVsZWZvbmVzIiwibWFwIiwidGVsZWZvbmUiLCJpbmRleCIsImxvY2FsIiwibnVtZXJvIiwiYmFpcnJvIiwiY2lkYWRlIiwiZXN0YWRvIiwiQ0VQIiwibWFwU3RhdGVUb1Byb3BzIiwiTGF5b3V0IiwiaW1hZ2UiLCJDYXRlZ29yaWFzIiwiY2F0ZWdvcmlhcyIsImNhdGVnb3JpYSIsIl9pZCIsIlBhZ2luYXMiLCJSRURFU19TT0NJQUlTIiwiUmVkZXNTb2NpYWlzIiwiaXRlbSIsImlkeCIsIkxvZ29DYWJlY2FsaG8iLCJBUEkiLCJ2ZXJzYW8iLCJiYXNlSW1nIiwiQ2FiZWNhbGhvIiwicmVuZGVyQ2FiZWNhbGhvTm9ybWFsIiwicmVuZGVyQ2FiZWNhbGhvU2ltcGxlcyIsInNpbXBsZXMiLCJMaXN0YURlUHJvZHV0b3MiLCJyZW5kZXJDYWJlY2FsaG9DYXJyaW5obyIsInNlbUFsdGVyYWNvZXMiLCJjaGFuZ2VRdWFudGlkYWRlIiwicXVhbnRpZGFkZSIsIk51bWJlciIsIm5vdmFRdWFudGlkYWRlIiwiY2hhbmdlIiwidmFyaWFjYW8iLCJhbGVydCIsImFkZENhcnQiLCJwcm9kdXRvIiwicHJlY29Vbml0YXJpbyIsInVwZGF0ZVF1YW50aWRhZGUiLCJyZW1vdmVyUHJvZHV0b0NhcnJpbmhvIiwid2luZG93IiwiY29uZmlybSIsInJlbW92ZXJQcm9kdXRvIiwicmVuZGVyUHJvZHV0byIsImZvdG8iLCJmb3RvcyIsImxlbmd0aCIsInRpdHVsbyIsImZvcm1hdE1vbmV5IiwicmVuZGVyUHJvZHV0b3MiLCJjYXJyaW5obyIsIkNoZWNrb3V0QnV0dG9uIiwiZGlzYWJsZWQiLCJjYWxjdWxhclZhbG9yVG90YWwiLCJmcmV0ZVNlbGVjaW9uYWRvIiwidmFsb3JQcm9kdXRvcyIsInJlZHVjZSIsImFsbCIsInZhbG9yRnJldGUiLCJWYWxvciIsInJlcGxhY2UiLCJ2YWxpZGFyRm9ybXVsYXJpbyIsIkNQRiIsImRhdGFEZU5hc2NpbWVudG8iLCJkYWRvc0NvYnJhbmNhIiwiZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhIiwiQ1BGYm9sZXRvIiwibnVtZXJvQ2FydGFvIiwibm9tZUNhcnRhbyIsIm1lc0NhcnRhbyIsImFub0NhcnRhbyIsInBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEiLCJDVlZDYXJ0YW8iLCJjcmVkaXRfY2FyZF90b2tlbiIsImZvcm0iLCJ0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8iLCJ0ZW1FcnJvIiwidmFsaWRhdGVDUEYiLCJ2YWxpZGF0ZSIsImhhbmRsZVN1Ym1pdCIsInRva2VuIiwic2VuZGVySGFzaCIsImdldENhcnQiLCJ2YWxvclRvdGFsIiwidG9nZ2xlRGlzYWJsZWQiLCJub3ZvUGVkaWRvIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwidXN1YXJpbyIsImF1dGgiLCJjbGllbnRlIiwiY2hlY2tvdXQiLCJEYWRvc0NsaWVudGUiLCJmZXRjaENsaWVudGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwZXJtaXNzYW9JbmljaWFsIiwicGVybWl0aXIiLCJEYWRvc0VudHJlZ2FDb250YWluZXIiLCJlcnJvcyIsImZpZWxkIiwicHJlZml4Iiwic2V0Rm9ybSIsInRoZW4iLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwicHJldlByb3BzIiwiY29tcGxlbWVudG8iLCJPYmplY3QiLCJrZXlzIiwicmVuZGVyRGFkb3NEZUVudHJlZ2EiLCJvbkNoYW5nZUNFUCIsImZvcm1hdENFUCIsImZvcm1hdE51bWJlciIsIkVTVEFET1MiLCJhYmJyIiwicmVuZGVyRGFkb3NEZUNvYnJhbmNhIiwiRGFkb3NGcmV0ZSIsImNhbGN1bGFyRnJldGUiLCJzZWxlY2lvbmFyRnJldGUiLCJmcmV0ZSIsImZyZXRlcyIsIkNvZGlnbyIsImNvZGlnb3NDb3JyZWlvcyIsIlByYXpvRW50cmVnYSIsIkRhZG9zUGFnYW1lbnRvIiwiZ2V0U2Vzc2lvblBhZ2FtZW50byIsImJhbmRlaXJhX2NhcnRhbyIsInBhcmNlbGFzQ2FydGFvIiwic3BsaXQiLCJqb2luIiwiZ2V0QnJhbmQiLCJzdWJtaXRDYXJ0YW9IYXNoIiwiZ2V0UGFyY2VsYXMiLCJQYWdTZWd1cm9EaXJlY3RQYXltZW50IiwiY2FyZEJpbiIsInNsaWNlIiwic3VjY2VzcyIsInIiLCJicmFuZCIsInBhcmFtcyIsImNhcmROdW1iZXIiLCJjdnYiLCJleHBpcmF0aW9uTW9udGgiLCJleHBpcmF0aW9uWWVhciIsImNhcmQiLCJjcmVhdGVDYXJkVG9rZW4iLCJmcmV0ZVZhbG9yIiwiZ2V0SW5zdGFsbG1lbnRzIiwiYW1vdW50IiwibWF4SW5zdGFsbG1lbnROb0ludGVyZXN0IiwibWF4SW5zdGFsbG1lbnQiLCJpbnN0YWxsbWVudHMiLCJyZW5kZXJPcGNvZXNQYWdhbWVudG8iLCJzZXRUaXBvUGFnYW1lbnRvIiwicmVuZGVyUGFnYW1lbnRvQ29tQm9sZXRvIiwiZm9ybWF0Q1BGIiwicmVuZGVyUGFnYW1lbnRvQ29tQ2FydGFvIiwiZm9ybWF0Q2FydGFvIiwicXVhbnRpdHkiLCJ0b3RhbEFtb3VudCIsInNlc3Npb25JZCIsIkRhZG9zUGVkaWRvIiwiU3VibWl0RGFkb3NDbGllbnRlIiwic2VuaGEiLCJuZXdDbGllbnRlIiwiY2FsbGJhY2siLCJ1cGRhdGVDbGllbnRlIiwiQ2hlY2tvdXRDb250YWluZXIiLCJwZXJtaXNzYW9DaGVja291dCIsIkNsaWVudGVMb2dpbiIsInJlbmRlckF2aXNvRGVSZWdpc3RybyIsImF1dGVudGljYXIiLCJwYXNzd29yZCIsInJlbmRlckZvcm1Mb2dpbiIsIkRhZG9zQ2xpZW50ZUNvbnRhaW5lciIsImNwZiIsIm1vbWVudCIsImZvcm1hdCIsInJlbmRlckRhZG9zUmVnaXN0cm8iLCJyZW5kZXJEYWRvc1VzdWFyaW8iLCJmb3JtYXREYXRhRGVOYXNjaW1lbnRvIiwiZm9ybWF0VGVsZWZvbmUiLCJSb2RhcGUiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsImFzIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJwIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwicHJvY2VzcyIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwia2V5Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ2hlY2tvdXQiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInJlYXV0aGVudGljYXRlIiwiQVVURU5USUNBUl9UT0tFTiIsInBheWxvYWQiLCJnZXRVc2VyIiwiZGlzcGF0Y2giLCJnZXRIZWFkZXJzIiwiVVNFUiIsImdvVG8iLCJwb3N0Iiwic2V0Q29va2llIiwiQVVURU5USUNBUiIsImVycm9ySGFuZGxpbmciLCJkZXNhdXRlbnRpY2FyIiwicmVtb3ZlQ29va2llIiwiREVTQVVURU5USUNBUiIsInVwZGF0ZVNlbmhhIiwicHV0Iiwibm92YVNlbmhhIiwic2V0Q2FycmluaG8iLCJTRVRfQ0FSUklOSE8iLCJjbGVhbkNhcnJpbmhvIiwiY2xlYW5DYXJ0IiwiQ0xFQU5fQ0FSUklOSE8iLCJmZXRjaFByb2R1dG9DYXJyaW5obyIsImlkIiwiaWR4Q2FycmluaG8iLCJGRVRDSF9QUk9EVVRPX0NBUlJJTkhPIiwiZmV0Y2hWYXJpYWNvZXNDYXJyaW5obyIsIkZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPIiwiY2VwIiwiRkVUQ0hfVkFMT1JfRU5UUkVHQSIsInJlbW92ZUNhcnQiLCJSRU1PVkVfUFJPRF9DQVJUIiwiVVBEQVRFX1FURF9DQVJUIiwiVVBEQVRFX0ZSRVRFX0NBUlQiLCJjbGVhbkZyZXRlcyIsIkNMRUFOX0ZSRVRFUyIsImZldGNoQ2F0ZWdvcmlhcyIsIkZFVENIX0NBVEVHT1JJQVMiLCJmZXRjaENhdGVnb3JpYSIsIkZFVENIX0NBVEVHT1JJQSIsImZldGNoUHJvZHV0b3NDYXRlZ29yaWEiLCJhdHVhbCIsImxpbWl0IiwiRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TIiwiU0VUX0ZPUk0iLCJyZXNvbHZlIiwiY2xlYW5Gb3JtIiwiQ0xFQU5fRk9STSIsIlNFVF9USVBPX1BBR0FNRU5UTyIsIkZFVENIX1NFU1NJT05fSUQiLCJzZXRTZXNzaW9uSWQiLCJnZXRTZW5kZXJIYXNoIiwiRkVUQ0hfU0VOREVSX0hBU0giLCJlbnRyZWdhIiwiY3VzdG8iLCJ0aXBvIiwidG9TdHJpbmciLCJwcmF6byIsInBhZ2FtZW50byIsInZhbG9yIiwiZm9ybWEiLCJwYXJjZWxhcyIsImVuZGVyZWNvRW50cmVnYUlndWFsQ29icmFuY2EiLCJjYXJ0YW8iLCJub21lQ29tcGxldG8iLCJ0cmltIiwiY29kaWdvQXJlYSIsInVuZGVmaW5lZCIsIk5PVk9fUEVESURPIiwicGFnYXJQZWRpZG8iLCJwZWRpZG8iLCJQQUdBUl9QRURJRE8iLCJnZXRSYXdEYXRhIiwiX2RhdGEiLCJhbm8iLCJfbWVzIiwibWVzIiwiX2RpYSIsImRpYSIsIkZFVENIX0NMSUVOVEUiLCJsb2dvdXRDbGllbnRlIiwiTE9HT1VUX0NMSUVOVEUiLCJfZXJyb3JzIiwiZXJyb3JzIiwibXNnIiwiaXNBcnJheSIsImZvckVhY2giLCJwcm9wZXJ0aWVzIiwiaGVhZGVycyIsImF1dGhBY3Rpb25zIiwiY2F0ZWdvcmlhQWN0aW9ucyIsImxvamFBY3Rpb25zIiwicHJvZHV0b0FjdGlvbnMiLCJjYXJyaW5ob0FjdGlvbnMiLCJjbGllbnRlQWN0aW9ucyIsImNoZWNrb3V0QWN0aW9ucyIsInBlZGlkb0FjdGlvbnMiLCJmZXRjaERhZG9zTG9qYSIsIkZFVENIX0RBRE9TIiwiZmV0Y2hQZWRpZG9zIiwib2Zmc2V0IiwiRkVUQ0hfUEVESURPUyIsImZldGNoUGVkaWRvIiwiRkVUQ0hfUEVESURPIiwiY2FuY2VsYXJQZWRpZG8iLCJkZWxldGUiLCJDQU5DRUxBUl9QRURJRE8iLCJjbGVhblBlZGlkbyIsIkNMRUFOX1BFRElETyIsImZldGNoUHJvZHV0b3NQYWdpbmFJbmljaWFsIiwiRkVUQ0hfUFJPRFVUT1MiLCJGRVRDSF9QRVNRVUlTQSIsImZldGNoUHJvZHV0b3NQZXNxdWlzYSIsIkZFVENIX1BST0RVVE9TX1BFU1FVSVNBIiwiZmV0Y2hQcm9kdXRvIiwiRkVUQ0hfUFJPRFVUTyIsImZldGNoQXZhbGlhY29lcyIsIkZFVENIX1BST0RVVE9fQVZBTElBQ09FUyIsImZldGNoVmFyaWFjb2VzIiwiRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMiLCJub3ZhQXZhbGlhY2FvIiwidGV4dG8iLCJwb250dWFjYW8iLCJOT1ZBX0FWQUxJQUNBTyIsIlJFR0lTVEVSIiwiX3NhdmVDYXJ0IiwiY2FydCIsImZvdW5kIiwiX2l0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnb1RvQ2FydCIsImMiLCJfaW5kZXgiLCJjb25jYXQiLCJjb29raWUiLCJnZXRDb29raWUiLCJyZXEiLCJnZXRDb29raWVGcm9tQnJvd3NlciIsImdldENvb2tpZUZyb21TZXJ2ZXIiLCJfY29va2llIiwiZmluZCIsInN0YXJ0c1dpdGgiLCJudW1iZXJQYXR0ZXJuIiwiYXV4Q2VwIiwibWF0Y2giLCJfY2VwIiwiYXV4Q1BGIiwiX0NQRiIsImF1eERhdGEiLCJhdXhUZWxlZm9uZSIsIl90ZWxlZm9uZSIsImF1eE4iLCJfbiIsImF1eENhcnRhbyIsIl9jYXJ0YW8iLCJ0b0ZpeGVkIiwib25seU51bWJlcnMiLCJfc3RyQ1BGIiwic3RyQ1BGIiwic29tYSIsInJlc3RvIiwic3Vic3RyaW5nIiwiaiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVB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UUFBUSxDQUFDd0wsTUFBTSxDQUFDRyxTQUFQLENBQWlCQyxDQUFDLEdBQUMsQ0FBbkIsRUFBc0JBLENBQXRCLENBQUQsQ0FBUixJQUFzQyxLQUFLQSxDQUEzQyxDQUFkO0FBQ0g7O0FBQ0RGLE9BQUssR0FBSUQsSUFBSSxHQUFHLEVBQVIsR0FBYyxFQUF0QjtBQUVBLE1BQU1DLEtBQUssSUFBSSxFQUFYLElBQXFCQSxLQUFLLElBQUksRUFBbEMsRUFBMENBLEtBQUssR0FBRyxDQUFSO0FBQzFDLE1BQUlBLEtBQUssSUFBSTFMLFFBQVEsQ0FBQ3dMLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQixFQUFqQixFQUFxQixFQUFyQixDQUFELENBQXJCLEVBQWtELE9BQU8sS0FBUDtBQUVsRCxTQUFPLElBQVA7QUFDSCxDQTFCTTtBQTRCUTtBQUNYemUsYUFEVztBQUVYb2U7QUFGVyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2NoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jaGVja291dC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQWxlcnRHZXJhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5hdmlzbykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmF2aXNvLm1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0R2VyYWw7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgUGVzcXVpc2EgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IHRlcm1vOiBcIlwiIH1cclxuXHJcbiAgICBzdWJtaXRQZXNxdWlzYSgpe1xyXG4gICAgICAgIGNvbnN0IHsgdGVybW8gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFRlcm1vKHRlcm1vKTtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiBcIi9wZXNxdWlzYVwiLCBxdWVyeTogeyB0ZXJtbyB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0zIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXNxdWlzYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVybW99XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHRlcm1vOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBhcXVpIGEgc3VhIHBlc3F1aXNhLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1wZXNxdWlzYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRQZXNxdWlzYSgpfSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcGVzcXVpc2FcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIGFjdGlvbnMpKFBlc3F1aXNhKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb3VudEl0ZW1zQ2FydCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5cclxuY2xhc3MgQ2FyZENhcnJpbmhvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBjYXJ0UXRkOiAwIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0UXRkOiBnZXRDb3VudEl0ZW1zQ2FydCgpIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVucy1jYWJlY2FsaG8gZmxleC0yIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJlYS1jbGllbnRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNhYmVjYWxob1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NaW5oYSBDb250YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FycmluaG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY2FiZWNhbGhvIGNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyB0aGlzLnN0YXRlLmNhcnRRdGQgfHwgMCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRDYXJyaW5obzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBkZWZhdWx0RGVzY3JpY2FvID0gJyc7XHJcbmNvbnN0IGRlZmF1bHRPR1VSTCA9ICcnO1xyXG5jb25zdCBkZWZhdWx0T0dJbWFnZSA9IFwiL3N0YXRpYy9sb2dvLmpwZ1wiO1xyXG5cclxuY29uc3QgSGVhZCA9IHByb3BzID0+IChcclxuICAgIDxOZXh0SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDx0aXRsZT57IHByb3BzLnRpdGxlIHx8IFwiXCIgfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmljYW99IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17cHJvcHMudXJsIHx8IGRlZmF1bHRPR1VSTH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHJvcHMudGl0bGUgfHwgXCJcIn0gLz5cclxuICAgICAgICA8bWV0YSBcclxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmljYW99IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXtwcm9wcy51cmwgfHwgZGVmYXVsdE9HVVJMfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI2MDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYwMFwiIC8+XHJcbiAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIFxyXG4gICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtd3ZmWHBxcFpaVlFHSzZUQWg1UFZsR09mUU5IU29EMnhiRStRa1B4Q0FGbE5FZXZvRUgzU2wwc2liVmNPUVZuTlwiIFxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL3N0eWxlLmNzc1wiIC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wcy5wYWdTZWd1cm8gPyAoXHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGMuc2FuZGJveC5wYWdzZWd1cm8udW9sLmNvbS5ici9wYWdzZWd1cm8vYXBpL3YyL2NoZWNrb3V0L3BhZ3NlZ3Vyby5kaXJlY3RwYXltZW50LmpzXCIgPlxyXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgPC9OZXh0SGVhZD5cclxuKTtcclxuXHJcbkhlYWQucHJvcFR5cGVzID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9nSW1hZ2U6IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVJhZGlvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgY2hlY2tlZCwgbGFiZWwsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17Y2hlY2tlZH0gbmFtZT17bmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwO3tsYWJlbH08L2xhYmVsPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TaW1wbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUsIHBsYWNlaG9sZGVyLCB0eXBlLCBsYWJlbCwgb25DaGFuZ2UsIGVycm8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsICYmIDxsYWJlbD57bGFiZWx9PC9sYWJlbD4gfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IHZhbHVlPXt2YWx1ZX0gbmFtZT17bmFtZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJybyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJlcnJvXCI+e2Vycm99PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBEYWRvc0RhTG9qYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5sb2phKSByZXR1cm4gKDxkaXY+PC9kaXY+KTtcclxuICAgICAgICBjb25zdCB7IG5vbWUsIGNucGosIGVtYWlsLCBlbmRlcmVjbywgdGVsZWZvbmVzIH0gPSB0aGlzLnByb3BzLmxvamE7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZGFkb3MtZGEtbG9qYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+RW50cmUgZW0gQ29udGF0bzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9qYS1ub21lXCI+Tm9tZToge25vbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9qYS1jbnBqXCI+Q05QSjoge2NucGp9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9qYS1lbWFpbFwiPkUtbWFpbDogPGEgaHJlZj17YG1haWx0bzoke2VtYWlsfWB9PntlbWFpbH08L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9qYS10ZWxlZm9uZXNcIj5UZWxlZm9uZXM6PC9wPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbGVmb25lcy5tYXAoKHRlbGVmb25lLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2phLXRlbGVmb25lXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BwaG9uZToke3RlbGVmb25lfWB9Pnt0ZWxlZm9uZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvamEtZW5kZXJlY29cIj57ZW5kZXJlY28ubG9jYWx9LCB7ZW5kZXJlY28ubnVtZXJvfSAtIHtlbmRlcmVjby5iYWlycm99PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9qYS1jaWRhZGVcIj57ZW5kZXJlY28uY2lkYWRlfS97ZW5kZXJlY28uZXN0YWRvfSAtIHtlbmRlcmVjby5DRVB9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbG9qYTogc3RhdGUubG9qYS5sb2phXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRGFkb3NEYUxvamEpOyIsImltcG9ydCBIZWFkIGZyb20gJy4vSGVhZCc7XHJcblxyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZSc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCB1cmwsIGltYWdlLCBwYWdTZWd1cm8gfSkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZFxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgdXJsPXt1cmx9XHJcbiAgICAgICAgICAgIG9nSW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICBwYWdTZWd1cm89e3BhZ1NlZ3Vyb30+PC9IZWFkPlxyXG4gICAgICAgIDxTdHlsZSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAmY29weTsgU2FtcyBQYXBlbGFyaWFcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIENhdGVnb3JpYXMgZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBjYXRlZ29yaWFzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWFzIGZsZXggaG9yaXpvbnRhbC1tYlwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYXMubWFwKGNhdGVnb3JpYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcmlhLyR7Y2F0ZWdvcmlhLm5vbWV9P2lkPSR7Y2F0ZWdvcmlhLl9pZH1gfSBrZXk9e2NhdGVnb3JpYS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWEtaXRlbSBmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2NhdGVnb3JpYS5ub21lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgY2F0ZWdvcmlhczogc3RhdGUuY2F0ZWdvcmlhLmNhdGVnb3JpYXNcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDYXRlZ29yaWFzKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUGFnaW5hcyA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWwgaW5zdGl0dWNpb25hbFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5Qw6FnaW5hczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPHNwYW4+UMOhZ2luYSBJbmljaWFsPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NhcnJpbmhvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlZlciBDYXJyaW5obzwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcmVhLWNsaWVudGUvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk1pbmhhIENvbnRhPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NvYnJlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlNvYnJlIGEgTG9qYTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUkVERVNfU09DSUFJUyA9IFtcclxuICAgIHsgbm9tZTogXCJmYWNlYm9va1wiLCB1cmw6IFwiI1wiIH0sXHJcbiAgICB7IG5vbWU6IFwiaW5zdGFncmFtXCIsIHVybDogXCIjXCIgfSxcclxuICAgIHsgbm9tZTogXCJ0d2l0dGVyXCIsIHVybDogXCIjXCIgfSxcclxuICAgIHsgbm9tZTogXCJ3aGF0c2FwcFwiLCB1cmw6IFwiI1wiIH0sXHJcbl07XHJcblxyXG5jb25zdCBSZWRlc1NvY2lhaXMgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlJlZGVzIFNvY2lhaXM8L2gyPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggcmVkZXMtc29jaWFpcyB3cmFwXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFJFREVTX1NPQ0lBSVMubWFwKChpdGVtLCBpZHgpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhIGZhLSR7aXRlbS5ub21lfSBmYS1sZ2B9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGVzU29jaWFpczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTG9nb0NhYmVjYWxobyA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0yIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5qcGdcIiBjbGFzc05hbWU9XCJsb2dvXCIgd2lkdGg9XCI5MCVcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvQ2FiZWNhbGhvOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgXHJcbiAgICBib2R5IHsgXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7IH1cclxuICAgIGJvZHksICoge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcixcclxuICAgIC5jb250YWluZXItYmlnIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyB9XHJcbiAgICAuY29udGFpbmVyLWJpZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7IH1cclxuXHJcbiAgICAuZmxleCB7IGRpc3BsYXk6IGZsZXg7IH1cclxuICAgIC5mbGV4LTEgeyBmbGV4OiAxOyB9XHJcbiAgICAuZmxleC0yIHsgZmxleDogMjsgfVxyXG4gICAgLmZsZXgtMyB7IGZsZXg6IDM7IH1cclxuICAgIC5mbGV4LTQgeyBmbGV4OiA0OyB9XHJcbiAgICAuZmxleC01IHsgZmxleDogNTsgfVxyXG4gICAgLmZsZXgtNiB7IGZsZXg6IDY7IH1cclxuXHJcbiAgICAud3JhcCB7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4gICAgLndyYXAtMSB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICB9XHJcbiAgICAud3JhcC0yIHsgXHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICB9XHJcbiAgICAud3JhcC0zIHsgXHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygzMiUgLSA1MHB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMzIlIC0gNTBweCk7XHJcbiAgICB9XHJcbiAgICAud3JhcC00IHsgXHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygyNSUgLSA1MHB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMjUlIC0gNTBweCk7XHJcbiAgICB9XHJcbiAgICAud3JhcC01IHsgXHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygyMCUgLSA1MHB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMjAlIC0gNTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG5cclxuICAgIC5mbGV4LWNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtc3RhcnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICAuZmxleC1yaWdodCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcblxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xyXG4gICAgICAgIC53cmFwLW1iIHsgZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAgICAgLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1dG8ud3JhcC0yLW1iIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaG9yaXpvbnRhbC1tYiB7IGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgICAgICAuaG9yaXpvbnRhbCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbikiLCJleHBvcnQgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgIHZlcnNhbyA9IFwidjFcIixcclxuICAgICAgICAgICAgIGxvamEgPSBcIjVmMGNkODIyYjA0ODRjMmQxNDhiNzkzYlwiLFxyXG4gICAgICAgICAgICAgYmFzZUltZyA9IEFQSSArIFwiL3B1YmxpYy9pbWFnZXMvXCI7XHJcbiAgICAgICAgICAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2dvL0NhYmVjYWxobyc7XHJcbmltcG9ydCBDYW1wb1Blc3F1aXNhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FtcG9zL1Blc3F1aXNhJztcclxuaW1wb3J0IENhcmRDYXJyaW5obyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRzL0NhcnJpbmhvJztcclxuaW1wb3J0IENhdGVnb3JpYXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0YXMvQ2F0ZWdvcmlhcyc7XHJcblxyXG5jbGFzcyBDYWJlY2FsaG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyQ2FiZWNhbGhvTm9ybWFsKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYW1wb1Blc3F1aXNhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJyaW5obyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpYXMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWFzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhYmVjYWxob1NpbXBsZXMoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlciBOby1MaW5rcyBIZWFkZXItU2ltcGxlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgc2ltcGxlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gc2ltcGxlcyA/IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDYWJlY2FsaG9TaW1wbGVzKCkgOiBcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FiZWNhbGhvTm9ybWFsKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FiZWNhbGhvOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJhc2VJbWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGFkZENhcnQgfSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuXHJcbmNsYXNzIExpc3RhRGVQcm9kdXRvcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyQ2FiZWNhbGhvQ2FycmluaG8oc2VtQWx0ZXJhY29lcyl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJyaW5oby1jYWJlY2FsaG8gbm8tbWItZmxleCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZSBmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlF1YW50aWRhZGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lIGZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UHJlw6dvIFVuaXTDoXJpbzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGxpbmUgZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5QcmXDp28gVG90YWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ICFzZW1BbHRlcmFjb2VzICYmICg8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPjwvZGl2PikgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUXVhbnRpZGFkZShlLCBxdWFudGlkYWRlLCBpdGVtLCBpbmRleCl7XHJcbiAgICAgICAgaWYoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA8IDEpIHJldHVybjtcclxuICAgICAgICBsZXQgbm92YVF1YW50aWRhZGUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGxldCBjaGFuZ2UgPSBub3ZhUXVhbnRpZGFkZSAtIHF1YW50aWRhZGU7XHJcbiAgICAgICAgaWYoIG5vdmFRdWFudGlkYWRlID49IGl0ZW0udmFyaWFjYW8ucXVhbnRpZGFkZSApe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJOw6NvIHRlbW9zIGVzc2EgcXVhbnRpZGFkZSBlbSBlc3RvcXVlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkQ2FydCh7XHJcbiAgICAgICAgICAgIHByb2R1dG86IGl0ZW0ucHJvZHV0by5faWQsXHJcbiAgICAgICAgICAgIHZhcmlhY2FvOiBpdGVtLnZhcmlhY2FvLl9pZCxcclxuICAgICAgICAgICAgcXVhbnRpZGFkZTogY2hhbmdlLFxyXG4gICAgICAgICAgICBwcmVjb1VuaXRhcmlvOiBpdGVtLnByZWNvVW5pdGFyaW9cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVRdWFudGlkYWRlKGNoYW5nZSwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZXJQcm9kdXRvQ2FycmluaG8oaW5kZXgpe1xyXG4gICAgICAgIGlmKHdpbmRvdy5jb25maXJtKFwiVm9jw6ogZGVzZWphIHJlYWxtZW50ZSByZW1vdmVyIGVzc2UgcHJvZHV0bz9cIikpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZXJQcm9kdXRvKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvZHV0byhpdGVtLCBzZW1BbHRlcmFjb2VzLCBpbmRleCl7XHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICFpdGVtLnZhcmlhY2FvIHx8ICFpdGVtLnZhcmlhY2FvLl9pZCB8fCBcclxuICAgICAgICAgICAgIWl0ZW0ucHJvZHV0byB8fCAhaXRlbS5wcm9kdXRvLl9pZFxyXG4gICAgICAgICkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm90byA9IGl0ZW0udmFyaWFjYW8uZm90b3MgJiYgaXRlbS52YXJpYWNhby5mb3Rvcy5sZW5ndGggPiAwID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhcmlhY2FvLmZvdG9zWzBdIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb2R1dG8uZm90b3NbMF07XHJcbiAgICAgICAgY29uc3Qgbm9tZSA9IGl0ZW0ucHJvZHV0by50aXR1bG8gKyBcIiAtIFwiICsgaXRlbS52YXJpYWNhby5ub21lO1xyXG4gICAgICAgIGNvbnN0IHsgcXVhbnRpZGFkZSwgcHJlY29Vbml0YXJpbyB9ID0gaXRlbTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcnJpbmhvLWl0ZW0gZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTQgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHV0by1pbWFnZSBmbGV4LTIgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFzZUltZyArIGZvdG99IGFsdD17bm9tZX0gd2lkdGg9XCIxMDBweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdXRvLXRpdHVsbyBmbGV4LTQgZmxleCBmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntub21lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbUFsdGVyYWNvZXMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+e3F1YW50aWRhZGV9PC9zcGFuPikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtxdWFudGlkYWRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1dG8tcXVhbnRpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmNoYW5nZVF1YW50aWRhZGUoZSwgcXVhbnRpZGFkZSwgaXRlbSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0TW9uZXkocHJlY29Vbml0YXJpbyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdE1vbmV5KHByZWNvVW5pdGFyaW8gKiBxdWFudGlkYWRlKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsgIXNlbUFsdGVyYWNvZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVyUHJvZHV0b0NhcnJpbmhvKGluZGV4KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tcmVtb3ZlclwiPlJlbW92ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUHJvZHV0b3Moc2VtQWx0ZXJhY29lcyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2FycmluaG8ubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJQcm9kdXRvKGl0ZW0sIHNlbUFsdGVyYWNvZXMsIGluZGV4KSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IHNlbUFsdGVyYWNvZXMsIGNhcnJpbmhvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTGlzdGEtRGUtUHJvZHV0b3MgZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhYmVjYWxob0NhcnJpbmhvKHNlbUFsdGVyYWNvZXMpIH1cclxuICAgICAgICAgICAgICAgIHsgY2FycmluaG8gJiYgdGhpcy5yZW5kZXJQcm9kdXRvcyhzZW1BbHRlcmFjb2VzKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5ob1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShMaXN0YURlUHJvZHV0b3MpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcbmltcG9ydCB7IHZhbGlkYXRlQ1BGIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGUnO1xyXG5pbXBvcnQgQWxlcnRHZXJhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsZXJ0L0dlcmFsJztcclxuXHJcbmNsYXNzIENoZWNrb3V0QnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsIFxyXG4gICAgICAgIGF2aXNvOiBudWxsIFxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURpc2FibGVkID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpc2FibGVkOiAhdGhpcy5zdGF0ZS5kaXNhYmxlZCB9KTtcclxuXHJcbiAgICBjYWxjdWxhclZhbG9yVG90YWwoY2FycmluaG8sIGZyZXRlU2VsZWNpb25hZG8pe1xyXG4gICAgICAgIGNvbnN0IHZhbG9yUHJvZHV0b3MgPSBjYXJyaW5oby5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWxsLCBpdGVtKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbCArIChOdW1iZXIoaXRlbS5wcmVjb1VuaXRhcmlvKSAqIE51bWJlcihpdGVtLnF1YW50aWRhZGUpKSAsIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB2YWxvckZyZXRlID0gTnVtYmVyKGZyZXRlU2VsZWNpb25hZG8uVmFsb3IucmVwbGFjZSgnLCcsJy4nKSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbG9yUHJvZHV0b3MgKyB2YWxvckZyZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXJGb3JtdWxhcmlvKCl7XHJcbiAgICAgICAgY29uc3QgeyAgXHJcbiAgICAgICAgICAgIG5vbWUsIENQRiwgZGF0YURlTmFzY2ltZW50bywgdGVsZWZvbmUsXHJcbiAgICAgICAgICAgIGxvY2FsLCBudW1lcm8sIGJhaXJybywgY2lkYWRlLCBlc3RhZG8sIENFUCxcclxuICAgICAgICAgICAgZGFkb3NDb2JyYW5jYSwgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBDUEZib2xldG8sXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbywgbm9tZUNhcnRhbywgbWVzQ2FydGFvLCBhbm9DYXJ0YW8sIHBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEsIENWVkNhcnRhbyxcclxuICAgICAgICAgICAgY3JlZGl0X2NhcmRfdG9rZW5cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHsgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgdGVtRXJybyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZighbm9tZSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIUNQRiB8fCBDUEYubGVuZ3RoICE9PSAxNCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoQ1BGICYmIENQRi5sZW5ndGggPT09IDE0ICYmICF2YWxpZGF0ZUNQRihDUEYpKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighZGF0YURlTmFzY2ltZW50byB8fCBkYXRhRGVOYXNjaW1lbnRvLmxlbmd0aCAhPT0gMTApIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCF0ZWxlZm9uZSB8fCB0ZWxlZm9uZS5sZW5ndGggPCAxMSkgdGVtRXJybyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFsb2NhbCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIW51bWVybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWJhaXJybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWNpZGFkZSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWVzdGFkbykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIUNFUCB8fCBDRVAubGVuZ3RoICE9PSA5KSB0ZW1FcnJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIWRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSl7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmxvY2FsKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EubnVtZXJvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuYmFpcnJvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuY2lkYWRlKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuZXN0YWRvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuQ0VQIHx8IGRhZG9zQ29icmFuY2EuQ0VQLmxlbmd0aCAhPT0gOSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiYm9sZXRvXCIpe1xyXG4gICAgICAgICAgICBpZighQ1BGYm9sZXRvICYmICFDUEYpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihDUEZib2xldG8gJiYgQ1BGYm9sZXRvLmxlbmd0aCAhPT0gMTQgJiYgIXZhbGlkYXRlQ1BGKENQRmJvbGV0bykpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCFudW1lcm9DYXJ0YW8gfHwgbnVtZXJvQ2FydGFvLmxlbmd0aCAhPT0gMTkpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighbm9tZUNhcnRhbykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFtZXNDYXJ0YW8gfHwgbWVzQ2FydGFvLmxlbmd0aCAhPT0gMikgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFhbm9DYXJ0YW8gfHwgYW5vQ2FydGFvLmxlbmd0aCAhPT0gNCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWNyZWRpdF9jYXJkX3Rva2VuKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIUNWVkNhcnRhbyB8fCBDVlZDYXJ0YW8ubGVuZ3RoICE9PSAzKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhdGVtRXJybztcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgZnJldGVTZWxlY2lvbmFkbywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXJGb3JtdWxhcmlvID0gdGhpcy52YWxpZGFyRm9ybXVsYXJpbygpO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGFyRm9ybXVsYXJpbyAmJiBmcmV0ZVNlbGVjaW9uYWRvICYmIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoKXtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGZvcm0sIGZyZXRlU2VsZWNpb25hZG8sIHRva2VuLCBzZW5kZXJIYXNoLCB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG9cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjYXJyaW5obyA9IGdldENhcnQoKTtcclxuICAgICAgICBjb25zdCB2YWxvclRvdGFsID0gdGhpcy5jYWxjdWxhclZhbG9yVG90YWwoY2FycmluaG8sIGZyZXRlU2VsZWNpb25hZG8pO1xyXG5cclxuICAgICAgICBpZighdGhpcy52YWxpZGF0ZSgpKSByZXR1cm4gbnVsbDtcclxuICAgICAgICB0aGlzLnRvZ2dsZURpc2FibGVkKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5ub3ZvUGVkaWRvKFxyXG4gICAgICAgICAgICBmb3JtLCBmcmV0ZVNlbGVjaW9uYWRvLCB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8sIFxyXG4gICAgICAgICAgICB2YWxvclRvdGFsLCB0b2tlbiwgc2VuZGVySGFzaCwgY2FycmluaG8sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BlZGlkbyBmaW5hbGl6YWRvJyk7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF2aXNvOiB7IHN0YXR1czpmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc2FibGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxBbGVydEdlcmFsIGF2aXNvPXt0aGlzLnN0YXRlLmF2aXNvfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWN0YSBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzYWJsZWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFTlZJQU5ETy4uLlwiIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ09OQ0xVSVIgUEVESURPXCJcclxuICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5obyxcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG8sXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtLFxyXG4gICAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXHJcbiAgICBzZW5kZXJIYXNoOiBzdGF0ZS5jaGVja291dC5zZW5kZXJIYXNoLFxyXG4gICAgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvOiBzdGF0ZS5jaGVja291dC50aXBvUGFnYW1lbnRvU2VsZWNpb25hZG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoQ2hlY2tvdXRCdXR0b24pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRGFkb3NDbGllbnRlQ29udGFpbmVyIGZyb20gJy4uL0NsaWVudGUvRGFkb3NDbGllbnRlJztcclxuaW1wb3J0IENsaWVudGVMb2dpbiBmcm9tICcuLi9DbGllbnRlL0NsaWVudGVMb2dpbic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgRGFkb3NDbGllbnRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5mZXRjaENsaWVudGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB0aGlzLmZldGNoQ2xpZW50ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQ2xpZW50ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgdXN1YXJpbywgdG9rZW4sIGNsaWVudGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYodXN1YXJpbyAmJiB0b2tlbiAmJiAhY2xpZW50ZSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDbGllbnRlKHVzdWFyaW8uX2lkLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgdXN1YXJpbywgcGVybWlzc2FvSW5pY2lhbCwgcGVybWl0aXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHVzdWFyaW8gfHwgcGVybWlzc2FvSW5pY2lhbCA/IFxyXG4gICAgICAgICAgICA8RGFkb3NDbGllbnRlQ29udGFpbmVyIC8+IDogXHJcbiAgICAgICAgICAgIDxDbGllbnRlTG9naW4gcGVybWl0aXI9e3Blcm1pdGlyfSAvPjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG4gICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZS5jbGllbnRlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKERhZG9zQ2xpZW50ZSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm1TaW1wbGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBFU1RBRE9TIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBmb3JtYXROdW1iZXIsIGZvcm1hdENFUCB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCc7XHJcblxyXG5jbGFzcyBEYWRvc0VudHJlZ2FDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGVycm9zOiB7IGRhZG9zQ29icmFuY2E6IHt9IH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZmV0Y2hDbGllbnRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XHJcbiAgICAgICAgaWYoIXByZXZQcm9wcy5jbGllbnRlICYmIHRoaXMucHJvcHMuY2xpZW50ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDbGllbnRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQ2xpZW50ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICBkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2E6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2FsOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5sb2NhbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIG51bWVybzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28ubnVtZXJvIDogXCJcIixcclxuICAgICAgICAgICAgYmFpcnJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5iYWlycm8gOiBcIlwiLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50bzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uY29tcGxlbWVudG8gOiBcIlwiLFxyXG4gICAgICAgICAgICBjaWRhZGU6IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmNpZGFkZSA6IFwiXCIsXHJcbiAgICAgICAgICAgIGVzdGFkbzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uZXN0YWRvIDogXCJcIixcclxuICAgICAgICAgICAgQ0VQOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5DRVAgOiBcIlwiLFxyXG4gICAgICAgICAgICBkYWRvc0NvYnJhbmNhOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbDogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28ubG9jYWwgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5udW1lcm8gOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYmFpcnJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5iYWlycm8gOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29tcGxlbWVudG86IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmNvbXBsZW1lbnRvIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGNpZGFkZTogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uY2lkYWRlIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGVzdGFkbzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uZXN0YWRvIDogXCJcIixcclxuICAgICAgICAgICAgICAgIENFUDogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uQ0VQIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBsb2NhbCwgbnVtZXJvLCBiYWlycm8sIGNpZGFkZSwgZXN0YWRvLCBDRVAsXHJcbiAgICAgICAgICAgIGRhZG9zQ29icmFuY2EgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCBlcnJvcyA9IHsgZGFkb3NDb2JyYW5jYToge30gfTtcclxuXHJcbiAgICAgICAgaWYoIWxvY2FsKSBlcnJvcy5sb2NhbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW5kZXJlw6dvXCI7XHJcbiAgICAgICAgaWYoIW51bWVybykgZXJyb3MubnVtZXJvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBuw7ptZXJvXCI7XHJcbiAgICAgICAgaWYoIWJhaXJybykgZXJyb3MuYmFpcnJvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBiYWlycm9cIjtcclxuICAgICAgICBpZighY2lkYWRlKSBlcnJvcy5jaWRhZGUgPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIGNpZGFkZVwiO1xyXG4gICAgICAgIGlmKCFlc3RhZG8pIGVycm9zLmVzdGFkbyA9IFwiU2VsZWNpb25lIG8gc2V1IGVzdGFkb1wiO1xyXG4gICAgICAgIGlmKCFDRVAgfHwgQ0VQLmxlbmd0aCAhPT0gOSkgZXJyb3MuQ0VQID0gXCJEaWdpdGUgYXF1aSBzZXUgQ0VQXCI7XHJcblxyXG4gICAgICAgIGlmKCFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2Epe1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5sb2NhbCkgZXJyb3MuZGFkb3NDb2JyYW5jYS5sb2NhbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW5kZXJlw6dvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLm51bWVybykgZXJyb3MuZGFkb3NDb2JyYW5jYS5udW1lcm8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IG7Dum1lcm9cIjtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuYmFpcnJvKSBlcnJvcy5kYWRvc0NvYnJhbmNhLmJhaXJybyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgYmFpcnJvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmNpZGFkZSkgZXJyb3MuZGFkb3NDb2JyYW5jYS5jaWRhZGUgPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIGNpZGFkZVwiO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5lc3RhZG8pIGVycm9zLmRhZG9zQ29icmFuY2EuZXN0YWRvID0gXCJTZWxlY2lvbmUgbyBzZXUgZXN0YWRvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLkNFUCB8fCBkYWRvc0NvYnJhbmNhLkNFUC5sZW5ndGggIT09IDkpIGVycm9zLmRhZG9zQ29icmFuY2EuQ0VQID0gXCJEaWdpdGUgYXF1aSBzZXUgQ0VQXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3MgfSk7XHJcbiAgICAgICAgcmV0dXJuICggT2JqZWN0LmtleXMoZXJyb3MpLmxlbmd0aCA9PT0gMSAmJiBPYmplY3Qua2V5cyhlcnJvcy5kYWRvc0NvYnJhbmNhKS5sZW5ndGggPT09IDAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSA9IChmaWVsZCwgdmFsdWUsIHByZWZpeCkgPT4gXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHsgW2ZpZWxkXTogdmFsdWUgfSwgcHJlZml4KS50aGVuKCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcblxyXG4gICAgb25DaGFuZ2VDRVAgPSAoZmllbGQsIHZhbHVlLCBwcmVmaXgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oeyBbZmllbGRdOiB2YWx1ZSB9LCBwcmVmaXgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gOSl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vdmlhY2VwLmNvbS5ici93cy8ke3ZhbHVlLnJlcGxhY2UoJy0nLCcnKX0vanNvbi91bmljb2RlYClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxvY2FsXCI6IHJlc3BvbnNlLmRhdGFbXCJsb2dyYWRvdXJvXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhaXJyb1wiOiByZXNwb25zZS5kYXRhW1wiYmFpcnJvXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNpZGFkZVwiOiByZXNwb25zZS5kYXRhW1wibG9jYWxpZGFkZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIjogcmVzcG9uc2UuZGF0YVtcInVmXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcHJlZml4KS50aGVuKCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlckRhZG9zRGVFbnRyZWdhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuZm9ybSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBsb2NhbCxcclxuICAgICAgICAgICAgbnVtZXJvLFxyXG4gICAgICAgICAgICBiYWlycm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBjaWRhZGUsXHJcbiAgICAgICAgICAgIGVzdGFkbyxcclxuICAgICAgICAgICAgQ0VQXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkRBRE9TIERFIEVOVFJFR0E8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0NFUCB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuQ0VQfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNDUtNzg5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUNFUChcIkNFUFwiLCBmb3JtYXRDRVAoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYWwgfHwgXCJcIn0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MubG9jYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUnVhLCBBdmVuaWRhLCAuLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kZXJlw6dvIChSdWEsIEF2ZW5pZGEsLi4pXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJsb2NhbFwiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVybyB8fCBcIlwifSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5udW1lcm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtZXJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjk5OTlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibnVtZXJvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFpcnJvIHx8IFwiXCJ9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5iYWlycm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFpcnJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJhaXJyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYWlycm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImJhaXJyb1wiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBsZW1lbnRvIHx8IFwiXCJ9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmNvbXBsZW1lbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJjb21wbGVtZW50b1wiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaWRhZGUgfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5jaWRhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2lkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImNpZGFkZVwiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWwgZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0YWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZXN0YWRvfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJlc3RhZG9cIiwgZS50YXJnZXQudmFsdWUpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjaW9uZS4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBPYmplY3Qua2V5cyhFU1RBRE9TKS5tYXAoKGFiYnIpID0+ICg8b3B0aW9uIGtleT17YWJicn0gdmFsdWU9e2FiYnJ9PntFU1RBRE9TW2FiYnJdfTwvb3B0aW9uPikpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3MuZXN0YWRvICYmICg8c21hbGwgY2xhc3NOYW1lPVwiZXJyb1wiPntlcnJvcy5lc3RhZG99PC9zbWFsbD4pIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSB8fCB0cnVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMuc2V0Rm9ybSh7IFwiZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhXCI6ICFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwO09zIGRhZG9zIGRlIGVudHJlZ2Egc8OjbyBpZ3VhaXMgYW9zIGRhZG9zIGRlIGNvYnJhbsOnYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYWRvc0RlQ29icmFuY2EoKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5mb3JtIHx8ICF0aGlzLnByb3BzLmZvcm0uZGFkb3NDb2JyYW5jYSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgbG9jYWwsXHJcbiAgICAgICAgICAgIG51bWVybyxcclxuICAgICAgICAgICAgYmFpcnJvLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50byxcclxuICAgICAgICAgICAgY2lkYWRlLFxyXG4gICAgICAgICAgICBlc3RhZG8sXHJcbiAgICAgICAgICAgIENFUFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm0uZGFkb3NDb2JyYW5jYTtcclxuICAgICAgICBjb25zdCB7IGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkRBRE9TIERFIENPQlJBTsOHQTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Q0VQIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EuQ0VQfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNFUFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyMzQ1LTc4OVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNFUFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDRVAoXCJDRVBcIiwgZm9ybWF0Q0VQKGUudGFyZ2V0LnZhbHVlKSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYWwgfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLmxvY2FsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSdWEsIEF2ZW5pZGEsIC4uLlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbmRlcmXDp28gKFJ1YSwgQXZlbmlkYSwuLilcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImxvY2FsXCIsIGUudGFyZ2V0LnZhbHVlLCAnZGFkb3NDb2JyYW5jYScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1lcm8gfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLm51bWVyb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtZXJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjk5OTlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibnVtZXJvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSksICdkYWRvc0NvYnJhbmNhJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWlycm8gfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLmJhaXJyb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFpcnJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJhaXJyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYWlycm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImJhaXJyb1wiLCBlLnRhcmdldC52YWx1ZSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGxlbWVudG8gfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLmNvbXBsZW1lbnRvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb21wbGVtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiY29tcGxlbWVudG9cIiwgZS50YXJnZXQudmFsdWUsICdkYWRvc0NvYnJhbmNhJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaWRhZGUgfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5kYWRvc0NvYnJhbmNhLmNpZGFkZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2lkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImNpZGFkZVwiLCBlLnRhcmdldC52YWx1ZSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB2ZXJ0aWNhbCBmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Fc3RhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtlc3RhZG99IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImVzdGFkb1wiLCBlLnRhcmdldC52YWx1ZSwgJ2RhZG9zQ29icmFuY2EnKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY2lvbmUuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgT2JqZWN0LmtleXMoRVNUQURPUykubWFwKChhYmJyKSA9PiAoPG9wdGlvbiBrZXk9e2FiYnJ9IHZhbHVlPXthYmJyfT57RVNUQURPU1thYmJyXX08L29wdGlvbj4pKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9zLmRhZG9zQ29icmFuY2EuZXN0YWRvICYmICg8c21hbGwgY2xhc3NOYW1lPVwiZXJyb1wiPntlcnJvcy5kYWRvc0NvYnJhbmNhLmVzdGFkb308L3NtYWxsPikgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyRGFkb3NEZUVudHJlZ2EoKSB9XHJcbiAgICAgICAgICAgICAgICB7ICFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgJiYgdGhpcy5yZW5kZXJEYWRvc0RlQ29icmFuY2EoKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLmNsaWVudGUsXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKERhZG9zRW50cmVnYUNvbnRhaW5lcik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBGb3JtUmFkaW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dHMvRm9ybVJhZGlvJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcbmltcG9ydCB7IGZvcm1hdE1vbmV5LCBjb2RpZ29zQ29ycmVpb3MgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5jbGFzcyBEYWRvc0ZyZXRlIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZihmb3JtKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxjdWxhckZyZXRlKGZvcm0uQ0VQLCBnZXRDYXJ0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcclxuICAgICAgICBpZihwcmV2UHJvcHMuZm9ybS5DRVAgIT09IHRoaXMucHJvcHMuZm9ybS5DRVAgJiYgdGhpcy5wcm9wcy5mb3JtLkNFUC5sZW5ndGggPT09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGN1bGFyRnJldGUodGhpcy5wcm9wcy5mb3JtLkNFUCwgZ2V0Q2FydCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWNpb25hckZyZXRlKGZyZXRlKXtcclxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjaW9uYXJGcmV0ZShmcmV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBmcmV0ZXMsIGZyZXRlU2VsZWNpb25hZG8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEYWRvcy1GcmV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPk3DiVRPRE9TIERFIEVOVFJFR0E8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZyZXRlcyB8fCBbXSkubWFwKChmcmV0ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1SYWRpbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyZXRlX3NlbGVjaW9uYWRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZyZXRlU2VsZWNpb25hZG8gPyBmcmV0ZVNlbGVjaW9uYWRvLkNvZGlnbyA9PT0gZnJldGUuQ29kaWdvIDogZmFsc2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9PiB0aGlzLnNlbGVjaW9uYXJGcmV0ZShmcmV0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NvZGlnb3NDb3JyZWlvc1tmcmV0ZS5Db2RpZ29dfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgke2ZyZXRlLlByYXpvRW50cmVnYX0gZGlhcyDDunRlaXMpIC0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdE1vbmV5KGZyZXRlLlZhbG9yLnJlcGxhY2UoJywnLCcuJykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9Pih7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8uY2FycmluaG8sXHJcbiAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLmNsaWVudGUsXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtLFxyXG4gICAgZnJldGVzOiBzdGF0ZS5jYXJyaW5oby5mcmV0ZXMsXHJcbiAgICBmcmV0ZVNlbGVjaW9uYWRvOiBzdGF0ZS5jYXJyaW5oby5mcmV0ZVNlbGVjaW9uYWRvXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKERhZG9zRnJldGUpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRm9ybVJhZGlvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1SYWRpbyc7XHJcbmltcG9ydCBGb3JtU2ltcGxlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtU2ltcGxlcyc7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHsgZm9ybWF0Q1BGLCBmb3JtYXRDYXJ0YW8sIGZvcm1hdE51bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCc7XHJcbmltcG9ydCB7IGZvcm1hdE1vbmV5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUNQRiB9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlJztcclxuXHJcbmNsYXNzIERhZG9zUGFnYW1lbnRvIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cclxuICAgIHN0YXRlID0geyBlcnJvczoge30gfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRTZXNzaW9uUGFnYW1lbnRvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBudW1lcm9DYXJ0YW8sXHJcbiAgICAgICAgICAgIG1lc0NhcnRhbyxcclxuICAgICAgICAgICAgYW5vQ2FydGFvLFxyXG4gICAgICAgICAgICBDVlZDYXJ0YW8sXHJcbiAgICAgICAgICAgIGNyZWRpdF9jYXJkX3Rva2VuLFxyXG4gICAgICAgICAgICBiYW5kZWlyYV9jYXJ0YW8sXHJcbiAgICAgICAgICAgIHBhcmNlbGFzQ2FydGFvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuXHJcbiAgICAgICAgaWYoIWJhbmRlaXJhX2NhcnRhbyAmJiBudW1lcm9DYXJ0YW8gJiYgbnVtZXJvQ2FydGFvLnNwbGl0KCcgJykuam9pbignJykubGVuZ3RoID4gNyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnJhbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICAhY3JlZGl0X2NhcmRfdG9rZW4gJiZcclxuICAgICAgICAgICAgbnVtZXJvQ2FydGFvICYmIG51bWVyb0NhcnRhby5zcGxpdCgnICcpLmpvaW4oJycpLmxlbmd0aCA9PT0gMTYgJiZcclxuICAgICAgICAgICAgbWVzQ2FydGFvICYmIG1lc0NhcnRhby5sZW5ndGggPT09IDIgJiZcclxuICAgICAgICAgICAgYW5vQ2FydGFvICYmIGFub0NhcnRhby5sZW5ndGggPT09IDQgJiZcclxuICAgICAgICAgICAgQ1ZWQ2FydGFvICYmIENWVkNhcnRhby5sZW5ndGggPT09IDMgJiZcclxuICAgICAgICAgICAgYmFuZGVpcmFfY2FydGFvIFxyXG4gICAgICAgICkgdGhpcy5zdWJtaXRDYXJ0YW9IYXNoKCk7XHJcblxyXG4gICAgICAgIGlmKCAoICFwYXJjZWxhc0NhcnRhbyAmJiBiYW5kZWlyYV9jYXJ0YW8gKSB8fFxyXG4gICAgICAgICAgICAoIHBhcmNlbGFzQ2FydGFvICYmIGJhbmRlaXJhX2NhcnRhbyAmJiBwcmV2UHJvcHMuZnJldGVTZWxlY2lvbmFkbyAhPT0gdGhpcy5wcm9wcy5mcmV0ZVNlbGVjaW9uYWRvIClcclxuICAgICAgICApIHRoaXMuZ2V0UGFyY2VsYXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuZCgpe1xyXG4gICAgICAgIGNvbnN0IHsgbnVtZXJvQ2FydGFvIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgUGFnU2VndXJvRGlyZWN0UGF5bWVudC5nZXRCcmFuZCh7XHJcbiAgICAgICAgICAgIGNhcmRCaW46IG51bWVyb0NhcnRhby5zcGxpdCgnICcpLmpvaW4oJycpLnNsaWNlKDAsNiksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyKSA9PnRoaXMucHJvcHMuc2V0Rm9ybSh7IGJhbmRlaXJhX2NhcnRhbzogci5icmFuZCB9KSxcclxuICAgICAgICAgICAgZXJyb3I6IChyKSA9PiBjb25zb2xlLmxvZyhyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdENhcnRhb0hhc2goKXtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbyxcclxuICAgICAgICAgICAgbWVzQ2FydGFvLFxyXG4gICAgICAgICAgICBhbm9DYXJ0YW8sXHJcbiAgICAgICAgICAgIENWVkNhcnRhbyxcclxuICAgICAgICAgICAgYmFuZGVpcmFfY2FydGFvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGNhcmROdW1iZXI6IG51bWVyb0NhcnRhby5zcGxpdCgnICcpLmpvaW4oJycpLFxyXG4gICAgICAgICAgICBicmFuZDogYmFuZGVpcmFfY2FydGFvLm5hbWUsXHJcbiAgICAgICAgICAgIGN2djogQ1ZWQ2FydGFvLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uTW9udGg6IG1lc0NhcnRhbyxcclxuICAgICAgICAgICAgZXhwaXJhdGlvblllYXI6IGFub0NhcnRhbyxcclxuICAgICAgICAgICAgc3VjY2VzczogKHIpID0+IHRoaXMucHJvcHMuc2V0Rm9ybSh7IGNyZWRpdF9jYXJkX3Rva2VuOiByLmNhcmQudG9rZW4gfSksXHJcbiAgICAgICAgICAgIGVycm9yOiAocikgPT4gY29uc29sZS5sb2cocilcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuY3JlYXRlQ2FyZFRva2VuKHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyY2VsYXMoKXtcclxuICAgICAgICBjb25zdCB7IGZyZXRlU2VsZWNpb25hZG8sIGNhcnJpbmhvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgYmFuZGVpcmFfY2FydGFvIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcblxyXG4gICAgICAgIGxldCB2YWxvclRvdGFsID0gY2FycmluaG8ucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFsbCwgaXRlbSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgKyAoTnVtYmVyKGl0ZW0ucHJlY29Vbml0YXJpbykgKiBOdW1iZXIoaXRlbS5xdWFudGlkYWRlKSksIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICBsZXQgZnJldGVWYWxvciA9IE51bWJlcihmcmV0ZVNlbGVjaW9uYWRvLlZhbG9yLnJlcGxhY2UoJywnLCcuJykpO1xyXG5cclxuICAgICAgICBQYWdTZWd1cm9EaXJlY3RQYXltZW50LmdldEluc3RhbGxtZW50cyh7XHJcbiAgICAgICAgICAgIGFtb3VudDogdmFsb3JUb3RhbCArIGZyZXRlVmFsb3IsXHJcbiAgICAgICAgICAgIG1heEluc3RhbGxtZW50Tm9JbnRlcmVzdDogNixcclxuICAgICAgICAgICAgbWF4SW5zdGFsbG1lbnQ6IDYsXHJcbiAgICAgICAgICAgIGJyYW5kOiBiYW5kZWlyYV9jYXJ0YW8ubmFtZSxcclxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7IHBhcmNlbGFzQ2FydGFvOiBkYXRhLmluc3RhbGxtZW50cyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7IHBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGE6IGRhdGEuaW5zdGFsbG1lbnRzW2JhbmRlaXJhX2NhcnRhby5uYW1lXVswXSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IChyKSA9PiBjb25zb2xlLmxvZyhyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9wY29lc1BhZ2FtZW50bygpe1xyXG4gICAgICAgIGNvbnN0IHsgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtUmFkaW8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXBvX3BhZ2FtZW50b19zZWxlY2lvbmFkb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09ICdib2xldG8nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMuc2V0VGlwb1BhZ2FtZW50byhcImJvbGV0b1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCb2xldG8gQmFuY8OhcmlvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVJhZGlvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb19wYWdhbWVudG9fc2VsZWNpb25hZG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSAnY2FydGFvJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnByb3BzLnNldFRpcG9QYWdhbWVudG8oXCJjYXJ0YW9cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FydMOjbyBkZSBDcsOpZGl0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3QgeyB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgQ1BGLCBDUEZib2xldG8sXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbywgbm9tZUNhcnRhbywgbWVzQ2FydGFvLCBhbm9DYXJ0YW8sIHBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEsIENWVkNhcnRhb1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgZXJyb3MgPSB7fTtcclxuXHJcbiAgICAgICAgaWYodGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImJvbGV0b1wiKXtcclxuICAgICAgICAgICAgaWYoIUNQRmJvbGV0byAmJiAhQ1BGKSBlcnJvcy5DUEZib2xldG8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IENQRlwiO1xyXG4gICAgICAgICAgICBpZihDUEZib2xldG8gJiYgQ1BGYm9sZXRvLmxlbmd0aCAhPT0gMTQgJiYgIXZhbGlkYXRlQ1BGKENQRmJvbGV0bykpXHJcbiAgICAgICAgICAgICAgICBlcnJvcy5DUEZib2xldG8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IENQRiBjb3JyZXRhbWVudGVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZighbnVtZXJvQ2FydGFvIHx8IG51bWVyb0NhcnRhby5sZW5ndGggIT09IDE5KSBlcnJvcy5udW1lcm9DYXJ0YW8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gbsO6bWVybyBkbyBzZXUgY2FydMOjb1wiO1xyXG4gICAgICAgICAgICBpZighbm9tZUNhcnRhbykgZXJyb3Mubm9tZUNhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBub21lIHF1ZSBlc3TDoSBubyBjYXJ0w6NvXCI7XHJcbiAgICAgICAgICAgIGlmKCFtZXNDYXJ0YW8gfHwgbWVzQ2FydGFvLmxlbmd0aCAhPT0gMikgZXJyb3MubWVzQ2FydGFvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIG3DqnMgZGUgdmVuY2ltZW50byBkbyBjYXJ0w6NvXCI7XHJcbiAgICAgICAgICAgIGlmKCFhbm9DYXJ0YW8gfHwgYW5vQ2FydGFvLmxlbmd0aCAhPT0gNCkgZXJyb3MuYW5vQ2FydGFvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIGFubyBkZSB2ZW5jaW1lbnRvIGRvIGNhcnTDo29cIjtcclxuICAgICAgICAgICAgaWYoIXBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEpIGVycm9zLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEgPSBcIlNlbGVjaW9uZSB1bWEgZm9ybWEgZGUgcGFnYW1lbnRvXCI7XHJcbiAgICAgICAgICAgIGlmKCFDVlZDYXJ0YW8gfHwgQ1ZWQ2FydGFvLmxlbmd0aCAhPT0gMykgZXJyb3MuQ1ZWQ2FydGFvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIGPDs2RpZ28gZGUgc2VndXJhbsOnYSBkbyBjYXJ0w6NvXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3MgfSk7XHJcbiAgICAgICAgcmV0dXJuICEoIE9iamVjdC5rZXlzKGVycm9zKS5sZW5ndGggPiAwICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB0aGlzLnByb3BzLnNldEZvcm0oeyBbZmllbGRdOiB2YWx1ZSB9KS50aGVuKCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcblxyXG4gICAgcmVuZGVyUGFnYW1lbnRvQ29tQm9sZXRvKCl7XHJcbiAgICAgICAgY29uc3QgeyBDUEYsIENQRmJvbGV0byB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEYWRvcy1QYWdhbWVudG9cIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Q1BGYm9sZXRvIHx8IENQRn0gXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLkNQRmJvbGV0b31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ1BGXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiQ1BGYm9sZXRvXCIsIGZvcm1hdENQRihlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUGFnYW1lbnRvQ29tQ2FydGFvKCl7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgbm9tZUNhcnRhbywgXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbywgXHJcbiAgICAgICAgICAgIENWVkNhcnRhbywgXHJcbiAgICAgICAgICAgIG1lc0NhcnRhbywgXHJcbiAgICAgICAgICAgIGFub0NhcnRhbywgXHJcbiAgICAgICAgICAgIHBhcmNlbGFzQ2FydGFvLCBcclxuICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSxcclxuICAgICAgICAgICAgYmFuZGVpcmFfY2FydGFvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGFkb3MtUGFnYW1lbnRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vbWVDYXJ0YW99IFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLm5vbWVDYXJ0YW99XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWVDYXJ0YW9cIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgY29tbyBlc2NyaXRvIG5vIGNhcnTDo29cIiBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWUgQ29tcGxldG8gbm8gQ2FydMOjb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm5vbWVDYXJ0YW9cIiwgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtZXJvQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLm51bWVyb0NhcnRhb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1lcm9DYXJ0YW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWFhYWCBYWFhYIFhYWFggWFhYWFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvIGRvIENhcnTDo29cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm51bWVyb0NhcnRhb1wiLCBmb3JtYXRDYXJ0YW8oZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Q1ZWQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLkNWVkNhcnRhb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJDVlZDYXJ0YW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWFhYXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkPDs2RpZ28gZGUgU2VndXJhbsOnYSBkbyBDYXJ0w6NvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJDVlZDYXJ0YW9cIiwgZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlLCAzKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EYXRhIGRlIFZhbGlkYWRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MubWVzQ2FydGFvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzQ2FydGFvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTU1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNw6pzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm1lc0NhcnRhb1wiLCBmb3JtYXROdW1iZXIoZS50YXJnZXQudmFsdWUsIDIpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGFzaC1wYWdhbWVudG9cIj4mbmJzcDsvJm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fub0NhcnRhb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmFub0NhcnRhb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFub0NhcnRhb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFBQUFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiYW5vQ2FydGFvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSwgNCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXJjZWxhczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJjZWxhc0NhcnRhbyAmJiBwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXJjZWxhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEucXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwicGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYVwiLCBwYXJjZWxhc0NhcnRhb1tiYW5kZWlyYV9jYXJ0YW8ubmFtZV1bZS50YXJnZXQudmFsdWUgLSAxXSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjaW9uZSBhIHF1YW50aWRhZGUgZGUgcGFyY2VsYXMgcGFyYSBwYWdhbWVudG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJjZWxhc0NhcnRhb1tiYW5kZWlyYV9jYXJ0YW8ubmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsNilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0ucXVhbnRpdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fXggZGUge2Zvcm1hdE1vbmV5KGl0ZW0udG90YWxBbW91bnQvaXRlbS5xdWFudGl0eSl9IHNlbSBqdXJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3MucGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImVycm9cIj57ZXJyb3MucGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEYWRvcy1QYWdhbWVudG8tQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+REFET1MgREUgUEFHQU1FTlRPPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlck9wY29lc1BhZ2FtZW50bygpIH1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gJ2JvbGV0bycgJiYgdGhpcy5yZW5kZXJQYWdhbWVudG9Db21Cb2xldG8oKSB9XHJcbiAgICAgICAgICAgICAgICB7IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gJ2NhcnRhbycgJiYgdGhpcy5yZW5kZXJQYWdhbWVudG9Db21DYXJ0YW8oKSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5obyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm0sXHJcbiAgICB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG86IHN0YXRlLmNoZWNrb3V0LnRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyxcclxuICAgIHNlc3Npb25JZDogc3RhdGUuY2hlY2tvdXQuc2Vzc2lvbklkLFxyXG4gICAgc2VuZGVySGFzaDogc3RhdGUuY2hlY2tvdXQuc2VuZGVySGFzaCxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoRGFkb3NQYWdhbWVudG8pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGlzdGFEZVByb2R1dG9zIGZyb20gJy4uL0NhcnJpbmhvL0xpc3RhRGVQcm9kdXRvcyc7XHJcblxyXG5jbGFzcyBEYWRvc1BlZGlkbyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGFkb3MtUGVkaWRvLUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkRBRE9TIERPIFBFRElETzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0YURlUHJvZHV0b3Mgc2VtQWx0ZXJhY29lcyAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFkb3NQZWRpZG87IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBBbGVydEdlcmFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWxlcnQvR2VyYWwnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUNQRiB9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBTdWJtaXREYWRvc0NsaWVudGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IGF2aXNvOiBudWxsIH1cclxuXHJcbiAgICBjYWxsYmFjayA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmKCFlcnJvcil7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucGVybWl0aXIoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF2aXNvOiBudWxsIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF2aXNvOiB7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyAgXHJcbiAgICAgICAgICAgIGVtYWlsLCBzZW5oYSwgbm9tZSwgQ1BGLCBkYXRhRGVOYXNjaW1lbnRvLCB0ZWxlZm9uZSxcclxuICAgICAgICAgICAgbG9jYWwsIG51bWVybywgYmFpcnJvLCBjaWRhZGUsIGVzdGFkbywgQ0VQXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IHVzdWFyaW8gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCB0ZW1FcnJvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKCF1c3VhcmlvICYmICFlbWFpbCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIXVzdWFyaW8gJiYgIXNlbmhhKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighbm9tZSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIUNQRiB8fCBDUEYubGVuZ3RoICE9PSAxNCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoQ1BGICYmIENQRi5sZW5ndGggPT09IDE0ICYmICF2YWxpZGF0ZUNQRihDUEYpKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighZGF0YURlTmFzY2ltZW50byB8fCBkYXRhRGVOYXNjaW1lbnRvLmxlbmd0aCAhPT0gMTApIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCF0ZWxlZm9uZSB8fCB0ZWxlZm9uZS5sZW5ndGggPCAxMSkgdGVtRXJybyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFsb2NhbCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIW51bWVybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWJhaXJybykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWNpZGFkZSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWVzdGFkbykgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIUNFUCB8fCBDRVAubGVuZ3RoICE9PSA5KSB0ZW1FcnJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICF0ZW1FcnJvO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnZhbGlkYXRlKCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4sIGZvcm0sIGNsaWVudGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYoIXRva2VuKSB0aGlzLnByb3BzLm5ld0NsaWVudGUoZm9ybSwgdGhpcy5jYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnByb3BzLnVwZGF0ZUNsaWVudGUoZm9ybSwgY2xpZW50ZS5faWQsIHRva2VuLCB0aGlzLmNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QWxlcnRHZXJhbCBhdmlzbz17dGhpcy5zdGF0ZS5hdmlzb30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1jdGFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTlRJTlVBUiBQRURJRE9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICB0b2tlbjogc3RhdGUuYXV0aC50b2tlbixcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoU3VibWl0RGFkb3NDbGllbnRlKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IERhZG9zQ2xpZW50ZSBmcm9tICcuL0RhZG9zQ2xpZW50ZSc7XHJcbmltcG9ydCBEYWRvc0VudHJlZ2EgZnJvbSAnLi9EYWRvc0VudHJlZ2EnO1xyXG5pbXBvcnQgU3VibWl0RGFkb3NDbGllbnRlIGZyb20gJy4vU3VibWl0RGFkb3NDbGllbnRlJztcclxuaW1wb3J0IERhZG9zRnJldGUgZnJvbSAnLi9EYWRvc0ZyZXRlJztcclxuaW1wb3J0IERhZG9zUGFnYW1lbnRvIGZyb20gJy4vRGFkb3NQYWdhbWVudG8nO1xyXG5pbXBvcnQgRGFkb3NQZWRpZG8gZnJvbSAnLi9EYWRvc1BlZGlkbyc7XHJcbmltcG9ydCBDaGVja291dEJ1dHRvbiBmcm9tICcuL0NoZWNrb3V0QnV0dG9uJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgQ2hlY2tvdXRDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgcGVybWlzc2FvSW5pY2lhbDogZmFsc2UsXHJcbiAgICAgICAgcGVybWlzc2FvQ2hlY2tvdXQ6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBwZXJtaXNzYW9JbmljaWFsLCBwZXJtaXNzYW9DaGVja291dCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHVzdWFyaW8sIGZyZXRlU2VsZWNpb25hZG8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGVja291dCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICBDT05DTFVJTkRPIFNFVSBQRURJRE9cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxEYWRvc0NsaWVudGUgXHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpbz17dXN1YXJpb30gXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2FvSW5pY2lhbD17cGVybWlzc2FvSW5pY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICBwZXJtaXRpcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBlcm1pc3Nhb0luaWNpYWw6IHRydWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICB7ICggcGVybWlzc2FvSW5pY2lhbCB8fCB1c3VhcmlvICkgJiYgPERhZG9zRW50cmVnYSAvPn1cclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgKCBwZXJtaXNzYW9JbmljaWFsIHx8IHVzdWFyaW8gKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8U3VibWl0RGFkb3NDbGllbnRlIHBlcm1pdGlyPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcGVybWlzc2FvQ2hlY2tvdXQ6IHRydWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IHBlcm1pc3Nhb0NoZWNrb3V0ICYmIDxEYWRvc0ZyZXRlIC8+fVxyXG4gICAgICAgICAgICAgICAgeyBwZXJtaXNzYW9DaGVja291dCAmJiBmcmV0ZVNlbGVjaW9uYWRvICYmIDxEYWRvc1BhZ2FtZW50byAvPn1cclxuICAgICAgICAgICAgICAgIHsgcGVybWlzc2FvQ2hlY2tvdXQgJiYgZnJldGVTZWxlY2lvbmFkbyAmJiA8RGFkb3NQZWRpZG8gLz59XHJcbiAgICAgICAgICAgICAgICB7IHBlcm1pc3Nhb0NoZWNrb3V0ICYmIGZyZXRlU2VsZWNpb25hZG8gJiYgPENoZWNrb3V0QnV0dG9uIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c3VhcmlvOiBzdGF0ZS5hdXRoLnVzdWFyaW8sXHJcbiAgICBmcmV0ZVNlbGVjaW9uYWRvOiBzdGF0ZS5jYXJyaW5oby5mcmV0ZVNlbGVjaW9uYWRvXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoQ2hlY2tvdXRDb250YWluZXIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCBBbGVydEdlcmFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWxlcnQvR2VyYWwnO1xyXG5cclxuY2xhc3MgQ2xpZW50ZUxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHNlbmhhOiBcIlwiLFxyXG4gICAgICAgIGF2aXNvOiBudWxsLFxyXG4gICAgICAgIGVycm9zOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckF2aXNvRGVSZWdpc3Rybygpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q29tcHJhciBjb21vIFZpc2l0YW50ZS9SZWFsaXphciBSZWdpc3RybzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5wZXJtaXRpcigpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DT05USU5VQVI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgc2VuaGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgZXJyb3MgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoIWVtYWlsKSBlcnJvcy5lbWFpbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW1haWxcIjtcclxuICAgICAgICBpZighc2VuaGEpIGVycm9zLnNlbmhhID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBhIHN1YSBzZW5oYVwiO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3MsIGF2aXNvOiBudWxsIH0pO1xyXG4gICAgICAgIHJldHVybiAhKE9iamVjdC5rZXlzKGVycm9zKS5sZW5ndGggPiAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSA9IChmaWVsZCwgZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH0sICgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgc2VuaGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hdXRlbnRpY2FyKHsgZW1haWwsIHBhc3N3b3JkOiBzZW5oYSB9LCBmYWxzZSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycm9yKSB0aGlzLnNldFN0YXRlKHsgYXZpc286IHsgc3RhdHVzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZvcm1Mb2dpbigpe1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHNlbmhhLCBlcnJvcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkZhemVyIExvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxBbGVydEdlcmFsIGF2aXNvPXt0aGlzLnN0YXRlLmF2aXNvfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJlbWFpbFwifSBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiZW1haWxcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbmhhfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtcInNlbmhhXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLnNlbmhhfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VuaGFcIiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuaGFcIiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJzZW5oYVwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FTlRSQVI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2xpZW50ZS1Mb2dpbiBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJBdmlzb0RlUmVnaXN0cm8oKSB9XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyRm9ybUxvZ2luKCkgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgYWN0aW9ucykoQ2xpZW50ZUxvZ2luKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybVNpbXBsZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dHMvRm9ybVNpbXBsZXMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgdmFsaWRhdGVDUEYgfSBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0ZSc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGFEZU5hc2NpbWVudG8sIGZvcm1hdFRlbGVmb25lLCBmb3JtYXRDUEYgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnO1xyXG5cclxuY2xhc3MgRGFkb3NDbGllbnRlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBlcnJvczoge31cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBzZW5oYTogXCJcIixcclxuICAgICAgICAgICAgbm9tZTogdGhpcy5wcm9wcy5jbGllbnRlID8gdGhpcy5wcm9wcy5jbGllbnRlLm5vbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICBDUEY6IHRoaXMucHJvcHMuY2xpZW50ZSA/IHRoaXMucHJvcHMuY2xpZW50ZS5jcGYgOiBcIlwiLFxyXG4gICAgICAgICAgICB0ZWxlZm9uZTogdGhpcy5wcm9wcy5jbGllbnRlICYmIHRoaXMucHJvcHMuY2xpZW50ZS50ZWxlZm9uZXMgPyBcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpZW50ZS50ZWxlZm9uZXNbMF0gOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRhRGVOYXNjaW1lbnRvOiB0aGlzLnByb3BzLmNsaWVudGUgPyBcclxuICAgICAgICAgICAgICAgIG1vbWVudCh0aGlzLnByb3BzLmNsaWVudGUuZGF0YURlTmFzY2ltZW50bykuZm9ybWF0KFwiREQvTU0vWVlZWVwiKSA6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcclxuICAgICAgICBpZighcHJldlByb3BzLmNsaWVudGUgJiYgdGhpcy5wcm9wcy5jbGllbnRlKXtcclxuICAgICAgICAgICAgY29uc3QgeyBub21lLCBjcGYsIHRlbGVmb25lcywgZGF0YURlTmFzY2ltZW50byB9ID0gdGhpcy5wcm9wcy5jbGllbnRlO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgbm9tZSwgQ1BGOiBjcGYsIHRlbGVmb25lOiB0ZWxlZm9uZXNbMF0sIFxyXG4gICAgICAgICAgICAgICAgZGF0YURlTmFzY2ltZW50bzogbW9tZW50KGRhdGFEZU5hc2NpbWVudG8pLmZvcm1hdChcIkREL01NL1lZWVlcIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgc2VuaGEsIG5vbWUsIENQRiwgZGF0YURlTmFzY2ltZW50bywgdGVsZWZvbmUgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IHVzdWFyaW8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZXJyb3MgPSB7fTtcclxuXHJcbiAgICAgICAgaWYoIXVzdWFyaW8gJiYgIWVtYWlsKSBlcnJvcy5lbWFpbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW1haWxcIjtcclxuICAgICAgICBpZighdXN1YXJpbyAmJiAhc2VuaGEpIGVycm9zLnNlbmhhID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBhIHN1YSBzZW5oYVwiO1xyXG5cclxuICAgICAgICBpZighbm9tZSkgZXJyb3Mubm9tZSA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgbm9tZVwiO1xyXG4gICAgICAgIGlmKCFDUEYgfHwgQ1BGLmxlbmd0aCAhPT0gMTQpIGVycm9zLkNQRiA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgQ1BGXCI7XHJcbiAgICAgICAgaWYoQ1BGICYmIENQRi5sZW5ndGggPT09IDE0ICYmICF2YWxpZGF0ZUNQRihDUEYpKSBcclxuICAgICAgICAgICAgZXJyb3MuQ1BGID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBDUEYgY29ycmV0YW1lbnRlXCI7XHJcbiAgICAgICAgaWYoIWRhdGFEZU5hc2NpbWVudG8gfHwgZGF0YURlTmFzY2ltZW50by5sZW5ndGggIT09IDEwKVxyXG4gICAgICAgICAgICBlcnJvcy5kYXRhRGVOYXNjaW1lbnRvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBhIHN1YSBkYXRhIGRlIG5hc2NpbWVudG9cIjtcclxuICAgICAgICBpZighdGVsZWZvbmUgfHwgdGVsZWZvbmUubGVuZ3RoIDwgMTEpXHJcbiAgICAgICAgICAgIGVycm9zLnRlbGVmb25lID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSB0ZWxlZm9uZVwiO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3MgfSk7XHJcbiAgICAgICAgcmV0dXJuICEoT2JqZWN0LmtleXMoZXJyb3MpLmxlbmd0aCA+IDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlID0gKGZpZWxkLCBlLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7IFtmaWVsZF06IHZhbHVlIHx8IGUudGFyZ2V0LnZhbHVlIH0sIG51bGwpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy52YWxpZGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYWRvc1JlZ2lzdHJvKCl7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgc2VuaGEgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbCB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRS1tYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJlbWFpbFwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZW5oYSB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbmhhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuaGFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZW5oYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5zZW5oYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwic2VuaGFcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYWRvc1VzdWFyaW8oKXtcclxuICAgICAgICBjb25zdCB7IG5vbWUsIENQRiwgZGF0YURlTmFzY2ltZW50bywgdGVsZWZvbmUgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9tZSB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5ub21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJub21lXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0NQRiB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNQRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLkNQRn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIkNQRlwiLCBlLCBmb3JtYXRDUEYoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhRGVOYXNjaW1lbnRvIHx8IFwiXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuZGF0YURlTmFzY2ltZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRhRGVOYXNjaW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkREL01NL0FBQUFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0YSBkZSBOYXNjaW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJkYXRhRGVOYXNjaW1lbnRvXCIsIGUsIGZvcm1hdERhdGFEZU5hc2NpbWVudG8oZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVsZWZvbmUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLnRlbGVmb25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlbGVmb25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIigzNCkgMTIzNC01Njc4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbGVmb25lL0NlbHVsYXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcInRlbGVmb25lXCIsIGUsIGZvcm1hdFRlbGVmb25lKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkRBRE9TIERPIENMSUVOVEU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ICF0aGlzLnByb3BzLnVzdWFyaW8gJiYgdGhpcy5yZW5kZXJEYWRvc1JlZ2lzdHJvKCkgfVxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckRhZG9zVXN1YXJpbygpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG4gICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZS5jbGllbnRlLFxyXG4gICAgZm9ybTogc3RhdGUuY2hlY2tvdXQuZm9ybVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShEYWRvc0NsaWVudGVDb250YWluZXIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUGFnaW5hcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpc3Rhcy9QYWdpbmFzJztcclxuaW1wb3J0IFJlZGVzU29jaWFpcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpc3Rhcy9SZWRlc1NvY2lhaXMnO1xyXG5pbXBvcnQgRGFkb3NEYUxvamEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JdGVtL0RhZG9zRGFMb2phJztcclxuXHJcbmNsYXNzIFJvZGFwZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJvZGFwZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmVkZXNTb2NpYWlzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhZG9zRGFMb2phIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2RhcGU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMsIE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlLCBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIGZyb20gdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IHBhZ2UgKGJyb3dzZXIgb25seSkuXG4gKi9cbmZ1bmN0aW9uIGlzTG9jYWwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpblxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIGlmIChcbiAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICBlLmN0cmxLZXkgfHxcbiAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICApIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgY2hpbGRFbG0gJiYgY2hpbGRFbG0udGFnTmFtZSkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgIGlmIChcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiAmJlxuICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICApIHtcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGNoaWxkUHJvcHMuaHJlZilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeSdcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZVBhdGhcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgIDogZmluYWxVcmwuaHJlZlxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgX19OIH0gPSBlLnN0YXRlXG4gICAgaWYgKCFfX04pIHtcbiAgICAgIC8vIHRoaXMgaGlzdG9yeSBzdGF0ZSB3YXNuJ3QgY3JlYXRlZCBieSBuZXh0LmpzIHNvIGl0IGNhbiBiZSBpZ25vcmVkXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbEJhc2VQYXRoKGFzKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhvcHRpb25zLl9OX1gsIG9wdGlvbnMuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZW5jb2RlIGFzIGVuY29kZVF1ZXJ5c3RyaW5nIH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcXVlcnkgPSAnJyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpO1xuICAgIHF1ZXJ5ID0gZW5jb2RlUXVlcnlzdHJpbmcocXVlcnkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJjb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTCgnaHR0cDovL24nKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmltcG9ydCBDYWJlY2FsaG8gZnJvbSAnLi4vY29udGFpbmVycy9DYWJlY2FsaG8nO1xyXG5pbXBvcnQgQ2hlY2tvdXRDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9DaGVja291dCc7XHJcbmltcG9ydCBSb2RhcGUgZnJvbSAnLi4vY29udGFpbmVycy9Sb2RhcGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcyB9KXtcclxuICAgICAgICBpZihyZXMpe1xyXG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvY2FycmluaG9cIiB9KTtcclxuICAgICAgICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0IFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDaGVja291dCB8IFNhbXMgUGFwZWxhcmlhIC0gU3VhIG1lbGhvciBlc2NvbGhhXCJcclxuICAgICAgICAgICAgICAgIHBhZ1NlZ3VybyA+XHJcbiAgICAgICAgICAgICAgICA8Q2FiZWNhbGhvIHNpbXBsZXMgLz5cclxuICAgICAgICAgICAgICAgIDxDaGVja291dENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPFJvZGFwZSAvPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBcclxuICAgIEFVVEVOVElDQVJfVE9LRU4sXHJcbiAgICBBVVRFTlRJQ0FSLFxyXG4gICAgVVNFUixcclxuICAgIERFU0FVVEVOVElDQVJcclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSSwgdmVyc2FvIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgc2V0Q29va2llLCByZW1vdmVDb29raWUgfSBmcm9tICcuLi8uLi91dGlscy9jb29raWUnO1xyXG5pbXBvcnQgeyBnZXRIZWFkZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xyXG5pbXBvcnQgeyBmZXRjaENsaWVudGUgfSBmcm9tICcuL2NsaWVudGVBY3Rpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCByZWF1dGhlbnRpY2F0ZSA9IHRva2VuID0+ICh7IHR5cGU6IEFVVEVOVElDQVJfVE9LRU4sIHBheWxvYWQ6IHRva2VuIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoeyB0b2tlbiB9KSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvdXN1YXJpb3NgLCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBVU0VSLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnVzdWFyaW8gfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXV0ZW50aWNhciA9ICh7IGVtYWlsLCBwYXNzd29yZCB9LCBnb1RvID0gZmFsc2UsIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS91c3Vhcmlvcy9sb2dpbmAsIHtlbWFpbCwgcGFzc3dvcmR9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0Q29va2llKCd0b2tlbicsIHJlc3BvbnNlLmRhdGEudXN1YXJpby50b2tlbik7XHJcbiAgICAgICAgaWYoZ29UbykgUm91dGVyLnB1c2goZ29Ubyk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBVVRFTlRJQ0FSLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2xpZW50ZShyZXNwb25zZS5kYXRhLnVzdWFyaW8uX2lkLCByZXNwb25zZS5kYXRhLnVzdWFyaW8udG9rZW4pKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXNhdXRlbnRpY2FyID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmVtb3ZlQ29va2llKCd0b2tlbicpO1xyXG4gICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVTQVVURU5USUNBUiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlbmhhID0gKGRhdGEsIHRva2VuLCBjYikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucHV0KFxyXG4gICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS91c3Vhcmlvc2AsIFxyXG4gICAgICAgIHsgcGFzc3dvcmQ6IGRhdGEubm92YVNlbmhhIH0sIFxyXG4gICAgICAgIGdldEhlYWRlcnModG9rZW4pXHJcbiAgICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFVTRVIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEudXN1YXJpbyB9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHJlYXV0aGVudGljYXRlLFxyXG4gICAgZ2V0VXNlcixcclxuICAgIGF1dGVudGljYXIsXHJcbiAgICBkZXNhdXRlbnRpY2FyLFxyXG4gICAgdXBkYXRlU2VuaGFcclxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUEksIHZlcnNhbywgbG9qYSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGdldENhcnQsIHJlbW92ZUNhcnQsIGNsZWFuQ2FydCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5pbXBvcnQge1xyXG4gICAgU0VUX0NBUlJJTkhPLFxyXG4gICAgQ0xFQU5fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9QUk9EVVRPX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9WQUxPUl9FTlRSRUdBLFxyXG4gICAgVVBEQVRFX1FURF9DQVJULFxyXG4gICAgVVBEQVRFX0ZSRVRFX0NBUlQsXHJcbiAgICBSRU1PVkVfUFJPRF9DQVJULFxyXG4gICAgQ0xFQU5fRlJFVEVTXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENhcnJpbmhvID0gKCkgPT4gKHsgdHlwZTogU0VUX0NBUlJJTkhPLCBjYXJyaW5obzogZ2V0Q2FydCgpIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFuQ2FycmluaG8gPSAoKSA9PiB7XHJcbiAgICBjbGVhbkNhcnQoKTtcclxuICAgIHJldHVybiB7IHR5cGU6IENMRUFOX0NBUlJJTkhPIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvQ2FycmluaG8gPSAoaWQsaWR4Q2FycmluaG8pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvJHtpZH0/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgIHR5cGU6IEZFVENIX1BST0RVVE9fQ0FSUklOSE8sIFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCBcclxuICAgICAgICAgICAgaWR4Q2FycmluaG8gXHJcbiAgICB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFZhcmlhY29lc0NhcnJpbmhvID0gKGlkLCBwcm9kdXRvLCBpZHhDYXJyaW5obykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS92YXJpYWNvZXMvJHtpZH0/cHJvZHV0bz0ke3Byb2R1dG99JmxvamE9JHtsb2phfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICB0eXBlOiBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITywgXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsIFxyXG4gICAgICAgICAgICBpZHhDYXJyaW5obyBcclxuICAgIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGFyRnJldGUgPSAoY2VwLCBjYXJyaW5obykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucG9zdChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvZW50cmVnYXMvY2FsY3VsYXJgLCB7IGNlcCwgY2FycmluaG8gfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgIHR5cGU6IEZFVENIX1ZBTE9SX0VOVFJFR0EsIFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCBcclxuICAgICAgICAgICAgY2VwXHJcbiAgICB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVyUHJvZHV0byA9IChpbmRleCkgPT4ge1xyXG4gICAgcmVtb3ZlQ2FydChpbmRleCk7XHJcbiAgICByZXR1cm4geyB0eXBlOiBSRU1PVkVfUFJPRF9DQVJULCBpZHhDYXJyaW5obzogaW5kZXggfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVRdWFudGlkYWRlID0gKGNoYW5nZSwgaW5kZXgpID0+ICh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfUVREX0NBUlQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhDYXJyaW5obzogaW5kZXggXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWNpb25hckZyZXRlID0gKGZyZXRlU2VsZWNpb25hZG8pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFX0ZSRVRFX0NBUlQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuZXhwb3J0IGNvbnN0IGNsZWFuRnJldGVzID0gKCkgPT4gKHsgdHlwZTogQ0xFQU5fRlJFVEVTIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2V0Q2FycmluaG8sXHJcbiAgICBjbGVhbkNhcnJpbmhvLFxyXG4gICAgZmV0Y2hQcm9kdXRvQ2FycmluaG8sXHJcbiAgICBmZXRjaFZhcmlhY29lc0NhcnJpbmhvLFxyXG4gICAgY2FsY3VsYXJGcmV0ZSxcclxuICAgIHVwZGF0ZVF1YW50aWRhZGUsXHJcbiAgICBzZWxlY2lvbmFyRnJldGUsXHJcbiAgICByZW1vdmVyUHJvZHV0byxcclxuICAgIGNsZWFuRnJldGVzXHJcbn07IiwiaW1wb3J0IHtcclxuICAgIEZFVENIX0NBVEVHT1JJQVMsXHJcbiAgICBGRVRDSF9DQVRFR09SSUEsXHJcbiAgICBGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1NcclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSSwgdmVyc2FvLCBsb2phIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhdGVnb3JpYXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2F0ZWdvcmlhcy9kaXNwb25pdmVpcz9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NBVEVHT1JJQVMsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhdGVnb3JpYSA9IChpZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jYXRlZ29yaWFzLyR7aWR9P2xvamE9JHtsb2phfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NBVEVHT1JJQSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHV0b3NDYXRlZ29yaWEgPSAoaWQsIGF0dWFsID0gMCwgbGltaXQgPSAyMCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jYXRlZ29yaWFzLyR7aWR9L3Byb2R1dG9zP2xvamE9JHtsb2phfSZvZmZzZXQ9JHthdHVhbH0mbGltaXQ9JHtsaW1pdH1gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZldGNoQ2F0ZWdvcmlhcyxcclxuICAgIGZldGNoQ2F0ZWdvcmlhLFxyXG4gICAgZmV0Y2hQcm9kdXRvc0NhdGVnb3JpYVxyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCB7XHJcbiAgICBTRVRfRk9STSxcclxuICAgIENMRUFOX0ZPUk0sXHJcbiAgICBTRVRfVElQT19QQUdBTUVOVE8sXHJcbiAgICBGRVRDSF9TRVNTSU9OX0lELFxyXG4gICAgRkVUQ0hfU0VOREVSX0hBU0gsXHJcbiAgICBOT1ZPX1BFRElETyxcclxuICAgIFBBR0FSX1BFRElET1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJLCB2ZXJzYW8sIGxvamEgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBnZXRDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcbmltcG9ydCB7IGdldEhlYWRlcnMgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY2xlYW5DYXJyaW5obyB9IGZyb20gJy4vY2FycmluaG9BY3Rpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRGb3JtID0gKHBheWxvYWQsIHByZWZpeCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfRk9STSwgcGF5bG9hZCwgcHJlZml4IH0pO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYW5Gb3JtID0gKCkgPT4gKHsgdHlwZTogQ0xFQU5fRk9STSB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRUaXBvUGFnYW1lbnRvID0gKHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbykgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7IHR5cGU6IFNFVF9USVBPX1BBR0FNRU5UTywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25QYWdhbWVudG8gPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGFnYW1lbnRvcy9zZXNzaW9uYCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1NFU1NJT05fSUQsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcblxyXG4gICAgICAgIFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuc2V0U2Vzc2lvbklkKHJlc3BvbnNlLmRhdGEuc2Vzc2lvbklkKTtcclxuICAgICAgICBsZXQgc2VuZGVySGFzaCA9IFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuZ2V0U2VuZGVySGFzaCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfU0VOREVSX0hBU0gsIHNlbmRlckhhc2ggfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgbm92b1BlZGlkbyA9IChcclxuICAgIGZvcm0sIGZyZXRlU2VsZWNpb25hZG8sIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbywgXHJcbiAgICB2YWxvclRvdGFsLCB0b2tlbiwgc2VuZGVySGFzaCwgY2FycmluaG8gPSBnZXRDYXJ0KCksIGNiID0gbnVsbFxyXG4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnBvc3QoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BlZGlkb3M/bG9qYT0ke2xvamF9YCwge1xyXG4gICAgICAgIGNhcnJpbmhvLFxyXG4gICAgICAgIGVudHJlZ2E6IHtcclxuICAgICAgICAgICAgY3VzdG86IGZyZXRlU2VsZWNpb25hZG8uVmFsb3IucmVwbGFjZSgnLCcsJy4nKSxcclxuICAgICAgICAgICAgdGlwbzogKGZyZXRlU2VsZWNpb25hZG8uQ29kaWdvKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBwcmF6bzogZnJldGVTZWxlY2lvbmFkby5QcmF6b0VudHJlZ2EsXHJcbiAgICAgICAgICAgIGVuZGVyZWNvOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbDogZm9ybS5sb2NhbCxcclxuICAgICAgICAgICAgICAgIG51bWVybzogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgICAgICBjb21wbGVtZW50bzogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgICAgIGJhaXJybzogZm9ybS5iYWlycm8sXHJcbiAgICAgICAgICAgICAgICBjaWRhZGU6IGZvcm0uY2lkYWRlLFxyXG4gICAgICAgICAgICAgICAgZXN0YWRvOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgICAgIENFUDogZm9ybS5DRVBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnYW1lbnRvOiB7XHJcbiAgICAgICAgICAgIHZhbG9yOiB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiY2FydGFvXCIgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5wYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhLnRvdGFsQW1vdW50IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsb3JUb3RhbCxcclxuICAgICAgICAgICAgZm9ybWE6IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJjYXJ0YW9cIiA/IFwiY3JlZGl0Q2FyZFwiIDogXCJib2xldG9cIixcclxuICAgICAgICAgICAgcGFyY2VsYXM6IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJjYXJ0YW9cIiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEucXVhbnRpdHkgOiAxLFxyXG4gICAgICAgICAgICBlbmRlcmVjb0VudHJlZ2FJZ3VhbENvYnJhbmNhOiBmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSxcclxuICAgICAgICAgICAgZW5kZXJlY286IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EubG9jYWwgOiBmb3JtLmxvY2FsLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EubnVtZXJvIDogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgICAgICBjb21wbGVtZW50bzogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmNvbXBsZW1lbnRvIDogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgICAgIGJhaXJybzogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmJhaXJybyA6IGZvcm0uYmFpcnJvLFxyXG4gICAgICAgICAgICAgICAgY2lkYWRlOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EuY2lkYWRlIDogZm9ybS5jaWRhZGUsXHJcbiAgICAgICAgICAgICAgICBlc3RhZG86ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5lc3RhZG8gOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgICAgIENFUDogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLkNFUCA6IGZvcm0uQ0VQXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhcnRhbzogdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImNhcnRhb1wiID8ge1xyXG4gICAgICAgICAgICAgICAgbm9tZUNvbXBsZXRvOiBmb3JtLm5vbWVDYXJ0YW8udHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgY29kaWdvQXJlYTogZm9ybS50ZWxlZm9uZS5zbGljZSgwLDIpLFxyXG4gICAgICAgICAgICAgICAgdGVsZWZvbmU6IGZvcm0udGVsZWZvbmUuc2xpY2UoMikudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgZGF0YURlTmFzY2ltZW50bzogZm9ybS5kYXRhRGVOYXNjaW1lbnRvLFxyXG4gICAgICAgICAgICAgICAgY3JlZGl0X2NhcmRfdG9rZW46IGZvcm0uY3JlZGl0X2NhcmRfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjcGY6IGZvcm0uQ1BGICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IDogdW5kZWZpbmVkIFxyXG4gICAgICAgIH1cclxuICAgIH0sIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogTk9WT19QRURJRE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2gocGFnYXJQZWRpZG8ocmVzcG9uc2UuZGF0YS5wZWRpZG8ucGFnYW1lbnRvLl9pZCwgdG9rZW4sIHNlbmRlckhhc2gsIGNiKSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4gY2IoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2FyUGVkaWRvID0gKGlkLCB0b2tlbiwgc2VuZGVySGFzaCwgY2IgPSBudWxsKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wYWdhbWVudG9zL3BhZ2FyLyR7aWR9P2xvamE9JHtsb2phfWAsIFxyXG4gICAgICAgIHsgc2VuZGVySGFzaCB9LCBcclxuICAgICAgICBnZXRIZWFkZXJzKHRva2VuKVxyXG4gICAgKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogUEFHQVJfUEVESURPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvc3VjZXNzbycpO1xyXG4gICAgICAgIGRpc3BhdGNoKGNsZWFuQ2FycmluaG8oKSk7ICAgICAgICBcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNldEZvcm0sXHJcbiAgICBjbGVhbkZvcm0sXHJcbiAgICBzZXRUaXBvUGFnYW1lbnRvLFxyXG4gICAgZ2V0U2Vzc2lvblBhZ2FtZW50byxcclxuICAgIG5vdm9QZWRpZG8sXHJcbiAgICBwYWdhclBlZGlkb1xyXG59OyIsImltcG9ydCB7IFxyXG4gICAgRkVUQ0hfQ0xJRU5URSxcclxuICAgIExPR09VVF9DTElFTlRFXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUEksIHZlcnNhbywgbG9qYSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Nvb2tpZSc7XHJcbmltcG9ydCB7IGdldEhlYWRlcnMgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXV0ZW50aWNhciwgZGVzYXV0ZW50aWNhciB9IGZyb20gJy4vYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJhd0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgbGV0IF9kYXRhID0gZGF0YS5zcGxpdCgnLycpO1xyXG4gICAgbGV0IGFubyA9IF9kYXRhWzJdO1xyXG4gICAgbGV0IF9tZXMgPSBOdW1iZXIoX2RhdGFbMV0pO1xyXG4gICAgbGV0IG1lcyA9IF9tZXMgPCAxMCA/IFwiMFwiK19tZXMgOiBfbWVzO1xyXG4gICAgbGV0IF9kaWEgPSBOdW1iZXIoX2RhdGFbMF0pICsgMTtcclxuICAgIGxldCBkaWEgPSBfZGlhIDwgMTAgPyBcIjBcIitfZGlhIDogX2RpYTtcclxuICAgIHJldHVybiBgJHthbm99LSR7bWVzfS0ke2RpYX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2xpZW50ZSA9IChpZCwgdG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2xpZW50ZXMvJHtpZH0/bG9qYT0ke2xvamF9YCwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NMSUVOVEUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdDbGllbnRlID0gKGZvcm0sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jbGllbnRlcz9sb2phPSR7bG9qYX1gLCB7XHJcbiAgICAgICAgbm9tZTogZm9ybS5ub21lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtLnNlbmhhLFxyXG4gICAgICAgIGNwZjogZm9ybS5DUEYsXHJcbiAgICAgICAgZW1haWw6IGZvcm0uZW1haWwsXHJcbiAgICAgICAgdGVsZWZvbmVzOiBbZm9ybS50ZWxlZm9uZV0sXHJcbiAgICAgICAgZW5kZXJlY286IHtcclxuICAgICAgICAgICAgbG9jYWw6IGZvcm0ubG9jYWwsXHJcbiAgICAgICAgICAgIG51bWVybzogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvOiBmb3JtLmNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBiYWlycm86IGZvcm0uYmFpcnJvLFxyXG4gICAgICAgICAgICBjaWRhZGU6IGZvcm0uY2lkYWRlLFxyXG4gICAgICAgICAgICBlc3RhZG86IGZvcm0uZXN0YWRvLFxyXG4gICAgICAgICAgICBDRVA6IGZvcm0uQ0VQXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhRGVOYXNjaW1lbnRvOiBnZXRSYXdEYXRhKGZvcm0uZGF0YURlTmFzY2ltZW50bylcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NMSUVOVEUsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goYXV0ZW50aWNhcih7IGVtYWlsOiBmb3JtLmVtYWlsLCBwYXNzd29yZDogZm9ybS5zZW5oYSB9LCBudWxsLCBjYikpO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlID0+IGNiKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDbGllbnRlID0gKGZvcm0sIGlkLCB0b2tlbiwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnB1dChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2xpZW50ZXMvJHtpZH0/bG9qYT0ke2xvamF9YCwge1xyXG4gICAgICAgIG5vbWU6IGZvcm0ubm9tZSxcclxuICAgICAgICBjcGY6IGZvcm0uQ1BGLFxyXG4gICAgICAgIHRlbGVmb25lczogW2Zvcm0udGVsZWZvbmVdLFxyXG4gICAgICAgIGVuZGVyZWNvOiB7XHJcbiAgICAgICAgICAgIGxvY2FsOiBmb3JtLmxvY2FsLFxyXG4gICAgICAgICAgICBudW1lcm86IGZvcm0ubnVtZXJvLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50bzogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgYmFpcnJvOiBmb3JtLmJhaXJybyxcclxuICAgICAgICAgICAgY2lkYWRlOiBmb3JtLmNpZGFkZSxcclxuICAgICAgICAgICAgZXN0YWRvOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgQ0VQOiBmb3JtLkNFUFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YURlTmFzY2ltZW50bzogZ2V0UmF3RGF0YShmb3JtLmRhdGFEZU5hc2NpbWVudG8pXHJcbiAgICB9LCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0xJRU5URSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRDbGllbnRlID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goZGVzYXV0ZW50aWNhcigpKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogTE9HT1VUX0NMSUVOVEUgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hDbGllbnRlLFxyXG4gICAgbmV3Q2xpZW50ZSxcclxuICAgIHVwZGF0ZUNsaWVudGUsXHJcbiAgICBsb2dvdXRDbGllbnRlXHJcbn07IiwiY29uc3QgZXJyb3JIYW5kbGluZyA9IChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YSA6IG51bGwpO1xyXG4gICAgaWYoIWVycm9yLnJlc3BvbnNlIHx8ICFlcnJvci5yZXNwb25zZS5kYXRhKXtcclxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IDUwMCwgbWVzc2FnZTogXCJPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IuIFRlbnRlIG5vdmFtZW50ZS5cIiB9O1xyXG4gICAgfVxyXG4gICAgaWYoZXJyb3IucmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IDQwMSl7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiA0MDEsIG1lc3NhZ2U6IFwiVm9jw6ogbsOjbyB0ZW0gYXV0b3JpemHDp8OjbyBwYXJhIGFjZXNzYXIgZXNzZXMgZGFkb3MuXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgfHwgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcjtcclxuICAgIGlmKF9lcnJvcnMgJiYgdHlwZW9mIF9lcnJvcnMgPT09IFwic3RyaW5nXCIpIHJldHVybiB7IHN0YXR1czogNDAwLCBtZXNzYWdlOiBfZXJyb3JzIH07XHJcblxyXG4gICAgbGV0IG1zZyA9ICdFcnJvOiAnO1xyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoX2Vycm9ycykpe1xyXG4gICAgICAgIE9iamVjdC5rZXlzKF9lcnJvcnMpLmZvckVhY2goKGVycm8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG1zZyArPSBgJHtlcnJvfSR7X2Vycm9yc1tlcnJvXS5tZXNzYWdlIHx8IChfZXJyb3JzW2Vycm9dLnByb3BlcnRpZXMgP1xyXG4gICAgICAgICAgICBfZXJyb3JzW2Vycm9dLnByb3BlcnRpZXMubWVzc2FnZTpcIlwiKSB8fCBfZXJyb3JzW2Vycm9dfVxcbmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1zZyArPSBgUHJlZW5jaGEgY29ycmV0YW1lbnRlICR7IF9lcnJvcnMubGVuZ3RoID4gMSA/IFwib3MgY2FtcG9zIFwiOiBcIm8gY2FtcG8gXCIgfSBkZTpgO1xyXG4gICAgICAgIF9lcnJvcnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBpdGVtLmZpZWxkW2l0ZW0uZmllbGQubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIG1zZyArPSBgICR7ZmllbGR9JHtpbmRleCA9PT0gX2Vycm9ycy5sZW5ndGggLSAxID8gXCIuXCIgOiBcIixcIn1gO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdGF0dXM6IDQwMCwgbWVzc2FnZTogbXNnIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVycm9ySGFuZGxpbmc7IiwiZXhwb3J0IGNvbnN0IGdldEhlYWRlcnMgPSAodG9rZW4pID0+ICh7IGhlYWRlcnM6IHsgXCJBdXRob3JpemF0aW9uXCI6IGBFY29tbWVyY2UgJHt0b2tlbn1gIH0gfSk7IiwiaW1wb3J0IGF1dGhBY3Rpb25zIGZyb20gJy4vYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgY2F0ZWdvcmlhQWN0aW9ucyBmcm9tICcuL2NhdGVnb3JpYUFjdGlvbnMnO1xyXG5pbXBvcnQgbG9qYUFjdGlvbnMgZnJvbSAnLi9sb2phQWN0aW9ucyc7XHJcbmltcG9ydCBwcm9kdXRvQWN0aW9ucyBmcm9tICcuL3Byb2R1dG9BY3Rpb25zJztcclxuaW1wb3J0IGNhcnJpbmhvQWN0aW9ucyBmcm9tICcuL2NhcnJpbmhvQWN0aW9ucyc7XHJcbmltcG9ydCBjbGllbnRlQWN0aW9ucyBmcm9tICcuL2NsaWVudGVBY3Rpb25zJztcclxuaW1wb3J0IGNoZWNrb3V0QWN0aW9ucyBmcm9tICcuL2NoZWNrb3V0QWN0aW9ucyc7XHJcbmltcG9ydCBwZWRpZG9BY3Rpb25zIGZyb20gJy4vcGVkaWRvQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAuLi5hdXRoQWN0aW9ucyxcclxuICAgIC4uLmNhdGVnb3JpYUFjdGlvbnMsXHJcbiAgICAuLi5sb2phQWN0aW9ucyxcclxuICAgIC4uLnByb2R1dG9BY3Rpb25zLFxyXG4gICAgLi4uY2FycmluaG9BY3Rpb25zLFxyXG4gICAgLi4uY2xpZW50ZUFjdGlvbnMsXHJcbiAgICAuLi5jaGVja291dEFjdGlvbnMsXHJcbiAgICAuLi5wZWRpZG9BY3Rpb25zXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgRkVUQ0hfREFET1NcclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEFQSSwgdmVyc2FvLCBsb2phIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhZG9zTG9qYSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9sb2phcy8ke2xvamF9P2xvamE9JHtsb2phfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfREFET1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZldGNoRGFkb3NMb2phXHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgIEZFVENIX1BFRElET1MsXHJcbiAgICBGRVRDSF9QRURJRE8sXHJcbiAgICBDTEVBTl9QRURJRE8sXHJcbiAgICBDQU5DRUxBUl9QRURJRE9cclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBUEksIHZlcnNhbywgbG9qYSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBlcnJvckhhbmRsaW5nIGZyb20gJy4vZXJyb3JIYW5kbGluZyc7XHJcbmltcG9ydCB7IGdldEhlYWRlcnMgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUGVkaWRvcyA9ICh7IG9mZnNldCwgbGltaXQsIHRva2VuIH0pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcz9sb2phPSR7bG9qYX0mb2Zmc2V0PSR7b2Zmc2V0fSZsaW1pdD0ke2xpbWl0fWAsXHJcbiAgICAgICAgZ2V0SGVhZGVycyh0b2tlbilcclxuICAgIClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUEVESURPUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFBlZGlkbyA9IChpZCwgdG9rZW4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcy8ke2lkfT9sb2phPSR7bG9qYX1gLCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUEVESURPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbmNlbGFyUGVkaWRvID0gKGlkLCB0b2tlbiwgY2IpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmRlbGV0ZShgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcy8ke2lkfT9sb2phPSR7bG9qYX1gLCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IENBTkNFTEFSX1BFRElETywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYW5QZWRpZG8gPSAoKSA9PiAoeyB0eXBlOiBDTEVBTl9QRURJRE8gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaFBlZGlkb3MsXHJcbiAgICBmZXRjaFBlZGlkbyxcclxuICAgIGNhbmNlbGFyUGVkaWRvLFxyXG4gICAgY2xlYW5QZWRpZG9cclxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgRkVUQ0hfUFJPRFVUT1MsXHJcbiAgICBGRVRDSF9QRVNRVUlTQSxcclxuICAgIEZFVENIX1BST0RVVE9TX1BFU1FVSVNBLFxyXG4gICAgRkVUQ0hfUFJPRFVUTyxcclxuICAgIEZFVENIX1BST0RVVE9fQVZBTElBQ09FUyxcclxuICAgIEZFVENIX1BST0RVVE9fVkFSSUFDT0VTLFxyXG4gICAgTk9WQV9BVkFMSUFDQU9cclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEFQSSwgdmVyc2FvLCBsb2phIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0SGVhZGVycyB9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvc1BhZ2luYUluaWNpYWwgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvZGlzcG9uaXZlaXM/bG9qYT0ke2xvamF9Jm9mZnNldD0kezB9JmxpbWl0PSR7NH0mc29ydFR5cGU9JHtcInByZWNvLWNyZXNjZW50ZVwifWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfUFJPRFVUT1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRlcm1vID0gKHRlcm1vKSA9PiAoeyB0eXBlOiBGRVRDSF9QRVNRVUlTQSwgdGVybW8gfSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvc1Blc3F1aXNhID0gKHRlcm1vLCBhdHVhbCA9IDAsIGxpbWl0ID0gMjApID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3Mvc2VhcmNoLyR7dGVybW99P2xvamE9JHtsb2phfSZvZmZzZXQ9JHthdHVhbH0mbGltaXQ9JHtsaW1pdH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9TX1BFU1FVSVNBLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCB0ZXJtbyB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHV0byA9IChpZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wcm9kdXRvcy8ke2lkfT9sb2phPSR7bG9qYX1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEF2YWxpYWNvZXMgPSAoaWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvJHtpZH0vYXZhbGlhY29lcz9sb2phPSR7bG9qYX0maWQ9JHtpZH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9fQVZBTElBQ09FUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVmFyaWFjb2VzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3Byb2R1dG9zLyR7aWR9L3ZhcmlhY29lcz9sb2phPSR7bG9qYX0maWQ9JHtpZH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9fVkFSSUFDT0VTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm92YUF2YWxpYWNhbyA9ICh7IG5vbWUsIHRva2VuLCBwcm9kdXRvLCB0ZXh0bywgcG9udHVhY2FvIH0sIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS9hdmFsaWFjb2VzP2xvamE9JHtsb2phfSZwcm9kdXRvPSR7cHJvZHV0b31gLFxyXG4gICAgICAgIHsgbm9tZSwgdGV4dG8sIHBvbnR1YWNhbyB9LFxyXG4gICAgICAgIGdldEhlYWRlcnModG9rZW4pXHJcbiAgICApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogTk9WQV9BVkFMSUFDQU8sIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICAgICAgY2IobnVsbCk7XHJcbiAgICB9KS5jYXRjaChlID0+IGNiKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hQcm9kdXRvc1BhZ2luYUluaWNpYWwsXHJcbiAgICBmZXRjaFRlcm1vLFxyXG4gICAgZmV0Y2hQcm9kdXRvc1Blc3F1aXNhLFxyXG4gICAgZmV0Y2hQcm9kdXRvLFxyXG4gICAgZmV0Y2hBdmFsaWFjb2VzLFxyXG4gICAgZmV0Y2hWYXJpYWNvZXMsXHJcbiAgICBub3ZhQXZhbGlhY2FvXHJcbn07IiwiZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gXCJyZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgQVVURU5USUNBUl9UT0tFTiA9IFwiQVVURU5USUNBUl9UT0tFTlwiLFxyXG4gICAgICAgICAgICAgVVNFUiA9IFwidXNlclwiLFxyXG4gICAgICAgICAgICAgQVVURU5USUNBUiA9ICdBVVRFTlRJQ0FSJyxcclxuICAgICAgICAgICAgIEZFVENIX0NBVEVHT1JJQVMgPSBcImZldGNoX2NhdGVnb3JpYXNcIixcclxuICAgICAgICAgICAgIEZFVENIX0RBRE9TID0gJ2ZldGNoX2RhZG9zJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9TID0gXCJGRVRDSF9QUk9EVVRPU1wiLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0FURUdPUklBID0gJ0ZFVENIX0NBVEVHT1JJQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MgPSAnRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFU1FVSVNBID0gJ0ZFVENIX1BFU1FVSVNBJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9TX1BFU1FVSVNBID0gJ0ZFVENIX1BST0RVVE9TX1BFU1FVSVNBJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE8gPSAnRkVUQ0hfUFJPRFVUTycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMgPSAnRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9fVkFSSUFDT0VTID0gJ0ZFVENIX1BST0RVVE9fVkFSSUFDT0VTJyxcclxuICAgICAgICAgICAgIE5PVkFfQVZBTElBQ0FPID0gJ05PVkFfQVZBTElBQ0FPJyxcclxuICAgICAgICAgICAgIFNFVF9DQVJSSU5ITyA9ICdTRVRfQ0FSUklOSE8nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fQ0FSUklOSE8gPSAnQ0xFQU5fQ0FSUklOSE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT19DQVJSSU5ITyA9ICdGRVRDSF9QUk9EVVRPX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPID0gJ0ZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1ZBTE9SX0VOVFJFR0EgPSAnRkVUQ0hfVkFMT1JfRU5UUkVHQScsXHJcbiAgICAgICAgICAgICBVUERBVEVfUVREX0NBUlQgPSAnVVBEQVRFX1FURF9DQVJUJyxcclxuICAgICAgICAgICAgIFVQREFURV9GUkVURV9DQVJUID0gJ1VQREFURV9GUkVURV9DQVJUJyxcclxuICAgICAgICAgICAgIFJFTU9WRV9QUk9EX0NBUlQgPSAnUkVNT1ZFX1BST0RfQ0FSVCcsXHJcbiAgICAgICAgICAgICBDTEVBTl9GUkVURVMgPSAnQ0xFQU5fRlJFVEVTJyxcclxuICAgICAgICAgICAgIEZFVENIX0NMSUVOVEUgPSAnRkVUQ0hfQ0xJRU5URScsXHJcbiAgICAgICAgICAgICBTRVRfRk9STSA9ICdTRVRfRk9STScsXHJcbiAgICAgICAgICAgICBDTEVBTl9GT1JNID0gJ0NMRUFOX0ZPUk0nLFxyXG4gICAgICAgICAgICAgU0VUX1RJUE9fUEFHQU1FTlRPID0gJ1NFVF9USVBPX1BBR0FNRU5UTycsXHJcbiAgICAgICAgICAgICBGRVRDSF9TRVNTSU9OX0lEID0gJ0ZFVENIX1NFU1NJT05fSUQnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfU0VOREVSX0hBU0ggPSAnRkVUQ0hfU0VOREVSX0hBU0gnLFxyXG4gICAgICAgICAgICAgTk9WT19QRURJRE8gPSAnTk9WT19QRURJRE8nLFxyXG4gICAgICAgICAgICAgUEFHQVJfUEVESURPID0gJ1BBR0FSX1BFRElETycsXHJcbiAgICAgICAgICAgICBMT0dPVVRfQ0xJRU5URSA9ICdMT0dPVVRfQ0xJRU5URScsXHJcbiAgICAgICAgICAgICBERVNBVVRFTlRJQ0FSID0gJ0RFU0FVVEVOVElDQVInLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUEVESURPUyA9ICdGRVRDSF9QRURJRE9TJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFRElETyA9ICdGRVRDSF9QRURJRE8nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fUEVESURPID0gJ0NMRUFOX1BFRElETycsXHJcbiAgICAgICAgICAgICBDQU5DRUxBUl9QRURJRE8gPSAnQ0FOQ0VMQVJfUEVESURPJzsiLCJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgX3NhdmVDYXJ0ID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCBjYXJ0ID0gZ2V0Q2FydCgpO1xyXG5cclxuICAgIGxldCBmb3VuZDtcclxuICAgIGNhcnQgPSBjYXJ0Lm1hcCgoX2l0ZW0pID0+IHtcclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgX2l0ZW0ucHJvZHV0byA9PT0gaXRlbS5wcm9kdXRvICYmXHJcbiAgICAgICAgICAgIF9pdGVtLnZhcmlhY2FvID09PSBpdGVtLnZhcmlhY2FvIFxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uX2l0ZW0sIHF1YW50aWRhZGU6IE51bWJlcihfaXRlbS5xdWFudGlkYWRlKSArIE51bWJlcihpdGVtLnF1YW50aWRhZGUpIH1cclxuICAgICAgICB9IGVsc2UgcmV0dXJuIF9pdGVtO1xyXG4gICAgfSk7XHJcbiAgICBpZighZm91bmQpIGNhcnQucHVzaChpdGVtKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkBjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcnQgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQGNhcnRcIikgfHwgXCJbXVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhbkNhcnQgPSAoKSA9PiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkBjYXJ0XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENhcnQgPSAoaXRlbSwgZ29Ub0NhcnQgPSB0cnVlKSA9PiB7XHJcbiAgICBfc2F2ZUNhcnQoaXRlbSk7XHJcbiAgICBpZihnb1RvQ2FydCkgUm91dGVyLnB1c2goXCIvY2FycmluaG9cIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q291bnRJdGVtc0NhcnQgPSAoKSA9PiBcclxuICAgICAgICAgICAgZ2V0Q2FydCgpLnJlZHVjZShcclxuICAgICAgICAgICAgICAgIChjLCB7IHF1YW50aWRhZGUgfSkgPT4gXHJcbiAgICAgICAgICAgICAgICBjICsgKE51bWJlcihxdWFudGlkYWRlKSB8fCAxKSAsIDApO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnQgPSAoaW5kZXgpID0+IHtcclxuICAgIGxldCBjYXJ0ID0gZ2V0Q2FydCgpO1xyXG4gICAgY2FydCA9IGNhcnQucmVkdWNlKFxyXG4gICAgICAgIChhbGwsIGl0ZW0sIF9pbmRleCkgPT5cclxuICAgICAgICBpbmRleCAhPT0gX2luZGV4ID8gYWxsLmNvbmNhdChbaXRlbV0pIDogYWxsLCBbXVxyXG4gICAgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQGNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRDYXJ0LFxyXG4gICAgYWRkQ2FydCxcclxuICAgIGNsZWFuQ2FydCxcclxuICAgIGdldENvdW50SXRlbXNDYXJ0LFxyXG4gICAgcmVtb3ZlQ2FydFxyXG59OyIsImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYocHJvY2Vzcy5icm93c2VyKSBjb29raWUuc2V0KGtleSwgdmFsdWUsIHsgZXhwaXJlczogMSwgcGF0aDogXCIvXCIgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgICBpZihwcm9jZXNzLmJyb3dzZXIpIGNvb2tpZS5yZW1vdmUoa2V5LCB7IGV4cGlyZXM6IDEgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5LCByZXEpID0+IHtcclxuICAgIHJldHVybiBwcm9jZXNzLmJyb3dzZXIgPyBcclxuICAgICAgICAgICAgZ2V0Q29va2llRnJvbUJyb3dzZXIoa2V5KSA6XHJcbiAgICAgICAgICAgIGdldENvb2tpZUZyb21TZXJ2ZXIoa2V5LCByZXEpXHJcbn1cclxuXHJcbmNvbnN0IGdldENvb2tpZUZyb21Ccm93c2VyID0ga2V5ID0+IGNvb2tpZS5nZXQoa2V5KTtcclxuXHJcbmNvbnN0IGdldENvb2tpZUZyb21TZXJ2ZXIgPSAoa2V5LCByZXEpID0+IHtcclxuICAgIGlmKCFyZXEuaGVhZGVycy5jb29raWUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBfY29va2llID0gcmVxLmhlYWRlcnMuY29va2llLnNwbGl0KFwiO1wiKS5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKTtcclxuICAgIHJldHVybiBfY29va2llID8gX2Nvb2tpZS5zcGxpdChcIj1cIilbMV0gOiB1bmRlZmluZWQ7XHJcbn0iLCJleHBvcnQgY29uc3QgbnVtYmVyUGF0dGVybiA9IC9cXGQrL2c7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0Q0VQID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhDZXAgPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICBjb25zdCBfY2VwID0gKGF1eENlcCB8fCBbXSkuam9pbignJyk7XHJcbiAgICByZXR1cm4gX2NlcC5sZW5ndGggPiA1ID8gX2NlcC5zbGljZSgwLDUpKyctJytfY2VwLnNsaWNlKDUsOCkgOiBfY2VwO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdENQRiA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4Q1BGID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgY29uc3QgX0NQRiA9IChhdXhDUEYgfHwgW10pLmpvaW4oJycpOyBcclxuICAgIGlmKF9DUEYubGVuZ3RoID4gOSkgcmV0dXJuIF9DUEYuc2xpY2UoMCwzKSArICcuJyArIF9DUEYuc2xpY2UoMyw2KSArICcuJyArIF9DUEYuc2xpY2UoNiw5KSArICctJyArIF9DUEYuc2xpY2UoOSwxMSk7XHJcbiAgICBpZihfQ1BGLmxlbmd0aCA+IDYpIHJldHVybiBfQ1BGLnNsaWNlKDAsMykgKyAnLicgKyBfQ1BGLnNsaWNlKDMsNikgKyAnLicgKyBfQ1BGLnNsaWNlKDYsOSk7XHJcbiAgICBpZihfQ1BGLmxlbmd0aCA+IDMpIHJldHVybiBfQ1BGLnNsaWNlKDAsMykgKyAnLicgKyBfQ1BGLnNsaWNlKDMsNik7XHJcbiAgICByZXR1cm4gX0NQRjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRhRGVOYXNjaW1lbnRvID0gICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4RGF0YSA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIGNvbnN0IF9kYXRhID0gKGF1eERhdGEgfHwgW10pLmpvaW4oJycpOyBcclxuICAgIGlmKF9kYXRhLmxlbmd0aCA+IDQpIHJldHVybiBfZGF0YS5zbGljZSgwLDIpICsgJy8nICsgX2RhdGEuc2xpY2UoMiw0KSArICcvJyArIF9kYXRhLnNsaWNlKDQsOCk7XHJcbiAgICBpZihfZGF0YS5sZW5ndGggPiAyKSByZXR1cm4gX2RhdGEuc2xpY2UoMCwyKSArICcvJyArIF9kYXRhLnNsaWNlKDIsNCk7XHJcbiAgICByZXR1cm4gX2RhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0VGVsZWZvbmUgPSAgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhUZWxlZm9uZSA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIGNvbnN0IF90ZWxlZm9uZSA9IChhdXhUZWxlZm9uZSB8fCBbXSkuam9pbignJyk7ICAgICBcclxuICAgIHJldHVybiBfdGVsZWZvbmUubGVuZ3RoID4gMiA/IF90ZWxlZm9uZS5zbGljZSgwLDIpICsgJyAnICsgX3RlbGVmb25lLnNsaWNlKDIsMTIpIDogX3RlbGVmb25lO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlciA9ICAodmFsdWUsIGxpbWl0KSA9PiB7XHJcbiAgICBjb25zdCBhdXhOID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgY29uc3QgX24gPSAoYXV4TiB8fCBbXSkuam9pbignJyk7ICAgICBcclxuICAgIHJldHVybiBsaW1pdCA/IF9uLnNsaWNlKDAsbGltaXQpIDogX247XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0Q2FydGFvID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhDYXJ0YW8gPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICBjb25zdCBfY2FydGFvID0gKGF1eENhcnRhbyB8fCBbXSkuam9pbignJyk7IFxyXG4gICAgaWYoX2NhcnRhby5sZW5ndGggPiAxMikgXHJcbiAgICAgICAgcmV0dXJuIF9jYXJ0YW8uc2xpY2UoMCw0KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoNCw4KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoOCwxMikgKyAnICcgKyBfY2FydGFvLnNsaWNlKDEyLDE2KTtcclxuICAgIGlmKF9jYXJ0YW8ubGVuZ3RoID4gOCkgXHJcbiAgICAgICAgcmV0dXJuIF9jYXJ0YW8uc2xpY2UoMCw0KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoNCw4KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoOCwxMik7XHJcbiAgICBpZihfY2FydGFvLmxlbmd0aCA+IDQpIFxyXG4gICAgICAgIHJldHVybiBfY2FydGFvLnNsaWNlKDAsNCkgKyAnICcgKyBfY2FydGFvLnNsaWNlKDQsOCk7XHJcbiAgICByZXR1cm4gX2NhcnRhbztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG51bWJlclBhdHRlcm4sXHJcbiAgICBmb3JtYXRDRVAsXHJcbiAgICBmb3JtYXRDUEYsXHJcbiAgICBmb3JtYXREYXRhRGVOYXNjaW1lbnRvLFxyXG4gICAgZm9ybWF0VGVsZWZvbmUsXHJcbiAgICBmb3JtYXROdW1iZXIsXHJcbiAgICBmb3JtYXRDYXJ0YW9cclxufTsiLCJleHBvcnQgY29uc3QgZm9ybWF0TW9uZXkgPSAodmFsdWUpID0+IFwiUiQgXCIgKyBOdW1iZXIodmFsdWUgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb2RpZ29zQ29ycmVpb3MgPSB7XHJcbiAgICBcIjQwMDEwXCI6IFwiU2VkZXhcIixcclxuICAgIFwiNDExMDZcIjogXCJQQUNcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVTVEFET1MgPSB7XHJcbiAgICBcIkFDXCI6IFwiQWNyZVwiLFxyXG4gICAgXCJBTFwiOiBcIkFsYWdvYXNcIixcclxuICAgIFwiQVBcIjogXCJBbWFww6FcIixcclxuICAgIFwiQU1cIjogXCJBbWF6b25hc1wiLFxyXG4gICAgXCJCQVwiOiBcIkJhaGlhXCIsXHJcbiAgICBcIkNFXCI6IFwiQ2VhcsOhXCIsXHJcbiAgICBcIkRGXCI6IFwiRGlzdHJpdG8gRmVkZXJhbFwiLFxyXG4gICAgXCJFU1wiOiBcIkVzcMOtcml0byBTYW50b1wiLFxyXG4gICAgXCJHT1wiOiBcIkdvacOhc1wiLFxyXG4gICAgXCJNQVwiOiBcIk1hcmFuaMOjb1wiLFxyXG4gICAgXCJNVFwiOiBcIk1hdG8gR3Jvc3NvXCIsXHJcbiAgICBcIk1TXCI6IFwiTWF0byBHcm9zc28gZG8gU3VsXCIsXHJcbiAgICBcIk1HXCI6IFwiTWluYXMgR2VyYWlzXCIsXHJcbiAgICBcIlBBXCI6IFwiUGFyw6FcIixcclxuICAgIFwiUEJcIjogXCJQYXJhw61iYVwiLFxyXG4gICAgXCJQUlwiOiBcIlBhcmFuw6FcIixcclxuICAgIFwiUEVcIjogXCJQZXJuYW1idWNvXCIsXHJcbiAgICBcIlBJXCI6IFwiUGlhdcOtXCIsXHJcbiAgICBcIlJKXCI6IFwiUmlvIGRlIEphbmVpcm9cIixcclxuICAgIFwiUk5cIjogXCJSaW8gR3JhbmRlIGRvIE5vcnRlXCIsXHJcbiAgICBcIlJTXCI6IFwiUmlvIEdyYW5kZSBkbyBTdWxcIixcclxuICAgIFwiUk9cIjogXCJSb25kw7RuaWFcIixcclxuICAgIFwiUlJcIjogXCJSb3JhaW1hXCIsXHJcbiAgICBcIlNDXCI6IFwiU2FudGEgQ2F0YXJpbmFcIixcclxuICAgIFwiU1BcIjogXCJTw6NvIFBhdWxvXCIsXHJcbiAgICBcIlNFXCI6IFwiU2VyZ2lwZVwiLFxyXG4gICAgXCJUT1wiOiBcIlRvY2FudGluc1wiXHJcbn07IiwiaW1wb3J0IHsgbnVtYmVyUGF0dGVybiB9IGZyb20gJy4vZm9ybWF0JztcclxuXHJcbmV4cG9ydCBjb25zdCBvbmx5TnVtYmVycyA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4Q2VwID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgcmV0dXJuIChhdXhDZXAgfHwgW10pLmpvaW4oXCJcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDUEYgPSAoX3N0ckNQRikgPT4ge1xyXG4gICAgY29uc3Qgc3RyQ1BGID0gb25seU51bWJlcnMoX3N0ckNQRik7XHJcbiAgICBpZihzdHJDUEYubGVuZ3RoICE9PSAxMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgbGV0IHNvbWE7XHJcbiAgICBsZXQgcmVzdG87XHJcbiAgICBzb21hID0gMDtcclxuICAgIGlmIChzdHJDUEYgPT0gXCIwMDAwMDAwMDAwMFwiKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICBmb3IgKHZhciBpPTE7IGk8PTk7IGkrKyl7XHJcbiAgICAgICAgc29tYSA9IHNvbWEgKyBwYXJzZUludChzdHJDUEYuc3Vic3RyaW5nKGktMSwgaSkpICogKDExIC0gaSk7XHJcbiAgICB9XHJcbiAgICByZXN0byA9IChzb21hICogMTApICUgMTE7XHJcbiAgIFxyXG4gICAgaWYgKChyZXN0byA9PSAxMCkgfHwgKHJlc3RvID09IDExKSkgIHJlc3RvID0gMDtcclxuICAgIGlmIChyZXN0byAhPSBwYXJzZUludChzdHJDUEYuc3Vic3RyaW5nKDksIDEwKSkgKSByZXR1cm4gZmFsc2U7XHJcbiAgIFxyXG4gICAgc29tYSA9IDA7XHJcbiAgICBmb3IgKHZhciBqID0gMTsgaiA8PSAxMDsgaisrKXtcclxuICAgICAgICBzb21hID0gc29tYSArIHBhcnNlSW50KHN0ckNQRi5zdWJzdHJpbmcoai0xLCBqKSkgKiAoMTIgLSBqKTtcclxuICAgIH1cclxuICAgIHJlc3RvID0gKHNvbWEgKiAxMCkgJSAxMTtcclxuICAgXHJcbiAgICBpZiggKCByZXN0byA9PSAxMCApIHx8ICggcmVzdG8gPT0gMTEgKSApICByZXN0byA9IDA7XHJcbiAgICBpZiggcmVzdG8gIT0gcGFyc2VJbnQoc3RyQ1BGLnN1YnN0cmluZygxMCwgMTEpKSApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHZhbGlkYXRlQ1BGLFxyXG4gICAgb25seU51bWJlcnNcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9