import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import icon from "../files/icon";

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
    event.target.reset();

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
      <div className="content">
        <form class="form-inline">
          {/* Default All Topic link */}
          <Link
            to={{
              pathname: "/dashboard",
              state: { dashboard: "All Topics" }
            }}
            class="m-2"
          >
            <button type="submit" style={{marginRight: 20}} class="btn btn-light mb-2 border">
            <img style={{height: 150}} src="https://www.indiaeducation.net/imagesvr_ce/1375/full%20stack%20developer.JPG"/>
              All Topics
            </button>
          </Link>
          {/* Fetching and Displaying all topics in the Home page */}
          {this.state.topics.map(topic => (
            <Link
              to={{
                pathname: "/dashboard",
              state: { dashboard: topic.topic} 

              }}
              class="m-2"
              key={topic._id}
            >
             
             <button type="submit" style={{marginRight: 20}} class="btn btn-light mb-2 border">
              <img style={{height: 150}} src={icon.data[("_"+topic.topic).toLowerCase()] ? (icon.data[("_"+topic.topic).toLowerCase()]) : "https://pluspng.com/img-png/png-smiling-face-smiley-20face-20png-1023.png"}></img>
                {topic.topic}
              </button>

            </Link>
          ))}
        </form>
        <form onSubmit={this.handleAdd} className="form-inline">
          {/* New Dashboard input */}
          <div class="form-group mx-sm-2 mb-2  border">
            <input
              onChange={this.handleInputChange}
              type="text"
              class="form-control"
              placeholder="New dashboard"
              style={{ width: 200 }}
             
            ></input>
          </div>
            <button
              type="submit"
              class="btn btn-primary mb-2"
            >
              + Add
            </button>
        </form>
      </div>
    );
  }
}

export default Topics;
