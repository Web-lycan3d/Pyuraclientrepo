/** @format */

import React from "react";
import "./forthslide.styles.scss";

const ForthSlide = () => {
  return (
    <div className="forth-container">
      <div className="forth-contents">
        <div className="forth-text">
          <h1>Product Specification</h1>
          <div className="table-data">
            <table>
              <tr>
                <td className="td-border-top">Rated Voltage</td>
                <td className="td-noborder td-border-top">12V</td>
              </tr>
              <tr>
                <td>Working Environment</td>
                <td className="td-noborder">10-40 Degree C</td>
              </tr>
              <tr>
                <td>Noise</td>
                <td className="td-noborder">{"<27 Db"}</td>
              </tr>
              <tr>
                <td>Product Weight</td>
                <td className="td-noborder">55g</td>
              </tr>
              <tr>
                <td>Product Size</td>
                <td className="td-noborder">153 x 95 x 101 mm</td>
              </tr>
            </table>
          </div>
          <span>
            The compact size makes it an attractive accessory as well as a safe
            and easy product to use. It is lightweight and the experience would
            be extremely comfortable and noise-free. This reusable mask comes
            with removable filters so it is convenient to use repeatedly.
          </span>
        </div>
        <div className="forth-img">
          <img
            src="https://i.ibb.co/S5ydghQ/Pyura-renders-3.webp"
            alt="pyura5"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default ForthSlide;
