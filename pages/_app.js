// import '../styles/globals.css'
import React, { createContext, useEffect, useState } from "react";
import App, { Container } from "next/app";
// import "../styles/scss/styles.scss";
import HeadersWeb from "src/components/layouts/header";
// import HeadersMobile from "components/mobile/layouts/headers";
import Footers from "src/components/layouts/footer";
import Body from "src/components/layouts/body";
//redux
// import { Provider, useDispatch } from "react-redux";
// import { store } from "redux/index";
// import { AppWrapper } from "pages";
// import Head from "next/head";
// import Sidebar from "components/mobile/layouts/sidebar";
import NProgress from "nprogress";
import Router from "next/router";
import "styles/nprogress.css";
// import "src/assets/scss/base/bootstrap/bootstrap.scss";
import "src/assets/scss/main-style.scss";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

// Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// _app.js
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* <AppWrapper> */}
      <HeadersWeb />
      <Body>
        <Component {...pageProps} />
      </Body>
      <Footers />
      {/* </AppWrapper> */}
    </>
  );
};
export default MyApp;
