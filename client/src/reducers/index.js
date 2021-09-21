import { combineReducers } from 'redux';

import GlobalState from './GlobalState';
import Invoices from './Invoices';

// eslint-disable-next-line

export default combineReducers({
  GlobalState,
  Invoices,
});
