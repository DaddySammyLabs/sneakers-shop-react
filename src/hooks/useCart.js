import { useEffect, useState } from "react";
import { API, ENDPOINTS } from "@/api/api";

import useToggle from "./useToggle";

const useCart = () => {
  const cartDrawer = useToggle();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await API.get(ENDPOINTS.CART);

        setCartItems(data);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };

    fetchCart();
  }, []);

  const addItemToCart = async (obj) => {
    try {
      const { data } = await API.post(ENDPOINTS.CART, {
        itemId: obj.id,
        title: obj.title,
        price: obj.price,
        imageUrl: obj.imageUrl,
      });

      setCartItems((prevItems) => [...prevItems, data]);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const removeItemFromCart = async (id) => {
    try {
      await API.delete(`${ENDPOINTS.CART}/${id}`);

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0,
  );

  return {
    cartDrawer,

    cartItems,
    setCartItems,

    totalPrice,

    addItemToCart,
    removeItemFromCart,
  };
};

export default useCart;

// Для json-server нужно действительно удалить товары из /cart.
// В таком случае лучше добавить в useCart отдельную функцию:

// const clearCart = async () => {
//   try {
//     await Promise.all(
//       cartItems.map((item) =>
//         API.delete(`${ENDPOINTS.CART}/${item.id}`),
//       ),
//     );

//     setCartItems([]);
//   } catch (error) {
//     console.error("Failed to clear cart:", error);
//   }
// };

// И вернуть:

// return {
//   cartDrawer,
//   cartItems,
//   setCartItems,
//   totalPrice,
//   addItemToCart,
//   removeItemFromCart,
//   clearCart,
// };

// Тогда useOrders получает:
// const {
//   cartItems,
//   totalPrice,
//   clearCart,
// } = ...

// и после создания:
// const { data } = await API.post(ENDPOINTS.ORDERS, {
//   items: cartItems,
//   totalPrice,
// });

// setOrders((prevOrders) => [...prevOrders, data]);

// await clearCart();

// setIsOrderComplete(true);

// return data;
