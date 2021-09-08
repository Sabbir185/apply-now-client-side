import {user_request, get_all_job_post, loading_error} from './types';
import axios from 'axios';

// get searching job post
export const getAllPost = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: user_request,
            })

            const postedData = await axios.post('http://localhost:8080/jobPost/search', payload);

            dispatch({
                type: get_all_job_post,
                payload: postedData.data.data,
            })
            
        } catch (error) {
            dispatch({
                type: loading_error,
                payload: error.message,
            })
        }
    }
}


// get popular job post
export const popularJobPosts = ( key ) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: user_request,
            })

            const postedData = await axios.get(`http://localhost:8080/jobPost/popularPost/${key}`);

            dispatch({
                type: get_all_job_post,
                payload: postedData.data.data.reverse(),
            })
            
        } catch (error) {
            dispatch({
                type: loading_error,
                payload: error.message,
            })
        }
    }
}