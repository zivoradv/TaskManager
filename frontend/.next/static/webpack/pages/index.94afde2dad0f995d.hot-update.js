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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst EditTask = (param)=>{\n    let { task, isOpen, onRequestClose, onSave } = param;\n    _s();\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description\n    });\n    const handleSave = ()=>{\n        axios.put(\"http://localhost:5000/tempTasks/\".concat(task.id), editedTask).then((response)=>{\n            setIsEditing(false);\n        }).catch((error)=>{\n            toast.error(\"Error saving task changes\");\n        });\n        onRequestClose();\n    };\n    console.log(editedTask);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Edit Task Modal\",\n        ariaHideApp: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Edit Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: editedTask.title,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        title: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: editedTask.description,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        description: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onRequestClose,\n                children: \"Cancel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTask, \"bRO/kuLKen5akPOIhjCg3roZ9NI=\");\n_c = EditTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTask);\nvar _c;\n$RefreshReg$(_c, \"EditTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0VGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1HLG9CQUFvQjtJQUN4QkMsU0FBUztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxpQkFBaUI7SUFDbkI7QUFDRjtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3RELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHdEIsK0NBQVFBLENBQUM7UUFDM0N1QixPQUFPTixLQUFLTSxLQUFLO1FBQ2pCQyxhQUFhUCxLQUFLTyxXQUFXO0lBQy9CO0lBRUYsTUFBTUMsYUFBYTtRQUNqQkMsTUFDR0MsR0FBRyxDQUFDLG1DQUEyQyxPQUFSVixLQUFLVyxFQUFFLEdBQUlQLFlBQ2xEUSxJQUFJLENBQUMsQ0FBQ0M7WUFDTEMsYUFBYTtRQUNmLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxNQUFNRCxLQUFLLENBQUM7UUFDZDtRQUNGZDtJQUNGO0lBQ0FnQixRQUFRQyxHQUFHLENBQUNmO0lBQ1oscUJBQ0UsOERBQUNwQixvREFBS0E7UUFDSmlCLFFBQVFBO1FBQ1JDLGdCQUFnQkE7UUFDaEJrQixPQUFPbkM7UUFDUG9DLGNBQWE7UUFDYkMsYUFBYTs7MEJBRWIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPdEIsV0FBV0UsS0FBSztnQkFDdkJxQixVQUFVLENBQUNDLElBQ1R2QixjQUFjO3dCQUFFLEdBQUdELFVBQVU7d0JBQUVFLE9BQU9zQixFQUFFQyxNQUFNLENBQUNILEtBQUs7b0JBQUM7Ozs7OzswQkFHekQsOERBQUNJO2dCQUNDSixPQUFPdEIsV0FBV0csV0FBVztnQkFDN0JvQixVQUFVLENBQUNDLElBQ1R2QixjQUFjO3dCQUFFLEdBQUdELFVBQVU7d0JBQUVHLGFBQWFxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7b0JBQUM7Ozs7OzswQkFHL0QsOERBQUNLO2dCQUFPQyxTQUFTeEI7MEJBQVk7Ozs7OzswQkFDN0IsOERBQUN1QjtnQkFBT0MsU0FBUzlCOzBCQUFnQjs7Ozs7Ozs7Ozs7O0FBR3ZDO0dBNUNNSDtLQUFBQTtBQThDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lZGl0VGFzay5qcz8xMzI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcblxyXG5jb25zdCBjdXN0b21Nb2RhbFN0eWxlcyA9IHtcclxuICBjb250ZW50OiB7XHJcbiAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgYm90dG9tOiBcImF1dG9cIixcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgIGJveFNoYWRvdzogXCIwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgb3ZlcmxheToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBFZGl0VGFzayA9ICh7IHRhc2ssIGlzT3Blbiwgb25SZXF1ZXN0Q2xvc2UsIG9uU2F2ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbZWRpdGVkVGFzaywgc2V0RWRpdGVkVGFza10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvblxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucHV0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdGVtcFRhc2tzLyR7dGFzay5pZH1gLCBlZGl0ZWRUYXNrKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciBzYXZpbmcgdGFzayBjaGFuZ2VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgIG9uUmVxdWVzdENsb3NlKCk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhlZGl0ZWRUYXNrKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuICAgICAgc3R5bGU9e2N1c3RvbU1vZGFsU3R5bGVzfVxyXG4gICAgICBjb250ZW50TGFiZWw9XCJFZGl0IFRhc2sgTW9kYWxcIlxyXG4gICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XHJcbiAgICA+XHJcbiAgICAgIDxoMj5FZGl0IFRhc2s8L2gyPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e2VkaXRlZFRhc2sudGl0bGV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgc2V0RWRpdGVkVGFzayh7IC4uLmVkaXRlZFRhc2ssIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgdmFsdWU9e2VkaXRlZFRhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgc2V0RWRpdGVkVGFzayh7IC4uLmVkaXRlZFRhc2ssIGRlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5TYXZlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25SZXF1ZXN0Q2xvc2V9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFRhc2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJjdXN0b21Nb2RhbFN0eWxlcyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJtYXhXaWR0aCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiRWRpdFRhc2siLCJ0YXNrIiwiaXNPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJvblNhdmUiLCJlZGl0ZWRUYXNrIiwic2V0RWRpdGVkVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVTYXZlIiwiYXhpb3MiLCJwdXQiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsInNldElzRWRpdGluZyIsImNhdGNoIiwiZXJyb3IiLCJ0b2FzdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImNvbnRlbnRMYWJlbCIsImFyaWFIaWRlQXBwIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/editTask.js\n"));

/***/ })

});