import express from 'express';
import Invoice from '../models/invoice.js';

export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    res.status(200).json(invoices);
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
