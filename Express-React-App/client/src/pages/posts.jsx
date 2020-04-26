import React, { Component } from "react";
import "../App.css";
import NewInput from "../components/newInput";
import Search from "../components/search";
import API from "../utils/API";
import Navbar from "../components/navbar";
import Answer from "../components/answers";

class Posts extends Component {
  state = {
    dashboard: "",
    questions: [{}],
    addNew: false,
    showAnswer: ""
  };

  componentDidMount() {
    const { dashboard } = this.props.location.state;
    this.setState({ dashboard });
    this.loadQuestions(dashboard);
  }

  loadQuestions = dashboard => {
    API.populateDashboard(dashboard)
      .then(res => this.setState({ questions: res.data }))
      .catch(err => console.log(err));
  };

  reload = () => {
    this.loadQuestions(this.state.dashboard);
  };

  setQuestions = questions => {
    this.setState({ questions });
  };

  toggle = () => {
    this.setState({ addNew: !this.state.addNew });
  };

  handleShowAnswer = questionObj => {
    if (questionObj == this.state.showAnswer) {
      this.setState({ showAnswer: "" });
    } else {
      this.setState({ showAnswer: questionObj });
    }
  };

  render() {
    var { addNew, dashboard, questions, showAnswer } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <div className="row dash-header">
            <h1>{dashboard}</h1>
            {dashboard != "All Topics" ? (
              <button
                onClick={this.toggle}
                className="btn btn-dark badge-pill newbtn"
              >
                {addNew == false ? "Add " : "Hide "}{" "}
                <i class="fas fa-question-circle"></i>
              </button>
            ) : (
              <div></div>
            )}
            <div className="col-md-9">
              {dashboard != "All Topics" && addNew == true ? (
                <NewInput
                  dashboard={dashboard}
                  parentMethod={this.loadQuestions}
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <br></br>
          <form className="form-inline filter">
            <Search scope={dashboard} parentMethod={this.setQuestions} />
            <button
              onClick={this.reload}
              type="button"
              class="btn btn-outline-primary m-2"
            >
              Show all
            </button>
          </form>
          {/* table header */}
          <div className="row table-header">
            <div className="col-md-1">#</div>
            <div className="col-md-9">Questions</div>
            <div className="col-md-1">User</div>
            <div className="col-md-1">Date</div>
          </div>
          {/* table body */}

          {questions.map((each, index) => (
            <div className="row question-section">
              <div className="col-md-1">{index + 1}</div>
              <div className="col-md-9">
                {each.question}
                <button
                  onClick={() => this.handleShowAnswer(each._id)}
                  class="btn btn-sm"
                >
                  <i class={showAnswer==each._id ? "fas fa-minus" : "fas fa-plus"}></i>
                </button>
                {showAnswer == each._id ? (
                  <Answer question={each._id} />
                ) : (
                  <div></div>
                )}
              </div>
              <div className="col-md-1">{each.user}</div>
              <div className="col-md-1">{each.formattedDate}</div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
