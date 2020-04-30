import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";

class Answers extends Component {
  state = {
    answers: [{}],
    new: "",
  };

  componentDidMount() {
    this.loadAnswers();
  }

  loadAnswers = () => {
    API.getAnswers(this.props.question)
      .then((res) => this.setState({ answers: res.data }))
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    this.setState({ new: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("inputArea").value = "";

    const questionID = this.props.question;

    const newAnswer = {
      question: questionID,
      answer: this.state.new,
      user: "Temp",
      formattedDate: moment().format("YYYY-MM-DD")
      //user is hardcoded for now
    };

    API.saveAnswer(newAnswer)
      .then((res) => this.loadAnswers())
      .catch((err) => console.log(err));
  };

  handleLike(answerID) {
    API.addLike(answerID)
      .then((res) => this.loadAnswers())
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <div className="answer-section">
          {this.state.answers.map((each, index) => (
            <div className="row answer">
              <span>{index + 1 + "."}</span>
              <div className="col-md-10">
                {each.answer}{" "}
                <span className="answer-date">
                  {"(" + each.formattedDate + ")"}
                </span>
              </div>
              <div className="likes">
                <button
                  onClick={() => this.handleLike(each._id)}
                  className="btn btn-outline-primary"
                >
                  <i className="far fa-thumbs-up"></i>{" "}
                  <span className="badge badge-primary">{each.like}</span>
                </button>
              </div>
            </div>
          ))}
          <form>
            <div className="form-group">
              <textarea
                onChange={this.handleChange}
                className="form-control"
                id="inputArea"
                rows="3"
                placeholder="Your Answer..."
              ></textarea>
            </div>
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-outline-dark btn-sm"
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
