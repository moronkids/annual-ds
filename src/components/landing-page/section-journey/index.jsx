import React from 'react';

// libs
import Image from "next/image";
import Fade from 'react-reveal/Fade';

// assets
import journey from "src/assets/images/illustration/journey.png";

export default function Index() {
  return (
    <div className="ds-section__journey">
      <div className="container">
        <div className="row justify-content-center ds-section__journey-inner">
          <div className="col-md-auto">
            <Fade bottom duration={1000}>
              <div className="ds-section__journey-img">
                <Image src={journey}></Image>
              </div>
            </Fade>
          </div>
          <div className="col-md">
            <Fade right duration={1500}>
              <p className="ds-section__journey-title">Eager to be part of our journey?</p>
              <p className="ds-section__journey-desc">Let’s get in touch and discuss further about the future of<br className="desktop-only" /> 
              Indonesian startup ecosystem!</p>
              <a href="https://dailysocial.id/" target="_blank" className="ds-button"><span>Let’s subscribe</span></a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}