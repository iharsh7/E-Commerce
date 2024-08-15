import React,{Suspense,lazy} from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Men from './component/Men'
import Women from './component/Women'
import Kids from './component/Kids'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Signin from './component/Signin'
import Cart from './component/Cart'
import Footer from './component/Footer'
import Category from './component/Category'
import kids_banner from './component/Files/banner_kids.png'
import men_banner from './component/Files/banner_mens.png'
import Product from './component/Product'
import women_banner from './component/Files/banner_women.png'
import Signup from './component/Signup'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/men' element={<Category banner={men_banner} category="men"/>} ></Route>
        <Route path='/women' element={<Category banner={women_banner} category="women"/>} ></Route>
        <Route path='/kids' element={<Category banner={kids_banner} category="kid"/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/login' element={<Signin/>} ></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>

  )
}

export default App