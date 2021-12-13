import React, { useState } from "react";

// libs
import Image from "next/image";
import Fade from "react-reveal/Fade";
import ReactPlaceholder from "react-placeholder/lib";

// components
import Skeleton from "./Skeleton";

// dummy
import { DataReaders } from "src/helpers/dummy-data/dataReaders";

export default function index() {
  const [ready, setReady] = useState(false);

  const checkReady = () => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  };

  checkReady();

  return (
    <div className="ds-section__readers">
      <div className="ds-container mx-auto w-100">
        <div className="container">
          <ReactPlaceholder
            showLoadingAnimation
            ready={ready}
            customPlaceholder={<Skeleton />}
          >
            {DataReaders.map((value, index) => (
              <div
                className="row ds-section__readers-inner align-items-center"
                key={index}
              >
                <div
                  className={`col-md ds-section__readers-desc ${value.imagesDirection}`}
                >
                  <Fade bottom duration={1500}>
                    <div className="ds-section__readers-desc">
                      <p className="ds-section__readers-desc-title">
                        {value.title}
                      </p>
                      <p className="ds-section__readers-desc-content">
                        {value.desc}
                      </p>
                      <p className="ds-section__readers-desc-date">
                        *per Oct 2021
                      </p>
                    </div>
                  </Fade>
                </div>
                <div className={`col-md-auto ds-section__readers-img`}>
                  <Fade bottom duration={1000}>
                    <Image src={value.images} width={475} height={400} />
                  </Fade>
                </div>
              </div>
            ))}
          </ReactPlaceholder>
        </div>
      </div>
    </div>
  );
}
