import React, { useState, useEffect } from 'react';
import Invoices from './components/Invoices/Invoices';
import InvoiceDetailes from './components/InvoiceDetailes/InvoiceDetailes';
import Form from './components/Form/Form';
import PermanentDrawerLeft from './components/Drawer/PermanentDraweLeft';
import Navbar from './components/NavbarSmallScreen/Navbar';
import Auth from './components/Auth/Auth';
import { getInvoices } from './actions/invoices';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './Theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Box, Container } from '@material-ui/core';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.globalState.isDarkMode);
  const invoices = useSelector((state) => state.invoices.invoices);
  const invoice = useSelector((state) => state.invoices.invoice);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    dispatch(getInvoices());
  }, [invoices, invoice, dispatch]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Box bgcolor="info.main" className={classes.root}>
          <Navbar />
          <Container className={classes.container}>
            <PermanentDrawerLeft setUser={setUser} />
            <Switch>
              <Route path="/login" exact>
                <Auth setUser={setUser} user={user} />
              </Route>
              <Route path="/" exact>
                {user ? <Invoices /> : <Redirect to="/login" />}
              </Route>
              <Route path="/invoices/:id" exact>
                {user ? <InvoiceDetailes /> : <Redirect to="/login" />}
              </Route>
            </Switch>
            <Form />
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
