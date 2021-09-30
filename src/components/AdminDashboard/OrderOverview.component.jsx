/** @format */

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { MdExpandLess } from "react-icons/md";
import { motion } from "framer-motion";
import OrderPreview from "./OrderPreview/OrderPreview.component";

import "./OrderOverview.styles.scss";
import api from "../../api/api";

const OrderOverview = ({ userData, StateChange }) => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e, orderid, phone) => {
    e.preventDefault();
    console.log(orderid, phone);
    try {
      const { data } = await api.put("/user/update/status", {
        orderid,
        phone,
        status,
      });
      data && StateChange();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div layout className="dropdown-container">
      <div className="dropdown-contents">
        {userData ? (
          <Accordion className="dropdown-accord">
            <AccordionSummary expandIcon={<MdExpandLess />}>
              <div className="dropdown-details">
                <div className="dropdown-details-left">
                  <h1>{userData.firstname}</h1>
                  <div className="dropdown-details-left-user">
                    <span>Phone No.: {userData.phonenumber} </span>
                  </div>
                </div>
                <div className="dropdown-details-right">
                  <form
                    onSubmit={(e) =>
                      handleSubmit(e, userData.orderId, userData.phonenumber)
                    }>
                    <input type="hidden" value="" name="orderid" />
                    <label htmlFor="orderstatus">Order Status</label>
                    <select
                      name="orderstatus"
                      className="select-option"
                      onChange={(e) => setStatus(e.target.value)}>
                      <option
                        value="Order Processing"
                        selected={userData.orderStatus === "Order Processing"}>
                        Order Processing
                      </option>
                      <option
                        value="In Transit"
                        selected={userData.orderStatus === "In Transit"}>
                        In Transit
                      </option>
                      <option
                        value="Delivered"
                        selected={userData.orderStatus === "Delivered"}>
                        Delivered
                      </option>
                      <option
                        value="Cancelled"
                        selected={userData.orderStatus === "Cancelled"}>
                        Cancelled
                      </option>
                    </select>
                    <button type="submit">Submit</button>{" "}
                  </form>
                  <span className="order-status-span">
                    status: {userData.orderStatus}
                  </span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <motion.div layout className="items-orderd-flex">
                <OrderPreview userData={userData} />
              </motion.div>
            </AccordionDetails>
          </Accordion>
        ) : (
          <h5>No orders found</h5>
        )}
      </div>
    </motion.div>
  );
};

export default OrderOverview;
