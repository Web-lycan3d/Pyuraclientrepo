/** @format */

import React from "react";
import "./cards.styles.scss";

const Cards = ({ details }) => {
  return (
    <div className="second-card-box">
      <div className="card-content">
        <h4>{details.name}</h4>
        <span>{details.desp}</span>
      </div>
    </div>
  );
};

export default Cards;
