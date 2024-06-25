import React ,{useContext} from "react";
import cross from '../Assest/close.png'
import { ShopContext } from "../../Context/ShopContext";

const Cartcomponent = ({item}) => {
 const {removeCart} = useContext(ShopContext);


 
   const handleclose = ()=>{removeCart(item.id , item.size)} 
    
    const discount =
    ((item.oldPrice - item.newPrice) / item.newPrice) * 100;
  return (
    <>
    
      <div className="card w-[85%] h-[220px] border  mt-4 ml-[100px] flex">
        <div className="image h-[210px] w-[140px] mt-2 ml-2 border border-white   ">
          <img className="h-[205px] pb-3" src={item.image} alt="" />
        </div>
        <div className="content flex flex-col gap-1 ">
          <p className="brand ml-3 mt-3 font-semibold text-xl">{item.brand}</p>
          <p className="name ml-3 text-gray-600">
            {item.category} {item.name} 
          </p>
          <p className="sold ml-3 text-gray-400 text-sm">
            Sold by : XYZ Fashion and Retail
          </p>
          <div className="box flex gap-3">
          <div className="size  bg-gray-200 w-[80px] h-[25px]  ml-4 mt-2 font-semibold pl-1 ">
            Size: {item.size}
          </div>
          <div className="quantity pb-2 bg-gray-200 w-[60px] h-[25px]  mt-2 font-semibold pl-1">Qty:{item.number}</div>
          </div>
          <div className="money flex gap-3">
            <p className="price ml-3 font-semibold text-lg">${item.newPrice}</p>
            <p className="old text-gray-400 line-through">${item.oldPrice}</p>
            <p className="discount text-red-500">{(discount.toFixed(0))}% OFF</p>
          </div>
          <div className="return flex gap-2">
            <div className="svg ml-4 mt-1">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z" fill="#282C3F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z" fill="#282C3F"></path></svg>
            </div>
            <p className="text-sm font-semibold "> 14 days</p>
            <p className="text-gray-400 text-sm">return available</p>
          </div>
          
        </div>
        <div onClick={handleclose}   className="cross ml-[406px] mt-1 mr-1 cursor-pointer">
            <img  className="w-[14px]" src={cross} alt="" />
        </div>
      </div>
    </>
  );
};

export default Cartcomponent;
