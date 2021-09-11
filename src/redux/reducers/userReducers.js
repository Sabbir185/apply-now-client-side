import {user_signUp, post_user_sign_up, user_error } from '../actions/types';

const initialUserData = {
    loading: false,
    userInfo: {},
    error: '',
    skip: false,
}

export const userInfoReducer = (state = initialUserData, action) => {
    switch(action.type){
        case user_signUp:
            return{
                ...state,
                loading: true
            }
            
        case post_user_sign_up:
            return{
                ...state,
                loading: false,
                userInfo: action.payload,
                error: '',
                skip: true
            }

        case user_error:
            return{
                ...state,
                loading: false,
                userInfo: {},
                error: action.payload
            }

        default:
            return state;
    }
}