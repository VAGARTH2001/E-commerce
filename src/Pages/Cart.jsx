import React ,{useContext ,useEffect} from 'react'
import { ShopContext } from '../Context/ShopContext'

const Cart = () => {
  const {products,initcart , Cart} = useContext(ShopContext)
  useEffect(() => {
    initcart()
 
  }, [])
  

  const getCartItems = (products, Cart) => {
    return products.filter(product =>
      Cart.some(cartItem => cartItem.id === product.id)
    );
  };
  const cartItems = getCartItems(products, Cart);
  console.log(cartItems,"nhbn");

  

  return (
    <div>
      j
    </div>
  )
}

export default Cart
