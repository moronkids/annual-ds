import React, { useState } from "react";

// libs
import Image from "next/image";
import Fade from "react-reveal/Fade";
import ReactPlaceholder from "react-placeholder/lib";

// components
import Skeleton from "./Skeleton";

// assets
import journey from "src/assets/images/illustration/journey.png";
import { ga_mobile } from "src/helpers/tracker/GaMobile";

export default function Index() {
  const [ready, setReady] = useState(false);

  const checkReady = () => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  };

  checkReady();

  return (
    <div className="ds-section__journey">
      <div className="position-relative">
        <div
          id="readers"
          className="position-absolute"
          style={{
            top: "-160px",
          }}
        />
      </div>
      <div className="container">
        <ReactPlaceholder
          showLoadingAnimation
          ready={ready}
          customPlaceholder={<Skeleton />}
        >
          <div className="row justify-content-center ds-section__journey-inner">
            <div className="col-md-auto">
              <Fade bottom duration={1000}>
                <div className="ds-section__journey-img">
                  <Image
                    loading="eager"
                    src={journey}
                    width={190}
                    height={190}
                  ></Image>
                </div>
              </Fade>
            </div>
            <div className="col-md">
              <Fade right duration={1500}>
                <p className="ds-section__journey-title">
                  Innovation is just a click away
                </p>
                <p className="ds-section__journey-desc">
                  Learn how we work and collaborate with our corporate
                  <br className="desktop-only" /> supporters and partners then
                  bring impact to their business.
                </p>
                <a
                  href="https://dsinnovate.com/contact"
                  target="_blank"
                  className="ds-button"
                  style={{
                    marginTop: "0px",
                  }}
                  onClick={() => {
                    ga_mobile("discuss-btn");
                  }}
                >
                  <span>Discuss with us</span>
                </a>
              </Fade>
            </div>
          </div>
        </ReactPlaceholder>
      </div>
    </div>
  );
}
