import React from 'react';
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import wiku from "src/assets/images/photo/wiku.png";

export default function Index() {
  return (
    <div className="ds-section-gadget">

      <div className="ds-section-gadget__content">
        <div className="container">
          <div className="row justify-content-center ds-section-gadget__content-bod">
            <div className="col-md-auto">
              <div className="ds-section-gadget__content-bod-detail-photo">
                <Fade bottom duration={1000}>
                  <Image src={wiku}></Image>
                </Fade>
              </div>
            </div>
            <div className="col-md">
              <div className="ds-section-gadget__content-bod-detail">
                <Fade bottom duration={1500}>
                  <p className="ds-section-gadget__content-bod-text">
                    "It's been quite tough to adapt to extraordinary circumstances in 2021. However, it doesn’t stop the technological development that keeps on evolving. We could see through the number of monumental smartphone that has been released, also the number of AAA games sales and its players. We know, that they are still growing."
                  </p>

                  <p className="ds-section-gadget__content-bod-detail-name">Wiku Baskoro</p>

                  <p className="ds-section-gadget__content-bod-detail-position">Commisioner DailySocial.id and CEO &amp; Founder of Hybrid</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}