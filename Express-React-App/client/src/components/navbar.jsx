import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Navbar extends Component {
  state = {};

    logout = ()=>{
      localStorage.removeItem("DevPrepp-User");
      if(!localStorage.getItem("DevPrepp-User")){
        return <Redirect from="/" to='/login' />
      }
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <div className="logo"></div>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Welcome
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#" onClick={this.logout}>
                  Sign out
                </a>
       
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
