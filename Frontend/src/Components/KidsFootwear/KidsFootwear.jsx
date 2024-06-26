import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const KidsFootwear = () => {
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
      <div className="box  bg-gray-200 w-[1480px] h-[469px] ml-5 mr-5 rounded-lg mt-2 mb-9">
      <Slider {...settings}>
        <div><Link><img alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Herotater_pc/Kids3._CB588346228_.jpg" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
        <div><Link><img alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Herotater_pc/kids1._CB588346228_.jpg" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
        <div><Link><img alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2023/SS23/Herotater_pc/Kids2._CB588346228_.jpg" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
        <div><Link><img alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/KIDS/Hero/Beach_copy_1_copy_1_1500x400._CB557699171_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
      </Slider>

      </div>
      
      
    </div>
  )
}

export default KidsFootwear
