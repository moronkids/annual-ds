import React, { useState } from "react";

// libs
import Image from "next/image";
import Fade from "react-reveal/Fade";
import ReactPlaceholder from "react-placeholder/lib";

// components
import Skeleton from "./Skeleton";

// assets
import wiku from "src/assets/images/photo/wiku.png";

export default function Index() {
  const [ready, setReady] = useState(false);

  const checkReady = () => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  };

  checkReady();

  return (
    <div className="ds-section__gadget">
      <ReactPlaceholder
        showLoadingAnimation
        ready={ready}
        customPlaceholder={<Skeleton />}
      >
        <div className="ds-section__gadget-content">
          <div className="container">
            <div className="row justify-content-center ds-section__gadget-content-bod">
              <div className="col-md-auto">
                <div className="ds-section__gadget-content-bod-detail-photo">
                  <Fade bottom duration={1000}>
                    <Image src={wiku} width={220} height={234}></Image>
                  </Fade>
                </div>
              </div>
              <div className="col-md">
                <div className="ds-section__gadget-content-bod-detail">
                  <Fade bottom duration={1500}>
                    <p className="ds-section__gadget-content-bod-text">
                      "It's been quite tough to adapt to extraordinary
                      circumstances in 2021. However, it doesn’t stop the
                      technological development that keeps on evolving. We could
                      see through the number of monumental smartphone that has
                      been released, also the number of AAA games sales and its
                      players. Many esports tournament are commonly conducted in
                      online or hybrid. We know, that they are still growing."
                    </p>

                    <p className="ds-section__gadget-content-bod-detail-name">
                      Wiku Baskoro
                    </p>

                    <p className="ds-section__gadget-content-bod-detail-position">
                      Commisioner DailySocial.id and CEO &amp; Founder of Hybrid
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactPlaceholder>
    </div>
  );
}
