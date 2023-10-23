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

/***/ "./components/Task.js":
/*!****************************!*\
  !*** ./components/Task.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaCheck_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaCheck,FaTimes,FaTrash!=!react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _context_TaskContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/TaskContext */ \"./context/TaskContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Task = (param)=>{\n    let { task, index } = param;\n    _s();\n    const { deleteTempTask, setTempTaskStatus } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TaskContext__WEBPACK_IMPORTED_MODULE_4__.TaskContext);\n    const handleDelete = async ()=>{\n        try {\n            deleteTempTask(task.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"TempTask deleted successfully\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error deleting task\");\n        }\n    };\n    const handleStatus = async ()=>{\n        try {\n            setTempTaskStatus(task.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully changed status of a task\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error changing status of a task\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: task.status ? \"status-tast\" : \"task\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"task-title\",\n                children: index + 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"task-title\",\n                children: [\n                    \"Title: \",\n                    task.title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"task-description\",\n                children: [\n                    \"Description: \",\n                    task.description\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"task-due-date\",\n                children: [\n                    \"Due Date: \",\n                    task.due_date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrash, {\n                className: \"delete-button\",\n                onClick: handleDelete\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            task.status === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCheck, {\n                className: \"status-button completed-button\",\n                onClick: handleStatus\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTimes, {\n                className: \"status-button completed-button\",\n                onClick: handleStatus\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Task, \"m1nFA60tEXiFyTLAmTJZCBMY6js=\");\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQztBQUNoQjtBQUNhO0FBQ1A7QUFDNEI7QUFDUjtBQUVwRCxNQUFNUyxPQUFPO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7O0lBQzNCLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHWixpREFBVUEsQ0FBQ08sNkRBQVdBO0lBRXBFLE1BQU1NLGVBQWU7UUFDbkIsSUFBSTtZQUNGRixlQUFlRixLQUFLSyxFQUFFO1lBQ3RCWixpREFBS0EsQ0FBQ2EsT0FBTyxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNkZCxpREFBS0EsQ0FBQ2MsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLE1BQU1DLGVBQWU7UUFDbkIsSUFBSTtZQUNGTCxrQkFBa0JILEtBQUtLLEVBQUU7WUFDekJaLGlEQUFLQSxDQUFDYSxPQUFPLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RkLGlEQUFLQSxDQUFDYyxLQUFLLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVdWLEtBQUtXLE1BQU0sR0FBRyxnQkFBZ0I7OzBCQUM1Qyw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQWNULFFBQVE7Ozs7OzswQkFDcEMsOERBQUNXO2dCQUFHRixXQUFVOztvQkFBYTtvQkFBUVYsS0FBS2EsS0FBSzs7Ozs7OzswQkFDN0MsOERBQUNDO2dCQUFFSixXQUFVOztvQkFBbUI7b0JBQWNWLEtBQUtlLFdBQVc7Ozs7Ozs7MEJBQzlELDhEQUFDRDtnQkFBRUosV0FBVTs7b0JBQWdCO29CQUFXVixLQUFLZ0IsUUFBUTs7Ozs7OzswQkFFckQsOERBQUNyQixrR0FBT0E7Z0JBQUNlLFdBQVU7Z0JBQWdCTyxTQUFTYjs7Ozs7O1lBRTNDSixLQUFLVyxNQUFNLEtBQUssa0JBQ2YsOERBQUNmLGtHQUFPQTtnQkFDTmMsV0FBVTtnQkFDVk8sU0FBU1Q7Ozs7OzBDQUdYLDhEQUFDWCxrR0FBT0E7Z0JBQ05hLFdBQVU7Z0JBQ1ZPLFNBQVNUOzs7Ozs7Ozs7Ozs7QUFLbkI7R0EzQ01UO0tBQUFBO0FBNkNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFzay5qcz8yMjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBGYVRyYXNoLCBGYUNoZWNrLCBGYVRpbWVzICB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBUYXNrQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvVGFza0NvbnRleHRcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSAoeyB0YXNrLCBpbmRleCB9KSA9PiB7XHJcbiAgY29uc3QgeyBkZWxldGVUZW1wVGFzaywgc2V0VGVtcFRhc2tTdGF0dXMgfSA9IHVzZUNvbnRleHQoVGFza0NvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkZWxldGVUZW1wVGFzayh0YXNrLmlkKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlRlbXBUYXNrIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0YXNrXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0YXR1cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldFRlbXBUYXNrU3RhdHVzKHRhc2suaWQpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiU3VjY2Vzc2Z1bGx5IGNoYW5nZWQgc3RhdHVzIG9mIGEgdGFza1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgY2hhbmdpbmcgc3RhdHVzIG9mIGEgdGFza1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Rhc2suc3RhdHVzID8gXCJzdGF0dXMtdGFzdFwiIDogXCJ0YXNrXCJ9PlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGFzay10aXRsZVwiPntpbmRleCArIDF9PC9oMz5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRhc2stdGl0bGVcIj5UaXRsZToge3Rhc2sudGl0bGV9PC9oMz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGFzay1kZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOiB7dGFzay5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRhc2stZHVlLWRhdGVcIj5EdWUgRGF0ZToge3Rhc2suZHVlX2RhdGV9PC9wPlxyXG5cclxuICAgICAgPEZhVHJhc2ggY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gLz5cclxuXHJcbiAgICAgIHt0YXNrLnN0YXR1cyA9PT0gMSA/ICggXHJcbiAgICAgICAgPEZhQ2hlY2tcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXR1cy1idXR0b24gY29tcGxldGVkLWJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGF0dXN9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8RmFUaW1lc1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3RhdHVzLWJ1dHRvbiBjb21wbGV0ZWQtYnV0dG9uXCIgXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGF0dXN9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiYXhpb3MiLCJ0b2FzdCIsIkNvb2tpZXMiLCJGYVRyYXNoIiwiRmFDaGVjayIsIkZhVGltZXMiLCJUYXNrQ29udGV4dCIsIlRhc2siLCJ0YXNrIiwiaW5kZXgiLCJkZWxldGVUZW1wVGFzayIsInNldFRlbXBUYXNrU3RhdHVzIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJzdWNjZXNzIiwiZXJyb3IiLCJoYW5kbGVTdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJzdGF0dXMiLCJoMyIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiZHVlX2RhdGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Task.js\n"));

/***/ })

});