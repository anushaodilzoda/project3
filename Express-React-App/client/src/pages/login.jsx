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
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePassChange=event=>{
      this.setState({password: event.target.value})
  }
  
  handleFormSubmit = event => {
      event.preventDefault();
      API.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.setState({redirect: true}))
        .catch(err => console.log(err));
  };


  render() {
    if(this.state.redirect==true){
      return <Redirect from="/login" to='/' />
    }
    return (

        <div>
        <h5 style={{ marginBottom: 20 }}>Login</h5>
        <form style={{ width: 300 }}>
          <Input onChange={this.handleEmailChange} name="email" placeholder="Email" />
          <Input
            onChange={this.handlePassChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormBtn disabled={!(this.state.email && this.state.password)} onClick={this.handleFormSubmit}>
            Login
          </FormBtn>
        </form>
        <Link to="/signup">
          Create an account
        </Link>
      </div>
    );
  }
}

export default Login;

