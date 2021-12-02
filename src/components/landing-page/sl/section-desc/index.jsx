import React from "react";
import Person from "styles/assets/photo-desc-person.svg";
import Image from "next/image";
import Carousel from "src/components/landing-page/sl/section-desc/carousel";
import DS_funding from "src/components/landing-page/sl/section-funding";
//tes
function Index(props) {
  return (
    <div className="ds-section-desc">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <div
        className={`ds-container ds-section-desc-content col-12 d-flex flex-md${
          props.reverse ? "-row-reverse " : "-row "
        } justify-content-center w-100 mx-auto flex-column${
          !props.reverse ? "-reverse " : " "
        }`}
      >
        <div className="col-md-auto col-12 text-md-left text-center">
          <Image src={Person} />
          <div
            id="name-person"
            className="p-0 m-0"
            dangerouslySetInnerHTML={{ __html: props.person }}
          ></div>
          <div
            id="title-person"
            className="p-0 m-0"
            dangerouslySetInnerHTML={{ __html: props.title }}
          >
            {/* {props.title} */}
          </div>
        </div>
        <div className="col-md col-12 text-desc">
          <p>{props.data}</p>
          {props.afterDataHTML === true ? (
            <div
              className="highlights"
              dangerouslySetInnerHTML={{
                __html: props.afterData,
              }}
            ></div>
          ) : (
            <div className="highlights">{props.afterData}</div>
          )}
        </div>
      </div>

      {props.slide && (
        <>
          <div className="d-flex  justify-content-center mx-auto w-100">
            <h2 className="act">Our Activities</h2>
          </div>
          <Carousel slidesToScroll={1} />
          <Carousel slidesToScroll={-1} />
        </>
      )}
      {props.slide === false && (
        <>
          <DS_funding />
        </>
      )}
    </div>
  );
}

export default Index;
