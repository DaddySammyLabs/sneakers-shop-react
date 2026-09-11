import React from "react";
import { useApp } from "@/context/AppContext";

import Hero from "@/components/screens/hero/Hero";
import Filters from "@/components/ui/filters/Filters";
import { CardList } from "@/components/screens/item-cards/CardList";

const Home = ({
  texts,
  // items,
  // loading,

  // cartItems,

  // addItemToCart,
  // removeItemFromCart,

  // favorites,
  // addToFavorite,
  // removeFromFavorites,

  // searchValue,
  // onChangeSearchValue,
  // clearInput,

  // sortValue,
  // onChangeSortValue,
}) => {
  const {
    items,
    loading,

    cartItems,

    addItemToCart,
    removeItemFromCart,

    favorites,
    addToFavorite,
    removeFromFavorites,

    searchValue,
    onChangeSearchValue,
    clearInput,

    sortValue,
    onChangeSortValue,
  } = useApp();

  return (
    <>
      <Hero />
      <Filters
        // texts={texts[language]}
        texts={texts}
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        clearInput={clearInput}
        sortValue={sortValue}
        onChangeSortValue={onChangeSortValue}
      />
      <CardList
        items={items}
        loading={loading}
        cartItems={cartItems}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        favorites={favorites}
        addToFavorite={addToFavorite}
        removeFromFavorites={removeFromFavorites}
        searchValue={searchValue}
      />
    </>
  );
};

export default Home;
