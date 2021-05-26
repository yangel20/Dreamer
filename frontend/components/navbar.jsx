import React from 'react';
import { Link } from 'react-router-dom';
import { BsCloudUpload, BsCloudFill } from 'react-icons/bs';



const navbar = ({ currentUser, logout }) => {
  const navLoggedOut = () => (
    <nav className="not-login-nav"> 
        <Link className="DreamerLogo" to="/"> <BsCloudFill size="25"/> Dreamer </Link>
        <div className="signup-signout">
          <Link className="loginSplash-btn" to="/login">Login</Link>
          <Link className="signupSplash-btn" to="/signup">Sign up</Link>
        </div>
    </nav>
  );
  const navLoggedIn = () => (
    <nav className="logged-in-nav">
      <Link className="DreamerLogo" to="/explore"> <BsCloudFill size="25"/> Dreamer </Link>
      <div className="dropdown">
        <button className="drop-down-btn" >you</button>
        <div className="drop-down-content">
          <Link to={`/users/${currentUser.id}`}>Photostream</Link>
          <Link to={`/users/${currentUser.id}/albums`}>Album</Link>

        </div>
      </div>
      <h2 className="header-name">Hello, {currentUser.username}!</h2>
      <Link className="link-to-upload" to="/upload" ><BsCloudUpload size="30" /></Link>
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? navLoggedIn() : navLoggedOut();
};



export default navbar;