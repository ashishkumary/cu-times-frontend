import { NEWS_LIST_REQUEST, NEWS_LIST_SUCCESS, NEWS_LIST_FAIL, NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS, NEWS_DETAILS_FAIL, NEWS_ADD_REQUEST, NEWS_ADD_SUCCESS, NEWS_ADD_FAIL, NEWS_DELETE_REQUEST, NEWS_DELETE_SUCCESS, NEWS_DELETE_FAIL, NEWS_ADD_RESET } from "../constants/newsConstant";


export const newsListReducers = (state = {}, action) => {
    switch (action.type) {
        case NEWS_LIST_REQUEST:
            return { loading: true }
        case NEWS_LIST_SUCCESS:
            return { loading: false, news: action.payload }
        case NEWS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const newsDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case NEWS_DETAILS_REQUEST:
            return { loading: true }
        case NEWS_DETAILS_SUCCESS:
            return { loading: false, newsDetail: action.payload }
        case NEWS_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const addNewsReducer = (state = {}, action) => {
    switch (action.type) {
        case NEWS_ADD_REQUEST:
            return { loading: true }
        case NEWS_ADD_SUCCESS:
            return { loading: false, success: true, createdNews: action.payload }
        case NEWS_ADD_FAIL:
            return { loading: false, error: action.payload }
        case NEWS_ADD_RESET:
            return {}
        default:
            return state
    }
}

export const newsDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case NEWS_DELETE_REQUEST:
            return { loading: true }
        case NEWS_DELETE_SUCCESS:
            return { loading: false, success: true, message: action.payload.message }
        case NEWS_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}