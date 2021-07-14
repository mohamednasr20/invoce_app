import * as api from '../api';

export const getInvoices = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInvoices();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createInvoice = (invoice) => async (dispatch) => {
  try {
    const { data } = await api.createInvoice(invoice);
    dispatch({ type: 'CREATEINVOICE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
