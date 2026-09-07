// src/api/api.js

import axios from "axios";

const API = axios.create({
  baseURL: "/",
});

// const api = axios.create({
//   baseURL: "/data.json",
// });

export default API;
