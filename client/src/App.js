import React from 'react';
import PermanentDrawerLeft from './components/Drawer/PermanentDraweLeftr';
import Invoices from './components/Invoices/Invoices';
import InvoiceDetailes from './components/InvoiceDetailes/InvoiceDetailes';
import Form from './components/Form/Form';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

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
