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
        console.error(error);
      }
    };

    fetchCart();
  }, []);

  const addItemToCart = async (obj) => {
    try {
      // const { data } = await API.post("/cart", obj);
      const { data } = await API.post(ENDPOINTS.CART, {
        itemId: obj.id,
        title: obj.title,
        price: obj.price,
        imageUrl: obj.imageUrl,
      });

      setCartItems((prevItems) => [...prevItems, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItemFromCart = async (id) => {
    try {
      await API.delete(`${ENDPOINTS.CART}/${id}`);

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // const isInCart = cartItems.some((item) => item.itemId === id);

  // const handleCartClick = () => {
  //   const cartItem = cartItems.find((item) => item.itemId === id);

  //   if (cartItem) {
  //     removeItemFromCart(cartItem.id);
  //   } else {
  //     addItemToCart({ id, title, price, imageUrl });
  //   }
  // };

  return {
    cartDrawer,

    cartItems,
    setCartItems,

    addItemToCart,
    removeItemFromCart,

    // isInCart,
    // handleCartClick,
  };
};

export default useCart;

// useEffect(() => {
//   API.get("/cart").then((res) => {
//     setCartItems(res.data);
//   });
// }, []);

// const addItemToCart = (obj) => {
//   API.post("/cart", [...cartItems, obj]);
//   setCartItems((prevItems) => [...prevItems, obj]);
// };

// const removeItemFromCart = (id) => {
//   API.delete(`/cart${id}`);
//   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
// };
