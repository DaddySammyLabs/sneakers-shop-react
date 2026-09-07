// src/api/api.js

import axios from "axios";

export const API = axios.create({
  baseURL: "https://bf234b079fcf09f7.mokky.dev",
});

export const ENDPOINTS = {
  ITEMS: "/items",
  FAVORITES: "/favorites",
  ORDERS: "/orders",
  CART: "/cart",
};

// один раз настроить API ->
// И дальше в проекте:
// API.get('/users');
// API.post('/users', data);
// API.delete(`/users/${id}`);

// const API = axios.create({
//   baseURL: "https://bf234b079fcf09f7.mokky.dev",
// });

// export default API;
