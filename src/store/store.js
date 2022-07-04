import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer  from './root-reducer';


const middleWares = [];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(...middleWares)));
