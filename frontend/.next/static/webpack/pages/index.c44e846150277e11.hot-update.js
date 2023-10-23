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

/***/ "./context/TaskContext.js":
/*!********************************!*\
  !*** ./context/TaskContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskContext: function() { return /* binding */ TaskContext; },\n/* harmony export */   TaskContextProvider: function() { return /* binding */ TaskContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst TaskContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst TaskContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchTasks = async ()=>{\n        const username = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"username\");\n        if (!username) {\n            try {\n                const response = await fetch(\"http://localhost:5000/tempTasks\");\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setTasks(data);\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        } else {\n            try {\n                const response = await fetch(\"http://localhost:5000/tasks/\".concat(username));\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setTasks(data);\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        }\n    };\n    const deleteTask = async (tempTaskId)=>{\n        const username = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"username\");\n        if (!username) {\n            try {\n                const response = await fetch(\"http://localhost:5000/tempTasks/\".concat(tempTaskId), {\n                    method: \"DELETE\"\n                });\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                fetchTasks();\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        } else {\n            try {\n                const response = await fetch(\"http://localhost:5000/tasks/\".concat(tempTaskId), {\n                    method: \"DELETE\"\n                });\n                console.log(tempTaskId);\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                fetchTasks();\n            } catch (error) {\n                console.error(\"Error:\" + \" \" + tempTaskId, error);\n            }\n        }\n    };\n    const setTempTaskStatus = async (tempTaskId)=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/tempTasks/setStatus/\".concat(tempTaskId), {\n                method: \"PUT\"\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            fetchTasks();\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTasks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TaskContext.Provider, {\n        value: {\n            tasks,\n            deleteTask,\n            setTempTaskStatus\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\context\\\\TaskContext.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskContextProvider, \"bBd6yqkqV9dlkj9ENgRyXKaiXpk=\");\n_c = TaskContextProvider;\nvar _c;\n$RefreshReg$(_c, \"TaskContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eHQvVGFza0NvbnRleHQuanM/ZWVjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuZXhwb3J0IGNvbnN0IFRhc2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhc2tDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVGFza3MgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBDb29raWVzLmdldCgndXNlcm5hbWUnKTtcclxuXHJcbiAgICBpZighdXNlcm5hbWUpe1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdGVtcFRhc2tzXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRUYXNrcyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdGFza3MvJHt1c2VybmFtZX1gKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VGFza3MoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVUYXNrID0gYXN5bmMgKHRlbXBUYXNrSWQpID0+IHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gQ29va2llcy5nZXQoJ3VzZXJuYW1lJyk7XHJcblxyXG4gICAgaWYoIXVzZXJuYW1lKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90ZW1wVGFza3MvJHt0ZW1wVGFza0lkfWAsIFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZldGNoVGFza3MoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Rhc2tzLyR7dGVtcFRhc2tJZH1gLCBcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRlbXBUYXNrSWQpXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZldGNoVGFza3MoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiArIFwiIFwiICsgdGVtcFRhc2tJZCwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRUZW1wVGFza1N0YXR1cyA9IGFzeW5jICh0ZW1wVGFza0lkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdGVtcFRhc2tzL3NldFN0YXR1cy8ke3RlbXBUYXNrSWR9YCwgXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmV0Y2hUYXNrcygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVGFza3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFza0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGFza3MsIGRlbGV0ZVRhc2ssIHNldFRlbXBUYXNrU3RhdHVzIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Rhc2tDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29va2llcyIsIlRhc2tDb250ZXh0IiwiVGFza0NvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidGFza3MiLCJzZXRUYXNrcyIsImZldGNoVGFza3MiLCJ1c2VybmFtZSIsImdldCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkZWxldGVUYXNrIiwidGVtcFRhc2tJZCIsIm1ldGhvZCIsImxvZyIsInNldFRlbXBUYXNrU3RhdHVzIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/TaskContext.js\n"));

/***/ })

});