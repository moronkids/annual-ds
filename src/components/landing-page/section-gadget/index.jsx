import React from 'react';
import Image from "next/image";
import wiku from "../../../assets/images/photo/wiku.png";
import iphone from "../../../assets/images/photo/iphone13.png";
import samsung from "../../../assets/images/photo/galaxy-z.png";
import vivo from "../../../assets/images/photo/vivo.png";
import m11 from "../../../assets/images/photo/m11.png";
import poco from "../../../assets/images/photo/poco.png";

export default function Index() {
  return (
    <div className="ds-section-gadget">

      <div className="ds-section-gadget__content">
        <div className="container">
          <div className="row justify-content-center ds-section-gadget__content-bod">
            <div className="col-md-auto">
              <div className="ds-section-gadget__content-bod-detail-photo">
                <Image src={wiku}></Image>
              </div>
            </div>
            <div className="col-md">
              <div className="ds-section-gadget__content-bod-detail">
                <p className="ds-section-gadget__content-bod-text">
                  "It's been quite tough to adapt to extraordinary circumstances in 2021. However, it doesn’t stop the technological development that keeps on evolving. We could see through the number of monumental smartphone that has been released, also the number of AAA games sales and its players. We know, that they are still growing."
                </p>

                <p className="ds-section-gadget__content-bod-detail-name">Wiku Baskoro</p>

                <p className="ds-section-gadget__content-bod-detail-position">Commisioner DailySocial.id and CEO & Founder of Hybrid</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-gadget__devices">
        <div className="container ds-section-gadget__devices-title">
          <div className="row justify-content-center text-center">
            <div className="col-md-9">
              <p className="ds-section-gadget__devices-title-main">The most famous<br className="mobile-only" /> smartphone in 2021</p>
              <p className="ds-section-gadget__devices-title-sub">Smartphones is a thing that new technology won't be able to displace them.<br className="desktop-only" /> Let's take a look at the 5 most monumental smartphones in 2021!</p>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center text-center ds-section-gadget__devices-item-wrapper">
                <div className="col-md-3 col-6">
                  <div className="ds-section-gadget__devices-item">
                    <div className="ds-section-gadget__devices-item-images">
                      <Image src={iphone} className="ds-section-gadget__devices-item-images-inner"></Image>
                    </div>
                    <p className="ds-section-gadget__devices-item-name">iPhone 13</p>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="ds-section-gadget__devices-item">
                    <div className="ds-section-gadget__devices-item-images">
                      <Image src={samsung} className="ds-section-gadget__devices-item-images-inner"></Image>
                    </div>
                    <p className="ds-section-gadget__devices-item-name">Samsung Z Fold3</p>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="ds-section-gadget__devices-item">
                    <div className="ds-section-gadget__devices-item-images">
                      <Image src={vivo} className="ds-section-gadget__devices-item-images-inner"></Image>
                    </div>
                    <p className="ds-section-gadget__devices-item-name">Vivo X70 Pro </p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="ds-section-gadget__devices-item">
                    <div className="ds-section-gadget__devices-item-images">
                      <Image src={m11} className="ds-section-gadget__devices-item-images-inner"></Image>
                    </div>
                    <p className="ds-section-gadget__devices-item-name">Mi 11 Ultra</p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="ds-section-gadget__devices-item">
                    <div className="ds-section-gadget__devices-item-images">
                      <Image src={poco} className="ds-section-gadget__devices-item-images-inner"></Image>
                    </div>
                    <p className="ds-section-gadget__devices-item-name">Poco F3</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}