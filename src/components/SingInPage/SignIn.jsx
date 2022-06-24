import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/signInForm";
import "./signInpage.styles.scss"


function SignIn() {
  // useEffect(() => {

  //   const fetchData = async () =>{
  //       const res = await getRedirectResult(auth)
  //       //console.log(res)
  //       if(res){
  //           const userDocReference = await createUserDocumentFromAuth(res.user);

  //       }
  //   }
    
  //   fetchData();
    
  //   // if (response) {
  //   //   const userDocReference = await createUserDocumentFromAuth(response.user);
  //   // }
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocReference = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
}

export default SignIn;
