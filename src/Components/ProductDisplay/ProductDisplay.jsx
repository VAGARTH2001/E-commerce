import React, { useContext, useState, useRef , useEffect } from "react";
import star from "../Assest/Green_star.png";
import bag from "../Assest/bag.png";
import heart from "../Assest/heart.png";
import { ShopContext } from "../../Context/ShopContext";
import {  toast } from "react-toastify";


const ProductDisplay = (props) => {
  const { addtocart, addtowishlist , storecart , initcart } = useContext(ShopContext);
  const box1ref = useRef();
  const box2ref = useRef();
  const box3ref = useRef();
  const box4ref = useRef();
  const box5ref = useRef();

  const [selectedsize, setselectedsize] = useState();
  const [inwishlist, setinwishlist] = useState(false);
  const [text, settext] = useState("WISHLIST");
  
  useEffect(() => {
    initcart()
  }, [])
  
    
  // Size div

  const handleclick = (event) => {
    const size = event.currentTarget
      .querySelector(".sizeDiv")
      .textContent.replace(/"/g);
    setselectedsize(size);
    if (size === "S") {
      box1ref.current.style.border = "3px solid orange";
    } else if (size === "M") {
      box2ref.current.style.border = "3px solid orange";
    } else if (size === "L") {
      box3ref.current.style.border = "3px solid orange";
    } else if (size === "XL") {
      box4ref.current.style.border = "3px solid orange";
    } else if (size === "XXL") {
      box5ref.current.style.border = "3px solid orange";
    } else {
      return;
    }
  };

  // Wishlist div

  const handlewishlist = () => {
    if (!selectedsize) {
      toast.error("Please select a size" ,{autoClose:2000});
      return;
    }
    addtowishlist(props.id, selectedsize);
    setinwishlist(true);
    settext("WISHLISTED");

    box1ref.current.style.border = "1px solid black";
    box2ref.current.style.border = "1px solid black";
    box3ref.current.style.border = "1px solid black";
    box4ref.current.style.border = "1px solid black";
    box5ref.current.style.border = "1px solid black";
    setselectedsize("")
  };
  // Cart div

  const handlecart = () => {
    if (!selectedsize) {
      toast.error("Please select a size" ,{autoClose:2000});
      return;
    }
    addtocart(props.id, selectedsize);
    storecart()

    toast.success(
      <div className="flex items-center">
        <img src={props.image} alt="bag icon" className="w-[40px] h-[50px] mr-2" />
        <span className="font-semibold">Added to bag</span>
      </div>,
      {
        autoClose:2000
      }
    );


    box1ref.current.style.border = "1px solid black";
    box2ref.current.style.border = "1px solid black";
    box3ref.current.style.border = "1px solid black";
    box4ref.current.style.border = "1px solid black";
    box5ref.current.style.border = "1px solid black";
    setselectedsize("")
  };

  

  const discount =
    ((props.old_price - props.new_price) / props.new_price) * 100;

  return (
    <div>
      <div className="pl-9">
        Clothing & Accesories&gt;{props.category}&gt;{props.name}
      </div>
      <div className="main flex">
        <div className="left w-[45%] h-[650px]   ml-3 mt-3 flex gap-6">
          <div className="small flex flex-col gap-2 ml-5 mt-4 ">
            <img
              className="w-[170px] border-1  rounded-lg"
              src={props.image}
              alt="1"
            />
            <img
              className="w-[170px] border-1  rounded-lg"
              src={props.image}
              alt="2"
            />
            <img
              className="w-[170px] border-1  rounded-lg"
              src={props.image}
              alt="3"
            />
          </div>
          <div className="large mt-4 mr-3">
            <img
              className="w-[520px] shadow-xl  border-1  rounded-lg"
              src={props.image}
              alt=""
            />
          </div>
        </div>
        <div className="right w-[55%] flex  flex-col">
          <div className="brand ml-7 mt-7 text-sky-400 font-medium text-2xl pb-2">
            BRAND:{props.brand}
          </div>
          <div className="name font-normal text-2xl text-gray-600 pl-7">
            {props.brand} {props.category} {props.name}
          </div>
          <div className="rating w-[168px] h-[35px] border-2 ml-8 mt-4 pl-2 flex gap-2 ">
            <div className="star flex gap-1">
              <p className="font-bold text-lg">4.1</p>
              <img className="h-[24px] pt-1" src={star} alt="" />
            </div>
            <div className="rate text-gray-500">| </div>
            <div className="text-gray-500 flex justify-center items-center pb-1">
              9.1k Ratings{" "}
            </div>
          </div>
          <div className="line ml-8 mt-3 w-[70%]  border bg-gray-500"></div>
          <div className="price flex gap-4">
            <div className="new text-3xl font-semibold ml-8 mt-2">
              ${props.new_price}
            </div>
            <div className="old flex gap-2 ">
              <div className="text-xl text-gray-500 mt-[14px]">M.R.P</div>
              <div className="line-through text-xl text-gray-500 mt-[14px]">
                ${props.old_price}
              </div>
              <div className="off text-2xl text-orange-400 font-semibold mt-2 ml-4">
                ({discount.toFixed(0)}% OFF)
              </div>
            </div>
          </div>
          <div className="tax text-yellow-800 ml-8 mt-3">
            inclusive of all taxes
          </div>
          <div className="size ml-8 mt-7 ">
            <p className="font-semibold">SELECT SIZE</p>
            <div className="sizes flex gap-3">
              <div
                ref={box1ref}
                onClick={handleclick}
                className=" w-[70px] h-[40px] border border-black rounded-3xl mt-4 shadow-lg hover:border-orange-400 flex flex-col justify-center items-center pb-1 cursor-pointer"
              >
                <div className=" sizeDiv font-semibold">S</div>
                <div className="text-xs">${props.new_price}</div>
              </div>
              <div
                ref={box2ref}
                onClick={handleclick}
                className=" w-[70px] h-[40px] border border-black rounded-3xl mt-4 shadow-lg hover:border-orange-400 cursor-pointer flex flex-col justify-center items-center pb-1 "
              >
                <div className="sizeDiv font-semibold">M</div>
                <div className="text-xs">${props.new_price}</div>
              </div>
              <div
                ref={box3ref}
                onClick={handleclick}
                className=" w-[70px] h-[40px] border border-black rounded-3xl mt-4 shadow-lg hover:border-orange-400 cursor-pointer flex flex-col justify-center items-center pb-1"
              >
                <div className="sizeDiv font-semibold">L</div>
                <div className="text-xs">${props.new_price}</div>
              </div>
              <div
                ref={box4ref}
                onClick={handleclick}
                className=" w-[70px] h-[40px] border border-black rounded-3xl mt-4 shadow-lg hover:border-orange-400 cursor-pointer flex flex-col justify-center items-center pb-1"
              >
                <div className=" sizeDiv font-semibold">XL</div>
                <div className="text-xs">
                  ${(props.new_price + 1).toFixed(2)}
                </div>
              </div>
              <div
                ref={box5ref}
                onClick={handleclick}
                className=" w-[70px] h-[40px] border border-black rounded-3xl mt-4 shadow-lg hover:border-orange-400 cursor-pointer flex flex-col justify-center items-center pb-1 "
              >
                <div className=" sizeDiv font-semibold">XXL</div>
                <div className="text-xs">
                  ${(props.new_price + 3).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          <div className="buttons ml-9 mt-8 flex gap-3 ">
            <div
              onClick={handlecart}
              className="bag cursor-pointer w-[267px] h-[50px] border rounded-lg bg-red-500 flex justify-center items-center gap-2"
            >
              
              <img className="w-[30px]" src={bag} alt="" />
              <div className="font-semibold text-white">ADD TO BAG</div>
            </div>
           
            <div
              style={{
                pointerEvents: inwishlist ? "none" : "auto",
                backgroundColor: inwishlist ? "#ef4444" : null,
                color: inwishlist ? "white" : null,
              }}
              onClick={handlewishlist}
              className="wishlisht cursor-pointer w-[200px] h-[50px] border rounded-lg flex justify-center items-center gap-2  "
            >
              <img
                style={{ filter: inwishlist ? "none" : null }}
                className=" w-[25px] invert"
                src={heart}
                alt=""
              />
              <div className="font-semibold">{text}</div>
            </div>
          </div>
          <div className="line ml-8 mt-7 w-[70%]   border bg-gray-500"></div>
          <p className="ml-8 text-gray-600">100% Original products</p>
          <p className="ml-8 text-gray-600">
            Pay on delivery might be available
          </p>
          <p className="ml-8 text-gray-600">
            Easy 14 days returns and exchanges
          </p>
          <div className="flex ml-8 mt-7 gap-1">
            <p className="font-semibold">Category:</p>
            <p>{props.category}</p>
          </div>
          <div className="flex ml-8  gap-1">
            <p className="font-semibold">Tags:</p>
            <p>Modern,Latest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
