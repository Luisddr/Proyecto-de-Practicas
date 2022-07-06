import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer  from './root-reducer';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';


const sagaMiddleware = createSagaMiddleware()

const middleWares = [sagaMiddleware];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(...middleWares)));

sagaMiddleware.run(rootSaga)