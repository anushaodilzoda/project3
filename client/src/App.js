import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Posts from "./components/posts";
function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/posts" component={Posts} />
      </div>
    </div>
  );
}

export default App;
