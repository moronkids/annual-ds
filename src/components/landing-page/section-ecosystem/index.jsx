import React from 'react';

// libs
import Image from "next/image";
import Fade from 'react-reveal/Fade';

// assets
import bell from "src/assets/images/illustration/bell.png";
import connect from "src/assets/images/illustration/connect.png";

export default function Index() {
  return (
    <div className="ds-section">

      <div className="ds-section__ecosystem">
        <div className="container">
          <div className="row text-center">
            <div className="col-md">
              <Fade bottom duration={1000}>
                <p className="ds-section__ecosystem-main-title">Want to get involved in Indonesia Startup Ecosystem?</p>
              </Fade>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <Fade bottom duration={1500}>
                    <div className="ds-section__ecosystem-items">
                      <div className="row">
                        <div className="col-md-auto ds-section__ecosystem-items-img">
                          <Image src={bell}></Image>
                        </div>
                        <div className="col-md">
                          <p className="ds-section__ecosystem-items-text">Get unlimited access to discover the best minds of innovation in Indonesia!</p>

                          <a href="https://dailysocial.id/" target="_blank" className="ds-button"><span>Get connected</span></a>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>

                <div className="col-md-6">
                  <Fade bottom duration={1500}>
                    <div className="ds-section__ecosystem-items">
                      <div className="row">
                        <div className="col-md-auto  ds-section__ecosystem-items-img">
                          <Image src={connect}></Image>
                        </div>
                        <div className="col-md">
                          <p className="ds-section__ecosystem-items-text">Get more experience, connections and many more for the growth of your startup</p>

                          <a href="https://dailysocial.id/" target="_blank" className="ds-button"><span>Let me in</span></a>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}