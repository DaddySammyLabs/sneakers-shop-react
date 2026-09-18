import React from "react";

const InfoBlock = ({ imageUrl, title, description, buttonBack, closeCart }) => {
  return (
    <>
      <div className="flex h-full text-center items-center leading-relaxed w-72">
        <div className="">
          <img src={imageUrl} alt="info image" className="h-30 w-30 m-auto" />
          <h2 className="text-3xl font-medium"> {title} </h2>
          <p className="text-gray-400"> {description} </p>
          <button
            onClick={closeCart}
            className="mt-4 bg-lime-500 w-full rounded-3xl py-4 text-white hover:bg-lime-600 active:bg-lime-700 cursor-pointer transition relative"
          >
            {buttonBack}
            <img
              className="rotate-180 absolute top-4/10 left-1/6"
              src={"/icons/arrow.svg"}
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoBlock;
