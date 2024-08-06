import axios from "axios";
import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './types';

export const signInStart = (data) => ({
  type: SIGN_IN_START,
  payload: data,
});

export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
});

export const signInFailure = (errorMessage) => ({
  type: SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signInUser = (userName, password1) => {
  return async (dispatch) => {
    dispatch(signInStart(userName, password1));
    try {
      const response = await axios.post("http://localhost:7000/user/login", {
        userName: userName,
        password1: password1
      });
      if (response.data && response.data.success) {
        console.log(response.data);
        dispatch(signInSuccess());
      } else {
        dispatch(signInFailure("Invalid credentials"));
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
};