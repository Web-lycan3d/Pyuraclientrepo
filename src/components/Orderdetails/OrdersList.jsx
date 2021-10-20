/** @format */
import "./orderdetails.styles.scss";

const OrdersList = ({ userData }) => {
  return (
    <div className="orderdetails-box">
      <div className="orderdetails-header">
        <h1>{userData.firstname + " " + userData.lastname}</h1>
        <h4>OrderStatus : {userData.orderStatus}</h4>
      </div>
      <div className="orderdetails-contents">
        <div className="orderdetails-left">
          <div className="orderdetails-left-contents">
            <p>OrderId:</p>
            <span className="orderdetail-span">{userData.orderId}</span>
          </div>
          <div className="orderdetails-left-contents">
            <p>Phone no:</p>
            <span className="orderdetail-span">{userData.phonenumber}</span>
          </div>
          <div className="orderdetails-left-contents">
            <p>Email id:</p>
            <span className="orderdetail-span">{userData.email}</span>
          </div>{" "}
          <div className="orderdetails-left-address">
            <p>Shipping Address:</p>
            <span className="address-box">{userData.address}</span>
          </div>
        </div>
        <div className="orderdetails-right">
          <div className="orderdetails-right-header">
            <span>Pyura air</span>
            <span>
              {" "}
              <sub>Rs 6999/unit</sub>
              {userData.quantity}{" "}
            </span>
          </div>
          <div className="orderdetails-price">
            <div className="price-contents">
              <p>Sub Total</p>
              <span>Rs {userData.subTotal}</span>{" "}
            </div>
            <div className="price-contents">
              {" "}
              <p>Shipping</p>
              <span>Rs {userData.shippingTotal}</span>{" "}
            </div>
            {userData.discountAppliedState && (
              <div className="price-contents">
                {" "}
                <p>Discount</p>
                <span>Rs {userData.discountPrice}</span>{" "}
              </div>
            )}
          </div>
          <div className="orderdetails-total">
            <h3>
              Total (including gst){" "}
            </h3>
            <p>Rs {userData.orderTotal}</p>
          </div>
        </div>
      </div>
      {/* <div className="other-orders">
                  <h3>No more orders to show</h3>
                </div> */}
    </div>
  );
};

export default OrdersList;
