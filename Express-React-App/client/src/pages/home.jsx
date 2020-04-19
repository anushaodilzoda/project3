import React, { Component } from "react";
import "../App.css";
import Topics from "../components/Topics";

class Home extends Component {
  state = {
  };


  render() {
    return (
      <div className="content">
        <h2>Home</h2>
        <Topics/>
      </div>
    );
  }
}

export default Home;
