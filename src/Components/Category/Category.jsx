import React from "react";
import C1 from "../Assest/C1.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="img">
        <img src={C1} alt="" />
      </div>
      <div className="womens ">
        <div className="box bg-gray-200 w-[1480px] h-[430px] ml-5 mr-5 rounded-lg">
          <p className="ml-5 pt-9 font-bold text-xl">Women's Clothing</p>
          <div className="cards flex gap-6 ml-5 mt-5">
            <div className="card w-[220px]">
              <Link to='/womens/WomensTopwear'>
                <img
                  className="rounded-t-xl"
                  alt="1"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/WomensSBC/Unrec/Tops_and_tees_434x658_1709809594308_0._CB580646075_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link>
                <img
                  alt="2"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/WomensSBC/Unrec/Kurtas_434x658_1709809594316_1._CB580646075_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link>
                <img
                  alt="3"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/WomensSBC/Unrec/Sarees_434x658_1709809594318_2._CB580646075_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link>
                <img
                  alt="4"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/WomensSBC/Unrec/Sportswear_434x658_1710098116553_0._CB580670357_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link>
                <img
                  alt="5"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/WomensSBC/Unrec/Dresses_and_jumpsuits_434x658_1709809594320_4._CB580646075_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link>
                <img
                  alt="6"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/WomensSBC/Unrec/Lingerie_434x658_1709809594322_5._CB580646075_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mens">
        <div className="box  bg-gray-200 w-[1480px] h-[430px] ml-5 mr-5 rounded-lg mt-8">
          <p className="ml-5 pt-9 font-bold text-xl">Men's Clothing</p>
          <div className="cards flex gap-6 ml-5 mt-5">
            <div className="card w-[220px]">
              <Link to='/mens/MensTops'>
                <img
                  alt="1"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/MensSBC/Unrec/Oversized-t-shirts_3._CB580636347_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link >
            </div>
            <div className="card w-[220px]">
              <Link to='/mens/MensTops'>
                <img
                  alt="2"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/MensSBC/Unrec/Casual-shirts_1._CB580636347_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/mens/MensBottoms'>
                <img
                  alt="3"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/MensSBC/Unrec/Trendy_Jeans_434x658_1709811707924_0._CB580648309_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/mens/MensTops'>
                <img
                  alt="4"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/MensSBC/Unrec/Innerwear_5._CB580636347_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/mens/MensTops'>
                <img
                  alt="5"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/MensSBC/Unrec/Socks_4._CB580636347_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/mens/MensTops'>
                <img
                  alt="6"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/MensSBC/Unrec/Sportswear_0._CB580636347_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="kids">
        <div className="box bg-gray-200 w-[1480px] h-[430px] ml-5 mr-5 rounded-lg mt-8">
          <p className="ml-5 pt-9 font-bold text-xl">Kid's Fashion</p>
          <div className="cards flex gap-6 ml-5 mt-5">
            <div className="card w-[220px]">
              <Link to='/kids/KidsWear'>
                <img
                  alt="1"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Kids/Unrec/Baby_clothing_434x658_1709887907113_2._CB580421452_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/kids/KidsWear'>
                <img
                  alt="2"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Kids/Unrec/Girls_clothing_434x658_1709887907111_1._CB580421452_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/kids/KidsWear'>
                <img
                  alt="3"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Kids/Unrec/Boys_clothing_434x658_1709887907103_0._CB580421452_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/kids/KidsWear'>
                <img
                  alt="4"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Kids/Unrec/Bags_and_backpacks_434x658_1709887907117_5._CB580421452_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/kids/KidsWear'>
                <img
                  alt="5"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Kids/Unrec/Kids_watches_434x658_1709887907115_3._CB580421452_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
            <div className="card w-[220px]">
              <Link to='/kids/KidsWear'>
                <img
                  alt="6"
                  src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Kids/Unrec/Jewellery_and_accessories_434x658_1709890007469_0._CB580423206_.png"
                  class="a-dynamic-image sl-sobe-carousel-sub-card-img"
                  data-a-dynamic-image="{}"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Brands">
        <div className="box bg-gray-200 w-[1480px] h-[850px] ml-5 mr-5 rounded-lg mt-8">
        <p className="ml-5 pt-9 font-bold text-xl">Top Brands Offers</p>
        <div className="cards flex gap-6 ml-5 mt-5 flex-wrap ">
        <div className="card w-[220px]">
            <Link>
            <img alt="1" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Anni_designer._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Anni_designer._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="2" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Allen_Solly_1._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Allen_Solly_1._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="3" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Asian._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Asian._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="6" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Campus._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Campus._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="8" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Janasya._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Janasya._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="5" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/Sparx._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/Sparx._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="9" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Levis_1._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Levis_1._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="10" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Symbol._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands1/UNREC/Symbol._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="1" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/Bata._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/Bata._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="3" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/Klosia._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/Klosia._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="4" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/TIGC._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/TIGC._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          <div className="card w-[220px]">
            <Link>
            <img alt="10" src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/Lymio._SX564_QL85_FMpng_.png" class="a-dynamic-image sl-sobe-carousel-sub-card-img" data-a-dynamic-image="{&quot;https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Topbrands2/Unrec/Lymio._SX564_QL85_FMpng_.png&quot;:[234,564]}" ></img>
            </Link>
          </div>
          
        </div>

        </div>
      </div>
    </div>
  );
};

export default Category;
