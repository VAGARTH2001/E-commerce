import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Discription from "../Components/Discription/Discription";

const Product = () => {
  const { productId } = useParams();
  const product_id = Number(productId);
  const { products } = useContext(ShopContext);
  const data = products.find((item) => item.id === product_id);
  

  return (
    <div>
      <ProductDisplay
        id={data.id}
        name={data.name}
        brand={data.brand}
        category={data.category}
        new_price={data.new_price}
        old_price={data.old_price}
        image={data.image}
      />
      <Discription category={data.category} id={data.id} />
    </div>
  );
};

export default Product;
