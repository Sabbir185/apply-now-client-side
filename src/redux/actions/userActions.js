import {
    post_user_sign_up, 
    user_error,
    user_login_data,
    user_login_error
} from './types';
import axios from 'axios';


// user sign up action helper function
export const userSignUp = (payload) => {
    return async (dispatch) => {
        try {   
            const userResponse = await axios.post('https://desolate-sands-39522.herokuapp.com/user', payload ,{
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
            const loginData = await axios.post('https://desolate-sands-39522.herokuapp.com/user/login', payload);

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