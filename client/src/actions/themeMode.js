export const switchTheme = () => (dispatch) => {
  dispatch({ type: 'SWITCH_THEME' });
};

export const toggleFormShow = () => (dispatch) => {
  dispatch({ type: 'TOGGLE_FORM' });
};
