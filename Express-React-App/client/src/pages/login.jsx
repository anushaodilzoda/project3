import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import API from "../utils/API";

class Login extends Component {
  state = {
    redirect: false,
    email: '',
    password: '',
    errorMsg: '',
  };

  handleEmailChange = event => {
    this.setState({errorMsg: ''});
    this.setState({ email: event.target.value });
  };
  handlePassChange=event=>{
      this.setState({errorMsg: ''});
      this.setState({password: event.target.value})
  }
  
  handleFormSubmit = event => {
      event.preventDefault();

      API.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.setState({redirect: true}))
        .catch(err => this.setState({errorMsg: "invalid credentials"}));
  };


  render() {
    if(this.state.redirect==true){
      return <Redirect from="/login" to='/' />
    }
    return (
      <div className="login">
      <div className="wrapper">
        <div className="wrapper-box rounded">
        <div className="logo"></div>
        <div className="text">DevPrepp</div>
        <form onSubmit={this.handleFormSubmit}>
          <Input onChange={this.handleEmailChange} name="email" placeholder="Email" />
          <Input
            onChange={this.handlePassChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="btn btn-primary mb-4" disabled={!(this.state.email && this.state.password)} type="submit">
            Sign in
          </button>
        </form>
        <div style={{color: "red", background: "white", marginBottom: 10,}}>
        {this.state.errorMsg} 
        </div>
        <div>
        Don't have an account?  
        </div>
        <Link to="/signup">
         Create an account
        </Link>
       
        </div>
      </div>
      </div>
    );
  }
}

export default Login;

