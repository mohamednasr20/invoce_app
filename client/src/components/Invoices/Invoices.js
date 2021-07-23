import React from 'react';
import { Container } from '@material-ui/core';
import Invoice from './Invoice/Invoice';
import InvoicesNav from './InvoicesNav/InvoicesNav';
import List from '@material-ui/core/List';
import { useSelector } from 'react-redux';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);

  console.log(invoices);
  const itemsList = invoices.length ? (
    <List>
      {invoices.map((invoice) => (
        <Invoice key={invoice._id} invoice={invoice} />
      ))}
    </List>
  ) : (
    ''
  );

  return (
    <Container>
      <InvoicesNav />
      {itemsList}
    </Container>
  );
};

export default Invoices;
