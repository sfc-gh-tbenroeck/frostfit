webpackHotUpdate_N_E("pages/product/[name]",{

/***/ "./pages/product/[name].js":
/*!*********************************!*\
  !*** ./pages/product/[name].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ \"./components/Button.js\");\n/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Image */ \"./components/Image.js\");\n/* harmony import */ var _components_QuantityPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/QuantityPicker */ \"./components/QuantityPicker.js\");\n/* harmony import */ var _components_CartLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CartLink */ \"./components/CartLink.js\");\n/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/mainContext */ \"./context/mainContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/tbenroeck/Documents/code/jamstack-ecommerce/pages/product/[name].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar ItemView = function ItemView(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      numberOfitems = _useState[0],\n      updateNumberOfItems = _useState[1];\n\n  var product = props.product;\n  var price = product.price,\n      image = product.image,\n      name = product.name,\n      description = product.description;\n  var addToCart = props.context.addToCart;\n\n  function addItemToCart(product) {\n    product[\"quantity\"] = numberOfitems;\n    addToCart(product);\n  }\n\n  function increment() {\n    updateNumberOfItems(numberOfitems + 1);\n  }\n\n  function decrement() {\n    if (numberOfitems === 1) return;\n    updateNumberOfItems(numberOfitems - 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_CartLink__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: [\"Frost Fit - \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Frost Fit is a luxury sports apparel company that specializes in stylish and functional activewear for men and women. Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"keywords\",\n        content: \"Frost Fit, sports apparel, luxury activewear, men's activewear, women's activewear, new arrivals, athletic wear, workout clothes, fitness clothing, gym clothes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"Frost Fit: Luxury Sports Apparel for Men and Women\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: \"Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: \"/logo.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:url\",\n        content: \"https://www.frostfit.com/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: \"Frost Fit: Luxury Sports Apparel for Men and Women\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: \"Shop our new arrivals and experience the perfect blend of performance and fashion.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:image\",\n        content: \"/logo.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n      className: \"mb-8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-wrap\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full lg:w-1/2 mb-6 lg:mb-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n            src: image,\n            alt: name,\n            className: \"w-full h-auto object-cover border-2 border-gray-300 rounded\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full lg:w-1/2 px-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: \"text-3xl font-semibold mb-4\",\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            className: \"text-xl text-red-500 font-semibold mb-4\",\n            children: [\"$\", price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"text-gray-600 mb-4\",\n            children: heroProduct.description.split('\\n').map(function (paragraph, index) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                className: \"mb-4\",\n                children: paragraph\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 23\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            className: \"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded\",\n            onClick: function onClick() {\n              return addItemToCart(product);\n            },\n            children: \"Add to Cart\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(ItemView, \"xGgKDV4les7T754ZWhRDc6pLTwk=\");\n\n_c = ItemView;\n\nfunction ItemViewWithContext(props) {\n  var _this2 = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__[\"ContextProviderComponent\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__[\"SiteContext\"].Consumer, {\n      children: function children(context) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ItemView, _objectSpread(_objectSpread({}, props), {}, {\n          context: context\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 22\n        }, _this2);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = ItemViewWithContext;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemViewWithContext);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ItemView\");\n$RefreshReg$(_c2, \"ItemViewWithContext\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bbmFtZV0uanM/Zjg0MiJdLCJuYW1lcyI6WyJJdGVtVmlldyIsInByb3BzIiwidXNlU3RhdGUiLCJudW1iZXJPZml0ZW1zIiwidXBkYXRlTnVtYmVyT2ZJdGVtcyIsInByb2R1Y3QiLCJwcmljZSIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYWRkVG9DYXJ0IiwiY29udGV4dCIsImFkZEl0ZW1Ub0NhcnQiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJoZXJvUHJvZHVjdCIsInNwbGl0IiwibWFwIiwicGFyYWdyYXBoIiwiaW5kZXgiLCJJdGVtVmlld1dpdGhDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxDQUFELENBRDNCO0FBQUEsTUFDbkJDLGFBRG1CO0FBQUEsTUFDSkMsbUJBREk7O0FBQUEsTUFFbEJDLE9BRmtCLEdBRU5KLEtBRk0sQ0FFbEJJLE9BRmtCO0FBQUEsTUFHbEJDLEtBSGtCLEdBR2tCRCxPQUhsQixDQUdsQkMsS0FIa0I7QUFBQSxNQUdYQyxLQUhXLEdBR2tCRixPQUhsQixDQUdYRSxLQUhXO0FBQUEsTUFHSkMsSUFISSxHQUdrQkgsT0FIbEIsQ0FHSkcsSUFISTtBQUFBLE1BR0VDLFdBSEYsR0FHa0JKLE9BSGxCLENBR0VJLFdBSEY7QUFBQSxNQUlQQyxTQUpPLEdBSVNULEtBSlQsQ0FJbEJVLE9BSmtCLENBSVBELFNBSk87O0FBTTFCLFdBQVNFLGFBQVQsQ0FBdUJQLE9BQXZCLEVBQWdDO0FBQzlCQSxXQUFPLENBQUMsVUFBRCxDQUFQLEdBQXNCRixhQUF0QjtBQUNBTyxhQUFTLENBQUNMLE9BQUQsQ0FBVDtBQUNEOztBQUVE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QUEsYUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQSxrQkFERjtBQXlDRCxDQTdERDs7R0FBTUwsUTs7S0FBQUEsUTs7QUFzRk4sU0FBU29CLG1CQUFULENBQTZCbkIsS0FBN0IsRUFBb0M7QUFBQTs7QUFDbEMsc0JBQ0UscUVBQUMsNkVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxnRUFBRCxDQUFhLFFBQWI7QUFBQSxnQkFFSSxrQkFBQVUsT0FBTztBQUFBLDRCQUFJLHFFQUFDLFFBQUQsa0NBQWNWLEtBQWQ7QUFBcUIsaUJBQU8sRUFBRVU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSjtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztNQVZRUyxtQjs7QUFZTUEsa0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tuYW1lXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1hZ2UnXG5pbXBvcnQgUXVhbnRpdHlQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWFudGl0eVBpY2tlcidcbmltcG9ydCB7IGZldGNoSW52ZW50b3J5IH0gZnJvbSAnLi4vLi4vdXRpbHMvaW52ZW50b3J5UHJvdmlkZXInXG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVycydcbmltcG9ydCBDYXJ0TGluayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcnRMaW5rJ1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQsIENvbnRleHRQcm92aWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnXG5cbmNvbnN0IEl0ZW1WaWV3ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtudW1iZXJPZml0ZW1zLCB1cGRhdGVOdW1iZXJPZkl0ZW1zXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHNcbiAgY29uc3QgeyBwcmljZSwgaW1hZ2UsIG5hbWUsIGRlc2NyaXB0aW9uIH0gPSBwcm9kdWN0XG4gIGNvbnN0IHsgY29udGV4dDogeyBhZGRUb0NhcnQgfSB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBhZGRJdGVtVG9DYXJ0KHByb2R1Y3QpIHtcbiAgICBwcm9kdWN0W1wicXVhbnRpdHlcIl0gPSBudW1iZXJPZml0ZW1zXG4gICAgYWRkVG9DYXJ0KHByb2R1Y3QpXG4gIH1cblxuICBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gICAgdXBkYXRlTnVtYmVyT2ZJdGVtcyhudW1iZXJPZml0ZW1zICsgMSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY3JlbWVudCgpIHtcbiAgICBpZiAobnVtYmVyT2ZpdGVtcyA9PT0gMSkgcmV0dXJuXG4gICAgdXBkYXRlTnVtYmVyT2ZJdGVtcyhudW1iZXJPZml0ZW1zIC0gMSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJ0TGluayAvPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Gcm9zdCBGaXQgLSB7bmFtZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJGcm9zdCBGaXQgaXMgYSBsdXh1cnkgc3BvcnRzIGFwcGFyZWwgY29tcGFueSB0aGF0IHNwZWNpYWxpemVzIGluIHN0eWxpc2ggYW5kIGZ1bmN0aW9uYWwgYWN0aXZld2VhciBmb3IgbWVuIGFuZCB3b21lbi4gU2hvcCBvdXIgbmV3IGFycml2YWxzIGFuZCBleHBlcmllbmNlIHRoZSBwZXJmZWN0IGJsZW5kIG9mIHBlcmZvcm1hbmNlIGFuZCBmYXNoaW9uLlwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkZyb3N0IEZpdCwgc3BvcnRzIGFwcGFyZWwsIGx1eHVyeSBhY3RpdmV3ZWFyLCBtZW4ncyBhY3RpdmV3ZWFyLCB3b21lbidzIGFjdGl2ZXdlYXIsIG5ldyBhcnJpdmFscywgYXRobGV0aWMgd2Vhciwgd29ya291dCBjbG90aGVzLCBmaXRuZXNzIGNsb3RoaW5nLCBneW0gY2xvdGhlc1wiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJGcm9zdCBGaXQ6IEx1eHVyeSBTcG9ydHMgQXBwYXJlbCBmb3IgTWVuIGFuZCBXb21lblwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTaG9wIG91ciBuZXcgYXJyaXZhbHMgYW5kIGV4cGVyaWVuY2UgdGhlIHBlcmZlY3QgYmxlbmQgb2YgcGVyZm9ybWFuY2UgYW5kIGZhc2hpb24uXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly93d3cuZnJvc3RmaXQuY29tL1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJGcm9zdCBGaXQ6IEx1eHVyeSBTcG9ydHMgQXBwYXJlbCBmb3IgTWVuIGFuZCBXb21lblwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2hvcCBvdXIgbmV3IGFycml2YWxzIGFuZCBleHBlcmllbmNlIHRoZSBwZXJmZWN0IGJsZW5kIG9mIHBlcmZvcm1hbmNlIGFuZCBmYXNoaW9uLlwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgbWItNiBsZzptYi0wXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17bmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBvYmplY3QtY292ZXIgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8yIHB4LTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIG1iLTRcIj57bmFtZX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZCBtYi00XCI+JHtwcmljZX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICB7aGVyb1Byb2R1Y3QuZGVzY3JpcHRpb24uc3BsaXQoJ1xcbicpLm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IG10LTQgcm91bmRlZFwiIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1Ub0NhcnQocHJvZHVjdCl9PlxuICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBpbnZlbnRvcnkgPSBhd2FpdCBmZXRjaEludmVudG9yeSgpXG4gIGNvbnN0IHBhdGhzID0gaW52ZW50b3J5Lm1hcChpdGVtID0+IHtcbiAgICByZXR1cm4geyBwYXJhbXM6IHsgbmFtZTogc2x1Z2lmeShpdGVtLm5hbWUpIH0gfVxuICB9KVxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbXMubmFtZS5yZXBsYWNlKC8tL2csIFwiIFwiKVxuICBjb25zdCBpbnZlbnRvcnkgPSBhd2FpdCBmZXRjaEludmVudG9yeSgpXG4gIGNvbnN0IHByb2R1Y3QgPSBpbnZlbnRvcnkuZmluZChpdGVtID0+IHNsdWdpZnkoaXRlbS5uYW1lKSA9PT0gc2x1Z2lmeShuYW1lKSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBJdGVtVmlld1dpdGhDb250ZXh0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRleHRQcm92aWRlckNvbXBvbmVudD5cbiAgICAgIDxTaXRlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge1xuICAgICAgICAgIGNvbnRleHQgPT4gPEl0ZW1WaWV3IHsuLi5wcm9wc30gY29udGV4dD17Y29udGV4dH0gLz5cbiAgICAgICAgfVxuICAgICAgPC9TaXRlQ29udGV4dC5Db25zdW1lcj5cbiAgICA8L0NvbnRleHRQcm92aWRlckNvbXBvbmVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtVmlld1dpdGhDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[name].js\n");

/***/ })

})