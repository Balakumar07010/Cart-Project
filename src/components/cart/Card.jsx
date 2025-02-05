import React, { useContext, useState } from "react";
import productData from "../../data/data.json";
import { cartContext } from "./CartProject";

export const Card = () => {
  const { addCart, handleCart, removeCart } = useContext(cartContext);
  const [data] = useState(productData);

  return (
    <>
      <div className="m-4">
        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          {data.map((val) => (
            <div
              className="border-none rounded-lg overflow-hidden shadow-6xl mb-4"
              key={val.id}
            >
              <div id="img" className="w-full h-40">
                <img
                  src={val.pic}
                  alt="foodImg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div id="contend" className="ms-2 mt-2">
                <div id="foodName">
                  <h2 className="text-sm sm:text-xl font-semibold ">
                    {val.name}
                  </h2>
                </div>
                <div id="foodPrice">
                  <p className="text-sm sm:text-base font-semibold text-gray-500">
                    <span>&#8377;</span>
                    {val.amt}
                  </p>
                </div>
                <div id="foodDesc">
                  <p className="text-sm sm:text-base text-gray-500 text-justify mr-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                </div>
                <div className="w-4/5 pt-2 mb-4 mx-auto">
                  {addCart.includes(val) ? (
                    <button
                      type="button"
                      className="w-full bg-red-600 text-center p-1 md:p-2 text-white rounded-full text-sm sm:text-lg"
                      // onClick={() => handleCart(val.id)}
                      onClick={() => removeCart(val)}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full bg-purple-700 text-center p-1 md:p-2 text-white rounded-full text-sm md:text-lg"
                      // onClick={() => handleCart(val.id)}
                      onClick={() => handleCart(val)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
