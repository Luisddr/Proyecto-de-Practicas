import { SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from "../actions/user-actions/actions-types";

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state=initialState, {type, payload}) =>{

    switch(type){
        case SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: payload
            }

        case SIGN_OUT_SUCCESS:
            return{
            
                currentUser:null
            }

        case SIGN_IN_FAILURE:
            return{
                ...state,
                error: payload
            }

        default:
            return state
    }
}