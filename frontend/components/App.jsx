
import React from "react";
import Navbar from "./navbar_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from "./splash/splash_container"
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';
import Footer from "./footer";
import PhotoIndex from "./explore/photo_index_container";
import { AuthRoute } from "../util/routes_util";
;

const App = () => (
  <div>
    <header>
      {/* <navbar/> */}
        {/* <h1 className="intro">Dreamer</h1> */}
        <Navbar />
        {/* //nav bar  */}
        {/* //splash page that has everthing but nav bar */}
    </header>
    <Switch>
        <Route path="/explore" component={PhotoIndex} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;