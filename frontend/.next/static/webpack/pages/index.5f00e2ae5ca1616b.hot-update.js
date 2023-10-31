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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaCheck,FaPen,FaTimes,FaTrash!=!react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _context_TaskContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/TaskContext */ \"./context/TaskContext.js\");\n/* harmony import */ var _pages_editTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/editTask */ \"./pages/editTask.js\");\n/* harmony import */ var _pages_deleteTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/deleteTask */ \"./pages/deleteTask.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Task = (param)=>{\n    let { task, index } = param;\n    _s();\n    const { deleteTask, setTaskStatus, updateTask } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TaskContext__WEBPACK_IMPORTED_MODULE_3__.TaskContext);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleEdit = ()=>{\n        setIsEditing(true);\n    };\n    const handleDelete = async ()=>{\n        setIsDeleting(true);\n    };\n    const handleStatus = async ()=>{\n        try {\n            setTaskStatus(task.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully changed status of a task\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error changing status of a task\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: task.status ? \"status-tast\" : \"task\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"task-title\",\n                children: task.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"task-description\",\n                children: task.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"task-due-date\",\n                children: [\n                    \"Due Date: \",\n                    task.due_date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    task.status === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCheck, {\n                        className: \"status-button completed-button\",\n                        onClick: handleStatus\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTimes, {\n                        className: \"status-button completed-button\",\n                        onClick: handleStatus\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTrash, {\n                        className: \"delete-button\",\n                        onClick: handleDelete\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPen, {\n                        className: \"edit-button\",\n                        onClick: handleEdit\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_editTask__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                task: task,\n                isOpen: isEditing,\n                onRequestClose: ()=>setIsEditing(false),\n                onSave: updateTask\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined) : isDeleting ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_deleteTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                task: task,\n                isOpen: isDeleting,\n                onRequestClose: ()=>setIsDeleting(false),\n                onDelete: deleteTask\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Task, \"hZV+60onY+3fX/X3C7RB2H9yGXU=\");\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDYjtBQUMyQjtBQUNkO0FBQ1o7QUFDSTtBQUU1QyxNQUFNVyxPQUFPO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7O0lBQzNCLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFHZixpREFBVUEsQ0FBQ08sNkRBQVdBO0lBQ3hFLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDaUIsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQUM7SUFFN0MsTUFBTW1CLGFBQWE7UUFDakJILGFBQWE7SUFDZjtJQUVBLE1BQU1JLGVBQWU7UUFDbkJGLGNBQWM7SUFDaEI7SUFFQSxNQUFNRyxlQUFlO1FBQ25CLElBQUk7WUFDRlIsY0FBY0gsS0FBS1ksRUFBRTtZQUNyQnJCLGlEQUFLQSxDQUFDc0IsT0FBTyxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNkdkIsaURBQUtBLENBQUN1QixLQUFLLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdoQixLQUFLaUIsTUFBTSxHQUFHLGdCQUFnQjs7MEJBQzVDLDhEQUFDQztnQkFBR0YsV0FBVTswQkFBY2hCLEtBQUttQixLQUFLOzs7Ozs7MEJBQ3RDLDhEQUFDQztnQkFBRUosV0FBVTswQkFBb0JoQixLQUFLcUIsV0FBVzs7Ozs7OzBCQUNqRCw4REFBQ0Q7Z0JBQUVKLFdBQVU7O29CQUFnQjtvQkFBV2hCLEtBQUtzQixRQUFROzs7Ozs7OzBCQUNyRCw4REFBQ1A7O29CQUNFZixLQUFLaUIsTUFBTSxLQUFLLGtCQUNmLDhEQUFDeEIsd0dBQU9BO3dCQUNOdUIsV0FBVTt3QkFDVk8sU0FBU1o7Ozs7O2tEQUdYLDhEQUFDakIsd0dBQU9BO3dCQUNOc0IsV0FBVTt3QkFDVk8sU0FBU1o7Ozs7OztrQ0FHYiw4REFBQ25CLHdHQUFPQTt3QkFBQ3dCLFdBQVU7d0JBQWdCTyxTQUFTYjs7Ozs7O2tDQUM1Qyw4REFBQ2Ysc0dBQUtBO3dCQUFDcUIsV0FBVTt3QkFBY08sU0FBU2Q7Ozs7Ozs7Ozs7OztZQUV6Q0osMEJBQ0MsOERBQUNSLHVEQUFRQTtnQkFDUEcsTUFBTUE7Z0JBQ053QixRQUFRbkI7Z0JBQ1JvQixnQkFBZ0IsSUFBTW5CLGFBQWE7Z0JBQ25Db0IsUUFBUXRCOzs7Ozs0QkFFUkcsMkJBQ0YsOERBQUNULHlEQUFVQTtnQkFDVEUsTUFBTUE7Z0JBQ053QixRQUFRakI7Z0JBQ1JrQixnQkFBZ0IsSUFBTWpCLGNBQWM7Z0JBQ3BDbUIsVUFBVXpCOzs7Ozs0QkFFVjs7Ozs7OztBQUdWO0dBM0RNSDtLQUFBQTtBQTZETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rhc2suanM/MjI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgRmFUcmFzaCwgRmFDaGVjaywgRmFUaW1lcywgRmFQZW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgVGFza0NvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L1Rhc2tDb250ZXh0XCI7XHJcbmltcG9ydCBFZGl0VGFzayBmcm9tIFwiQC9wYWdlcy9lZGl0VGFza1wiO1xyXG5pbXBvcnQgRGVsZXRlVGFzayBmcm9tIFwiQC9wYWdlcy9kZWxldGVUYXNrXCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHsgdGFzaywgaW5kZXggfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGVsZXRlVGFzaywgc2V0VGFza1N0YXR1cywgdXBkYXRlVGFzayB9ID0gdXNlQ29udGV4dChUYXNrQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0VkaXRpbmcodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0dXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRUYXNrU3RhdHVzKHRhc2suaWQpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiU3VjY2Vzc2Z1bGx5IGNoYW5nZWQgc3RhdHVzIG9mIGEgdGFza1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgY2hhbmdpbmcgc3RhdHVzIG9mIGEgdGFza1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Rhc2suc3RhdHVzID8gXCJzdGF0dXMtdGFzdFwiIDogXCJ0YXNrXCJ9PlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGFzay10aXRsZVwiPnt0YXNrLnRpdGxlfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRhc2stZGVzY3JpcHRpb25cIj57dGFzay5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRhc2stZHVlLWRhdGVcIj5EdWUgRGF0ZToge3Rhc2suZHVlX2RhdGV9PC9wPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0YXNrLnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgIDxGYUNoZWNrXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXR1cy1idXR0b24gY29tcGxldGVkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN0YXR1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxGYVRpbWVzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXR1cy1idXR0b24gY29tcGxldGVkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN0YXR1c31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8RmFUcmFzaCBjbGFzc05hbWU9XCJkZWxldGUtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRGVsZXRlfSAvPlxyXG4gICAgICAgIDxGYVBlbiBjbGFzc05hbWU9XCJlZGl0LWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUVkaXR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgIDxFZGl0VGFza1xyXG4gICAgICAgICAgdGFzaz17dGFza31cclxuICAgICAgICAgIGlzT3Blbj17aXNFZGl0aW5nfVxyXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldElzRWRpdGluZyhmYWxzZSl9XHJcbiAgICAgICAgICBvblNhdmU9e3VwZGF0ZVRhc2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IGlzRGVsZXRpbmcgPyAoXHJcbiAgICAgICAgPERlbGV0ZVRhc2tcclxuICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICBpc09wZW49e2lzRGVsZXRpbmd9XHJcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0SXNEZWxldGluZyhmYWxzZSl9XHJcbiAgICAgICAgICBvbkRlbGV0ZT17ZGVsZXRlVGFza31cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIkZhVHJhc2giLCJGYUNoZWNrIiwiRmFUaW1lcyIsIkZhUGVuIiwiVGFza0NvbnRleHQiLCJFZGl0VGFzayIsIkRlbGV0ZVRhc2siLCJUYXNrIiwidGFzayIsImluZGV4IiwiZGVsZXRlVGFzayIsInNldFRhc2tTdGF0dXMiLCJ1cGRhdGVUYXNrIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwiaXNEZWxldGluZyIsInNldElzRGVsZXRpbmciLCJoYW5kbGVFZGl0IiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlU3RhdHVzIiwiaWQiLCJzdWNjZXNzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzdGF0dXMiLCJoMyIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiZHVlX2RhdGUiLCJvbkNsaWNrIiwiaXNPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJvblNhdmUiLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Task.js\n"));

/***/ })

});