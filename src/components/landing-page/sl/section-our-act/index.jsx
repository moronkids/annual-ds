import React from "react";
import Image from "next/image";
function Index() {
  return (
    <>
      <div className="ds-container d-flex justify-content-centner align-items-center mx-auto">
        <div className="ds-our-act w-100">
          <div className="col-12 w-100 d-md-flex d-block justify-content-between">
            <div className="col-md-auto col-12 ds-our-act-desc">
              We are here to democratize access, knowledge for technology and
              innovation through startup entrepreneurship
            </div>
            <div className="col-md  col-12 position-relative float-right">
              <div className="ds-our-act-boxAct position-relative">
                <div
                  className="img position-absolute"
                  style={{ zIndex: "100" }}
                ></div>
                <div className="wrapping position-absolute">
                  <>
                    <div className="number">6.636</div>
                    <div className="desc">
                      Hours of engagement with  startup communities
                    </div>
                  </>
                  <>
                    <div className="number">594.760</div>
                    <div className="desc">
                      Startup enthusiast come together  to our event
                    </div>
                  </>
                  <>
                    <div className="number">592.432</div>
                    <div className="desc">
                      Times people streamed our video content
                    </div>
                  </>
                  <>
                    <div className="number">1.535</div>
                    <div className="desc">
                      Founders and entrepreneurs joined  our accelerator and
                      incubation programs
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
