import { SIGNUP, SIGNIN } from '../constants/actionTypes';
import * as api from '../api';

export const singUp = (formData, history) => async (dispatch) => {
  try {
    //    singUp the user
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const singIn = (formData, history) => async (dispatch) => {
  try {
    //   singUp the user
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};
