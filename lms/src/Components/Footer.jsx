import React from "react";
import "./Footer.css"
import logo from "/images/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="logo" />
            
            
          </div>
          <p className="footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h5>Company</h5>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section">
          <h5>Subscribe</h5>
          <p>Get the latest updates in your inbox.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © 2025 <a href="">Arooba Sajjan & Bushra The Pathan</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
