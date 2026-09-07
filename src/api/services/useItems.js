import { useEffect, useState } from "react";
import axios from "axios";

import { useErrorMessage } from "./useErrorMessage";

// const API = "https://bf234b079fcf09f7.mokky.dev/items";

const useItems = () => {
  const showErrorMessage = useErrorMessage();

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const { data } = await axios.get("/data/items.json");
        setItems(data);
      } catch (err) {
        console.warn(err);

        showErrorMessage();
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  return { items, isLoading };
};

export default useItems;
