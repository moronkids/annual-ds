import React from "react";
import BlankImg from "styles/assets/blank-img-intro.svg";
import Image from "next/image";
import Btn from "src/components/landing-page/sl/section-intro/button";
function index() {
  return (
    <div className="ds-section-intro col-12 d-flex flex-md-row flex-column my-auto">
      <div className="col-md-7 col-12 left-side pt-md-0 pt-4">
        <p className="text-annual">ANNUAL REPORT 2021</p>
        <p className="text-desc">
          Beyond media, <br /> we empower Indonesia startup ecosystem
        </p>
        <Btn />
      </div>
      <div className="img col-md-5 col-12 text-md-right text-center ">
        <Image src={BlankImg}></Image>
      </div>
    </div>
  );
}

export default index;
