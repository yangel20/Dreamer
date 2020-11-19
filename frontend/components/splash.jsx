import React from 'react';
import { Link } from 'react-router-dom';



const splash = ({ currentUser, logout }) => { // name splash as navbar
  const sessionLinks = () => (
    <nav className="splashNav"> 
      <Link className="DreamerLogo" to="/">Dreamer</Link>
        <div className="signup-signout">
          <Link className="loginSplash-btn" to="/login">Login</Link>
          &nbsp; &nbsp;
          <Link className="signupSplash-btn" to="/signup">Sign up!</Link>
        </div>
    </nav>
  );
  const personalGreeting = () => ( // nav bar when logged in
    <hgroup className="header-group">
      <h2 className="header-name">Hello, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};



export default splash;