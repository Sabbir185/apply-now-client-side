import {
    user_signUp, 
    post_user_sign_up, 
    user_error,
    user_login_request,
    user_login_data,
    user_login_error
} from './types';
import axios from 'axios';


// user sign up action helper function
export const userSignUp = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: user_signUp
            })
            
            const userResponse = await axios.post('http://localhost:8080/user', payload ,{
                headers: {'Content-Type': 'application/json'}
            });

            dispatch({
                type: post_user_sign_up,
                payload: userResponse.data
            })

        } catch (error) {
            dispatch({
                type: user_error,
                payload: error
            })
        }
    }
}


// user login actions=
export const userLoginAction = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: user_login_request
            })

            const loginData = await axios.post('http://localhost:8080/user/login', payload);

            dispatch({
                type: user_login_data,
                payload: loginData.data
            })
            
        } catch (error) {
            dispatch({
                type: user_login_error,
                payload: error
            })
        }
    }
}