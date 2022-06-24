import React, { useState } from 'react';

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';



export function Validate(data){
    let errors = {}

    if(data.confirmPassword !== data.password){
        errors.password = "Password must be the same in both fields"
    }
    
    if(!data.name){
        errors.name="You must enter a valid name"
    }

    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)){
        errors.email("enter a valid email")
    }
    return errors
}

function SignUpForm() {

    const [data, setData] = useState({
        name: "",
        email:"",
        password:"",
        confirmPassword:""

    })

    const [errors, setErrors] = useState({})

    

    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
        setErrors(Validate({
            ...data,
            [e.target.name]: e.target.value
        }))
    }
    //console.log(data)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(errors.password || errors.name || errors.email){
            alert("Verify your information, something is missing or wrong format")
        }
        else{
            createAuthUserWithEmailAndPassword(data.email, data.password)
        }
    }

    return (  
        <>
        <div>
            <h3>Sign Up with email</h3>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input name='name' id='name' type="text" required onChange={handleChange}/>

                <label>Email</label>
                <input name='email' id='email' type="email" required onChange={handleChange}/>

                <label>Password</label>
                <input name='password' id='password' type="password" required onChange={handleChange} />

                <label>Confirm Password</label>
                <input name='confirmPassword' id='confirmPassword' type="password" required onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
                <button type='submit'>Sign Up</button>

            </form>
        </div>
        </>
    );
}

export default SignUpForm;