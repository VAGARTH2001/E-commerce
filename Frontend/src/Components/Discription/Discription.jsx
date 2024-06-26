import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Sample from "../Sample/Sample";

const Discription = (props) => {
    const { products } = useContext(ShopContext);
    const data = products.filter((item) => item.category === props.category);
    const result = data.slice(0,5);
    

  return (
    <div>
      <div className="line mt-2 w-[97%] ml-4  border bg-gray-500"></div>
      <div className="related ml-8 mt-6 font-semibold text-lg">SIMILAR PRODUCTS</div>
      <div className="cards flex mt-1 gap-9">
        {result.map((sample,i)=>{
            return <Sample
            key={i}
            id={sample.id}
            name={sample.name}
            brand={sample.brand}
            category={sample.category}
            new_price={sample.new_price}
            old_price={sample.old_price}
            image={sample.image}
          />
        })}
      </div>
     
    </div>
  )
}

export default Discription
