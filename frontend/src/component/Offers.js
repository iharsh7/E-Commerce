import React from 'react'
import './offers.css'
import ladki from './Files/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="leftoffer">
            <h1 className='offerHeading'>Exclusive Offers For You</h1>
            <p>Only on best seller products</p>
            <button className='offerbtn'>Explore Now</button>
        </div>
        <div className="rightoffer">
        <img src={ladki} alt="" />
        </div>
    </div>
  )
}

export default Offers