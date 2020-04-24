import React, { useState } from "react";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import { Link } from "react-router-dom";

export function Signup() {
  const [formObject, setFormObject] = useState({});

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.signup method to save the employees data
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.password1 == formObject.password2) {
      API.signup({
        name: formObject.name,
        email: formObject.email,
        password: formObject.password1
      })
        .then(res => console.log("Successfully signed up"))
        .catch(err => console.log(err));
    } else {
      console.log(
        "This needs to show in the screen=> The passwords did not match"
      );
    }
  }

  var { name, email, password1, password2 } = formObject;

  return (
    <div className="wrapper">
      <div className="text">Sign Up</div>
      <form style={{ width: 350 }}>
        <Input onChange={handleInputChange} name="name" placeholder="Name" />
        <Input onChange={handleInputChange} name="email" placeholder="Email" />
        <Input
          onChange={handleInputChange}
          type="password"
          name="password1"
          placeholder="Password"
        />
        <Input
          onChange={handleInputChange}
          type="password"
          name="password2"
          placeholder="Confirm password"
        />
        <button className="btn btn-primary mb-3"
          disabled={!(name && email && password1 && password2)}
          onClick={handleFormSubmit}
        >
          Sign up
        </button>
      </form>
      <div>
        Already have an account?
        <Link to="/login"> Login</Link>
      </div>
    </div>
  );
}
