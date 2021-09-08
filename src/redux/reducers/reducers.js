import {user_request, get_all_job_post, loading_error} from '../actions/types';

const initialState = {
    loading: false,
    postedData: [],
    error: ''
}

export const jobPostedReducer = (state = initialState, action) => {
    switch (action.type) {
        case user_request:
            return {
                ...state,
                loading: true,
            }

        case get_all_job_post:
            return {
                ...state,
                loading: false,
                postedData: action.payload,
            }

        case loading_error:
            return {
                ...state,
                loading: false,
                postedData: [],
                error: action.payload
            }
            
        default:
            return state;
    }
}