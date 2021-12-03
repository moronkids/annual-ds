import React from "react";
import Image from "next/image";
import facebook from "styles/assets/icons/fb.svg";
import linkedin from "styles/assets/icons/linkedin.svg";
import twitter from "styles/assets/icons/twitter.svg";
import ig from "styles/assets/icons/ig.svg";
function index() {
  return (
    <div className="ds-footer d-flex justify-content-center align-items-center">
      <div className="ds-container d-sm-flex d-block justify-content-md-between justify-content-center align-items-center my-auto h-100 w-100 mx-auto p-sm-auto p-0 m-0">
        <div className="content">
          Copyright © 2021 - Annual Report DailySocial.id
        </div>
        <div>
          <ul className="d-flex flex-row my-auto mx-auto text-center justify-content-center">
            <li>
              <Image src={facebook}></Image>
            </li>
            <li>
              <Image src={twitter}></Image>
            </li>
            <li>
              <Image src={linkedin}></Image>
            </li>
            <li>
              <Image src={ig}></Image>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
