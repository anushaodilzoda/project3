import React, { Component } from "react";
import API from "../utils/API";
import moment from 'moment/min/moment-with-locales';

class NewInput extends Component {
  state = {
    question: ""
  };

  handleChange = event => {
    this.setState({ question: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    
    const { dashboard, parentMethod } = this.props;

    const newQuestion = {
      topic: dashboard,
      question: this.state.question,
      user: "Temp",
      formattedDate: moment().format("YYYY-MM-DD")
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
        className="form-row align-items-center new-entry m-1"
      >
        <div className="col-sm-10 my-2">
          {this.props.dashboard=="Coding" ?
                    (  <textarea
                      onChange={this.handleChange}
                      className="form-control"
                      id="question"
                      rows="3"
                      placeholder="Your Question..."
                    ></textarea>  )
                    :
                    (
                      <input
                      onChange={this.handleChange}
                      className="form-control"
                      rows="1"
                      name="question"
                      // placeholder="Enter new question"
                      style={{borderRadius: 20}}
                    ></input>
                    )
        }

        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn badge-pill btn-primary">
            Enter new <i className="fas fa-question-circle"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default NewInput;
