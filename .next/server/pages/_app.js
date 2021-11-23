"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(544);
;// CONCATENATED MODULE: ./components/layouts/header/index.jsx


function index() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
    }));
}
/* harmony default export */ const header = (index);

;// CONCATENATED MODULE: ./components/layouts/footer/index.jsx


function footer_index() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
    }));
}
/* harmony default export */ const footer = (footer_index);

;// CONCATENATED MODULE: ./components/layouts/body/index.jsx


function body_index(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: props.children
    }));
}
/* harmony default export */ const body = (body_index);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./providers/index.jsx



//Context
const AppContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
//Provider
const AppWrapper = ({ children  })=>{
    const { 0: device , 1: setDevice  } = (0,external_react_.useState)(null);
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { 0: searchBar , 1: setSearchBar  } = (0,external_react_.useState)(false);
    const { 0: inputmode , 1: setInputMode  } = (0,external_react_.useState)(false);
    const { 0: activePages , 1: setActivePages  } = (0,external_react_.useState)(null);
    const { 0: query , 1: setQuery  } = (0,external_react_.useState)(null);
    external_react_default().useEffect(()=>{
    }, []);
    //
    const values = {
        device,
        setDevice,
        toggle,
        setToggle,
        searchBar,
        setSearchBar,
        inputmode,
        setInputMode,
        query,
        setQuery
    };
    // Interface donde será expuesto como proveedor y envolverá la App.
    return(/*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
        value: values,
        children: children
    }));
};
//
function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        console.error("Error deploying App Context!!!");
    }
    return context;
}
// useAppContext.getInitialProps = async ({ ctx }) => {
//   let isMobileView = (ctx.req
//     ? ctx.req.headers["user-agent"]
//     : navigator.userAgent
//   ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
//   //Returning the isMobileView as a prop to the component for further use.
//   return {
//     isMobileView: Boolean(isMobileView),
//   };
// };
/* harmony default export */ const providers = ((/* unused pure expression or super */ null && (useAppContext)));

;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js

// import '../styles/globals.css'


// import "../styles/scss/styles.scss";

// import HeadersMobile from "components/mobile/layouts/headers";


//redux
// import { Provider, useDispatch } from "react-redux";
// import { store } from "redux/index";

// import Head from "next/head";
// import Sidebar from "components/mobile/layouts/sidebar";



external_nprogress_default().configure({
    minimum: 0.3,
    easing: "ease",
    speed: 800,
    showSpinner: false
});
// Router.events.on("routeChangeStart", () => NProgress.start());
router_default().events.on("routeChangeStart", ()=>external_nprogress_default().start()
);
router_default().events.on("routeChangeComplete", ()=>external_nprogress_default().done()
);
router_default().events.on("routeChangeError", ()=>external_nprogress_default().done()
);
// _app.js
const MyApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AppWrapper, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(body, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                })
            ]
        })
    }));
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544], () => (__webpack_exec__(331)));
module.exports = __webpack_exports__;

})();