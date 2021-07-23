import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './styles';

const Invoice = ({ invoice }) => {
  const classes = useStyles();

  const invoiceId = invoice._id.slice(18);

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          {`#${invoiceId}`}
        </Grid>
        <Grid item xs={3}>
          {`Due ${invoice.paymentDue}`}
        </Grid>
        <Grid item xs={2}>
          {invoice.clientName}
        </Grid>
        <Grid item xs={2}>
          {`$${invoice.total}`}
        </Grid>
        <Grid item xs={2}>
          {invoice.status}
        </Grid>
        <Grid item xs={1} className={classes.icon}>
          <ArrowForwardIosIcon />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Invoice;
