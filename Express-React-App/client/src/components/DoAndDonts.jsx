import React, { Component } from "react";
import "../App.css";
import API from "../utils/API";

class DoAndDonts extends Component {
  state = {
    doInput: "",
    dontInput: "",
    allDont: [{}],
    allDo: [{}],
  };

  componentDidMount() {
    this.loadDo();
    this.loadDont();
  }

  loadDo = () => {
    API.getAllDo()
      .then((res) => this.setState({ allDo: res.data }))
      .catch((err) => console.log(err));
  };
  loadDont = () => {
    API.getAllDont()
      .then((res) => this.setState({ allDont: res.data }))
      .catch((err) => console.log(err));
  };

  handleDoChange = (event) => {
    console.log(event.target.value);
    this.setState({ doInput: event.target.value });
  };
  handleDontChange = (event) => {
    console.log(event.target.value);
    this.setState({ dontInput: event.target.value });
  };

  handleDoSubmit = (event) => {
    event.preventDefault();
    document.getElementById("inputArea1").value = "";
    var obj = {
      type: "Do",
      text: this.state.doInput,
    };
    API.addDo(obj)
      .then((res) => this.loadDo())
      .catch((err) => console.log(err));
  };

  handleDontSubmit = (event) => {
    event.preventDefault();
    document.getElementById("inputArea2").value = "";
    var obj = {
      type: "Dont",
      text: this.state.dontInput,
    };
    API.addDont(obj)
      .then((res) => this.loadDont())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div class="row DoAndDontsContent">
        {/* =============  Do */}
        <div class=" col-md-6">
          <form>
            <div class="form-group">
              <textarea
                onChange={this.handleDoChange}
                class="form-control"
                id="inputArea1"
                rows="3"
                placeholder="Your Input..."
              ></textarea>
            </div>
            <button
              onClick={this.handleDoSubmit}
              type="submit"
              class="btn btn-outline-dark btn-sm"
            >
              Enter
            </button>
          </form>

          <div class="anyClass">
            {this.state.allDo.map((each, index) => (
              <div className="row">
                <div className="col-md-1">{index + 1 + "."}</div>
                <div className="col-md-8">{each.text}</div>
                <div className="col-md-2">
                  <button type="button" class="btn btn-outline-primary">
                    <i class="fas fa-thumbs-up"></i>
                    <span class="badge badge-light">{each.like}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =============  Don't */}
        <div class=" col-md-6">
          <form>
            <div class="form-group">
              <textarea
                onChange={this.handleDontChange}
                class="form-control"
                id="inputArea2"
                rows="3"
                placeholder="Your Input..."
              ></textarea>
            </div>
            <button
              onClick={this.handleDontSubmit}
              type="submit"
              class="btn btn-outline-dark btn-sm"
            >
              Enter
            </button>
          </form>
          <div class="anyClass">
            {this.state.allDont.map((each, index) => (
              <div className="row">
                <div className="col-md-1">{index + 1 + "."}</div>
                <div className="col-md-8">{each.text}</div>
                <div className="col-md-2">
                  <button type="button" class="btn btn-outline-primary">
                    <i class="fas fa-thumbs-up"></i>
                    <span class="badge badge-light">{each.like}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DoAndDonts;
