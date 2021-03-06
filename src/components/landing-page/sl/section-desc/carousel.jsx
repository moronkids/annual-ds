import React, { Component, Fragment } from "react";

// libs
import Image from "next/image";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
// assets
import DummyImg from "styles/assets/carousel/example.png";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Marquee
          direction={this.props.direction}
          pauseOnHover={true}
          speed={40}
          gradientWidth={30}
        >
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
                    marginBottom: "30px",
                    marginRight: "30px",
                    boxShadow: "0 3px 10px #F4F4F4",
                  }}
                  className="slide sd"
                >
                  <Image
                    src={val.images}
                    layout="intrinsic"
                    objectFit="cover"
                    quality={100}
                    loading="eager"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 3px 10px #F4F4F4",
                    }}
                  />
                </div>
              </Fragment>
            );
          })}
        </Marquee>
      </Fragment>
    );
  }
}
