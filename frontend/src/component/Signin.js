import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Signin.css'
import logo from './Files/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';
const Signin = () => {
  
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email:"",
    password:""
  })
  const [prevdata,setPrevdata] = useState([]);
  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    // console.log(e.target.value);
    setUser({...user,[name]:value})
    // setUser({...user,[name]:value});
  }
  const postData = async (e)=>{
    e.preventDefault();
    try{
      const config={
        headers:{
          "Content-type":"application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:4000/login/",
        user,
        config
        );
        if(response.status===401){
          window.alert("Invalid form fillup");
          console.log("Invalid");
        }
        if(response.status===201){
          const info = JSON.parse(response.config.data);
          console.log(info.email);
          localStorage.setItem("Ecommercedata",JSON.stringify(info.email));
          window.alert("Successfully LoggedIn");
          navigate("/");
        }

    }
    catch(err){
      if(err.response.error===401){
        console.log('Got It');
        window.alert("Invalid Data");
        setUser({email:"",password:""})      }
    }
  }
  return (
    <div>
    <div className='Signup'>
      <div className="page">
        <div className="title1_signin">
          <h4>Signin</h4>
          <img src={logo} alt="" className='lgo'/>
          <h6>Welcome to <span className='shop'> SHOPIFY </span></h6>
          {/* <p>Sign Up</p> */}
        </div>
        <form action="POST">
          {/* <input type="text" placeholder='Your Name'/> */}
          <input type="text" autoComplete='off' value={user.email} onChange={handleInput} name='email' placeholder='Email Address' />
          <input type="password" autoComplete='off' value={user.password} onChange={handleInput} name='password' placeholder='Password' />
          <input type="button" value="Continue" onClick={postData} className='singup_btn'/>
        </form>
        {/* <div className="already">
          <p>Already have an account ? <button className='lgin' onClick={()=>{
            navigate('/login');
          }}>Login</button></p>
        </div> */}
      </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Signin