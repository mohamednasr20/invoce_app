import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

const DetailesBody = ({ invoice }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.flex}>
        <div>
          <Typography variant="h6">{`#${invoice._id.slice(18)}`}</Typography>
          <Typography variant="subtitle1">{invoice.description}</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">
            {invoice.senderAddress.street}
          </Typography>
          <Typography variant="subtitle1">
            {invoice.senderAddress.city}
          </Typography>
          <Typography variant="subtitle1">
            {invoice.senderAddress.postCode}
          </Typography>
          <Typography variant="subtitle1">
            {invoice.senderAddress.country}
          </Typography>
        </div>
      </div>
      <div className={classes.flex}>
        <div>
          <Typography variant="subtitle1" className={classes.label}>
            Invoice Date
          </Typography>
          <Typography variant="h6">{invoice.createdAt}</Typography>
          <Typography
            className={`${classes.paymentDue} ${classes.label}`}
            variant="subtitle1"
          >
            Payment Due
          </Typography>
          <Typography variant="h6">{invoice.paymentDue}</Typography>
        </div>
        <div>
          <Typography variant="subtitle1" className={classes.label}>
            Bill To
          </Typography>
          <Typography variant="h6">{invoice.clientName}</Typography>
          <Typography variant="subtitle1">
            {invoice.clientAddress.street}
          </Typography>
          <Typography variant="subtitle1">
            {invoice.clientAddress.city}
          </Typography>
          <Typography variant="subtitle1">
            {invoice.clientAddress.postCode}
          </Typography>
          <Typography variant="subtitle1">
            {invoice.clientAddress.country}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" className={classes.label}>
            Sent To
          </Typography>
          <Typography variant="h6">{invoice.clientEmail}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default DetailesBody;
