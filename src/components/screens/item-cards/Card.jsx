import styles from "./Card.module.css";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
import ContentLoader from "react-content-loader";

const Card = ({
  id,
  title,
  price,
  imageUrl,
  cartItems,

  texts,

  addItemToCart,
  removeItemFromCart,

  favorites,
  addToFavorite,
  removeFromFavorites,
}) => {
  const isInCart = cartItems.some((item) => item.itemId === id);

  const handleCartClick = () => {
    const cartItem = cartItems.find((item) => item.itemId === id);

    if (cartItem) {
      removeItemFromCart(cartItem.id);
    } else {
      addItemToCart({ id, title, price, imageUrl });
    }
  };

  // favorites

  const isInFavorites = favorites.some((item) => item.itemId === id);

  const handleLikeClick = () => {
    const FavoritesItem = favorites.find((item) => item.itemId === id);

    if (FavoritesItem) {
      removeFromFavorites(FavoritesItem.id);
    } else {
      addToFavorite({ id, title, price, imageUrl });
    }
  };

  return (
    <>
      <div
        className={`${styles.productCard} relative bg-white border border-slate-100 rounded-xl p-5 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition`}
      >
        <img
          onClick={handleLikeClick}
          src={`/icons/${!isInFavorites ? "like-1.svg" : "like-2.svg"}`}
          alt="Like-empty"
          className="absolute top-8 left-8"
        />
        <img className={styles.imageSneaker} src={imageUrl} alt="Sneaker" />
        <p className="mt-2">
          {texts.sneakers}
          {title}
        </p>

        <div className="flex justify-between mt-5">
          <div className="flex flex-col">
            <span className="text-slate-400">{texts.price}</span>
            <b>
              {" "}
              {price} {texts.rubles}
            </b>
          </div>

          <img
            onClick={handleCartClick}
            src={`/icons/${isInCart ? "checked.svg" : "plus.svg"}`}
            alt={isInCart ? "Удалить из корзины" : "Добавить в корзину"}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
