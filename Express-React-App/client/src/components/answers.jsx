import React, { Component } from "react";
import API from "../utils/API";

class Answers extends Component {
  state = {
    answers: [{}],
    new: ""
  };

  componentDidMount() {
    this.loadAnswers();
  }

  loadAnswers = () => {
    API.getAnswers(this.props.question)
      .then(res => this.setState({ answers: res.data }))
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ new: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    document.getElementById("inputArea").value = "";
    
    const questionID = this.props.question;

    const today = new Date();
    var date =
      today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    const newAnswer = {
      question: questionID,
      answer: this.state.new,
      user: "Temp",
      formattedDate: date
      //user is hardcoded for now
    };

    API.saveAnswer(newAnswer)
      .then(res => this.loadAnswers())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <div className="answer-section">
            {this.state.answers.map((each, index) => (
              <div className="row answer">
                <div>{index + 1}</div>
                <div className="col-md-9">{each.answer}</div>
                <div className="col-md-1">{each.user}</div>
                <div className="col-md-1">{each.formattedDate}</div>
              </div>
            ))}
            <form>
              <div class="form-group">
                <textarea
                  onChange={this.handleChange}
                  class="form-control"
                  id="inputArea"
                  rows="3"
                  placeholder="Your Answer..."
                ></textarea>
              </div>
              <button
                onClick={this.handleSubmit}
                type="submit"
                class="btn btn-outline-dark btn-sm"
              >
                Post Your Answer
              </button>
            </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Answers;
