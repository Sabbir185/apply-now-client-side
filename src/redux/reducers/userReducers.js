import {
    post_user_sign_up, 
    user_error, 
    user_login_error, 
    user_login_data 
} from '../actions/types';

const initialUserData = {
    loading: false,
    userInfo: {},
    error: '',
}
// user sign up data
export const userSignUpReducer = (state = initialUserData, action) => {
    switch(action.type){        
        case post_user_sign_up:
            return{
                ...state,
                loading: false,
                userInfo: action.payload,
                error: '',
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


// user login
const initialLoginData = {
    loading: false,
    userLoginData: {},
    error: ''
}

export const userLoginReducer = (state=initialLoginData, action) => {
    switch(action.type){
        case user_login_data:
            return {
                ...state,
                loading: false,
                userLoginData: action.payload
            }
        case user_login_error:
            return{
                ...state,
                loading: false,
                userLoginData: {},
                error: action.payload
            }

        default:
            return state;
    }
}