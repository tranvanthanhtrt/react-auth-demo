import { combineReducers, applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";
// import thunkMiddleware from "redux-thunk";
import { postReducer } from "../reducer/postReducer";
// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    postReducer
});


export const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
