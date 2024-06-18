import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MaleTops = () => {
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
      <div className="box mt-1   bg-gray-200 w-[1480px] h-[470px] ml-5 mr-5 rounded-lg">
        <h1 className="text-2xl font-bold ml-20 tracking-wider pt-1 pb-3 text-black">
          MEN'S TOPWEAR
        </h1>
        <Slider {...settings}>
          <div>
            <Link>
              <img
                alt=""
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/Feb/Denimstore/June/Assets/AF/mens-pc._CB555284979_.jpg"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt=""
                src="https://m.media-amazon.com/images/G/31/Symbol/2024/Symbolpremium/CatPage/Men/AF_Shop_for_Mens_Herotator_1500x400._CB560040156_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt=""
                src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/nextgen24/Assets/Catpages/Men/1._CB561886125_.jpg"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt=""
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/AF_SSflip/Menhero/fresh_picks_of_the_month_pc._CB558375525_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt=""
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/AF_SSflip/Menhero/Comfy_linen_shirts_1500x400._CB558606527_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt=""
                src="https://m.media-amazon.com/images/G/31/img21/MA2023/AFrevamp_winterflip/Menhero/output_top-brands-2_3000x800_0._CB585741058_.gif"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="box mt-1   bg-gray-200 w-[1480px] h-[800px] ml-5 mr-5 rounded-lg">
        <div className="pl-3 pr-3 pt-3">
          <Link>
            <img
              alt="heroalt1"
              src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Artboard_1_copy_8._CB557922580_.jpg"
              class="a-dynamic-image sl-sobe-carousel-sub-card-img"
              data-a-dynamic-image="{}"
            />
          </Link>
        </div>
        <div className=" w-[1456px] h-[350px] bg-brown ml-3 flex">
          <div>
            <Link>
              <img
                alt="1"
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Casualtops/Oversized_T-Shirts._CB559736030_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="2"
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Casualtops/Casual_Shirts._CB559736030_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="3"
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Casualtops/Logo_T-Shirts._CB559736030_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="4"
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Casualtops/Solid_Polos._CB559736030_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="5"
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Casualtops/Check_Shirts._CB559736030_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                alt="6"
                src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Casualtops/Classic_Polos._CB559736030_.png"
                class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                data-a-dynamic-image="{}"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaleTops;
