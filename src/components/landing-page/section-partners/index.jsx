import React from 'react';
import Image from "next/image";
import arif from "../../../assets/images/photo/arif.png";
import { 
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15, img16, 
  img17, img18, img19, img20, img21, img22, img23, img24, 
  img25, img26, img27, img28, img29, img30, img31, img32, img33, 
} from "../../../assets/images/logo";

export default function Index() {
  
  return (
    <div className="ds-section-partners">
      <div className="ds-section-partners__clients">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10">
              <p className="ds-section-partners__clients-title">Partners and supporters </p>

              <div className="ds-section-partners__clients-list">
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
            </div>
          </div>
        </div>
      </div>


      <div className="ds-section-partners__what-next">
        <div className="container">
          <div className="row justify-content-center ds-section__content-bod">
            <div className="col-md">
              <p className="ds-section-partners__what-next-title">What’s next?</p>
              <div className="ds-section__content-bod-detail">
                <p className="ds-section__content-bod-detail-desc">
                  This year, through DS/Innovate, we helped companies and enterprises connect to Indonesia's startup ecosystem through advisory, research, hackathon, incubator and accelerator programs. We also enable organizations to innovate from within by embedding an innovative mindset through education and training. Soon we plan to help Indonesia's startup ecosystem to interact directly with one another through a platform that we will launch soon, where our motto here is discover great companies and explore opportunities all in one place.
                </p>

              </div>
            </div>
            <div className="col-md-auto">
              <div className="ds-section__content-bod-detail-photo">
                <Image src={arif}></Image>

                <p className="ds-section__content-bod-detail-name text-center">Arif Hardiyanto</p>
                <p className="ds-section__content-bod-detail-position text-center">GM of Operation DailySocial.id</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="ds-section-partners__journey">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              
            </div>
          </div>
        </div>
      </div>


      <div className="ds-section-partners__what-next">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6">

                </div>

                <div className="col-md-6">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}