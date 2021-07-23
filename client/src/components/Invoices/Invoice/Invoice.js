import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
const Invoice = ({ invoice }) => {
  return (
    <Paper>
      <ListItem>
        <ListItemText primary={`#${invoice._id}`} />
        <ListItemText primary={invoice.paymentDue} />
        <ListItemText primary={invoice.clientName} />
        <ListItemText primary={invoice.total} />
        <ListItemText primary={invoice.status} />
      </ListItem>
    </Paper>
  );
};

export default Invoice;
