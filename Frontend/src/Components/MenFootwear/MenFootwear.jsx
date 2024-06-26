import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MenFootwear = () => {
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
      <div className="box mt-1   bg-gray-200 w-[1480px] h-[720px] ml-5 mr-5 rounded-lg">
         <h1 className="text-2xl font-bold ml-20 tracking-wider pt-1 pb-3 text-black">
           MEN'S FOOTWEAR
          </h1>
         <Slider {...settings}>
            <div><Link><img alt="heroalt1" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/Beat-the-heat_10._CB562029483_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
            <div><Link><img alt="heroalt2" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/Slip-into-sandals_12._CB562029483_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
            <div><Link><img alt="heroalt3" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/Formal-foot-forward_1._CB562029483_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
            <div><Link><img alt="heroalt4" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/Best-of-casual-shoes_11._CB562029483_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
            <div><Link><img alt="heroalt5" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/New-season_4._CB562029483_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" /></Link></div>
          </Slider>
          <div className="bottom flex mt-6 gap-8 ml-7">
          <img className="w-[240px]" alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/Offercard/DEALS._CB561646463_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" />
         
          <img className="w-[240px]" alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/OfferCard/Incremental_offer2_2._CB561598824_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" ></img>
          <img className="w-[240px]" alt="" src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/OfferCard/Incremental_offer2-1_1._CB561598824_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{}" />
          </div>
      </div>
    </div>
  );
};

export default MenFootwear;
