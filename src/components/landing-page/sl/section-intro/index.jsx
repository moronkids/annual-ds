import React from "react";
// import BlankImg from "styles/assets/blank-img-intro.svg";
import HeroIntro from "styles/assets/Hero-intro.png";
import Image from "next/image";
import Btn from "src/components/landing-page/sl/section-intro/button";
import Fade from "react-reveal/Fade";
function index() {
  return (
    <div className="ds-section-intro col-12 d-flex flex-md-row flex-column my-auto">
      <Fade left>
        <div className="col-md-7 col-12 left-side pt-md-0 pt-4">
          <p className="text-annual">ANNUAL REPORT 2021</p>
          <p className="text-desc">
            Beyond media, <br /> we empower Indonesia startup ecosystem
          </p>
          <Btn />
        </div>
      </Fade>

      <Fade right>
        <div className="img col-md-5 col-12 text-md-right text-center ">
          <Image src={HeroIntro} quality={100}></Image>
        </div>
      </Fade>
    </div>
  );
}

export default index;
