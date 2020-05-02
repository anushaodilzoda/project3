import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Posts from "./pages/posts";
import  Signup  from "./pages/signup";
import Login from "./pages/login";

class  App extends Component {
  state = {  }
  render() { 
    const { user } = this.state;
    return (     <div>
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Home} />
      {/* <Route
        path="/"
        exact
        render={props => {
          if (!user) return <Redirect to="/login" />;
          return <Home />;
        }}
      /> */}
      <Route path="/dashboard" component={Posts} />
    </div> );
  }
}
 
export default App;



