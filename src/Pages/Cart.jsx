import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Cartcomponent from "../Components/Cartcomponent/Cartcomponent";
import sad from "../Components/Assest/sad.png";

const Cart = () => {
  const { Cart, setCart, products, getInfo, Data, setData } =
    useContext(ShopContext);

  useEffect(() => {
    getInfo(Cart, products, setData);
  }, [Cart, products]);

  // Total price
  const getTotalPrice = () => {
    return Data.reduce((total, item) => total + item.oldPrice * item.number, 0);
  };
  let price = getTotalPrice();

  
  // Total Discount

  const getTotalDiscount = () => {
    return Data.reduce(
      (total, item) => total + (item.oldPrice - item.newPrice) * item.number,
      0
    );
  };

  let discount = getTotalDiscount();

  
  let total = Data.length;
  console.log(total);

  // Grand total 
  let Grand = price - discount 

  console.log(Data);

  return (
    <div>
      {Data.length === 0 ? (
        <div className="Empty flex justify-center text-2xl mt-36 gap-5 ">
          <p className="mt-7">Add a item in your Cart</p>
          <img className="w-[100px]" src={sad} alt="" />
        </div>
      ) : (
        <div className="main flex">
          <div className="left w-[60%]">
            <div className="cards flex flex-col gap-1">
              {Data.map((item, i) => {
                return <Cartcomponent item={item} />;
              })}
            </div>
          </div>
          <div className="right w-[40%] ">
            <div className="logo float-right mr-11 mt-1 flex gap-2">
              <img
                src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
                class="secureIcon"
                width="26"
                height="28"
              />
              <p className="text-green-600 font-medium text-sm tracking-widest pt-1">
                100% SECURE
              </p>
            </div>
            <div className="content flex flex-col gap-2">
              <p className="details mt-12 ml-5 text-sm font-semibold text-zinc-700 tracking-wider ">
                PRICE DETAILS ({total} Item)
              </p>
                <div className="price flex ml-5 gap-[193px] ">
                  <p className="text-gray-600 font-medium">Total MRP</p>
                  <p>${(price)}</p>
                </div>
                <div className="discount flex ml-5 gap-[139px]">
                  <p className="d text-gray-600 font-medium">Discount on MRP</p>
                  <p className="text-green-600">-${discount  }</p>
                </div>
                <div className="flex gap-[175px]">
                <p className="platform text-gray-600 font-medium ml-5">Platform Fee</p>
                <p className="text-green-600">FREE</p>
                </div>
                <div className="flex gap-[175px]">
                <p className="platform text-gray-600 font-medium ml-5">Shipping Fee</p>
                <p className="text-green-600">FREE</p>
                </div>
                <div className="line w-[400px] h-[1px] bg-gray-300 ml-0 mt-4"></div>
                <div className="grand flex gap-[160px] mt-2">
                  <p className="text-gray-600 ml-5  text-lg font-bold">Total Amount</p>
                  <p className="">${(Grand).toFixed(0)}</p>
                </div>
                <div className="order w-[400px] h-[40px] bg-red-500 mt-3 rounded-sm cursor-pointer">
                  <p className="place text-white font-bold tracking-wider flex justify-center pt-[7px]">PLACE ORDER</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
