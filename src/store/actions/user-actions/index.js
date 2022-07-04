import {SET_CURRENT_USER} from "./actions-types";


export function setCurrentUser (payload){
    return{
        type: SET_CURRENT_USER,
        payload,
    }
}

