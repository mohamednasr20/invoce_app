import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const addressSchema = mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  postCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const invoiceShema = mongoose.Schema({
  createdAt: {
    type: String,
    required: true,
  },
  paymentDue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paymentTerms: {
    type: Number,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  senderAddress: addressSchema,
  clientAddress: addressSchema,

  items: {
    type: [itemSchema],
    default: undefined,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Invoice = mongoose.model('Invoice', invoiceShema);

export default Invoice;
