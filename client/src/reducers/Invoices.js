// eslint-disable-next-line

import {
  FETCH_ALL,
  FETCH_INVOICE,
  CREATE_INVOICE,
  DELETE_INVOICE,
  UPDATE_INVOICE,
  INVOICE_STATUS,
} from '../constants/actionTypes';

// eslint-disable-next-line
const invoices = (state = { invoices: [], invoice: {} }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, invoices: action.payload };
    case CREATE_INVOICE:
      return { ...state, inovices: [...state.invoices, action.payload] };
    case FETCH_INVOICE:
      return { ...state, invoice: action.payload };
    case UPDATE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice._id === action.payload._id ? action.payload : invoice
        ),
      };
    case DELETE_INVOICE:
      return {
        state,
        invoices: state.invoices.filter(
          (invoice) => invoice._id !== action.payload
        ),
      };
    case INVOICE_STATUS:
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice._id === action.payload._id ? action.payload : invoice
        ),
        invoice: {
          ...state.invoice,
          status: 'paid',
        },
      };

    default:
      return state;
  }
};

export default invoices;
