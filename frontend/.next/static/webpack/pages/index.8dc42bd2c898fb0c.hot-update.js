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

/***/ "./pages/editTask.js":
/*!***************************!*\
  !*** ./pages/editTask.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\",\n        backgroundColor: \"#333\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst EditTask = (param)=>{\n    let { task, isOpen, onRequestClose, onSave } = param;\n    _s();\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description\n    });\n    const handleSave = ()=>{\n        onSave(task.id, editedTask);\n        setEditedTask(false);\n    };\n    console.log(editedTask);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Edit Task Modal\",\n        ariaHideApp: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Edit Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \"Title:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: editedTask.title,\n                        onChange: (e)=>setEditedTask({\n                                ...editedTask,\n                                title: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \"Descripton:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: editedTask.description,\n                        onChange: (e)=>setEditedTask({\n                                ...editedTask,\n                                description: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"submit-button\",\n                        onClick: handleSave,\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"submit-button\",\n                        onClick: onRequestClose,\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTask, \"DxIomWYE8eTYykSRHfq9ko7NFtU=\");\n_c = EditTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTask);\nvar _c;\n$RefreshReg$(_c, \"EditTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0VGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUjtBQUNPO0FBQ3ZDLE1BQU1JLG9CQUFvQjtJQUN4QkMsU0FBUztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLGlCQUFpQjtJQUNuQjtJQUNBQyxTQUFTO1FBQ1BELGlCQUFpQjtJQUNuQjtBQUNGO0FBRUEsTUFBTUUsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRTs7SUFFeEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUd2QiwrQ0FBUUEsQ0FBQztRQUMzQ3dCLE9BQU9OLEtBQUtNLEtBQUs7UUFDakJDLGFBQWFQLEtBQUtPLFdBQVc7SUFDL0I7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCTCxPQUFPSCxLQUFLUyxFQUFFLEVBQUVMO1FBQ2hCQyxjQUFjO0lBQ2hCO0lBRUFLLFFBQVFDLEdBQUcsQ0FBQ1A7SUFDWixxQkFDRSw4REFBQ3JCLG9EQUFLQTtRQUNKa0IsUUFBUUE7UUFDUkMsZ0JBQWdCQTtRQUNoQlUsT0FBTzNCO1FBQ1A0QixjQUFhO1FBQ2JDLGFBQWE7OzBCQUViLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFROzs7Ozs7a0NBQ3ZCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBT2xCLFdBQVdFLEtBQUs7d0JBQ3ZCaUIsVUFBVSxDQUFDQyxJQUNUbkIsY0FBYztnQ0FBRSxHQUFHRCxVQUFVO2dDQUFFRSxPQUFPa0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUFDOzs7Ozs7Ozs7Ozs7MEJBSTNELDhEQUFDTjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFROzs7Ozs7a0NBQ3ZCLDhEQUFDTzt3QkFDQ0osT0FBT2xCLFdBQVdHLFdBQVc7d0JBQzdCZ0IsVUFBVSxDQUFDQyxJQUNUbkIsY0FBYztnQ0FBRSxHQUFHRCxVQUFVO2dDQUFFRyxhQUFhaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUFDOzs7Ozs7Ozs7Ozs7MEJBSWpFLDhEQUFDTjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNVO3dCQUFPTixNQUFLO3dCQUFTSixXQUFVO3dCQUFnQlcsU0FBU3BCO2tDQUFZOzs7Ozs7a0NBR3JFLDhEQUFDbUI7d0JBQ0NOLE1BQUs7d0JBQ0xKLFdBQVU7d0JBQ1ZXLFNBQVMxQjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0F2RE1IO0tBQUFBO0FBeUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VkaXRUYXNrLmpzPzEzMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuY29uc3QgY3VzdG9tTW9kYWxTdHlsZXMgPSB7XHJcbiAgY29udGVudDoge1xyXG4gICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgbGVmdDogXCI1MCVcIixcclxuICAgIHJpZ2h0OiBcImF1dG9cIixcclxuICAgIGJvdHRvbTogXCJhdXRvXCIsXHJcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEVkaXRUYXNrID0gKHsgdGFzaywgaXNPcGVuLCBvblJlcXVlc3RDbG9zZSwgb25TYXZlIH0pID0+IHtcclxuICAgIFxyXG4gIGNvbnN0IFtlZGl0ZWRUYXNrLCBzZXRFZGl0ZWRUYXNrXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvblNhdmUodGFzay5pZCwgZWRpdGVkVGFzayk7XHJcbiAgICBzZXRFZGl0ZWRUYXNrKGZhbHNlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKGVkaXRlZFRhc2spXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfVxyXG4gICAgICBzdHlsZT17Y3VzdG9tTW9kYWxTdHlsZXN9XHJcbiAgICAgIGNvbnRlbnRMYWJlbD1cIkVkaXQgVGFzayBNb2RhbFwiXHJcbiAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cclxuICAgID5cclxuICAgICAgPGgyPkVkaXQgVGFzazwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZFRhc2sudGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldEVkaXRlZFRhc2soeyAuLi5lZGl0ZWRUYXNrLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPkRlc2NyaXB0b246PC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtlZGl0ZWRUYXNrLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXRFZGl0ZWRUYXNrKHsgLi4uZWRpdGVkVGFzaywgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9PlxyXG4gICAgICAgICAgU2F2ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtvblJlcXVlc3RDbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDYW5jZWxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0VGFzaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsInRvYXN0IiwiY3VzdG9tTW9kYWxTdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidHJhbnNmb3JtIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmxheSIsIkVkaXRUYXNrIiwidGFzayIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwib25TYXZlIiwiZWRpdGVkVGFzayIsInNldEVkaXRlZFRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaGFuZGxlU2F2ZSIsImlkIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiY29udGVudExhYmVsIiwiYXJpYUhpZGVBcHAiLCJoMiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/editTask.js\n"));

/***/ })

});