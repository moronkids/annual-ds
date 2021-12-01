import React, { Component } from "react";
import Slider from "react-slick";
import DummyImg from "styles/assets/carousel/example.png";
import Image from "next/image";
export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    // this.play = this.play.bind(this);
    // this.pause = this.pause.bind(this);
  }
  //   play() {
  //     this.slider.slickPlay();
  //   }
  //   pause() {
  //     this.slider.slickPause();
  //   }
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
      easing: "liniear",
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
                    minHeight: "200px",
                    maxHeight: "255px",
                    height: "100%",
                    maxHeight: "160px",
                    minHeight: "100px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                  className="sd"
                >
                  <Image
                    src={DummyImg}
                    layout="responsive"
                    objectFit="cover"
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </>
            );
          })}
        </Slider>
        {/* <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div> */}
      </>
    );
  }
}
