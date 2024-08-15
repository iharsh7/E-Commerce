import React, { useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from './Files/logo.png'
import about from './Men.js'
import cart_icon from './Files/cart_icon.png'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {

    const navigate = useNavigate();
    const [mode,setMode] = useState(true);
    const userrData = JSON.parse(localStorage.getItem("Ecommercedata"));
    const [login,setLogin] = useState("Logout");
    
    // const changelogin = async ()=>{
    //     const bttn = document.querySelector('.signbtn')
    //     if(!mode){
    //         bttn.innerHTML = 'Logout'
    //     }
    //     else{
    //         bttn.innerHTML = 'Signin'
    //     }
    // }
    const gotoSignup = ()=>{
        navigate('cart');
    }
    const nikal = ()=>{
        localStorage.clear();
        navigate('/login');
    }
    // useEffect(()=>{},[userrData]);
  return (
    <div className='Navbar'>
        <div className='logopic'>
        <img src={logo} alt="" />
        <h1 className='company'> <span className='first'>SH</span> <span className='second'>OPI</span> <span className='third'>FY</span> </h1>
        
        </div>
        <div className='content'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/men"> Men</NavLink>
            <NavLink to="/women">Women</NavLink>
            <NavLink to="/kids">Kids</NavLink>
            {/* <NavLink to="/men">Men</NavLink> */}
        </div>
        <div className='sign'>
            <button className='signbtn' onClick={()=>{
                (userrData) ? nikal() : navigate('/signup')
            }}>{(userrData) ? login : 'Signup'}</button>
            <img src={cart_icon} alt="" className='cart' onClick={()=>gotoSignup()}
            />
            {/* <div className='count'><span>0</span></div> */}
        </div>
    </div>

  )
}

export default Navbar