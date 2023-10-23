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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaCheck_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaCheck,FaTimes,FaTrash!=!react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _context_TaskContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/TaskContext */ \"./context/TaskContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Task = (param)=>{\n    let { task, index } = param;\n    _s();\n    const { deleteTask, setTempTaskStatus } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TaskContext__WEBPACK_IMPORTED_MODULE_4__.TaskContext);\n    const handleDelete = async ()=>{\n        try {\n            deleteTask(task.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"TempTask deleted successfully\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error deleting task\");\n        }\n    };\n    const handleStatus = async ()=>{\n        try {\n            setTaskStatus(task.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully changed status of a task\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error changing status of a task\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: task.status ? \"status-tast\" : \"task\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"task-title\",\n                children: index + 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"task-title\",\n                children: [\n                    \"Title: \",\n                    task.title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"task-description\",\n                children: [\n                    \"Description: \",\n                    task.description\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"task-due-date\",\n                children: [\n                    \"Due Date: \",\n                    task.due_date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrash, {\n                className: \"delete-button\",\n                onClick: handleDelete\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            task.status === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCheck, {\n                className: \"status-button completed-button\",\n                onClick: handleStatus\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTimes, {\n                className: \"status-button completed-button\",\n                onClick: handleStatus\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Task, \"L6dxANm0AkHTUxnew/dud0W5MBY=\");\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQztBQUNoQjtBQUNhO0FBQ1A7QUFDNEI7QUFDUjtBQUVwRCxNQUFNUyxPQUFPO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7O0lBQzNCLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHWixpREFBVUEsQ0FBQ08sNkRBQVdBO0lBRWhFLE1BQU1NLGVBQWU7UUFDbkIsSUFBSTtZQUNGRixXQUFXRixLQUFLSyxFQUFFO1lBQ2xCWixpREFBS0EsQ0FBQ2EsT0FBTyxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNkZCxpREFBS0EsQ0FBQ2MsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLE1BQU1DLGVBQWU7UUFDbkIsSUFBSTtZQUNGQyxjQUFjVCxLQUFLSyxFQUFFO1lBQ3JCWixpREFBS0EsQ0FBQ2EsT0FBTyxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNkZCxpREFBS0EsQ0FBQ2MsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXWCxLQUFLWSxNQUFNLEdBQUcsZ0JBQWdCOzswQkFDNUMsOERBQUNDO2dCQUFHRixXQUFVOzBCQUFjVixRQUFROzs7Ozs7MEJBQ3BDLDhEQUFDWTtnQkFBR0YsV0FBVTs7b0JBQWE7b0JBQVFYLEtBQUtjLEtBQUs7Ozs7Ozs7MEJBQzdDLDhEQUFDQztnQkFBRUosV0FBVTs7b0JBQW1CO29CQUFjWCxLQUFLZ0IsV0FBVzs7Ozs7OzswQkFDOUQsOERBQUNEO2dCQUFFSixXQUFVOztvQkFBZ0I7b0JBQVdYLEtBQUtpQixRQUFROzs7Ozs7OzBCQUVyRCw4REFBQ3RCLGtHQUFPQTtnQkFBQ2dCLFdBQVU7Z0JBQWdCTyxTQUFTZDs7Ozs7O1lBRTNDSixLQUFLWSxNQUFNLEtBQUssa0JBQ2YsOERBQUNoQixrR0FBT0E7Z0JBQ05lLFdBQVU7Z0JBQ1ZPLFNBQVNWOzs7OzswQ0FHWCw4REFBQ1gsa0dBQU9BO2dCQUNOYyxXQUFVO2dCQUNWTyxTQUFTVjs7Ozs7Ozs7Ozs7O0FBS25CO0dBM0NNVDtLQUFBQTtBQTZDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rhc2suanM/MjI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgRmFUcmFzaCwgRmFDaGVjaywgRmFUaW1lcyAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgVGFza0NvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L1Rhc2tDb250ZXh0XCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHsgdGFzaywgaW5kZXggfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGVsZXRlVGFzaywgc2V0VGVtcFRhc2tTdGF0dXMgfSA9IHVzZUNvbnRleHQoVGFza0NvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkZWxldGVUYXNrKHRhc2suaWQpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiVGVtcFRhc2sgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHRhc2tcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0VGFza1N0YXR1cyh0YXNrLmlkKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSBjaGFuZ2VkIHN0YXR1cyBvZiBhIHRhc2tcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm9yIGNoYW5naW5nIHN0YXR1cyBvZiBhIHRhc2tcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0YXNrLnN0YXR1cyA/IFwic3RhdHVzLXRhc3RcIiA6IFwidGFza1wifT5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRhc2stdGl0bGVcIj57aW5kZXggKyAxfTwvaDM+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YXNrLXRpdGxlXCI+VGl0bGU6IHt0YXNrLnRpdGxlfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRhc2stZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjoge3Rhc2suZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0YXNrLWR1ZS1kYXRlXCI+RHVlIERhdGU6IHt0YXNrLmR1ZV9kYXRlfTwvcD5cclxuXHJcbiAgICAgIDxGYVRyYXNoIGNsYXNzTmFtZT1cImRlbGV0ZS1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9IC8+XHJcblxyXG4gICAgICB7dGFzay5zdGF0dXMgPT09IDEgPyAoIFxyXG4gICAgICAgIDxGYUNoZWNrXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0dXMtYnV0dG9uIGNvbXBsZXRlZC1idXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3RhdHVzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEZhVGltZXNcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXR1cy1idXR0b24gY29tcGxldGVkLWJ1dHRvblwiIFxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3RhdHVzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsImF4aW9zIiwidG9hc3QiLCJDb29raWVzIiwiRmFUcmFzaCIsIkZhQ2hlY2siLCJGYVRpbWVzIiwiVGFza0NvbnRleHQiLCJUYXNrIiwidGFzayIsImluZGV4IiwiZGVsZXRlVGFzayIsInNldFRlbXBUYXNrU3RhdHVzIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJzdWNjZXNzIiwiZXJyb3IiLCJoYW5kbGVTdGF0dXMiLCJzZXRUYXNrU3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdHVzIiwiaDMiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImR1ZV9kYXRlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Task.js\n"));

/***/ })

});