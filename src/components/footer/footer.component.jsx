/** @format */

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AiOutlineContacts } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

import "./footer.styles.scss";
import "../nav/navbar.styles.scss";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="footer-logo">
          <Link to="/" className="footer-link">
            <h1>
              Pyura <span>air</span>{" "}
            </h1>
          </Link>
        </div>
        <div className="footer-privacy">
          <span className="privacy">All Rights Reserved</span>
          <Link className="privacy" to="#">
            Terms of Use
          </Link>
          <Link className="privacy" to="#">
            Privacy Policies
          </Link>
        </div>
        <div className="footer-nav">
          <button>
            <Link to="/about">
              <FiUsers className="nav-items-icon" />
              About Us
            </Link>
          </button>
          <button>
            <Link to="/contact">
              <AiOutlineContacts className="nav-items-icon" />
              Contact Us
            </Link>
          </button>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
