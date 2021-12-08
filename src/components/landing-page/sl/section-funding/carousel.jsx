import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from "styles/assets/2.png";
import Img2 from "styles/assets/3.png";
import Img3 from "styles/assets/6.png";
import Image from "next/image";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      center: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div
            className="slider_"
            style={{
              maxWidth: "343px",
              maxHeight: "474px",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={Img1}
              // width={343}
              // height={474}
              layout="responsive"
              objectFit="cover"
              quality={100}
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className="slider_"
            style={{
              maxWidth: "343px",
              maxHeight: "474px",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={Img2}
              // width={343}
              // height={474}
              layout="responsive"
              objectFit="cover"
              quality={100}
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className="slider_"
            style={{
              maxWidth: "343px",
              maxHeight: "474px",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={Img3}
              // width={343}
              // height={474}
              layout="responsive"
              objectFit="cover"
              quality={100}
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
