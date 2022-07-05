import { combineReducers } from "redux";
import { userReducer } from "./reducers/user-reducer";
import { categoriesReducer } from "./reducers/category-reducer";

export default combineReducers({
    user: userReducer,
    categories: categoriesReducer
})