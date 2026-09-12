import React from "react";

const CartFooter = ({ totalPrice, createOrder }) => {
  const taxPrice = totalPrice * 0.05;

  const doItOrder = async () => {
    await createOrder();
  };

  return (
    <>
      <div className="flex flex-col gap-4 my-6">
        <div className="flex gap-2">
          <span>Итого:</span>

          <div className="flex-1 border-b border-gray-300 border-dashed"></div>

          <b> {totalPrice} ₽</b>
        </div>

        <div className="flex gap-2">
          <span>Налог 5%</span>

          <div className="flex-1 border-b border-gray-300 border-dashed"></div>

          <b> {taxPrice} ₽</b>
        </div>

        <button
          onClick={doItOrder}
          disabled={totalPrice === 0}
          className="mt-2 bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-gray-400 hover:bg-lime-600 active:bg-lime-700 cursor-pointer transition relative"
        >
          Оформить заказ
          <img
            className="absolute right-15 bottom-4"
            src="/icons/arrow-next.svg"
            alt="arrow"
          />
        </button>
      </div>
    </>
  );
};

export default CartFooter;
