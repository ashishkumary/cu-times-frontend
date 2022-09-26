import Axios from "axios";
import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_FAIL,
  NEWS_LIST_SUCCESS,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_FAIL,
  NEWS_DETAILS_SUCCESS,
  NEWS_ADD_REQUEST,
  NEWS_ADD_FAIL,
  NEWS_ADD_SUCCESS,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_FAIL,
  NEWS_EDIT_REQUEST,
  NEWS_EDIT_SUCCESS,
  NEWS_EDIT_FAIL,
} from "../constants/newsConstant";

export const newsCollections =
  ({ link = "" }) =>
  async (dispatch) => {
    dispatch({ type: NEWS_LIST_REQUEST });
    try {
      const { data } = await Axios.get(
        `https://cu-times.herokuapp.com/api/news?link=${link}`
      );
      dispatch({ type: NEWS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEWS_LIST_FAIL,
        payload:
          error && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const newsDetails = (productId) => async (dispatch) => {
  dispatch({ type: NEWS_DETAILS_REQUEST });
  try {
    const { data } = await Axios.get(
      `https://cu-times.herokuapp.com/api/news/${productId}`
    );
    dispatch({ type: NEWS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_DETAILS_FAIL,
      payload:
        error && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNews = (item) => async (dispatch, getState) => {
  dispatch({ type: NEWS_ADD_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "https://cu-times.herokuapp.com/api/news/addnews",
      item,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: NEWS_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_ADD_FAIL,
      payload:
        error && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const newsDelete = (newsId) => async (dispatch, getState) => {
  dispatch({ type: NEWS_DELETE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(
      `https://cu-times.herokuapp.com/api/news/delete/${newsId}`,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: NEWS_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_DELETE_FAIL,
      payload:
        error && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateNews = (newsId, item) => async (dispatch, getState) => {
  console.log("id", item);
  dispatch({ type: NEWS_EDIT_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `https://cu-times.herokuapp.com/api/news/newsedit/${newsId}`,
      item,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({ type: NEWS_EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEWS_EDIT_FAIL,
      payload:
        error && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
