"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createTask",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [loggedInUsername, setLoggedInUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"loggedIn\");\n        if (isLoggedIn === \"true\") {\n            const usernameFromCookie = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setLoggedInUsername(usernameFromCookie);\n        }\n    }, []);\n    const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"/\"); // Set the default active page\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Use window.location.pathname to get the current URL\n        setActivePage(window.location.pathname);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/\" ? \"active\" : \"\"),\n                                    children: \"View Tasks\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/createTask\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/createTask\" ? \"active\" : \"\"),\n                                    children: \"Create Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/register\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/register\" ? \"active\" : \"\"),\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/login\" ? \"active\" : \"\"),\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/profile\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/profile\" ? \"active\" : \"\"),\n                                    children: [\n                                        \"Hello, \",\n                                        loggedInUsername || \"Guest\",\n                                        \"!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"OO6GyRV+ZX/drXi5KIe+Q5gOR+U=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUNHO0FBQ0o7QUFDb0I7QUFDRDtBQUUvQyxNQUFNTSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR04sK0NBQVFBLENBQUM7SUFFekRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsYUFBYUwsaURBQU9BLENBQUNNLEdBQUcsQ0FBQztRQUMvQixJQUFJRCxlQUFlLFFBQVE7WUFDekIsTUFBTUUscUJBQXFCUCxpREFBT0EsQ0FBQ00sR0FBRyxDQUFDO1lBQ3ZDRixvQkFBb0JHO1FBQ3RCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLE1BQU0sOEJBQThCO0lBRWpGRCxnREFBU0EsQ0FBQztRQUNSLHNEQUFzRDtRQUN0RFksY0FBY0MsT0FBT0MsUUFBUSxDQUFDQyxRQUFRO0lBQ3hDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVOzswQkFDaEIsOERBQUNDOzBCQUNDLDRFQUFDQztvQkFBR0YsV0FBVTs7c0NBQ2QsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUNWLDRFQUFDZixrREFBSUE7Z0NBQUNtQixNQUFLO2dDQUFJQyxRQUFROzBDQUNyQiw0RUFBQ0M7b0NBQU9OLFdBQVcsaUJBQW9ELE9BQW5DTixlQUFlLE1BQU0sV0FBVzs4Q0FBTTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLOUUsOERBQUNTOzRCQUFHSCxXQUFVO3NDQUNaLDRFQUFDZixrREFBSUE7Z0NBQUNtQixNQUFLO2dDQUFjQyxRQUFROzBDQUMvQiw0RUFBQ0M7b0NBQU9OLFdBQVcsaUJBQThELE9BQTdDTixlQUFlLGdCQUFnQixXQUFXOzhDQUFNOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUt4Riw4REFBQ1M7NEJBQUdILFdBQVU7c0NBQ1osNEVBQUNmLGtEQUFJQTtnQ0FBQ21CLE1BQUs7Z0NBQVlDLFFBQVE7MENBQzdCLDRFQUFDQztvQ0FBT04sV0FBVyxpQkFBNEQsT0FBM0NOLGVBQWUsY0FBYyxXQUFXOzhDQUFNOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUt0Riw4REFBQ1M7NEJBQUdILFdBQVU7c0NBQ1osNEVBQUNmLGtEQUFJQTtnQ0FBQ21CLE1BQUs7Z0NBQVNDLFFBQVE7MENBQzFCLDRFQUFDQztvQ0FBT04sV0FBVyxpQkFBeUQsT0FBeENOLGVBQWUsV0FBVyxXQUFXOzhDQUFNOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUtuRiw4REFBQ1M7NEJBQUdILFdBQVU7c0NBQ1osNEVBQUNmLGtEQUFJQTtnQ0FBQ21CLE1BQUs7Z0NBQVdDLFFBQVE7MENBQzVCLDRFQUFDQztvQ0FBT04sV0FBVyxpQkFBMkQsT0FBMUNOLGVBQWUsYUFBYSxXQUFXOzt3Q0FBTTt3Q0FDdkVMLG9CQUFvQjt3Q0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNOUMsOERBQUNGLDBEQUFjQTs7Ozs7Ozs7Ozs7QUFHckI7R0E5RE1DO0tBQUFBO0FBZ0VOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCAnQC9zdHlsZXMvc3R5bGVzLmNzcydcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvZ2dlZEluVXNlcm5hbWUsIHNldExvZ2dlZEluVXNlcm5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gQ29va2llcy5nZXQoJ2xvZ2dlZEluJyk7XHJcbiAgICBpZiAoaXNMb2dnZWRJbiA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJuYW1lRnJvbUNvb2tpZSA9IENvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xyXG4gICAgICBzZXRMb2dnZWRJblVzZXJuYW1lKHVzZXJuYW1lRnJvbUNvb2tpZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgnLycpOyAvLyBTZXQgdGhlIGRlZmF1bHQgYWN0aXZlIHBhZ2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFVzZSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgdG8gZ2V0IHRoZSBjdXJyZW50IFVSTFxyXG4gICAgc2V0QWN0aXZlUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgaGVhZGVyLWJ1dHRvbiAke2FjdGl2ZVBhZ2UgPT09ICcvJyA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICBWaWV3IFRhc2tzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVUYXNrXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BoZWFkZXItYnV0dG9uICR7YWN0aXZlUGFnZSA9PT0gJy9jcmVhdGVUYXNrJyA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICBDcmVhdGUgVGFza1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGhlYWRlci1idXR0b24gJHthY3RpdmVQYWdlID09PSAnL3JlZ2lzdGVyJyA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGhlYWRlci1idXR0b24gJHthY3RpdmVQYWdlID09PSAnL2xvZ2luJyA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGhlYWRlci1idXR0b24gJHthY3RpdmVQYWdlID09PSAnL3Byb2ZpbGUnID8gJ2FjdGl2ZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgIEhlbGxvLCB7bG9nZ2VkSW5Vc2VybmFtZSB8fCAnR3Vlc3QnfSFcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDb29raWVzIiwiVG9hc3RDb250YWluZXIiLCJIZWFkZXIiLCJsb2dnZWRJblVzZXJuYW1lIiwic2V0TG9nZ2VkSW5Vc2VybmFtZSIsImlzTG9nZ2VkSW4iLCJnZXQiLCJ1c2VybmFtZUZyb21Db29raWUiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXYiLCJ1bCIsImxpIiwiaHJlZiIsInBhc3NIcmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});