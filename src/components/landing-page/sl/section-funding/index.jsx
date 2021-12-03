import React from "react";
import Xendit from "styles/assets/icons/company/xendit.svg";
import Image from "next/image";
import { startup } from "src/helpers/dummy-data/datastartup";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
function Index() {
  return (
    <div className="ds-container d-flex justify-content-center align-items-center mx-auto">
      <div className="ds-funding w-100 d-flex flex-column justify-content-center align-items-center mx-auto text-center">
        <div
          className="col-12 d-md-flex d-block justify-content-center align-items-center"
          style={{ gap: "30px" }}
        >
          <Fade top>
            <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center">
              <div>
                <p className="number">$4.1bio+</p>
                <p className="desc">Total disclosed startup funding in 2021*</p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col-md-6 col-12 d-flex justify-content-md-start justify-content-center">
              <div>
                <p className="number">191</p>
                <p className="desc">
                  Total startups that received a total of $4,1bio+ in Indonesia*
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="ds-funding-startup ds-container w-100">
          <div className="wrapping-box">
            <div className="grid">
              {startup.map((val, i) => {
                return (
                  <>
                    <Slide bottom>
                      <div class="grid-cell">
                        <div class="cell-content d-flex flex-column justify-content-center align-items-center">
                          <div
                            className="img position-relative col-6 d-flex mx-auto"
                            style={{
                              width: val.w + "px",
                              height: val.h + "px",
                            }}
                          >
                            <Image
                              className="d-flex justify-content-center align-items-center"
                              src={val.img}
                              layout="fill"
                              quality={100}
                            />
                          </div>
                          <div className="funding col-6 d-flex justify-content-center align-items-center">
                            {val.fund}
                          </div>
                        </div>
                      </div>
                    </Slide>

                    {/* <div
                    className="mini-box cell-content col-12 d-flex flex-column m-auto"
                    style={{}}
                  >
                    <div
                      className="img position-relative col-12 d-flex mx-auto"
                      style={{
                        width: "96px",
                        height: "28px",
                      }}
                    >
                      <Image
                        className="d-flex justify-content-center align-items-center"
                        src={Xendit}
                        layout="fill"
                      />
                    </div>
                    <div className="funding col-12 d-flex justify-content-center align-items-center my-auto">
                      $41 mio
                    </div>
                  </div> */}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
