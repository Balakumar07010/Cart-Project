import React, { createContext, useContext, useEffect, useState } from "react";
import { CartCard } from "./CartCard";
import { PriceDetails } from "./PriceDetails";
import { cartContext } from "./CartProject";
import { EmptyCart } from "./EmptyCart";

export const priceContext = createContext();

export const NewCart = () => {
  const { addCart, setAddCart } = useContext(cartContext);

  const [emptyCart, setEmptyCart] = useState(false);
  const [countCart, setcountCart] = useState(false);

  // disable Button
  const [minDisable, setMinDisable] = useState(true);

  const [total, setTotal] = useState(0); //Total Price
  const [addGST, setGST] = useState(0); //GST

  useEffect(() => {
    setEmptyCart(addCart.length == 0 ? true : false);
    setcountCart(addCart.length !== 0 ? true : false);
    let newTotal = 0;
    addCart.map((val) => {
      newTotal += parseInt(val.amt);
    });
    setTotal(newTotal);
    let GST = (newTotal * 18) / 100;
    setGST(newTotal + GST);
  }, [addCart]);

  // Increment Quentity
  const increaseQuantity = (id) => {
    setMinDisable(false);
    const updatedCart = addCart.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + 1;
        const amt = parseInt(item.originalPrice);
        const newAmt = (
          parseInt(item.originalPrice) * parseInt(newQuantity)
        ).toFixed(2);
        return {
          ...item,
          quantity: newQuantity,
          amt: newAmt,
        };
      }
      return item;
    });
    setAddCart(updatedCart);
  };

  // Decrement Quentity
  const lessQuantity = (id) => {
    const updatedCart = addCart.map((item) => {
      if (item.quantity == 1) {
        setMinDisable(true);
      }
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        const newAmt = (
          parseInt(item.originalPrice) * parseInt(newQuantity)
        ).toFixed(2);
        return {
          ...item,
          quantity: newQuantity,
          amt: newAmt,
        };
      }
      return item;
    });
    setAddCart(updatedCart);
  };

  return (
    <priceContext.Provider
      value={{
        increaseQuantity,
        lessQuantity,
        minDisable,
        total,
        addGST,
      }}
    >
      {emptyCart && <EmptyCart />}
      {countCart && (
        <div className="m-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-3/5 lg:w-3/4 ">
              <CartCard />
            </div>
            <div className="sm:w-2/5 lg:w-1/4 sticky bottom-0 sm:top-15 bg-white">
              <PriceDetails />
            </div>
          </div>
        </div>
      )}
    </priceContext.Provider>
  );
};
