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
        <h5 className="my-2">Search</h5>
        <input
          onChange={this.handleChange}
          className="form-control m-2"
          name="search"
        ></input>
        <button className="btn btn-primary" type="submit">
        <i class="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default Search;
