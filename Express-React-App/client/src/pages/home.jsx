import React, { Component } from "react";
import "../App.css";
import Topics from "../components/Topics";
import Navbar from "../components/navbar";
import DoAndDonts from "../components/DoAndDonts";
import Footer from '../components/footer';

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <h2>Home</h2>
          <Topics />

          <DoAndDonts />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
