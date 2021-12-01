import React from "react";
import Person from "styles/assets/photo-desc-person.svg";
import Image from "next/image";
//tes
function Index() {
  return (
    <div className="ds-section-desc">
      <div className="ds-container ds-section-desc-content col-12 d-flex justify-content-center w-100 mx-auto">
        <div className="col-auto">
          <Image src={Person} />
          <p id="name-person" className="p-0 m-0">
            Rama Muamaya
          </p>
          <p id="title-person" className="p-0 m-0">
            Founder & CEO
          </p>
        </div>
        <div className="col text-desc">
          <p>
            “2021 is not about adapting anymore, it’s time for us to move
            forward, strengthen our foundation, to connect, and to innovate
            more. Within a year, I have to say all of the endeavours and
            dedication we have invested will only lead us into further
            improvements. We have done and improve so much, holding one purpose,
            our dream in DailySocial.id to help as many founders and
            entrepreneurs navigate technology and innovation, and this is one of
            those times where we make our dreams come true.”
          </p>
          <p className="highlights">
            Here it is what we did in 2021 to make technology and innovation
            available for all!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
