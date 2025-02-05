import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "./CartProject";
import { priceContext } from "./NewCart";
import { Link } from "react-router-dom";

export const PriceDetails = () => {
  const { addCart, setAddCart } = useContext(cartContext);
  const { total, addGST } = useContext(priceContext);

  console.log(total);

  return (
    <div className="w-full sm:border-2 border-black px-4 py-2">
      <h2 className="text-2xl font-semibold"> PriceDetails</h2>
      <div id="details" className="flex flex-col gap-2 sm:gap-4 my-2">
        <div id="products" className="flex justify-between">
          <p className="font-semibold">Products({addCart.length})</p>
          <p>{total}</p>
        </div>
        <div id="CGST" className="flex justify-between">
          <p className="font-semibold">CGST</p>
          <p>18%</p>
        </div>
        <div id="SGST" className="flex justify-between">
          <p className="font-semibold">SGST</p>
          <p>18%</p>
        </div>
        <div id="total" className="flex justify-between">
          <p className="font-semibold">Total</p>
          <p>{addGST}</p>
        </div>
        <div id="priceBtn" className="w-full">
          <Link to={"/success"}>
            <button
              className="bg-purple-700 w-full py-2 text-white rounded-full"
              onClick={() => setAddCart([])}
            >
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
