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
      <div className="logo-dropdown-container" >
        <Link className="DreamerLogo" to="/explore"> <BsCloudFill size="25"/> Dreamer </Link>
        <div className="dropdown">
          <button className="drop-down-btn" >You</button>
          <div className="drop-down-content">
            <Link to={`/users/${currentUser.id}`}>Photostream</Link>
            <Link to={`/users/${currentUser.id}/albums`}>Album</Link>
          </div>
        </div>
          <Link className="nav-explore" to="/explore">Explore</Link>
      </div>
      <div className="logout-upload-container">
        <Link className="link-to-upload" to="/upload" ><BsCloudUpload size="30" /></Link>
        <Link className="header-button" to="/upload" onClick={logout}>Log Out</Link>
      </div>
    </nav>
  );

  return currentUser ? navLoggedIn() : navLoggedOut();
};



export default navbar;