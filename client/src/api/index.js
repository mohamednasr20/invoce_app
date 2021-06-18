import axios from 'axios';

const url = 'http://localhost:5000/invoices';

export const fetchInvoices = () => axios.get(url);
export const createInvoice = (newIvoice) => axios.post(url, newIvoice);
export const fetchInvoice = (id) => axios.get(`${url}/${id}`);
export const deleteInvoice = (id) => axios.delete(`${url}/${id}`);
export const updateInvoice = (id, updatedInvoice) =>
  axios.put(`${url}/${id}`, updatedInvoice);
