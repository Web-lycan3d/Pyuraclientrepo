/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./orderstatus.styles.scss";
import validator from "validator";
import OrderDetails from "../../components/Orderdetails/OrderDetails";
import serverUrl from "../../api/api";
import api from "../../api/api";

const OrderStatus = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [phoneNorErr, setPhoneNoErr] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [userOtp, setUserOtp] = useState("");
  const [OTPsent, setOtpsent] = useState(false);
  const [OTPformState, setOtpformState] = useState(false);
  const [OrderStatus, setOrderStatus] = useState(true);
  const [userOrderData, setuserOrderData] = useState("");
  const [OtpverState, setOtpverState] = useState(false);
  const [OtpresendState, setOtpresendState] = useState(false);

  const [serverErrorState, setServerErrorState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numbers = phoneNo.includes("+91");

    const validatePhone = validator.isMobilePhone(phoneNo, ["en-IN"]);

    if (!validatePhone || !numbers) {
      setPhoneNoErr(true);
      setOtpsent(false);
      setOtpformState(false);
    } else {
      setPhoneNoErr(false);
      setLoadingState(true);
      setTimeout(() => {
        setLoadingState(false);
        setOtpsent(true);
        setOtpformState(true);
      }, 2000);

      try {
        await api.post("/verify/user/phone", { phoneNo });

        setServerErrorState(false);
      } catch (error) {
        setServerErrorState(true);
        setOtpsent(false);
      }
    }
  };

  const handleOTP = async (e) => {
    e.preventDefault();

    // history.push({
    //   pathname:""
    // })
    const { data } = await api.post("/verify/user/otp", { phoneNo, userOtp });
    setOtpverState(false);
    if (data.verified) {
      setOtpverState(false);
      const resp = await serverUrl.get("/user/details/" + phoneNo);
      resp.data && setuserOrderData(resp.data);
      resp.data && setOrderStatus(false);
    } else {
      setOtpverState(true);
    }
  };
  const handleResendOTP = async () => {
    setOtpresendState(true);
    try {
      const { data } = await api.post("/verify/user/phone", { phoneNo });
      if (data) {
        setTimeout(() => {
          setOtpresendState(false);
        }, 1000);
        setOtpverState(false);
      }
      setServerErrorState(false);
    } catch (error) {
      setServerErrorState(true);
    }
  };
  return (
    <div className="order-s-container">
      <div className="order-s-contents">
        <div className="order-s-box">
          <div className="order-s-box-contents">
            <h2>Order Status</h2>

            {OrderStatus ? (
              <>
                <p>
                  Please fill in the first box below with your{" "}
                  <span>phone number</span> to receive a{" "}
                  <span>One-time Password (OTP).</span> After receiving an OTP
                  through a text message, enter the same OTP into the second
                  box. Once you have successfully entered your OTP, you will
                  then be able to <span>view the status</span> of your order.
                </p>
                <div className="order-s-form">
                  <form onSubmit={handleSubmit}>
                    <div className="order-s-input-1">
                      <input
                        type="text"
                        name="phoneNumber"
                        className="userinput"
                        required
                        onChange={(e) => setPhoneNo(e.target.value)}
                        placeholder="Enter your Phone number"
                      />
                      {loadingState ? (
                        <div className="loader-c">
                          <span className="loader-spin">
                            <div className="loading"></div>
                          </span>
                        </div>
                      ) : (
                        <button className="usersubmit-btn">Get OTP!</button>
                      )}
                    </div>{" "}
                    {phoneNorErr && (
                      <span className="error-msg">Not Valid! include +91</span>
                    )}
                    {serverErrorState && (
                      <span className="error-msg">
                        Server error please try later...
                      </span>
                    )}
                    {OTPsent && (
                      <>
                        <span className="error-msg">
                          OTP sent to {phoneNo}{" "}
                        </span>
                        {OtpresendState ? (
                          <span
                            className="error-msg"
                            style={{ display: "block" }}>
                            OTP sent successfully
                          </span>
                        ) : (
                          <p className="rensend-tag">
                            To resend OTP
                            <span onClick={handleResendOTP}> click here</span>
                          </p>
                        )}
                      </>
                    )}
                  </form>
                  <form onSubmit={handleOTP}>
                    <div className="order-s-input-2">
                      <input
                        type="number"
                        name="phoneNumber"
                        className="userinput input-2"
                        placeholder="Enter OTP"
                        required
                        disabled={!OTPformState}
                        title="must contain atleat 4 numbers"
                        minLength="4"
                        onChange={(e) => setUserOtp(e.target.value)}
                      />
                      <button
                        disabled={!OTPformState}
                        className="usersubmit-btn ">
                        Submit
                      </button>{" "}
                    </div>
                    {OtpverState && (
                      <span className="error-msg">Not a valid OTP!</span>
                    )}{" "}
                  </form>
                </div>
                <div className="order-s-bottom">
                  <p>Facing issues with the status of your order?</p>
                  <span>
                    Head on over to the{" "}
                    <Link to="/contact" className="underline">
                      {" "}
                      Contact Us
                    </Link>{" "}
                    page and give us a ring or write to us, we'll get back
                    shortly and help you out.
                  </span>
                </div>
              </>
            ) : (
              <OrderDetails userData={userOrderData && userOrderData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
