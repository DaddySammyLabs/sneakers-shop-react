import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import HeaderMobile from "./header-mobile/HeaderMobile";

import ModalMenu from "@/components/ui/modal/modal-menu/ModalMenu";

const Header = ({
  isMobile,
  texts,
  isOpenModal,
  openModal,
  closeModal,
  theme,
  toggleTheme,
  language,
  setLanguage,
  openCart,
}) => {
  return (
    <>
      {!isMobile ? (
        <header
          className={`${styles.navbar} gap-4 flex justify-between items-center border-b border-slate-200  px-10 py-8`}
        >
          <Link to="/">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Logo" className="w-10" />

              <div>
                <h2 className="text-xl font-bold uppercase">React Sneakers</h2>
                <p className="text-slate-400">{texts.subtitle}</p>
              </div>
            </div>
          </Link>

          <ul className={`${styles.navbarList} flex items-center gap-10`}>
            <li
              onClick={openCart}
              // onClick={cartDrawer.add}
              className="flex items-center gap-1.5 text-gray-500 hover:text-black cursor-pointer"
            >
              <img src="/icons/cart.svg" alt="Cart" />
              <b>руб.</b>
            </li>

            <Link to="/favorites">
              <li className="flex items-center gap-1.5 text-gray-500 hover:text-black cursor-pointer">
                <img src="/icons/heart.svg" alt="Cart" />
                <span>Закладки</span>
              </li>
            </Link>
            <Link to="/orders">
              <li className="flex items-center gap-1.5 text-gray-500 hover:text-black cursor-pointer">
                <img src="/icons/profile.svg" alt="Cart" />
                <span>Профиль</span>
              </li>
            </Link>
          </ul>

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
          />
        </header>
      ) : (
        <HeaderMobile
          texts={texts}
          theme={theme}
          isOpenModal={isOpenModal}
          openModal={openModal}
          closeModal={closeModal}
          toggleTheme={toggleTheme}
          language={language}
          setLanguage={setLanguage}
          isMobile={isMobile}
          openCart={openCart}
        />
      )}
    </>
  );
};

export default Header;

// import "./Header.css";
// const Header = () => {
//   return (
//     <>
//       <header className="navbar gap-4 flex justify-between border-b border-slate-200 px-10 py-8">
//         <div className="flex items-center gap-4">
//           <img src="/logo.png" alt="Logo" className="w-10" />

//           <div>
//             <h2 className="text-xl font-bold uppercase">Vue Sneakers</h2>
//             <p className="text-slate-400">Магазин лучших кроссовок</p>
//           </div>
//         </div>

//         <ul className="navbar-list flex items-center gap-10">
//           <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
//             <img src="/cart.svg" alt="Cart" />
//             <b>totalPrice руб.</b>
//           </li>

//           <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
//             <img src="/heart.svg" alt="Cart" />
//             <span>Закладки</span>
//           </li>

//           <li className="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
//             <img src="/profile.svg" alt="Cart" />
//             <span>Профиль</span>
//           </li>
//         </ul>
//       </header>
//     </>
//   );
// };

// export default Header;
