import React, { Component } from "react";
import "../App.css";
import Topics from "../components/Topics";
import Navbar from "../components/navbar";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <h2>Home</h2>
          <Topics />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
