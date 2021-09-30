/** @format */

import React from "react";

import "./OrderPreview.styles.scss";

const OrderPreview = ({ userData }) => {
  return (
    <>
      <div className="dropdown-flow">
        <div className="details-address">
          <p>Order Id: {userData.orderId}</p>
          <p>Email : {userData.email}</p>
          <p>Phone no: {userData.phonenumber}</p>
        </div>
        <div className="dropdown-flow-left">
          <div className="items-orderd-list">
            <span></span>
          </div>
          <div className="items-orderd-address">
            <span>
              {" "}
              {userData.address}, {userData.city}, {userData.state} -{" "}
              {userData.pincode}
            </span>
            <span>Order Date : {userData.date}</span>
          </div>
        </div>
        <div className="dropdown-flow-right">
          <div className="chechout-header-right">
            <h5>Pyura Air</h5>
            <p>
              <sub>Rs 6999/unit</sub> {userData.quantity}
            </p>
          </div>
          <div className="checkout-total">
            <div className="checkout-total-1">
              <p>Sub Total</p>
              <span>Rs {userData.subTotal}</span>
            </div>
            <div className="checkout-total-1">
              <p>Shipping</p>
              <span>Rs {userData.shippingTotal}</span>
            </div>
            {userData.discountAppliedState && (
              <div className="checkout-total-1">
                <p>Discount</p>
                <span>Rs {userData.discountPrice}</span>
              </div>
            )}
          </div>
          <div className="checkout-total-main">
            <h5>
              Total <sub>Inclusive of GST</sub>{" "}
            </h5>
            <span>Rs {userData.orderTotal}</span>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default OrderPreview;
