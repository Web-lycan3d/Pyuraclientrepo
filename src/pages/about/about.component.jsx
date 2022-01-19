/** @format */

import React, { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./about.styles.scss";

const About = () => {
  return (
    <Fragment>
      <div className="ly-relative">
        <img
          src="https://i.ibb.co/TrpwGH5/about-landing-img.png"
          alt=""
          className="ly-image"
        />
        <div className="about-header">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-content">
        <p>
          Our team at Lycan Biotech (LYBIO) conceptualised and developed Pyura
          Air out of both necessity and to push the boundaries of innovation. At
          a time when every human being is seeking ways to make life safer and
          more convenient, we are driven to continuously innovate and create
          meaningful value addition to society. With a dedicated team of design
          engineers and medical experts combined with manufacturing expertise at
          LYBIO, we are an ideal partner of choice for all your needs and
          requirements. LYBIO is headquartered in Bangalore, the technology hub
          of India.
        </p>
      </div>
      <div className="down-arrow">
        <IoIosArrowDown className="arrow-down-icon" />
      </div>
      <div className="founders-note-sec">
        <div className="founders-note-img">
          <img src="https://i.ibb.co/KhVkwfP/rahul-singh.png" alt="" />
        </div>
        <div className="founders-note-content">
          <div>
            <h2>Founder's Note</h2>
            <p>
              Pyura Air is an innovative effort spearheaded by us to bring a
              smile back on your face and ensure safety.
              <br /> Through innovation, breathing can be purified to the
              highest degree using our air-purifying masks by Lycan Biotech.
              With the unpredictability of what is in the air around us, Pyura
              Air masks alleviate a number of breathing concerns and offers a
              seamless solution to you! <br /> Take the opportunity to relax and
              be stress-free with us! Breathe Easy.
            </p>
          </div>
          <div className="greeting">
            <span>Gratitude</span>
            <span>Rahul Singh</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
