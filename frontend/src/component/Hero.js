import React from 'react'
import './hero.css'
import hero from './Files/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="lefthero">
        <div className="arrival"><p>NEW ARRIVALS DAILY</p></div>
        <div className="headinghero">
          <h1>New Collections for Everyone</h1>
        </div>
        <button className='latest'>Latest Collections</button>
      </div>
      <div className="righthero">
      </div>
    </div>
  )
}

export default Hero