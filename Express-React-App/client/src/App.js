import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Posts from "./pages/posts";
import { Signup } from './pages/signup';
 import Login from './pages/login';
function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Posts} />
      </div>
    </div>
  );
}

export default App;
