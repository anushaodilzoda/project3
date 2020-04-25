import React, { Component } from "react";
import "../App.css";
import NewInput from "../components/newInput";
import Search from "../components/search";
import API from "../utils/API";
import Navbar from "../components/navbar"

class Posts extends Component {
  state = {
    dashboard: "",
    questions: [{}],
    addNew: false
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

  toggle = () =>{
    this.setState({addNew: !this.state.addNew});
  }

  render() {
    var { addNew, dashboard, questions } = this.state;

    return (
      <React.Fragment>
      <Navbar />
      <div className="content">
        <div className='row dash-header'>
        <h1>{dashboard}</h1>
        <button onClick={this.toggle} className="btn btn-dark badge-pill newbtn">{addNew==false ? 'Add ' : 'Hide ' } <i class="fas fa-question-circle"></i></button>
        <div className='col-md-9'>
        {dashboard != "All Topics" && addNew==true ? (
          <NewInput dashboard={dashboard} parentMethod={this.loadQuestions} />
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
                class="btn btn-sm"
                data-toggle="collapse"
                data-target="#entry1"
              >
                <i class="fas fa-plus"></i>
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
