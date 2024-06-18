import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        autoplay :true,
        autoplaySpeed:4000
        
      };
  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <Link to='/mens/MensTops'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/8b56f7b3-e278-4308-8a72-e714d33f38671717865842367-Gant-_mango_man_-_more.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensTops'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/11/80750512-3bdd-448a-b274-72b5b519ae311718087001418-image_png322758596.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensTops'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/11/6b94cf44-dc4d-467d-8ba7-126207e762101718087043412-image_png_1237672505.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensFootwear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/e0bc9822-ab03-495b-b530-bb381b9436df1717865842687-Campus-_Flying_Machine_-_Min_40_off.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensFootwear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/62597f95-6bb1-4009-9e86-837ef267a4841717865843088-House_of_Pataudi-_Anouk-__min_55_off.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensFootwear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/e4433dd7-87f0-499e-b6d7-59c6ae2aec301717865842028-Louis_Philippe-_Van_Huesen_-_Min_45_off.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensTops'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/274fcecc-5ad3-42c3-a86a-25d9fe884dca1717865841506-lee_-_wrangler.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensFootwear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/e872454b-e320-4fa0-8f52-f37b60aa789d1717865842750-Tommy_Hilfiger-_Clarks_-_Upto_50_off.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensTops'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/96975b25-16c0-48e2-b5cd-fa9a1754cb971717865841970-Wrogn-_nautica.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensTops'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/11/f3b69a2b-bda7-4f4a-bdcd-2ef1e3e6cc7d1718087126250-image_png_1684533839.png" srcset=""/></Link>
          </div>
          <div>
            <Link to='/mens/MensBottoms'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/11/56a13db7-2dca-49ec-996e-92dd4aa6f39a1718087164209-image_png946364045.png" srcset=""/></Link>
          </div>
          <div>
            <Link><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/6da681dc-287a-4939-9a68-3dfb2d8ea6fe1717865842332-chandbaali.png" srcset=""/></Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default MenSlider;
