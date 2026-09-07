// src/api/service.collection.js
import { useEffect, useState } from "react";

import axios from "axios";

const URL = "https://bf234b079fcf09f7.mokky.dev";

export const API = axios.create({
  baseURL: URL,
});

export const ENDPOINTS = {
  ITEMS: "/items",
  FAVORITES: "/favorites",
  ORDERS: "/orders",
};

export const serviceItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${URL}${ENDPOINTS.ITEMS}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // minutes of video 2:03:57

  return { items };
};
