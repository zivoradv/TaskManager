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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-calendar */ \"./node_modules/react-calendar/dist/esm/index.js\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ \"./node_modules/react-calendar/dist/Calendar.css\");\n/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"./components/header.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tooltip */ \"./node_modules/react-tooltip/dist/react-tooltip.min.mjs\");\n/* harmony import */ var react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tooltip/dist/react-tooltip.css */ \"./node_modules/react-tooltip/dist/react-tooltip.min.css\");\n/* harmony import */ var react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TaskCalendar = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [tooltipContent, setTooltipContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"username\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:5000/tasks/\".concat(username));\n                const data = await response.json();\n                setTasks(data);\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n        };\n        fetchTasks();\n    }, [\n        username\n    ]);\n    const taskDates = tasks.map((task)=>new Date(task.due_date).toDateString());\n    const tileContent = (param)=>{\n        let { date, view } = param;\n        if (view === \"month\") {\n            const dateString = date.toDateString();\n            const dateIsMarked = taskDates.includes(dateString);\n            return dateIsMarked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"relative\",\n                    zIndex: 1\n                },\n                onMouseEnter: ()=>handleTooltip(dateString),\n                onMouseLeave: ()=>setTooltipContent(\"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        position: \"absolute\",\n                        top: \"-10px\",\n                        left: \"50%\",\n                        transform: \"translate(-50%, -50%)\",\n                        width: \"30px\",\n                        height: \"30px\",\n                        backgroundColor: \"yellow\",\n                        borderRadius: \"50%\",\n                        zIndex: -1,\n                        opacity: \"0.5\"\n                    },\n                    className: \"my-anchor-element\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined)\n            }, dateString, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"relative\",\n                    zIndex: 1\n                },\n                onMouseEnter: ()=>handleTooltip(dateString),\n                onMouseLeave: ()=>setTooltipContent(\"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-anchor-element\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined)\n            }, dateString, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined);\n        }\n    };\n    const handleTooltip = (dateString)=>{\n        const tasksForDate = tasks.filter((task)=>new Date(task.due_date).toDateString() === dateString);\n        if (tasksForDate.length > 0) {\n            const formattedTasks = tasksForDate.map((task, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Title: \",\n                            task.title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, undefined),\n                            \"Description: \",\n                            task.description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, undefined);\n            });\n            const tooltipText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Tasks for this date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, undefined),\n                    formattedTasks\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, undefined);\n            setTooltipContent(tooltipText);\n        } else {\n            setTooltipContent(\"No tasks for this date\");\n        }\n    };\n    const onChange = (date)=>{\n        setSelectedDate(date);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            onChange: onChange,\n                            value: selectedDate,\n                            tileContent: tileContent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {\n                            anchorSelect: \".my-anchor-element\",\n                            children: tooltipContent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\calendar.js\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskCalendar, \"Xt8A3PAKwZrWngySH4SN5caWiHY=\");\n_c = TaskCalendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskCalendar);\nvar _c;\n$RefreshReg$(_c, \"TaskCalendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlDLE9BQU87b0JBQUU0QixTQUFTO29CQUFRQyxnQkFBZ0I7Z0JBQVM7MEJBQ3RELDRFQUFDOUI7O3NDQUNDLDhEQUFDaEMsc0RBQVFBOzRCQUNQNEQsVUFBVUE7NEJBQ1ZHLE9BQU94RDs0QkFDUG1CLGFBQWFBOzs7Ozs7c0NBRWYsOERBQUN2QixrREFBT0E7NEJBQUM2RCxjQUFhO3NDQUFzQnREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RDtHQTFITU47S0FBQUE7QUE0SE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsZW5kYXIuanM/M2EyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcInJlYWN0LWNhbGVuZGFyXCI7XHJcbmltcG9ydCBcInJlYWN0LWNhbGVuZGFyL2Rpc3QvQ2FsZW5kYXIuY3NzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9vbHRpcC9kaXN0L3JlYWN0LXRvb2x0aXAuY3NzXCI7XHJcblxyXG5jb25zdCBUYXNrQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFt0b29sdGlwQ29udGVudCwgc2V0VG9vbHRpcENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBDb29raWVzLmdldChcInVzZXJuYW1lXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hUYXNrcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdGFza3MvJHt1c2VybmFtZX1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFRhc2tzKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0YXNrczpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVGFza3MoKTtcclxuICB9LCBbdXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgdGFza0RhdGVzID0gdGFza3MubWFwKCh0YXNrKSA9PiBuZXcgRGF0ZSh0YXNrLmR1ZV9kYXRlKS50b0RhdGVTdHJpbmcoKSk7XHJcblxyXG4gIGNvbnN0IHRpbGVDb250ZW50ID0gKHsgZGF0ZSwgdmlldyB9KSA9PiB7XHJcbiAgICBpZiAodmlldyA9PT0gXCJtb250aFwiKSB7XHJcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICBjb25zdCBkYXRlSXNNYXJrZWQgPSB0YXNrRGF0ZXMuaW5jbHVkZXMoZGF0ZVN0cmluZyk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0ZUlzTWFya2VkID8gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17ZGF0ZVN0cmluZ31cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZVRvb2x0aXAoZGF0ZVN0cmluZyl9XHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFRvb2x0aXBDb250ZW50KFwiXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgIHRvcDogXCItMTBweFwiLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgekluZGV4OiAtMSxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiBcIjAuNVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS1hbmNob3ItZWxlbWVudFwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtkYXRlU3RyaW5nfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlVG9vbHRpcChkYXRlU3RyaW5nKX1cclxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0VG9vbHRpcENvbnRlbnQoXCJcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktYW5jaG9yLWVsZW1lbnRcIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUb29sdGlwID0gKGRhdGVTdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHRhc2tzRm9yRGF0ZSA9IHRhc2tzLmZpbHRlcihcclxuICAgICAgKHRhc2spID0+IG5ldyBEYXRlKHRhc2suZHVlX2RhdGUpLnRvRGF0ZVN0cmluZygpID09PSBkYXRlU3RyaW5nXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0YXNrc0ZvckRhdGUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBmb3JtYXR0ZWRUYXNrcyA9IHRhc2tzRm9yRGF0ZS5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgVGl0bGU6IHt0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIERlc2NyaXB0aW9uOiB7dGFzay5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHRvb2x0aXBUZXh0ID0gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5UYXNrcyBmb3IgdGhpcyBkYXRlPC9wPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICB7Zm9ybWF0dGVkVGFza3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRUb29sdGlwQ29udGVudCh0b29sdGlwVGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUb29sdGlwQ29udGVudChcIk5vIHRhc2tzIGZvciB0aGlzIGRhdGVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZGF0ZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICB0aWxlQ29udGVudD17dGlsZUNvbnRlbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRvb2x0aXAgYW5jaG9yU2VsZWN0PVwiLm15LWFuY2hvci1lbGVtZW50XCI+e3Rvb2x0aXBDb250ZW50fTwvVG9vbHRpcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0NhbGVuZGFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhbGVuZGFyIiwiSGVhZGVyIiwiQ29va2llcyIsIlRvb2x0aXAiLCJUYXNrQ2FsZW5kYXIiLCJ0YXNrcyIsInNldFRhc2tzIiwic2VsZWN0ZWREYXRlIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInRvb2x0aXBDb250ZW50Iiwic2V0VG9vbHRpcENvbnRlbnQiLCJ1c2VybmFtZSIsImdldCIsImZldGNoVGFza3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJ0YXNrRGF0ZXMiLCJtYXAiLCJ0YXNrIiwiZHVlX2RhdGUiLCJ0b0RhdGVTdHJpbmciLCJ0aWxlQ29udGVudCIsImRhdGUiLCJ2aWV3IiwiZGF0ZVN0cmluZyIsImRhdGVJc01hcmtlZCIsImluY2x1ZGVzIiwiZGl2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInpJbmRleCIsIm9uTW91c2VFbnRlciIsImhhbmRsZVRvb2x0aXAiLCJvbk1vdXNlTGVhdmUiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJvcGFjaXR5IiwiY2xhc3NOYW1lIiwidGFza3NGb3JEYXRlIiwiZmlsdGVyIiwibGVuZ3RoIiwiZm9ybWF0dGVkVGFza3MiLCJpbmRleCIsIkZyYWdtZW50IiwicCIsInRpdGxlIiwiYnIiLCJkZXNjcmlwdGlvbiIsInRvb2x0aXBUZXh0IiwiaHIiLCJvbkNoYW5nZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInZhbHVlIiwiYW5jaG9yU2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/calendar.js\n"));

/***/ })

});