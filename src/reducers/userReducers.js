import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNOUT, USER_EDIT_REQUEST, USER_EDIT_FAIL, USER_EDIT_SUCCESS, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_EDIT_RESET, ADMIN_USER_EDIT_REQUEST, ADMIN_USER_EDIT_SUCCESS, ADMIN_USER_EDIT_RESET, ADMIN_USER_EDIT_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL } from "../constants/userConstant";


export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true }
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGNOUT:
            return {}
        default:
            return state
    }
}

export const userSignupReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true }
        case USER_SIGNUP_SUCCESS:
            return { loading: false, success: true, user: action.payload }
        case USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

export const userEditReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_EDIT_REQUEST:
            return { loading: true }
        case USER_EDIT_SUCCESS:
            return { loading: false, success: true, updates: action.payload }
        case USER_EDIT_FAIL:
            return { loading: false, error: action.payload }
        case USER_EDIT_RESET:
            return {}
        default:
            return state
    }
}

export const adminUserEditReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_USER_EDIT_REQUEST:
            return { loading: true }
        case ADMIN_USER_EDIT_SUCCESS:
            return { loading: false, success: true, updates: action.payload }
        case ADMIN_USER_EDIT_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_USER_EDIT_RESET:
            return {}
        default:
            return state
    }
}

export const userListReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true }
        case USER_LIST_SUCCESS:
            return { loading: false, success: true, users: action.payload }
        case USER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const userDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { loading: true }
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return { loading: true }
        case USER_DELETE_SUCCESS:
            return { loading: false, success: true, message: action.payload.message }
        case USER_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}