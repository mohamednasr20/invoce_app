import React from 'react';
import { Container } from '@material-ui/core';
import Invoice from './Invoice/Invoice';
import InvoicesNav from './InvoicesNav/InvoicesNav';

const Invoices = () => {
  return (
    <Container>
      <InvoicesNav />
      <Invoice />
    </Container>
  );
};

export default Invoices;
