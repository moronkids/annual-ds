(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8810:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: ./styles/assets/icons/icon-ds.svg
/* harmony default export */ var icon_ds = ({"src":"/_next/static/image/styles/assets/icons/icon-ds.096263a257eb25197456b4415c181bcb.svg","height":44,"width":163});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/layouts/header/index.jsx







function index() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ds-header d-flex mx-auto",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ds-container d-flex mx-auto d-flex align-items-center my-auto w-100 justify-content-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "iconDS",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: icon_ds,
            alt: "",
            srcset: ""
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "list-menu",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "d-flex flex-row justify-content-center align-items-center h-100 my-auto",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "Activities"
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "Startup Data"
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "Gadget Data"
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "Partner"
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "For Readers"
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: "p-0 m-0",
      style: {
        color: "#F4F4F4"
      }
    })]
  });
}

/* harmony default export */ var header = (index);
;// CONCATENATED MODULE: ./styles/assets/icons/fb.svg
/* harmony default export */ var fb = ({"src":"/_next/static/image/styles/assets/icons/fb.fde37889ffe20ff4185c631cf664e161.svg","height":28,"width":28});
;// CONCATENATED MODULE: ./styles/assets/icons/linkedin.svg
/* harmony default export */ var linkedin = ({"src":"/_next/static/image/styles/assets/icons/linkedin.71e1a606c9885c7b15fd5f3ded4af04f.svg","height":28,"width":28});
;// CONCATENATED MODULE: ./styles/assets/icons/twitter.svg
/* harmony default export */ var twitter = ({"src":"/_next/static/image/styles/assets/icons/twitter.dd51da9858d6a9fff8dcdcb931009b63.svg","height":28,"width":28});
;// CONCATENATED MODULE: ./styles/assets/icons/ig.svg
/* harmony default export */ var ig = ({"src":"/_next/static/image/styles/assets/icons/ig.923a4fb495d153c0f71f5c25483120f5.svg","height":28,"width":28});
;// CONCATENATED MODULE: ./components/layouts/footer/index.jsx









function footer_index() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ds-footer d-flex justify-content-center align-items-center",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ds-container d-flex justify-content-between align-items-center my-auto h-100 w-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "content",
        children: "Copyright \xA9 2021 - Annual Report DailySocial.id"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "d-flex flex-row my-auto",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: fb
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: twitter
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: linkedin
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: ig
            })
          })]
        })
      })]
    })
  });
}

/* harmony default export */ var footer = (footer_index);
;// CONCATENATED MODULE: ./components/layouts/body/index.jsx



function body_index(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "ds-body",
    children: props.children
  });
}

/* harmony default export */ var body = (body_index);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./providers/index.jsx


 //Context

const AppContext = /*#__PURE__*/(0,external_react_.createContext)(null); //Provider

const AppWrapper = ({
  children
}) => {
  const {
    0: device,
    1: setDevice
  } = (0,external_react_.useState)(null);
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(false);
  const {
    0: searchBar,
    1: setSearchBar
  } = (0,external_react_.useState)(false);
  const {
    0: inputmode,
    1: setInputMode
  } = (0,external_react_.useState)(false);
  const {
    0: activePages,
    1: setActivePages
  } = (0,external_react_.useState)(null);
  const {
    0: query,
    1: setQuery
  } = (0,external_react_.useState)(null);
  external_react_default().useEffect(() => {}, []); //

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
  }; // Interface donde será expuesto como proveedor y envolverá la App.

  return /*#__PURE__*/jsx_runtime_.jsx(AppContext.Provider, {
    value: values,
    children: children
  });
}; //

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
} // useAppContext.getInitialProps = async ({ ctx }) => {
//   let isMobileView = (ctx.req
//     ? ctx.req.headers["user-agent"]
//     : navigator.userAgent
//   ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
//   //Returning the isMobileView as a prop to the component for further use.
//   return {
//     isMobileView: Boolean(isMobileView),
//   };
// };

/* harmony default export */ var providers = ((/* unused pure expression or super */ null && (useAppContext)));
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
}); // Router.events.on("routeChangeStart", () => NProgress.start());

router_default().events.on("routeChangeStart", () => external_nprogress_default().start());
router_default().events.on("routeChangeComplete", () => external_nprogress_default().done());
router_default().events.on("routeChangeError", () => external_nprogress_default().done()); // _app.js

const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx(body, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
    })
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [999,675,544], function() { return __webpack_exec__(8810); });
module.exports = __webpack_exports__;

})();