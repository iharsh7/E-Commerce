import React from 'react'
import { useContext } from 'react'
import './Category.css'
// import Item from './Item'
import { ShopContext } from './ShopContext'
import Item from './Item'
import dropdown from './Files/dropdown_icon.png'
import Footer from './Footer'
const Category = (props) => {
    const {all_product} = useContext(ShopContext)
  return (
    <div className='catpage'>
        <div className="banner">
        <img src={props.banner} alt="" />
        </div>
        <div className="catpara">
            <p className='paracat'>
                <span>Showing 1-12  </span>
                 Out of 36 products
            </p>
            <div><button className='btn'>Sort By
            
             <img src={dropdown} alt="" /></button></div>
        </div>
        <div className="catpro">
            {all_product.map((item,chabbi)=>{
                if(item.category===props.category){
                    return <>
                    
                    <Item key={chabbi} id={item.id} desc={item.name} img={item.image} price1={item.new_price} price2={item.old_price}/> 
                    
                    </>
                }
            })}
        </div>
        <Footer/>
    </div>
  )
}

export default Category