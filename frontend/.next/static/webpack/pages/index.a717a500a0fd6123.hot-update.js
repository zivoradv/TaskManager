"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/deleteTask.js":
/*!*****************************!*\
  !*** ./pages/deleteTask.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\n\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"50px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\",\n        backgroundColor: \"#333\",\n        color: \"white\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst DeleteTaskModal = (param)=>{\n    let { isOpen, onRequestClose } = param;\n    const handleDelete = ()=>{\n        try {\n            deleteTask(task.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"TempTask deleted successfully\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Error deleting task\");\n        }\n        onRequestClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Delete Task Modal\",\n        ariaHideApp: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Are you sure you want to delete this task?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\deleteTask.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit-button\",\n                        onClick: handleDelete,\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\deleteTask.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit-button\",\n                        onClick: onRequestClose,\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\deleteTask.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\deleteTask.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\deleteTask.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DeleteTaskModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteTaskModal);\nvar _c;\n$RefreshReg$(_c, \"DeleteTaskModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWxldGVUYXNrLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ1I7QUFDTztBQUV2QyxNQUFNSSxvQkFBb0I7SUFDeEJDLFNBQVM7UUFDUEMsS0FBSztRQUNMQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxXQUFXO1FBQ1hDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxjQUFjO1FBQ2RDLFdBQVc7UUFDWEMsUUFBUTtRQUNSQyxpQkFBaUI7UUFDakJDLE9BQU87SUFDVDtJQUNBQyxTQUFTO1FBQ1BGLGlCQUFpQjtJQUNuQjtBQUNGO0FBRUEsTUFBTUcsa0JBQWtCO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxjQUFjLEVBQUU7SUFDakQsTUFBTUMsZUFBZTtRQUNuQixJQUFJO1lBQ0ZDLFdBQVdDLEtBQUtDLEVBQUU7WUFDbEJ0QixpREFBS0EsQ0FBQ3VCLE9BQU8sQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDZHhCLGlEQUFLQSxDQUFDd0IsS0FBSyxDQUFDO1FBQ2Q7UUFDQU47SUFDRjtJQUVBLHFCQUNFLDhEQUFDbkIsb0RBQUtBO1FBQ0prQixRQUFRQTtRQUNSQyxnQkFBZ0JBO1FBQ2hCTyxPQUFPeEI7UUFDUHlCLGNBQWE7UUFDYkMsYUFBYTs7MEJBRWIsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU9ELFdBQVU7d0JBQWdCRSxTQUFTYjtrQ0FBYzs7Ozs7O2tDQUd6RCw4REFBQ1k7d0JBQU9ELFdBQVU7d0JBQWdCRSxTQUFTZDtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRTtLQTlCTUY7QUFnQ04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGVsZXRlVGFzay5qcz81MzRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5jb25zdCBjdXN0b21Nb2RhbFN0eWxlcyA9IHtcclxuICBjb250ZW50OiB7XHJcbiAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgYm90dG9tOiBcImF1dG9cIixcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjUwcHhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgIGJveFNoYWRvdzogXCIwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IERlbGV0ZVRhc2tNb2RhbCA9ICh7IGlzT3Blbiwgb25SZXF1ZXN0Q2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRlbGV0ZVRhc2sodGFzay5pZCk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJUZW1wVGFzayBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgdGFza1wiKTtcclxuICAgIH1cclxuICAgIG9uUmVxdWVzdENsb3NlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfVxyXG4gICAgICBzdHlsZT17Y3VzdG9tTW9kYWxTdHlsZXN9XHJcbiAgICAgIGNvbnRlbnRMYWJlbD1cIkRlbGV0ZSBUYXNrIE1vZGFsXCJcclxuICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxyXG4gICAgPlxyXG4gICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz88L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRGVsZXRlfT5cclxuICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9e29uUmVxdWVzdENsb3NlfT5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZVRhc2tNb2RhbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsInRvYXN0IiwiY3VzdG9tTW9kYWxTdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidHJhbnNmb3JtIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJvdmVybGF5IiwiRGVsZXRlVGFza01vZGFsIiwiaXNPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVUYXNrIiwidGFzayIsImlkIiwic3VjY2VzcyIsImVycm9yIiwic3R5bGUiLCJjb250ZW50TGFiZWwiLCJhcmlhSGlkZUFwcCIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/deleteTask.js\n"));

/***/ })

});