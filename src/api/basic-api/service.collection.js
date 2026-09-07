// src/api/service.collection.js

import API from "./api";
import { ENDPOINTS } from "./endpoints";

export const getCollections = async (categoryId, page = 1) => {
  const { data } = await API.get(ENDPOINTS.COLLECTIONS, {
    params: {
      ...(categoryId && { category: categoryId }),
      page,
      limit: 3,
    },
  });

  return data;
};

// export const getCollections = async (categoryId) => {
//   const { data } = await API.get(ENDPOINTS.COLLECTIONS, {
//     params: categoryId ? { category: categoryId } : {},
//   });
// };

// 4th axios-data.json

// 3th params: prof-axios-way
// params: {
//   category: categoryId,
//   page,
//   limit,
//   sort,
// }
// Axios сформирует: /collection?category=1&page=2&limit=10&sort=price

// 2nd full
// export const getCollections = async (categoryId) => {
//   const { data } = await API.get(
//     `${ENDPOINTS.COLLECTIONS}${categoryId ? `?category=${categoryId}` : ""}`,
//   );
//   return data;
// };

//1st
//   const { data } = await API.get(`${ENDPOINTS.COLLECTIONS}`);
