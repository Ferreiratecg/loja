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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

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

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
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
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux */ "./redux/index.js");
var _jsxFileName = "C:\\sams-papelaria\\loja\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Principal extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux__WEBPACK_IMPORTED_MODULE_4__["initStore"])(Principal));

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");



const initStore = (initialState = {}) => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));

/***/ }),

/***/ "./redux/reducers/authReducers.js":
/*!****************************************!*\
  !*** ./redux/reducers/authReducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  token: null,
  usuario: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload.usuario ? action.payload.usuario.token : null,
        usuario: action.payload.usuario || null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload,
        token: action.payload ? action.payload.token : null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DESAUTENTICAR"]:
      return initialState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/carrinhoReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/carrinhoReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  carrinho: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_CARRINHO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: action.carrinho
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_CARRINHO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: null,
        freteSelecionado: null,
        fretes: null,
        cep: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_CARRINHO"]:
      if (!action.payload.produto) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            produto: action.payload.produto
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_VARIACAO_CARRINHO"]:
      if (!action.payload.variacao) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            variacao: action.payload.variacao
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_VALOR_ENTREGA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fretes: action.payload.resultados,
        freteSelecionado: action.payload.resultados[0],
        cep: action.cep
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_QTD_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            quantidade: Number(item.quantidade) + Number(action.change)
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PROD_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho.reduce((all, item, index) => index !== action.idxCarrinho ? all.concat([item]) : all, [])
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FRETE_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        freteSelecionado: action.freteSelecionado
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FRETES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        freteSelecionado: null,
        fretes: null,
        cep: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/categoriaReducers.js":
/*!*********************************************!*\
  !*** ./redux/reducers/categoriaReducers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  categorias: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categorias: action.payload.categorias
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoria: action.payload.categoria
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA_PRODUTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtosCategoria: action.payload.produtos
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/checkoutReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/checkoutReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  form: {
    dadosCobranca: {}
  },
  tipoPagamentoSelecionado: "cartao"
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_FORM"]:
      let form = _objectSpread({}, state.form);

      Object.keys(action.payload).forEach(item => {
        if (action.prefix) form[action.prefix][item] = action.payload[item];else form[item] = action.payload[item];
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        form
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FORM"]:
      return _objectSpread(_objectSpread({}, state), initialState);

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_TIPO_PAGAMENTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tipoPagamentoSelecionado: action.tipoPagamentoSelecionado
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SESSION_ID"]:
      console.log(action.payload.sessionId);
      return _objectSpread(_objectSpread({}, state), {}, {
        sessionId: action.payload.sessionId
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SENDER_HASH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        senderHash: action.senderHash
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["NOVO_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        novoPedido: action.payload.pedido
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["PAGAR_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        novoPagamento: action.payload.pagamento
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/clienteReducers.js":
/*!*******************************************!*\
  !*** ./redux/reducers/clienteReducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  cliente: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cliente: action.payload.cliente
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CLIENTE"]:
      return initialState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducers */ "./redux/reducers/authReducers.js");
/* harmony import */ var _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoriaReducers */ "./redux/reducers/categoriaReducers.js");
/* harmony import */ var _lojaReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lojaReducers */ "./redux/reducers/lojaReducers.js");
/* harmony import */ var _produtoReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtoReducers */ "./redux/reducers/produtoReducers.js");
/* harmony import */ var _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinhoReducers */ "./redux/reducers/carrinhoReducers.js");
/* harmony import */ var _clienteReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clienteReducers */ "./redux/reducers/clienteReducers.js");
/* harmony import */ var _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkoutReducers */ "./redux/reducers/checkoutReducers.js");
/* harmony import */ var _pedidoReducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pedidoReducers */ "./redux/reducers/pedidoReducers.js");









/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  categoria: _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  loja: _lojaReducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  produto: _produtoReducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  carrinho: _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  cliente: _clienteReducers__WEBPACK_IMPORTED_MODULE_6__["default"],
  checkout: _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__["default"],
  pedido: _pedidoReducers__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./redux/reducers/lojaReducers.js":
