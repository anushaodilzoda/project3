import React, { Component } from "react";
import { Input } from "../components/Form";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = { 
    formObject: { name: '', email: '', password1:'', password2:''
    },
    errorMsg: '',
   }

     // Handles updating component state when the user types into the input field
  handleInputChange = (event) => {
    this.setState({errorMsg: ''});
    const { name, value } = event.target;
    let newObject = this.state.formObject;
    newObject[name] = value;
    this.setState({
      formObject: newObject 
    })

  }

  // When the form is submitted, use the API.signup method to save the employees data
  handleFormSubmit = (event) => {
    event.preventDefault();
    var { name, email, password1, password2 } = this.state.formObject;
console.log(name, email, password1, password2);
    if (password1 == password2) {
      API.signup({
        name: name,
        email: email,
        password: password1
      })
        .then(res => this.setState({errorMsg: "Successfully signed up!"}))
        .catch(err => 
          {
            if(err.response.status==401){
              this.setState({errorMsg: "The user already exists"})
            } else{
              this.setState({errorMsg: "The passwords lenght must be more than 6"})
            }
          }
          );
    } else {
      this.setState({errorMsg: "The passwords did not match"})
    }
  }



  render() { 

    var { name, email, password1, password2 } = this.state.formObject;

    return ( <div className="signup">
    <div className="wrapper" style={{ width: 350 }}>
      <div className="logo"></div>
      <div className="text">DevPrepp</div>
      <form onSubmit={this.handleFormSubmit} >
        <Input onChange={this.handleInputChange} name="name" placeholder="Name" />
        <Input onChange={this.handleInputChange} name="email" placeholder="Email" />
        <Input
          onChange={this.handleInputChange}
          type="password"
          name="password1"
          placeholder="Password"
        />
        <Input
          onChange={this.handleInputChange}
          type="password"
          name="password2"
          placeholder="Confirm password"
        />
        <button className="btn btn-primary mb-3"
           disabled={!(name && email && password1 && password2)}
          type="submit"
        >
          Sign up
        </button>
      </form>
      <div style={{color: "red", background: "white", marginBottom: 10,}}>
        {this.state.errorMsg} 
        </div>
      <div>
        Already have an account?
        </div>
        <Link to="/login"> Sign in</Link>
    </div>
    </div> 
    );
  }
}

 
export default Signup;



 