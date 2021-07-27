import React from 'react';
import Invoice from './Invoice/Invoice';
import InvoicesNav from './InvoicesNav/InvoicesNav';
import EmptyInvoicesList from './EmptyInvoicesList/EmptyInvoicesList';
import { useSelector } from 'react-redux';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices.invoices);

  console.log(invoices);
  const itemsList = invoices.length ? (
    <div>
      {invoices.map((invoice) => (
        <Invoice key={invoice._id} invoice={invoice} />
      ))}
    </div>
  ) : (
    <EmptyInvoicesList />
  );

  return (
    <div>
      <InvoicesNav invoices={invoices} />
      {itemsList}
    </div>
  );
};

export default Invoices;
