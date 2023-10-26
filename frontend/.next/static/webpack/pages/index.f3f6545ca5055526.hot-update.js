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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\",\n        backgroundColor: \"black\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst EditTask = (param)=>{\n    let { task, isOpen, onRequestClose, onSave } = param;\n    _s();\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description\n    });\n    const handleSave = ()=>{\n        fetch(\"http://localhost:5000/tempTasks/\".concat(task.id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(editedTask)\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            setIsEditing(false);\n        }).catch((error)=>{\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Error saving task changes\");\n        });\n        onRequestClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Edit Task Modal\",\n        ariaHideApp: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Edit Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \"Title:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: editedTask.title,\n                        onChange: (e)=>setEditedTask({\n                                ...editedTask,\n                                title: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"title\",\n                        children: \"Descripton:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: editedTask.description,\n                        onChange: (e)=>setEditedTask({\n                                ...editedTask,\n                                description: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onRequestClose,\n                children: \"Cancel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTask, \"DxIomWYE8eTYykSRHfq9ko7NFtU=\");\n_c = EditTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTask);\nvar _c;\n$RefreshReg$(_c, \"EditTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0VGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUjtBQUNPO0FBQ3ZDLE1BQU1JLG9CQUFvQjtJQUN4QkMsU0FBUztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLGlCQUFnQjtJQUNsQjtJQUNBQyxTQUFTO1FBQ1BELGlCQUFpQjtJQUNuQjtBQUNGO0FBRUEsTUFBTUUsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxjQUFjLEVBQUVDLE1BQU0sRUFBRTs7SUFDeEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUd2QiwrQ0FBUUEsQ0FBQztRQUMzQ3dCLE9BQU9OLEtBQUtNLEtBQUs7UUFDakJDLGFBQWFQLEtBQUtPLFdBQVc7SUFDL0I7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCQyxNQUFNLG1DQUEyQyxPQUFSVCxLQUFLVSxFQUFFLEdBQUk7WUFDbERDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDWDtRQUN2QixHQUNHWSxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJLENBQUNBLFNBQVNDLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkYsU0FBU0csTUFBTTtZQUN4RDtZQUNBQyxhQUFhO1FBQ2YsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ052QyxpREFBS0EsQ0FBQ3VDLEtBQUssQ0FBQztRQUNkO1FBQ0ZyQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNuQixvREFBS0E7UUFDSmtCLFFBQVFBO1FBQ1JDLGdCQUFnQkE7UUFDaEJzQixPQUFPdkM7UUFDUHdDLGNBQWE7UUFDYkMsYUFBYTs7MEJBRWIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPOUIsV0FBV0UsS0FBSzt3QkFDdkI2QixVQUFVLENBQUNDLElBQ1QvQixjQUFjO2dDQUFFLEdBQUdELFVBQVU7Z0NBQUVFLE9BQU84QixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUM7Ozs7Ozs7Ozs7OzswQkFJM0QsOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUNPO3dCQUNDSixPQUFPOUIsV0FBV0csV0FBVzt3QkFDN0I0QixVQUFVLENBQUNDLElBQ1QvQixjQUFjO2dDQUFFLEdBQUdELFVBQVU7Z0NBQUVHLGFBQWE2QixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUM7Ozs7Ozs7Ozs7OzswQkFJakUsOERBQUNLO2dCQUFPQyxTQUFTaEM7MEJBQVk7Ozs7OzswQkFDN0IsOERBQUMrQjtnQkFBT0MsU0FBU3RDOzBCQUFnQjs7Ozs7Ozs7Ozs7O0FBR3ZDO0dBMURNSDtLQUFBQTtBQTRETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lZGl0VGFzay5qcz8xMzI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmNvbnN0IGN1c3RvbU1vZGFsU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHRvcDogXCI1MCVcIixcclxuICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICByaWdodDogXCJhdXRvXCIsXHJcbiAgICBib3R0b206IFwiYXV0b1wiLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiXHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEVkaXRUYXNrID0gKHsgdGFzaywgaXNPcGVuLCBvblJlcXVlc3RDbG9zZSwgb25TYXZlIH0pID0+IHtcclxuICBjb25zdCBbZWRpdGVkVGFzaywgc2V0RWRpdGVkVGFza10gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogdGFzay50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90ZW1wVGFza3MvJHt0YXNrLmlkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVkaXRlZFRhc2spLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGFzayBjaGFuZ2VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgIG9uUmVxdWVzdENsb3NlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfVxyXG4gICAgICBzdHlsZT17Y3VzdG9tTW9kYWxTdHlsZXN9XHJcbiAgICAgIGNvbnRlbnRMYWJlbD1cIkVkaXQgVGFzayBNb2RhbFwiXHJcbiAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cclxuICAgID5cclxuICAgICAgPGgyPkVkaXQgVGFzazwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e2VkaXRlZFRhc2sudGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldEVkaXRlZFRhc2soeyAuLi5lZGl0ZWRUYXNrLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPkRlc2NyaXB0b246PC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtlZGl0ZWRUYXNrLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXRFZGl0ZWRUYXNrKHsgLi4uZWRpdGVkVGFzaywgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVxdWVzdENsb3NlfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwidG9hc3QiLCJjdXN0b21Nb2RhbFN0eWxlcyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJtYXhXaWR0aCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVybGF5IiwiRWRpdFRhc2siLCJ0YXNrIiwiaXNPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJvblNhdmUiLCJlZGl0ZWRUYXNrIiwic2V0RWRpdGVkVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVTYXZlIiwiZmV0Y2giLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJzZXRJc0VkaXRpbmciLCJjYXRjaCIsImVycm9yIiwic3R5bGUiLCJjb250ZW50TGFiZWwiLCJhcmlhSGlkZUFwcCIsImgyIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/editTask.js\n"));

/***/ })

});