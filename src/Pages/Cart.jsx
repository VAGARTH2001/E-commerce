import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Cartcomponent from "../Components/Cartcomponent/Cartcomponent";

const Cart = () => {
  const { Cart, setCart, products, getInfo, Data, setData } =
    useContext(ShopContext);

  
  console.log(Data);

  return (
    <div>
      <div className="main flex">
        <div className="left w-[60%]">
          <div className="cards flex flex-col gap-1">
            {Data.map((item, i) => {
              return <Cartcomponent item={item} />;
            })}
          </div>
        </div>
        <div className="right w-[40%]"></div>
      </div>
    </div>
  );
};

export default Cart;
