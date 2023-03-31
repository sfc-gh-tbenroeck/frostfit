webpackHotUpdate_N_E("pages/product/[name]",{

/***/ "./pages/product/[name].js":
/*!*********************************!*\
  !*** ./pages/product/[name].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.js\");\n/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Image */ \"./components/Image.js\");\n/* harmony import */ var _components_QuantityPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/QuantityPicker */ \"./components/QuantityPicker.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/helpers */ \"./utils/helpers.js\");\n/* harmony import */ var _components_CartLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CartLink */ \"./components/CartLink.js\");\n/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/mainContext */ \"./context/mainContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/tbenroeck/Documents/code/jamstack-ecommerce/pages/product/[name].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar ItemView = function ItemView(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      numberOfitems = _useState[0],\n      updateNumberOfItems = _useState[1];\n\n  var product = props.product;\n  var price = product.price,\n      image = product.image,\n      name = product.name,\n      description = product.description;\n  var addToCart = props.context.addToCart;\n\n  function addItemToCart(product) {\n    product[\"quantity\"] = numberOfitems;\n    addToCart(product);\n    router.push(\"/cart\");\n  }\n\n  function increment() {\n    updateNumberOfItems(numberOfitems + 1);\n  }\n\n  function decrement() {\n    if (numberOfitems === 1) return;\n    updateNumberOfItems(numberOfitems - 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_CartLink__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: [\"Frost Fit - \", Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_8__[\"titleIfy\"])(product.name)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Frost Fit is a luxury sports apparel company that specializes in stylish and functional activewear for men and women. Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"keywords\",\n        content: \"Frost Fit, sports apparel, luxury activewear, men's activewear, women's activewear, new arrivals, athletic wear, workout clothes, fitness clothing, gym clothes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"Frost Fit: Luxury Sports Apparel for Men and Women\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: \"Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: \"/logo.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://www.frostfit.com/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: \"Frost Fit: Luxury Sports Apparel for Men and Women\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: \"Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:image\",\n        content: \"/logo.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n      className: \"mb-8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-wrap\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full lg:w-1/2 mb-6 lg:mb-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n            src: image,\n            alt: name,\n            className: \"w-full h-auto object-cover border-2 border-gray-300 rounded\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full lg:w-1/2 px-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: \"text-3xl font-semibold mb-4\",\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            className: \"text-xl text-red-500 font-semibold mb-4\",\n            children: [\"$\", price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"text-gray-600 mb-4\",\n            children: description.split('\\n').map(function (paragraph, index) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                className: \"mb-4\",\n                children: paragraph\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 23\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            className: \"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded\",\n            onClick: function onClick() {\n              return addItemToCart(product);\n            },\n            children: \"Add to Cart\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(ItemView, \"KJjnEuJmhFx155UMKI9xQuenkXA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ItemView;\n\nfunction ItemViewWithContext(props) {\n  var _this2 = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_10__[\"ContextProviderComponent\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_10__[\"SiteContext\"].Consumer, {\n      children: function children(context) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ItemView, _objectSpread(_objectSpread({}, props), {}, {\n          context: context\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 22\n        }, _this2);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = ItemViewWithContext;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemViewWithContext);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ItemView\");\n$RefreshReg$(_c2, \"ItemViewWithContext\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bbmFtZV0uanM/Zjg0MiJdLCJuYW1lcyI6WyJJdGVtVmlldyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJudW1iZXJPZml0ZW1zIiwidXBkYXRlTnVtYmVyT2ZJdGVtcyIsInByb2R1Y3QiLCJwcmljZSIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYWRkVG9DYXJ0IiwiY29udGV4dCIsImFkZEl0ZW1Ub0NhcnQiLCJwdXNoIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwidGl0bGVJZnkiLCJzcGxpdCIsIm1hcCIsInBhcmFncmFwaCIsImluZGV4IiwiSXRlbVZpZXdXaXRoQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDBCLGtCQUVtQkMsc0RBQVEsQ0FBQyxDQUFELENBRjNCO0FBQUEsTUFFbkJDLGFBRm1CO0FBQUEsTUFFSkMsbUJBRkk7O0FBQUEsTUFHbEJDLE9BSGtCLEdBR05OLEtBSE0sQ0FHbEJNLE9BSGtCO0FBQUEsTUFJbEJDLEtBSmtCLEdBSWtCRCxPQUpsQixDQUlsQkMsS0FKa0I7QUFBQSxNQUlYQyxLQUpXLEdBSWtCRixPQUpsQixDQUlYRSxLQUpXO0FBQUEsTUFJSkMsSUFKSSxHQUlrQkgsT0FKbEIsQ0FJSkcsSUFKSTtBQUFBLE1BSUVDLFdBSkYsR0FJa0JKLE9BSmxCLENBSUVJLFdBSkY7QUFBQSxNQUtQQyxTQUxPLEdBS1NYLEtBTFQsQ0FLbEJZLE9BTGtCLENBS1BELFNBTE87O0FBTzFCLFdBQVNFLGFBQVQsQ0FBdUJQLE9BQXZCLEVBQWdDO0FB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QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBVUU7QUFBUSxxQkFBUyxFQUFDLCtFQUFsQjtBQUFrRyxtQkFBTyxFQUFFO0FBQUEscUJBQU1SLGFBQWEsQ0FBQ1AsT0FBRCxDQUFuQjtBQUFBLGFBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUEsa0JBREY7QUF5Q0QsQ0EvREQ7O0dBQU1QLFE7VUFDV0cscUQ7OztLQURYSCxROztBQXdGTixTQUFTdUIsbUJBQVQsQ0FBNkJ0QixLQUE3QixFQUFvQztBQUFBOztBQUNsQyxzQkFDRSxxRUFBQyw4RUFBRDtBQUFBLDJCQUNFLHFFQUFDLGlFQUFELENBQWEsUUFBYjtBQUFBLGdCQUVJLGtCQUFBWSxPQUFPO0FBQUEsNEJBQUkscUVBQUMsUUFBRCxrQ0FBY1osS0FBZDtBQUFxQixpQkFBTyxFQUFFWTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFKO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O01BVlFVLG1COztBQVlNQSxrRkFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW25hbWVdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlJ1xuaW1wb3J0IFF1YW50aXR5UGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVhbnRpdHlQaWNrZXInXG5pbXBvcnQgeyBmZXRjaEludmVudG9yeSB9IGZyb20gJy4uLy4uL3V0aWxzL2ludmVudG9yeVByb3ZpZGVyJ1xuaW1wb3J0IHsgdGl0bGVJZnksIHNsdWdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJ1xuaW1wb3J0IENhcnRMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FydExpbmsnXG5pbXBvcnQgeyBTaXRlQ29udGV4dCwgQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCdcblxuY29uc3QgSXRlbVZpZXcgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtudW1iZXJPZml0ZW1zLCB1cGRhdGVOdW1iZXJPZkl0ZW1zXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHNcbiAgY29uc3QgeyBwcmljZSwgaW1hZ2UsIG5hbWUsIGRlc2NyaXB0aW9uIH0gPSBwcm9kdWN0XG4gIGNvbnN0IHsgY29udGV4dDogeyBhZGRUb0NhcnQgfSB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBhZGRJdGVtVG9DYXJ0KHByb2R1Y3QpIHtcbiAgICBwcm9kdWN0W1wicXVhbnRpdHlcIl0gPSBudW1iZXJPZml0ZW1zXG4gICAgYWRkVG9DYXJ0KHByb2R1Y3QpXG4gICAgcm91dGVyLnB1c2goYC9jYXJ0YClcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgICB1cGRhdGVOdW1iZXJPZkl0ZW1zKG51bWJlck9maXRlbXMgKyAxKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjcmVtZW50KCkge1xuICAgIGlmIChudW1iZXJPZml0ZW1zID09PSAxKSByZXR1cm5cbiAgICB1cGRhdGVOdW1iZXJPZkl0ZW1zKG51bWJlck9maXRlbXMgLSAxKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcnRMaW5rIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZyb3N0IEZpdCAtIHt0aXRsZUlmeShwcm9kdWN0Lm5hbWUpfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZyb3N0IEZpdCBpcyBhIGx1eHVyeSBzcG9ydHMgYXBwYXJlbCBjb21wYW55IHRoYXQgc3BlY2lhbGl6ZXMgaW4gc3R5bGlzaCBhbmQgZnVuY3Rpb25hbCBhY3RpdmV3ZWFyIGZvciBtZW4gYW5kIHdvbWVuLiBTaG9wIG91ciBuZXcgYXJyaXZhbHMgYW5kIGV4cGVyaWVuY2UgdGhlIHBlcmZlY3QgYmxlbmQgb2YgcGVyZm9ybWFuY2UgYW5kIGZhc2hpb24uXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiRnJvc3QgRml0LCBzcG9ydHMgYXBwYXJlbCwgbHV4dXJ5IGFjdGl2ZXdlYXIsIG1lbidzIGFjdGl2ZXdlYXIsIHdvbWVuJ3MgYWN0aXZld2VhciwgbmV3IGFycml2YWxzLCBhdGhsZXRpYyB3ZWFyLCB3b3Jrb3V0IGNsb3RoZXMsIGZpdG5lc3MgY2xvdGhpbmcsIGd5bSBjbG90aGVzXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkZyb3N0IEZpdDogTHV4dXJ5IFNwb3J0cyBBcHBhcmVsIGZvciBNZW4gYW5kIFdvbWVuXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNob3Agb3VyIG5ldyBhcnJpdmFscyBhbmQgZXhwZXJpZW5jZSB0aGUgcGVyZmVjdCBibGVuZCBvZiBwZXJmb3JtYW5jZSBhbmQgZmFzaGlvbi5cIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3d3dy5mcm9zdGZpdC5jb20vXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkZyb3N0IEZpdDogTHV4dXJ5IFNwb3J0cyBBcHBhcmVsIGZvciBNZW4gYW5kIFdvbWVuXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTaG9wIG91ciBuZXcgYXJyaXZhbHMgYW5kIGV4cGVyaWVuY2UgdGhlIHBlcmZlY3QgYmxlbmQgb2YgcGVyZm9ybWFuY2UgYW5kIGZhc2hpb24uXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCIvbG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMiBtYi02IGxnOm1iLTBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG9iamVjdC1jb3ZlciBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgcHgtNFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWItNFwiPntuYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtcmVkLTUwMCBmb250LXNlbWlib2xkIG1iLTRcIj4ke3ByaWNlfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbi5zcGxpdCgnXFxuJykubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgbXQtNCByb3VuZGVkXCIgb25DbGljaz17KCkgPT4gYWRkSXRlbVRvQ2FydChwcm9kdWN0KX0+XG4gICAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGludmVudG9yeSA9IGF3YWl0IGZldGNoSW52ZW50b3J5KClcbiAgY29uc3QgcGF0aHMgPSBpbnZlbnRvcnkubWFwKGl0ZW0gPT4ge1xuICAgIHJldHVybiB7IHBhcmFtczogeyBuYW1lOiBzbHVnaWZ5KGl0ZW0ubmFtZSkgfSB9XG4gIH0pXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy5uYW1lLnJlcGxhY2UoLy0vZywgXCIgXCIpXG4gIGNvbnN0IGludmVudG9yeSA9IGF3YWl0IGZldGNoSW52ZW50b3J5KClcbiAgY29uc3QgcHJvZHVjdCA9IGludmVudG9yeS5maW5kKGl0ZW0gPT4gc2x1Z2lmeShpdGVtLm5hbWUpID09PSBzbHVnaWZ5KG5hbWUpKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEl0ZW1WaWV3V2l0aENvbnRleHQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFByb3ZpZGVyQ29tcG9uZW50PlxuICAgICAgPFNpdGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7XG4gICAgICAgICAgY29udGV4dCA9PiA8SXRlbVZpZXcgey4uLnByb3BzfSBjb250ZXh0PXtjb250ZXh0fSAvPlxuICAgICAgICB9XG4gICAgICA8L1NpdGVDb250ZXh0LkNvbnN1bWVyPlxuICAgIDwvQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1WaWV3V2l0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[name].js\n");

/***/ })

})