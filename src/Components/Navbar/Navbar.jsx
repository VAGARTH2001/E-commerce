import React from "react";
import ecommerce from "../Assest/ecommerce.png";
import './Navbar.css'
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <>
    <div className="Navbar flex justify-evenly gap-56 sticky top-0 bg-white z-50 border-b-2 shadow-sm  ">
      <div className="nav-logo  pt-1 cursor-pointer flex gap-2   ">
       <Link to='/' onClick={()=>{window.scrollTo(0,0)}}><img src={ecommerce} alt="LOGO" className="  " /></Link> 
       <Link to='/' onClick={()=>{window.scrollTo(0,0)}}> <p className="pt-3 font-serif font-bold text-2xl text-red-600">Shopify</p></Link>
       
      </div>
      {/* flex gap-8 font-serif font-semibold pt-5 cursor-pointer */}
      <ul className="heading  flex gap-8 font-serif font-semibold pt-5 cursor-pointer  ">
        <li className="home  "><a > <Link to='/' onClick={()=>{window.scrollTo(0,0)}} >Shop</Link></a></li>
        <li className="men  "><a > <Link to='/mens' onClick={()=>{window.scrollTo(0,0)}}>MensWear</Link></a></li>
        <li className="women  "><a > <Link to='/womens' onClick={()=>{window.scrollTo(0,0)}}>WomensWear</Link></a></li>
        <li className="kids  "><a > <Link to='/kids' onClick={()=>{window.scrollTo(0,0)}}>KidsWear</Link></a></li>
      </ul>
      <div className="icons flex gap-5 mt-5 cursor-pointer">
        <div className="profile">
          <lord-icon
            src="https://cdn.lordicon.com/kthelypq.json"
            trigger="hover"
            style={{ width: "32px", height: "32px" }}
          ></lord-icon>
        </div>
        <div className="heart">
          <lord-icon
            src="https://cdn.lordicon.com/xyboiuok.json"
            trigger="morph"
            state="morph-heart"
          
            style={{ width: "32x", height: "32px" }}
          ></lord-icon>
        </div>
        <div className="cart">
          <lord-icon
            src="https://cdn.lordicon.com/evyuuwna.json"
            trigger="hover"
            style={{ width: "32x", height: "32px" }}
          ></lord-icon>
          {/* <div className="cart_counter w-[20px] h-[20px] bg-red-600 rounded-full flex justify-center items-center mt-[-37px] mr-[-20px]">0</div> */}
        </div>
      </div>
     
    </div>
        


    </>
    
  );
};

export default Navbar;
