import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>CraveCart.</h1>
            <p>CraveCart, founded in 2024, is your ultimate go-to for indulgence on demand! Whether you're craving something savory, sweet, or just downright irresistible, CraveCart brings your favorite meals to your door faster than you can say "yum!" With a menu bursting with deliciousness and a service as smooth as melted cheese, we’re here to satisfy your cravings, one bite at a time. Why wait? Let your taste buds dance and dive into a world of flavors with CraveCart—where every order is a feast of joy!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li> {/* Link to About Us page */}
                <li><Link to="/delivery">Delivery</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>contact@CraveCart.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © CraveCart.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
