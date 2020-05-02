import React, { Component } from "react";
import "../App.css";
import Topics from "../components/Topics";
import Navbar from "../components/navbar";
import DoAndDonts from "../components/DoAndDonts";
import Footer from '../components/footer';
import { Redirect } from 'react-router-dom'

class Home extends Component {
  state = {};

  render() {
    if(!localStorage.getItem("DevPrepp-User")){
      return <Redirect from="/" to='/login' />
    }
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
        <h2>Home</h2>
        <div className="topics">
          <Topics />
          </div>
          <DoAndDonts />
          </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
