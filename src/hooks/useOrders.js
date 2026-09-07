import { useEffect, useState } from "react";
import axios from "axios";
import { API, ENDPOINTS } from "@/api/api";

const useOrders = ({ cartItems, setCartItems, removeItemFromCart }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orders, setOrders] = useState([]);

  const [totalPrice, setTotalPrice] = useState();
  const [shouldRemoveOrder, setShouldRemoveOrder] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get(ENDPOINTS.ORDERS);

        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const createOrder = async (obj) => {
    try {
      const { data } = await API.post(ENDPOINTS.ORDERS, cartItems);
      // const { data } = await API.post(ENDPOINTS.ORDERS, {
      //   itemId: obj.id,
      //   title: obj.title,
      //   price: obj.price,
      //   imageUrl: obj.imageUrl,
      // });

      setOrders((prevItems) => [...prevItems, data]);

      cartItems.map((item) => {
        removeItemFromCart(item.id);
      });

      setCartItems([]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeOrder = async (id) => {
    try {
      await API.delete(`${ENDPOINTS.ORDERS}/${id}`);
      setOrders((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrderClick = () => {
    const cartItem = cartItems.find((item) => item.itemId === id);

    if (cartItem) {
      removeItemFromCart(cartItem.id);
    } else {
      addItemToCart({ id, title, price, imageUrl });
    }
  };

  return {
    orders,
    createOrder,
    handleOrderClick,

    isOrderComplete,
    setIsOrderComplete,

    removeOrder,

    shouldRemoveOrder,
    setShouldRemoveOrder,
  };
};

export default useOrders;
