import React from "react";
import Shopify from "../Assest/Shopify.jpg";
import left from "../Assest/L.jpg";
import right from "../Assest/R.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ImgHeader = () => {
  const navigate = useNavigate();
  return (
    <div className=" shop ">
      <div className="imgheader">
        <Link to="/">
          <img className="max-w-[1510px]" src={Shopify} alt="" />
        </Link>
        <div className="part flex cursor-pointer">
          <img
            onClick={() => {
              navigate("/mens/MensTops");
            }}
            className="max-w-[755px]"
            src={left}
            alt=""
          />
          <img
            onClick={() => {
              navigate("/womens/WomensTopwear");
            }}
            className="max-w-[755px]"
            src={right}
            alt=""
          />
        </div>

        <Link>
          <img
            className="max-w-[1516px]"
            draggable="false"
            class="image-image undefined "
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/204642d1-12af-4254-9457-f31230d7538b1718179286687-Crazy-Deals.jpg"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default ImgHeader;
