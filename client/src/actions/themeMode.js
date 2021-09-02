export const switchTheme = () => (dispatch) => {
  dispatch({ type: 'SWITCH_THEME' });
};

export const toggleFormShow = () => (dispatch) => {
  dispatch({ type: 'TOGGLE_FORM' });
};

export const handleCurrentId = (id) => (dispatch) => {
  dispatch({ type: 'CURRENT_ID', payload: id !== null ? id : null });
};
