import React from 'react'
import './Newcollections.css'
import new_collections from './Files/new_collections'
import Collections from './Collections'

import './hero.css'
const Newcollections = () => {
  return (
    <div className='popular1'>
                <h1>Trendy Collections</h1>
                <hr className='heading1'/>
        <div className="women1">
        {new_collections.map((item)=>{
            // console.log(item)
            return (
                
                <Collections ide = {item.id} img={item.image} desc={item.name} price1={item.new_price} price2={item.old_price} />
            )
        })}
        </div>
    </div>
    
  )
}

export default Newcollections