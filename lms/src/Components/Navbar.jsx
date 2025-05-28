import React from 'react'
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton, SignOutButton } from "@clerk/clerk-react";
import logo from "/images/Logo.svg";
import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <div className='nav-container'>
        <span>
            
        <Link to="/">
          <img src={logo} loading="lazy" alt="Logo" />
        </Link>
            
        </span>
        <ol>
        {/* If the user is NOT signed in, show Login & Signup buttons */}
        <SignedOut>
          <li>
            <SignInButton mode="modal">
              <button id="login">Login</button>
            </SignInButton>
          </li>
          <li>
            <SignUpButton mode="modal">
              <button id="signup">Sign up</button>
            </SignUpButton>
          </li>
        </SignedOut>

        {/* If the user is signed in, show profile & logout button */}
        <SignedIn>
          <li>
            <Link to="/dashboard">
              <button id="login">Dashboard</button>
            </Link>
            
          </li>
          
          <li>
            <SignOutButton>
              <button id="login">Logout</button>
            </SignOutButton>
          </li>
          <li>
            <UserButton />
          </li>
        </SignedIn>
      </ol>

        {/* <ol>
            
            <li><button id='login'>Login</button></li>
            <li><button id='signup'>Sign up</button></li>
        </ol> */}
    </div>
    </>
  )
}

export default Navbar
