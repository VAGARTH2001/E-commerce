import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Sample from "../Components/Sample/Sample";
import MenData from "../Components/MenData/MenData";

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);
  return (
    <div className="ShopCategory">
      <MenData category={props.category}/>
      
      <div className="results w-[1480px] rounded-lg h-[40px] border mt-3 ml-5 pt-2 pl-4">
        1-12 of over 10,000 results for {props.category}
      </div>
      <div className="datas mt-1 flex flex-wrap gap-9">
        {products.map((sample, i) => {
          if (props.category === sample.category) {
            return (
              <Sample
                key={i}
                id={sample.id}
                name={sample.name}
                brand={sample.brand}
                category={sample.category}
                new_price={sample.new_price}
                old_price={sample.old_price}
                image={sample.image}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
