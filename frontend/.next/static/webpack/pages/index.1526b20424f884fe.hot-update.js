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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst EditTask = (param)=>{\n    let { task, isOpen, onRequestClose, onSave } = param;\n    _s();\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description\n    });\n    const handleSave = ()=>{\n        onSave(editedTask);\n        onRequestClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Edit Task Modal\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Edit Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: editedTask.title,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        title: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: editedTask.description,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        description: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onRequestClose,\n                children: \"Cancel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTask, \"MHbU7kh4D+P53zPMxZTVA+44Nx4=\");\n_c = EditTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTask);\nvar _c;\n$RefreshReg$(_c, \"EditTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0VGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1HLG9CQUFvQjtJQUN0QkMsU0FBUztRQUNMQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxpQkFBaUI7SUFDbkI7QUFDTjtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3hELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHdEIsK0NBQVFBLENBQUM7UUFBRXVCLE9BQU9OLEtBQUtNLEtBQUs7UUFBRUMsYUFBYVAsS0FBS08sV0FBVztJQUFDO0lBRWhHLE1BQU1DLGFBQWE7UUFDakJMLE9BQU9DO1FBQ1BGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2xCLG9EQUFLQTtRQUNKaUIsUUFBUUE7UUFDUkMsZ0JBQWdCQTtRQUNoQk8sT0FBT3hCO1FBQ1B5QixjQUFhOzswQkFFYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU9WLFdBQVdFLEtBQUs7Z0JBQ3ZCUyxVQUFVLENBQUNDLElBQU1YLGNBQWM7d0JBQUUsR0FBR0QsVUFBVTt3QkFBRUUsT0FBT1UsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29CQUFDOzs7Ozs7MEJBRXhFLDhEQUFDSTtnQkFDQ0osT0FBT1YsV0FBV0csV0FBVztnQkFDN0JRLFVBQVUsQ0FBQ0MsSUFBTVgsY0FBYzt3QkFBRSxHQUFHRCxVQUFVO3dCQUFFRyxhQUFhUyxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0JBQUM7Ozs7OzswQkFFOUUsOERBQUNLO2dCQUFPQyxTQUFTWjswQkFBWTs7Ozs7OzBCQUM3Qiw4REFBQ1c7Z0JBQU9DLFNBQVNsQjswQkFBZ0I7Ozs7Ozs7Ozs7OztBQUd2QztHQTdCTUg7S0FBQUE7QUErQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdFRhc2suanM/MTMyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5cclxuY29uc3QgY3VzdG9tTW9kYWxTdHlsZXMgPSB7XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgIGJvdHRvbTogXCJhdXRvXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsIC8vIFNldCB0aGUgbWF4aW11bSB3aWR0aCBmb3IgdGhlIG1vZGFsXHJcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsICAgIC8vIEFkZCBzb21lIHBhZGRpbmdcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsIC8vIEFkZCByb3VuZGVkIGNvcm5lcnNcclxuICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLCAvLyBBZGQgYSBzdWJ0bGUgYm94IHNoYWRvd1xyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsICAgICAvLyBSZW1vdmUgdGhlIGRlZmF1bHQgYm9yZGVyXHJcbiAgICAgIH0sXHJcbiAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsIC8vIFNldCB0aGUgb3ZlcmxheSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBvcGFjaXR5XHJcbiAgICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBFZGl0VGFzayA9ICh7IHRhc2ssIGlzT3Blbiwgb25SZXF1ZXN0Q2xvc2UsIG9uU2F2ZSB9KSA9PiB7XHJcbiAgY29uc3QgW2VkaXRlZFRhc2ssIHNldEVkaXRlZFRhc2tdID0gdXNlU3RhdGUoeyB0aXRsZTogdGFzay50aXRsZSwgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24gfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBvblNhdmUoZWRpdGVkVGFzayk7XHJcbiAgICBvblJlcXVlc3RDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuICAgICAgc3R5bGU9e2N1c3RvbU1vZGFsU3R5bGVzfVxyXG4gICAgICBjb250ZW50TGFiZWw9XCJFZGl0IFRhc2sgTW9kYWxcIlxyXG4gICAgPlxyXG4gICAgICA8aDI+RWRpdCBUYXNrPC9oMj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXtlZGl0ZWRUYXNrLnRpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdGVkVGFzayh7IC4uLmVkaXRlZFRhc2ssIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgLz5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgdmFsdWU9e2VkaXRlZFRhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFZGl0ZWRUYXNrKHsgLi4uZWRpdGVkVGFzaywgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmV9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblJlcXVlc3RDbG9zZX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0VGFzaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsImN1c3RvbU1vZGFsU3R5bGVzIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRyYW5zZm9ybSIsIm1heFdpZHRoIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImJvcmRlciIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJFZGl0VGFzayIsInRhc2siLCJpc09wZW4iLCJvblJlcXVlc3RDbG9zZSIsIm9uU2F2ZSIsImVkaXRlZFRhc2siLCJzZXRFZGl0ZWRUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImhhbmRsZVNhdmUiLCJzdHlsZSIsImNvbnRlbnRMYWJlbCIsImgyIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/editTask.js\n"));

/***/ })

});