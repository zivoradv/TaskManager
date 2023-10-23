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

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [loggedInUsername, setLoggedInUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"loggedIn\");\n        if (isLoggedIn === \"true\") {\n            const usernameFromCookie = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n            setLoggedInUsername(usernameFromCookie);\n        }\n    }, []);\n    const handlePageChange = (page)=>{\n        setActivePage(page);\n    };\n    // Determine the active page based on the current route\n    const activePage = next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter.pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/\" ? \"active\" : \"\"),\n                                    onClick: ()=>handlePageChange(\"/\"),\n                                    children: \"View Tasks\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/createTask\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/createTask\" ? \"active\" : \"\"),\n                                    onClick: ()=>handlePageChange(\"/createTask\"),\n                                    children: \"Create Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/register\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/register\" ? \"active\" : \"\"),\n                                    onClick: ()=>handlePageChange(\"/register\"),\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/login\" ? \"active\" : \"\"),\n                                    onClick: ()=>handlePageChange(\"/login\"),\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/profile\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"header-button \".concat(activePage === \"/profile\" ? \"active\" : \"\"),\n                                    onClick: ()=>handlePageChange(\"/profile\"),\n                                    children: [\n                                        \"Hello, \",\n                                        loggedInUsername || \"Guest\",\n                                        \"!\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\header.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"Ot+5pHHXqQnkf6vPKXaeTAI2UAE=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ0c7QUFDSjtBQUNvQjtBQUNEO0FBQ0U7QUFFakQsTUFBTVEsU0FBUzs7SUFDYixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGFBQWFQLGlEQUFPQSxDQUFDUSxHQUFHLENBQUM7UUFDL0IsSUFBSUQsZUFBZSxRQUFRO1lBQ3pCLE1BQU1FLHFCQUFxQlQsaURBQU9BLENBQUNRLEdBQUcsQ0FBQztZQUN2Q0Ysb0JBQW9CRztRQUN0QjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QkMsY0FBY0Q7SUFDaEI7SUFFQSx1REFBdUQ7SUFDdkQsTUFBTUUsYUFBYVYsa0RBQU1BLENBQUNXLFFBQVE7SUFFbEMscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7MEJBQ0MsNEVBQUNDO29CQUFHRixXQUFVOztzQ0FDWiw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQ1osNEVBQUNqQixrREFBSUE7Z0NBQUNxQixNQUFLO2dDQUFJQyxRQUFROzBDQUNyQiw0RUFBQ0M7b0NBQ0NOLFdBQVcsaUJBQW9ELE9BQW5DSCxlQUFlLE1BQU0sV0FBVztvQ0FDNURVLFNBQVMsSUFBTWIsaUJBQWlCOzhDQUNqQzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLTCw4REFBQ1M7NEJBQUdILFdBQVU7c0NBQ1osNEVBQUNqQixrREFBSUE7Z0NBQUNxQixNQUFLO2dDQUFjQyxRQUFROzBDQUMvQiw0RUFBQ0M7b0NBQ0NOLFdBQVcsaUJBQThELE9BQTdDSCxlQUFlLGdCQUFnQixXQUFXO29DQUN0RVUsU0FBUyxJQUFNYixpQkFBaUI7OENBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUtMLDhEQUFDUzs0QkFBR0gsV0FBVTtzQ0FDWiw0RUFBQ2pCLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7Z0NBQVlDLFFBQVE7MENBQzdCLDRFQUFDQztvQ0FDQ04sV0FBVyxpQkFBNEQsT0FBM0NILGVBQWUsY0FBYyxXQUFXO29DQUNwRVUsU0FBUyxJQUFNYixpQkFBaUI7OENBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUtMLDhEQUFDUzs0QkFBR0gsV0FBVTtzQ0FDWiw0RUFBQ2pCLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7Z0NBQVNDLFFBQVE7MENBQzFCLDRFQUFDQztvQ0FDQ04sV0FBVyxpQkFBeUQsT0FBeENILGVBQWUsV0FBVyxXQUFXO29DQUNqRVUsU0FBUyxJQUFNYixpQkFBaUI7OENBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUtMLDhEQUFDUzs0QkFBR0gsV0FBVTtzQ0FDWiw0RUFBQ2pCLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7Z0NBQVdDLFFBQVE7MENBQzVCLDRFQUFDQztvQ0FDQ04sV0FBVyxpQkFBMkQsT0FBMUNILGVBQWUsYUFBYSxXQUFXO29DQUNuRVUsU0FBUyxJQUFNYixpQkFBaUI7O3dDQUNqQzt3Q0FDU0wsb0JBQW9CO3dDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU05Qyw4REFBQ0osMERBQWNBOzs7Ozs7Ozs7OztBQUdyQjtHQTdFTUc7S0FBQUE7QUErRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0ICdAL3N0eWxlcy9zdHlsZXMuY3NzJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIGFzIHJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2dnZWRJblVzZXJuYW1lLCBzZXRMb2dnZWRJblVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IENvb2tpZXMuZ2V0KCdsb2dnZWRJbicpO1xyXG4gICAgaWYgKGlzTG9nZ2VkSW4gPT09ICd0cnVlJykge1xyXG4gICAgICBjb25zdCB1c2VybmFtZUZyb21Db29raWUgPSBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcclxuICAgICAgc2V0TG9nZ2VkSW5Vc2VybmFtZSh1c2VybmFtZUZyb21Db29raWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVQYWdlKHBhZ2UpO1xyXG4gIH07XHJcblxyXG4gIC8vIERldGVybWluZSB0aGUgYWN0aXZlIHBhZ2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgcm91dGVcclxuICBjb25zdCBhY3RpdmVQYWdlID0gcm91dGVyLnBhdGhuYW1lO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItYnV0dG9uICR7YWN0aXZlUGFnZSA9PT0gJy8nID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZSgnLycpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZpZXcgVGFza3NcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZVRhc2tcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItYnV0dG9uICR7YWN0aXZlUGFnZSA9PT0gJy9jcmVhdGVUYXNrJyA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UoJy9jcmVhdGVUYXNrJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIFRhc2tcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyLWJ1dHRvbiAke2FjdGl2ZVBhZ2UgPT09ICcvcmVnaXN0ZXInID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZSgnL3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyLWJ1dHRvbiAke2FjdGl2ZVBhZ2UgPT09ICcvbG9naW4nID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZSgnL2xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyLWJ1dHRvbiAke2FjdGl2ZVBhZ2UgPT09ICcvcHJvZmlsZScgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKCcvcHJvZmlsZScpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEhlbGxvLCB7bG9nZ2VkSW5Vc2VybmFtZSB8fCAnR3Vlc3QnfSFcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDb29raWVzIiwiVG9hc3RDb250YWluZXIiLCJ1c2VSb3V0ZXIiLCJyb3V0ZXIiLCJIZWFkZXIiLCJsb2dnZWRJblVzZXJuYW1lIiwic2V0TG9nZ2VkSW5Vc2VybmFtZSIsImlzTG9nZ2VkSW4iLCJnZXQiLCJ1c2VybmFtZUZyb21Db29raWUiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJhY3RpdmVQYWdlIiwicGF0aG5hbWUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXYiLCJ1bCIsImxpIiwiaHJlZiIsInBhc3NIcmVmIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});