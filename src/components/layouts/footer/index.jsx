import React from "react";
import Image from "next/image";
import facebook from "styles/assets/icons/fb.svg";
import linkedin from "styles/assets/icons/linkedin.svg";
import twitter from "styles/assets/icons/twitter.svg";
import ig from "styles/assets/icons/ig.svg";
function index() {
  return (
    <div className="ds-footer d-flex justify-content-center align-items-center">
      <div className="ds-container d-flex justify-content-between align-items-center my-auto h-100 w-100">
        <div className="content">
          Copyright © 2021 - Annual Report DailySocial.id
        </div>
        <div>
          <ul className="d-flex flex-row my-auto">
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
