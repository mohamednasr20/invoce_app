import React, { useEffect } from 'react';
import PermanentDrawerLeft from './components/Drawer/PermanentDraweLeftr';
import Invoices from './components/Invoices/Invoices';
import InvoiceDetailes from './components/InvoiceDetailes/InvoiceDetailes';
import Form from './components/Form/Form';
import Container from '@material-ui/core/Container';
import { getInvoices } from './actions/invoices';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  return (
    <Container className={classes.root}>
      <PermanentDrawerLeft />
      <Invoices />
      <InvoiceDetailes />
      <Form />
    </Container>
  );
};

export default App;
