/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./orderdetails.styles.scss";
import OrdersList from "./OrdersList";

const OrderDetails = () => {
  let userData = {
    orders: [],
  };
  return (
    <div className="order-details-overflow">
      {userData.orders?.length > 0 ? (
        userData.orders.map((item) => <OrdersList userData={item} />)
      ) : (
        <div className="no-orders">
          <h2>No orders available</h2>
          <Link to="/user/product">Click here</Link> to Order now
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
