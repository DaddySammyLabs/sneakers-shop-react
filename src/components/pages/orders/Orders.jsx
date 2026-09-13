import React, { useState } from "react";
import styles from "./Orders.module.css";

import Card from "@/components/screens/item-cards/Card";

import { useApp } from "@/context/AppContext";
import { useUser } from "@/context/UserContext";

const Orders = ({ texts }) => {
  const {
    orders,
    removeOrder,

    cartItems,
    favorites,
    addToFavorite,
    removeFromFavorites,
    addItemToCart,
    removeItemFromCart,
  } = useApp();

  const { username } = useUser();

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const openRemoveModal = (orderId) => {
    setSelectedOrderId(orderId);
  };

  const closeRemoveModal = () => {
    setSelectedOrderId(null);
  };

  const handleRemoveOrder = async () => {
    if (!selectedOrderId) return;

    await removeOrder(selectedOrderId);

    setSelectedOrderId(null);
  };

  return (
    <div className="p-10">
      <div className="flex items-center gap-1.5 text-blue-900 hover:text-black cursor-pointer mb-5">
        <img src="/icons/profile.svg" alt="Profile" />

        <h2 className="text-xl font-bold">
          {texts.user} {username}
        </h2>
      </div>

      <h1 className="text-3xl font-bold mb-2">{texts.orders}</h1>

      {orders.length > 0 && (
        <div className="flex flex-col gap-6">
          <p className="text-slate-500 mb-10">
            Оформленные заказы можно отменить в течение 30 минут
          </p>

          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-slate-200 rounded-xl p-5"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Заказ #{order.id}</h2>

                <div className="flex items-center gap-4">
                  <span className="text-gray-500">{order.totalPrice} ₽</span>

                  <button
                    onClick={() => openRemoveModal(order.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    Отменить заказ
                  </button>
                </div>
              </div>

              <div className={`${styles.cardList} grid grid-cols-3 gap-2`}>
                {order.items.map((item) => (
                  <Card
                    texts={texts}
                    key={item.id}
                    {...item}
                    cartItems={cartItems}
                    favorites={favorites}
                    addToFavorite={addToFavorite}
                    removeFromFavorites={removeFromFavorites}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {orders.length === 0 && (
        <div className="flex flex-col items-center mt-20">
          <img className="w-40 opacity-60" src="/icons/emoji-1.png" alt="" />

          <h2 className="text-2xl font-bold mt-5">Заказов нет</h2>

          <p className="text-slate-400 mt-2">Вы ещё ничего не заказывали</p>
        </div>
      )}

      {selectedOrderId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-3">Подтверждение отмены</h2>

            <p className="text-gray-600 mb-6">
              Вы уверены, что хотите отменить заказ <b>#{selectedOrderId}</b>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={closeRemoveModal}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                Отмена
              </button>

              <button
                onClick={handleRemoveOrder}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Да, отменить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
