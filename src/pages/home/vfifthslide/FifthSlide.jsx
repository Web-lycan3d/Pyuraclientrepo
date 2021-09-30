/** @format */

import React from "react";
import "./fifthslide.styles.scss";
import pattern from "./pattern.png";

const FifthSlide = () => {
  return (
    <div className="fifth-container">
      <div className="fifth-bg">
        <img src={pattern} alt="pattern" />
      </div>
      <div className="fifth-contents">
        <div className="fifth-img">
          <img src="https://i.ibb.co/K0g7bjK/Mask-Group-31.webp" alt="pyura6" />
        </div>
        <div className="fifth-text">
          <h3>5-Layered Protection</h3>
          <span>
            Our team conceptualised and developed Pyura Air, a respiratory
            assistive device that takes in ambient air, filters it, and provides
            uninterrupted clean air to the user. Medical-grade filters with
            nanocoatings are integrated into the device to neutralize the COVID
            virus upon contact. In collaboration with CSIR - the Indian
            Institute of Chemical Technology - the nanocoatings were developed
            for this device.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FifthSlide;
