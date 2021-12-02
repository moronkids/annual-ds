import React from "react";
import Image from "next/image";
import BlankImg from "styles/assets/blank-img-intro.svg";
function Index(props) {
  return (
    <>
      <div className="ds-startup-type">
        <div className="ds-container d-flex mx-auto w-100">
          <div
            className={`wrapup col-12 d-flex flex-column-reverse justify-content-between flex-md-row${
              props.reverse ? "-reverse" : ""
            }`}
          >
            <div className="col-md-auto col-12 desc">
              <div className="desc-title">
                In 2021 Indonesia have 11 Unicorn*
              </div>
              <div className="desc-content">
                Unicorn startups grow so fast in Indonesia. Per November 2021,
                we’ve got 7 new unicorn startups! Who's the next unicorn?
              </div>
              <div className="desc-date">*per mid Nov 2021</div>
            </div>
            <div className="col-md col-12 img">
              <Image src={BlankImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
