"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [loggedInUsername, setLoggedInUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"loggedIn\");\n        if (isLoggedIn === \"true\") {\n            const usernameFromCookie = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setLoggedInUsername(usernameFromCookie);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"link\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button\",\n                                    children: \"View Tasks\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/createTask\",\n                                className: \"link\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button\",\n                                    children: \"Create Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/register\",\n                                className: \"link\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button\",\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                className: \"link\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/profile\",\n                                className: \"link\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button\",\n                                    children: [\n                                        \"Hello, \",\n                                        loggedInUsername || \"Guest\",\n                                        \"!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"Ot+5pHHXqQnkf6vPKXaeTAI2UAE=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUNHO0FBQ0o7QUFDb0I7QUFDRDtBQUUvQyxNQUFNTSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR04sK0NBQVFBLENBQUM7SUFFekRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsYUFBYUwsaURBQU9BLENBQUNNLEdBQUcsQ0FBQztRQUMvQixJQUFJRCxlQUFlLFFBQVE7WUFDekIsTUFBTUUscUJBQXFCUCxpREFBT0EsQ0FBQ00sR0FBRyxDQUFDO1lBQ3ZDRixvQkFBb0JHO1FBQ3RCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7MEJBQ0MsNEVBQUNDO29CQUFHRixXQUFVOztzQ0FDWiw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQ1osNEVBQUNWLGtEQUFJQTtnQ0FBQ2MsTUFBSztnQ0FBSUosV0FBVTswQ0FDdkIsNEVBQUNLO29DQUFPTCxXQUFVOzhDQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHdEMsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUNaLDRFQUFDVixrREFBSUE7Z0NBQUNjLE1BQUs7Z0NBQWNKLFdBQVU7MENBQ2pDLDRFQUFDSztvQ0FBT0wsV0FBVTs4Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3RDLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FDWiw0RUFBQ1Ysa0RBQUlBO2dDQUFDYyxNQUFLO2dDQUFZSixXQUFVOzBDQUNqQyw0RUFBQ0s7b0NBQU9MLFdBQVU7OENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUdwQyw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQ1osNEVBQUNWLGtEQUFJQTtnQ0FBQ2MsTUFBSztnQ0FBU0osV0FBVTswQ0FDOUIsNEVBQUNLO29DQUFPTCxXQUFVOzhDQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHcEMsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUNaLDRFQUFDVixrREFBSUE7Z0NBQUNjLE1BQUs7Z0NBQVdKLFdBQVU7MENBQ2hDLDRFQUFDSztvQ0FBT0wsV0FBVTs7d0NBQWdCO3dDQUFRTixvQkFBb0I7d0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzVFLDhEQUFDRiwwREFBY0E7Ozs7Ozs7Ozs7O0FBR3JCO0dBN0NNQztLQUFBQTtBQStDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgJ0Avc3R5bGVzL3N0eWxlcy5jc3MnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2dnZWRJblVzZXJuYW1lLCBzZXRMb2dnZWRJblVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IENvb2tpZXMuZ2V0KCdsb2dnZWRJbicpO1xyXG4gICAgaWYgKGlzTG9nZ2VkSW4gPT09ICd0cnVlJykge1xyXG4gICAgICBjb25zdCB1c2VybmFtZUZyb21Db29raWUgPSBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcclxuICAgICAgc2V0TG9nZ2VkSW5Vc2VybmFtZSh1c2VybmFtZUZyb21Db29raWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdoZWFkZXItYnV0dG9uJz5WaWV3IFRhc2tzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVUYXNrXCIgY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdoZWFkZXItYnV0dG9uJz5DcmVhdGUgVGFzazwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdoZWFkZXItYnV0dG9uJz5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdoZWFkZXItYnV0dG9uJz5Mb2cgaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdoZWFkZXItYnV0dG9uJz5IZWxsbywge2xvZ2dlZEluVXNlcm5hbWUgfHwgJ0d1ZXN0J30hPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQ29va2llcyIsIlRvYXN0Q29udGFpbmVyIiwiSGVhZGVyIiwibG9nZ2VkSW5Vc2VybmFtZSIsInNldExvZ2dlZEluVXNlcm5hbWUiLCJpc0xvZ2dlZEluIiwiZ2V0IiwidXNlcm5hbWVGcm9tQ29va2llIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJsaSIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});