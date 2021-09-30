/** @format */

import React from "react";
import Cards from "../../../components/Secondslidecards/Cards";
import "./secondslide.styles.scss";

const Secondslide = () => {
  const cardDetails = [
    {
      name: "Nano filter",
      desp: "Nanofiltration membranes with a pore size of (10-3−10-4 μm) coated with Nano-Particles which exhibit Antibacterial, Antiviral and Antifungal Properties",
    },
    {
      name: "Safe & Comfortable",
      desp: "Combination of rigid ABS & clean polycarbonate structure with medical-grade silicone to ensure superior comfort",
    },
    {
      name: "Lower Cost",
      desp: "Maintenance-free and has an expected life span of 3+ years. It also has a lower purchase price when compared to other advanced technology purifying masks.",
    },
  ];
  return (
    <div className="second-container" id="pagetwo">
      <div className="second-contents">
        <div className="second-header">
          <h3>COVID-19</h3>
        </div>
        <div className="second-text">
          <p>
            COVID has affected all our lives in some way or the other and our
            planet has suffered immensely as a result of this disease. We at
            Lycan Biotech knew that with our cutting-edge technology, we could
            offer a solution to help battle this devastating virus and give hope
            and further security to the masses. As a reusable, air-purifying
            mask, Pyura Air is here to take you through these difficult times
            with more ease and less tension. COVID has had a lasting impact on
            our daily lives but we are here to ensure that you can step out into
            the world feeling a little bit safer and more prepared for what
            might lie ahead.
          </p>
        </div>
        <div className="second-img">
          <img
            src="https://i.ibb.co/y4s7Q7H/Pyura-renders-8.webp"
            alt="pyura3"
          />
          <div className="second-img-text">
            <p>
              Eliminates <span> 99.99%</span> Covid Virus
            </p>
          </div>
        </div>
      </div>
      <div className="second-cards">
        {cardDetails.map((item) => (
          <Cards details={item} />
        ))}
      </div>
    </div>
  );
};

export default Secondslide;
