import "@/assets/styles/global.css";
import styles from "./App.module.css";
import { useApp } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";

import texts from "./constants/texts";

import Header from "./components/screens/header/Header";
import Drawer from "./components/screens/cart/Drawer";
import Home from "./components/pages/home/Home";
import Favorites from "./components/pages/favorites/Favorites";
import Orders from "./components/pages/orders/Orders";

function App() {
  const { language, upButton } = useApp();

  return (
    <>
      <div className="container bg-white w-4/5 m-auto mt-14 rounded-xl shadow-xl/15">
        <div className={styles.app}>
          <Drawer texts={texts[language]} />

          <Header texts={texts[language]} />
          <Routes>
            <Route path="/test" element={<div>Testing</div>}></Route>
            <Route
              path="/"
              element={
                <>
                  <Home texts={texts[language]} />
                </>
              }
            ></Route>
            <Route
              path="/favorites"
              element={
                <>
                  <Favorites texts={texts[language]} />
                </>
              }
            ></Route>
            <Route
              path="/orders"
              element={
                <>
                  <Orders texts={texts[language]} />
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
