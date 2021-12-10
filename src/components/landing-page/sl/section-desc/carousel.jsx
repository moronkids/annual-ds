import React, { Component, Fragment } from "react";

// libs
import Image from "next/image";
import Slider from "react-slick";

// assets
import DummyImg from "styles/assets/carousel/example.png";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      slidesToShow: 7,
      slidesToScroll: this.props.slidesToScroll || 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 5,
            slidesToScroll: this.props.slidesToScroll < 0 ? -5 : 5,
            // infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: this.props.slidesToScroll < 0 ? -5 : 5,
            // infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: this.props.slidesToScroll < 0 ? -4 : 4,
            // infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: this.props.slidesToScroll < 0 ? -4 : 4,
            // infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: this.props.slidesToScroll < 0 ? -2 : 2,
            // infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: this.props.slidesToScroll < 0 ? -2 : 2,
            // initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: this.props.slidesToScroll < 0 ? -1 : 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Slider {...settings}>
          {this.props.DataCarousel?.map((val, i) => {
            return (
              <Fragment key={i}>
                <div
                  style={{
                    width: "100%",
                    minWidth: "255px",
                    maxWidth: "255px",
                    height: "100%",
                    minHeight: "160px",
                    maxHeight: "160px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                  className="slide sd"
                >
                  <Image
                    src={val.images}
                    layout="intrinsic"
                    objectFit="cover"
                    quality={100}
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </Fragment>
            );
          })}
        </Slider>
      </Fragment>
    );
  }
}
