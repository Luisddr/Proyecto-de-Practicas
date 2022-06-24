import React, { useState } from 'react';
import "./signInForm.styles.scss";
import FormInput from "../FormInput/FormInput";
import Button from '../button/button.component';
import {signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'

function SignInForm() {

    const[fields, setFields] = useState({
        email:"",
        password:""
    });

    const {email , password} = fields;

    const handleChange= (e) =>{
        setFields({
            ...fields,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const response = await signInUserWithEmailAndPassword(email, password)
        }
        catch(err){
            if(err.code === "auth/wrong-password"){
                alert('incorrect password try again')
            }
            console.log(err)
        }


    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
      };



    return ( 
        <>
        <div className='sign-in-container'>
        <h3>Enter you email and password</h3>
        <form onSubmit={handleSubmit}>
        <FormInput label ="Email" name='email' required type="email" onChange={handleChange}/>
        <FormInput label="Password" name='password' required type="password" onChange={handleChange}/>
        <div className='buttons-container'>
        <Button type="submit">Signin</Button>
        <Button buttonType='google' type="button" onClick={signInWithGoogle}>Google sign in </Button>
        </div>
        </form>
        </div>
        </>
     );
}

export default SignInForm;