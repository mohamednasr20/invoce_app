import React, { useState } from 'react';
import Invoice from './Invoice/Invoice';
import InvoicesNav from './InvoicesNav/InvoicesNav';
import EmptyInvoicesList from './EmptyInvoicesList/EmptyInvoicesList';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices.invoices);
  const classes = useStyles();
  const [status, setStatus] = useState('');

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const currentInvoices =
    status === ''
      ? invoices
      : invoices.filter((invoice) => invoice.status === status);

  const invoicesList = currentInvoices.length ? (
    <div className={classes.invoicesList}>
      {currentInvoices.map((invoice) => (
        <Invoice key={invoice._id} invoice={invoice} />
      ))}
    </div>
  ) : (
    <EmptyInvoicesList />
  );

  return (
    <div className={classes.root}>
      <InvoicesNav
        invoices={currentInvoices}
        status={status}
        changeStatus={handleChangeStatus}
      />
      {invoicesList}
    </div>
  );
};

export default Invoices;
