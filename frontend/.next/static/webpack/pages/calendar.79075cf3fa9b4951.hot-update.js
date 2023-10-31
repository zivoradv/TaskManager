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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-calendar */ \"./node_modules/react-calendar/dist/esm/index.js\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ \"./node_modules/react-calendar/dist/Calendar.css\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"./components/header.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TaskCalendar = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const username = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:5000/tasks/\".concat(username));\n                const data = await response.json();\n                setTasks(data);\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n        };\n        fetchTasks();\n    }, [\n        username\n    ]);\n    const markedDates = tasks.map((task)=>task.due_date);\n    console.log(username);\n    //   const tileContent = ({ date, view }) => {\n    //     if (view === \"month\") {\n    //       const dateIsMarked = markedDates.some(\n    //         (markDate) => markDate.toDateString() === date.toDateString()\n    //       );\n    //       return (\n    //         dateIsMarked && (\n    //           <div style={{ backgroundColor: \"yellow\", borderRadius: \"50%\" }}></div>\n    //         )\n    //       );\n    //     }\n    //   };\n    const onChange = (date)=>{\n        setSelectedDate(date);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Tasks Calendar for \",\n                    username\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onChange: onChange,\n                            value: selectedDate\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Tasks for \",\n                                    selectedDate.toDateString(),\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            task.title,\n                                            \" - \",\n                                            task.description,\n                                            \" -\",\n                                            \" \",\n                                            task.due_date\n                                        ]\n                                    }, task.id, true, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskCalendar, \"3tC4Sjgp4gXJ3RIrFLS5B3Ko15o=\");\n_c = TaskCalendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskCalendar);\nvar _c;\n$RefreshReg$(_c, \"TaskCalendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWxlbmRhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ2I7QUFDSTtBQUNEO0FBRXpDLE1BQU1LLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDLElBQUlTO0lBQ3JELE1BQU1DLFdBQVc7SUFFakJULGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwrQkFBd0MsT0FBVEg7Z0JBRTVELE1BQU1JLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENULFNBQVNRO1lBQ1gsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUN6QztRQUNGO1FBRUFMO0lBQ0YsR0FBRztRQUFDRDtLQUFTO0lBRWIsTUFBTVEsY0FBY2IsTUFBTWMsR0FBRyxDQUFDLENBQUNDLE9BQVVBLEtBQUtDLFFBQVE7SUFFdERKLFFBQVFLLEdBQUcsQ0FBQ1o7SUFFZCw4Q0FBOEM7SUFDOUMsOEJBQThCO0lBQzlCLCtDQUErQztJQUMvQyx3RUFBd0U7SUFDeEUsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsbUZBQW1GO0lBQ25GLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtJQUNSLE9BQU87SUFFTCxNQUFNYSxXQUFXLENBQUNDO1FBQ2hCaEIsZ0JBQWdCZ0I7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDdEIsMERBQU1BOzs7OzswQkFDUCw4REFBQ3VCOztvQkFBRztvQkFBb0JoQjs7Ozs7OzswQkFDeEIsOERBQUNlO2dCQUFJRSxPQUFPO29CQUFFQyxTQUFTO2dCQUFPOztrQ0FDNUIsOERBQUNIO2tDQUNDLDRFQUFDdkIsc0RBQVFBOzRCQUNQcUIsVUFBVUE7NEJBQ1ZNLE9BQU90Qjs7Ozs7Ozs7Ozs7a0NBSVgsOERBQUNrQjs7MENBQ0MsOERBQUNLOztvQ0FBRztvQ0FBV3ZCLGFBQWF3QixZQUFZO29DQUFHOzs7Ozs7OzBDQUMzQyw4REFBQ0M7MENBQ0UzQixNQUNFYyxHQUFHLENBQUMsQ0FBQ0MscUJBQ0osOERBQUNhOzs0Q0FDRWIsS0FBS2MsS0FBSzs0Q0FBQzs0Q0FBSWQsS0FBS2UsV0FBVzs0Q0FBQzs0Q0FBRzs0Q0FDbkNmLEtBQUtDLFFBQVE7O3VDQUZQRCxLQUFLZ0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVoQztHQXBFTWhDO0tBQUFBO0FBc0VOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbGVuZGFyLmpzPzNhMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCJyZWFjdC1jYWxlbmRhclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1jYWxlbmRhci9kaXN0L0NhbGVuZGFyLmNzc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcblxyXG5jb25zdCBUYXNrQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gXCJcIjsgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRhc2tzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90YXNrcy8ke3VzZXJuYW1lfWApO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFRhc2tzKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0YXNrczpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVGFza3MoKTtcclxuICB9LCBbdXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgbWFya2VkRGF0ZXMgPSB0YXNrcy5tYXAoKHRhc2spID0+ICh0YXNrLmR1ZV9kYXRlKSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHVzZXJuYW1lKTtcclxuXHJcbi8vICAgY29uc3QgdGlsZUNvbnRlbnQgPSAoeyBkYXRlLCB2aWV3IH0pID0+IHtcclxuLy8gICAgIGlmICh2aWV3ID09PSBcIm1vbnRoXCIpIHtcclxuLy8gICAgICAgY29uc3QgZGF0ZUlzTWFya2VkID0gbWFya2VkRGF0ZXMuc29tZShcclxuLy8gICAgICAgICAobWFya0RhdGUpID0+IG1hcmtEYXRlLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpXHJcbi8vICAgICAgICk7XHJcbi8vICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgZGF0ZUlzTWFya2VkICYmIChcclxuLy8gICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX0+PC9kaXY+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGRhdGUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkRGF0ZShkYXRlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8aDE+VGFza3MgQ2FsZW5kYXIgZm9yIHt1c2VybmFtZX08L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAvLyB0aWxlQ29udGVudD17dGlsZUNvbnRlbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+VGFza3MgZm9yIHtzZWxlY3RlZERhdGUudG9EYXRlU3RyaW5nKCl9OjwvaDI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHt0YXNrc1xyXG4gICAgICAgICAgICAgIC5tYXAoKHRhc2spID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7dGFzay50aXRsZX0gLSB7dGFzay5kZXNjcmlwdGlvbn0gLXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge3Rhc2suZHVlX2RhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0NhbGVuZGFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhbGVuZGFyIiwiSGVhZGVyIiwiVGFza0NhbGVuZGFyIiwidGFza3MiLCJzZXRUYXNrcyIsInNlbGVjdGVkRGF0ZSIsInNldFNlbGVjdGVkRGF0ZSIsIkRhdGUiLCJ1c2VybmFtZSIsImZldGNoVGFza3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtYXJrZWREYXRlcyIsIm1hcCIsInRhc2siLCJkdWVfZGF0ZSIsImxvZyIsIm9uQ2hhbmdlIiwiZGF0ZSIsImRpdiIsImgxIiwic3R5bGUiLCJkaXNwbGF5IiwidmFsdWUiLCJoMiIsInRvRGF0ZVN0cmluZyIsInVsIiwibGkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/calendar.js\n"));

/***/ })

});