import React, { useContext } from "react";
import icons from "styles/assets/icons/icon-ds.svg";
import Image from "next/image";
import Sidebar from "src/components/layouts/sidebar-mobile";
import { AppContext } from "providers";
function index() {
  const { sidebar, setSideBar } = useContext(AppContext);
  return (
    <>
      <div className="ds-header d-flex mx-auto sticky-top">
        <div className="ds-container d-flex mx-auto d-flex align-items-center my-auto w-100 justify-content-between">
          <div className="iconDS position-relative">
            <div>
              <Image src={icons} layout="fill" alt="" srcset="" quality={100} />
            </div>
          </div>
          <div
            className="btn-menu d-sm-none d-block"
            onClick={() => setSideBar(!sidebar)}
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
              <li>Activities</li>
              <li>Startup Data</li>
              <li>Gadget Data</li>
              <li>Partner</li>
              <li>For Readers</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="p-0 m-0 line-btm" />
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
