import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'
import Footer from './Footer'
import pic1 from './Files/p1_product_i1.png'
import star from './Files/star_icon.png'
import star_dull from './Files/star_dull_icon.png'
import pic2 from './Files/p1_product_i2.png'
import arrow from './Files/breadcrum_arrow.png'
import pic3 from './Files/p1_product_i3.png'
import pic4 from './Files/p1_product_i4.png'
import { useState } from 'react'
import Description from './Description'
import Relatedproduct from './Relatedproduct'
import { ShopContext } from './ShopContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Product = () => {
  console.log("___________________________----------------------------------------------------------____________________________________________________________")
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const [pic,setPic] = useState([]);
    // const userrData = JSON.parse(localStorage.getItem("userrData"));
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userrData = JSON.parse(localStorage.getItem("Ecommercedata"));

    // console.log(product_id);
    const product = all_product.find((e)=> e.id == Number(productId)
    )
    const [user,setUser]=useState({
      id:productId,
      info:userrData,
      category:product.category,
      name:product.name,
      price:product.new_price,


    })
    console.log(product);
    const changeColor = ()=>{
      const bol = document.querySelector('.prodiv');
      console.log(bol.innerHTML);
      // bol.innerHTML = 'pop'

    }
        // const changelogin = async ()=>{
    //     const bttn = document.querySelector('.signbtn')
    //     if(!mode){
    //         bttn.innerHTML = 'Logout'
    //     }
    //     else{
    //         bttn.innerHTML = 'Signin'
    //     }
    // }
    const funcall = async()=>{
      try{
        console.log(user);
        // console.log(userrData);
        const config = {
          headers:{
            "Content-type":"application/json"
          }
        }
        const response = await axios.post(
          "http://localhost:4000/addItem",
          user,
          config
        );
        console.log(response);
        if(response.status===201){
          toast.success('Added to cart', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });        }

      }
      catch(e){
        console.log(e);
      }
    }
    const arebhai = ()=>{
      toast.warn(' Login First!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });    }
  return (
    <>
      <div className="protit">
        {/* <div className="propro"> */}
        <p>Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" /> <span className='categ'>{product.category}</span> <img src={arrow} alt="" /> {product.name}</p>
        {/* </div> */}
      </div>
    <div className='prod1'>
        <div className="divv1">
          <img  src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          {/* <img src="" alt="" /> */}
          {/* <img src="" alt="" /> */}
        </div>
        <div className="divv2">
          <img src={product.image} alt="" />
        </div>
        <div className="divv3">
          <div className="protitle">
            <h2>{product.name}</h2>
          </div>
          <div className="star">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star_dull} alt="" className='last'/>
            1,101
          </div>
          <div className="proprice">
            <span className='prooldprice'>
            ${product.old_price}
            {/* <hr /> */}
            </span>
            <span className='pronewprice'>
            ${product.new_price}
            </span>
          </div>
          <div className="prodesc">

          </div>
          <div className="prosize">
            <h7 className='proh7'>Select Size</h7>
            <div className="prodivcont">
            <div className="prodiv" onClick={()=>{
              changeColor();
            }}>S</div>
            <div className="prodiv"> M</div>
            <div className="prodiv">L</div>
            <div className="prodiv">XL</div>
            <div className="prodiv">XXL</div>
            </div>
          </div>
          <button className='productbtn' onClick={(userrData) ? funcall : arebhai}>ADD TO CART</button>
          <div className="morepro">
            <span className='productspan1'>Category:</span>
            <p>{product.category}'s Latest Design</p>
          </div>
        </div>
    </div>
    <div className="describe">
      <div className="describenavbar">
        <div className="descDescription"></div>
      </div>
    </div>
    <Description proname={product.name}/>
    <Relatedproduct pro={product}/>
    <Footer/>
    <ToastContainer 
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"/>
    </>
  )
}

export default Product