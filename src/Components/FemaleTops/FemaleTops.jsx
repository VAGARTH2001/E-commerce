import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const FemaleTops = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
      };
  return (
    <div>
        <div className="header ml-4">
        <img
          onload='window.uet &amp;&amp; uet.call &amp;&amp; uet("af");'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/AF/EOSS/Stripes/v1/pc1.jpg"
          alt="header"
        />
      </div>
       <div className="box  mt-1   bg-gray-200 w-[1480px] h-[470px] ml-5 mr-5 rounded-lg">
       <h1 className="text-2xl font-bold ml-20 tracking-wider pt-1 pb-3 text-black">
          WOMEN'S TOPWEAR
        </h1>
        <Slider {...settings}>
            <div><Link><img alt="" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/PC/hero/Dresses-Kurtas-more_5._CB555362677_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
            <div><Link><img alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/Workwear/Visibility/Workwear-PC-Heroes-W._CB553732635_.gif" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>



            {/* <div><Link></Link></div>
            <div><Link></Link></div> */}

        </Slider>

       </div>

      
    </div>
  )
}

export default FemaleTops
