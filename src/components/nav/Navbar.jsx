/** @format */

import React, { useState } from "react";
import "./navbar.styles.scss";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navState, setNavState] = useState(false)
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="brand-name">
          <Link to="/" className="header-link">
            <h2>
              Pyura <span>air</span>{" "}
            </h2>
          </Link>
        </div>
        <div className="nav-items">
          <Link to="/user/order" className="link-tag-navbar">
            <button>
              <BiCart className="nav-items-icon" /> Order status
            </button>
          </Link>
          <Link to="/user/product" className="link-tag-navbar">
            <button>
              <BiCart className="nav-items-icon" /> Get yours!
            </button>
          </Link>
        </div>
        <div className="nav-bar">
          <motion.div
            initial={{ opacity: 0, x: "-5rem" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: "-5rem" }}
            transition={{ duration: 0.9, easings: "anticipate" }}
            className={navState ? "menu menu-active" : "menu"}
            onClick={() => setNavState(!navState)}>
            <span className="menu-green"></span>
            <span className="menu-green"></span>
            <span className="menu-green"></span>
          </motion.div>
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "-20rem" }}
            className={
              navState
                ? "nav-bar-details nav-bar-details-active "
                : "nav-bar-details"
            }>
            <ul className="nav-bar-ul">
              <li className="menu-li-flex">
                <Link to="/" className="nav-links" onClick={() => setNavState(!navState)}>
                  Home
                </Link>
              </li>
              <li className="menu-li-flex">
                <Link to="/user/order" className="nav-links" onClick={() => setNavState(!navState)}>
                  Order Status
                </Link>
              </li>
              <li className="menu-li-flex">
                <Link to="/user/product" className="nav-links" onClick={() => setNavState(!navState)}>
                  Get Yours
                </Link>
              </li>
              <li className="menu-li-flex">
                <Link to="/about" className="nav-links" onClick={() => setNavState(!navState)}>
                  About
                </Link>
              </li>
              <li className="menu-li-flex">
                <Link to="/contact" className="nav-links" onClick={() => setNavState(!navState)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
