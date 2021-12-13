import React from "react";

// libs
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Link from "next/link";
// assets
import { DataDevices } from "src/helpers/dummy-data/datadevices";

export default function Index() {
  return (
    <div className="ds-section__devices">
      <div className="container ds-section__devices-title">
        <div className="row justify-content-center text-center">
          <div className="position-relative">
            <div
              id="gadget"
              className="position-absolute"
              style={{
                top: "-160px",
              }}
            />
          </div>
          <div className="col-md-9">
            <Fade bottom duration={1000}>
              <p className="ds-section__devices-title-main">
                The most famous
                <br className="mobile-only" /> smartphone in 2021
              </p>
              <p className="ds-section__devices-title-sub">
                Smartphones is a thing that new technology won't be able to
                displace them.
                <br className="desktop-only" /> Let's take a look at the 5 most
                monumental smartphones in 2021!
              </p>
            </Fade>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center text-center ds-section__devices-item-wrapper">
              {DataDevices.map((value, index) => (
                <div className="col-md-3 col-6" key={index}>
                  <div className="ds-section__devices-item">
                    <div className="ds-section__devices-item-images d-flex justify-content-center align-items-center mx-auto">
                      <Fade duration={3500}>
                        <div className="ds-section__devices-item-images-bg"></div>
                      </Fade>
                      <Fade top duration={1500}>
                        <a href={value.link} target="_blank" className="w-100">
                          <div
                            className="wrap-img"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Image
                              layout="fill"
                              src={value.images}
                              objectFit="contain"
                              className="ds-section__devices-item-images-inner"
                            ></Image>
                          </div>
                        </a>
                      </Fade>
                    </div>

                    <Fade bottom duration={1500}>
                      <p className="ds-section__devices-item-name">
                        {value.name}
                      </p>
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
