import React, { useState, useContext } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../FormInput/FormInput";
import "./SignUp.styles.scss";
import { useDispatch } from "react-redux";
import {setCurrentUser} from "../../store/actions/user-actions/index";
// import { UserContext } from "../../context/user.context";

export function Validate(data) {
  let errors = {};

  if (data.confirmPassword !== data.password) {
    errors.password = "Password must be the same in both fields";
  }

  if (!data.displayName) {
    errors.displayName = "You must enter a valid name";
  }

  if (
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      data.email
    )
  ) {
    errors.email = "enter a valid email";
  }
  return errors;
}

function SignUpForm() {
  const [data, setData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [errors, setErrors] = useState({});
  const dispatch = useDispatch()
 

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validate({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };
  //console.log(data)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.password || errors.displayName || errors.email) {
      alert("Verify your information, something is missing or wrong format");
      return;
    }
    try {
      const { email } = data;
      const { password } = data;
      console.log(email);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      dispatch(setCurrentUser(user))

      const { displayName } = data;

      await createUserDocumentFromAuth(user, { displayName });
    
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("The email is already registered");
      }
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="sign-up-container">
        <h3>Don't have an account</h3>
        <span>Sign Up with email</span>
        <form onSubmit={handleSubmit}>

        
          
          <FormInput
            label="Display Name"
            name="displayName"
            id="displayName"
            type="text"
            required
            onChange={handleChange}
            />


       

          <FormInput
            label="Email"
            name="email"
            id="email"
            type="email"
            required
            onChange={handleChange}
            />
           

        
          <FormInput
            label="Password"
            name="password"
            id="password"
            type="password"
            required
            onChange={handleChange}
            />
           


        
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            required
            onChange={handleChange}
            />
           


          {errors.password && <span>{errors.password}</span>}
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
