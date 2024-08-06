import axios from 'axios';
import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './types';

export const signUpStart = (userData) => ({
  type: SIGN_UP_START,
  payload: userData,
});

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailure = (errorMessage) => ({
  type: SIGN_UP_FAILURE,
  payload: errorMessage,
});


export const signUpUser = (userData) => {
  return async (dispatch) => {
    dispatch(signUpStart(userData));
    try {
      const response = await axios.post("http://localhost:7000/user/registration", userData);
      console.log(response.data);
      dispatch(signUpSuccess());
    } catch (error) {
      dispatch(signUpFailure(error.message));
    }
  };
};


