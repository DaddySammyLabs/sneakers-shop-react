import React from "react";
import { useApp } from "@/context/AppContext";

import Hero from "@/components/screens/hero/Hero";
import Filters from "@/components/ui/filters/Filters";
import { CardList } from "@/components/screens/item-cards/CardList";

const Home = ({ texts }) => {
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
      <Hero texts={texts} />
      <Filters
        texts={texts}
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        clearInput={clearInput}
        sortValue={sortValue}
        onChangeSortValue={onChangeSortValue}
      />
      <CardList
        texts={texts}
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
