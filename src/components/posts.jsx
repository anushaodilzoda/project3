import React, { Component } from "react";
import "../App.css";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="row table-header">
          <div className="col-md-1">#</div>
          <div className="col-md-9">Questions</div>
          <div className="col-md-1">User</div>
          <div className="col-md-1">Date</div>
        </div>

        <div className="row question-section">
          <div className="col-md-1">1</div>
          <div className="col-md-9">
            What are JavaScript Data Types?
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
          <div className="col-md-1">Khaliunaa</div>
          <div className="col-md-1">04/12/2020</div>
        </div>

        <div className="row question-section">
          <div className="col-md-1">2</div>
          <div className="col-md-9">
            What is the use of isNaN function?
            <button
              class="btn btn-outline-primary btn-sm"
              data-toggle="collapse"
              data-target="#entry2"
            >
              +
            </button>
            <div className="answer_section">
              <div id="entry2" class="collapse mt-2">
                <div className="entry">
                  isNan function returns true if the argument is not a number
                  otherwise it is false.
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
          <div className="col-md-1">Khaliunaa</div>
          <div className="col-md-1">04/12/2020</div>
        </div>

        <div className="row question-section">
          <div className="col-md-1">3</div>
          <div className="col-md-9">
            Between JavaScript and an ASP script, which is faster?
            <button
              class="btn btn-outline-primary btn-sm"
              data-toggle="collapse"
              data-target="#entry3"
            >
              +
            </button>
            <div className="answer_section">
              <div id="entry3" class="collapse mt-2">
                <div className="entry">
                  JavaScript is faster. JavaScript is a client-side language and
                  thus it does not need the assistance of the web server to
                  execute. On the other hand, ASP is a server-side language and
                  hence is always slower than JavaScript. Javascript now is also
                  a server side language (nodejs).
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
          <div className="col-md-1">Khaliunaa</div>
          <div className="col-md-1">04/12/2020</div>
        </div>
      </div>
    );
  }
}

export default Posts;
