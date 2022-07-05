import { SET_PRODUCTS } from "../actions/products-actions/action-types"


const initialState={
    products: {}
}

export const categoriesReducer = (state= initialState, {type, payload})=>{

    switch(type){

        case SET_PRODUCTS:
            console.log(state)
            return{
                ...state,
                products: payload
            }

        default:
            return state
            
    }
}