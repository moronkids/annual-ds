import React from "react";
import { ga_mobile } from "src/helpers/tracker/GaMobile";

function Button() {
  return (
    <>
      <a
        href="#ceo-section"
        className="ds-button no-arrow"
        onClick={() => ga_mobile("journey-btn")}
      >
        <span>Know our journey</span>
      </a>
    </>
  );
}

export default Button;
