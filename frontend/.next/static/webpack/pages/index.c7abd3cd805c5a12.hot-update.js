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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\",\n        backgroundColor: \"#333\",\n        color: \"white\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst EditTask = (param)=>{\n    let { task, isOpen, onRequestClose, onSave } = param;\n    _s();\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description\n    });\n    const handleSave = ()=>{\n        onSave(task.id, editedTask);\n        setEditedTask(false);\n        onRequestClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Edit Task Modal\",\n        ariaHideApp: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Edit Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \"Title:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: editedTask.title,\n                        onChange: (e)=>setEditedTask({\n                                ...editedTask,\n                                title: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \"Descripton:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: editedTask.description,\n                        onChange: (e)=>setEditedTask({\n                                ...editedTask,\n                                description: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"button-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"submit-button\",\n                        onClick: handleSave,\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"submit-button\",\n                        onClick: onRequestClose,\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTask, \"DxIomWYE8eTYykSRHfq9ko7NFtU=\");\n_c = EditTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTask);\nvar _c;\n$RefreshReg$(_c, \"EditTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0VGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1HLG9CQUFvQjtJQUN4QkMsU0FBUztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLGlCQUFpQjtRQUNqQkMsT0FBTztJQUNUO0lBQ0FDLFNBQVM7UUFDUEYsaUJBQWlCO0lBQ25CO0FBQ0Y7QUFFQSxNQUFNRyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLGNBQWMsRUFBRUMsTUFBTSxFQUFFOztJQUV4RCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR3ZCLCtDQUFRQSxDQUFDO1FBQzNDd0IsT0FBT04sS0FBS00sS0FBSztRQUNqQkMsYUFBYVAsS0FBS08sV0FBVztJQUMvQjtJQUVBLE1BQU1DLGFBQWE7UUFDakJMLE9BQU9ILEtBQUtTLEVBQUUsRUFBRUw7UUFDaEJDLGNBQWM7UUFDZEg7SUFDRjtJQUVBLHFCQUNFLDhEQUFDbkIsb0RBQUtBO1FBQ0prQixRQUFRQTtRQUNSQyxnQkFBZ0JBO1FBQ2hCUSxPQUFPMUI7UUFDUDJCLGNBQWE7UUFDYkMsYUFBYTs7MEJBRWIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPaEIsV0FBV0UsS0FBSzt3QkFDdkJlLFVBQVUsQ0FBQ0MsSUFDVGpCLGNBQWM7Z0NBQUUsR0FBR0QsVUFBVTtnQ0FBRUUsT0FBT2dCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBQzs7Ozs7Ozs7Ozs7OzBCQUkzRCw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ087d0JBQ0NKLE9BQU9oQixXQUFXRyxXQUFXO3dCQUM3QmMsVUFBVSxDQUFDQyxJQUNUakIsY0FBYztnQ0FBRSxHQUFHRCxVQUFVO2dDQUFFRyxhQUFhZSxFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUM7Ozs7Ozs7Ozs7OzswQkFJakUsOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1U7d0JBQU9OLE1BQUs7d0JBQVNKLFdBQVU7d0JBQWdCVyxTQUFTbEI7a0NBQVk7Ozs7OztrQ0FHckUsOERBQUNpQjt3QkFDQ04sTUFBSzt3QkFDTEosV0FBVTt3QkFDVlcsU0FBU3hCO2tDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXZETUg7S0FBQUE7QUF5RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdFRhc2suanM/MTMyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5cclxuY29uc3QgY3VzdG9tTW9kYWxTdHlsZXMgPSB7XHJcbiAgY29udGVudDoge1xyXG4gICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgbGVmdDogXCI1MCVcIixcclxuICAgIHJpZ2h0OiBcImF1dG9cIixcclxuICAgIGJvdHRvbTogXCJhdXRvXCIsXHJcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiXHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEVkaXRUYXNrID0gKHsgdGFzaywgaXNPcGVuLCBvblJlcXVlc3RDbG9zZSwgb25TYXZlIH0pID0+IHtcclxuICAgIFxyXG4gIGNvbnN0IFtlZGl0ZWRUYXNrLCBzZXRFZGl0ZWRUYXNrXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvblNhdmUodGFzay5pZCwgZWRpdGVkVGFzayk7XHJcbiAgICBzZXRFZGl0ZWRUYXNrKGZhbHNlKTtcclxuICAgIG9uUmVxdWVzdENsb3NlKCk7XHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICBvblJlcXVlc3RDbG9zZT17b25SZXF1ZXN0Q2xvc2V9XHJcbiAgICAgIHN0eWxlPXtjdXN0b21Nb2RhbFN0eWxlc31cclxuICAgICAgY29udGVudExhYmVsPVwiRWRpdCBUYXNrIE1vZGFsXCJcclxuICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxyXG4gICAgPlxyXG4gICAgICA8aDI+RWRpdCBUYXNrPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZWRpdGVkVGFzay50aXRsZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgc2V0RWRpdGVkVGFzayh7IC4uLmVkaXRlZFRhc2ssIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+RGVzY3JpcHRvbjo8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZFRhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldEVkaXRlZFRhc2soeyAuLi5lZGl0ZWRUYXNrLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlU2F2ZX0+XHJcbiAgICAgICAgICBTYXZlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e29uUmVxdWVzdENsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiY3VzdG9tTW9kYWxTdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidHJhbnNmb3JtIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJvdmVybGF5IiwiRWRpdFRhc2siLCJ0YXNrIiwiaXNPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJvblNhdmUiLCJlZGl0ZWRUYXNrIiwic2V0RWRpdGVkVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVTYXZlIiwiaWQiLCJzdHlsZSIsImNvbnRlbnRMYWJlbCIsImFyaWFIaWRlQXBwIiwiaDIiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/editTask.js\n"));

/***/ })

});