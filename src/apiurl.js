/** @format */

const apiurl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  }
  if (process.env.NODE_ENV === "production") {
    return "";
  }
};

export default apiurl;
