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

/***/ "./pages/createTask.js":
/*!*****************************!*\
  !*** ./pages/createTask.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"./components/header.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CreateTask = ()=>{\n    _s();\n    const initialTask = {\n        title: \"\",\n        description: \"\",\n        due_date: \"\"\n    };\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTask);\n    const username = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"username\");\n    const createTempTask = async (newTask)=>{\n        if (!username) {\n            try {\n                const response = await fetch(\"http://localhost:5000/tempTasks\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newTask)\n                });\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Task successfully created\");\n            } catch (error) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Error:\", error);\n            }\n        } else {\n            try {\n                const response = await fetch(\"http://localhost:5000/tasks/\".concat(username), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newTask)\n                });\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Task successfully created\");\n            } catch (error) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Error:\", error);\n            }\n        }\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setTask({\n            ...task,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const newTask = {\n            title: task.title,\n            description: task.description,\n            due_date: task.due_date\n        };\n        createTempTask(newTask);\n        setTask(initialTask);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"create-task-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Create a Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"create-task-form\",\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"title\",\n                                        children: \"Title:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"title\",\n                                        name: \"title\",\n                                        value: task.title,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"description\",\n                                        children: \"Description:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        id: \"description\",\n                                        name: \"description\",\n                                        value: task.description,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"due_date\",\n                                        children: \"Due Date:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"date\",\n                                        id: \"due_date\",\n                                        name: \"due_date\",\n                                        value: task.due_date,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"submit-button\",\n                                children: \"Create Task\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\pages\\\\createTask.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateTask, \"a+TYpIx+65KKEIqriteE0CYIdHw=\");\n_c = CreateTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateTask);\nvar _c;\n$RefreshReg$(_c, \"CreateTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7d0NBQ0xDLElBQUc7d0NBQ0hkLE1BQUs7d0NBQ0xDLE9BQU9yQixLQUFLRCxRQUFRO3dDQUNwQm9DLFVBQVVqQjs7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDbUI7Z0NBQU9KLE1BQUs7Z0NBQVNQLFdBQVU7MENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUQ7R0EvR00vQjtLQUFBQTtBQWlITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGVUYXNrLmpzPzI0ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmNvbnN0IENyZWF0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbFRhc2sgPSB7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgZHVlX2RhdGU6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoaW5pdGlhbFRhc2spO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gQ29va2llcy5nZXQoXCJ1c2VybmFtZVwiKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVGVtcFRhc2sgPSBhc3luYyAobmV3VGFzaykgPT4ge1xyXG5cclxuICAgIGlmKCF1c2VybmFtZSl7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RlbXBUYXNrcycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1Rhc2spLFxyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlRhc2sgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIilcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90YXNrcy8ke3VzZXJuYW1lfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1Rhc2spLFxyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlRhc2sgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIilcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0VGFzayh7IC4uLnRhc2ssIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrID0ge1xyXG4gICAgICB0aXRsZTogdGFzay50aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZV9kYXRlOiB0YXNrLmR1ZV9kYXRlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVUZW1wVGFzayhuZXdUYXNrKTtcclxuXHJcbiAgICBzZXRUYXNrKGluaXRpYWxUYXNrKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLXRhc2stY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyPkNyZWF0ZSBhIFRhc2s8L2gyPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNyZWF0ZS10YXNrLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0YXNrLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImR1ZV9kYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZHVlX2RhdGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkdWVfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Rhc2suZHVlX2RhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiPlxyXG4gICAgICAgICAgICBDcmVhdGUgVGFza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJIZWFkZXIiLCJDb29raWVzIiwidG9hc3QiLCJDcmVhdGVUYXNrIiwiaW5pdGlhbFRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlX2RhdGUiLCJ0YXNrIiwic2V0VGFzayIsInVzZXJuYW1lIiwiZ2V0IiwiY3JlYXRlVGVtcFRhc2siLCJuZXdUYXNrIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJzdWNjZXNzIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/createTask.js\n"));

/***/ })

});