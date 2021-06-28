import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "../Header/Header.js";
import Navigation from "../Navigation/Navigation.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/profile'>
          <Header background_color='dark'>
            <Navigation loggedIn={true}/>
          </Header>
          <Profile name="Юлия" email="ttt@yandex.ru"/>
        </Route>
        <Route path='/movies'>
          <Header background_color='dark'>
            <Navigation loggedIn={true}/>
          </Header>
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header background_color='dark'>
            <Navigation loggedIn={true}/>
          </Header>
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path='/'>
          <Header background_color='blue'>
            <Navigation loggedIn={false}/>
          </Header>
          <Main />
          <Footer />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
