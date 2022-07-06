import {SET_PRODUCTS, FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS} from './action-types'
import {getCategoriesAndDocuments} from "../../../utils/firebase/firebase.utils"


export function fetchCategoriesStart(){
    return{
        type:FETCH_CATEGORIES_START

    }
}

export function fetchCategoriesSuccess(payload){
    return{
        type:FETCH_CATEGORIES_SUCCESS,
        payload

    }
}

export function fetchCategoriesFailed(payload){
    return{
        type:FETCH_CATEGORIES_FAILED,
        payload

    }
}

