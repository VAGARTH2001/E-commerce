import React, { createContext, useState } from "react";
import products from "../Components/Assest/product";

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const [wishlist, setwishlist] = useState([]);

  // Add to wishlist
  const addtowishlist = (id, selectedsize) => {
    setwishlist((prevwishlist) => {
      const itemindex = prevwishlist.findIndex((item) => {
        return item.id === id && item.size === selectedsize;
      });

      if (itemindex === -1) {
        const newItem = { id, number: 1, size: selectedsize };
        return [...prevwishlist, newItem];
      }
    });
  };
  // console.log(wishlist);
  // Remove from wishlist

  const removefromwishlist = (id, selectedsize) => {
    setwishlist((prevwishlist) =>
      prevwishlist.filter(
        (item) => !(item.id === id && item.size === selectedsize)
      )
    );
  };

  // Add to cart

  const addtocart = (id, selectedsize) => {
    setCart((prevCart) => {
      const itemindex = prevCart.findIndex((item) => {
        return item.id === id && item.size === selectedsize;
      });

      if (itemindex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemindex] = {
          ...updatedCart[itemindex],
          number: updatedCart[itemindex].number + 1,
        };

        return updatedCart;
      } else if (selectedsize !== null) {
        const newItem = { id, number: 1, size: selectedsize };
        return [...prevCart, newItem];
      }
    });
  };
  console.log(Cart);

  // Store cart in localstorage
  const storecart = () => {
    const cartstring = JSON.stringify(Cart);
    localStorage.setItem("Cart", cartstring);
  };

  // Retrieve Cart from localstorage

  const getcart =()=>{
    const cartstring = localStorage.getItem('Cart')
    return JSON.parse(cartstring) || []
  }
  // Manage cart on page reload  
  const initcart =()=>{
    setCart(getcart())
  }
  // Remove from cart

  const removefromcart = (id, selectedsize) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === selectedsize))
    );
  };

  const contextValue = {
    products,
    Cart,
    addtocart,
    removefromcart,
    addtowishlist,
    wishlist,
    removefromwishlist,
    storecart,
    getcart,
    initcart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
