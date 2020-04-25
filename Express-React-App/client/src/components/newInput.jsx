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
    const today = new Date();
    var date = today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
    const newQuestion = {
      topic: dashboard,
      question: this.state.question,
      user: "Temp",
      date: date
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
        class="form-row align-items-center new-entry m-1"
      >
        <div class="col-sm-10 my-2">
          <input
            onChange={this.handleChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            name="question"
            // placeholder="Enter new question"
            style={{borderRadius: 25, border: '1px solid #8a8585e0'}}
          ></input>
        </div>
        <div class="col-sm-2">
          <button type="submit" class="btn badge-pill btn-primary">
            Enter new <i class="fas fa-question-circle"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default NewInput;
