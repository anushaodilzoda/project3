import React, { Component } from "react";
import API from "../utils/API";

class NewInput extends Component {
  state = {
    question: ""
  };

  handleChange = event => {
    this.setState({ question: event.target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();

    const { dashboard, parentMethod } = this.props;

    const newQuestion = {
      topic: dashboard,
      question: this.state.question,
      user: "Temp"
      //topic and user are hardcoded for now
    };
    API.saveQuestion(newQuestion)
      .then(res => parentMethod(dashboard))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        class="form-row align-items-center new-entry"
      >
        <div class="col-sm-10 my-1">
          <input
            onChange={this.handleChange}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            name="question"
            placeholder="Enter new question"
          ></input>
        </div>
        <div class="col-sm-1 my-1">
          
          <button type="submit" class="btn btn-primary m-2">
            Enter
          </button>
        </div>
      </form>
    );
  }
}

export default NewInput;

