/** @format */
import React from "react";
import "./firstpage.styles.scss";
import { AiOutlineDown } from "react-icons/ai";

const Firstpage = () => {
  return (
    <div className="firstpage-container">
      <div className="firstpage-mobile-header">
        <h1>
          Pyura <span>air</span>
        </h1>
      </div>
      <div className="bg-img">
        <img src="../images/firstpage/img1.svg" alt="error" />
      </div>
      <div className="firstpage-contents">
        <div className="firstpage-text">
          <h1>
            Pyura <span>air</span>
          </h1>
          <p>Breathe In Purity</p>
          <span>
            An innovation for and beyond COVID. Pyura Air is a wearable,
            self-sanitizing & air purifying mask. With our distinctive air
            filtration system, protect your loved ones from suffocation,
            allergens, microbes and smelly masks! It is the everyday solution to
            eliminate your fears and enjoy stress-free breathing.
          </span>
        </div>
        <div className="firstpage-img">
          <img src="https://i.ibb.co/WKbtMcw/Pyura-renders-2.webp" alt="err" />
        </div>

        <div className="center-text">
          <p>Learn More !</p>{" "}
          <a href="#pagetwo">
            <AiOutlineDown className="center-down-icon" />
          </a>
        </div>
      </div>
      <div className="firstpage-contents-2">
        <div className="firstpage-img-2">
          <img
            src="https://i.ibb.co/RYgzHJ7/Pyura-renders-5.webp"
            alt="pyura2"
          />
        </div>
        <div className="firstpage-text-2">
          <h2>Prioritize your Safety</h2>
          <span>
            Pyura Air’s wearable air purifier is a breakthrough in air purifying
            technology. Its unique ergonomic design has various advantages over
            conventional mask designs available in the market.
            <br /> <br />
            Pyura Air is completely maintenance-free, safe and stable,
            lightweight and compact. The replaceable skins add a personal touch
            to the mask by complementing the individual’s style.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
