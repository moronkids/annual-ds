import React from "react";
import icons from "styles/assets/icons/icon-ds.svg";
import Image from "next/image";
function index() {
  return (
    <>
      <div className="ds-header d-flex mx-auto">
        <div className="ds-container d-flex mx-auto d-flex align-items-center my-auto w-100 justify-content-between">
          <div className="iconDS">
            <Image src={icons} alt="" srcset="" />
          </div>
          <div className="list-menu">
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
    </>
  );
}

export default index;
