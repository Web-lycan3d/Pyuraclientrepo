/** @format */

import React from "react";
import {Link} from "react-router-dom";
import "./lastslide.styles.scss";

const Lastslide = () => {
  return (
    <div className="seventh-container">
      <div className="seventh-contents">
        <div className="seventh-text">
          <h5>Invest in a safer future</h5>
          <span>
            To sum it up, Pyura Air is and always will be an innovation that was
            born out of the need to better the world we live in. In these
            troubling times, we are all prone to stress and worries for our
            health and safety and there is no time to delay taking the next step
            in ensuring that you and your loved ones are protected to the
            highest extent possible.
            <br />
            <br />
            By choosing our product, we can guarantee that you will feel safe
            and secure with the decision you have made. It is time to take
            advantage of what we have to offer and breathe more peacefully
            moving forward.
          </span>
          <Link to="/user/product"><button>Get Yours!</button></Link>
        </div>
        <div className="seventh-img">
          <img
            src="https://i.ibb.co/4TmL446/Untitled-design-9.webp"
            alt="pyura8"
          />
        </div>
      </div>
    </div>
  );
};

export default Lastslide;
