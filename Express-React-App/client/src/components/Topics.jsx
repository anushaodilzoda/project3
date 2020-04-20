import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Topics extends Component {
  state = {
    topics: [{}],
    newTopic: ""
  };

  componentDidMount() {
    this.loadTopics();
  }

  loadTopics = () => {
    API.getTopics()
      .then(res => this.setState({ topics: res.data }))
      .catch(err => console.log(err));
  };

  handleAdd = event => {
    event.preventDefault();
    API.saveTopic({
      topic: this.state.newTopic,
      user: "Temp"
      // user is hardcoded for now
    })
      .then(res => this.loadTopics())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ newTopic: event.target.value });
  };

  render() {
    return (
      <form class="form-inline">
        {this.state.topics.map(topic => (
          <Link
            to={{
              pathname: "/dashboard",
              state: { dashboard: topic.topic }
            }}
            class="m-2"
            key={topic._id}
          >
            {/* <Link to="/posts" class="m-2" key= {topic._id}> */}
            <button type="submit" class="btn btn-warning mb-2">
              {topic.topic}
            </button>
          </Link>
        ))}
        <div class="form-group mx-sm-2 mb-2">
          <input
            onChange={this.handleInputChange}
            type="text"
            class="form-control"
            placeholder="New dashboard"
          ></input>
        </div>
        <Link to="/" class="m-2">
          <button
            onClick={this.handleAdd}
            type="submit"
            class="btn btn-primary mb-2"
          >
            + Add
          </button>
        </Link>
      </form>
    );
  }
}

export default Topics;
