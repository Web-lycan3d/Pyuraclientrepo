/** @format */

import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import OrderOverview from "../../components/AdminDashboard/OrderOverview.component";

import "./admin.styles.scss";
import api from "../../api/api";
import { useHistory, useParams } from "react-router";

const AdminPanel = () => {
  const { id } = useParams();
  const history = useHistory();

  const [option, setOption] = useState(null);

  const [UserData, setUserData] = useState([]);
  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    if (id.length < 10 || id.length > 10) {
      history.push("/");
    } else {
      if (id === "1123456789") {
        fetchUserData();
      } else {
        history.push("/");
      }
    }
  }, [id, stateChange]);
  const StateChange = () => {
    setStateChange(!stateChange);
    console.log("S");
  };
  const fetchUserData = async () => {
    const { data } = await api.get("/user/details");

    if (data) {
      setUserData(data);
    }
  };

  return (
    <Fragment>
      <div className="admin-dashboard-container">
        {" "}
        {/* {alertState ? (<Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Updated the documents
                </Alert>) : ""} */}
        <div className="admin-dsahboard-header">
          <div className="admin-dashboard-heading">
            <h1>Admin Panel</h1>{" "}
          </div>

          <div className="admin-dashboard-nav">
            <span
              onClick={() => setOption(true)}
              className={
                option
                  ? "admin-dashboard-navlist active"
                  : "admin-dashboard-navlist"
              }>
              New Orders
            </span>
            <span
              onClick={() => setOption(false)}
              className={
                option
                  ? "admin-dashboard-navlist"
                  : "admin-dashboard-navlist active"
              }>
              Orders
            </span>
          </div>
        </div>
        <motion.div layout className="admin-dashboard-content">
          {!option
            ? UserData?.map((data) =>
                data.orders.map((item) => (
                  <OrderOverview userData={item} StateChange={StateChange} />
                ))
              )
            : UserData?.map((data) =>
                data.orders.map(
                  (item) =>
                    (item.orderStatus === "Order Processing" ||
                      item.orderStatus === "In Transit") && (
                      <OrderOverview
                        userData={item}
                        StateChange={StateChange}
                      />
                    )
                )
              )}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default AdminPanel;
