import React, { createContext, useContext } from "react";
import { cartContext } from "./CartProject";
import { priceContext } from "./NewCart";

export const CartCard = () => {
  const { addCart, removeCart } = useContext(cartContext);
  const { increaseQuantity, lessQuantity, minDisable } =
    useContext(priceContext);

  return (
    <>
      <div>
        {addCart.map((val) => (
          <div
            className="w-full border-2 border-black rounded-r-xl mb-4 relative"
            key={val.id}
          >
            <div id="contentNewCard" className="flex gap-4">
              <div id="img" className="w-20 h-20 sm:w-40 sm:h-40 ">
                <img
                  src={val.pic}
                  alt="food-Img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div id="foodDetails" className="flex flex-col sm:gap-2 my-2">
                <h2 className="text-lg sm:text-3xl font-semibold">
                  {val.name}
                </h2>
                <p className="text-sm sm:text-2xl font-semibold text-gray-500">
                  <span>&#8377;</span>
                  {val.amt}
                </p>
                <p className="text-sm sm:text-lg font-semibold ">Quantity</p>
                <div id="addCount" className="flex gap-4 font-bold">
                  <button
                    className=" cursor-pointer text-lg"
                    onClick={() => increaseQuantity(val.id)}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    value={val.quantity}
                    className="w-4 outline-none border-none"
                    readOnly
                  />

                  <button
                    disabled={minDisable}
                    className=" cursor-pointer text-lg"
                    onClick={() => lessQuantity(val.id)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div id="removeBtn" className="absolute top-2 right-4">
                <button
                  className="bg-red-600 px-2 sm:px-4 sm:py-2 rounded-lg text-white font-semibold"
                  onClick={() => removeCart(val)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
