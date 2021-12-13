import React from "react";

// libs
import Image from "next/image";
import Fade from "react-reveal/Fade";

// assets
import PublicData from "src/assets/images/illustration/public-data.png";
import PlayersData from "src/assets/images/illustration/players-data.png";
import Tournament from "src/assets/images/illustration/tournament.png";

export default function index() {
  return (
    <div className="ds-section-readers">
      <div className="ds-container mx-auto w-100">
        <div className="container">
          <div className="row ds-section-readers__inner">
            <div className="col-md-auto ds-section-readers__img right">
              <Fade bottom duration={1000}>
                <Image src={PublicData} />
              </Fade>
            </div>
            <div className="col-md my-auto">
              <Fade bottom duration={1500}>
                <p className="ds-section-readers__desc-title ">
                  Top 5 AAA game sales based on public data in 2021*
                </p>
                <p className="ds-section-readers__desc-date">*per Oct 2021</p>
              </Fade>
            </div>
          </div>

          <div className="row ds-section-readers__inner">
            <div className="col-md-auto ds-section-readers__img">
              <Fade bottom duration={1000}>
                <Image src={PlayersData} />
              </Fade>
            </div>
            <div className="col-md my-auto">
              <Fade bottom duration={1500}>
                <p className="ds-section-readers__desc-title">
                  Top AAA game title based on players in 2021*
                </p>
                <p className="ds-section-readers__desc-date">*per Oct 2021</p>
              </Fade>
            </div>
          </div>

          <div className="row ds-section-readers__inner">
            <div className="col-md-auto ds-section-readers__img right">
              <Fade bottom duration={1000}>
                <Image src={Tournament} />
              </Fade>
            </div>
            <div className="col-md my-auto">
              <Fade bottom duration={1500}>
                <p className="ds-section-readers__desc-title">
                  Indonesia's official esports tournament 2021*
                </p>
                <p className="ds-section-readers__desc-content">
                  It's not only a sport, but it‌'s also the most popular eSports
                  of today.
                </p>
                <p className="ds-section-readers__desc-date">*per Oct 2021</p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
