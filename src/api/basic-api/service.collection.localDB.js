// src/api/service.collection.localDB.js

import API from "./api.localDB";

export const getCollections = async (categoryId) => {
  const { data } = await API.get("data.json");

  const collections = data.collections;

  if (!categoryId) {
    return collections;
  }

  return collections.filter((collection) => collection.category === categoryId);
};

// 4th axios-data.json -> not dependent on mokky.dev

// 1,2- axios ,3th params: prof-axios-way
