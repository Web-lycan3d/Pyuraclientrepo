/** @format */

import axios from "axios";
import apiurl from "../apiurl";

const backendUrl = apiurl();
export default axios.create({
  baseURL: backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
