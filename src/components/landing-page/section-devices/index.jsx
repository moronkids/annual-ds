import React, { useState } from 'react';

// libs
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import ReactPlaceholder from 'react-placeholder/lib';

// components
import Skeleton from './Skeleton';

// assets
import { DataDevices } from "src/helpers/dummy-data/datadevices";

function Index() {
  const [ready, setReady] = useState(false);

  const checkReady = () => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }

  checkReady();

  return (
    <div className="ds-section__devices">
      <div className="container ds-section__devices-title">
        <div className="row justify-content-center text-center">
          <div className="col-md-9">
            <Fade bottom duration={1000}>
              <p className="ds-section__devices-title-main">The most monumental smartphones in 2021</p>
              <p className="ds-section__devices-title-sub">Smartphones is a thing that new technology won't be able to displace them.<br className="desktop-only" /> Let's take a look at the 5 most monumental smartphones in 2021!</p>
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

                  <ReactPlaceholder showLoadingAnimation ready={ready} customPlaceholder={<Skeleton />}>
                    <div className="ds-section__devices-item">
                      <div className="ds-section__devices-item-images">
                        <Fade duration={3500}>
                          <div className="ds-section__devices-item-images-bg"></div>
                        </Fade>
                        <Fade top duration={1500}>
                          <Image src={value.images} className="ds-section__devices-item-images-inner" width={value.w} height={184}></Image>
                        </Fade>
                      </div>

                      <Fade bottom duration={1500}>
                        <p className="ds-section__devices-item-name">{value.name}</p>
                      </Fade>
                    </div>
                  </ReactPlaceholder>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;