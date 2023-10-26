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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst EditTask = (param)=>{\n    let { task, isOpen, onRequestClose, onSave } = param;\n    _s();\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description\n    });\n    const handleSave = ()=>{\n        fetch(\"http://localhost:5000/tempTasks/\".concat(task.id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(editedTask)\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            setIsEditing(false);\n        }).catch((error)=>{\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Error saving task changes\");\n        });\n        onRequestClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Edit Task Modal\",\n        ariaHideApp: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Edit Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \"Title:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: editedTask.title,\n                        onChange: (e)=>setEditedTask({\n                                ...editedTask,\n                                title: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \"Title:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: editedTask.description,\n                        onChange: (e)=>setEditedTask({\n                                ...editedTask,\n                                description: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onRequestClose,\n                children: \"Cancel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTask, \"DxIomWYE8eTYykSRHfq9ko7NFtU=\");\n_c = EditTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTask);\nvar _c;\n$RefreshReg$(_c, \"EditTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0VGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUjtBQUNPO0FBQ3ZDLE1BQU1JLG9CQUFvQjtJQUN4QkMsU0FBUztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxpQkFBaUI7SUFDbkI7QUFDRjtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3hELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHdkIsK0NBQVFBLENBQUM7UUFDM0N3QixPQUFPTixLQUFLTSxLQUFLO1FBQ2pCQyxhQUFhUCxLQUFLTyxXQUFXO0lBQy9CO0lBRUEsTUFBTUMsYUFBYTtRQUNqQkMsTUFBTSxtQ0FBMkMsT0FBUlQsS0FBS1UsRUFBRSxHQUFJO1lBQ2xEQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1g7UUFDdkIsR0FDR1ksSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSx1QkFBdUMsT0FBaEJGLFNBQVNHLE1BQU07WUFDeEQ7WUFDQUMsYUFBYTtRQUNmLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOdkMsaURBQUtBLENBQUN1QyxLQUFLLENBQUM7UUFDZDtRQUNGckI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDbkIsb0RBQUtBO1FBQ0prQixRQUFRQTtRQUNSQyxnQkFBZ0JBO1FBQ2hCc0IsT0FBT3ZDO1FBQ1B3QyxjQUFhO1FBQ2JDLGFBQWE7OzBCQUViLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFROzs7Ozs7a0NBQ3ZCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBTzlCLFdBQVdFLEtBQUs7d0JBQ3ZCNkIsVUFBVSxDQUFDQyxJQUNUL0IsY0FBYztnQ0FBRSxHQUFHRCxVQUFVO2dDQUFFRSxPQUFPOEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUFDOzs7Ozs7Ozs7Ozs7MEJBSTNELDhEQUFDTjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFROzs7Ozs7a0NBQ3ZCLDhEQUFDTzt3QkFDQ0osT0FBTzlCLFdBQVdHLFdBQVc7d0JBQzdCNEIsVUFBVSxDQUFDQyxJQUNUL0IsY0FBYztnQ0FBRSxHQUFHRCxVQUFVO2dDQUFFRyxhQUFhNkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUFDOzs7Ozs7Ozs7Ozs7MEJBSWpFLDhEQUFDSztnQkFBT0MsU0FBU2hDOzBCQUFZOzs7Ozs7MEJBQzdCLDhEQUFDK0I7Z0JBQU9DLFNBQVN0QzswQkFBZ0I7Ozs7Ozs7Ozs7OztBQUd2QztHQTFETUg7S0FBQUE7QUE0RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdFRhc2suanM/MTMyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5jb25zdCBjdXN0b21Nb2RhbFN0eWxlcyA9IHtcclxuICBjb250ZW50OiB7XHJcbiAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgYm90dG9tOiBcImF1dG9cIixcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgIGJveFNoYWRvdzogXCIwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgb3ZlcmxheToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBFZGl0VGFzayA9ICh7IHRhc2ssIGlzT3Blbiwgb25SZXF1ZXN0Q2xvc2UsIG9uU2F2ZSB9KSA9PiB7XHJcbiAgY29uc3QgW2VkaXRlZFRhc2ssIHNldEVkaXRlZFRhc2tdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdGVtcFRhc2tzLyR7dGFzay5pZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlZGl0ZWRUYXNrKSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3Igc2F2aW5nIHRhc2sgY2hhbmdlc1wiKTtcclxuICAgICAgfSk7XHJcbiAgICBvblJlcXVlc3RDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuICAgICAgc3R5bGU9e2N1c3RvbU1vZGFsU3R5bGVzfVxyXG4gICAgICBjb250ZW50TGFiZWw9XCJFZGl0IFRhc2sgTW9kYWxcIlxyXG4gICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XHJcbiAgICA+XHJcbiAgICAgIDxoMj5FZGl0IFRhc2s8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtlZGl0ZWRUYXNrLnRpdGxlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXRFZGl0ZWRUYXNrKHsgLi4uZWRpdGVkVGFzaywgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZFRhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldEVkaXRlZFRhc2soeyAuLi5lZGl0ZWRUYXNrLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5TYXZlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25SZXF1ZXN0Q2xvc2V9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFRhc2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJ0b2FzdCIsImN1c3RvbU1vZGFsU3R5bGVzIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRyYW5zZm9ybSIsIm1heFdpZHRoIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImJvcmRlciIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJFZGl0VGFzayIsInRhc2siLCJpc09wZW4iLCJvblJlcXVlc3RDbG9zZSIsIm9uU2F2ZSIsImVkaXRlZFRhc2siLCJzZXRFZGl0ZWRUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImhhbmRsZVNhdmUiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsInNldElzRWRpdGluZyIsImNhdGNoIiwiZXJyb3IiLCJzdHlsZSIsImNvbnRlbnRMYWJlbCIsImFyaWFIaWRlQXBwIiwiaDIiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/editTask.js\n"));

/***/ })

});