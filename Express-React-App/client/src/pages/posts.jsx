import React, { Component } from "react";
import "../App.css";
import NewInput from "../components/question";
import Search from "../components/search";
import API from "../utils/API";
import Navbar from "../components/navbar";
import Answer from "../components/answers";
import Footer from "../components/footer"
import { Redirect } from 'react-router-dom'

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
    if(!localStorage.getItem("DevPrepp-User")){
      return <Redirect from="/dashboard" to='/login' />
    }
    var { addNew, dashboard, questions, showAnswer } = this.state;

    return (
      <React.Fragment>
          <Navbar />
        <div className="post-page">
          <div className="dashboard-content ">
            <div className="row dash-header">
              <h1>{dashboard}</h1>
              {dashboard != "All Topics" ? (
                <button
                  onClick={this.toggle}
                  className="btn btn-primary badge-pill newbtn"
                >
                  {addNew == false ? "Add " : "Hide "}{" "}
                  <i className="fas fa-question-circle"></i>
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
                className="btn btn-primary m-2"
              >
                Show all
              </button>
            </form>

            {/* table body */}

            {questions.map(each => (
              <div className="row question-section shadow-sm">
                <div className="question-date"
                >
                  {each.formattedDate}
                </div>
                <div className="col-md-9">
                  <a
                    href="javascript:;"
                    onClick={() => this.handleShowAnswer(each._id)}
                  >
                    <p>
                    {each.question + "   "}
                    </p>
                  </a>
                  {showAnswer == each._id ? (
                    <Answer question={each._id} />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="answer-count">
                  {each.answer + "  "}
                  <span style={{ fontSize: 13 }}>Answers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Posts;
