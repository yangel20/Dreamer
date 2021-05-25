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
import PhotoAddContainer from "./explore/photo_add_container";
import TagShowContainer from "./tags/tag_show_container";
import UserShowContainer from './user/user_show_container';
import AlbumFormContainer from './albums/album_form_container'
import AlbumShowContainer from './albums/album_show_container'

const App = () => (
  <div >
    <header>
        <Navbar />
    </header>
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
        <Route exact path="/explore" component={PhotoIndex} />
        {/* <Route exact path="/users/:userId/albums/:albumId" component={AlbumShowContainer} /> */}
        <Route exact path="/users/:userId" component={UserShowContainer} />
        <Route exact path="/photos/tag/:tagName" component={TagShowContainer} />
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
        <ProtectedRoute exact path="/photos/organize/new_set" component={AlbumFormContainer} />
        <ProtectedRoute exact path="/upload" component={PhotoAddContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;

