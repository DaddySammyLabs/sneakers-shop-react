import "@/assets/styles/global.css";
import useAppState from "./useAppState";
import styles from "./App.module.css";

import { Routes, Route } from "react-router-dom";

import texts from "./constants/texts";

import Header from "./components/screens/header/Header";
import Drawer from "./components/screens/cart/Drawer";
import Home from "./components/pages/home/Home";
import Favorites from "./components/pages/favorites/Favorites";
import Orders from "./components/pages/orders/Orders";

function App() {
  const {
    language,
    setLanguage,
    theme,
    toggleTheme,
    isOpen,
    open,
    close,
    isMobile,

    scroll,
    upButton,
    toBlock,

    items,
    loading,
    cartDrawer,

    cartItems,
    addItemToCart,
    removeItemFromCart,
    // isInCart,
    // handleCartClick,

    favorites,
    addToFavorite,
    removeFromFavorites,
    isFavorite,

    orders,
    createOrder,
    handleOrderClick,

    isOrderComplete,
    setIsOrderComplete,
    removeOrder,
    shouldRemoveOrder,
    setShouldRemoveOrder,

    searchValue,
    onChangeSearchValue,
    clearInput,

    sortValue,
    onChangeSortValue,
  } = useAppState();

  //   что такое useContext обьясни пожалуйста, что за магия.
  // я посмотрел раза 2 по туториал и даже добавил в свой проект но,
  // понимаю что не понял как она работает до конца и что такое router-react

  // 1:51:13

  return (
    <>
      <div className="container bg-white w-4/5 m-auto mt-14 rounded-xl shadow-xl/15">
        <div className={styles.app}>
          {/* {isCartOpen && (
            <Drawer isCartOpen={cartDrawer.value} closeCart={cartDrawer.remove} />
          )} */}

          <Drawer
            isCartOpen={cartDrawer.value}
            closeCart={cartDrawer.remove}
            cartItems={cartItems}
            createOrder={createOrder}
            handleOrderClick={handleOrderClick}
            isOrderComplete={isOrderComplete}
            setIsOrderComplete={setIsOrderComplete}
            removeItemFromCart={removeItemFromCart}
          />

          <Header
            texts={texts[language]}
            isOpenModal={isOpen}
            openModal={open}
            closeModal={close}
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            toggleTheme={toggleTheme}
            isMobile={isMobile}
            openCart={cartDrawer.add}
          />
          <Routes>
            <Route path="/test" element={<div>Testing</div>}></Route>
            <Route
              path="/"
              element={
                <>
                  <Home
                    texts={texts[language]}
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    clearInput={clearInput}
                    sortValue={sortValue}
                    onChangeSortValue={onChangeSortValue}
                    items={items}
                    loading={loading}
                    cartItems={cartItems}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    favorites={favorites}
                    addToFavorite={addToFavorite}
                    removeFromFavorites={removeFromFavorites}
                    // isInCart={isInCart}
                    // handleCartClick={handleCartClick}
                  />
                </>
              }
            ></Route>
            <Route
              path="/favorites"
              element={
                <>
                  <Favorites
                    favorites={favorites}
                    cartItems={cartItems}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    addToFavorite={addToFavorite}
                    removeFromFavorites={removeFromFavorites}
                  />
                </>
              }
            ></Route>
            <Route
              path="/orders"
              element={
                <>
                  <Orders
                    texts={texts[language]}
                    shouldRemoveOrder={shouldRemoveOrder}
                    setShouldRemoveOrder={setShouldRemoveOrder}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    orders={orders}
                    cartItems={cartItems}
                    favorites={favorites}
                    addToFavorite={addToFavorite}
                    removeFromFavorites={removeFromFavorites}

                    // isOrderComplete={isOrderComplete}
                    // setIsOrderComplete={setIsOrderComplete}
                  />
                </>
              }
            ></Route>
          </Routes>

          <hr className={styles.line}></hr>

          <div className={styles.footer}>
            <div onClick={upButton}>{texts[language].subtitle}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
