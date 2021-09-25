import {
    get_all_job_post, 
    loading_error,
    getAllData,
    jobError
} from './types';
import axios from 'axios';


// get searching job post
export const getAllPost = (payload, page = 1 ) => {
    return async (dispatch) => {
        try {
            const postedData = await axios.post(`https://desolate-sands-39522.herokuapp.com/jobPost/jobs?page=${page}&limit=9`, payload);

            dispatch({
                type: get_all_job_post,
                payload: postedData.data,
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
export const popularJobPosts = ( key, payload ) => {
    return async (dispatch) => {
        try {
            const postedData = await axios.post(`https://desolate-sands-39522.herokuapp.com/jobPost/popular/${key}`, payload);

            dispatch({
                type: get_all_job_post,
                payload: postedData.data,
            })
            
        } catch (error) {
            dispatch({
                type: loading_error,
                payload: error.message,
            })
        }
    }
}



// recent job post
export const recentJobPost = () => {
    return async (dispatch) => {
        try {
            const recentPosted = await axios.get('https://desolate-sands-39522.herokuapp.com/jobPost');

            dispatch({
                type: getAllData,
                payload: recentPosted.data.data
            })
            
        } catch (error) {
            dispatch({
                type: jobError,
                payload: error.message
            })
        }
    }
}

