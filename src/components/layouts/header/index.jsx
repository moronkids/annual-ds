import React, { useContext, useEffect } from "react";
import icons from "styles/assets/icons/icon-ds.svg";
import Image from "next/image";
import Sidebar from "src/components/layouts/sidebar-mobile";
import { AppContext } from "providers";
import { ga_dekstop } from "src/helpers/tracker/Ga";
import { ga_mobile } from "src/helpers/tracker/GaMobile";
function index() {
  const {
    sidebar,
    setSideBar,
    setScroll,
    scroll,
    activeSection,
    setActiveSection,
  } = useContext(AppContext);
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset > 10 ? setScroll(true) : setScroll(false);

    return () => (window.onscroll = null);
  });
  return (
    <>
      <div
        className={`ds-header d-flex mx-auto sticky-top ${
          scroll && "active_h"
        }`}
      >
        <div className="ds-container d-flex mx-auto d-flex align-items-center my-auto w-100 justify-content-between">
          <div className="iconDS position-relative">
            <div>
              <a
                href="#"
                onClick={() => {
                  ga_mobile("ds-logo");
                }}
              >
                <Image
                  src={icons}
                  layout="fill"
                  quality={100}
                  loading="eager"
                />
              </a>
            </div>
          </div>
          <div
            className="btn-menu d-sm-none d-block"
            onClick={() => {
              setSideBar(!sidebar);
              ga_mobile("hamburger-btn");
            }}
          >
            <div className="content d-flex justify-content-between align-items-center">
              <div>
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10H14V8H0V10ZM0 0V2H14V0H0ZM0 6H14V4H0V6Z"
                    fill="#3A3A3A"
                  />
                </svg>
              </div>
              <div className="text">Menu</div>
            </div>
          </div>
          <div className="list-menu d-sm-block d-none">
            <ul className="d-flex flex-row justify-content-center align-items-center h-100 my-auto">
              <a
                href="#activities"
                onClick={() => {
                  setActiveSection(1);
                  ga_dekstop("act-btn");
                }}
              >
                <li className={`${activeSection === 1 && "active"}`}>
                  Activities
                </li>
              </a>
              <a
                href="#startup"
                onClick={() => {
                  setActiveSection(2);
                  ga_dekstop("startups-btn");
                }}
              >
                <li className={`${activeSection === 2 && "active"}`}>
                  Startups
                </li>
              </a>
              <a
                href="#gadget"
                onClick={() => {
                  setActiveSection(3);
                  ga_dekstop("tech-esports-btn");
                }}
              >
                <li className={`${activeSection === 3 && "active"}`}>
                  Tech & Esports
                </li>
              </a>
              <a
                href="#partners"
                onClick={() => {
                  setActiveSection(4);
                  ga_dekstop("partners-btn");
                }}
              >
                <li className={`${activeSection === 4 && "active"}`}>
                  Partners
                </li>
              </a>
              <a
                href="#readers"
                onClick={() => {
                  setActiveSection(5);
                  ga_dekstop("for-readers-btn");
                }}
              >
                <li className={`${activeSection === 5 && "active"}`}>
                  For Readers
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <Sidebar />
      <div
        className="position-fixed"
        style={{
          width: "100vw",
          height: "100vh",
          background: "rgba(34, 34, 34, 0.75)",
          opacity: "0.9",
          zIndex: "95",
          display: sidebar ? "block" : "none",
        }}
      ></div>
    </>
  );
}

export default index;
