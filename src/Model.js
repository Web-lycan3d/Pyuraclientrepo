/** @format */

import React from "react";
import ReactDOM from "react-dom";

import SweetAlert from "react-bootstrap-sweetalert";

const Model = (props) => {
  const renderAlert = () => {
    return (
      <>
        <SweetAlert
          warning
          title="Verify Otp first!"
          onConfirm={() => props.modalState()}
          confirmBtnCssClass="confirm-btn"
        />
      </>
    );
  };
  return ReactDOM.createPortal(
    <div className="modal-container">
      {/* <div className="modal-items">
        <h2>Verify Otp first!</h2>
        <AiOutlineCloseCircle className="modal-icon" />
      </div> */}
      {renderAlert()}
    </div>,
    document.querySelector("#modal")
  );
};

export default Model;