/*!****************************************!*\
  !*** ./redux/reducers/lojaReducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loja: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_DADOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loja: action.payload.loja
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/pedidoReducers.js":
/*!******************************************!*\
  !*** ./redux/reducers/pedidoReducers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  pedidos: null,
  pedido: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedidos: action.payload.pedidos
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: action.payload.pedido,
        pedidoRegistros: action.payload.registros
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: null,
        pedidoRegistros: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CANCELAR_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: state.pedido ? _objectSpread(_objectSpread({}, state.pedido), {}, {
          cancelado: true
        }) : null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/produtoReducers.js":
/*!*******************************************!*\
  !*** ./redux/reducers/produtoReducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  produtos: null,
  termo: "",
  produtosPesquisa: null,
  produto: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtos: action.payload.produtos
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PESQUISA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        termo: action.termo
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTOS_PESQUISA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtosPesquisa: action.payload.produtos,
        termo: action.termo
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produto: action.payload.produto
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_AVALIACOES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        avaliacoes: action.payload.avaliacoes
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_VARIACOES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        variacoes: action.payload.variacoes
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["NOVA_AVALIACAO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        avaliacoes: state.avaliacoes.concat([action.payload.avaliacao])
      });

    default:
      return state;
  }
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2NhcnJpbmhvUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY2F0ZWdvcmlhUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY2hlY2tvdXRSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jbGllbnRlUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvbG9qYVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3BlZGlkb1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Byb2R1dG9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiUHJpbmNpcGFsIiwiY3R4Iiwic3RvcmUiLCJwcm9wcyIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwidG9rZW4iLCJ1c3VhcmlvIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQVVURU5USUNBUiIsInBheWxvYWQiLCJVU0VSIiwiQVVURU5USUNBUl9UT0tFTiIsIkRFU0FVVEVOVElDQVIiLCJjYXJyaW5obyIsIlNFVF9DQVJSSU5ITyIsIkNMRUFOX0NBUlJJTkhPIiwiZnJldGVTZWxlY2lvbmFkbyIsImZyZXRlcyIsImNlcCIsIkZFVENIX1BST0RVVE9fQ0FSUklOSE8iLCJwcm9kdXRvIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWR4Q2FycmluaG8iLCJGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyIsInZhcmlhY2FvIiwiRkVUQ0hfVkFMT1JfRU5UUkVHQSIsInJlc3VsdGFkb3MiLCJVUERBVEVfUVREX0NBUlQiLCJxdWFudGlkYWRlIiwiTnVtYmVyIiwiY2hhbmdlIiwiUkVNT1ZFX1BST0RfQ0FSVCIsInJlZHVjZSIsImFsbCIsImNvbmNhdCIsIlVQREFURV9GUkVURV9DQVJUIiwiQ0xFQU5fRlJFVEVTIiwiY2F0ZWdvcmlhcyIsIkZFVENIX0NBVEVHT1JJQVMiLCJGRVRDSF9DQVRFR09SSUEiLCJjYXRlZ29yaWEiLCJGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MiLCJwcm9kdXRvc0NhdGVnb3JpYSIsInByb2R1dG9zIiwiZm9ybSIsImRhZG9zQ29icmFuY2EiLCJ0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8iLCJTRVRfRk9STSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJlZml4IiwiQ0xFQU5fRk9STSIsIlNFVF9USVBPX1BBR0FNRU5UTyIsIkZFVENIX1NFU1NJT05fSUQiLCJsb2ciLCJzZXNzaW9uSWQiLCJGRVRDSF9TRU5ERVJfSEFTSCIsInNlbmRlckhhc2giLCJOT1ZPX1BFRElETyIsIm5vdm9QZWRpZG8iLCJwZWRpZG8iLCJQQUdBUl9QRURJRE8iLCJub3ZvUGFnYW1lbnRvIiwicGFnYW1lbnRvIiwiY2xpZW50ZSIsIkZFVENIX0NMSUVOVEUiLCJMT0dPVVRfQ0xJRU5URSIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGgiLCJhdXRoUmVkdWNlciIsImNhdGVnb3JpYVJlZHVjZXIiLCJsb2phIiwibG9qYVJlZHVjZXIiLCJwcm9kdXRvUmVkdWNlciIsImNhcnJpbmhvUmVkdWNlciIsImNsaWVudGVSZWR1Y2VyIiwiY2hlY2tvdXQiLCJjaGVja291dFJlZHVjZXIiLCJwZWRpZG9SZWR1Y2VyIiwiRkVUQ0hfREFET1MiLCJwZWRpZG9zIiwiRkVUQ0hfUEVESURPUyIsIkZFVENIX1BFRElETyIsInBlZGlkb1JlZ2lzdHJvcyIsInJlZ2lzdHJvcyIsIkNMRUFOX1BFRElETyIsIkNBTkNFTEFSX1BFRElETyIsImNhbmNlbGFkbyIsInRlcm1vIiwicHJvZHV0b3NQZXNxdWlzYSIsIkZFVENIX1BST0RVVE9TIiwiRkVUQ0hfUEVTUVVJU0EiLCJGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSIsIkZFVENIX1BST0RVVE8iLCJGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMiLCJhdmFsaWFjb2VzIiwiRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMiLCJ2YXJpYWNvZXMiLCJOT1ZBX0FWQUxJQUNBTyIsImF2YWxpYWNhbyIsIlJFR0lTVEVSIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNUM7O0FBQ0E7Ozs7QUFrQkE7Ozs7O0FBSUEsa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FB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QUFHLG1CQTdCMUI7QUFBQSxNQThCTUUsV0FBVyxHQUFHLGFBOUJwQjtBQUFBLE1BK0JNRyxZQUFZLEdBQUcsY0EvQnJCO0FBQUEsTUFnQ01LLGNBQWMsR0FBRyxnQkFoQ3ZCO0FBQUEsTUFpQ016RCxhQUFhLEdBQUcsZUFqQ3RCO0FBQUEsTUFrQ013RSxhQUFhLEdBQUcsZUFsQ3RCO0FBQUEsTUFtQ01DLFlBQVksR0FBRyxjQW5DckI7QUFBQSxNQW9DTUcsWUFBWSxHQUFHLGNBcENyQjtBQUFBLE1BcUNNQyxlQUFlLEdBQUcsaUJBckN4QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuLi9yZWR1eCc7XHJcblxyXG5jbGFzcyBQcmluY2lwYWwgZXh0ZW5kcyBBcHAge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9wczogQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoUHJpbmNpcGFsKTsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7IiwiaW1wb3J0IHsgXHJcbiAgICBBVVRFTlRJQ0FSX1RPS0VOLFxyXG4gICAgQVVURU5USUNBUixcclxuICAgIFVTRVIsXHJcbiAgICBERVNBVVRFTlRJQ0FSXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyB0b2tlbjogbnVsbCwgdXN1YXJpbzogbnVsbCB9O1xyXG5leHBvcnQgZGVmYXVsdCAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBVVRFTlRJQ0FSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQudXN1YXJpbyA/IGFjdGlvbi5wYXlsb2FkLnVzdWFyaW8udG9rZW4gOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogYWN0aW9uLnBheWxvYWQudXN1YXJpbyB8fCBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQudG9rZW4gOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBVVRFTlRJQ0FSX1RPS0VOOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdG9rZW46IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBjYXNlIERFU0FVVEVOVElDQVI6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIFNFVF9DQVJSSU5ITyxcclxuICAgIENMRUFOX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19DQVJSSU5ITyxcclxuICAgIEZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfVkFMT1JfRU5UUkVHQSxcclxuICAgIFVQREFURV9RVERfQ0FSVCxcclxuICAgIFVQREFURV9GUkVURV9DQVJULFxyXG4gICAgUkVNT1ZFX1BST0RfQ0FSVCxcclxuICAgIENMRUFOX0ZSRVRFU1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgY2FycmluaG86IG51bGwgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgU0VUX0NBUlJJTkhPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJyaW5obzogYWN0aW9uLmNhcnJpbmhvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENMRUFOX0NBUlJJTkhPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJyaW5obzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZyZXRlU2VsZWNpb25hZG86IG51bGwsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjZXA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUFJPRFVUT19DQVJSSU5ITzpcclxuICAgICAgICAgICAgaWYoIWFjdGlvbi5wYXlsb2FkLnByb2R1dG8pIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FycmluaG86IHN0YXRlLmNhcnJpbmhvID8gc3RhdGUuY2FycmluaG8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoIGFjdGlvbi5pZHhDYXJyaW5obyA9PSBpbmRleCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5pdGVtLCBwcm9kdXRvOiBhY3Rpb24ucGF5bG9hZC5wcm9kdXRvIH0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KSA6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPOlxyXG4gICAgICAgICAgICBpZighYWN0aW9uLnBheWxvYWQudmFyaWFjYW8pIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FycmluaG86IHN0YXRlLmNhcnJpbmhvID8gc3RhdGUuY2FycmluaG8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoIGFjdGlvbi5pZHhDYXJyaW5obyA9PSBpbmRleCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5pdGVtLCB2YXJpYWNhbzogYWN0aW9uLnBheWxvYWQudmFyaWFjYW8gfSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIH0pIDogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfVkFMT1JfRU5UUkVHQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZnJldGVzOiBhY3Rpb24ucGF5bG9hZC5yZXN1bHRhZG9zLFxyXG4gICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkbzogYWN0aW9uLnBheWxvYWQucmVzdWx0YWRvc1swXSxcclxuICAgICAgICAgICAgICAgIGNlcDogYWN0aW9uLmNlcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVUERBVEVfUVREX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5obyA/IHN0YXRlLmNhcnJpbmhvLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBhY3Rpb24uaWR4Q2FycmluaG8gPT0gaW5kZXggKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aWRhZGU6IE51bWJlcihpdGVtLnF1YW50aWRhZGUpICsgTnVtYmVyKGFjdGlvbi5jaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KSA6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9QUk9EX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhbGwsIGl0ZW0sIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT09IGFjdGlvbi5pZHhDYXJyaW5obyA/IGFsbC5jb25jYXQoW2l0ZW1dKSA6IGFsbCwgW11cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVQREFURV9GUkVURV9DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZVNlbGVjaW9uYWRvOiBhY3Rpb24uZnJldGVTZWxlY2lvbmFkb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDTEVBTl9GUkVURVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZyZXRlU2VsZWNpb25hZG86IG51bGwsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjZXA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9DQVRFR09SSUFTLFxyXG4gICAgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TLFxyXG4gICAgRkVUQ0hfQ0FURUdPUklBXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBjYXRlZ29yaWFzOiBudWxsIH07XHJcbmV4cG9ydCBkZWZhdWx0ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9DQVRFR09SSUFTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFzOiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yaWFzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX0NBVEVHT1JJQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yaWFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdXRvc0NhdGVnb3JpYTogYWN0aW9uLnBheWxvYWQucHJvZHV0b3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBTRVRfRk9STSxcclxuICAgIENMRUFOX0ZPUk0sXHJcbiAgICBTRVRfVElQT19QQUdBTUVOVE8sXHJcbiAgICBGRVRDSF9TRVNTSU9OX0lELFxyXG4gICAgRkVUQ0hfU0VOREVSX0hBU0gsXHJcbiAgICBOT1ZPX1BFRElETyxcclxuICAgIFBBR0FSX1BFRElET1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGZvcm06IHsgZGFkb3NDb2JyYW5jYToge30gfSxcclxuICAgIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbzogXCJjYXJ0YW9cIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBTRVRfRk9STTpcclxuICAgICAgICAgICAgbGV0IGZvcm0gPSB7IC4uLnN0YXRlLmZvcm0gfTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9uLnBheWxvYWQpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihhY3Rpb24ucHJlZml4KSBmb3JtW2FjdGlvbi5wcmVmaXhdW2l0ZW1dID0gYWN0aW9uLnBheWxvYWRbaXRlbV07XHJcbiAgICAgICAgICAgICAgICBlbHNlIGZvcm1baXRlbV0gPSBhY3Rpb24ucGF5bG9hZFtpdGVtXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb3JtIH07XHJcbiAgICAgICAgY2FzZSBDTEVBTl9GT1JNOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5pbml0aWFsU3RhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VUX1RJUE9fUEFHQU1FTlRPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG86IGFjdGlvbi50aXBvUGFnYW1lbnRvU2VsZWNpb25hZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfU0VTU0lPTl9JRDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQuc2Vzc2lvbklkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbklkOiBhY3Rpb24ucGF5bG9hZC5zZXNzaW9uSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfU0VOREVSX0hBU0g6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNlbmRlckhhc2g6IGFjdGlvbi5zZW5kZXJIYXNoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE5PVk9fUEVESURPOlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5vdm9QZWRpZG86IGFjdGlvbi5wYXlsb2FkLnBlZGlkb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBQQUdBUl9QRURJRE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5vdm9QYWdhbWVudG86IGFjdGlvbi5wYXlsb2FkLnBhZ2FtZW50b1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIEZFVENIX0NMSUVOVEUsXHJcbiAgICBMT0dPVVRfQ0xJRU5URVxyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgY2xpZW50ZTogbnVsbCB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9DTElFTlRFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRlOiBhY3Rpb24ucGF5bG9hZC5jbGllbnRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR09VVF9DTElFTlRFOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhSZWR1Y2Vycyc7XHJcbmltcG9ydCBjYXRlZ29yaWFSZWR1Y2VyIGZyb20gJy4vY2F0ZWdvcmlhUmVkdWNlcnMnO1xyXG5pbXBvcnQgbG9qYVJlZHVjZXIgZnJvbSAnLi9sb2phUmVkdWNlcnMnO1xyXG5pbXBvcnQgcHJvZHV0b1JlZHVjZXIgZnJvbSAnLi9wcm9kdXRvUmVkdWNlcnMnO1xyXG5pbXBvcnQgY2FycmluaG9SZWR1Y2VyIGZyb20gJy4vY2FycmluaG9SZWR1Y2Vycyc7XHJcbmltcG9ydCBjbGllbnRlUmVkdWNlciBmcm9tICcuL2NsaWVudGVSZWR1Y2Vycyc7XHJcbmltcG9ydCBjaGVja291dFJlZHVjZXIgZnJvbSAnLi9jaGVja291dFJlZHVjZXJzJztcclxuaW1wb3J0IHBlZGlkb1JlZHVjZXIgZnJvbSAnLi9wZWRpZG9SZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgYXV0aDogYXV0aFJlZHVjZXIsXHJcbiAgICBjYXRlZ29yaWE6IGNhdGVnb3JpYVJlZHVjZXIsXHJcbiAgICBsb2phOiBsb2phUmVkdWNlcixcclxuICAgIHByb2R1dG86IHByb2R1dG9SZWR1Y2VyLFxyXG4gICAgY2FycmluaG86IGNhcnJpbmhvUmVkdWNlcixcclxuICAgIGNsaWVudGU6IGNsaWVudGVSZWR1Y2VyLFxyXG4gICAgY2hlY2tvdXQ6IGNoZWNrb3V0UmVkdWNlcixcclxuICAgIHBlZGlkbzogcGVkaWRvUmVkdWNlclxyXG59KTsiLCJpbXBvcnQgeyBGRVRDSF9EQURPUyB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbG9qYTogbnVsbCB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9EQURPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvamE6IGFjdGlvbi5wYXlsb2FkLmxvamFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1xyXG4gICAgRkVUQ0hfUEVESURPUyxcclxuICAgIEZFVENIX1BFRElETyxcclxuICAgIENMRUFOX1BFRElETyxcclxuICAgIENBTkNFTEFSX1BFRElET1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHBlZGlkb3M6IG51bGwsXHJcbiAgICBwZWRpZG86IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfUEVESURPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvczogYWN0aW9uLnBheWxvYWQucGVkaWRvc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QRURJRE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBlZGlkbzogYWN0aW9uLnBheWxvYWQucGVkaWRvLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvUmVnaXN0cm9zOiBhY3Rpb24ucGF5bG9hZC5yZWdpc3Ryb3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0xFQU5fUEVESURPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwZWRpZG86IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwZWRpZG9SZWdpc3Ryb3M6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0FOQ0VMQVJfUEVESURPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwZWRpZG86IHN0YXRlLnBlZGlkbyA/IHsgLi4uc3RhdGUucGVkaWRvLCBjYW5jZWxhZG86IHRydWUgfSA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9QUk9EVVRPUyxcclxuICAgIEZFVENIX1BFU1FVSVNBLFxyXG4gICAgRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EsXHJcbiAgICBGRVRDSF9QUk9EVVRPLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMsXHJcbiAgICBOT1ZBX0FWQUxJQUNBT1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHByb2R1dG9zOiBudWxsLFxyXG4gICAgdGVybW86IFwiXCIsXHJcbiAgICBwcm9kdXRvc1Blc3F1aXNhOiBudWxsLFxyXG4gICAgcHJvZHV0bzogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QUk9EVVRPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHV0b3M6IGFjdGlvbi5wYXlsb2FkLnByb2R1dG9zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1BFU1FVSVNBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0ZXJtbzogYWN0aW9uLnRlcm1vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1BST0RVVE9TX1BFU1FVSVNBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdXRvc1Blc3F1aXNhOiBhY3Rpb24ucGF5bG9hZC5wcm9kdXRvcyxcclxuICAgICAgICAgICAgICAgIHRlcm1vOiBhY3Rpb24udGVybW9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUFJPRFVUTzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHV0bzogYWN0aW9uLnBheWxvYWQucHJvZHV0b1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF2YWxpYWNvZXM6IGFjdGlvbi5wYXlsb2FkLmF2YWxpYWNvZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHZhcmlhY29lczogYWN0aW9uLnBheWxvYWQudmFyaWFjb2VzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE5PVkFfQVZBTElBQ0FPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdmFsaWFjb2VzOiBzdGF0ZS5hdmFsaWFjb2VzLmNvbmNhdChbYWN0aW9uLnBheWxvYWQuYXZhbGlhY2FvXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IFwicmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgIEFVVEVOVElDQVJfVE9LRU4gPSBcIkFVVEVOVElDQVJfVE9LRU5cIixcclxuICAgICAgICAgICAgIFVTRVIgPSBcInVzZXJcIixcclxuICAgICAgICAgICAgIEFVVEVOVElDQVIgPSAnQVVURU5USUNBUicsXHJcbiAgICAgICAgICAgICBGRVRDSF9DQVRFR09SSUFTID0gXCJmZXRjaF9jYXRlZ29yaWFzXCIsXHJcbiAgICAgICAgICAgICBGRVRDSF9EQURPUyA9ICdmZXRjaF9kYWRvcycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPUyA9IFwiRkVUQ0hfUFJPRFVUT1NcIixcclxuICAgICAgICAgICAgIEZFVENIX0NBVEVHT1JJQSA9ICdGRVRDSF9DQVRFR09SSUEnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TID0gJ0ZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRVNRVUlTQSA9ICdGRVRDSF9QRVNRVUlTQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSA9ICdGRVRDSF9QUk9EVVRPU19QRVNRVUlTQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPID0gJ0ZFVENIX1BST0RVVE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTID0gJ0ZFVENIX1BST0RVVE9fQVZBTElBQ09FUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUyA9ICdGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUycsXHJcbiAgICAgICAgICAgICBOT1ZBX0FWQUxJQUNBTyA9ICdOT1ZBX0FWQUxJQUNBTycsXHJcbiAgICAgICAgICAgICBTRVRfQ0FSUklOSE8gPSAnU0VUX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIENMRUFOX0NBUlJJTkhPID0gJ0NMRUFOX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9fQ0FSUklOSE8gPSAnRkVUQ0hfUFJPRFVUT19DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyA9ICdGRVRDSF9WQVJJQUNBT19DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9WQUxPUl9FTlRSRUdBID0gJ0ZFVENIX1ZBTE9SX0VOVFJFR0EnLFxyXG4gICAgICAgICAgICAgVVBEQVRFX1FURF9DQVJUID0gJ1VQREFURV9RVERfQ0FSVCcsXHJcbiAgICAgICAgICAgICBVUERBVEVfRlJFVEVfQ0FSVCA9ICdVUERBVEVfRlJFVEVfQ0FSVCcsXHJcbiAgICAgICAgICAgICBSRU1PVkVfUFJPRF9DQVJUID0gJ1JFTU9WRV9QUk9EX0NBUlQnLFxyXG4gICAgICAgICAgICAgQ0xFQU5fRlJFVEVTID0gJ0NMRUFOX0ZSRVRFUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9DTElFTlRFID0gJ0ZFVENIX0NMSUVOVEUnLFxyXG4gICAgICAgICAgICAgU0VUX0ZPUk0gPSAnU0VUX0ZPUk0nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fRk9STSA9ICdDTEVBTl9GT1JNJyxcclxuICAgICAgICAgICAgIFNFVF9USVBPX1BBR0FNRU5UTyA9ICdTRVRfVElQT19QQUdBTUVOVE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfU0VTU0lPTl9JRCA9ICdGRVRDSF9TRVNTSU9OX0lEJyxcclxuICAgICAgICAgICAgIEZFVENIX1NFTkRFUl9IQVNIID0gJ0ZFVENIX1NFTkRFUl9IQVNIJyxcclxuICAgICAgICAgICAgIE5PVk9fUEVESURPID0gJ05PVk9fUEVESURPJyxcclxuICAgICAgICAgICAgIFBBR0FSX1BFRElETyA9ICdQQUdBUl9QRURJRE8nLFxyXG4gICAgICAgICAgICAgTE9HT1VUX0NMSUVOVEUgPSAnTE9HT1VUX0NMSUVOVEUnLFxyXG4gICAgICAgICAgICAgREVTQVVURU5USUNBUiA9ICdERVNBVVRFTlRJQ0FSJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFRElET1MgPSAnRkVUQ0hfUEVESURPUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRURJRE8gPSAnRkVUQ0hfUEVESURPJyxcclxuICAgICAgICAgICAgIENMRUFOX1BFRElETyA9ICdDTEVBTl9QRURJRE8nLFxyXG4gICAgICAgICAgICAgQ0FOQ0VMQVJfUEVESURPID0gJ0NBTkNFTEFSX1BFRElETyc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=