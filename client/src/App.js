import React, { useEffect } from 'react';
import Invoices from './components/Invoices/Invoices';
import InvoiceDetailes from './components/InvoiceDetailes/InvoiceDetailes';
import Form from './components/Form/Form';
import { getInvoices } from './actions/invoices';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PermanentDrawerLeft from './components/Drawer/PermanentDraweLeftr';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.GlobalState.isDarkMode);
  const invoices = useSelector((state) => state.GlobalState.invoices);

  useEffect(() => {
    dispatch(getInvoices());
  }, [invoices, dispatch]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Box bgcolor="info.main" className={classes.root}>
          <Container className={classes.container}>
            <PermanentDrawerLeft />
            <Switch>
              <Route path="/" exact>
                <Invoices />
              </Route>
              <Route path="/invoices/:id" exact>
                <InvoiceDetailes />
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
