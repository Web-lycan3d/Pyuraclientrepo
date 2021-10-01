/** @format */

import React from "react";
import ReactDOM from "react-dom";
import SweetAlert from "react-bootstrap-sweetalert";

const Model = (props) => {
  const renderAlert = () => {
    return (
      <>
        <SweetAlert
          info
          title="Verify OTP first!"
          confirmBtnText="close"
          confirmBtnCssClass="confirm-btn"
          onConfirm={() => props.modalState()}>
          click here to close
        </SweetAlert>
      </>
    );
  };
  return ReactDOM.createPortal(
    <div className="modal-container">{renderAlert()}</div>,
    document.querySelector("#modal")
  );
};

export default Model;
