import React from "react";

import Hero from "@/components/screens/hero/Hero";
import Filters from "@/components/ui/filters/Filters";
import { CardList } from "@/components/screens/item-cards/CardList";

const Home = ({
  texts,
  items,
  loading,

  cartItems,

  addItemToCart,
  removeItemFromCart,
  // isInCart,
  // handleCartClick,

  favorites,
  addToFavorite,
  removeFromFavorites,

  searchValue,
  onChangeSearchValue,
  clearInput,

  sortValue,
  onChangeSortValue,
}) => {
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
        // isInCart={isInCart}
        // handleCartClick={handleCartClick}
        searchValue={searchValue}
      />
    </>
  );
};

export default Home;
