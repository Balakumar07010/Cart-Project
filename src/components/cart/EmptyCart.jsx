import React from "react";
// import { empty } from "./cart/empty.png";

export const EmptyCart = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center gap-4 mt-20">
        <div className="w-60 h-60 ">
          <img
            src="./cart/empty.png"
            alt="Empty"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-lg">Cart is Empty</p>
        </div>
      </div>
    </div>
  );
};
