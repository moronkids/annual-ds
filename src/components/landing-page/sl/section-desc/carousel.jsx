import React, { Component } from "react";
import Slider from "react-slick";
import DummyImg from "styles/assets/carousel/example.png";
import Image from "next/image";
export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      slidesToShow: 7,
      slidesToScroll: this.props.slidesToScroll,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      infinite: true,
      pauseOnHover: true,
      cssEase: "linear",
      easing: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: this.props.slidesToScroll < 0 ? -3 : 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: this.props.slidesToScroll < 0 ? -2 : 2,
            initialSlide: 2,
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
      <>
        <Slider {...settings}>
          {[...Array(10)].map((val, i) => {
            return (
              <>
                <div
                  class="slide"
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
                  className="sd"
                >
                  <Image
                    src={DummyImg}
                    layout="responsive"
                    objectFit="contains"
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </>
    );
  }
}
