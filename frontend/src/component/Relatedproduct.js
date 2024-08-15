import React, { Suspense,lazy } from 'react'
import Dataproduct from './Files/data'
import { Link } from 'react-router-dom'
import './Relatedproduct.css'
import Item from './Item'
const Relatedproduct = (props) => {
  return (
    <div>
        <div className="relatedproduct">
            <div className="relatedbanner">
            <h1>Related Products</h1>
            </div>
            <div className="relatedimage">
                {Dataproduct.map((ele,i)=>{
                    // console.log(props.pro.id);
                    return<>
                      
                        {/* <Link to={`/product/${ele.id}`} spy={true} smooth={true}><img onClick={window.scrollTo(0,-10) } src={ele.image} alt="" /></Link> */}
                        <Item key={i} id={ele.id} desc={ele.name} img={ele.image} price1={ele.new_price} price2={ele.old_price}/> 
                        </>
                })}
            </div>
        </div>
    </div>
  )
}

export default Relatedproduct