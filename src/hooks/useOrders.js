import { useEffect, useState } from "react";
import { API, ENDPOINTS } from "@/api/api";

const useOrders = ({ cartItems, clearCart, totalPrice }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orders, setOrders] = useState([]);

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

  const createOrder = async () => {
    if (cartItems.length === 0) {
      return null;
    }

    try {
      const order = {
        // id: Date.now(),
        items: cartItems,
        totalPrice,
      };

      const { data } = await API.post(ENDPOINTS.ORDERS, order);

      setOrders((prevOrders) => [...prevOrders, data]);

      // setCartItems([]);
      clearCart();

      setIsOrderComplete(true);

      return data;
    } catch (error) {
      console.error("Failed to create order:", error);

      return null;
    }
  };

  const removeOrder = async (id) => {
    try {
      await API.delete(`${ENDPOINTS.ORDERS}/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    } catch (error) {
      console.error("Failed to remove order:", error);
    }
  };

  // delete -> handleOrderClick
  const handleOrderClick = () => {
    // const cartItem = cartItems.find((item) => item.itemId === id);
    const cartItem = cartItems.find((item) => item.id === id);

    if (cartItem) {
      removeItemFromCart(cartItem.id);
    } else {
      addItemToCart({ id, title, price, imageUrl });
    }
  };

  return {
    orders,

    createOrder,
    removeOrder,

    isOrderComplete,
    setIsOrderComplete,
  };
};

export default useOrders;
