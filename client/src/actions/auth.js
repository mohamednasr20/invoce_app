import { AUTH, LOGOUT } from '../constants/actionTypes';
import * as api from '../api';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: 'ERROR', payload: error.response.data });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
