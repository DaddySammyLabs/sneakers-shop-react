import { serviceItems } from "./api/service.items.js";

import useLanguage from "./hooks/useLanguage";
import useTheme from "./hooks/useTheme";
import useModal from "./hooks/useModal";
import useResize from "./hooks/useResize";
import useScroll from "./hooks/useScroll.js";

import useCart from "./hooks/useCart";
import useOrders from "./hooks/useOrders.js";
import useFilters from "./hooks/useFilters";
import useFavorites from "./hooks/useFavorites.js";

const useAppState = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isOpen, open, close } = useModal();
  const isMobile = useResize();
  const { scroll, upButton, toBlock } = useScroll();

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
