/** @format */

import api from "../../api/api";

export const Razorpay = (userData, data, history) => {
  //creating script tag

  let options = {
    key: "rzp_test_6zVUH0RpvBsqx6", // Enter the Key ID generated from the Dashboard
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: async function (response) {
      //       alert(response.razorpay_payment_id);
      //       alert(response.razorpay_order_id);
      //       alert(response.razorpay_signature);
      try {
        const resp = await api.post("/payment/capture", {
          data,
          response,
        });
        userData.orderId = data.id;
        if (resp.data.orderStatus) {
          history.push(
            `/user/order/created/?orderid=${userData.orderId}&phone=${userData.phonenumber}&email=${userData.email}`
          );
          await api.post("/user/order", userData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
        } else {
          console.log("S2");
        }
      } catch (error) {
        console.log(error);
      }
    },
    prefill: {
      name: userData.firstname,
      email: userData.email,
      contact: userData.phonenumber,
    },
    notes: {
      address: userData.address,
    },
    theme: {
      color: "#1a2771",
    },
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
  return userData.phonenumber;
};
