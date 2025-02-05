import React, { createContext, useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Card } from "./Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewCart } from "./NewCart";
import { Success } from "./Success";

export const cartContext = createContext();

export const CartProject = () => {
  const [loading, setLoading] = useState(true);
  const [contentBreak, setcontentBreak] = useState(false);
  const [addCart, setAddCart] = useState([]);

  // Loading Animation
  useEffect(() => {
    const loadingAnimate = setTimeout(() => {
      setLoading(false);
      setcontentBreak(true);
    }, 1000);
    return () => clearTimeout(loadingAnimate);
  });
  // Add a product in a Cart
  const handleCart = (product) => {
    let addData = [...addCart, product];
    setAddCart(addData);
  };
  // Remove product in a Cart
  const removeCart = (product) => {
    setAddCart(addCart.filter((item) => product.id !== item.id));
    console.log(product);
  };

  return (
    <>
      <cartContext.Provider
        value={{
          addCart,
          setAddCart,
          handleCart,
          removeCart,
        }}
      >
        <BrowserRouter>
          {loading && (
            <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
              </div>
              <p>Loading...</p>
            </div>
          )}
          <div
            className={`transition-all duration-500 ease-in-out transform sticky top-0 z-10 ${
              loading
                ? "opacity-0 -translate-y-10"
                : "opacity-100 translate-y-0"
            }`}
          >
            {contentBreak && <Nav />}
          </div>
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              loading
                ? "opacity-0 -translate-y-10"
                : "opacity-100 translate-y-0"
            }`}
          >
            {contentBreak && (
              <Routes>
                <Route path="/" element={<Card />} />
                <Route path="/cart" element={<NewCart />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            )}
          </div>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  );
};
