import React from 'react';
import { Container } from '@material-ui/core';
import Invoice from './Invoice/Invoice';
import InvoicesNav from './InvoicesNav/InvoicesNav';
import { useSelector } from 'react-redux';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);

  console.log(invoices);
  const itemsList = invoices.length ? (
    <div>
      {invoices.map((invoice) => (
        <Invoice key={invoice._id} invoice={invoice} />
      ))}
    </div>
  ) : (
    ''
  );

  return (
    <div>
      <InvoicesNav />
      {itemsList}
    </div>
  );
};

export default Invoices;
