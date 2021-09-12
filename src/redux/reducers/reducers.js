import {
    get_all_job_post, 
    loading_error,
    getAllData,
    jobError
} from '../actions/types';

const initialState = {
    loading: false,
    postedData: [],
    error: ''
}

export const jobPostedReducer = (state = initialState, action) => {
    switch (action.type) {
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


const initialRecentJob = {
    loading: false,
    recentJob: [],
    error: ''
}
// recent job
export const recentJob = (state = initialRecentJob, action) => {
    switch (action.type) {
        case getAllData:
            return {
                ...state,
                loading: false,
                recentJob: action.payload,
            }

        case jobError:
            return {
                ...state,
                loading: false,
                recentJob: [],
                error: action.payload
            }
            
        default:
            return state;
    }
}