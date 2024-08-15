import React from 'react'
import './Newcollections.css'
import { Link } from 'react-router-dom'
const Collections = (props) => {
  return (
    <div className='Items'>
        <div className="card">
            <div className="top">
            <Link to={`/product/${props.ide}`}><img src={props.img} alt="" /></Link>
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

export default Collections