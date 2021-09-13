import { applyMiddleware, combineReducers, createStore } from "redux";
import { jobPostedReducer, recentJob } from "./reducers/reducers";
import {userSignUpReducer, userLoginReducer} from './reducers/userReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { recruiterLoginReducer, recruiterSignUpReducer } from "./reducers/recruiterReducers";

// multi middleware able to add by comma for ex: thunk, logger
const middlewares = applyMiddleware(thunk) 

// multi reducer able to add as object
const combineReducer = combineReducers({
    data: jobPostedReducer,
    recentJob: recentJob,
    userData: userSignUpReducer,
    userLoginData: userLoginReducer,
    recruiterSignUp: recruiterSignUpReducer,
    recruiterLoginData: recruiterLoginReducer
})

export const store = createStore(combineReducer, composeWithDevTools(middlewares));