import React from "react";
import p1 from "../Assest/p1.jpg";
import { Link } from "react-router-dom";


const Sample = (props) => {
  
  return (
   <>
   <div className="Sample">
   <Link to ={`/product/${props.id}`} target="_blank" onClick={window.scrollTo(0,0)}>

   <div className="img w-[250px] border ml-5 mt-5 ">
        <img className="w-[250px] " src={props.image} alt="" />
        <p className="font-semibold text-lg pl-[90px]">{props.brand}</p>
        <p className="text-base pl-5">{props.category} {props.name}</p>
        <div className="price ml-7 flex gap-2">
          <div className="new text-3xl font-semibold"> ${props.new_price}</div>
          <div className="old flex gap-1">
            <div className=" pt-3 tracking-wide text-sm text-gray-500 ">
              M.R.P :
            </div>
            <p className=" pt-3 text-sm line-through text-gray-500"> ${props.old_price}</p>
          </div>
        </div>
      </div>

   </Link>
      
      </div>
   </>
      
      
      
    
  );
};

export default Sample;
