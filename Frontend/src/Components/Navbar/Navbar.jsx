import React from "react";
import ecommerce from "../Assest/ecommerce.png";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate('/cart');
  };

  return (
    <div className="Navbar flex justify-between items-center sticky top-0 bg-white z-50 border-b-2 shadow-sm w-[1510px] px-4 ">
      <div className="flex items-center gap-2 cursor-pointer">
        <Link to='/' onClick={() => { window.scrollTo(0, 0) }}>
          <img src={ecommerce} alt="LOGO" className="w-10 h-10" />
        </Link>
        <Link to='/' onClick={() => { window.scrollTo(0, 0) }}>
          <p className="hidden md:block font-serif font-bold text-2xl text-red-600">Shopify</p>
        </Link>
      </div>

      <ul className="hidden md:flex gap-8 font-serif font-semibold cursor-pointer ">
        <li className="home">
          <Link to='/' onClick={() => { window.scrollTo(0, 0) }}>Shop</Link>
        </li>
        <li className="men">
          <Link to='/mens' onClick={() => { window.scrollTo(0, 0) }}>MensWear</Link>
        </li>
        <li className="women">
          <Link to='/womens' onClick={() => { window.scrollTo(0, 0) }}>WomensWear</Link>
        </li>
        <li className="kids">
          <Link to='/kids' onClick={() => { window.scrollTo(0, 0) }}>KidsWear</Link>
        </li>
      </ul>

      <div className="flex   cursor-pointer gap-3">
        <div className="profile ">
          <lord-icon
            src="https://cdn.lordicon.com/kthelypq.json"
            trigger="hover"
            style={{ width: "32px", height: "32px" }}
          ></lord-icon>
        </div>
        <div className="heart ">
          <lord-icon
            src="https://cdn.lordicon.com/xyboiuok.json"
            trigger="morph"
            state="morph-heart"
            style={{ width: "32px", height: "32px" }}
          ></lord-icon>
        </div>
        <div onClick={handlenavigate} className="cart relative ">
          <lord-icon
            src="https://cdn.lordicon.com/evyuuwna.json"
            trigger="hover"
            style={{ width: "32px", height: "32px" }}
          ></lord-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
