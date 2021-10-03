import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fullstack-invoices-project.herokuapp.com',
});

export const fetchInvoices = () => API.get('/invoices');
export const createInvoice = (newIvoice) => API.post('/invoices', newIvoice);
export const fetchInvoice = (id) => API.get(`/invoices/${id}`);
export const deleteInvoice = (id) => API.delete(`/invoices/${id}`);
export const updateInvoice = (id, updatedInvoice) =>
  API.put(`/invoices/${id}`, updatedInvoice);
export const updateInvoiceState = (id) =>
  API.patch(`/invoices/${id}/invoiceStatus`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
