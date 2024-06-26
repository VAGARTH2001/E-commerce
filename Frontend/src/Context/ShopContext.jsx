import React, { createContext, useState, useEffect } from "react";
import products from "../Components/Assest/product";

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const [wishlist, setwishlist] = useState([]);
  const [Data, setData] = useState([]);


  

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
    let data = setCart((prevCart) => {
      const itemindex = prevCart.findIndex(
        (item) => item.id === id && item.size === selectedsize
      );

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
      } else {
        return prevCart; // Ensure a new state is always returned
      }
    });
  };

  
  // // Store cart in localstorage
  const storecart = () => {
    const cartstring = JSON.stringify(Cart);
    localStorage.setItem("Cart", cartstring);
  };

  // Retrieve Cart from localstorage

  const getcart = ()=>{
    const storedCart = JSON.parse(localStorage.getItem('Cart')) || [];
    setCart(storedCart);
  }

  
  // Show items in Cart

  const getInfo = (cart, products, setData) => {
    const newData = cart.map((item) => {
      const product = products.find((element) => element.id === item.id);
      if (product) {
        const {
          image,
          name,
          brand,
          new_price: newPrice,
          category,
          old_price: oldPrice,
        } = product;
        return { ...item, image, name, brand, newPrice, category, oldPrice };
      }
      return item;
    });
    setData(newData);
  };

  // Remove from Cart
  const removeCart = (id, size) => {
    let updatedData = Cart.filter(item => !(item.id === id && item.size === size));
    setCart(updatedData);
  }
  

  

  const contextValue = {
    products,
    Cart,
    addtocart,
    addtowishlist,
    wishlist,
    removefromwishlist,
    setCart,
    storecart,
    getcart,
    getInfo,
    Data,
    setData,
    removeCart
    
    
    
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
