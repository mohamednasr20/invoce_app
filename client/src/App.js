import React, { useEffect } from 'react';
import PermanentDrawerLeft from './components/Drawer/PermanentDraweLeftr';
import Invoices from './components/Invoices/Invoices';
import InvoiceDetailes from './components/InvoiceDetailes/InvoiceDetailes';
import Form from './components/Form/Form';
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
    <div className={classes.root}>
      <PermanentDrawerLeft />
      <Invoices />
      <InvoiceDetailes />
      <Form />
    </div>
  );
};

export default App;
