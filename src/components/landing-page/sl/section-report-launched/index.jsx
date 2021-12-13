import React from "react";
import Shade from "styles/assets/shade-report.svg";
import Carousel from "src/components/landing-page/sl/section-desc/carousel";
import { DataCarouselActTop } from "src/helpers/dummy-data/dataouract-top";
import { DataCarouselActBottom } from "src/helpers/dummy-data/dataouract-below";
import { DataCarouselReportTop } from "src/helpers/dummy-data/datareport-top";
import { DataCarouselReportBottom } from "src/helpers/dummy-data/datareport-bottom";
function Index() {
  return (
    <>
      <div className="position-relative ds-report-launched d-flex flex-column justify-content-center align-items-start">
        <div className="box-shade position-absolute"></div>
        <div className="ds-container d-flex mx-auto flex-column justify-content-start w-100">
          <div className="text-title">
            18 reports have been launched in 2021
          </div>
          <div className="text-desc">
            We provide a trustworthy and credible data about consumer or
            industry preferences in 2021.{" "}
          </div>
        </div>
        <div className="w-100 h-100">
          <div className="ds-crsl-1">
            <Carousel
              slidesToScroll={1}
              DataCarousel={DataCarouselReportTop}
              direction="right"
            />
            <Carousel
              slidesToScroll={-1}
              DataCarousel={DataCarouselReportBottom}
              direction="left"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
