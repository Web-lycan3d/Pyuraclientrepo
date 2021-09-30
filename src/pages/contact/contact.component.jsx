/** @format */

import React from "react";
import { IoMail, IoCall, IoLocation } from "react-icons/io5";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-banner">
        <img src="https://i.ibb.co/kqkwX9M/Group-5423.png" alt="Contact" />
        <div className="contact-title">
          <h1>Contact us</h1>
          <h4>Lorem Ipsum Dolor Sit Amet, Consecteur Adipiscing Elit</h4>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-details">
          <div className="detail">
            <IoMail className="contact_icon" />
            <span>support@pyuraair.com</span>
          </div>
          <div className="detail">
            <IoCall className="contact_icon" />
            <span>+91 9591807979</span>
          </div>
          <div className="detail">
            <IoLocation className="contact_icon" />
            <span>IKP Eden, Kormangala, Bengaluru - 29</span>
          </div>
        </div>
        <div className="map">
          {/* <img
            src="https://i.ibb.co/Ny6bbjx/Mask-Group-33.png"
            alt="Pyura location"
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.35878126597!2d77.609869!3d12.934072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b6ca5b3791dd536!2sLycan%203D!5e0!3m2!1sen!2sin!4v1632742083133!5m2!1sen!2sin"
            title="map"
            loading="lazy"></iframe>
        </div>
        <div className="contact-content">
          <p>
            Please feel free to reach out to us with any concerns or suggestions
            you might have about our product. As our valued customers, we would
            deeply appreciate your feedback so that we can constantly strive to
            improve while offering you the highest quality services and an
            overall fulfilling experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
