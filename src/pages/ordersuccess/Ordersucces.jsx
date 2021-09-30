/** @format */

import React, { Component } from "react";
import "./ordersuccess.styles.scss";
import query from "query-string";
import { Link } from "react-router-dom";

export class Ordersucces extends Component {
  state = {
    userDetails: {
      email: "",
      phone: "",
      orderid: "",
    },
  };
  componentDidMount() {
    const { email, phone, orderid } = query.parse(this.props.location.search);
    this.setState({
      userDetails: {
        email,
        phone,
        orderid,
      },
    });
  }
  render() {
    return (
      <div className="ordersuccess-container">
        <div className="ordersuccess-contents">
          <div className="ordersuccess-details">
            <h1>Payment successfull</h1>
            <p>Orderid: {this.state.userDetails.orderid} </p>
            <div className="check-circle">
              <img src="https://i.ibb.co/phLYmky/Artboard-1.png" alt="circle" />
            </div>
            <span>
              Order details has been sent to your phone number
              <br />
              <b> {this.state.userDetails.phone}</b> and email{" "}
              <b>{this.state.userDetails.email}</b>
            </span>
            <span className="span-link">
              You can track your order by visiting the{" "}
              <Link to="/user/order">
                <b> Order Status</b>{" "}
              </Link>{" "}
              and entering your registered phone number used for your purchase.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Ordersucces;
