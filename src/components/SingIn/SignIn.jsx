import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import SignUpForm from "../SignUpForm/SignUpForm";


function SignIn() {
  useEffect(() => {

    const fetchData = async () =>{
        const res = await getRedirectResult(auth)
        //console.log(res)
        if(res){
            const userDocReference = await createUserDocumentFromAuth(res.user);

        }
    }
    
    fetchData();
    
    // if (response) {
    //   const userDocReference = await createUserDocumentFromAuth(response.user);
    // }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocReference = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm/>
    </div>
  );
}

export default SignIn;
