import React from "react";
import styles from "./Drawer.module.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useApp } from "@/context/AppContext";

import CartHeader from "./cart-details/CartHeader";
import InfoBlock from "./cart-details/InfoBlock";
import CartItem from "./cart-item/CartItem";
import CartFooter from "./cart-details/CartFooter";

const Drawer = ({ texts }) => {
  const {
    cartDrawer,
    cartItems,
    totalPrice,
    removeItemFromCart,

    createOrder,

    isOrderComplete,
    setIsOrderComplete,
  } = useApp();
  const [itemsParent] = useAutoAnimate();

  const onCloseCart = () => {
    cartDrawer.remove();
    setIsOrderComplete(false);
  };
  return (
    <>
      {/* <div> */}
      <div
        className={`${styles.overlay}  ${cartDrawer.value ? styles.show : ""}`}
      >
        <div className="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>

        <div
          className={`${styles.cart} flex flex-col bg-white w-96 h-full fixed right-0 top-0 z-20 px-8 pt-8`}
        >
          <CartHeader texts={texts} closeCart={onCloseCart} />

          <div ref={itemsParent} className="flex-1 overflow-y-auto">
            {cartItems.map((item) => (
              <CartItem
                texts={texts}
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

          {cartItems.length === 0 ? (
            // <div className="flex flex-1 items-center justify-center">
            <InfoBlock
              closeCart={onCloseCart}
              imageUrl={
                isOrderComplete
                  ? "/icons/order-success-icon.png"
                  : "/icons/package-icon.png"
              }
              title={isOrderComplete ? texts.titleOrder : texts.titleEmpty}
              description={
                isOrderComplete
                  ? `${texts.descOrder1} orderID ${texts.descOrder2}`
                  : texts.descEmpty
              }
              buttonBack={texts.buttonBack}
            />
          ) : // </div>
          null}
          {/* {isOrderComplete && (
            <InfoBlock
              closeCart={onCloseCart}
              imageUrl="/icons/order-success-icon.png"
              title={"Заказ оформлен!"}
              description={`Ваш заказ orderId скоро будет передан курьерской доставке.`}
              buttonBack={texts.buttonBack}
            />
          )} */}
          {!isOrderComplete && cartItems.length > 0 && (
            <CartFooter
              texts={texts}
              totalPrice={totalPrice}
              createOrder={createOrder}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Drawer;
