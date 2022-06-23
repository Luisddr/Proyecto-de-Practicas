import React from 'react';
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

function SignIn() {

    const logGoogleUser = async () =>{
        const res = await signInWithGooglePopup();
        console.log(res)
    }


    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
      );
}

export default SignIn;