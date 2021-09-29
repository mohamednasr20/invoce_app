import { combineReducers } from 'redux';

import globalState from './globalState';
import invoices from './invoices';
import authReducer from './authReducer';

// eslint-disable-next-line

export default combineReducers({
  globalState,
  invoices,
  authReducer,
});
