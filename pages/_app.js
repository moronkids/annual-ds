import React, { useContext } from "react";

// libs
import Router from "next/router";
import NProgress from "nprogress";

// layouts
import Body from "src/components/layouts/body";
import Footers from "src/components/layouts/footer";
import HeadersWeb from "src/components/layouts/header";
// import Sidebar from "components/mobile/layouts/sidebar";

import "src/assets/scss/main-style.scss";

import "styles/nprogress.css";
import { AppContext } from "providers";
import { AppWrapper } from "providers";

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
      <AppWrapper>
        <HeadersWeb />
        <Body>
          <Component {...pageProps} />
        </Body>
        <Footers />
      </AppWrapper>
    </>
  );
};
export default MyApp;
