import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const FemaleFootwear = () => {
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
      <div className="box  bg-gray-200 w-[1480px] h-[720px] ml-5 mr-5 rounded-lg">
        <h1 className="text-2xl font-bold ml-20 tracking-wider pt-1 pb-3 text-black">
         FEMALE FOOTWEAR
        </h1>
        <Slider {...settings}>
          <div>
            <Link>
              <img
                alt="heroalt1"
                src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/Hero/JUNE/SS2._CB555267810_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="heroalt2"
                src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/Hero/JUNE/Women_1500x400_0._CB555404227_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="heroalt3"
                src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/Hero/may/heelsflatspc._CB557701028_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="heroalt4"
                src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/Hero/JUNE/comfort2._CB555267810_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="heroalt5"
                src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/PCHero/EVERYDAY-ESSENTIALS_3._CB562032542_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="heroalt6"
                src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/Hero/JUNE/New_season_copy_1._CB555401694_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="heroalt7"
                src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/nextgen24/Assets/Catpages/Women/4._CB561886067_.jpg"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
        </Slider>
        <div className="bottom flex mt-6 gap-8 ml-7">
          <img
            className="w-[240px]"
            alt=""
            src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/Offercard/DEALS._CB561646463_.png"
            class="a-dynamic-image sl-sobe-carousel-sub-card-img"
            data-a-dynamic-image="{}"
          />

          <img
            className="w-[240px]"
            alt=""
            src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/OfferCard/Incremental_offer2_2._CB561598824_.png"
            class="a-dynamic-image sl-sobe-carousel-sub-card-img"
            data-a-dynamic-image="{}"
          ></img>
          <img
            className="w-[240px]"
            alt=""
            src="https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/Women/OfferCard/Incremental_offer2-1_1._CB561598824_.png"
            class="a-dynamic-image sl-sobe-carousel-sub-card-img"
            data-a-dynamic-image="{}"
          />
        </div>
      </div>
    </div>
  );
};

export default FemaleFootwear;
