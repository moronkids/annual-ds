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
        } flex-column${
          props.reverse ? "-reverse " : " "
        } justify-content-center w-100 mx-auto`}
      >
        <div className="col-md-auto col-12">
          <Image src={Person} />
          <p id="name-person" className="p-0 m-0">
            {props.person}
          </p>
          <p id="title-person" className="p-0 m-0">
            {props.title}
          </p>
        </div>
        <div className="col-md col-12 text-desc">
          <p>
            {/* “2021 is not about adapting anymore, it’s time for us to move
            forward, strengthen our foundation, to connect, and to innovate
            more. Within a year, I have to say all of the endeavours and
            dedication we have invested will only lead us into further
            improvements. We have done and improve so much, holding one purpose,
            our dream in DailySocial.id to help as many founders and
            entrepreneurs navigate technology and innovation, and this is one of
            those times where we make our dreams come true.” */}
            {props.data}
          </p>
          <p className="highlights">
            {/* Here it is what we did in 2021 to make technology and innovation
            available for all! */}
            {props.afterData}
          </p>
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
