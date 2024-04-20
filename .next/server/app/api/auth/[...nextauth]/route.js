"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5Ctemplates%5Cthemeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated%5Cvuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0%5Cnext-version%5Cjavascript-version%5Cfull-version%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Ctemplates%5Cthemeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated%5Cvuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0%5Cnext-version%5Cjavascript-version%5Cfull-version&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5Ctemplates%5Cthemeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated%5Cvuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0%5Cnext-version%5Cjavascript-version%5Cfull-version%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Ctemplates%5Cthemeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated%5Cvuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0%5Cnext-version%5Cjavascript-version%5Cfull-version&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_templates_themeforest_NOi8Ww2n_vuexy_vuejs_html_laravel_admin_dashboard_template_updated_vuexy_vuejs_html_laravel_admin_dashboard_template_v10_0_0_next_version_javascript_version_full_version_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"E:\\\\templates\\\\themeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated\\\\vuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0\\\\next-version\\\\javascript-version\\\\full-version\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: E_templates_themeforest_NOi8Ww2n_vuexy_vuejs_html_laravel_admin_dashboard_template_updated_vuexy_vuejs_html_laravel_admin_dashboard_template_v10_0_0_next_version_javascript_version_full_version_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDdGVtcGxhdGVzJTVDdGhlbWVmb3Jlc3QtTk9pOFd3Mm4tdnVleHktdnVlanMtaHRtbC1sYXJhdmVsLWFkbWluLWRhc2hib2FyZC10ZW1wbGF0ZV91cGRhdGVkJTVDdnVleHktdnVlanMtaHRtbC1sYXJhdmVsLWFkbWluLWRhc2hib2FyZC10ZW1wbGF0ZS12MTAuMC4wJTVDbmV4dC12ZXJzaW9uJTVDamF2YXNjcmlwdC12ZXJzaW9uJTVDZnVsbC12ZXJzaW9uJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDdGVtcGxhdGVzJTVDdGhlbWVmb3Jlc3QtTk9pOFd3Mm4tdnVleHktdnVlanMtaHRtbC1sYXJhdmVsLWFkbWluLWRhc2hib2FyZC10ZW1wbGF0ZV91cGRhdGVkJTVDdnVleHktdnVlanMtaHRtbC1sYXJhdmVsLWFkbWluLWRhc2hib2FyZC10ZW1wbGF0ZS12MTAuMC4wJTVDbmV4dC12ZXJzaW9uJTVDamF2YXNjcmlwdC12ZXJzaW9uJTVDZnVsbC12ZXJzaW9uJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3NNO0FBQ25SO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVleHktbXVpLW5leHRqcy1hZG1pbi10ZW1wbGF0ZS8/ODNhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFx0ZW1wbGF0ZXNcXFxcdGhlbWVmb3Jlc3QtTk9pOFd3Mm4tdnVleHktdnVlanMtaHRtbC1sYXJhdmVsLWFkbWluLWRhc2hib2FyZC10ZW1wbGF0ZV91cGRhdGVkXFxcXHZ1ZXh5LXZ1ZWpzLWh0bWwtbGFyYXZlbC1hZG1pbi1kYXNoYm9hcmQtdGVtcGxhdGUtdjEwLjAuMFxcXFxuZXh0LXZlcnNpb25cXFxcamF2YXNjcmlwdC12ZXJzaW9uXFxcXGZ1bGwtdmVyc2lvblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcdGVtcGxhdGVzXFxcXHRoZW1lZm9yZXN0LU5PaThXdzJuLXZ1ZXh5LXZ1ZWpzLWh0bWwtbGFyYXZlbC1hZG1pbi1kYXNoYm9hcmQtdGVtcGxhdGVfdXBkYXRlZFxcXFx2dWV4eS12dWVqcy1odG1sLWxhcmF2ZWwtYWRtaW4tZGFzaGJvYXJkLXRlbXBsYXRlLXYxMC4wLjBcXFxcbmV4dC12ZXJzaW9uXFxcXGphdmFzY3JpcHQtdmVyc2lvblxcXFxmdWxsLXZlcnNpb25cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5Ctemplates%5Cthemeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated%5Cvuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0%5Cnext-version%5Cjavascript-version%5Cfull-version%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Ctemplates%5Cthemeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated%5Cvuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0%5Cnext-version%5Cjavascript-version%5Cfull-version&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/auth */ \"(rsc)/./src/libs/auth.js\");\n// Third-party Imports\n\n// Lib Imports\n\n/*\n * As we do not have backend server, the refresh token feature has not been incorporated into the template.\n * Please refer https://next-auth.js.org/tutorials/refresh-token-rotation link for a reference.\n */ const handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_libs_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDVTtBQUVoQyxjQUFjO0FBQzJCO0FBRXpDOzs7Q0FHQyxHQUNELE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxtREFBV0E7QUFFTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZXh5LW11aS1uZXh0anMtYWRtaW4tdGVtcGxhdGUvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlyZC1wYXJ0eSBJbXBvcnRzXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuXG4vLyBMaWIgSW1wb3J0c1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYnMvYXV0aCdcblxuLypcbiAqIEFzIHdlIGRvIG5vdCBoYXZlIGJhY2tlbmQgc2VydmVyLCB0aGUgcmVmcmVzaCB0b2tlbiBmZWF0dXJlIGhhcyBub3QgYmVlbiBpbmNvcnBvcmF0ZWQgaW50byB0aGUgdGVtcGxhdGUuXG4gKiBQbGVhc2UgcmVmZXIgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3R1dG9yaWFscy9yZWZyZXNoLXRva2VuLXJvdGF0aW9uIGxpbmsgZm9yIGEgcmVmZXJlbmNlLlxuICovXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/auth.js":
/*!**************************!*\
  !*** ./src/libs/auth.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n// Third-party Imports\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma),\n    // ** Configure one or more authentication providers\n    // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            // ** The name to display on the sign in form (e.g. 'Sign in with...')\n            // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials\n            name: \"Credentials\",\n            type: \"credentials\",\n            /*\n       * As we are using our own Sign-in page, we do not need to change\n       * username or password attributes manually in following credentials object.\n       */ credentials: {},\n            async authorize (credentials) {\n                /*\n         * You need to provide your own logic here that takes the credentials submitted and returns either\n         * an object representing a user or value that is false/null if the credentials are invalid.\n         * For e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }\n         * You can also use the `req` object to obtain additional parameters (i.e., the request IP address)\n         */ const { email, password } = credentials;\n                try {\n                    // ** Login API Call to match the user credentials and receive user data in response along with his role\n                    const res = await fetch(`${process.env.API_URL}/login`, {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            email,\n                            password\n                        })\n                    });\n                    const data = await res.json();\n                    if (res.status === 401) {\n                        throw new Error(JSON.stringify(data));\n                    }\n                    if (res.status === 200) {\n                        /*\n             * Please unset all the sensitive information of the user either from API response or before returning\n             * user data below. Below return statement will set the user object in the token and the same is set in\n             * the session which will be accessible all over the app.\n             */ return data;\n                    }\n                    return null;\n                } catch (e) {\n                    throw new Error(e.message);\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options\n    session: {\n        /*\n     * Choose how you want to save the user session.\n     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.\n     * If you use an `adapter` however, NextAuth default it to `database` instead.\n     * You can still force a JWT session by explicitly defining `jwt`.\n     * When using `database`, the session cookie will only contain a `sessionToken` value,\n     * which is used to look up the session in the database.\n     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).\n     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.\n     */ strategy: \"jwt\",\n        // ** Seconds - How long until an idle session expires and is no longer valid\n        maxAge: 30 * 24 * 60 * 60 // ** 30 days\n    },\n    // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options\n    pages: {\n        signIn: \"/login\"\n    },\n    // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options\n    callbacks: {\n        /*\n     * While using `jwt` as a strategy, `jwt()` callback will be called before\n     * the `session()` callback. So we have to add custom parameters in `token`\n     * via `jwt()` callback to make them accessible in the `session()` callback\n     */ async jwt ({ token, user }) {\n            if (user) {\n                /*\n         * For adding custom parameters to user in session, we first need to add those parameters\n         * in token which then will be available in the `session()` callback\n         */ token.name = user.name;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter\n                session.user.name = token.name;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQUMwQztBQUNUO0FBQ0g7QUFDUDtBQUU3QyxNQUFNSSxTQUFTLElBQUlELHdEQUFZQTtBQUV4QixNQUFNRSxjQUFjO0lBQ3pCQyxTQUFTSixtRUFBYUEsQ0FBQ0U7SUFFdkIsb0RBQW9EO0lBQ3BELDJHQUEyRztJQUMzR0csV0FBVztRQUNUUCwyRUFBa0JBLENBQUM7WUFDakIsc0VBQXNFO1lBQ3RFLG9HQUFvRztZQUNwR1EsTUFBTTtZQUNOQyxNQUFNO1lBRU47OztPQUdDLEdBQ0RDLGFBQWEsQ0FBQztZQUNkLE1BQU1DLFdBQVVELFdBQVc7Z0JBQ3pCOzs7OztTQUtDLEdBQ0QsTUFBTSxFQUFFRSxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtnQkFFNUIsSUFBSTtvQkFDRix3R0FBd0c7b0JBQ3hHLE1BQU1JLE1BQU0sTUFBTUMsTUFBTSxDQUFDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUN0REMsUUFBUTt3QkFDUkMsU0FBUzs0QkFDUCxnQkFBZ0I7d0JBQ2xCO3dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7NEJBQUVYOzRCQUFPQzt3QkFBUztvQkFDekM7b0JBRUEsTUFBTVcsT0FBTyxNQUFNVixJQUFJVyxJQUFJO29CQUUzQixJQUFJWCxJQUFJWSxNQUFNLEtBQUssS0FBSzt3QkFDdEIsTUFBTSxJQUFJQyxNQUFNTCxLQUFLQyxTQUFTLENBQUNDO29CQUNqQztvQkFFQSxJQUFJVixJQUFJWSxNQUFNLEtBQUssS0FBSzt3QkFDdEI7Ozs7YUFJQyxHQUNELE9BQU9GO29CQUNUO29CQUVBLE9BQU87Z0JBQ1QsRUFBRSxPQUFPSSxHQUFHO29CQUNWLE1BQU0sSUFBSUQsTUFBTUMsRUFBRUMsT0FBTztnQkFDM0I7WUFDRjtRQUNGO1FBQ0E1QixzRUFBY0EsQ0FBQztZQUNiNkIsVUFBVWQsUUFBUUMsR0FBRyxDQUFDYyxnQkFBZ0I7WUFDdENDLGNBQWNoQixRQUFRQyxHQUFHLENBQUNnQixvQkFBb0I7UUFDaEQ7S0FHRDtJQUVELHVHQUF1RztJQUN2R0MsU0FBUztRQUNQOzs7Ozs7Ozs7S0FTQyxHQUNEQyxVQUFVO1FBRVYsNkVBQTZFO1FBQzdFQyxRQUFRLEtBQUssS0FBSyxLQUFLLEdBQUcsYUFBYTtJQUN6QztJQUVBLG1HQUFtRztJQUNuR0MsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFFQSwyR0FBMkc7SUFDM0dDLFdBQVc7UUFDVDs7OztLQUlDLEdBQ0QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSOzs7U0FHQyxHQUNERCxNQUFNakMsSUFBSSxHQUFHa0MsS0FBS2xDLElBQUk7WUFDeEI7WUFFQSxPQUFPaUM7UUFDVDtRQUNBLE1BQU1QLFNBQVEsRUFBRUEsT0FBTyxFQUFFTyxLQUFLLEVBQUU7WUFDOUIsSUFBSVAsUUFBUVEsSUFBSSxFQUFFO2dCQUNoQixvR0FBb0c7Z0JBQ3BHUixRQUFRUSxJQUFJLENBQUNsQyxJQUFJLEdBQUdpQyxNQUFNakMsSUFBSTtZQUNoQztZQUVBLE9BQU8wQjtRQUNUO0lBQ0Y7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVleHktbXVpLW5leHRqcy1hZG1pbi10ZW1wbGF0ZS8uL3NyYy9saWJzL2F1dGguanM/YzQ2NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlyZC1wYXJ0eSBJbXBvcnRzXG5pbXBvcnQgQ3JlZGVudGlhbFByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQGF1dGgvcHJpc21hLWFkYXB0ZXInXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuXG4gIC8vICoqIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgLy8gKiogUGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL29wdGlvbnMjcHJvdmlkZXJzIGZvciBtb3JlIGBwcm92aWRlcnNgIG9wdGlvbnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbFByb3ZpZGVyKHtcbiAgICAgIC8vICoqIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiAnU2lnbiBpbiB3aXRoLi4uJylcbiAgICAgIC8vICoqIEZvciBtb3JlIGRldGFpbHMgb24gQ3JlZGVudGlhbHMgUHJvdmlkZXIsIHZpc2l0IGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9wcm92aWRlcnMvY3JlZGVudGlhbHNcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICB0eXBlOiAnY3JlZGVudGlhbHMnLFxuXG4gICAgICAvKlxuICAgICAgICogQXMgd2UgYXJlIHVzaW5nIG91ciBvd24gU2lnbi1pbiBwYWdlLCB3ZSBkbyBub3QgbmVlZCB0byBjaGFuZ2VcbiAgICAgICAqIHVzZXJuYW1lIG9yIHBhc3N3b3JkIGF0dHJpYnV0ZXMgbWFudWFsbHkgaW4gZm9sbG93aW5nIGNyZWRlbnRpYWxzIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgY3JlZGVudGlhbHM6IHt9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFlvdSBuZWVkIHRvIHByb3ZpZGUgeW91ciBvd24gbG9naWMgaGVyZSB0aGF0IHRha2VzIHRoZSBjcmVkZW50aWFscyBzdWJtaXR0ZWQgYW5kIHJldHVybnMgZWl0aGVyXG4gICAgICAgICAqIGFuIG9iamVjdCByZXByZXNlbnRpbmcgYSB1c2VyIG9yIHZhbHVlIHRoYXQgaXMgZmFsc2UvbnVsbCBpZiB0aGUgY3JlZGVudGlhbHMgYXJlIGludmFsaWQuXG4gICAgICAgICAqIEZvciBlLmcuIHJldHVybiB7IGlkOiAxLCBuYW1lOiAnSiBTbWl0aCcsIGVtYWlsOiAnanNtaXRoQGV4YW1wbGUuY29tJyB9XG4gICAgICAgICAqIFlvdSBjYW4gYWxzbyB1c2UgdGhlIGByZXFgIG9iamVjdCB0byBvYnRhaW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJzIChpLmUuLCB0aGUgcmVxdWVzdCBJUCBhZGRyZXNzKVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyAqKiBMb2dpbiBBUEkgQ2FsbCB0byBtYXRjaCB0aGUgdXNlciBjcmVkZW50aWFscyBhbmQgcmVjZWl2ZSB1c2VyIGRhdGEgaW4gcmVzcG9uc2UgYWxvbmcgd2l0aCBoaXMgcm9sZVxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2xvZ2luYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBQbGVhc2UgdW5zZXQgYWxsIHRoZSBzZW5zaXRpdmUgaW5mb3JtYXRpb24gb2YgdGhlIHVzZXIgZWl0aGVyIGZyb20gQVBJIHJlc3BvbnNlIG9yIGJlZm9yZSByZXR1cm5pbmdcbiAgICAgICAgICAgICAqIHVzZXIgZGF0YSBiZWxvdy4gQmVsb3cgcmV0dXJuIHN0YXRlbWVudCB3aWxsIHNldCB0aGUgdXNlciBvYmplY3QgaW4gdGhlIHRva2VuIGFuZCB0aGUgc2FtZSBpcyBzZXQgaW5cbiAgICAgICAgICAgICAqIHRoZSBzZXNzaW9uIHdoaWNoIHdpbGwgYmUgYWNjZXNzaWJsZSBhbGwgb3ZlciB0aGUgYXBwLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUXG4gICAgfSlcblxuICAgIC8vICoqIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gIF0sXG5cbiAgLy8gKiogUGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL29wdGlvbnMjc2Vzc2lvbiBmb3IgbW9yZSBgc2Vzc2lvbmAgb3B0aW9uc1xuICBzZXNzaW9uOiB7XG4gICAgLypcbiAgICAgKiBDaG9vc2UgaG93IHlvdSB3YW50IHRvIHNhdmUgdGhlIHVzZXIgc2Vzc2lvbi5cbiAgICAgKiBUaGUgZGVmYXVsdCBpcyBgand0YCwgYW4gZW5jcnlwdGVkIEpXVCAoSldFKSBzdG9yZWQgaW4gdGhlIHNlc3Npb24gY29va2llLlxuICAgICAqIElmIHlvdSB1c2UgYW4gYGFkYXB0ZXJgIGhvd2V2ZXIsIE5leHRBdXRoIGRlZmF1bHQgaXQgdG8gYGRhdGFiYXNlYCBpbnN0ZWFkLlxuICAgICAqIFlvdSBjYW4gc3RpbGwgZm9yY2UgYSBKV1Qgc2Vzc2lvbiBieSBleHBsaWNpdGx5IGRlZmluaW5nIGBqd3RgLlxuICAgICAqIFdoZW4gdXNpbmcgYGRhdGFiYXNlYCwgdGhlIHNlc3Npb24gY29va2llIHdpbGwgb25seSBjb250YWluIGEgYHNlc3Npb25Ub2tlbmAgdmFsdWUsXG4gICAgICogd2hpY2ggaXMgdXNlZCB0byBsb29rIHVwIHRoZSBzZXNzaW9uIGluIHRoZSBkYXRhYmFzZS5cbiAgICAgKiBJZiB5b3UgdXNlIGEgY3VzdG9tIGNyZWRlbnRpYWxzIHByb3ZpZGVyLCB1c2VyIGFjY291bnRzIHdpbGwgbm90IGJlIHBlcnNpc3RlZCBpbiBhIGRhdGFiYXNlIGJ5IE5leHRBdXRoLmpzIChldmVuIGlmIG9uZSBpcyBjb25maWd1cmVkKS5cbiAgICAgKiBUaGUgb3B0aW9uIHRvIHVzZSBKU09OIFdlYiBUb2tlbnMgZm9yIHNlc3Npb24gdG9rZW5zIG11c3QgYmUgZW5hYmxlZCB0byB1c2UgYSBjdXN0b20gY3JlZGVudGlhbHMgcHJvdmlkZXIuXG4gICAgICovXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuXG4gICAgLy8gKiogU2Vjb25kcyAtIEhvdyBsb25nIHVudGlsIGFuIGlkbGUgc2Vzc2lvbiBleHBpcmVzIGFuZCBpcyBubyBsb25nZXIgdmFsaWRcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwIC8vICoqIDMwIGRheXNcbiAgfSxcblxuICAvLyAqKiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9ucyNwYWdlcyBmb3IgbW9yZSBgcGFnZXNgIG9wdGlvbnNcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nXG4gIH0sXG5cbiAgLy8gKiogUGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL29wdGlvbnMjY2FsbGJhY2tzIGZvciBtb3JlIGBjYWxsYmFja3NgIG9wdGlvbnNcbiAgY2FsbGJhY2tzOiB7XG4gICAgLypcbiAgICAgKiBXaGlsZSB1c2luZyBgand0YCBhcyBhIHN0cmF0ZWd5LCBgand0KClgIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZVxuICAgICAqIHRoZSBgc2Vzc2lvbigpYCBjYWxsYmFjay4gU28gd2UgaGF2ZSB0byBhZGQgY3VzdG9tIHBhcmFtZXRlcnMgaW4gYHRva2VuYFxuICAgICAqIHZpYSBgand0KClgIGNhbGxiYWNrIHRvIG1ha2UgdGhlbSBhY2Nlc3NpYmxlIGluIHRoZSBgc2Vzc2lvbigpYCBjYWxsYmFja1xuICAgICAqL1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEZvciBhZGRpbmcgY3VzdG9tIHBhcmFtZXRlcnMgdG8gdXNlciBpbiBzZXNzaW9uLCB3ZSBmaXJzdCBuZWVkIHRvIGFkZCB0aG9zZSBwYXJhbWV0ZXJzXG4gICAgICAgICAqIGluIHRva2VuIHdoaWNoIHRoZW4gd2lsbCBiZSBhdmFpbGFibGUgaW4gdGhlIGBzZXNzaW9uKClgIGNhbGxiYWNrXG4gICAgICAgICAqL1xuICAgICAgICB0b2tlbi5uYW1lID0gdXNlci5uYW1lXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgLy8gKiogQWRkIGN1c3RvbSBwYXJhbXMgdG8gdXNlciBpbiBzZXNzaW9uIHdoaWNoIGFyZSBhZGRlZCBpbiBgand0KClgIGNhbGxiYWNrIHZpYSBgdG9rZW5gIHBhcmFtZXRlclxuICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwidHlwZSIsImNyZWRlbnRpYWxzIiwiYXV0aG9yaXplIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsIkVycm9yIiwiZSIsIm1lc3NhZ2UiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5Ctemplates%5Cthemeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated%5Cvuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0%5Cnext-version%5Cjavascript-version%5Cfull-version%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Ctemplates%5Cthemeforest-NOi8Ww2n-vuexy-vuejs-html-laravel-admin-dashboard-template_updated%5Cvuexy-vuejs-html-laravel-admin-dashboard-template-v10.0.0%5Cnext-version%5Cjavascript-version%5Cfull-version&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();