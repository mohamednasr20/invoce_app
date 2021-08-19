import React from 'react';
import ItemsList from '../ItemsList/ItemsList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

const DetailesBody = ({ invoice }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.flex}>
        <div>
          <Typography
            variant="h6"
            className={classes.bold}
          >{`#${invoice._id.slice(18)}`}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {invoice.description}
          </Typography>
        </div>
        <div>
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
        </div>
      </div>
      <div className={classes.flex}>
        <div>
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
            className={`${classes.paymentDue} ${classes.label}`}
            variant="subtitle1"
            color="textSecondary"
          >
            Payment Due
          </Typography>
          <Typography variant="h6" className={classes.bold}>
            {invoice.paymentDue}
          </Typography>
        </div>
        <div>
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
          <Typography variant="subtitle1" className={classes.bold}>
            {invoice.clientAddress.street}
          </Typography>
          <Typography variant="subtitle1" className={classes.bold}>
            {invoice.clientAddress.city}
          </Typography>
          <Typography variant="subtitle1" className={classes.bold}>
            {invoice.clientAddress.postCode}
          </Typography>
          <Typography variant="subtitle1" className={classes.bold}>
            {invoice.clientAddress.country}
          </Typography>
        </div>
        <div>
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
        </div>
      </div>
      <ItemsList items={invoice.items} total={invoice.total} />
    </Paper>
  );
};

export default DetailesBody;
