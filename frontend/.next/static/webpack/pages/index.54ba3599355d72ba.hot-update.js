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

/***/ "./components/Task.js":
/*!****************************!*\
  !*** ./components/Task.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=FaCheck,FaPen,FaTimes,FaTrash!=!react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _context_TaskContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/TaskContext */ \"./context/TaskContext.js\");\n/* harmony import */ var _pages_editTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/editTask */ \"./pages/editTask.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Task = (param)=>{\n    let { task, index } = param;\n    _s();\n    const { deleteTask, setTaskStatus } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TaskContext__WEBPACK_IMPORTED_MODULE_4__.TaskContext);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editedTask, setEditedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: task.title,\n        description: task.description,\n        due_date: task.due_date\n    });\n    const handleEdit = ()=>{\n        setIsEditing(true);\n    };\n    const handleDelete = async ()=>{\n        try {\n            deleteTask(task.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"TempTask deleted successfully\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error deleting task\");\n        }\n    };\n    const handleStatus = async ()=>{\n        try {\n            setTaskStatus(task.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully changed status of a task\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error changing status of a task\");\n        }\n    };\n    const handleSave = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(\"http://localhost:5000/tempTasks/\".concat(task.id), editedTask).then((response)=>{\n            setIsEditing(false);\n        }).catch((error)=>{\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error saving task changes\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: task.status ? \"status-tast\" : \"task\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"task-title\",\n                children: [\n                    index + 1,\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"task-title\",\n                children: task.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"task-description\",\n                children: task.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"task-due-date\",\n                children: [\n                    \"Due Date: \",\n                    task.due_date\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    task.status === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCheck, {\n                        className: \"status-button completed-button\",\n                        onClick: handleStatus\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTimes, {\n                        className: \"status-button completed-button\",\n                        onClick: handleStatus\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTrash, {\n                        className: \"delete-button\",\n                        onClick: handleDelete\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_FaPen_FaTimes_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPen, {\n                        className: \"edit-button\",\n                        onClick: handleEdit\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_editTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                task: task,\n                isOpen: isEditing,\n                onRequestClose: ()=>setIsEditing(false),\n                onSave: handleSave\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VukovicZ\\\\Documents\\\\task_manager\\\\frontend\\\\components\\\\Task.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Task, \"RemsDs6k5BiwQT12StWakfWNoX8=\");\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQzFCO0FBQ2E7QUFDUDtBQUNrQztBQUNkO0FBQ1o7QUFFeEMsTUFBTVksT0FBTztRQUFDLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFOztJQUMzQixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQUdmLGlEQUFVQSxDQUFDUyw2REFBV0E7SUFDNUQsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNpQixZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUEsQ0FBQztRQUMzQ21CLE9BQU9SLEtBQUtRLEtBQUs7UUFDakJDLGFBQWFULEtBQUtTLFdBQVc7UUFDN0JDLFVBQVVWLEtBQUtVLFFBQVE7SUFDekI7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCTixhQUFhO0lBQ2Y7SUFFQSxNQUFNTyxlQUFlO1FBQ25CLElBQUk7WUFDRlYsV0FBV0YsS0FBS2EsRUFBRTtZQUNsQnRCLGlEQUFLQSxDQUFDdUIsT0FBTyxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNkeEIsaURBQUtBLENBQUN3QixLQUFLLENBQUM7UUFDZDtJQUNGO0lBRUEsTUFBTUMsZUFBZTtRQUNuQixJQUFJO1lBQ0ZiLGNBQWNILEtBQUthLEVBQUU7WUFDckJ0QixpREFBS0EsQ0FBQ3VCLE9BQU8sQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDZHhCLGlEQUFLQSxDQUFDd0IsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLE1BQU1FLGFBQWE7UUFDakIzQiw2Q0FBS0EsQ0FDRjRCLEdBQUcsQ0FBQyxtQ0FBMkMsT0FBUmxCLEtBQUthLEVBQUUsR0FBSVAsWUFDbERhLElBQUksQ0FBQyxDQUFDQztZQUNMZixhQUFhO1FBQ2YsR0FDQ2dCLEtBQUssQ0FBQyxDQUFDTjtZQUNOeEIsaURBQUtBLENBQUN3QixLQUFLLENBQUM7UUFDZDtJQUNKO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVd2QixLQUFLd0IsTUFBTSxHQUFHLGdCQUFnQjs7MEJBQzVDLDhEQUFDQztnQkFBR0YsV0FBVTs7b0JBQWN0QixRQUFRO29CQUFFOzs7Ozs7OzBCQUN0Qyw4REFBQ3dCO2dCQUFHRixXQUFVOzBCQUFjdkIsS0FBS1EsS0FBSzs7Ozs7OzBCQUN0Qyw4REFBQ2tCO2dCQUFFSCxXQUFVOzBCQUFvQnZCLEtBQUtTLFdBQVc7Ozs7OzswQkFDakQsOERBQUNpQjtnQkFBRUgsV0FBVTs7b0JBQWdCO29CQUFXdkIsS0FBS1UsUUFBUTs7Ozs7OzswQkFFckQsOERBQUNZOztvQkFDRXRCLEtBQUt3QixNQUFNLEtBQUssa0JBQ2YsOERBQUM5Qix3R0FBT0E7d0JBQ042QixXQUFVO3dCQUNWSSxTQUFTWDs7Ozs7a0RBR1gsOERBQUNyQix3R0FBT0E7d0JBQ040QixXQUFVO3dCQUNWSSxTQUFTWDs7Ozs7O2tDQUdiLDhEQUFDdkIsd0dBQU9BO3dCQUFDOEIsV0FBVTt3QkFBZ0JJLFNBQVNmOzs7Ozs7a0NBQzVDLDhEQUFDaEIsc0dBQUtBO3dCQUFDMkIsV0FBVTt3QkFBY0ksU0FBU2hCOzs7Ozs7Ozs7Ozs7WUFHekNQLDJCQUNDLDhEQUFDTix1REFBUUE7Z0JBQ1BFLE1BQU1BO2dCQUNONEIsUUFBUXhCO2dCQUNSeUIsZ0JBQWdCLElBQU14QixhQUFhO2dCQUNuQ3lCLFFBQVFiOzs7Ozs7Ozs7Ozs7QUFLbEI7R0EzRU1sQjtLQUFBQTtBQTZFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rhc2suanM/MjI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IEZhVHJhc2gsIEZhQ2hlY2ssIEZhVGltZXMsIEZhUGVuIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IFRhc2tDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9UYXNrQ29udGV4dFwiO1xyXG5pbXBvcnQgRWRpdFRhc2sgZnJvbSBcIkAvcGFnZXMvZWRpdFRhc2tcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSAoeyB0YXNrLCBpbmRleCB9KSA9PiB7XHJcbiAgY29uc3QgeyBkZWxldGVUYXNrLCBzZXRUYXNrU3RhdHVzIH0gPSB1c2VDb250ZXh0KFRhc2tDb250ZXh0KTtcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlZGl0ZWRUYXNrLCBzZXRFZGl0ZWRUYXNrXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24sXHJcbiAgICBkdWVfZGF0ZTogdGFzay5kdWVfZGF0ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdCA9ICgpID0+IHtcclxuICAgIHNldElzRWRpdGluZyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkZWxldGVUYXNrKHRhc2suaWQpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiVGVtcFRhc2sgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHRhc2tcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0VGFza1N0YXR1cyh0YXNrLmlkKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSBjaGFuZ2VkIHN0YXR1cyBvZiBhIHRhc2tcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm9yIGNoYW5naW5nIHN0YXR1cyBvZiBhIHRhc2tcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RlbXBUYXNrcy8ke3Rhc2suaWR9YCwgZWRpdGVkVGFzaylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3Igc2F2aW5nIHRhc2sgY2hhbmdlc1wiKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0YXNrLnN0YXR1cyA/IFwic3RhdHVzLXRhc3RcIiA6IFwidGFza1wifT5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRhc2stdGl0bGVcIj57aW5kZXggKyAxfS48L2gzPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGFzay10aXRsZVwiPnt0YXNrLnRpdGxlfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRhc2stZGVzY3JpcHRpb25cIj57dGFzay5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRhc2stZHVlLWRhdGVcIj5EdWUgRGF0ZToge3Rhc2suZHVlX2RhdGV9PC9wPlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGFzay5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICA8RmFDaGVja1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0dXMtYnV0dG9uIGNvbXBsZXRlZC1idXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGF0dXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RmFUaW1lc1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0dXMtYnV0dG9uIGNvbXBsZXRlZC1idXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGF0dXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZhVHJhc2ggY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gLz5cclxuICAgICAgICA8RmFQZW4gY2xhc3NOYW1lPVwiZWRpdC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVFZGl0fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtpc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgIDxFZGl0VGFza1xyXG4gICAgICAgICAgdGFzaz17dGFza31cclxuICAgICAgICAgIGlzT3Blbj17aXNFZGl0aW5nfVxyXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldElzRWRpdGluZyhmYWxzZSl9XHJcbiAgICAgICAgICBvblNhdmU9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsInRvYXN0IiwiQ29va2llcyIsIkZhVHJhc2giLCJGYUNoZWNrIiwiRmFUaW1lcyIsIkZhUGVuIiwiVGFza0NvbnRleHQiLCJFZGl0VGFzayIsIlRhc2siLCJ0YXNrIiwiaW5kZXgiLCJkZWxldGVUYXNrIiwic2V0VGFza1N0YXR1cyIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImVkaXRlZFRhc2siLCJzZXRFZGl0ZWRUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZV9kYXRlIiwiaGFuZGxlRWRpdCIsImhhbmRsZURlbGV0ZSIsImlkIiwic3VjY2VzcyIsImVycm9yIiwiaGFuZGxlU3RhdHVzIiwiaGFuZGxlU2F2ZSIsInB1dCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RhdHVzIiwiaDMiLCJwIiwib25DbGljayIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwib25TYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Task.js\n"));

/***/ })

});