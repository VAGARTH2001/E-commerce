import React from 'react'
import logo from "../Assest/ecommerce.png";
import { Link } from 'react-router-dom';
import github from '../Assest/github.png'
import twitter from '../Assest/twitter.png'
import insta from '../Assest/instagram.png'

const Footer = () => {
    const handletop = ()=>{
        window.scrollTo(0,0);
    }
  return (
    <div className='foot '>
        <button onClick={handletop} className="btn w-[100%] bg-gray-500 h-10 mt-3 text-xl font-medium">Back to Top</button>
      <div className="footer w-[100%] bg-gray-700 h-[400px] ">
        <div className="logo flex  gap-2 pl-32 pt-24">
        <a href=""><img src={logo} alt="" /></a>
        <a href=""><p className="pt-3 font-serif font-bold text-3xl text-red-600">Shopify</p></a>
        <div className="slogan flex ">
            <p className=' text-white text-base mt-20 ml-[-195px]'>Thoughtful marketing for growing <br />e-commerce websites</p>
            <p className=' text-white text-2xl mt-11 ml-[240px]'>Get Exclusive Offers On Your Email </p>
            <div className="input mt-24 ml-[-325px]">
              <input className='p-2 h-11 mr-5' type="text" placeholder='Your Email' />
              <button className='border h-11 p-2 text-white bg-red-400'>Subscribe</button>
             
            </div>
            <div className="contact">
              <p className='text-white text-base ml-[200px] mt-12'>Follow us</p>
              <div className="social ">
                <img className='w-[42px] ml-[190px] mt-4' src={github} alt="" />
                <img className='w-[42px] ml-[242px] mt-[-42px]' src={twitter} alt="" />
                <img className='w-[42px] ml-[292px] mt-[-42px]' src={insta} alt="" />
              </div>

            </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Footer
