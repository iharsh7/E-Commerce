import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';import './Signup.css'

const Signup = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  });
  const setValue = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user,[name]:value});
  }
  const postValue = async (e)=>{
    e.preventDefault();
    try{
      const config={
        headers:{
          "Content-type":"application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:4000/register/",
        user,
        config
        );
        if(response.status===201){
          window.alert("Successfully Registered");
          navigate("/login")
        }
      
    }
    catch(err){
      if(err.response.error===401){
        window.alert("Invalid form fill up")
      }
    }


















    setUser({name:"",email:"",password:""})
  }
  return (
    <div className='Signup'>
      <div className="page">
        <div className="title1">
          <h4>Sign Up</h4>
          {/* <p>Sign Up</p> */}
        </div>
        <form action="POST">
          <input type="text" name='name' autoComplete='off' onChange={setValue} value={user.name} placeholder='Your Name'/>
          <input type="text" name='email' autoComplete='off' onChange={setValue} value={user.email} placeholder='Email Address' />
          <input type="password" name='password' autoComplete='off' onChange={setValue} value={user.password} placeholder='Password' />
          <input type="button" value="Continue" onClick={postValue} className='singup_btn'/>
        </form>
        <div className="already">
          <p>Already have an account ? <button className='lgin' onClick={()=>{
            navigate('/login');
          }}>Login</button></p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Signup