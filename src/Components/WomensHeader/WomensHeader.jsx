import React from 'react'
import Shopify from '../Assest/Shopify.jpg'

import { Link } from "react-router-dom";
import Wheader from '../Assest/Wheader.jpg';

const WomensHeader = () => {
  return (
    <>
   <div className="imgheader">
        <div className="header">
          <Link>
            <img src={Shopify} alt="" />
          </Link>
        </div>
        <div className="part  ">
          <Link>
            <img src={Wheader} alt="" />
          </Link>
        </div>
        <Link>
          <img
            className=""
            draggable="false"
            class="image-image undefined "
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/204642d1-12af-4254-9457-f31230d7538b1718179286687-Crazy-Deals.jpg"
          ></img>
        </Link>
      </div>


    </>
  )
}

export default WomensHeader
