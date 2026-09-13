import React from "react";
import styles from "./Card.module.css";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";

import { useAutoAnimate } from "@formkit/auto-animate/react";

export const CardList = ({
  texts,

  items,
  loading,
  cartItems,

  addItemToCart,
  removeItemFromCart,

  favorites,
  addToFavorite,
  removeFromFavorites,

  searchValue,
}) => {
  const [parent] = useAutoAnimate();

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <div
        ref={parent}
        className={`${styles.cardList} grid grid-cols-4 gap-5 `}
      >
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : filteredItems.map((item) => (
              <Card
                texts={texts}
                key={item.id}
                {...item}
                cartItems={cartItems}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
                favorites={favorites}
                addToFavorite={addToFavorite}
                removeFromFavorites={removeFromFavorites}
              />
            ))}
      </div>
    </>
  );
};
