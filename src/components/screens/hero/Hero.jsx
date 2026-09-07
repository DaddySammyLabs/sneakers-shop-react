import React from "react";
import styles from "./Hero.module.css";
import useResize from "@/hooks/useResize";

const Hero = () => {
  const isMobile = useResize();

  return (
    <>
      {!isMobile ? (
        <div
          className={`${styles.hero}  relative h-80 w-9/10 m-auto mt-10 rounded-2xl`}
        >
          <img
            className="float-right h-full"
            src="/images/banner_hero.jpg"
            alt=""
          />
          <img
            className={`${styles.logo} absolute top-5 left-5 w-30`}
            src="/images/adidas_disney.svg"
            alt=""
          />

          <div
            className={`${styles.heroInfo} flex flex-col w-70 info-block absolute top-2/7 left-30`}
          >
            <div>
              <h2 className="text-5xl font-bold leading-tight">
                <b className="font-bold text-lime-600 opacity-70">Stan Smith</b>
                , Forever!
              </h2>
            </div>
            <button className="w-45 mt-4 bg-lime-600 rounded-3xl px-10 py-3 text-white hover:bg-lime-600 active:bg-lime-700 cursor-pointer transition opacity-60">
              КУПИТЬ
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`${!isMobile ? styles.hero : `${styles.hero} ${styles.heroMobile}`}  relative h-80 w-9/10 m-auto mt-10 rounded-2xl`}
        >
          <img
            className="float-right h-full"
            src="/images/banner_hero.jpg"
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Hero;
