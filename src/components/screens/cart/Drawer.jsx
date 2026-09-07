import React from "react";
import styles from "./Drawer.module.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import CartHeader from "./cart-details/CartHeader";
import InfoBlock from "./cart-details/InfoBlock";
import CartItem from "./cart-item/CartItem";
import CartFooter from "./cart-details/CartFooter";

const Drawer = ({
  isCartOpen,
  closeCart,
  cartItems = [],

  removeItemFromCart,

  createOrder,
  handleOrderClick,
  isOrderComplete,
  setIsOrderComplete,
}) => {
  const [itemsParent] = useAutoAnimate();

  const onCloseCart = () => {
    closeCart();
    setIsOrderComplete(false);
  };
  return (
    <>
      {/* <div> */}
      <div className={`${styles.overlay}  ${isCartOpen ? styles.show : ""}`}>
        <div className="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>

        <div
          className={`${styles.cart} flex flex-col bg-white w-96 h-full fixed right-0 top-0 z-20 px-8 pt-8`}
        >
          <CartHeader closeCart={onCloseCart} />

          <div ref={itemsParent} className="flex-1 overflow-y-auto">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
          </div>

          {/* empty success */}

          {cartItems.length === 0 && !isOrderComplete && (
            // <div className="flex flex-1 items-center justify-center">
            <InfoBlock
              closeCart={onCloseCart}
              title={"Корзина пустая"}
              description={
                "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              }
              imageUrl="/icons/package-icon.png"
            />
            // </div>
          )}
          {isOrderComplete && (
            <InfoBlock
              closeCart={onCloseCart}
              title={"Заказ оформлен!"}
              description={`Ваш заказ orderId скоро будет передан курьерской доставке.`}
              imageUrl="/icons/order-success-icon.png"
            />
          )}

          <CartFooter
            cartItems={cartItems}
            createOrder={createOrder}
            OrderComplete={() => {
              cartItems.length !== 0 && setIsOrderComplete(true);
            }}
            setIsOrderComplete={setIsOrderComplete}
            handleOrderClick={handleOrderClick}
            removeItemFromCart={removeItemFromCart}
          />
        </div>
      </div>
    </>
  );
};

export default Drawer;
