/** @format */

import React, { useEffect, useState } from "react";
import "./checkout.styles.scss";
import validator from "validator";
import query from "query-string";
import { useHistory, useLocation } from "react-router";
import { AiOutlineCloseCircle } from "react-icons/ai";

import serverUrl from "../../api/api";
import { Razorpay } from "../../components/payment/Razorpay";
import api from "../../api/api";

const discountDetails = {
  code: "code",
  price: 1000,
};

const Checkout = () => {
  const location = useLocation();
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    phonenumber: "",
    address: "",
    firstname: "",
    lastname: "",
    city: "",
    pincode: "",
    state: "",
  });
  const [phoneError, setPhoneError] = useState(false);
  const [userOtpin, setUserOtpin] = useState("");
  const [otpsentStatus, setOtpSentStatus] = useState(false);
  const [btnloaderState, setbtnLoader] = useState(false);
  const [itemquanity, setitemquanity] = useState(null);
  const [emailErr, setemailErr] = useState(false);
  const [addressErr, setaddressErr] = useState(false);
  const [cityErr, setcityErr] = useState(false);
  const [nameErr, setnameErr] = useState(false);
  const [pincodeErr, setpincodeErr] = useState(false);
  const [notverifyUser, setNotVerifyUser] = useState(false);
  const [verifyOTP, setVerifyOTP] = useState(false);
  const [userDiscount, setUserDiscount] = useState("");
  const [discountState, setDiscountState] = useState(false);
  const [discountState2, setDiscountState2] = useState(false);
  const [TotalPrice, setTotalPrice] = useState("");
  const [resendState, setResendState] = useState(false);
  const [otpError, setOtperror] = useState(false);
  const [otpverified, setOtpverified] = useState(false);

  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    const { q } = query.parse(location.search);

    setitemquanity(parseInt(q));
  }, [location.search]);

  const shippingTotal = 50;
  const itemprice = 6999;
  const subtotal = itemprice * itemquanity;
  const totalPrice = subtotal + shippingTotal;

  useEffect(() => {
    setTotalPrice(totalPrice);
  }, [totalPrice]);

  const handleCheckoutOTP = (e) => {
    e.preventDefault();
    const numbers = userData.phonenumber.includes("+91");

    const validate = validator.isMobilePhone(userData.phonenumber, ["en-IN"]);

    setbtnLoader(true);
    setTimeout(() => {
      validatePhone();
      setbtnLoader(false);
    }, 1500);

    async function validatePhone() {
      if (!validate || !numbers) {
        setOtpSentStatus(false);
        setPhoneError(true);
      } else {
        setPhoneError(false);
        setOtpSentStatus(true);
        try {
          await api.post("/verify/user/phone", {
            phoneNo: userData.phonenumber,
          });

          setServerError(false);
        } catch (error) {
          setServerError(true);
          setOtpSentStatus(false);
        }
      }
    }
  };

  const verifyOtp = async () => {
    try {
      const { data } = await api.post("/verify/user/otp", {
        phoneNo: userData.phonenumber,
        userOtp: userOtpin,
      });
      if (data.verified) {
        setVerifyOTP(true);
        setOtperror(false);
        setOtpverified(true);
      } else {
        setOtpverified(false);
        setOtperror(true);
        setVerifyOTP(false);
      }
    } catch (error) {}
  };

  const handleResendOTP = async () => {
    setResendState(true);
    setOtperror(false);
    try {
      await api.post("/verify/user/phone", {
        phoneNo: userData.phonenumber,
      });
      setTimeout(() => {
        setResendState(false);
      }, 1500);
      setServerError(false);
    } catch (error) {
      setServerError(true);
      setOtpSentStatus(false);
    }
  };

  const handleDiscount = () => {
    if (userDiscount === discountDetails.code) {
      //related to code state
      setDiscountState(true);
      setDiscountState2(false);

      //related to totalprice
      setTotalPrice((prevalue) => prevalue - discountDetails.price);
    } else {
      setDiscountState(false);
      setDiscountState2(true);
      setTotalPrice(totalPrice);
    }
  };

  const handleFormSubmit = async () => {
    const { email, address, firstname, city, state, pincode } = userData;
    const validateEmail = validator.isEmail(email);
    const namePattern = new RegExp(/^([^0-9]*)$/);
    const pincodePattern = new RegExp(/^\d{4}$|^\d{6}$/);

    const validateFN = namePattern.test(firstname);
    const FNlength = firstname.length > 0;
    const validatecity = city.length > 2;
    const validatestate = state.length > 2;
    const validateAddress = address.length > 10;
    const validatepincode = pincodePattern.test(pincode);

    if (!verifyOTP) {
      return setNotVerifyUser(true);
    }

    if (!validateEmail) {
      setemailErr(true);
    } else {
      setemailErr(false);
    }
    if (!validateFN || !FNlength) {
      setnameErr(true);
    } else {
      setnameErr(false);
    }
    if (!validatecity || !validatestate) {
      setcityErr(true);
    } else {
      setcityErr(false);
    }
    if (!validatepincode) {
      setpincodeErr(true);
    } else {
      setpincodeErr(false);
    }
    if (!validateAddress) {
      setaddressErr(true);
    } else {
      setaddressErr(false);
    }
    if (
      validateEmail &&
      validateAddress &&
      validateFN &&
      FNlength &&
      validatestate &&
      validatecity &&
      validatepincode
    ) {
      userData.quantity = itemquanity;
      userData.totalPrice = TotalPrice;
      userData.discountCode = discountDetails.code;
      userData.discountPrice = discountDetails.price;
      userData.shippingTotal = shippingTotal;
      userData.subtotal = subtotal;
      userData.discountAplliedState = discountState;

      const { data } = await serverUrl.get(
        "/payment/order/?price=" + TotalPrice
      );

      if (data) {
        Razorpay(userData, data, history);
      }
    }
  };
  return (
    <>
      {notverifyUser && (
        <div className="not-verified-modal  ">
          <div className="modal-contents">
            <div className="items">
              <h5>Verify OTP first!</h5>
              <AiOutlineCloseCircle
                className="close-icon"
                onClick={() => setNotVerifyUser(false)}
              />
            </div>
          </div>
        </div>
      )}
      <div className="checkout-container">
        <div className="checkout-contents">
          <div className="checkout-img">
            <img
              src="https://i.ibb.co/QHpzGP0/Mask-Group-32.png"
              alt="pyuracheckoutimg"
            />
          </div>

          <div className="checkout-details">
            <div className="checkout-details-left">
              <h1>Checkout</h1>
              <p>Contact information</p>
              <div className="checkout-contact-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
                {emailErr && (
                  <span className="checkout-errors">Not a valid email</span>
                )}
                <div className="checkout-mobile-ver">
                  <input
                    type="text"
                    name="phonenumber"
                    required
                    placeholder="Phone number"
                    onChange={(e) =>
                      setUserData({ ...userData, phonenumber: e.target.value })
                    }
                  />
                  {btnloaderState ? (
                    <div className="loader-c">
                      <span className="loader-spin">
                        <div className="loading"></div>
                      </span>
                    </div>
                  ) : (
                    <button onClick={handleCheckoutOTP}>Submit</button>
                  )}
                </div>
                {otpsentStatus && (
                  <>
                    <span className="checkout-errors">
                      OTP sent to {userData.phonenumber}{" "}
                    </span>{" "}
                    {resendState ? (
                      <>
                        <span className="checkout-errors">
                          OTP sent successfully
                        </span>
                      </>
                    ) : (
                      <span className="checkout-otp-resend">
                        To resend OTP{" "}
                        <span onClick={handleResendOTP}>Click here</span>
                      </span>
                    )}
                  </>
                )}
                {serverError && (
                  <span className="checkout-errors">
                    Server error please try again later...
                  </span>
                )}
                {phoneError && (
                  <span className="checkout-errors">
                    Not valid! or include +91
                  </span>
                )}
                <div className="checkout-otp">
                  <input
                    type="text"
                    name="otp"
                    value={userOtpin}
                    onChange={(e) => setUserOtpin(e.target.value)}
                    disabled={!otpsentStatus}
                    placeholder="Enter OTP"
                  />
                  <button disabled={!otpsentStatus} onClick={verifyOtp}>
                    Verify
                  </button>
                </div>
                {otpError && (
                  <span className="checkout-errors">Not a Valid OTP</span>
                )}
                {otpverified && (
                  <span className="checkout-errors" style={{ color: "green" }}>
                    OTP verified
                  </span>
                )}
                <div className="checkout-address">
                  <h4>Shipping Address</h4>
                  <div className="address-name">
                    <input
                      type="text"
                      name="firstname"
                      onChange={(e) =>
                        setUserData({ ...userData, firstname: e.target.value })
                      }
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastname"
                      onChange={(e) =>
                        setUserData({ ...userData, lastname: e.target.value })
                      }
                      placeholder="Last Name"
                    />
                  </div>{" "}
                  {nameErr && (
                    <span className="checkout-errors">
                      Atleast 4 character's long & shouldn't contain numbers
                    </span>
                  )}
                  <textarea
                    name="address"
                    cols="30"
                    rows="4"
                    onChange={(e) =>
                      setUserData({ ...userData, address: e.target.value })
                    }
                    placeholder="Address"></textarea>
                  {addressErr && (
                    <span className="checkout-errors">
                      Atleast 10 character's long
                    </span>
                  )}
                  <div className="address-city">
                    <input
                      type="text"
                      name="city"
                      onChange={(e) =>
                        setUserData({ ...userData, city: e.target.value })
                      }
                      placeholder="City"
                    />
                    <input
                      type="text"
                      name="state"
                      onChange={(e) =>
                        setUserData({ ...userData, state: e.target.value })
                      }
                      placeholder="State"
                    />

                    <input
                      type="text"
                      name="pincode"
                      placeholder="Zip/Pin"
                      onChange={(e) =>
                        setUserData({ ...userData, pincode: e.target.value })
                      }
                    />
                  </div>{" "}
                  <div className="errors-div" style={{ marginTop: "0.8rem" }}>
                    {cityErr && (
                      <span
                        className="checkout-errors"
                        style={{ bottom: "0rem" }}>
                        Both fields Must contain atleast 2 character's
                      </span>
                    )}

                    {pincodeErr && (
                      <span className="checkout-errors">
                        Not a valid Pincode
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-details-right">
              <div className="chechout-header-right">
                <img
                  src="https://i.ibb.co/WKbtMcw/Pyura-renders-2.webp"
                  alt="err"
                />
                <p>
                  <sub>Rs 6999/unit</sub> {itemquanity}
                </p>
              </div>
              <div className="discount-input">
                <input
                  type="text"
                  name="discount"
                  onChange={(e) => setUserDiscount(e.target.value)}
                  placeholder="Discount code"
                />
                <button onClick={handleDiscount}>Apply</button>
                <div className="discount-code">
                  {" "}
                  <span className="code">Eg: {discountDetails.code}</span>
                  {discountState ? (
                    <span>discount applied</span>
                  ) : (
                    discountState2 && <span>Not a valid code</span>
                  )}
                </div>
              </div>

              <div className="checkout-total">
                <div className="checkout-total-1">
                  <p>Sub Total</p>
                  <span>Rs {subtotal}</span>
                </div>
                <div className="checkout-total-1">
                  <p>Shipping</p>
                  <span>Rs {shippingTotal}</span>
                </div>
                {discountState && (
                  <div className="checkout-total-1">
                    <p>Discount</p>
                    <span>Rs {discountDetails.price}</span>
                  </div>
                )}
              </div>
              <div className="checkout-total-main">
                <h5>
                  Total <sub>Inclusive of GST</sub>{" "}
                </h5>
                <span>Rs {TotalPrice}</span>
              </div>
              <div className="checkout-submit-btn">
                <button onClick={handleFormSubmit}>Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
