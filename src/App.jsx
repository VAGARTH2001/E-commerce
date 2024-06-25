import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import Footer from './Components/Footer/Footer'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    
    <Routes>
      <Route path='/' element = {<Shop/>}/>
      <Route path='/mens' element = {<Mens/>}/>
      <Route path='/womens' element = {<Womens/>}/>
      <Route path='/kids' element = {<Kids/>}/>
      <Route path='/mens/MensFootwear' element = {<ShopCategory category="MaleFootwear" />}/>
      <Route path='/mens/MensTops' element = {<ShopCategory category="MaleTops" />}/>
      <Route path='/mens/MensBottoms' element = {<ShopCategory category="MaleBottoms" />}/>
      <Route path='/womens/WomensFootwear' element = {<ShopCategory category ='FemaleFootwear' />}/>
      <Route path='/womens/WomensTopwear' element = {<ShopCategory category ='FemaleTops' />}/>
      <Route path='/kids/KidsFootwear' element = {<ShopCategory category ='KidsFootwear' />}/>
      <Route path='/kids/KidsWear' element = {<ShopCategory category ='Kids' />}/>
      <Route path='/product' element = {<Product/>}/>
      <Route path='product/:productId' element = {<Product/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/login' element = {<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
   
    {/* <Footer/> */}
     
    </>
  )
}

export default App
