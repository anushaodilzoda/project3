import React, { Component } from "react";
import "../App.css";
import NewInput from "../components/newInput";
import API from "../utils/API";

class Posts extends Component {
  state = {
    dashboard:'',
    questions: [{}],
  };


  componentDidMount(){
    const { dashboard } = this.props.location.state;
    this.setState({ dashboard });
    API.populateDashboard(dashboard)
      .then(res => this.setState({questions: res.data}))
      .catch(err => console.log(err));  
  }

  render() {
    return (
      <div className="content">
        <h1>{this.state.dashboard}</h1>
        <NewInput dashboard={this.state.dashboard} /> 
{/* table header */}
        <div className="row table-header">
          <div className="col-md-1">#</div>
          <div className="col-md-9">Questions</div>
          <div className="col-md-1">User</div>
          <div className="col-md-1">Date</div>
        </div>
{/* table body */}

  {this.state.questions.map(each => (
        <div className="row question-section">
          <div className="col-md-1">1</div>
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
                  <button type="button" class="btn btn-outline-primary btn-sm">
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
    );
  }
}

export default Posts;
