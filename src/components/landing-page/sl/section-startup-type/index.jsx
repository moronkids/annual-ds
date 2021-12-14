import React from "react";

// libs
import Image from "next/image";
import Slide from "react-reveal/Slide";

// assets
import Centaur from "styles/assets/Centaur.png";
import Unicorn from "styles/assets/Unicorn.png";

function Index(props) {
  const decidePhoto = (val) => {
    if (val === "unicorn") {
      return Unicorn;
    } else {
      return Centaur;
    }
  };
  return (
    <>
      <div className="ds-startup-type">
        <div className="ds-container d-flex mx-auto w-100">
          <div
            className={`wrapup col-12 d-flex flex-column-reverse justify-content-between align-items-center flex-md-row${
              props.reverse ? "-reverse" : ""
            }`}
          >
            <Slide top>
              <div className="col-md-auto col-12 desc my-auto">
                <div className="desc-title  pt-lg-0 pt-sm-5 p-0">
                  {props.startuptype === "unicorn"
                    ? `In 2021, Indonesia has 11 Unicorns*`
                    : `In 2021, Indonesia has 50 Centaurs*`}
                </div>
                <div className="desc-content">
                  {props.startuptype === "unicorn"
                    ? `Unicorn startups  grow so fast in Indonesia. Per mid of November 2021,  we’ve got 5 new unicorn startups! Who's the next unicorn?`
                    : `Aspiring unicorn in Indonesia is flourishing! We possibly get more unicorn startups one year ahead.`}
                </div>
                <div className="desc-date">*per mid of Nov 2021</div>
              </div>
            </Slide>
            <Slide bottom>
              <div className="col-md col-12 img">
                <Image
                  src={decidePhoto(props.startuptype)}
                  quality={100}
                  loading="eager"
                />
              </div>
            </Slide>
          </div>
        </div>
        {props.readmore && (
          <div className="ds-startup-type__btn-more d-flex mx-auto justify-content-center align-items-center w-100">
            <p>
              Read more at Startup Report 2021 <i>(coming soon)</i>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
