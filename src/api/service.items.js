// src/api/service.items.js
import { useEffect, useState } from "react";
import { API, ENDPOINTS } from "./api";

export const serviceItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await API.get(ENDPOINTS.ITEMS);

        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, loading };
};

// Здесь:
// const { data } = await API.get(ENDPOINTS.ITEMS);

// это просто сокращение от:
// const res = await API.get(ENDPOINTS.ITEMS);
// const data = res.data;

// base
// useEffect(() => {
//   axios.get(url).then((res) => {
//     setItems(res.data);
//   });
// });
