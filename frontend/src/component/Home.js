import React from 'react'
import Hero from './Hero' 
import Offers from './Offers'
import Popular from './Popular'
import Newcollections from './Newcollections'
import Footer from './Footer'
import Differentiator from './ShopContext'
import Incriment from './Incriment'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollections/>
        <Incriment/>
        <Footer/>
       
    </div>
  )
}

export default Home