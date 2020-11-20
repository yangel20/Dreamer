import React from 'react';
import { Link } from 'react-router-dom';
import {  } from 'react-icons/fa';



const navbar = ({ currentUser, logout }) => { // name splash as navbar
  const navLoggedOut = () => (
    <nav className="not-login-nav"> 
      <Link className="DreamerLogo" to="/">Dreamer</Link>
        <div className="signup-signout">
          <Link className="loginSplash-btn" to="/login">Login</Link>
          &nbsp; &nbsp;
          <Link className="signupSplash-btn" to="/signup">Sign up</Link>
        </div>
    </nav>
  );
  const navLoggedIn = () => ( // nav bar when logged in
    <nav className="logged-in-nav">
      <Link className="DreamerLogo" to="/">Dreamer</Link>
      <h2 className="header-name">Hello, {currentUser.username}!</h2>
      <input className="search-bar" type="text" placeholder="Dreams.." ></input>
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? navLoggedIn() : navLoggedOut();
};



export default navbar;