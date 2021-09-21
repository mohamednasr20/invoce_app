// eslint-disable-next-line

import {
  SWITCH_THEME,
  TOGGLE_FORM,
  CURRENT_ID,
} from '../constants/actionTypes';

const initalState = {
  isDarkMode: false,
  showForm: false,
  currentId: null,
};

// eslint-disable-next-line
export default (state = initalState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, isDarkMode: !state.isDarkMode };
    case TOGGLE_FORM:
      return { ...state, showForm: !state.showForm };
    case CURRENT_ID:
      return { ...state, currentId: action.payload };
    default:
      return state;
  }
};
