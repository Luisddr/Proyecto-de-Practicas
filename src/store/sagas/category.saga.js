import { takeLatest, all, call, put   } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed  } from '../actions/products-actions';

import { FETCH_CATEGORIES_START } from '../actions/products-actions/action-types';



export function* fetchCategoriesAsync(){
    try{
        //instead of await we used the equivalent yield for generator obj
        //instead of execute getCategories as a method we passed as parameter in the first place
        //of the call effect method, the second parameter belong to the parameter of our getCategories args
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories');

        // put instead of dispatch
        yield put(fetchCategoriesSuccess(categoriesArray))

    }
    catch(err){
        yield put(fetchCategoriesFailed(err))
    }
}


// it will take the latest executed action
export function* onFetchCategories(){
    yield takeLatest(FETCH_CATEGORIES_START, fetchCategoriesAsync )
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])

}