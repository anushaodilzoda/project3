import React, { Component } from "react";
import "../App.css";
import NewInput from "../components/newInput";
import Search from "../components/search";
import API from "../utils/API";
import Navbar from "../components/navbar"

class Posts extends Component {
  state = {
    dashboard: "",
    questions: [{}]
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

  render() {
    var { dashboard, questions } = this.state;

    return (
      <React.Fragment>
      <Navbar />
      <div className="content">
        <h1>{dashboard}</h1>
        {dashboard != "All Topics" ? (
          <NewInput dashboard={dashboard} parentMethod={this.loadQuestions} />
        ) : (
          <div></div>
        )}
        <br></br>
        <form className="form-inline">
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
                class="btn btn-outline-primary btn-sm"
                data-toggle="collapse"
                data-target="#entry1"
              >
                +
              </button>
              <div className="answer_section">
                <div id="entry1" class="collapse mt-2">
                  <div className="entry">
                    Number, String, Boolean, Object, Undefined
                  </div>
                  <form>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm"
                    >
                      Enter Solution
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-1">{each.user}</div>
            <div className="col-md-1">{each.date}</div>
          </div>
        ))}
      </div>
      </React.Fragment>
    );
  }
}

export default Posts;
