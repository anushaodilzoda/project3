import React, { Component } from "react";
import "../App.css";
import Topics from "../components/Topics";
import Search from "../components/search";

class Home extends Component {
  state = {
  };


  render() {
    return (
      <div className="content">
        <h2>Home</h2>
        <Search scope="All"/>
        <Topics/>
      </div>
    );
  }
}

export default Home;
