/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Model = (props) => {
  console.log(props);
  const renderAlert = () => {
    return (
      <>
        {window.Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showCancelButton: true,
          showConfirmButton: false,
        }).then((res) => {
          res && props.modalState();
        })}
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
