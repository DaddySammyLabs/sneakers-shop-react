import { API, ENDPOINTS } from "./api";

export const createOrder = async (cartItems) => {
  const { data } = await API.post(ENDPOINTS.ORDERS, {
    items: cartItems,
  });

  return data;
};

// when place?
// const handleOrder = async () => {
//   try {
//     await createOrder(cartItems);

//     setCartItems([]);
//     setIsOrderComplete(true);
//   } catch (error) {
//     console.error(error);
//   }
// };

//

// Если сервер должен получать товар сразу при добавлении
//
// useCart.js
// const addItemToCart = async (obj) => {
//   try {
//     await API.post(ENDPOINTS.CART, obj);

//     setCartItems((prevItems) => {
//       const isAlreadyInCart = prevItems.some(
//         (item) => item.id === obj.id
//       );

//       if (isAlreadyInCart) {
//         return prevItems;
//       }

//       return [...prevItems, obj];
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
