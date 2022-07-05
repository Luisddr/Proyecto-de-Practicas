import { FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, } from "../actions/products-actions/action-types"


const initialState={
    products: {},
    isLoading: false,
    error: null
}

export const categoriesReducer = (state= initialState, {type, payload})=>{

    switch(type){
        
        case FETCH_CATEGORIES_START:
            return{
                ...state,
                isLoading: true
            }

        case FETCH_CATEGORIES_SUCCESS:
            console.log(state)
            return{
                ...state,
                products: payload,
                isLoading: false
            }

        case FETCH_CATEGORIES_FAILED:
            return{
                ...state,
                error: payload,
                isLoading: false
            }

        default:
            return state
            
    }
}