webpackHotUpdate_N_E("pages/product/[name]",{

/***/ "./pages/product/[name].js":
/*!*********************************!*\
  !*** ./pages/product/[name].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.js\");\n/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Image */ \"./components/Image.js\");\n/* harmony import */ var _components_QuantityPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/QuantityPicker */ \"./components/QuantityPicker.js\");\n/* harmony import */ var _components_CartLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CartLink */ \"./components/CartLink.js\");\n/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/mainContext */ \"./context/mainContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/tbenroeck/Documents/code/jamstack-ecommerce/pages/product/[name].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar ItemView = function ItemView(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      numberOfitems = _useState[0],\n      updateNumberOfItems = _useState[1];\n\n  var product = props.product;\n  var price = product.price,\n      image = product.image,\n      name = product.name,\n      description = product.description;\n  var addToCart = props.context.addToCart;\n\n  function addItemToCart(product) {\n    product[\"quantity\"] = numberOfitems;\n    addToCart(product);\n  }\n\n  function increment() {\n    updateNumberOfItems(numberOfitems + 1);\n  }\n\n  function decrement() {\n    if (numberOfitems === 1) return;\n    updateNumberOfItems(numberOfitems - 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_CartLink__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: [\"Frost Fit - \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Frost Fit is a luxury sports apparel company that specializes in stylish and functional activewear for men and women. Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"keywords\",\n        content: \"Frost Fit, sports apparel, luxury activewear, men's activewear, women's activewear, new arrivals, athletic wear, workout clothes, fitness clothing, gym clothes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"Frost Fit: Luxury Sports Apparel for Men and Women\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: \"Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: \"/logo.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://www.frostfit.com/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: \"Frost Fit: Luxury Sports Apparel for Men and Women\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: \"Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:image\",\n        content: \"/logo.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n      className: \"mb-8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-wrap\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full lg:w-1/2 mb-6 lg:mb-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n            src: image,\n            alt: name,\n            className: \"w-full h-auto object-cover border-2 border-gray-300 rounded\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full lg:w-1/2 px-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: \"text-3xl font-semibold mb-4\",\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            className: \"text-xl text-red-500 font-semibold mb-4\",\n            children: [\"$\", price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            className: \"text-gray-600\",\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            className: \"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded\",\n            onClick: function onClick() {\n              return addItemToCart(product);\n            },\n            children: \"Add to Cart\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(ItemView, \"xGgKDV4les7T754ZWhRDc6pLTwk=\");\n\n_c = ItemView;\n\nfunction ItemViewWithContext(props) {\n  var _this2 = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__[\"ContextProviderComponent\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__[\"SiteContext\"].Consumer, {\n      children: function children(context) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ItemView, _objectSpread(_objectSpread({}, props), {}, {\n          context: context\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 22\n        }, _this2);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = ItemViewWithContext;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemViewWithContext);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ItemView\");\n$RefreshReg$(_c2, \"ItemViewWithContext\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bbmFtZV0uanM/Zjg0MiJdLCJuYW1lcyI6WyJJdGVtVmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJudW1iZXJPZml0ZW1zIiwidXBkYXRlTnVtYmVyT2ZJdGVtcyIsInByb2R1Y3QiLCJwcmljZSIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYWRkVG9DYXJ0IiwiY29udGV4dCIsImFkZEl0ZW1Ub0NhcnQiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJJdGVtVmlld1dpdGhDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxDQUFELENBRDNCO0FBQUEsTUFDbkJDLGFBRG1CO0FBQUEsTUFDSkMsbUJBREk7O0FBQUEsTUFFbEJDLE9BRmtCLEdBRU5KLEtBRk0sQ0FFbEJJLE9BRmtCO0FBQUEsTUFHbEJDLEtBSGtCLEdBR2tCRCxPQUhsQixDQUdsQkMsS0FIa0I7QUFBQSxNQUdYQyxLQUhXLEdBR2tCRixPQUhsQixDQUdYRSxLQUhXO0FBQUEsTUFHSkMsSUFISSxHQUdrQkgsT0FIbEIsQ0FHSkcsSUFISTtBQUFBLE1BR0VDLFdBSEYsR0FHa0JKLE9BSGxCLENBR0VJLFdBSEY7QUFBQSxNQUlQQyxTQUpPLEdBSVNULEtBSlQsQ0FJbEJVLE9BSmtCLENBSVBELFNBSk87O0FBTTFCLFdBQVNFLGFBQVQsQ0FBdUJQLE9BQXZCLEVBQWdDO0FBQzlCQSxXQUFPLENBQUMsVUFBRCxDQUFQLEdBQXNCRixhQUF0QjtBQUNBTyxhQUFTLENBQUNMLE9BQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNRLFNBQVQsR0FBcUI7QUFDbkJULHVCQUFtQixDQUFDRCxhQUFhLEdBQUcs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RUFBQyw2RUFBRDtBQUFBLDJCQUNFLHFFQUFDLGdFQUFELENBQWEsUUFBYjtBQUFBLGdCQUVJLGtCQUFBVSxPQUFPO0FBQUEsNEJBQUkscUVBQUMsUUFBRCxrQ0FBY1YsS0FBZDtBQUFxQixpQkFBTyxFQUFFVTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFKO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O01BVlFJLG1COztBQVlNQSxrRkFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW25hbWVdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbWFnZSdcbmltcG9ydCBRdWFudGl0eVBpY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1F1YW50aXR5UGlja2VyJ1xuaW1wb3J0IHsgZmV0Y2hJbnZlbnRvcnkgfSBmcm9tICcuLi8uLi91dGlscy9pbnZlbnRvcnlQcm92aWRlcidcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJ1xuaW1wb3J0IENhcnRMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FydExpbmsnXG5pbXBvcnQgeyBTaXRlQ29udGV4dCwgQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCdcblxuY29uc3QgSXRlbVZpZXcgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW251bWJlck9maXRlbXMsIHVwZGF0ZU51bWJlck9mSXRlbXNdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wc1xuICBjb25zdCB7IHByaWNlLCBpbWFnZSwgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHByb2R1Y3RcbiAgY29uc3QgeyBjb250ZXh0OiB7IGFkZFRvQ2FydCB9IH0gPSBwcm9wc1xuXG4gIGZ1bmN0aW9uIGFkZEl0ZW1Ub0NhcnQocHJvZHVjdCkge1xuICAgIHByb2R1Y3RbXCJxdWFudGl0eVwiXSA9IG51bWJlck9maXRlbXNcbiAgICBhZGRUb0NhcnQocHJvZHVjdClcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgICB1cGRhdGVOdW1iZXJPZkl0ZW1zKG51bWJlck9maXRlbXMgKyAxKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjcmVtZW50KCkge1xuICAgIGlmIChudW1iZXJPZml0ZW1zID09PSAxKSByZXR1cm5cbiAgICB1cGRhdGVOdW1iZXJPZkl0ZW1zKG51bWJlck9maXRlbXMgLSAxKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcnRMaW5rIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZyb3N0IEZpdCAtIHtuYW1lfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZyb3N0IEZpdCBpcyBhIGx1eHVyeSBzcG9ydHMgYXBwYXJlbCBjb21wYW55IHRoYXQgc3BlY2lhbGl6ZXMgaW4gc3R5bGlzaCBhbmQgZnVuY3Rpb25hbCBhY3RpdmV3ZWFyIGZvciBtZW4gYW5kIHdvbWVuLiBTaG9wIG91ciBuZXcgYXJyaXZhbHMgYW5kIGV4cGVyaWVuY2UgdGhlIHBlcmZlY3QgYmxlbmQgb2YgcGVyZm9ybWFuY2UgYW5kIGZhc2hpb24uXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiRnJvc3QgRml0LCBzcG9ydHMgYXBwYXJlbCwgbHV4dXJ5IGFjdGl2ZXdlYXIsIG1lbidzIGFjdGl2ZXdlYXIsIHdvbWVuJ3MgYWN0aXZld2VhciwgbmV3IGFycml2YWxzLCBhdGhsZXRpYyB3ZWFyLCB3b3Jrb3V0IGNsb3RoZXMsIGZpdG5lc3MgY2xvdGhpbmcsIGd5bSBjbG90aGVzXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkZyb3N0IEZpdDogTHV4dXJ5IFNwb3J0cyBBcHBhcmVsIGZvciBNZW4gYW5kIFdvbWVuXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNob3Agb3VyIG5ldyBhcnJpdmFscyBhbmQgZXhwZXJpZW5jZSB0aGUgcGVyZmVjdCBibGVuZCBvZiBwZXJmb3JtYW5jZSBhbmQgZmFzaGlvbi5cIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3d3dy5mcm9zdGZpdC5jb20vXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkZyb3N0IEZpdDogTHV4dXJ5IFNwb3J0cyBBcHBhcmVsIGZvciBNZW4gYW5kIFdvbWVuXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTaG9wIG91ciBuZXcgYXJyaXZhbHMgYW5kIGV4cGVyaWVuY2UgdGhlIHBlcmZlY3QgYmxlbmQgb2YgcGVyZm9ybWFuY2UgYW5kIGZhc2hpb24uXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCIvbG9nby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMiBtYi02IGxnOm1iLTBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG9iamVjdC1jb3ZlciBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgcHgtNFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWItNFwiPntuYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtcmVkLTUwMCBmb250LXNlbWlib2xkIG1iLTRcIj4ke3ByaWNlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IG10LTQgcm91bmRlZFwiIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1Ub0NhcnQocHJvZHVjdCl9PlxuICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBpbnZlbnRvcnkgPSBhd2FpdCBmZXRjaEludmVudG9yeSgpXG4gIGNvbnN0IHBhdGhzID0gaW52ZW50b3J5Lm1hcChpdGVtID0+IHtcbiAgICByZXR1cm4geyBwYXJhbXM6IHsgbmFtZTogc2x1Z2lmeShpdGVtLm5hbWUpIH0gfVxuICB9KVxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbXMubmFtZS5yZXBsYWNlKC8tL2csIFwiIFwiKVxuICBjb25zdCBpbnZlbnRvcnkgPSBhd2FpdCBmZXRjaEludmVudG9yeSgpXG4gIGNvbnN0IHByb2R1Y3QgPSBpbnZlbnRvcnkuZmluZChpdGVtID0+IHNsdWdpZnkoaXRlbS5uYW1lKSA9PT0gc2x1Z2lmeShuYW1lKSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBJdGVtVmlld1dpdGhDb250ZXh0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRleHRQcm92aWRlckNvbXBvbmVudD5cbiAgICAgIDxTaXRlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge1xuICAgICAgICAgIGNvbnRleHQgPT4gPEl0ZW1WaWV3IHsuLi5wcm9wc30gY29udGV4dD17Y29udGV4dH0gLz5cbiAgICAgICAgfVxuICAgICAgPC9TaXRlQ29udGV4dC5Db25zdW1lcj5cbiAgICA8L0NvbnRleHRQcm92aWRlckNvbXBvbmVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtVmlld1dpdGhDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[name].js\n");

/***/ })

})