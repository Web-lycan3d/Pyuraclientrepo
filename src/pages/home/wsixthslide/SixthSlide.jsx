/** @format */

import React from "react";
import "./sixthslide.styles.scss";
import header from "./header.svg";

const SixthSlide = () => {
  return (
    <div className="sixth-container">
      <div className="sixth-contents">
        <div className="sixth-img-header">
          <img
            src="https://i.ibb.co/wsRp1g1/Group-80-min.png"
            alt="filtration"
          />
        </div>
        <div className="sixth-contents-main">
          <div className="sixth-img">
            <img
              src="https://i.ibb.co/482Cr1X/Pyura-renders-4.webp"
              alt="pyura7"
            />
          </div>
          <div className="sixth-text">
            <h4>Strap in and Secure Yourself</h4>
            <span>
              The strap provided with the mask was designed in such a way so as
              to ensure a custom fit around the nose and chin, minimizing air
              leakage while maintaining comfort for everyday wear. The strap is
              hung around the neck and the mask can be aligned from the chin.
              The strap is then tightened to ensure the mask is secured on the
              face and head for maximum protection.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSlide;
