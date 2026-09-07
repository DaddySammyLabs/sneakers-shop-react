import React from "react";
import styles from "./Filters.module.css";

const Filters = ({
  searchValue,
  onChangeSearchValue,
  clearInput,
  texts,
  sortValue,
  onChangeSortValue,
}) => {
  return (
    <>
      <div
        className={`${styles.filters} flex justify-around flex-wrap items-center mb-10`}
      >
        <h2 className="text-3xl font-bold mb-2">
          {searchValue ? `${texts.searchByText}${searchValue}` : texts.allItems}
          {/* {texts.allItems} */}
        </h2>

        <div className={`${styles.selectFilter} flex items-center gap-4`}>
          <select
            value={sortValue}
            onChange={onChangeSortValue}
            className="py-2 px-3 border border-gray-300 rounded-md outline-none opacity-60"
          >
            <option value="title">{texts.byName}</option>
            <option value="priceCheap">{texts.byPriceCheap}</option>
            <option value="priceExpensive">{texts.byPriceExpensive}</option>
          </select>

          <div className="relative">
            <img
              className="absolute left-4 top-3"
              src="/icons/search.svg"
              alt="searchIcon"
            />
            <input
              onChange={onChangeSearchValue}
              className="border border-gray-300 rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
              type="text"
              placeholder={texts.search}
              value={searchValue}
            />
            <img
              onClick={clearInput}
              className="absolute right-3 top-2.5 h-5 cursor-pointer transition"
              src="/icons/close.svg"
              alt="clear"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
