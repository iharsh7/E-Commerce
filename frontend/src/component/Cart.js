import React ,{useEffect,useContext, useState}from 'react'
import Footer from './Footer'
import './Cart.css'
import axios from 'axios';
// import { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { ToastContainer,toast } from 'react-toastify';



const Cart = () => {
  const userrData = JSON.parse(localStorage.getItem("Ecommercedata"));
  const [user,setUser] = useState([]);
  const [total,setTotal] = useState();
  const [totalprice,setTotalprice] = useState(0);
  let summ = [];
// const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// const [user,setUser]=useState({
// info:userData,
// })
  const {all_product} = useContext(ShopContext);
  let response,resi,product;
  const name = "Aryan"
  const fetchData = async()=>{
    const config = {
      headers:{
        "Content-type":"application/json"
      }
    }
    response =  await axios.post(
      `http://localhost:4000/fetchproduct?name=${userrData}`,
      // `http://localhost:4000/fetchproduct/${userrData}`,

    )
    console.log("//////////////////////////////");
    console.log(response.data.totalprice[response.data.totalprice.length-1].totalSum);
    setTotalprice(response.data.totalprice[response.data.totalprice.length-1].totalSum);
    // console.log(response.data[0].product[0]);
    // console.log(response.data[0].product);
    // const ress = response.data[0].product[0];
    resi = response.data.data[0].product;
    // console.log(typeof(resi));
    product = all_product.find((e)=> e.id === Number(resi)
      
    );
    // setUser(response.data[0].product);
    setUser(response.data.data[0].product);
    // setTotal(response.)
    // console.log(user);
    // res = (response.data[0].product[0]);
   
  }
  useEffect( ()=>{
    if(userrData)
   fetchData();
    
  },[total])
 
  // const product = all_product.find((e)=> e.id === res
    
  // )
  const deleting = async (id)=>{
    const config = {
      headers:{
        "Content-type":"application/json"
      }
    }
    response =  await axios.get(
      `http://localhost:4000/deleteproduct?name=${id}`,
      // `http://localhost:4000/fetchproduct/${userrData}`,

    )
    console.log(response.data[0].product[0]);
    console.log(response);
  }
  

  return (
    <div id='cart'>
      {/* {console.log(product + " product")};
      {product} */}
      {/* {user.id} */}
      <div className="pare">
        <div className="carthead">

          <p>{(userrData) ? "Shopping Cart" : "Login to see cart"}</p>
        </div>
        {    
        user.map((e,i)=>{
          let product,price=0;
          console.log(e + " HI");
          product = all_product.find((ele)=> ele.id === Number(e)
      
          )
          // setTotalprice()
          // setTotal(product.new_price)
          return (
            
            <div className="cartproduct">
              
              <div className="proimg">
            <p>{(userrData) ? <img src={product.image} alt="" /> : "img"}</p>
            </div>
            <div className="proinfo">
              <h3>{(userrData) ? product.name : ""}</h3>
              
            <p>{(userrData) ? `$${product.new_price}` : ""}
                
            </p>
            <p>In stock</p>
            <p>Eligible for FREE Shipping</p>
            <p> <b>Category:</b> {(userrData) ? product.category : ""} </p>
            </div>
            <div className="btncart" onClick={async ()=>{
               const config = {
                headers:{
                  "Content-type":"application/json"
                }
              }
              response =  await axios.post(
                `http://localhost:4000/deleteproduct/?id=${product.id}&email=${userrData}&price=${product.new_price}`,
                // `http://localhost:4000/fetchproduct/${userrData}`,
          
              )
              // console.log(response.data[0].product[0]);
              console.log(response);

              setTotal(response);
              if(response.status===201){
                toast.success(' Item Deleted', {
                  position: "top-right",
                  autoClose: 800,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });  
              }

            }}>X</div>
            {/* <p>{(product) ? <img src={product.image} alt="" /> : 12}</p> */}
            </div>
          )
        })
      }
      </div>
      {console.log(user + "line 60")}
      {console.log(name + " line 61 ")}
      {/* {totalprice} */}
      {(userrData)?  <div className="totalPr">
        <div className="carttotaltitle">
        <h3>Cart Total</h3>
        </div>
        <div className="subtotal subbox">
          <div className="subtotalleft">
            <p>Subtotal :</p>
          </div>
          <div className="subtotalright">
            <p>${totalprice}</p>
          </div>
        </div>
        <div className="subtotal subbox">
          <div className="subtotalleft">
            <p>Shipping :</p>
          </div>
          <div className="subtotalright">
            <p>{(totalprice>500 || totalprice===0)?`Free`:"$40"}</p>
          </div>
        </div>
        <div className="subtotal subbox">
          <div className="subtotalleft">
            <p>Total :</p>
          </div>
          <div className="subtotalright">
            <p>{(totalprice>500 || totalprice===0)?`$${totalprice}`:`$${totalprice+40}`}</p>
          </div>
        </div>

      </div>:""}
    
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
      </div>
  )
}

export default Cart