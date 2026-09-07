import { createContext, useEffect, useState } from "react";

import { serviceItems } from "./api/service.items.js";

import useLanguage from "./hooks/useLanguage";
import useTheme from "./hooks/useTheme";
import useModal from "./hooks/useModal";
import useResize from "./hooks/useResize";

import useCart from "./hooks/useCart";
import useOrders from "./hooks/useOrders.js";
import useFilters from "./hooks/useFilters";
import useFavorites from "./hooks/useFavorites.js";

const AppContext = createContext({});

const useAppState = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isOpen, open, close } = useModal();
  const isMobile = useResize();

  const [scroll, setScroll] = useState(0);
  const scrollUp = () => {
    setScroll(window.scrollX);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useState(() => {
    window.addEventListener("scroll", scrollUp);
  }, []);

  const toBlock = (height) => {
    window.scrollTo({ top: height, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    cartDrawer,
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    // isInCart,
    // handleCartClick,
  } = useCart();

  const { favorites, addToFavorite, removeFromFavorites, isFavorite } =
    useFavorites();

  const {
    orders,
    createOrder,
    handleOrderClick,

    isOrderComplete,
    setIsOrderComplete,

    removeOrder,
    shouldRemoveOrder,
    setShouldRemoveOrder,
  } = useOrders({ cartItems, setCartItems, removeItemFromCart });

  const { items, loading } = serviceItems();

  const {
    items: sortedItems,

    searchValue,
    onChangeSearchValue,
    clearInput,

    sortValue,
    onChangeSortValue,
  } = useFilters({ items });

  return {
    language,
    setLanguage,
    theme,
    toggleTheme,
    isOpen,
    open,
    close,
    isMobile,

    scroll,
    upButton,
    toBlock,

    // items,
    items: sortedItems,
    loading,

    cartDrawer,
    cartItems,

    addItemToCart,
    removeItemFromCart,

    favorites,
    addToFavorite,
    removeFromFavorites,
    isFavorite,

    orders,
    createOrder,
    isOrderComplete,
    setIsOrderComplete,
    removeOrder,
    shouldRemoveOrder,
    setShouldRemoveOrder,

    searchValue,
    onChangeSearchValue,
    clearInput,

    sortValue,
    onChangeSortValue,
  };
};

export default useAppState;
