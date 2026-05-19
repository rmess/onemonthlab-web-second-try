(() => {
var exports = {};
exports.id = "app/page";
exports.ids = ["app/page"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-page/module.compiled */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?0264");
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-kind.js");
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/error-boundary.js");
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/app-render/entry-base.js");
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/page.tsx */ "(rsc)/./app/page.tsx")), "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/layout.tsx */ "(rsc)/./app/layout.tsx")), "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx"],
'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/not-found-error.js", 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/home/ubuntu/declic_agency/nextjs_space/app/page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fbooking-section.tsx%22%2C%22ids%22%3A%5B%22BookingSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fcontact-section.tsx%22%2C%22ids%22%3A%5B%22ContactSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fcta-section.tsx%22%2C%22ids%22%3A%5B%22CtaSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Ffaq-section.tsx%22%2C%22ids%22%3A%5B%22FaqSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Ffooter.tsx%22%2C%22ids%22%3A%5B%22Footer%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fheader.tsx%22%2C%22ids%22%3A%5B%22Header%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fhero-section.tsx%22%2C%22ids%22%3A%5B%22HeroSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fpricing-section.tsx%22%2C%22ids%22%3A%5B%22PricingSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fproblem-section.tsx%22%2C%22ids%22%3A%5B%22ProblemSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fprocess-section.tsx%22%2C%22ids%22%3A%5B%22ProcessSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Freassurance-section.tsx%22%2C%22ids%22%3A%5B%22ReassuranceSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fsolution-section.tsx%22%2C%22ids%22%3A%5B%22SolutionSection%22%5D%7D&server=true!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fbooking-section.tsx%22%2C%22ids%22%3A%5B%22BookingSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fcontact-section.tsx%22%2C%22ids%22%3A%5B%22ContactSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fcta-section.tsx%22%2C%22ids%22%3A%5B%22CtaSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Ffaq-section.tsx%22%2C%22ids%22%3A%5B%22FaqSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Ffooter.tsx%22%2C%22ids%22%3A%5B%22Footer%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fheader.tsx%22%2C%22ids%22%3A%5B%22Header%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fhero-section.tsx%22%2C%22ids%22%3A%5B%22HeroSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fpricing-section.tsx%22%2C%22ids%22%3A%5B%22PricingSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fproblem-section.tsx%22%2C%22ids%22%3A%5B%22ProblemSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fprocess-section.tsx%22%2C%22ids%22%3A%5B%22ProcessSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Freassurance-section.tsx%22%2C%22ids%22%3A%5B%22ReassuranceSection%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2F_components%2Fsolution-section.tsx%22%2C%22ids%22%3A%5B%22SolutionSection%22%5D%7D&server=true! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/booking-section.tsx */ "(ssr)/./app/_components/booking-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/contact-section.tsx */ "(ssr)/./app/_components/contact-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/cta-section.tsx */ "(ssr)/./app/_components/cta-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/faq-section.tsx */ "(ssr)/./app/_components/faq-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/footer.tsx */ "(ssr)/./app/_components/footer.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/header.tsx */ "(ssr)/./app/_components/header.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/hero-section.tsx */ "(ssr)/./app/_components/hero-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/pricing-section.tsx */ "(ssr)/./app/_components/pricing-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/problem-section.tsx */ "(ssr)/./app/_components/problem-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/process-section.tsx */ "(ssr)/./app/_components/process-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/reassurance-section.tsx */ "(ssr)/./app/_components/reassurance-section.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/_components/solution-section.tsx */ "(ssr)/./app/_components/solution-section.tsx"));


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fcomponents%2Fchunk-load-error-handler.tsx%22%2C%22ids%22%3A%5B%22ChunkLoadErrorHandler%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fcomponents%2Fproviders.tsx%22%2C%22ids%22%3A%5B%22Providers%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fcomponents%2Ftheme-provider.tsx%22%2C%22ids%22%3A%5B%22ThemeProvider%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fcomponents%2Fui%2Fsonner.tsx%22%2C%22ids%22%3A%5B%22Toaster%22%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22DM_Sans%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%2C%5C%22variable%5C%22%3A%5C%22--font-sans%5C%22%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22dmSans%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Plus_Jakarta_Sans%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%2C%5C%22variable%5C%22%3A%5C%22--font-display%5C%22%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22jakartaSans%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22JetBrains_Mono%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%2C%5C%22variable%5C%22%3A%5C%22--font-mono%5C%22%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22jetbrainsMono%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fcomponents%2Fchunk-load-error-handler.tsx%22%2C%22ids%22%3A%5B%22ChunkLoadErrorHandler%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fcomponents%2Fproviders.tsx%22%2C%22ids%22%3A%5B%22Providers%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fcomponents%2Ftheme-provider.tsx%22%2C%22ids%22%3A%5B%22ThemeProvider%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fcomponents%2Fui%2Fsonner.tsx%22%2C%22ids%22%3A%5B%22Toaster%22%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22DM_Sans%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%2C%5C%22variable%5C%22%3A%5C%22--font-sans%5C%22%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22dmSans%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Plus_Jakarta_Sans%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%2C%5C%22variable%5C%22%3A%5C%22--font-display%5C%22%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22jakartaSans%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22JetBrains_Mono%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%2C%5C%22variable%5C%22%3A%5C%22--font-mono%5C%22%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22jetbrainsMono%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/chunk-load-error-handler.tsx */ "(ssr)/./components/chunk-load-error-handler.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/providers.tsx */ "(ssr)/./components/providers.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/theme-provider.tsx */ "(ssr)/./components/theme-provider.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/ui/sonner.tsx */ "(ssr)/./components/ui/sonner.tsx"));


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fopt%2Fhostedapp%2Fnode%2Froot%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/app-router.js */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/app-router.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/client-page.js */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/client-page.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/error-boundary.js */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/error-boundary.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/layout-router.js */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/layout-router.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/not-found-boundary.js */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/not-found-boundary.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/render-from-template-context.js */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/client/components/render-from-template-context.js", 23));


/***/ }),

/***/ "(ssr)/./app/_components/booking-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/booking-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingSection: () => (/* binding */ BookingSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/arrow-left.js");
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/clock.js");
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/user.js");
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var _barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeft,ArrowRight,Calendar,CheckCircle,Clock,Loader2,Mail,Phone,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/phone.js");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/input */ "(ssr)/./components/ui/input.tsx");
/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/label */ "(ssr)/./components/ui/label.tsx");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sonner */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/sonner/dist/index.mjs");
/* __next_internal_client_entry_do_not_use__ BookingSection auto */ 









