import React, { useState, useEffect } from 'react';
import PermanentDrawerLeft from './components/Drawer/PermanentDraweLeftr';
import Box from '@material-ui/core/Box';
import Invoices from './components/Invoices/Invoices';
import InvoiceDetailes from './components/InvoiceDetailes/InvoiceDetailes';
import Form from './components/Form/Form';
import Container from '@material-ui/core/Container';
import { getInvoices } from './actions/invoices';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from './styles';
import { darkTheme, lightTheme } from './Theme';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.GlobalState.isDarkMode);

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box bgcolor="secondary.main" className={classes.root}>
        <Container className={classes.container}>
          <PermanentDrawerLeft />
          <Invoices />
          <InvoiceDetailes />
          <Form />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
