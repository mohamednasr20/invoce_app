import express from 'express';
import {
  createInvoice,
  deleteInvocie,
  getInvoice,
  getInvoices,
  updateInvoice,
  invoiceStatus,
} from '../controllers/invoices.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getInvoices);
router.get('/:id', getInvoice);
router.post('/', auth, createInvoice);
router.put('/:id', auth, updateInvoice);
router.delete('/:id', auth, deleteInvocie);
router.patch('/:id/invoiceStatus', auth, invoiceStatus);

export default router;
