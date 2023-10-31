"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/calendar",{

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-calendar */ \"./node_modules/react-calendar/dist/esm/index.js\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ \"./node_modules/react-calendar/dist/Calendar.css\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"./components/header.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TaskCalendar = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const username = \"\"; // Set your username\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:5000/tasks/\".concat(username));\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setTasks(data);\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n        };\n        fetchTasks();\n    }, [\n        username\n    ]);\n    const markedDates = tasks.map((task)=>task.due_date);\n    console.log(tasks);\n    //   const tileContent = ({ date, view }) => {\n    //     if (view === \"month\") {\n    //       const dateIsMarked = markedDates.some(\n    //         (markDate) => markDate.toDateString() === date.toDateString()\n    //       );\n    //       return (\n    //         dateIsMarked && (\n    //           <div style={{ backgroundColor: \"yellow\", borderRadius: \"50%\" }}></div>\n    //         )\n    //       );\n    //     }\n    //   };\n    const onChange = (date)=>{\n        setSelectedDate(date);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Tasks Calendar for \",\n                    username\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onChange: onChange,\n                            value: selectedDate\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Tasks for \",\n                                    selectedDate.toDateString(),\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            task.title,\n                                            \" - \",\n                                            task.description,\n                                            \" -\",\n                                            \" \",\n                                            task.due_date\n                                        ]\n                                    }, task.id, true, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskCalendar, \"3tC4Sjgp4gXJ3RIrFLS5B3Ko15o=\");\n_c = TaskCalendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskCalendar);\nvar _c;\n$RefreshReg$(_c, \"TaskCalendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWxlbmRhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ2I7QUFDSTtBQUNEO0FBRXpDLE1BQU1LLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDLElBQUlTO0lBQ3JELE1BQU1DLFdBQVcsSUFBSSxvQkFBb0I7SUFFekNULGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwrQkFBd0MsT0FBVEg7Z0JBQzVELElBQUksQ0FBQ0UsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCSCxTQUFTSSxNQUFNO2dCQUN4RDtnQkFFQSxNQUFNQyxPQUFPLE1BQU1MLFNBQVNNLElBQUk7Z0JBQ2hDWixTQUFTVztZQUNYLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7UUFDRjtRQUVBUjtJQUNGLEdBQUc7UUFBQ0Q7S0FBUztJQUViLE1BQU1XLGNBQWNoQixNQUFNaUIsR0FBRyxDQUFDLENBQUNDLE9BQVVBLEtBQUtDLFFBQVE7SUFFdERKLFFBQVFLLEdBQUcsQ0FBQ3BCO0lBRWQsOENBQThDO0lBQzlDLDhCQUE4QjtJQUM5QiwrQ0FBK0M7SUFDL0Msd0VBQXdFO0lBQ3hFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLG1GQUFtRjtJQUNuRixZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7SUFDUixPQUFPO0lBRUwsTUFBTXFCLFdBQVcsQ0FBQ0M7UUFDaEJuQixnQkFBZ0JtQjtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUN6QiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDMEI7O29CQUFHO29CQUFvQm5COzs7Ozs7OzBCQUN4Qiw4REFBQ2tCO2dCQUFJRSxPQUFPO29CQUFFQyxTQUFTO2dCQUFPOztrQ0FDNUIsOERBQUNIO2tDQUNDLDRFQUFDMUIsc0RBQVFBOzRCQUNQd0IsVUFBVUE7NEJBQ1ZNLE9BQU96Qjs7Ozs7Ozs7Ozs7a0NBSVgsOERBQUNxQjs7MENBQ0MsOERBQUNLOztvQ0FBRztvQ0FBVzFCLGFBQWEyQixZQUFZO29DQUFHOzs7Ozs7OzBDQUMzQyw4REFBQ0M7MENBQ0U5QixNQUNFaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNKLDhEQUFDYTs7NENBQ0ViLEtBQUtjLEtBQUs7NENBQUM7NENBQUlkLEtBQUtlLFdBQVc7NENBQUM7NENBQUc7NENBQ25DZixLQUFLQyxRQUFROzt1Q0FGUEQsS0FBS2dCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVaEM7R0F2RU1uQztLQUFBQTtBQXlFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYWxlbmRhci5qcz8zYTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwicmVhY3QtY2FsZW5kYXJcIjtcclxuaW1wb3J0IFwicmVhY3QtY2FsZW5kYXIvZGlzdC9DYWxlbmRhci5jc3NcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5cclxuY29uc3QgVGFza0NhbGVuZGFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCB1c2VybmFtZSA9IFwiXCI7IC8vIFNldCB5b3VyIHVzZXJuYW1lXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRhc2tzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90YXNrcy8ke3VzZXJuYW1lfWApO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VGFza3MoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRhc2tzOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hUYXNrcygpO1xyXG4gIH0sIFt1c2VybmFtZV0pO1xyXG5cclxuICBjb25zdCBtYXJrZWREYXRlcyA9IHRhc2tzLm1hcCgodGFzaykgPT4gKHRhc2suZHVlX2RhdGUpKTtcclxuXHJcbiAgY29uc29sZS5sb2codGFza3MpO1xyXG5cclxuLy8gICBjb25zdCB0aWxlQ29udGVudCA9ICh7IGRhdGUsIHZpZXcgfSkgPT4ge1xyXG4vLyAgICAgaWYgKHZpZXcgPT09IFwibW9udGhcIikge1xyXG4vLyAgICAgICBjb25zdCBkYXRlSXNNYXJrZWQgPSBtYXJrZWREYXRlcy5zb21lKFxyXG4vLyAgICAgICAgIChtYXJrRGF0ZSkgPT4gbWFya0RhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKClcclxuLy8gICAgICAgKTtcclxuLy8gICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICBkYXRlSXNNYXJrZWQgJiYgKFxyXG4vLyAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsIGJvcmRlclJhZGl1czogXCI1MCVcIiB9fT48L2Rpdj5cclxuLy8gICAgICAgICApXHJcbi8vICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZGF0ZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxoMT5UYXNrcyBDYWxlbmRhciBmb3Ige3VzZXJuYW1lfTwvaDE+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgIC8vIHRpbGVDb250ZW50PXt0aWxlQ29udGVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5UYXNrcyBmb3Ige3NlbGVjdGVkRGF0ZS50b0RhdGVTdHJpbmcoKX06PC9oMj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3Rhc2tzXHJcbiAgICAgICAgICAgICAgLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dGFzay5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfSAtIHt0YXNrLmRlc2NyaXB0aW9ufSAte1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7dGFzay5kdWVfZGF0ZX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrQ2FsZW5kYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FsZW5kYXIiLCJIZWFkZXIiLCJUYXNrQ2FsZW5kYXIiLCJ0YXNrcyIsInNldFRhc2tzIiwic2VsZWN0ZWREYXRlIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInVzZXJuYW1lIiwiZmV0Y2hUYXNrcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtYXJrZWREYXRlcyIsIm1hcCIsInRhc2siLCJkdWVfZGF0ZSIsImxvZyIsIm9uQ2hhbmdlIiwiZGF0ZSIsImRpdiIsImgxIiwic3R5bGUiLCJkaXNwbGF5IiwidmFsdWUiLCJoMiIsInRvRGF0ZVN0cmluZyIsInVsIiwibGkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/calendar.js\n"));

/***/ })

});