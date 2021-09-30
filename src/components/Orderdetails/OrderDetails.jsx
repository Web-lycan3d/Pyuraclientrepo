/** @format */

import React from "react";
import "./orderdetails.styles.scss";
import OrdersList from "./OrdersList";

const OrderDetails = ({ userData }) => {
  return (
    <div className="order-details-overflow">
      {userData.orders.map((item) => (
        <OrdersList userData={item} />
      ))}
    </div>
  );
};

export default OrderDetails;
