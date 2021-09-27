import mongoose from 'mongoose';
import Invoice from '../models/invoice.js';

export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    res.status(200).json(invoices);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getInvoice = async (req, res) => {
  const { id } = req.params;

  try {
    const invocie = await Invoice.findById(id);
    res.status(200).json(invocie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createInvoice = async (req, res) => {
  const body = req.body;

  const newInvoice = new Invoice(body);

  try {
    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateInvoice = async (req, res) => {
  const { id } = req.params;

  const body = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Invoice.findByIdAndUpdate(id, body, { new: true });
  res.json(body);
};

export const deleteInvocie = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Invoice.findByIdAndRemove(id);

  res.json({ message: 'Invoice Deleted Successfully' });
};

export const invoiceStatus = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedInvoice = await Invoice.findByIdAndUpdate(
    id,
    { status: 'paid' },
    { new: true }
  );

  res.json(updatedInvoice);
};
