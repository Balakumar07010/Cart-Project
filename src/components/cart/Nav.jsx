import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartProject";

export const Nav = () => {
  const { addCart } = useContext(cartContext);
  const [count, setCount] = useState(-1);
  useEffect(() => {
    setCount(addCart.length);
  }, [addCart]);
  return (
    <div className="w-full h-12 sm:h-20 bg-purple-700 ">
      <div className="mx-2 py-2 md:mx-6 md:py-4 flex justify-between ">
        <div id="header" className="flex items-center gap-x-2">
          <div id="logo" className="h-8 w-8 md:h-12 md:w-12 rounded-full ">
            <img
              src="./cartImg/logo.png"
              alt="logo"
              className="w-full h-full object-cover  "
            />
          </div>
          <div id="head">
            <h2 className="text-xl md:text-2xl text-white font-semibold  ">
              Food Court
            </h2>
          </div>
        </div>
        <div
          id="content"
          className="flex items-center justify-between md:gap-x-8 gap-x-4"
        >
          <div className=" w-8 h-8 md:h-12 md:w-12 rounded-full" id="homeIcon">
            <Link to={"/"}>
              <img src="./cartImg/home.png" alt="home" />
            </Link>
          </div>
          <div
            id="carticon"
            className="w-8 h-8 md:h-12 md:w-12 rounded-full  relative"
          >
            <Link to={"/cart"}>
              <img src="./cartImg/shopping.png" alt="carticon" />
            </Link>
            <div id="count" className=" absolute top-0 right-0  z-10">
              <span className="w-4 h-4 flex justify-center bg-white rounded-full overflow-hidden text-sm">
                {count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
