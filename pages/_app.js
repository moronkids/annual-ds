import React, { useContext } from "react";
import Head from "next/head";
// libs
import Router from "next/router";
import NProgress from "nprogress";

// layouts
import Body from "src/components/layouts/body";
import Footers from "src/components/layouts/footer";
import HeadersWeb from "src/components/layouts/header";
// import Sidebar from "components/mobile/layouts/sidebar";

import "src/assets/scss/main-style.scss";
import Script from "next/script";
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
      <Head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5Z224J');`,
          }}
        ></Script>
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-46696704-3`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-46696704-3',{
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <AppWrapper>
        <HeadersWeb />
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5Z224J"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <Body>
            <Component {...pageProps} />
          </Body>
        </body>
        <Footers />
      </AppWrapper>
    </>
  );
};
export default MyApp;
