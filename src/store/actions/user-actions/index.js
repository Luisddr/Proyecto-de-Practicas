import {CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START, SET_CURRENT_USER, SIGN_IN_FAILURE, SIGN_IN_SUCCESS} from "./actions-types";


export function setCurrentUser (payload){
    return{
        type: SET_CURRENT_USER,
        payload,
    }
}

export function checkUserSession(){
    return{
        type: CHECK_USER_SESSION,

    }
}

export function googlSignInStart(){
    return{
        type: GOOGLE_SIGN_IN_START
    }
}

export function emailSignInStart(email, password){
    return{
        type: EMAIL_SIGN_IN_START,
        email, password
    }
}

export function signInSuccess(payload){
    return{
        type: SIGN_IN_SUCCESS,
        payload
    }
}

export function signInFailure(payload){
    return{
        type: SIGN_IN_FAILURE,
        payload

    }
}

