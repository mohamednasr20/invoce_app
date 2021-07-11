import React from 'react';
import { Container } from '@material-ui/core';
import Invoice from './Invoice/Invoice';
import InvoicesNav from './InvoicesNav/InvoicesNav';
import { useSelector } from 'react-redux';

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);

  console.log(invoices);

  return (
    <Container>
      <InvoicesNav />
      <Invoice />
    </Container>
  );
};

export default Invoices;
