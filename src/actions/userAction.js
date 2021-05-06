import Axios from "axios";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS, USER_SIGNUP_REQUEST, USER_SIGNUP_FAIL, USER_SIGNUP_SUCCESS, USER_SIGNOUT, USER_EDIT_REQUEST, USER_EDIT_FAIL, USER_EDIT_SUCCESS, USER_LIST_REQUEST, USER_LIST_FAIL, USER_LIST_SUCCESS, USER_DETAILS_REQUEST, USER_DETAILS_FAIL, USER_DETAILS_SUCCESS, ADMIN_USER_EDIT_REQUEST, ADMIN_USER_EDIT_SUCCESS, ADMIN_USER_EDIT_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL } from "../constants/userConstant";
import axios from "axios";

export const signin = (item) => async (dispatch) => {
    console.log('item', item)
    dispatch({ type: USER_SIGNIN_REQUEST })
    try {
        const { data } = await Axios.post('/api/users/signin', item)
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


///api/users/signin
export const signup = (item) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST })
    try {
        const { data } = await Axios.post('/api/users/signup', item)
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const signout = () => (dispatch) => {
    dispatch({ type: USER_SIGNOUT })
    localStorage.removeItem('userInfo')
}

export const profileEdit = (profileId, item) => async (dispatch, getState) => {
    console.log('profileId, item', profileId, item)
    dispatch({ type: USER_EDIT_REQUEST })
    const { userSignin: { userInfo } } = getState()
    try {
        const { data } = await Axios.put(`/api/users/profile/${profileId}`, item, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        })
        dispatch({ type: USER_EDIT_SUCCESS, payload: data })
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_EDIT_FAIL,
            payload: error && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const adminProfileEdit = (profileId, item) => async (dispatch, getState) => {
    console.log('profileId, item', profileId, item)
    dispatch({ type: ADMIN_USER_EDIT_REQUEST })
    const { userSignin: { userInfo } } = getState()
    try {
        const { data } = await Axios.put(`/api/users/user/${profileId}`, item, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        })
        dispatch({ type: ADMIN_USER_EDIT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ADMIN_USER_EDIT_FAIL,
            payload: error && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const usersList = () => async (dispatch, getState) => {
    dispatch({ type: USER_LIST_REQUEST })
    const { userSignin: { userInfo } } = getState()
    try {
        const { data } = await Axios.get('/api/users', {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        })
        dispatch({ type: USER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const userDetails = (userId) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST })
    const { userSignin: { userInfo } } = getState()
    try {
        const { data } = await Axios.get(`/api/users/${userId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        })
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const userDelete = (userId) => async (dispatch, getState) => {
    dispatch({ type: USER_DELETE_REQUEST })
    const { userSignin: { userInfo } } = getState()
    console.log('userId', userId)
    try {
        const { data } = await Axios.delete(`/api/users/delete/${userId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        })
        dispatch({ type: USER_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error && error.response.data.message ? error.response.data.message : error.message
        })
    }
}