const TIME_SLOTS = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00"
];
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}
const MONTH_NAMES = [
    "Janvier",
    "F\xe9vrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Ao\xfbt",
    "Septembre",
    "Octobre",
    "Novembre",
    "D\xe9cembre"
];
const DAY_NAMES = [
    "Dim",
    "Lun",
    "Mar",
    "Mer",
    "Jeu",
    "Ven",
    "Sam"
];
function BookingSection() {
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("date");
    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedTime, setSelectedTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [bookedSlots, setBookedSlots] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentMonth, setCurrentMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [currentYear, setCurrentYear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        customerName: "",
        email: "",
        phone: ""
    });
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const now = new Date();
        setCurrentMonth(now.getMonth());
        setCurrentYear(now.getFullYear());
        setMounted(true);
    }, []);
    const fetchBookedSlots = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (date)=>{
        try {
            const dateStr = date.toISOString().split("T")[0];
            const res = await fetch(`/api/booking?date=${dateStr}`);
            const data = await res.json();
            setBookedSlots(Array.isArray(data) ? data : []);
        } catch  {
            setBookedSlots([]);
        }
    }, []);
    const handleDateSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((day)=>{
        const date = new Date(currentYear, currentMonth, day);
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        if (date < now) return;
        if (date.getDay() === 0 || date.getDay() === 6) return;
        setSelectedDate(date);
        setSelectedTime("");
        fetchBookedSlots(date);
    }, [
        currentYear,
        currentMonth,
        fetchBookedSlots
    ]);
    const handleTimeSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((time)=>{
        setSelectedTime(time);
    }, []);
    const validate = ()=>{
        const errs = {};
        if ((formData.customerName?.length ?? 0) < 2) errs.customerName = "Nom requis";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email ?? "")) errs.email = "Email invalide";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };
    const handleSubmit = async (e)=>{
        e?.preventDefault?.();
        if (!validate() || !selectedDate || !selectedTime) return;
        setLoading(true);
        try {
            const dateStr = selectedDate.toISOString().split("T")[0];
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    date: dateStr,
                    timeSlot: selectedTime,
                    serviceType: "diagnostic"
                })
            });
            const data = await res.json();
            if (res.ok && data?.success) {
                setStep("success");
                sonner__WEBPACK_IMPORTED_MODULE_8__.toast.success("R\xe9servation confirm\xe9e !");
            } else {
                sonner__WEBPACK_IMPORTED_MODULE_8__.toast.error(data?.error ?? "Erreur lors de la r\xe9servation");
            }
        } catch  {
            sonner__WEBPACK_IMPORTED_MODULE_8__.toast.error("Erreur de connexion. R\xe9essayez.");
        } finally{
            setLoading(false);
        }
    };
    const goToPrevMonth = ()=>{
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };
    const goToNextMonth = ()=>{
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };
    if (!mounted) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_3__.Section, {
            id: "booking",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_2__.Container, {
                size: "md",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "h-96 flex items-center justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        className: "w-6 h-6 animate-spin text-primary"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this);
    }
    if (step === "success") {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_3__.Section, {
            id: "booking",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_2__.Container, {
                size: "md",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "bg-card rounded-xl p-8 sm:p-12 shadow-sm text-center max-w-xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    className: "w-8 h-8 text-green-600"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                className: "font-display text-2xl font-bold text-foreground mb-2",
                                children: "R\xe9servation confirm\xe9e !"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-muted-foreground mb-2",
                                children: [
                                    "Votre diagnostic gratuit est r\xe9serv\xe9 pour le",
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "font-semibold text-foreground",
                                        children: selectedDate?.toLocaleDateString?.("fr-FR", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "long"
                                        }) ?? ""
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "\xe0 ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "font-semibold text-foreground",
                                        children: selectedTime
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-sm text-muted-foreground",
                                children: "On vous enverra un email de confirmation avec tous les d\xe9tails."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
            lineNumber: 150,
            columnNumber: 7
        }, this);
    }
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_3__.Section, {
        id: "booking",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_2__.Container, {
            size: "md",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    className: "w-6 h-6 text-primary"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                                children: [
                                    "R\xe9servez votre ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-primary",
                                        children: "diagnostic gratuit"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 189,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-4 text-lg text-muted-foreground",
                                children: "30 minutes pour discuter de votre projet. Sans engagement, sans pression."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.FadeIn, {
                    delay: 0.15,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "bg-card rounded-xl p-6 sm:p-8 shadow-sm max-w-2xl mx-auto",
                        children: [
                            step === "date" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                        onClick: goToPrevMonth,
                                                        className: "p-2 rounded-lg hover:bg-accent transition-colors",
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                        className: "font-display font-semibold text-foreground",
                                                        children: [
                                                            MONTH_NAMES[currentMonth] ?? "",
                                                            " ",
                                                            currentYear
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                        onClick: goToNextMonth,
                                                        className: "p-2 rounded-lg hover:bg-accent transition-colors",
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "grid grid-cols-7 gap-1 mb-2",
                                                children: DAY_NAMES.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "text-center text-xs font-medium text-muted-foreground py-1",
                                                        children: d
                                                    }, d, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "grid grid-cols-7 gap-1",
                                                children: [
                                                    Array.from({
                                                        length: firstDay
                                                    }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, `empty-${i}`, false, {
                                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, this)),
                                                    Array.from({
                                                        length: daysInMonth
                                                    }, (_, i)=>{
                                                        const day = i + 1;
                                                        const date = new Date(currentYear, currentMonth, day);
                                                        const isPast = date < today;
                                                        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                                                        const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth && selectedDate?.getFullYear() === currentYear;
                                                        const isDisabled = isPast || isWeekend;
                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                            onClick: ()=>!isDisabled && handleDateSelect(day),
                                                            disabled: isDisabled,
                                                            className: `p-2 text-sm rounded-lg transition-all ${isSelected ? "bg-primary text-primary-foreground font-semibold" : isDisabled ? "text-muted-foreground/40 cursor-not-allowed" : "hover:bg-accent text-foreground cursor-pointer"}`,
                                                            children: day
                                                        }, day, false, {
                                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    selectedDate && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "border-t border-border pt-5",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                                className: "flex items-center gap-2 font-medium text-foreground mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                        className: "w-4 h-4 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Choisir un cr\xe9neau"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 256,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "grid grid-cols-3 sm:grid-cols-4 gap-2",
                                                children: TIME_SLOTS.map((time)=>{
                                                    const isBooked = bookedSlots?.includes?.(time);
                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                        onClick: ()=>!isBooked && handleTimeSelect(time),
                                                        disabled: isBooked,
                                                        className: `py-2 px-3 rounded-lg text-sm font-medium transition-all ${selectedTime === time ? "bg-primary text-primary-foreground" : isBooked ? "bg-muted text-muted-foreground/50 cursor-not-allowed line-through" : "bg-accent hover:bg-primary/20 text-foreground cursor-pointer"}`,
                                                        children: time
                                                    }, time, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 260,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 255,
                                        columnNumber: 19
                                    }, this),
                                    selectedDate && selectedTime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "mt-6",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                            className: "w-full",
                                            onClick: ()=>setStep("form"),
                                            children: [
                                                "Continuer ",
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                    className: "w-4 h-4 ml-2"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                            lineNumber: 286,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 285,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this),
                            step === "form" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                        type: "button",
                                        onClick: ()=>setStep("date"),
                                        className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            " Changer le cr\xe9neau"
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "bg-accent/50 rounded-lg p-3 text-sm text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "font-medium",
                                                children: selectedDate?.toLocaleDateString?.("fr-FR", {
                                                    weekday: "long",
                                                    day: "numeric",
                                                    month: "long"
                                                }) ?? ""
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 305,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "\xe0 ",
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "font-medium",
                                                children: selectedTime
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 308,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 304,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_7__.Label, {
                                                htmlFor: "booking-name",
                                                className: "flex items-center gap-2 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                        className: "w-4 h-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Votre nom"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                                id: "booking-name",
                                                placeholder: "Marie Dupont",
                                                value: formData.customerName,
                                                onChange: (e)=>setFormData({
                                                        ...formData ?? {},
                                                        customerName: e?.target?.value ?? ""
                                                    }),
                                                variant: errors.customerName ? "error" : "default",
                                                className: "pl-4"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this),
                                            errors.customerName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                className: "text-xs text-destructive mt-1",
                                                children: errors.customerName
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 323,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_7__.Label, {
                                                htmlFor: "booking-email",
                                                className: "flex items-center gap-2 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                        className: "w-4 h-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Votre email"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 327,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                                id: "booking-email",
                                                type: "email",
                                                placeholder: "marie@exemple.fr",
                                                value: formData.email,
                                                onChange: (e)=>setFormData({
                                                        ...formData ?? {},
                                                        email: e?.target?.value ?? ""
                                                    }),
                                                variant: errors.email ? "error" : "default",
                                                className: "pl-4"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, this),
                                            errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                className: "text-xs text-destructive mt-1",
                                                children: errors.email
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 339,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_7__.Label, {
                                                htmlFor: "booking-phone",
                                                className: "flex items-center gap-2 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                                        className: "w-4 h-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this),
                                                    " T\xe9l\xe9phone ",
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-muted-foreground text-xs",
                                                        children: "(optionnel)"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 83
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 343,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                                id: "booking-phone",
                                                type: "tel",
                                                placeholder: "06 12 34 56 78",
                                                value: formData.phone,
                                                onChange: (e)=>setFormData({
                                                        ...formData ?? {},
                                                        phone: e?.target?.value ?? ""
                                                    }),
                                                className: "pl-4"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 342,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        type: "submit",
                                        className: "w-full",
                                        disabled: loading,
                                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                    className: "w-4 h-4 mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 23
                                                }, this),
                                                " R\xe9servation en cours..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeft_ArrowRight_Calendar_CheckCircle_Clock_Loader2_Mail_Phone_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 23
                                                }, this),
                                                " Confirmer la r\xe9servation"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 356,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                        className: "text-xs text-muted-foreground text-center",
                                        children: "Diagnostic gratuit de 30 minutes. Sans engagement."
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/contact-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/contact-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactSection: () => (/* binding */ ContactSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Loader2,Mail,MessageSquare,Phone,Send,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* harmony import */ var _barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Loader2,Mail,MessageSquare,Phone,Send,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/user.js");
/* harmony import */ var _barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Loader2,Mail,MessageSquare,Phone,Send,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var _barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Loader2,Mail,MessageSquare,Phone,Send,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/phone.js");
/* harmony import */ var _barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Loader2,Mail,MessageSquare,Phone,Send,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/message-square.js");
/* harmony import */ var _barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Loader2,Mail,MessageSquare,Phone,Send,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var _barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Loader2,Mail,MessageSquare,Phone,Send,User!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/send.js");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/input */ "(ssr)/./components/ui/input.tsx");
/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/textarea */ "(ssr)/./components/ui/textarea.tsx");
/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/label */ "(ssr)/./components/ui/label.tsx");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sonner */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/sonner/dist/index.mjs");
/* __next_internal_client_entry_do_not_use__ ContactSection auto */ 










function ContactSection() {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: ""
    });
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const validate = ()=>{
        const errs = {};
        if ((formData.name?.length ?? 0) < 2) errs.name = "Nom requis (min 2 caract\xe8res)";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email ?? "")) errs.email = "Email invalide";
        if ((formData.message?.length ?? 0) < 10) errs.message = "Message trop court (min 10 caract\xe8res)";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };
    const handleSubmit = async (e)=>{
        e?.preventDefault?.();
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok && data?.success) {
                setSuccess(true);
                sonner__WEBPACK_IMPORTED_MODULE_9__.toast.success("Message envoy\xe9 avec succ\xe8s !");
            } else {
                sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error(data?.error ?? "Erreur lors de l'envoi");
            }
        } catch  {
            sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error("Erreur de connexion. R\xe9essayez.");
        } finally{
            setLoading(false);
        }
    };
    if (success) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_3__.Section, {
            id: "contact",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_2__.Container, {
                size: "md",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "bg-card rounded-xl p-8 sm:p-12 shadow-sm text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    className: "w-8 h-8 text-green-600"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                className: "font-display text-2xl font-bold text-foreground mb-2",
                                children: "Message envoy\xe9 !"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-muted-foreground mb-4",
                                children: "Merci pour votre message. On vous r\xe9pond sous 24 heures, c'est promis."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "En attendant, vous pouvez d\xe9j\xe0 ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                        href: "#booking",
                                        className: "text-primary font-medium hover:underline",
                                        children: "r\xe9server un diagnostic gratuit"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 73,
                                        columnNumber: 48
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_3__.Section, {
        id: "contact",
        className: "bg-secondary/30",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_2__.Container, {
            size: "md",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                                children: [
                                    "Une question ? ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-primary",
                                        children: "Parlons-en."
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 88,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-4 text-lg text-muted-foreground",
                                children: "Pas de formulaire interminable. Juste l'essentiel pour qu'on puisse vous aider."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.SlideIn, {
                    from: "bottom",
                    delay: 0.15,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                        onSubmit: handleSubmit,
                        className: "bg-card rounded-xl p-6 sm:p-8 shadow-sm space-y-5 max-w-xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "sr-only",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                    type: "text",
                                    name: "website",
                                    tabIndex: -1,
                                    autoComplete: "off",
                                    value: formData.honeypot,
                                    onChange: (e)=>setFormData({
                                            ...formData ?? {},
                                            honeypot: e?.target?.value ?? ""
                                        })
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_8__.Label, {
                                        htmlFor: "name",
                                        className: "flex items-center gap-2 mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            " Votre nom"
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                        id: "name",
                                        placeholder: "Marie Dupont",
                                        value: formData.name,
                                        onChange: (e)=>setFormData({
                                                ...formData ?? {},
                                                name: e?.target?.value ?? ""
                                            }),
                                        variant: errors.name ? "error" : "default",
                                        className: "pl-4"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                        className: "text-xs text-destructive mt-1",
                                        children: errors.name
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 122,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_8__.Label, {
                                        htmlFor: "email",
                                        className: "flex items-center gap-2 mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            " Votre email"
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                        id: "email",
                                        type: "email",
                                        placeholder: "marie@exemple.fr",
                                        value: formData.email,
                                        onChange: (e)=>setFormData({
                                                ...formData ?? {},
                                                email: e?.target?.value ?? ""
                                            }),
                                        variant: errors.email ? "error" : "default",
                                        className: "pl-4"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                        className: "text-xs text-destructive mt-1",
                                        children: errors.email
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 138,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_8__.Label, {
                                        htmlFor: "phone",
                                        className: "flex items-center gap-2 mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            " T\xe9l\xe9phone ",
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-muted-foreground text-xs",
                                                children: "(optionnel)"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                                lineNumber: 143,
                                                columnNumber: 79
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {
                                        id: "phone",
                                        type: "tel",
                                        placeholder: "06 12 34 56 78",
                                        value: formData.phone,
                                        onChange: (e)=>setFormData({
                                                ...formData ?? {},
                                                phone: e?.target?.value ?? ""
                                            }),
                                        className: "pl-4"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_8__.Label, {
                                        htmlFor: "message",
                                        className: "flex items-center gap-2 mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            " Votre message"
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_7__.Textarea, {
                                        id: "message",
                                        placeholder: "Parlez-nous de votre projet, de votre id\xe9e, de vos questions...",
                                        rows: 4,
                                        value: formData.message,
                                        onChange: (e)=>setFormData({
                                                ...formData ?? {},
                                                message: e?.target?.value ?? ""
                                            }),
                                        variant: errors.message ? "error" : "default"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    errors.message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                        className: "text-xs text-destructive mt-1",
                                        children: errors.message
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                        lineNumber: 167,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                type: "submit",
                                className: "w-full",
                                disabled: loading,
                                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                            className: "w-4 h-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        " Envoi en cours..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Loader2_Mail_MessageSquare_Phone_Send_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this),
                                        " Envoyer le message"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-xs text-muted-foreground text-center",
                                children: "Vos donn\xe9es sont utilis\xe9es uniquement pour vous recontacter. Aucun spam."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/cta-section.tsx":
/*!*****************************************!*\
  !*** ./app/_components/cta-section.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CtaSection: () => (/* binding */ CtaSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ArrowRight_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Sparkles!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/sparkles.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Sparkles!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* __next_internal_client_entry_do_not_use__ CtaSection auto */ 





function CtaSection() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_2__.Section, {
        className: "bg-gradient-to-br from-primary/5 via-background to-accent/30",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_1__.Container, {
            size: "md",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                className: "w-6 h-6 text-primary"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                            className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                            children: [
                                "Pr\xeat \xe0 transformer votre id\xe9e en ",
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-primary",
                                    children: "r\xe9alit\xe9"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                                    lineNumber: 19,
                                    columnNumber: 48
                                }, this),
                                " ?"
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            className: "mt-4 text-lg text-muted-foreground max-w-lg mx-auto",
                            children: "Commen\xe7ons par un diagnostic gratuit de 30 minutes. On discute de votre projet, sans engagement."
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    size: "lg",
                                    asChild: true,
                                    className: "text-base px-8",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                        href: "#booking",
                                        children: [
                                            "R\xe9server un diagnostic gratuit",
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                className: "w-4 h-4 ml-2"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    size: "lg",
                                    variant: "outline",
                                    asChild: true,
                                    className: "text-base px-8",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                        href: "#pricing",
                                        children: "D\xe9couvrir les offres"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/faq-section.tsx":
/*!*****************************************!*\
  !*** ./app/_components/faq-section.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqSection: () => (/* binding */ FaqSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* harmony import */ var _components_ui_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/accordion */ "(ssr)/./components/ui/accordion.tsx");
/* harmony import */ var _barrel_optimize_names_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=HelpCircle!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/circle-help.js");
/* __next_internal_client_entry_do_not_use__ FaqSection auto */ 





const faqs = [
    {
        q: "Je n'y connais rien en web, c'est grave ?",
        a: "Pas du tout ! C'est m\xeame notre sp\xe9cialit\xe9. On vous accompagne de A \xe0 Z et on vous explique tout en langage simple. Pas besoin de savoir coder ou de comprendre le \"SEO\" — on s'en charge."
    },
    {
        q: "C'est trop cher pour moi, non ?",
        a: "Nos tarifs commencent \xe0 390€ HT pour une landing page. C'est un investissement, pas une d\xe9pense. Et pour les packs D\xe9clic et Acc\xe9l\xe9rateur, vous pouvez payer en 4 fois sans frais."
    },
    {
        q: "Combien de temps \xe7a prend ?",
        a: "En g\xe9n\xe9ral, votre site est pr\xeat en 3 semaines. La landing page du Pack Essai peut \xeatre pr\xeate en 1 semaine. On respecte nos d\xe9lais."
    },
    {
        q: "Et si mon id\xe9e ne marche pas ?",
        a: "C'est pour \xe7a qu'on a cr\xe9\xe9 le Pack Essai \xe0 390€. Vous testez votre id\xe9e avec une landing page sans prendre de risque. Si \xe7a marche, on passe \xe0 la vitesse sup\xe9rieure."
    },
    {
        q: "Combien \xe7a co\xfbte vraiment, au total ?",
        a: 'Le prix affich\xe9 est le prix final. Pas de frais de setup, pas de "options obligatoires", pas de surprises \xe0 la facture. Apr\xe8s la p\xe9riode de maintenance gratuite, la maintenance d\xe9marre \xe0 29€/mois si vous le souhaitez.'
    },
    {
        q: "Je n'ai vraiment pas le temps, comment \xe7a se passe ?",
        a: "On a besoin de vous pour 2-3 \xe9changes de 30 minutes et la formation de 45 minutes. Le reste, c'est notre travail. On s'adapte \xe0 vos horaires."
    },
    {
        q: "Qu'est-ce qui est inclus dans la maintenance ?",
        a: "H\xe9bergement, mises \xe0 jour de s\xe9curit\xe9, corrections de bugs, petites modifications de contenu et support par email. Tout ce qu'il faut pour que votre site tourne bien."
    },
    {
        q: "Je peux modifier mon site moi-m\xeame apr\xe8s ?",
        a: "Oui ! On vous forme pour que vous puissiez g\xe9rer votre contenu en autonomie. Et si vous \xeates bloqu\xe9, on est toujours l\xe0 pour vous aider."
    }
];
function FaqSection() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_2__.Section, {
        id: "faq",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_1__.Container, {
            size: "md",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    className: "w-6 h-6 text-primary"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                                children: [
                                    "Vos questions, nos ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-primary",
                                        children: "r\xe9ponses honn\xeates"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                                        lineNumber: 54,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                    delay: 0.15,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion, {
                        type: "single",
                        collapsible: true,
                        className: "w-full",
                        children: faqs.map((faq, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionItem, {
                                value: `faq-${i}`,
                                className: "border-border/50",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionTrigger, {
                                        className: "text-left font-medium text-foreground hover:no-underline hover:text-primary py-5 text-base",
                                        children: faq.q
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionContent, {
                                        className: "text-muted-foreground leading-relaxed text-base pb-5",
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/footer.tsx":
/*!************************************!*\
  !*** ./app/_components/footer.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_Mail_MapPin_Phone_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Mail,MapPin,Phone,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var _barrel_optimize_names_Mail_MapPin_Phone_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Mail,MapPin,Phone,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var _barrel_optimize_names_Mail_MapPin_Phone_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Mail,MapPin,Phone,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var _barrel_optimize_names_Mail_MapPin_Phone_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Mail,MapPin,Phone,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/phone.js");
/* __next_internal_client_entry_do_not_use__ Footer auto */ 

function Footer() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "bg-foreground text-background py-12",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center gap-2 font-display text-xl font-bold mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mail_MapPin_Phone_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                            lineNumber: 13,
                                            columnNumber: 15
                                        }, this),
                                        "D\xe9clic"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-sm text-background/70 leading-relaxed",
                                    children: "Agence web bienveillante qui aide les artisans et entrepreneurs \xe0 passer de l'id\xe9e au premier client."
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "font-display font-semibold mb-4",
                                    children: "Liens rapides"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                    className: "space-y-2 text-sm text-background/70",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                                href: "#solution",
                                                className: "hover:text-primary transition-colors",
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                                href: "#pricing",
                                                className: "hover:text-primary transition-colors",
                                                children: "Tarifs"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                                href: "#contact",
                                                className: "hover:text-primary transition-colors",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                                href: "#booking",
                                                className: "hover:text-primary transition-colors",
                                                children: "Diagnostic gratuit"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "font-display font-semibold mb-4",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                    className: "space-y-2 text-sm text-background/70",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mail_MapPin_Phone_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    className: "w-4 h-4 text-primary flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this),
                                                "27 rue Montmorency, 34200 S\xe8te"
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mail_MapPin_Phone_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                    className: "w-4 h-4 text-primary flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this),
                                                "contact@declic.fr"
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mail_MapPin_Phone_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                    className: "w-4 h-4 text-primary flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                "+33 4 67 00 00 00"
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            className: "text-xs text-background/50",
                            children: [
                                "\xa9 ",
                                new Date().getFullYear(),
                                " D\xe9clic. Tous droits r\xe9serv\xe9s."
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex gap-4 text-xs text-background/50",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    children: "CGV"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    children: "Mentions l\xe9gales"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    children: "Confidentialit\xe9"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/header.tsx":
/*!************************************!*\
  !*** ./app/_components/header.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _barrel_optimize_names_Menu_X_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,X,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var _barrel_optimize_names_Menu_X_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,X,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _barrel_optimize_names_Menu_X_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,X,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/menu.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* __next_internal_client_entry_do_not_use__ Header auto */ 




const navLinks = [
    {
        label: "Services",
        href: "#solution"
    },
    {
        label: "Comment \xe7a marche",
        href: "#process"
    },
    {
        label: "Tarifs",
        href: "#pricing"
    },
    {
        label: "FAQ",
        href: "#faq"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
function Header() {
    const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            href: "#",
                            className: "flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    className: "w-6 h-6 text-primary"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                "D\xe9clic"
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                            className: "hidden md:flex items-center gap-1",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                    href: link.href,
                                    className: "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent",
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "hidden md:flex items-center gap-3",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                size: "sm",
                                asChild: true,
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                    href: "#booking",
                                    children: "Diagnostic gratuit"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            className: "md:hidden p-2 text-foreground",
                            onClick: ()=>setMobileOpen(!mobileOpen),
                            "aria-label": "Menu",
                            children: mobileOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                lineNumber: 51,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                lineNumber: 51,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {
                children: mobileOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden bg-background border-b border-border overflow-hidden",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                        className: "px-4 py-4 flex flex-col gap-2",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                    href: link.href,
                                    onClick: ()=>setMobileOpen(false),
                                    className: "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent",
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                size: "sm",
                                className: "mt-2",
                                asChild: true,
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                    href: "#booking",
                                    onClick: ()=>setMobileOpen(false),
                                    children: "Diagnostic gratuit"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/hero-section.tsx":
/*!******************************************!*\
  !*** ./app/_components/hero-section.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroSection: () => (/* binding */ HeroSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ArrowRight_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Sparkles!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/sparkles.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Sparkles!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* __next_internal_client_entry_do_not_use__ HeroSection auto */ 




function HeroSection() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/30 -z-10"
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_3__.Container, {
                size: "lg",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-3xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_2__.FadeIn, {
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    "Agence web bienveillante \xe0 S\xe8te"
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_2__.SlideIn, {
                            from: "bottom",
                            delay: 0.1,
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                                className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight",
                                children: [
                                    "De l'id\xe9e au ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-primary",
                                        children: "premier client"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                        lineNumber: 27,
                                        columnNumber: 28
                                    }, this),
                                    " en 3 semaines"
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_2__.FadeIn, {
                            delay: 0.2,
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto",
                                children: [
                                    "Sans jargon. Sans peur. Sans d\xe9penser trop.",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
                                        className: "hidden sm:block"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    "On vous accompagne de A \xe0 Z pour lancer votre activit\xe9 en ligne."
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_2__.FadeIn, {
                            delay: 0.3,
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        size: "lg",
                                        asChild: true,
                                        className: "text-base px-8",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                            href: "#pricing",
                                            children: [
                                                "D\xe9couvrir les offres",
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                    className: "w-4 h-4 ml-2"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        size: "lg",
                                        variant: "outline",
                                        asChild: true,
                                        className: "text-base px-8",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                            href: "#booking",
                                            children: "Diagnostic gratuit"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_2__.FadeIn, {
                            delay: 0.4,
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-8 text-sm text-muted-foreground",
                                children: [
                                    "\xc0 partir de ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "font-semibold text-foreground",
                                        children: "390€ HT"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                        lineNumber: 55,
                                        columnNumber: 27
                                    }, this),
                                    " \xb7 Paiement en 4 fois possible"
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/pricing-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/pricing-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingSection: () => (/* binding */ PricingSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_ArrowRight_Check_Star_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Check,Star!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/star.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Check_Star_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Check,Star!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Check_Star_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Check,Star!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* __next_internal_client_entry_do_not_use__ PricingSection auto */ 







const plans = [
    {
        name: "Pack Essai",
        price: 390,
        period: "HT",
        description: "Tester une id\xe9e sans risque",
        featured: false,
        installments: false,
        features: [
            "Landing page standalone",
            "Design responsive moderne",
            "1 mois de maintenance gratuite",
            "Mise en ligne en 1 semaine"
        ]
    },
    {
        name: "Pack D\xe9clic",
        price: 890,
        period: "HT",
        description: "Lancement officiel + premiers clients",
        featured: true,
        installments: true,
        installmentPrice: 222.5,
        features: [
            "Site complet 5 pages",
            "Int\xe9gration Google Maps",
            "Bouton WhatsApp",
            "Formation 45 min (utilisation + bases)",
            "Syst\xe8me de r\xe9servation (sync Google Calendar)",
            "Formulaire de contact + notifications",
            "3 mois de maintenance gratuite"
        ]
    },
    {
        name: "Pack Acc\xe9l\xe9rateur",
        price: 1690,
        period: "HT",
        description: "Scale avec confiance + positionnement premium",
        featured: false,
        installments: true,
        installmentPrice: 422.5,
        features: [
            "Tout du Pack D\xe9clic +",
            "Coaching 1-to-1 (strat\xe9gie 10 premiers clients)",
            "Service de copywriting (pages, emails)",
            "Design logo simple",
            "Blog pour content marketing",
            "6 mois de maintenance gratuite"
        ]
    }
];
function PricingSection() {
    const [showInstallments, setShowInstallments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_3__.Section, {
        id: "pricing",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_2__.Container, {
            size: "lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center max-w-2xl mx-auto mb-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                                children: [
                                    "Des offres honn\xeates pour ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-primary",
                                        children: "tous les budgets"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                        lineNumber: 72,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-4 text-lg text-muted-foreground",
                                children: "Pas de co\xfbts cach\xe9s. Pas de mauvaises surprises. Juste des prix justes pour un travail de qualit\xe9."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.FadeIn, {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex justify-center mb-10",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "inline-flex items-center gap-3 bg-secondary rounded-full p-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    onClick: ()=>setShowInstallments(false),
                                    className: `px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!showInstallments ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                                    children: "Paiement unique"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    onClick: ()=>setShowInstallments(true),
                                    className: `px-4 py-1.5 rounded-full text-sm font-medium transition-all ${showInstallments ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                                    children: "En 4 fois"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.Stagger, {
                    staggerDelay: 0.12,
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch",
                    children: plans.map((plan, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.StaggerItem, {
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: `relative bg-card rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all h-full flex flex-col ${plan.featured ? "ring-2 ring-primary shadow-md" : ""}`,
                                children: [
                                    plan.featured && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__.Badge, {
                                        className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Check_Star_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                className: "w-3 h-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this),
                                            " Recommand\xe9"
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                className: "font-display text-xl font-semibold text-foreground",
                                                children: plan.name
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                className: "text-sm text-muted-foreground mt-1",
                                                children: plan.description
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-baseline gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "font-display text-4xl font-bold text-foreground",
                                                        children: showInstallments && plan.installments ? `${plan.installmentPrice?.toFixed?.(0) ?? plan.price}€` : `${plan.price}€`
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-muted-foreground text-sm",
                                                        children: showInstallments && plan.installments ? "/mois \xd7 4" : plan.period
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            !plan.installments && showInstallments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                className: "text-xs text-muted-foreground mt-1",
                                                children: "Paiement unique uniquement"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                lineNumber: 134,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                        className: "space-y-3 mb-8 flex-1",
                                        children: plan.features?.map((feature, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                className: "flex items-start gap-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Check_Star_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                        className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-foreground",
                                                        children: feature
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, j, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        variant: plan.featured ? "default" : "outline",
                                        className: "w-full",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                            href: "#booking",
                                            children: [
                                                "Choisir cette offre",
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Check_Star_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                    className: "w-4 h-4 ml-2"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_4__.FadeIn, {
                    delay: 0.4,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        className: "text-center mt-8 text-sm text-muted-foreground",
                        children: "Sans risque. Satisfaction garantie. Maintenance \xe0 partir de 29€/mois apr\xe8s la p\xe9riode gratuite."
                    }, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/problem-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/problem-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProblemSection: () => (/* binding */ ProblemSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_AlertCircle_Ban_Clock_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,Ban,Clock,HelpCircle!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var _barrel_optimize_names_AlertCircle_Ban_Clock_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,Ban,Clock,HelpCircle!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/ban.js");
/* harmony import */ var _barrel_optimize_names_AlertCircle_Ban_Clock_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,Ban,Clock,HelpCircle!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/clock.js");
/* harmony import */ var _barrel_optimize_names_AlertCircle_Ban_Clock_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,Ban,Clock,HelpCircle!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/circle-help.js");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* __next_internal_client_entry_do_not_use__ ProblemSection auto */ 




const fears = [
    {
        icon: _barrel_optimize_names_AlertCircle_Ban_Clock_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"],
        title: '"C\'est trop technique pour moi"',
        description: "Vous n'avez pas besoin de savoir coder. On s'occupe de tout, vous vous occupez de votre m\xe9tier."
    },
    {
        icon: _barrel_optimize_names_AlertCircle_Ban_Clock_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
        title: '"Je ne peux pas me permettre une agence web"',
        description: "Nos tarifs commencent \xe0 390€. Pas de surprises, pas de co\xfbts cach\xe9s. Le prix affich\xe9 est le prix pay\xe9."
    },
    {
        icon: _barrel_optimize_names_AlertCircle_Ban_Clock_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"],
        title: "\"Je n'ai pas le temps d'apprendre\"",
        description: "On vous forme en 45 minutes. Juste l'essentiel, en langage simple. Vous serez autonome, promis."
    },
    {
        icon: _barrel_optimize_names_AlertCircle_Ban_Clock_HelpCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
        title: '"Et si \xe7a ne marche pas ?"',
        description: "On commence petit pour tester. Si l'id\xe9e fonctionne, on acc\xe9l\xe8re ensemble. Z\xe9ro risque."
    }
];
function ProblemSection() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_2__.Section, {
        id: "problem",
        className: "bg-secondary/30",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_1__.Container, {
            size: "lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center max-w-2xl mx-auto mb-14",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                                children: [
                                    "Vous avez l'id\xe9e. Vous avez ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-primary",
                                        children: "peur"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                        lineNumber: 38,
                                        columnNumber: 43
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-4 text-lg text-muted-foreground",
                                children: "Ces pens\xe9es vous emp\xeachent de vous lancer ? On les conna\xeet par cœur. Et on a des r\xe9ponses."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.Stagger, {
                    staggerDelay: 0.1,
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: fears.map((fear, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.StaggerItem, {
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(fear.icon, {
                                                className: "w-5 h-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                                lineNumber: 52,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                    className: "font-display text-lg font-semibold text-foreground mb-2",
                                                    children: fear.title
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                    className: "text-muted-foreground leading-relaxed",
                                                    children: fear.description
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/process-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/process-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessSection: () => (/* binding */ ProcessSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_Code2_Lightbulb_Rocket_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Code2,Lightbulb,Rocket!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/lightbulb.js");
/* harmony import */ var _barrel_optimize_names_Code2_Lightbulb_Rocket_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Code2,Lightbulb,Rocket!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/code-xml.js");
/* harmony import */ var _barrel_optimize_names_Code2_Lightbulb_Rocket_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Code2,Lightbulb,Rocket!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/rocket.js");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* __next_internal_client_entry_do_not_use__ ProcessSection auto */ 





const steps = [
    {
        icon: _barrel_optimize_names_Code2_Lightbulb_Rocket_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
        step: "1",
        title: "L'Id\xe9e",
        duration: "Semaine 1",
        description: "On discute de votre projet, on valide l'id\xe9e ensemble et on cr\xe9e un plan clair. Pas de jargon, juste de la clart\xe9.",
        tasks: [
            "Discussion et compr\xe9hension",
            "Validation du concept",
            "Plan d'action clair"
        ]
    },
    {
        icon: _barrel_optimize_names_Code2_Lightbulb_Rocket_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"],
        step: "2",
        title: "Le Site",
        duration: "Semaine 2",
        description: "On construit votre site, on int\xe8gre les outils essentiels et on vous forme en 45 minutes.",
        tasks: [
            "Construction du site",
            "Int\xe9gration des outils",
            "Formation 45 min"
        ]
    },
    {
        icon: _barrel_optimize_names_Code2_Lightbulb_Rocket_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
        step: "3",
        title: "Les Clients",
        duration: "Semaine 3",
        description: "On lance ensemble, on ajuste si besoin et on vous accompagne pour vos premiers clients.",
        tasks: [
            "Mise en ligne",
            "Ajustements",
            "Accompagnement clients"
        ]
    }
];
function ProcessSection() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_2__.Section, {
        id: "process",
        className: "bg-secondary/30",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_1__.Container, {
            size: "lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center max-w-2xl mx-auto mb-14",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                                children: [
                                    "3 semaines. 3 \xe9tapes. ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-primary",
                                        children: "Vos premiers clients."
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                        lineNumber: 43,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-4 text-lg text-muted-foreground",
                                children: "Un processus simple et transparent, con\xe7u pour vous faire gagner du temps et de la confiance."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: steps.map((step, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.SlideIn, {
                            from: "bottom",
                            delay: i * 0.15,
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "relative bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full",
                                children: [
                                    i < steps.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-primary/30"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm",
                                                children: step.step
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-sm font-medium text-primary",
                                                children: step.duration
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(step.icon, {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                        className: "font-display text-xl font-semibold text-foreground mb-2",
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                        className: "text-muted-foreground text-sm leading-relaxed mb-4",
                                        children: step.description
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                        className: "space-y-1.5",
                                        children: step.tasks?.map((task, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 23
                                                    }, this),
                                                    task
                                                ]
                                            }, j, true, {
                                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                    delay: 0.4,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "mt-12 text-center",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                            size: "lg",
                            asChild: true,
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                href: "#booking",
                                children: "Voyons ensemble"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/reassurance-section.tsx":
/*!*************************************************!*\
  !*** ./app/_components/reassurance-section.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReassuranceSection: () => (/* binding */ ReassuranceSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CreditCard,Shield,ThumbsUp,UserCheck,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/credit-card.js");
/* harmony import */ var _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CreditCard,Shield,ThumbsUp,UserCheck,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CreditCard,Shield,ThumbsUp,UserCheck,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/user-check.js");
/* harmony import */ var _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CreditCard,Shield,ThumbsUp,UserCheck,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CreditCard,Shield,ThumbsUp,UserCheck,Zap!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/thumbs-up.js");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* __next_internal_client_entry_do_not_use__ ReassuranceSection auto */ 




const reassurances = [
    {
        icon: _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"],
        title: "Paiement flexible",
        description: "Payez en 4 fois sans frais sur les packs D\xe9clic et Acc\xe9l\xe9rateur."
    },
    {
        icon: _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
        title: "Garantie sans jargon",
        description: "Si vous ne comprenez pas quelque chose, on vous l'explique autrement. Toujours."
    },
    {
        icon: _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"],
        title: "Support personnel",
        description: "Un interlocuteur d\xe9di\xe9, pas un robot. Vous m\xe9ritez une vraie personne."
    },
    {
        icon: _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
        title: "R\xe9sultats rapides",
        description: "Vos premiers clients en quelques semaines, pas en quelques mois."
    },
    {
        icon: _barrel_optimize_names_CreditCard_Shield_ThumbsUp_UserCheck_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"],
        title: "Satisfait ou rembours\xe9",
        description: "Si le r\xe9sultat ne vous pla\xeet pas, on travaille jusqu'a votre satisfaction."
    }
];
function ReassuranceSection() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_2__.Section, {
        className: "bg-secondary/30",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_1__.Container, {
            size: "lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center max-w-2xl mx-auto mb-14",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                            className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                            children: [
                                "Pourquoi nous faire ",
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-primary",
                                    children: "confiance"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                                    lineNumber: 43,
                                    columnNumber: 35
                                }, this),
                                " ?"
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.Stagger, {
                    staggerDelay: 0.08,
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6",
                    children: reassurances.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.StaggerItem, {
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-center h-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                        className: "font-display text-sm font-semibold text-foreground mb-1",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                        className: "text-muted-foreground text-xs leading-relaxed",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./app/_components/solution-section.tsx":
/*!**********************************************!*\
  !*** ./app/_components/solution-section.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolutionSection: () => (/* binding */ SolutionSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_Eye_Heart_MessageSquare_Target_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Eye,Heart,MessageSquare,Target!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/heart.js");
/* harmony import */ var _barrel_optimize_names_Eye_Heart_MessageSquare_Target_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Eye,Heart,MessageSquare,Target!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/eye.js");
/* harmony import */ var _barrel_optimize_names_Eye_Heart_MessageSquare_Target_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Eye,Heart,MessageSquare,Target!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/message-square.js");
/* harmony import */ var _barrel_optimize_names_Eye_Heart_MessageSquare_Target_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Eye,Heart,MessageSquare,Target!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/target.js");
/* harmony import */ var _components_layouts_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/container */ "(ssr)/./components/layouts/container.tsx");
/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/section */ "(ssr)/./components/layouts/section.tsx");
/* harmony import */ var _components_ui_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/animate */ "(ssr)/./components/ui/animate.tsx");
/* __next_internal_client_entry_do_not_use__ SolutionSection auto */ 




const differentiators = [
    {
        icon: _barrel_optimize_names_Eye_Heart_MessageSquare_Target_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"],
        title: "Support humain",
        description: "Pas de chatbots, pas de r\xe9pondeurs. Une vraie personne qui vous conna\xeet et vous accompagne."
    },
    {
        icon: _barrel_optimize_names_Eye_Heart_MessageSquare_Target_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
        title: "Tarifs transparents",
        description: "Le prix affich\xe9 est le prix final. Pas de frais cach\xe9s, pas de mauvaises surprises \xe0 la facturation."
    },
    {
        icon: _barrel_optimize_names_Eye_Heart_MessageSquare_Target_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"],
        title: "Langage simple",
        description: 'On parle fran\xe7ais, pas "tech". Vous comprendrez chaque \xe9tape sans avoir besoin d\'un dictionnaire.'
    },
    {
        icon: _barrel_optimize_names_Eye_Heart_MessageSquare_Target_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
        title: "Focus r\xe9sultats",
        description: "On ne compte pas les fonctionnalit\xe9s : on compte vos clients. Votre succ\xe8s est notre m\xe9trique."
    }
];
function SolutionSection() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_2__.Section, {
        id: "solution",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_container__WEBPACK_IMPORTED_MODULE_1__.Container, {
            size: "lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center max-w-2xl mx-auto mb-14",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground",
                                children: [
                                    "D\xe9clic l\xe8ve toutes ces ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-primary",
                                        children: "barri\xe8res"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                        lineNumber: 38,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-4 text-lg text-muted-foreground",
                                children: "Notre mission : rendre le web accessible \xe0 tous ceux qui ont une id\xe9e et l'envie de la concr\xe9tiser."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.Stagger, {
                    staggerDelay: 0.1,
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: differentiators.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.StaggerItem, {
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center h-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {
                                            className: "w-6 h-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                        className: "font-display text-lg font-semibold text-foreground mb-2",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                        className: "text-muted-foreground text-sm leading-relaxed",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_animate__WEBPACK_IMPORTED_MODULE_3__.FadeIn, {
                    delay: 0.3,
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "mt-12 bg-accent/50 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-foreground italic leading-relaxed",
                                children: "\"J'avais peur de me lancer. L'\xe9quipe D\xe9clic m'a pris par la main, et en 3 semaines j'avais mes premiers clients. Simple, humain, efficace.\""
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "mt-3 text-sm font-semibold text-primary",
                                children: "— Marie D., fleuriste \xe0 S\xe8te"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/chunk-load-error-handler.tsx":
/*!*************************************************!*\
  !*** ./components/chunk-load-error-handler.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChunkLoadErrorHandler: () => (/* binding */ ChunkLoadErrorHandler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ ChunkLoadErrorHandler auto */ // IMPORTANT: Do not remove this component.
// It handles a known Next.js dev server race condition where dynamic chunks
// imported by next/dynamic haven't been compiled yet and cause webpack to throw
// a ChunkLoadError

function ChunkLoadErrorHandler() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handler = (event)=>{
            if (event.error?.name === "ChunkLoadError" || event.error?.message?.includes("Loading chunk")) {
                event.preventDefault();
                window.location.reload();
            }
        };
        window.addEventListener("error", handler);
        return ()=>window.removeEventListener("error", handler);
    }, []);
    return null;
}


/***/ }),

/***/ "(ssr)/./components/layouts/container.tsx":
/*!******************************************!*\
  !*** ./components/layouts/container.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");


const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
};
function Container({ children, size = "lg", className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className),
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/layouts/container.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/layouts/section.tsx":
/*!****************************************!*\
  !*** ./components/layouts/section.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Section: () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");


function Section({ children, className, id }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        id: id,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("py-16 sm:py-24 scroll-mt-28", className),
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/layouts/section.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/providers.tsx":
/*!**********************************!*\
  !*** ./components/providers.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next-auth/react/index.js");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 

function Providers({ children }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/providers.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/theme-provider.tsx":
/*!***************************************!*\
  !*** ./components/theme-provider.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next-themes/dist/index.mjs");
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 


function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/ui/accordion.tsx":
/*!*************************************!*\
  !*** ./components/ui/accordion.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion),
/* harmony export */   AccordionContent: () => (/* binding */ AccordionContent),
/* harmony export */   AccordionItem: () => (/* binding */ AccordionItem),
/* harmony export */   AccordionTrigger: () => (/* binding */ AccordionTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-accordion */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-accordion/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Accordion,AccordionItem,AccordionTrigger,AccordionContent auto */ 




const Accordion = _radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_3__.Root;
const AccordionItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_3__.Item, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, undefined));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_3__.Header, {
        className: "flex",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_3__.Trigger, {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, undefined));
AccordionTrigger.displayName = _radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_3__.Trigger.displayName;
const AccordionContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_3__.Content, {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, undefined));
AccordionContent.displayName = _radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/animate.tsx":
/*!***********************************!*\
  !*** ./components/ui/animate.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeIn: () => (/* binding */ FadeIn),
/* harmony export */   HoverLift: () => (/* binding */ HoverLift),
/* harmony export */   PressScale: () => (/* binding */ PressScale),
/* harmony export */   ScaleIn: () => (/* binding */ ScaleIn),
/* harmony export */   SkeletonPulse: () => (/* binding */ SkeletonPulse),
/* harmony export */   SlideIn: () => (/* binding */ SlideIn),
/* harmony export */   Stagger: () => (/* binding */ Stagger),
/* harmony export */   StaggerItem: () => (/* binding */ StaggerItem)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* __next_internal_client_entry_do_not_use__ FadeIn,ScaleIn,SlideIn,Stagger,StaggerItem,HoverLift,PressScale,SkeletonPulse auto */ 

const viewportConfig = {
    once: true,
    margin: "-60px"
};
function FadeIn({ children, delay = 0, duration = 0.4, className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            opacity: 0,
            y: 8
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: viewportConfig,
        transition: {
            duration,
            delay,
            ease: "easeOut"
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/animate.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function ScaleIn({ children, delay = 0, className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            opacity: 0,
            scale: 0.95
        },
        whileInView: {
            opacity: 1,
            scale: 1
        },
        viewport: viewportConfig,
        transition: {
            duration: 0.3,
            delay,
            ease: "easeOut"
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/animate.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
const slideDirections = {
    bottom: {
        y: 20,
        x: 0
    },
    top: {
        y: -20,
        x: 0
    },
    left: {
        x: -20,
        y: 0
    },
    right: {
        x: 20,
        y: 0
    }
};
function SlideIn({ children, from = "bottom", delay = 0, className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            opacity: 0,
            ...slideDirections[from]
        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0
        },
        viewport: viewportConfig,
        transition: {
            duration: 0.4,
            delay,
            ease: "easeOut"
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/animate.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function Stagger({ children, staggerDelay = 0.08, className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: {
            show: {
                transition: {
                    staggerChildren: staggerDelay
                }
            }
        },
        initial: "hidden",
        whileInView: "show",
        viewport: viewportConfig,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/animate.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function StaggerItem({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: {
            hidden: {
                opacity: 0,
                y: 16
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: "easeOut"
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/animate.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function HoverLift({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        whileHover: {
            y: -2,
            boxShadow: "var(--shadow-lg)"
        },
        transition: {
            duration: 0.15,
            ease: "easeOut"
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/animate.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
function PressScale({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        whileTap: {
            scale: 0.98
        },
        transition: {
            duration: 0.1,
            ease: "easeOut"
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/animate.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
function SkeletonPulse({ className }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        animate: {
            opacity: [
                0.4,
                1,
                0.4
            ]
        },
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        },
        className: `rounded-md bg-muted ${className ?? ""}`
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/animate.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/ui/badge.tsx":
/*!*********************************!*\
  !*** ./components/ui/badge.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   badgeVariants: () => (/* binding */ badgeVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");




const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}



/***/ }),

/***/ "(ssr)/./components/ui/button.tsx":
/*!**********************************!*\
  !*** ./components/ui/button.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2!=!lucide-react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");






const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-sm",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            "glass-dark": "bg-white/10 backdrop-blur-md border border-white/20 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.1)] text-foreground shadow-sm hover:bg-white/25 hover:border-white/40 hover:shadow-lg focus-visible:ring-white/50 focus-visible:ring-ring/0",
            "glass-light": "bg-black/[0.06] backdrop-blur-md border border-black/10 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.5)] text-gray-900 shadow-sm hover:bg-black/[0.12] hover:border-black/20 hover:shadow-lg focus-visible:ring-black/30 focus-visible:ring-ring/0",
            link: "text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:ring-0 focus-visible:ring-offset-0"
        },
        size: {
            default: "h-10 px-4 py-2",
            xs: "h-7 rounded-md px-2 text-xs",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-lg px-6 text-base",
            icon: "h-10 w-10",
            "icon-sm": "h-8 w-8 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot : "button";
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        disabled: disabled || loading,
        "aria-busy": loading || undefined,
        ...props,
        children: [
            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                className: "h-4 w-4 animate-spin"
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/button.tsx",
                lineNumber: 64,
                columnNumber: 21
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slottable, {
                children: loading && asChild ? null : children
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/button.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/button.tsx",
        lineNumber: 57,
        columnNumber: 7
    }, undefined);
});
Button.displayName = "Button";



/***/ }),

/***/ "(ssr)/./components/ui/input.tsx":
/*!*********************************!*\
  !*** ./components/ui/input.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   inputVariants: () => (/* binding */ inputVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");




const inputVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("flex w-full rounded-lg border bg-background text-sm transition-all duration-fast file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        variant: {
            default: "border-input hover:border-ring/50 focus-visible:border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            error: "border-destructive hover:border-destructive focus-visible:border-destructive focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            success: "border-emerald-500 hover:border-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            ghost: "border-transparent bg-muted/50 hover:bg-muted focus-visible:bg-background focus-visible:border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        },
        size: {
            default: "h-10 px-3 py-2",
            sm: "h-8 px-2.5 py-1 text-xs rounded-md",
            lg: "h-12 px-4 py-3 text-base rounded-lg"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, type, variant, size, ...props }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(inputVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/input.tsx",
        lineNumber: 36,
        columnNumber: 7
    }, undefined);
});
Input.displayName = "Input";



/***/ }),

/***/ "(ssr)/./components/ui/label.tsx":
/*!*********************************!*\
  !*** ./components/ui/label.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-label */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-label/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__.Root, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, undefined));
Label.displayName = _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__.Root.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/sonner.tsx":
/*!**********************************!*\
  !*** ./components/ui/sonner.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toaster: () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next-themes/dist/index.mjs");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sonner */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/sonner/dist/index.mjs");
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sonner__WEBPACK_IMPORTED_MODULE_2__.Toaster, {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, undefined);
};



/***/ }),

/***/ "(ssr)/./components/ui/textarea.tsx":
/*!************************************!*\
  !*** ./components/ui/textarea.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Textarea: () => (/* binding */ Textarea),
/* harmony export */   textareaVariants: () => (/* binding */ textareaVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");




const textareaVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("flex min-h-[80px] w-full rounded-lg border bg-background px-3 py-2 text-sm transition-all duration-fast placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        variant: {
            default: "border-input hover:border-ring/50 focus-visible:border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            error: "border-destructive hover:border-destructive focus-visible:border-destructive focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            success: "border-emerald-500 hover:border-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            ghost: "border-transparent bg-muted/50 hover:bg-muted focus-visible:bg-background focus-visible:border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Textarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(textareaVariants({
            variant,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/components/ui/textarea.tsx",
        lineNumber: 30,
        columnNumber: 7
    }, undefined);
});
Textarea.displayName = "Textarea";



/***/ }),

/***/ "(ssr)/./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   formatDuration: () => (/* binding */ formatDuration)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/tailwind-merge/dist/bundle-mjs.mjs");


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}


/***/ }),

/***/ "(rsc)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("bd8ff0bb66b2");
if (false) {}


/***/ }),

/***/ "(rsc)/./app/_components/booking-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/booking-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/booking-section.tsx#BookingSection`);


/***/ }),

/***/ "(rsc)/./app/_components/contact-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/contact-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/contact-section.tsx#ContactSection`);


/***/ }),

/***/ "(rsc)/./app/_components/cta-section.tsx":
/*!*****************************************!*\
  !*** ./app/_components/cta-section.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CtaSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/cta-section.tsx#CtaSection`);


/***/ }),

/***/ "(rsc)/./app/_components/faq-section.tsx":
/*!*****************************************!*\
  !*** ./app/_components/faq-section.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/faq-section.tsx#FaqSection`);


/***/ }),

/***/ "(rsc)/./app/_components/footer.tsx":
/*!************************************!*\
  !*** ./app/_components/footer.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/footer.tsx#Footer`);


/***/ }),

/***/ "(rsc)/./app/_components/header.tsx":
/*!************************************!*\
  !*** ./app/_components/header.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/header.tsx#Header`);


/***/ }),

/***/ "(rsc)/./app/_components/hero-section.tsx":
/*!******************************************!*\
  !*** ./app/_components/hero-section.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/hero-section.tsx#HeroSection`);


/***/ }),

/***/ "(rsc)/./app/_components/json-ld.tsx":
/*!*************************************!*\
  !*** ./app/_components/json-ld.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonLd: () => (/* binding */ JsonLd)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

function JsonLd() {
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "D\xe9clic",
        description: "Agence web bienveillante. De l'id\xe9e au premier client en 3 semaines.",
        url: "https://declic.fr",
        telephone: "+33467000000",
        email: "contact@declic.fr",
        address: {
            "@type": "PostalAddress",
            streetAddress: "27 rue Montmorency",
            addressLocality: "S\xe8te",
            postalCode: "34200",
            addressCountry: "FR"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 43.4035,
            longitude: 3.6948
        },
        priceRange: "390€ - 1690€",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
            bestRating: "5"
        }
    };
    const services = {
        "@context": "https://schema.org",
        "@type": "Service",
        provider: {
            "@type": "LocalBusiness",
            name: "D\xe9clic"
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Offres D\xe9clic",
            itemListElement: [
                {
                    "@type": "Offer",
                    name: "Pack Essai",
                    price: "390",
                    priceCurrency: "EUR",
                    description: "Landing page standalone avec 1 mois maintenance gratuite"
                },
                {
                    "@type": "Offer",
                    name: "Pack D\xe9clic",
                    price: "890",
                    priceCurrency: "EUR",
                    description: "Site complet 5 pages avec formation, r\xe9servation et 3 mois maintenance"
                },
                {
                    "@type": "Offer",
                    name: "Pack Acc\xe9l\xe9rateur",
                    price: "1690",
                    priceCurrency: "EUR",
                    description: "Pack complet avec coaching, copywriting, logo et 6 mois maintenance"
                }
            ]
        }
    };
    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Je n'y connais rien en web, c'est grave ?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pas du tout ! C'est m\xeame notre sp\xe9cialit\xe9. On vous accompagne de A \xe0 Z et on vous explique tout en langage simple."
                }
            },
            {
                "@type": "Question",
                name: "Combien de temps \xe7a prend ?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "En g\xe9n\xe9ral, votre site est pr\xeat en 3 semaines."
                }
            },
            {
                "@type": "Question",
                name: "Combien \xe7a co\xfbte vraiment ?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le prix affich\xe9 est le prix final. \xc0 partir de 390€ HT."
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(localBusiness)
                }
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/json-ld.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(services)
                }
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/json-ld.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqPage)
                }
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/_components/json-ld.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}


/***/ }),

/***/ "(rsc)/./app/_components/pricing-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/pricing-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/pricing-section.tsx#PricingSection`);


/***/ }),

/***/ "(rsc)/./app/_components/problem-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/problem-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProblemSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/problem-section.tsx#ProblemSection`);


/***/ }),

/***/ "(rsc)/./app/_components/process-section.tsx":
/*!*********************************************!*\
  !*** ./app/_components/process-section.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/process-section.tsx#ProcessSection`);


/***/ }),

/***/ "(rsc)/./app/_components/reassurance-section.tsx":
/*!*************************************************!*\
  !*** ./app/_components/reassurance-section.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReassuranceSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/reassurance-section.tsx#ReassuranceSection`);


/***/ }),

/***/ "(rsc)/./app/_components/solution-section.tsx":
/*!**********************************************!*\
  !*** ./app/_components/solution-section.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolutionSection: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/app/_components/solution-section.tsx#SolutionSection`);


/***/ }),

/***/ "(rsc)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   dynamic: () => (/* binding */ dynamic),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_DM_Sans_arguments_subsets_latin_variable_font_sans_variableName_dmSans___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{"path":"app/layout.tsx","import":"DM_Sans","arguments":[{"subsets":["latin"],"variable":"--font-sans"}],"variableName":"dmSans"} */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"DM_Sans\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-sans\"}],\"variableName\":\"dmSans\"}");
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_DM_Sans_arguments_subsets_latin_variable_font_sans_variableName_dmSans___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_DM_Sans_arguments_subsets_latin_variable_font_sans_variableName_dmSans___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Plus_Jakarta_Sans_arguments_subsets_latin_variable_font_display_variableName_jakartaSans___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{"path":"app/layout.tsx","import":"Plus_Jakarta_Sans","arguments":[{"subsets":["latin"],"variable":"--font-display"}],"variableName":"jakartaSans"} */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Plus_Jakarta_Sans\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-display\"}],\"variableName\":\"jakartaSans\"}");
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Plus_Jakarta_Sans_arguments_subsets_latin_variable_font_display_variableName_jakartaSans___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Plus_Jakarta_Sans_arguments_subsets_latin_variable_font_display_variableName_jakartaSans___WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_JetBrains_Mono_arguments_subsets_latin_variable_font_mono_variableName_jetbrainsMono___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{"path":"app/layout.tsx","import":"JetBrains_Mono","arguments":[{"subsets":["latin"],"variable":"--font-mono"}],"variableName":"jetbrainsMono"} */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"JetBrains_Mono\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-mono\"}],\"variableName\":\"jetbrainsMono\"}");
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_JetBrains_Mono_arguments_subsets_latin_variable_font_mono_variableName_jetbrainsMono___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_JetBrains_Mono_arguments_subsets_latin_variable_font_mono_variableName_jetbrainsMono___WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ "(rsc)/./app/globals.css");
/* harmony import */ var _components_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/theme-provider */ "(rsc)/./components/theme-provider.tsx");
/* harmony import */ var _components_ui_sonner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/sonner */ "(rsc)/./components/ui/sonner.tsx");
/* harmony import */ var _components_chunk_load_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/chunk-load-error-handler */ "(rsc)/./components/chunk-load-error-handler.tsx");
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/providers */ "(rsc)/./components/providers.tsx");









const dynamic = "force-dynamic";
const metadata = {
    metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
    title: "D\xe9clic - De l'id\xe9e au premier client | Agence Web \xe0 S\xe8te",
    description: "Agence web bienveillante. De l'id\xe9e au premier client en 3 semaines. Sans jargon. Sans peur. Diagnostic gratuit. Sites web \xe0 partir de 390€.",
    keywords: "agence web france, cr\xe9ation site pas cher, site web petite entreprise, agence web s\xe8te, site artisan",
    openGraph: {
        title: "D\xe9clic - De l'id\xe9e au premier client",
        description: "Agence web bienveillante. De l'id\xe9e au premier client en 3 semaines. Sans jargon. Sans peur.",
        images: [
            "/og-image.png"
        ],
        locale: "fr_FR",
        type: "website"
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg"
    },
    alternates: {
        languages: {
            "fr-FR": "/"
        }
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("html", {
        lang: "fr",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("head", {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
                    src: "https://apps.abacus.ai/chatllm/appllm-lib.js"
                }, void 0, false, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
                className: `${(next_font_google_target_css_path_app_layout_tsx_import_DM_Sans_arguments_subsets_latin_variable_font_sans_variableName_dmSans___WEBPACK_IMPORTED_MODULE_6___default().variable)} ${(next_font_google_target_css_path_app_layout_tsx_import_Plus_Jakarta_Sans_arguments_subsets_latin_variable_font_display_variableName_jakartaSans___WEBPACK_IMPORTED_MODULE_7___default().variable)} ${(next_font_google_target_css_path_app_layout_tsx_import_JetBrains_Mono_arguments_subsets_latin_variable_font_mono_variableName_jetbrainsMono___WEBPACK_IMPORTED_MODULE_8___default().variable)} font-sans`,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_theme_provider__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                    attribute: "class",
                    defaultTheme: "light",
                    enableSystem: false,
                    disableTransitionOnChange: true,
                    forcedTheme: "light",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_providers__WEBPACK_IMPORTED_MODULE_5__.Providers, {
                            children: children
                        }, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sonner__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chunk_load_error_handler__WEBPACK_IMPORTED_MODULE_4__.ChunkLoadErrorHandler, {}, void 0, false, {
                            fileName: "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/layout.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(rsc)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/header */ "(rsc)/./app/_components/header.tsx");
/* harmony import */ var _components_hero_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/hero-section */ "(rsc)/./app/_components/hero-section.tsx");
/* harmony import */ var _components_problem_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/problem-section */ "(rsc)/./app/_components/problem-section.tsx");
/* harmony import */ var _components_solution_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/solution-section */ "(rsc)/./app/_components/solution-section.tsx");
/* harmony import */ var _components_process_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/process-section */ "(rsc)/./app/_components/process-section.tsx");
/* harmony import */ var _components_pricing_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/pricing-section */ "(rsc)/./app/_components/pricing-section.tsx");
/* harmony import */ var _components_reassurance_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/reassurance-section */ "(rsc)/./app/_components/reassurance-section.tsx");
/* harmony import */ var _components_faq_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/faq-section */ "(rsc)/./app/_components/faq-section.tsx");
/* harmony import */ var _components_booking_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/booking-section */ "(rsc)/./app/_components/booking-section.tsx");
/* harmony import */ var _components_contact_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/contact-section */ "(rsc)/./app/_components/contact-section.tsx");
/* harmony import */ var _components_cta_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/cta-section */ "(rsc)/./app/_components/cta-section.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/footer */ "(rsc)/./app/_components/footer.tsx");
/* harmony import */ var _components_json_ld__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/json-ld */ "(rsc)/./app/_components/json-ld.tsx");














function HomePage() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_json_ld__WEBPACK_IMPORTED_MODULE_13__.JsonLd, {}, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_section__WEBPACK_IMPORTED_MODULE_2__.HeroSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_problem_section__WEBPACK_IMPORTED_MODULE_3__.ProblemSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_solution_section__WEBPACK_IMPORTED_MODULE_4__.SolutionSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_process_section__WEBPACK_IMPORTED_MODULE_5__.ProcessSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pricing_section__WEBPACK_IMPORTED_MODULE_6__.PricingSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reassurance_section__WEBPACK_IMPORTED_MODULE_7__.ReassuranceSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_faq_section__WEBPACK_IMPORTED_MODULE_8__.FaqSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_booking_section__WEBPACK_IMPORTED_MODULE_9__.BookingSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_section__WEBPACK_IMPORTED_MODULE_10__.ContactSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cta_section__WEBPACK_IMPORTED_MODULE_11__.CtaSection, {}, void 0, false, {
                        fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_12__.Footer, {}, void 0, false, {
                fileName: "/home/ubuntu/declic_agency/nextjs_space/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}


/***/ }),

/***/ "(rsc)/./components/chunk-load-error-handler.tsx":
/*!*************************************************!*\
  !*** ./components/chunk-load-error-handler.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChunkLoadErrorHandler: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/components/chunk-load-error-handler.tsx#ChunkLoadErrorHandler`);


/***/ }),

/***/ "(rsc)/./components/providers.tsx":
/*!**********************************!*\
  !*** ./components/providers.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/components/providers.tsx#Providers`);


/***/ }),

/***/ "(rsc)/./components/theme-provider.tsx":
/*!***************************************!*\
  !*** ./components/theme-provider.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/components/theme-provider.tsx#ThemeProvider`);


/***/ }),

/***/ "(rsc)/./components/ui/sonner.tsx":
/*!**********************************!*\
  !*** ./components/ui/sonner.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toaster: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/declic_agency/nextjs_space/components/ui/sonner.tsx#Toaster`);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/framer-motion","vendor-chunks/lucide-react","vendor-chunks/@radix-ui","vendor-chunks/@swc","vendor-chunks/class-variance-authority","vendor-chunks/tailwind-merge","vendor-chunks/sonner","vendor-chunks/next-themes","vendor-chunks/clsx"], () => (__webpack_exec__("(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fdeclic_agency%2Fnextjs_space&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();