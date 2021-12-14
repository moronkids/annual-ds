import React, { Fragment, useEffect } from "react";

// libs
import Image from "next/image";
import Fade from "react-reveal/Fade";

// components
import Carousel from "src/components/landing-page/sl/section-desc/carousel";
import DS_funding from "src/components/landing-page/sl/section-funding";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataCarouselActTop } from "src/helpers/dummy-data/dataouract-top";
import { DataCarouselActBottom } from "src/helpers/dummy-data/dataouract-below";
// assets
import personAmir from "styles/assets/masAmir.png";
import personCEO from "styles/assets/PersonCEO.png";

//tes
function Index(props) {
  const decidePhoto = (val) => {
    // console.log(val, props.photo, "cek");
    if (val === "amir") {
      return personAmir;
    } else {
      return personCEO;
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="ds-section-desc">
      {props.photo === "rama" && (
        <div className="position-relative">
          <div
            id="ceo-section"
            className="position-absolute"
            style={{
              top: "-160px",
            }}
          />
        </div>
      )}
      <div
        className={`ds-container ds-section-desc-content col-12 d-flex flex-md${
          props.reverse ? "-row-reverse " : "-row "
        } justify-content-center w-100 mx-auto flex-column${
          !props.reverse ? "-reverse " : " "
        }`}
      >
        <div className="col-md-auto col-12 text-md-left text-center d-flex flex-column mx-auto">
          <Fade bottom>
            <div
              style={{ width: "224px", height: "234px" }}
              className="mx-auto"
            >
              <Image
                src={decidePhoto(props.photo)}
                quality={100}
                className="text-center"
                loading="eager"
              />
            </div>
            <div
              id="name-person"
              className="p-0 m-0"
              dangerouslySetInnerHTML={{ __html: props.person }}
            ></div>
            <div
              id="title-person"
              className="p-0 m-0"
              dangerouslySetInnerHTML={{ __html: props.title }}
            ></div>
          </Fade>
        </div>
        <div className="col-md col-12 text-desc">
          <Fade top>
            <p className="container">{props.data}</p>
          </Fade>
          {props.afterDataHTML === true ? (
            <div
              className="container highlights"
              dangerouslySetInnerHTML={{
                __html: props.afterData,
              }}
            ></div>
          ) : (
            <div className="container highlights">{props.afterData}</div>
          )}
        </div>
      </div>
      <hr
        className="d-sm-none d-block text-center mx-auto"
        style={{
          width: "90%",
        }}
      />
      <div className="position-relative">
        <div
          id="activities"
          className="position-absolute"
          style={{
            top: "-84px",
          }}
        ></div>
      </div>
      {props.slide && (
        <Fragment>
          <div className="d-flex  justify-content-center mx-auto w-100">
            <h2 className="act pb-sm-5 pb-0">Our Activities</h2>
          </div>
          <div className="ds-crsl-1">
            <Carousel
              slidesToScroll={1}
              DataCarousel={DataCarouselActTop}
              direction="right"
            />
            <Carousel
              slidesToScroll={-1}
              DataCarousel={DataCarouselActBottom}
              direction="left"
            />
          </div>
        </Fragment>
      )}
      {props.slide === false && (
        <Fragment>
          <DS_funding />
        </Fragment>
      )}
    </div>
  );
}

export default Index;
