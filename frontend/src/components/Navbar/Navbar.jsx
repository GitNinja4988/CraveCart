import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, authState, logout } = useContext(StoreContext); // Assuming you have authState and logout in StoreContext

  return (
    <div className='navbar'>
      <h1>CraveCart.</h1>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Mess</a>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>mobile app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>

        {/* Conditional Rendering for Sign In or User Menu */}
        {authState?.isLoggedIn ? (
          <div className="navbar-user">
            <span>{authState.user.name}</span> {/* Display user name */}
            <div className="dropdown">
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        )}
      </div>
    </div>
  )
}

export default Navbar
