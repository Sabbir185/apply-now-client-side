import {user_signUp, post_user_sign_up, user_error } from './types';
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