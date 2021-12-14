import React, { useState } from "react";

// libs
import Image from "next/image";
import Fade from "react-reveal/Fade";
import ReactPlaceholder from "react-placeholder/lib";

// components
import Skeleton from "./Skeleton";

// assets
import arif from "src/assets/images/photo/arif.png";

export default function Index() {
  const [ready, setReady] = useState(false);

  const checkReady = () => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  };

  checkReady();

  return (
    <div className="ds-section">
      <div className="ds-section__what-next">
        <div className="container">
          <ReactPlaceholder
            showLoadingAnimation
            ready={ready}
            customPlaceholder={<Skeleton />}
          >
            <div className="row justify-content-center ds-section__content-bod">
              <div className="col-md">
                <Fade left duration={1000}>
                  <p className="ds-section__what-next-title">What’s next?</p>
                </Fade>
                <Fade left duration={1500}>
                  <div className="ds-section__content-bod-detail">
                    <p className="ds-section__content-bod-detail-desc">
                      This year, through DS/Innovate, we helped companies and
                      enterprises connect to Indonesia's startup ecosystem
                      through advisory, research, hackathon, incubator and
                      accelerator programs. We also enable organizations to
                      innovate from within by embedding an innovative mindset
                      through education and training. Soon we plan to help
                      Indonesia's startup ecosystem to interact directly with
                      one another through a platform that we will launch soon,
                      where our motto here is discover great companies and
                      explore opportunities all in one place.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="col-md-auto">
                <div className="ds-section__content-bod-detail-photo">
                  <Fade bottom duration={1000}>
                    <Image
                      src={arif}
                      width={220}
                      height={234}
                      loading="eager"
                    ></Image>
                  </Fade>
                  <Fade bottom duration={1500}>
                    <p className="ds-section__content-bod-detail-name text-center">
                      Arif Hardiyanto
                    </p>
                    <p className="ds-section__content-bod-detail-position text-center">
                      GM of Operation DailySocial.id
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </ReactPlaceholder>
        </div>
      </div>
    </div>
  );
}
