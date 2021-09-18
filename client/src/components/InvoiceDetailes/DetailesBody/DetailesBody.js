import React from 'react';
import ItemsList from '../ItemsList/ItemsList';
import { Typography, Paper, Grid } from '@material-ui/core';
import useStyles from './styles';

const DetailesBody = ({ invoice }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item sm={9} xs={12}>
          <Typography
            variant="h6"
            className={classes.bold}
          >{`#${invoice._id.slice(18)}`}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.description}
          </Typography>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.senderAddress.street}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.senderAddress.city}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.senderAddress.postCode}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.senderAddress.country}
          </Typography>
        </Grid>

        <Grid item sm={4} xs={6}>
          <Typography
            variant="subtitle1"
            className={classes.label}
            color="textSecondary"
          >
            Invoice Date
          </Typography>
          <Typography variant="h6" className={classes.bold}>
            {invoice.createdAt}
          </Typography>
          <Typography
            className={classes.label}
            variant="subtitle1"
            color="textSecondary"
          >
            Payment Due
          </Typography>
          <Typography variant="h6" className={classes.bold}>
            {invoice.paymentDue}
          </Typography>
        </Grid>

        <Grid item sm={3} xs={6}>
          <Typography
            variant="subtitle1"
            className={classes.label}
            color="textSecondary"
          >
            Bill To
          </Typography>
          <Typography variant="h6" className={classes.bold}>
            {invoice.clientName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.clientAddress.street}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.clientAddress.city}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.clientAddress.postCode}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.clientAddress.country}
          </Typography>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Typography
            variant="subtitle1"
            className={classes.label}
            color="textSecondary"
          >
            Sent To
          </Typography>
          <Typography variant="h6" className={classes.bold}>
            {invoice.clientEmail}
          </Typography>
        </Grid>
      </Grid>

      <ItemsList items={invoice.items} total={invoice.total} />
    </Paper>
  );
};

export default DetailesBody;
