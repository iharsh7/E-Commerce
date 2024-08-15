import React from 'react'
import data_pro from './Files/data'
import './hero.css'
import Item from './Item.js'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr className='heading1'/>
       <div className="women">
            {data_pro.map((item)=>{
                // console.log(item)
                return(
               <Item id={item.id} img={item.image} price1={item.new_price} price2={item.old_price} desc={item.name}/>
                )
            })}
            </div>
        </div>
    
  )
}

export default Popular