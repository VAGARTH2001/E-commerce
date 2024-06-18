import React from 'react'
import card0 from '../Assest/Men.jpg'
import card1 from '../Assest/card1.jpg'
import card2 from '../Assest/card2.jpg'
import card3 from '../Assest/card3.jpg'
import card4 from '../Assest/card4.jpg'
import card5 from '../Assest/card5.jpg'
import card6 from '../Assest/card6.jpg'
import card7 from '../Assest/card7.jpg'
import card8 from '../Assest/card8.jpg'
import card9 from '../Assest/card9.jpg'
import card10 from '../Assest/card10.jpg'
import card11 from '../Assest/card11.jpg'
import card12 from '../Assest/card12.jpg'
import card13 from '../Assest/card13.jpg'
import card14 from '../Assest/card14.jpg'
import card15 from '../Assest/card15.jpg'
import card16 from '../Assest/card16.jpg'
import card17 from '../Assest/card17.jpg'
import card18 from '../Assest/card18.jpg'
import card19 from '../Assest/card19.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";







const Items = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows:false,
    autoplay :true,
    autoplaySpeed:4000
    
  };
  return (
    <div className='cards cursor-pointer   '>
     <Slider {...settings}>
        <div className="card   ">
            <img className='w-[250px]' src={card0} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card1} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card2} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card3} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card4} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card5} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card6} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card7} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card8} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card9} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card10} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card11} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card12} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card13} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card14} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card15} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card16} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card17} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card18} alt="" />
        </div>
        <div className="card ">
            <img className='w-[250px]' src={card19} alt="" />
        </div>

        </Slider>

        
      
    </div>
  )
}

export default Items
