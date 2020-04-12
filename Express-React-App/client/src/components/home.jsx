import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <h2>Home</h2>
        <form class="form-inline">
          <Link to="/posts" class="m-5">
            <button type="submit" class="btn btn-warning mb-2">
              Javascript
            </button>
          </Link>
          <div class="form-group mx-sm-2 mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="New dashboard"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary mb-2">
            + Add
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
