import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KidSlider = () => {
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
    <div className="KidTop mt-7">
      <div className="slider">
        <Slider {...settings}>
          <div>
            <Link>
              <img
                draggable="false"
                class="image-image  image-hand"
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                draggable="false"
                class="image-image  image-hand"
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                draggable="false"
                class="image-image  image-hand"
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                draggable="false"
                class="image-image  image-hand"
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/7f5e46bd-da64-489b-bbab-ebf67b12f8091649782019457-Innerwear_Desk_Banner.jpg"
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="IconicBrands mt-10">
        <h1 className="text-3xl font-semibold ml-24 tracking-wider text-gray-700">
          ICONIC BRANDS
        </h1>
        <div className="cards flex">
          <div className="card pt-10 ">
            <Link to='/kids/KidsWear'>
              <img
                draggable="false"
                class="image-image undefined image-hand"
                src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f79446fb-46b9-455a-a6c0-4ffe3f58dd071604906586106-23-IconicBrands-H_M.jpg"
              />
            </Link>
          </div>
          <div className="card pt-10">
            <Link to='/kids/KidsWear'>
              <img
                draggable="false"
                class="image-image undefined image-hand"
                src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ba882da-667c-4f6e-a27e-292d0ffe477a1604906586228-26-IconicBrands-MangoKids.jpg"
              />
            </Link>
          </div>
          <div className="card pt-10">
            <Link to='/kids/KidsWear'>
              <img
                draggable="false"
                class="image-image undefined image-hand"
                src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/37147834-2bc5-4cdb-8eb9-68bf0fd48ca01604906586191-25-IconicBrands-Chicco.jpg"
              />
            </Link>
          </div>
          <div className="card pt-10">
            <Link to='/kids/KidsWear'>
              <img
                draggable="false"
                class="image-image undefined image-hand"
                src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f23d49ee-a598-4039-a6cd-33dab8a7e2011604906586056-22-IconicBrands-M_S.jpg"
              />
            </Link>
          </div>
          <div className="card pt-10">
            <Link to='/kids/KidsWear'>
              <img
                draggable="false"
                class="image-image undefined image-hand"
                src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0f9ec937-304a-433a-9433-5409c556831c1604906586152-24-IconicBrands-TommyHilfiger.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="fashion">
          <h1 className="text-3xl font-semibold ml-24 tracking-wider text-gray-700">
            FASHION & ESSENTIALS
          </h1>
          <dov className="cards flex flex-wrap ">
            <div className="card w-[300px] ">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f20838ab-108c-4fe6-bd74-0dc7551a2bbd1604906586589-34-Essentials-Masks.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px] ">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3df8a117-4db8-4cb6-ac0e-e60291d957241604906586646-35-Essentials-BabyCare.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px] ">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/29baf945-9e5b-4f0e-bb05-0ce65c57f9c91604906586502-32-Essentials-Shorts.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px] ">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/353fd453-6a17-45b9-b3da-a3dfd88121a31604906586547-33-Essentials-Valuepacks.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px] ">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c22c8c4b-753a-4f90-8def-511d2ed6caf31604906586731-37-Essentials-EthnicWear.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px] ">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/efc4b19d-179f-4437-961c-839df50299a51604906586690-36-Essentials-Night_innerwear.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px]">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4e6eefd3-3355-4c1c-851e-48a49c97d5b31604906586407-30-Essentials-Onesies.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px] ">
              <Link to='/kids/KidsFootwear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/33368b8b-8702-4108-96a9-b8fa5b7ed36f1604906586455-31-Essentials-FlipFlop_sandals.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px] ">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ab2f5b3-441a-430c-a605-2ac9d06007c01604906586315-28-Essentials-Dresses.jpg"
                />
              </Link>
            </div>
            <div className="card w-[300px] ">
              <Link to='/kids/KidsWear'>
                <img
                  draggable="false"
                  class="image-image undefined image-hand"
                  src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c75a2039-4199-4174-b1b9-fecd30f7d3f91604906586359-29-Essentials-Tshirts_Tops.jpg"
                />
              </Link>
            </div>
          </dov>
        </div>
      </div>
    </div>
  );
};

export default KidSlider;
