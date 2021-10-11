import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <PrivetRoute path="/home">
            <Home />
          </PrivetRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivetRoute path="/book/:bedType">
            <Book />
          </PrivetRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
