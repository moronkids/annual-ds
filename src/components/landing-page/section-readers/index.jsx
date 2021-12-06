import React from 'react';
import Image from "next/image";
import PublicData from "../../../assets/images/illustration/public-data.png";
import PlayersData from "../../../assets/images/illustration/players-data.png";
import Tournament from "../../../assets/images/illustration/tournament.png";

export default function index() {
  return (
    <div className="ds-section-readers">
      <div className="ds-container mx-auto w-100">
        <div className="container">
          <div className="row ds-section-readers__inner">
            <div className="col-md-auto ds-section-readers__img">
              <Image src={PublicData} />
            </div>
            <div className="col-md">
              <div className="ds-section-readers__desc">
                <p className="ds-section-readers__desc-title">
                  Top 5 AAA game sales based on public data in 2021* 
                </p>
              </div>
              <p className="ds-section-readers__desc-date">*per Oct 2021</p>
            </div>
          </div>
          
          <div className="row ds-section-readers__inner">
            <div className="col-md-auto ds-section-readers__img right">
              <Image src={PlayersData} />
            </div>
            <div className="col-md">
              <div className="ds-section-readers__desc">
                <p className="ds-section-readers__desc-title">
                  Top AAA game title based on players in 2021* 
                </p>
              </div>
              <p className="ds-section-readers__desc-date">*per Oct 2021</p>
            </div>
          </div>
          
          <div className="row ds-section-readers__inner">
            <div className="col-md-auto ds-section-readers__img">
              <Image src={Tournament} />
            </div>
            <div className="col-md">
              <div className="ds-section-readers__desc">
                <p className="ds-section-readers__desc-title">
                  Indonesia's official esports tournament 2021* 
                </p>
                <p className="ds-section-readers__desc-content">It's not only a sport, but it‌'s also the most popular eSports of today.</p>
                <p className="ds-section-readers__desc-date">*per Oct 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
