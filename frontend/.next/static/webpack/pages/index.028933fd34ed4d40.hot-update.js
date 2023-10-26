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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst customModalStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        transform: \"translate(-50%, -50%)\",\n        maxWidth: \"400px\",\n        padding: \"20px\",\n        borderRadius: \"8px\",\n        boxShadow: \"0 2px 4px rgba(0, 0, 0, 0.2)\",\n        border: \"none\"\n    },\n    overlay: {\n        backgroundColor: \"rgba(0, 0, 0, 0.6)\"\n    }\n};\nconst EditTask = (param)=>{\n    let { task, isOpen, onRequestClose, onSave } = param;\n    _s();\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description,\n        due_date: task.due_date\n    });\n    const handleSave = ()=>{\n        onSave(editedTask);\n        onRequestClose();\n    };\n    console.log(editedTask);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n        isOpen: isOpen,\n        onRequestClose: onRequestClose,\n        style: customModalStyles,\n        contentLabel: \"Edit Task Modal\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Edit Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: editedTask.title,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        title: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: editedTask.description,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        description: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"due_date\",\n                children: \"Due Date:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                id: \"due_date\",\n                name: \"due_date\",\n                value: task.due_date,\n                onChange: (e)=>setEditedTask({\n                        ...editedTask,\n                        due_date: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"*If not defined it will fill in current time and date.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onRequestClose,\n                children: \"Cancel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\editTask.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTask, \"OK/ZL8998jjWUimnxRQiGxCulhc=\");\n_c = EditTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTask);\nvar _c;\n$RefreshReg$(_c, \"EditTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0VGFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1HLG9CQUFvQjtJQUN4QkMsU0FBUztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxpQkFBaUI7SUFDbkI7QUFDRjtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3hELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHdEIsK0NBQVFBLENBQUM7UUFDM0N1QixPQUFPTixLQUFLTSxLQUFLO1FBQ2pCQyxhQUFhUCxLQUFLTyxXQUFXO1FBQzdCQyxVQUFVUixLQUFLUSxRQUFRO0lBQ3pCO0lBRUEsTUFBTUMsYUFBYTtRQUNqQk4sT0FBT0M7UUFDUEY7SUFDRjtJQUNBUSxRQUFRQyxHQUFHLENBQUNQO0lBQ1oscUJBQ0UsOERBQUNwQixvREFBS0E7UUFDSmlCLFFBQVFBO1FBQ1JDLGdCQUFnQkE7UUFDaEJVLE9BQU8zQjtRQUNQNEIsY0FBYTs7MEJBRWIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPYixXQUFXRSxLQUFLO2dCQUN2QlksVUFBVSxDQUFDQyxJQUNUZCxjQUFjO3dCQUFFLEdBQUdELFVBQVU7d0JBQUVFLE9BQU9hLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFBQzs7Ozs7OzBCQUd6RCw4REFBQ0k7Z0JBQ0NKLE9BQU9iLFdBQVdHLFdBQVc7Z0JBQzdCVyxVQUFVLENBQUNDLElBQ1RkLGNBQWM7d0JBQUUsR0FBR0QsVUFBVTt3QkFBRUcsYUFBYVksRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29CQUFDOzs7Ozs7MEJBRy9ELDhEQUFDSztnQkFBTUMsU0FBUTswQkFBVzs7Ozs7OzBCQUMxQiw4REFBQ1I7Z0JBQ0NDLE1BQUs7Z0JBQ0xRLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xSLE9BQU9qQixLQUFLUSxRQUFRO2dCQUNwQlUsVUFBVSxDQUFDQyxJQUNUZCxjQUFjO3dCQUFFLEdBQUdELFVBQVU7d0JBQUVJLFVBQVVXLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFBQzs7Ozs7OzBCQUc1RCw4REFBQ1M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Z0JBQU9DLFNBQVNuQjswQkFBWTs7Ozs7OzBCQUM3Qiw4REFBQ2tCO2dCQUFPQyxTQUFTMUI7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFHdkM7R0FoRE1IO0tBQUFBO0FBa0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VkaXRUYXNrLmpzPzEzMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuXHJcbmNvbnN0IGN1c3RvbU1vZGFsU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHRvcDogXCI1MCVcIixcclxuICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICByaWdodDogXCJhdXRvXCIsXHJcbiAgICBib3R0b206IFwiYXV0b1wiLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgfSxcclxuICBvdmVybGF5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEVkaXRUYXNrID0gKHsgdGFzaywgaXNPcGVuLCBvblJlcXVlc3RDbG9zZSwgb25TYXZlIH0pID0+IHtcclxuICBjb25zdCBbZWRpdGVkVGFzaywgc2V0RWRpdGVkVGFza10gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogdGFzay50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxyXG4gICAgZHVlX2RhdGU6IHRhc2suZHVlX2RhdGVcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIG9uU2F2ZShlZGl0ZWRUYXNrKTtcclxuICAgIG9uUmVxdWVzdENsb3NlKCk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhlZGl0ZWRUYXNrKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cclxuICAgICAgc3R5bGU9e2N1c3RvbU1vZGFsU3R5bGVzfVxyXG4gICAgICBjb250ZW50TGFiZWw9XCJFZGl0IFRhc2sgTW9kYWxcIlxyXG4gICAgPlxyXG4gICAgICA8aDI+RWRpdCBUYXNrPC9oMj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXtlZGl0ZWRUYXNrLnRpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgIHNldEVkaXRlZFRhc2soeyAuLi5lZGl0ZWRUYXNrLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHZhbHVlPXtlZGl0ZWRUYXNrLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgIHNldEVkaXRlZFRhc2soeyAuLi5lZGl0ZWRUYXNrLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVlX2RhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgaWQ9XCJkdWVfZGF0ZVwiXHJcbiAgICAgICAgbmFtZT1cImR1ZV9kYXRlXCJcclxuICAgICAgICB2YWx1ZT17dGFzay5kdWVfZGF0ZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICBzZXRFZGl0ZWRUYXNrKHsgLi4uZWRpdGVkVGFzaywgZHVlX2RhdGU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8cD4qSWYgbm90IGRlZmluZWQgaXQgd2lsbCBmaWxsIGluIGN1cnJlbnQgdGltZSBhbmQgZGF0ZS48L3A+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVxdWVzdENsb3NlfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiY3VzdG9tTW9kYWxTdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidHJhbnNmb3JtIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYm9yZGVyIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsIkVkaXRUYXNrIiwidGFzayIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwib25TYXZlIiwiZWRpdGVkVGFzayIsInNldEVkaXRlZFRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlX2RhdGUiLCJoYW5kbGVTYXZlIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiY29udGVudExhYmVsIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRleHRhcmVhIiwibGFiZWwiLCJodG1sRm9yIiwiaWQiLCJuYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/editTask.js\n"));

/***/ })

});