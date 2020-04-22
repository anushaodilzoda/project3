import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
  state = {
    keyword: ""
  };

  handleChange = event => {
    this.setState({ keyword: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    API.search({ 
        keyword: this.state.keyword, 
        scope: this.props.scope })
      .then(res => this.props.parentMethod(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
        <input
          onChange={this.handleChange}
          className="form-control m-2"
          name="search"
          placeholder="Search"
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
