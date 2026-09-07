import React from "react";
import styles from "./Favorites.module.css";
import Card from "@/components/screens/item-cards/Card";

const Favorites = ({
  favorites,
  cartItems,
  addItemToCart,
  removeItemFromCart,
  addToFavorite,
  removeFromFavorites,
}) => {
  return (
    <>
      {/* <div
        className={`p-10 ${styles.favItems}  ${favorites ? styles.show : ""}`}
      > */}
      <div className={`p-10 ${styles.favItems} ${styles.show}`}>
        <h1 className="text-3xl font-bold mb-10">Favorites</h1>
        <div className={`grid grid-cols-3 gap-2`}>
          {favorites.map((item) => (
            <Card
              key={item.id}
              id={item.itemId}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              cartItems={cartItems}
              favorites={favorites}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              addToFavorite={addToFavorite}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>

        {favorites.length === 0 && (
          <div className="flex flex-col items-center mt-20">
            <img className="w-40 opacity-60" src="/icons/emoji-1.png" alt="" />

            <h2 className="text-2xl font-bold mt-5">Закладок нет</h2>

            <p className="text-slate-400 mt-2">Добавьте товары в favorites</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
