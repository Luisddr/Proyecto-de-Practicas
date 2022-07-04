import { SET_CURRENT_USER } from "../actions/user-actions/actions-types";

const initialState = {
    currentUser: null
}

export const userReducer = (state=initialState, {type, payload}) =>{

    switch(type){
        case SET_CURRENT_USER:
            console.log(state)
            return{
                ...state,
                currentUser: payload
            }

        default:
            return state
    }
}