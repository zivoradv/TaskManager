"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"./components/header.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Profile() {\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [TaskCount, setTaskCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const username = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"username\");\n        if (username) {\n            fetch(\"http://localhost:5000/user/\".concat(username)).then((response)=>{\n                if (response.ok) {\n                    return response.json();\n                } else {\n                    throw new Error(\"Failed to fetch user information\");\n                }\n            }).then((data)=>{\n                setUserData(data);\n            }).catch((error)=>{\n                console.error(\"Error fetching user information:\", error);\n            });\n        }\n        fetch(\"http://localhost:5000/tasks/count/\".concat(username)).then((response)=>{\n            if (response.ok) {\n                return response.json();\n            } else {\n                throw new Error(\"Failed to fetch task count\");\n            }\n        }).then((data)=>{\n            // Assuming the API returns the task count as \"taskCount\" in the response data\n            const taskCount = data.taskCount;\n            setTaskCount(taskCount);\n        }).catch((error)=>{\n            console.error(\"Error fetching task count:\", error);\n        });\n    }, []);\n    const handleLogOut = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"loggedIn\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"username\");\n        window.location.href = \"/\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"profile-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    userData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Username:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    userData.username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    userData.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Number of tasks:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    TaskCount\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogOut,\n                                children: \"Log Out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Hello, guest! You can create, edit, and delete tasks globally, accessible to everyone.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"If you want to save your tasks and have your personalized experience, please \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/login\",\n                                        children: \"Log In\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 34\n                                    }, this),\n                                    \" or\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/register\",\n                                        children: \"Register\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\profile.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Profile, \"wHkoYM1cLnizqjQBBBADXpg+aEE=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNWO0FBQ1Q7QUFDRjtBQUNEO0FBRTdCLFNBQVNNOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsV0FBV1AsaURBQU9BLENBQUNRLEdBQUcsQ0FBQztRQUM3QixJQUFJRCxVQUFVO1lBQ1pFLE1BQU0sOEJBQXVDLE9BQVRGLFdBQ2pDRyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0wsSUFBSUEsU0FBU0MsRUFBRSxFQUFFO29CQUNmLE9BQU9ELFNBQVNFLElBQUk7Z0JBQ3RCLE9BQU87b0JBQ0wsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtZQUNGLEdBQ0NKLElBQUksQ0FBQyxDQUFDSztnQkFDTFgsWUFBWVc7WUFDZCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ05DLFFBQVFELEtBQUssQ0FBQyxvQ0FBb0NBO1lBQ3BEO1FBQ0o7UUFFQVIsTUFBTSxxQ0FBOEMsT0FBVEYsV0FDeENHLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUlBLFNBQVNDLEVBQUUsRUFBRTtnQkFDZixPQUFPRCxTQUFTRSxJQUFJO1lBQ3RCLE9BQU87Z0JBQ0wsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1FBQ0YsR0FDQ0osSUFBSSxDQUFDLENBQUNLO1lBQ0wsOEVBQThFO1lBQzlFLE1BQU1JLFlBQVlKLEtBQUtJLFNBQVM7WUFDaENiLGFBQWFhO1FBQ2YsR0FDQ0gsS0FBSyxDQUFDLENBQUNDO1lBQ05DLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDO0lBRUosR0FBRyxFQUFFO0lBRUwsTUFBTUcsZUFBZTtRQUNuQnBCLGlEQUFPQSxDQUFDcUIsTUFBTSxDQUFDO1FBQ2ZyQixpREFBT0EsQ0FBQ3FCLE1BQU0sQ0FBQztRQUVmQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUMxQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDMEI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FBRzs7Ozs7O29CQUNIeEIseUJBQ0MsOERBQUNzQjs7MENBQ0MsOERBQUNHOztrREFDQyw4REFBQ0M7a0RBQU87Ozs7OztvQ0FBa0I7b0NBQUUxQixTQUFTSSxRQUFROzs7Ozs7OzBDQUUvQyw4REFBQ3FCOztrREFDQyw4REFBQ0M7a0RBQU87Ozs7OztvQ0FBZTtvQ0FBRTFCLFNBQVMyQixLQUFLOzs7Ozs7OzBDQUV6Qyw4REFBQ0Y7O2tEQUNDLDhEQUFDQztrREFBTzs7Ozs7O29DQUF5QjtvQ0FBRXhCOzs7Ozs7OzBDQUVyQyw4REFBQzBCO2dDQUFPQyxTQUFTWjswQ0FBYzs7Ozs7Ozs7Ozs7NkNBR2pDLDhEQUFDSzs7MENBQ0MsOERBQUNHOzBDQUFFOzs7Ozs7MENBSUgsOERBQUNBOztvQ0FBRTtrREFFa0IsOERBQUMzQixrREFBSUE7d0NBQUN1QixNQUFLO2tEQUFTOzs7Ozs7b0NBQWE7b0NBQUk7a0RBQ3hELDhEQUFDdkIsa0RBQUlBO3dDQUFDdUIsTUFBSztrREFBWTs7Ozs7O29DQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BEO0dBbEZTdEI7S0FBQUE7QUFvRlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcz8wOGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW1Rhc2tDb3VudCwgc2V0VGFza0NvdW50XSA9IHVzZVN0YXRlKCcnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IENvb2tpZXMuZ2V0KFwidXNlcm5hbWVcIik7XHJcbiAgICBpZiAodXNlcm5hbWUpIHtcclxuICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91c2VyLyR7dXNlcm5hbWV9YClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVzZXIgaW5mb3JtYXRpb25cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0VXNlckRhdGEoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBpbmZvcm1hdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdGFza3MvY291bnQvJHt1c2VybmFtZX1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB0YXNrIGNvdW50XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAvLyBBc3N1bWluZyB0aGUgQVBJIHJldHVybnMgdGhlIHRhc2sgY291bnQgYXMgXCJ0YXNrQ291bnRcIiBpbiB0aGUgcmVzcG9uc2UgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRhc2tDb3VudCA9IGRhdGEudGFza0NvdW50O1xyXG4gICAgICAgIHNldFRhc2tDb3VudCh0YXNrQ291bnQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRhc2sgY291bnQ6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoKSA9PiB7XHJcbiAgICBDb29raWVzLnJlbW92ZShcImxvZ2dlZEluXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ1c2VybmFtZVwiKTtcclxuXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aDE+UHJvZmlsZTwvaDE+XHJcbiAgICAgICAge3VzZXJEYXRhID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Vc2VybmFtZTo8L3N0cm9uZz4ge3VzZXJEYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IHt1c2VyRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Ryb25nPk51bWJlciBvZiB0YXNrczo8L3N0cm9uZz4ge1Rhc2tDb3VudH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ091dH0+TG9nIE91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEhlbGxvLCBndWVzdCEgWW91IGNhbiBjcmVhdGUsIGVkaXQsIGFuZCBkZWxldGUgdGFza3MgZ2xvYmFsbHksXHJcbiAgICAgICAgICAgICAgYWNjZXNzaWJsZSB0byBldmVyeW9uZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBJZiB5b3Ugd2FudCB0byBzYXZlIHlvdXIgdGFza3MgYW5kIGhhdmUgeW91ciBwZXJzb25hbGl6ZWRcclxuICAgICAgICAgICAgICBleHBlcmllbmNlLCBwbGVhc2UgPExpbmsgaHJlZj1cIi9sb2dpblwiPkxvZyBJbjwvTGluaz4gb3J7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9MaW5rPi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIkNvb2tpZXMiLCJMaW5rIiwiUHJvZmlsZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJUYXNrQ291bnQiLCJzZXRUYXNrQ291bnQiLCJ1c2VybmFtZSIsImdldCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiRXJyb3IiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJ0YXNrQ291bnQiLCJoYW5kbGVMb2dPdXQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzdHJvbmciLCJlbWFpbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.js\n"));

/***/ })

});