import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "@/api/api";

import useToggle from "./useToggle";

const CART_STORAGE_KEY = "cartItems";

const useCart = () => {
  const cartDrawer = useToggle();

  // Загружаем корзину из localStorage при первом запуске
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // useEffect(() => {
  //   API.get("/cart").then((res) => {
  //     setCartItems(res.data);
  //   });
  // });

  // Каждый раз, когда cartItems меняется,
  // сохраняем актуальную корзину в localStorage
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (obj) => {
    setCartItems((prevItems) => {
      // Проверяем, есть ли уже такой товар
      const isAlreadyInCart = prevItems.some((items) => items.id === obj.id);

      // Если есть — ничего не меняем
      if (isAlreadyInCart) {
        return prevItems;
      }
      // Если товара нет — добавляем
      return [...prevItems, obj];
    });
  };
  // Удаление товара
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return {
    cartDrawer,

    cartItems,
    setCartItems,

    addItemToCart,
    removeItemFromCart,
  };
};

export default useCart;

// const useOrders = () => {
//   const [isOrderComplete, setIsOrderComplete] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const addItemToCart = (obj) => {
//     setCartItems((prevItems) => [...prevItems, obj]);
//   };
// };

// return {};

// export default useOrders;

// для проверки массива -> useEffect
//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);

// setCartItems([...cartItems, obj]);
// 🎯 setCartItems((prevItems) => [...prevItems, obj]);
// Почему это лучше: React может объединять/откладывать
// обновления состояния, и prevItems
// гарантированно содержит актуальное предыдущее состояние.
