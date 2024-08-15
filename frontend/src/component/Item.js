import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    
    <div className='Items'>
        <div className="card">
            <div className="top">
               <Link to={`/product/${props.id}`} spy={true} smooth={true} duration={500}> <img src={props.img} alt=""   onClick={window.scrollTo(0,-10)}/></Link>
            </div>
            <div className="bottom">
                <h5>{props.desc}</h5>
                <div className="price">
                <span className='newprice'>${props.price1}</span> ${props.price2}
                </div>
            
            </div>
        </div>

    </div>
  )
}

export default Item