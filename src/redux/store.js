import { applyMiddleware, combineReducers, createStore } from "redux";
import { jobPostedReducer } from "./reducers/reducers";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// multi middleware able to add by comma for ex: thunk, logger
const middlewares = applyMiddleware(thunk) 

// multi reducer able to add as object
const combineReducer = combineReducers({
    data: jobPostedReducer
})

export const store = createStore(combineReducer, composeWithDevTools(middlewares));