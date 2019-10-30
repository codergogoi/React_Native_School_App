import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initialState = {};

const middleWare = [ thunk ];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare));

export default store;
