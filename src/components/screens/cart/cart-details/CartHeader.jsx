import React from "react";
import styles from "./Cart.module.css";

const CartHeader = ({ closeCart }) => {
  return (
    <>
      <div className={` ${styles.cartHead} flex items-center gap-5 mb-8`}>
        <img
          className="opacity-30 cursor-pointer rotate-180 hover:opacity-100 hover:-translate-x-1 transition"
          onClick={closeCart}
          src="/icons/arrow-dark-next.svg"
          alt="arrow"
        />

        <h2 className="text-2xl font-bold">Корзина</h2>
      </div>
    </>
  );
};

export default CartHeader;
