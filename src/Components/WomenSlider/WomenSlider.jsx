import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WomenSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="Women_Slider">
      <Slider {...settings}>
        <div>
          <Link>
            <img
              draggable="false"
              class="image-image undefined image-hand"
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/644b37f6-fccd-4472-a47e-1bee00c22a7e1717865841374-Chhabraa_555-_House_of_Jamoti.png"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              draggable="false"
              class="image-image undefined image-hand"
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/8544956b-419f-4c27-a40f-69a9be8a6a3d1717865841737-Global_Desi_-Truebrowns_.png"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              draggable="false"
              class="image-image undefined image-hand"
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/d72b6f7c-0aa7-487c-bdaa-97261810f6f61717865842731-Libas_Varanga.png"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              draggable="false"
              class="image-image undefined image-hand"
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/6e1dc146-7445-4d05-b800-be64d4fbab641717865843017-Allen_solly_-_VH_Min_40.png"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              draggable="false"
              class="image-image undefined image-hand"
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/103ce6e1-1d51-499c-9eb1-50eca84e8c601717865842287-Metro-_Mochi_Min_40.png"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              draggable="false"
              class="image-image undefined image-hand"
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/9/eb5d191f-8d61-43d0-bc8d-e69f7cfa46ca1715237114592-image_png1940696437.png"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              draggable="false"
              class="image-image undefined image-hand"
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/0aa6a8f5-8bb6-428d-bad4-ba621e20de8e1717865842867-Sassafras-Tokyo_Talkies.png"
            />
          </Link>
        </div>
        <div>
          <Link>
            <img
              draggable="false"
              class="image-image undefined image-hand"
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/2660692a-a055-4d17-b885-ea8307dfc66d1717865842786-Vero_Moda-ONLYMin_50_Off.png"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default WomenSlider;
