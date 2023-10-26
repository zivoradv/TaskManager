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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst EditTask = (param)=>{\n    let { task, isOpen, onRequestClose, onSave } = param;\n    _s();\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description\n    });\n    const handleSave = ()=>{\n        fetch(\"http://localhost:5000/tempTasks/\".concat(task.id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(editedTask)\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            setIsEditing(false);\n        }).catch((error)=>{\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Error saving task changes\");\n        });\n        onRequestClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Edit Task Modal\",\n        ariaHideApp: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Edit Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: editedTask.title,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        title: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: editedTask.description,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        description: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onRequestClose,\n                children: \"Cancel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTask, \"DxIomWYE8eTYykSRHfq9ko7NFtU=\");\n_c = EditTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTask);\nvar _c;\n$RefreshReg$(_c, \"EditTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0VGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUjtBQUNPO0FBQ3ZDLE1BQU1JLG9CQUFvQjtJQUN4QkMsU0FBUztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxpQkFBaUI7SUFDbkI7QUFDRjtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3hELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHdkIsK0NBQVFBLENBQUM7UUFDM0N3QixPQUFPTixLQUFLTSxLQUFLO1FBQ2pCQyxhQUFhUCxLQUFLTyxXQUFXO0lBQy9CO0lBRUEsTUFBTUMsYUFBYTtRQUNqQkMsTUFBTSxtQ0FBMkMsT0FBUlQsS0FBS1UsRUFBRSxHQUFJO1lBQ2xEQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1g7UUFDdkIsR0FDR1ksSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSx1QkFBdUMsT0FBaEJGLFNBQVNHLE1BQU07WUFDeEQ7WUFDQUMsYUFBYTtRQUNmLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOdkMsaURBQUtBLENBQUN1QyxLQUFLLENBQUM7UUFDZDtRQUNGckI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDbkIsb0RBQUtBO1FBQ0prQixRQUFRQTtRQUNSQyxnQkFBZ0JBO1FBQ2hCc0IsT0FBT3ZDO1FBQ1B3QyxjQUFhO1FBQ2JDLGFBQWE7OzBCQUViLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsT0FBTzFCLFdBQVdFLEtBQUs7Z0JBQ3ZCeUIsVUFBVSxDQUFDQyxJQUNUM0IsY0FBYzt3QkFBRSxHQUFHRCxVQUFVO3dCQUFFRSxPQUFPMEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29CQUFDOzs7Ozs7MEJBR3pELDhEQUFDSTtnQkFDQ0osT0FBTzFCLFdBQVdHLFdBQVc7Z0JBQzdCd0IsVUFBVSxDQUFDQyxJQUNUM0IsY0FBYzt3QkFBRSxHQUFHRCxVQUFVO3dCQUFFRyxhQUFheUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29CQUFDOzs7Ozs7MEJBRy9ELDhEQUFDSztnQkFBT0MsU0FBUzVCOzBCQUFZOzs7Ozs7MEJBQzdCLDhEQUFDMkI7Z0JBQU9DLFNBQVNsQzswQkFBZ0I7Ozs7Ozs7Ozs7OztBQUd2QztHQXBETUg7S0FBQUE7QUFzRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdFRhc2suanM/MTMyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuY29uc3QgY3VzdG9tTW9kYWxTdHlsZXMgPSB7XHJcbiAgY29udGVudDoge1xyXG4gICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgbGVmdDogXCI1MCVcIixcclxuICAgIHJpZ2h0OiBcImF1dG9cIixcclxuICAgIGJvdHRvbTogXCJhdXRvXCIsXHJcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIG92ZXJsYXk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgRWRpdFRhc2sgPSAoeyB0YXNrLCBpc09wZW4sIG9uUmVxdWVzdENsb3NlLCBvblNhdmUgfSkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0ZWRUYXNrLCBzZXRFZGl0ZWRUYXNrXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RlbXBUYXNrcy8ke3Rhc2suaWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZWRpdGVkVGFzayksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIkVycm9yIHNhdmluZyB0YXNrIGNoYW5nZXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgb25SZXF1ZXN0Q2xvc2UoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsXHJcbiAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICBvblJlcXVlc3RDbG9zZT17b25SZXF1ZXN0Q2xvc2V9XHJcbiAgICAgIHN0eWxlPXtjdXN0b21Nb2RhbFN0eWxlc31cclxuICAgICAgY29udGVudExhYmVsPVwiRWRpdCBUYXNrIE1vZGFsXCJcclxuICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxyXG4gICAgPlxyXG4gICAgICA8aDI+RWRpdCBUYXNrPC9oMj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXtlZGl0ZWRUYXNrLnRpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgIHNldEVkaXRlZFRhc2soeyAuLi5lZGl0ZWRUYXNrLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHZhbHVlPXtlZGl0ZWRUYXNrLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgIHNldEVkaXRlZFRhc2soeyAuLi5lZGl0ZWRUYXNrLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVxdWVzdENsb3NlfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwidG9hc3QiLCJjdXN0b21Nb2RhbFN0eWxlcyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJtYXhXaWR0aCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiRWRpdFRhc2siLCJ0YXNrIiwiaXNPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJvblNhdmUiLCJlZGl0ZWRUYXNrIiwic2V0RWRpdGVkVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVTYXZlIiwiZmV0Y2giLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJzZXRJc0VkaXRpbmciLCJjYXRjaCIsImVycm9yIiwic3R5bGUiLCJjb250ZW50TGFiZWwiLCJhcmlhSGlkZUFwcCIsImgyIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/editTask.js\n"));

/***/ })

});