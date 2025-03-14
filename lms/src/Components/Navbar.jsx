import React from 'react'
import logo from "/images/Logo.svg";
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='nav-container'>
        <span>
            
            <img src={logo} loading='lazy' />
            
        </span>
        <ol>
            <li><button id='cart'><i class="fa-solid fa-cart-shopping"></i></button></li>
            <li><button id='login'>Plans and Pricing</button></li>
            <li><button id='login'>Login</button></li>
            <li><button id='signup'>Sign up</button></li>
        </ol>
    </div>
    </>
  )
}

export default Navbar
