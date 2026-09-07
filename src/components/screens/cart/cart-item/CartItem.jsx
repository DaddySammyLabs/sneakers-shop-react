import React from "react";

const CartItem = ({ id, title, price, imageUrl, removeItemFromCart }) => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-2">
        <div className="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
          <img className="w-18 h-17" src={imageUrl} alt="title" />

          <div className="flex flex-col flex-1 justify-between">
            <p> {title} </p>

            <div className="flex justify-between mt-2">
              <b className="flex-1">{price} руб.</b>
              <img
                onClick={() => removeItemFromCart(id)}
                className="opacity-50 hover:opacity-100 cursor-pointer transition"
                src="/icons/close.svg"
                alt="remove"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
