import React, { useState } from "react";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

export function Login (){

  const [formObject, setFormObject] = useState({});
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
      }

  // When the form is submitted, use the API.login method to save the employees data
  function handleFormSubmit(event) {
    event.preventDefault();
      API.login({
        email: formObject.email,
        password: formObject.password,
      })
        .then(res => console.log("Successfully logged in"))
        .catch(err => console.log(err));
  }

    var { email, password } = formObject;

    return (
      <div>
        <h5 style={{ marginBottom: 20 }}>Login</h5>
        <form style={{ width: 300 }}>
          <Input
            onChange={handleInputChange}
            name="email"
            placeholder="Email"
          />
          <Input
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormBtn
            disabled={!(email && password)}
            onClick={handleFormSubmit}
          >
            Login
          </FormBtn>
        </form>
      </div>
    );
    }


