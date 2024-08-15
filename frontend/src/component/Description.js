import React from 'react'
import './Description.css'
import { useContext } from 'react';
import { ShopContext } from './ShopContext'

const Description = (props) => {
    const {all_product} = useContext(ShopContext);
    const changeText = ()=>{
        // console.log(props.pronme);
        const chuno = document.querySelector('.info');
        chuno.innerHTML = `${props.proname}, has a very good response among various users. This product is on high demand due to its high quality fabric and less amount.`
        
    }
    const changeText2 = ()=>{
        // console.log(props.pronme);
        const chuno = document.querySelector('.info');
        chuno.innerHTML = `An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual masterpiece where businesses and individuals can showcase their products, interact with customers and conduct transaction without the need of physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.

         E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variants(e.g. sizes,colors).Each product usually has its own dedicated page with relivant information.`
    }
  return (
    <div>
        <div className="desccontainer">
        <div className="descripnavbar">
            <div className="descrinav1" onClick={()=>changeText2()}>Description</div>
            <div className="descrinav2" onClick={()=>changeText()}>Review(122)</div>
        </div>
        <div className="info">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual masterpiece where businesses and individuals can showcase their products, interact with customers and conduct transaction without the need of physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variants(e.g. sizes,colors).Each product usually has its own dedicated page with relivant information.</p>
            
        </div>
        </div>
    </div>
  )
}

export default Description