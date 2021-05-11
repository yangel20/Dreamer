
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
import PhotoIndex from "./explore/photos_index_container";
import { AuthRoute, ProtectedRoute } from "../util/routes_util";
import PhotoShowContainer from "./explore/photo_show_container";
import PhotoAddContainer from "./explore/photo_add_container"

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
        <Route path="/photos/:photoId" component={PhotoShowContainer} />
        <Route path="/explore" component={PhotoIndex} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/upload" component={PhotoAddContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;