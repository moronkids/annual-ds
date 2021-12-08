import Image from "next/image";
import React from 'react';
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  img1, img10, img11, img12, img13, img14, img15, img16,
  img17, img18, img19, img2, img20, img21, img22, img23, img24,
  img25, img26, img27, img28, img29, img3, img30, img31, img32, img33, img4, img5, img6, img7, img8,
  img9
} from "src/assets/images/logo";


export default function Index() {
  
  var settings = {
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
        settings: 'unslick'
      },
      {
        breakpoint: 1024,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="ds-section-partners">
      <div className="ds-section-partners__clients">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="ds-container">

              <Fade bottom duration={1000}>
                <p className="ds-section-partners__clients-title">Partners and supporters </p>
              </Fade>

              <div className="ds-section-partners__clients-list">
                <Slider {...settings}>
                  <Fade bottom duration={1000}>
                    <ul>
                      <li><Image src={img1}></Image></li>
                      <li><Image src={img2}></Image></li>
                      <li><Image src={img3}></Image></li>
                      <li><Image src={img4}></Image></li>
                      <li><Image src={img5}></Image></li>
                      <li><Image src={img6}></Image></li>
                      <li><Image src={img7}></Image></li>
                      <li><Image src={img8}></Image></li>
                    </ul>
                  </Fade>
                  <Fade bottom duration={1500}>
                    <ul>
                      <li><Image src={img9}></Image></li>
                      <li><Image src={img10}></Image></li>
                      <li><Image src={img11}></Image></li>
                      <li><Image src={img12}></Image></li>
                      <li><Image src={img13}></Image></li>
                      <li><Image src={img14}></Image></li>
                      <li><Image src={img15}></Image></li>
                      <li><Image src={img16}></Image></li>
                    </ul>
                  </Fade>
                  <Fade bottom duration={2000}>
                    <ul>
                      <li><Image src={img17}></Image></li>
                      <li><Image src={img18}></Image></li>
                      <li><Image src={img19}></Image></li>
                      <li><Image src={img20}></Image></li>
                      <li><Image src={img21}></Image></li>
                      <li><Image src={img22}></Image></li>
                      <li><Image src={img23}></Image></li>
                      <li><Image src={img24}></Image></li>
                      <li><Image src={img25}></Image></li>
                    </ul>
                  </Fade>
                  <Fade bottom duration={2500}>
                    <ul>
                      <li><Image src={img26}></Image></li>
                      <li><Image src={img27}></Image></li>
                      <li><Image src={img28}></Image></li>
                      <li><Image src={img29}></Image></li>
                      <li><Image src={img30}></Image></li>
                      <li><Image src={img31}></Image></li>
                      <li><Image src={img32}></Image></li>
                      <li><Image src={img33}></Image></li>
                    </ul>
                  </Fade>
                </Slider>
                
                {/* <MobileView>
                  <Slider {...settings}>
                    <div>
                      <ul>
                        <li><Image src={img1}></Image></li>
                        <li><Image src={img2}></Image></li>
                        <li><Image src={img3}></Image></li>
                        <li><Image src={img4}></Image></li>
                        <li><Image src={img5}></Image></li>
                        <li><Image src={img6}></Image></li>
                        <li><Image src={img7}></Image></li>
                        <li><Image src={img8}></Image></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li><Image src={img9}></Image></li>
                        <li><Image src={img10}></Image></li>
                        <li><Image src={img11}></Image></li>
                        <li><Image src={img12}></Image></li>
                        <li><Image src={img13}></Image></li>
                        <li><Image src={img14}></Image></li>
                        <li><Image src={img15}></Image></li>
                        <li><Image src={img16}></Image></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li><Image src={img17}></Image></li>
                        <li><Image src={img18}></Image></li>
                        <li><Image src={img19}></Image></li>
                        <li><Image src={img20}></Image></li>
                        <li><Image src={img21}></Image></li>
                        <li><Image src={img22}></Image></li>
                        <li><Image src={img23}></Image></li>
                        <li><Image src={img24}></Image></li>
                        <li><Image src={img25}></Image></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li><Image src={img26}></Image></li>
                        <li><Image src={img27}></Image></li>
                        <li><Image src={img28}></Image></li>
                        <li><Image src={img29}></Image></li>
                        <li><Image src={img30}></Image></li>
                        <li><Image src={img31}></Image></li>
                        <li><Image src={img32}></Image></li>
                        <li><Image src={img33}></Image></li>
                      </ul>
                    </div>
                  </Slider>
                </MobileView> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}