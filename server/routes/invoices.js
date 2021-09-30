import express from 'express';
import {
  createInvoice,
  deleteInvocie,
  getInvoice,
  getInvoices,
  updateInvoice,
  invoiceStatus,
} from '../controllers/invoices.js';

const router = express.Router();

router.get('/', getInvoices);
router.get('/:id', getInvoice);
router.post('/', createInvoice);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvocie);
router.patch('/:id/invoiceStatus', invoiceStatus);

export default router;
