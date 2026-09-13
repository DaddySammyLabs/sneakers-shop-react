import React from "react";
import styles from "./HeaderMobile.module.css";

import { Link } from "react-router-dom";

import ModalMenu from "@/components/ui/modal/modal-menu/ModalMenu";

const HeaderMobile = ({
  texts,
  isOpenModal,
  openModal,
  closeModal,
  theme,
  toggleTheme,
  language,
  setLanguage,
  isMobile,
  totalPrice,
  openCart,
}) => {
  return (
    <>
      <header
        className={`${styles.navbar} items-center gap-4 flex justify-around border-b border-slate-200  px-10 py-8`}
      >
        <Link to="/">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="w-10" />

            <div>
              <h2 className="text-xl font-bold uppercase">React Sneakers</h2>
              <p className="text-slate-400">{texts.subtitle}</p>
            </div>
          </div>{" "}
        </Link>

        <span type="button" className={`${styles.menu}`} onClick={openModal}>
          {/* <img
            src={theme === "light" ? "/icons/bars_dark.svg" : "/icons/bars.svg"}
            alt="menu-navbar"
          /> */}
          <img src={"/icons/bars_dark.svg"} alt="menu-navbar" />
        </span>

        <ModalMenu
          show={isOpenModal}
          onClose={closeModal}
          language={language}
          setLanguage={setLanguage}
          isMobile={isMobile}
        >
          <ul className={`${styles.navbarList} flex  gap-2`}>
            <li
              onClick={openCart}
              className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
            >
              <img src="/icons/cart.svg" alt="Cart" />
              <b className="text-sm ">
                {totalPrice}
                {texts.rubles}
              </b>
            </li>

            <Link to="/favorites">
              <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
                <img src="/icons/heart.svg" alt="Cart" />
                <span>{texts.favorites}</span>
              </li>{" "}
            </Link>

            <Link to="/orders">
              <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
                <img src="/icons/profile.svg" alt="Cart" />
                <span>{texts.profile}</span>
              </li>{" "}
            </Link>
          </ul>
        </ModalMenu>
      </header>
    </>
  );
};

export default HeaderMobile;
