import React from 'react';
import { updateInvoiceStatus } from '../../../actions/invoices';
import { toggleFormShow, handleCurrentId } from '../../../actions/genralState';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { Button, Paper } from '@material-ui/core';

const SmallScreenBtns = ({ openDeleteModal }) => {
  const invoice = useSelector((state) => state.invoices.invoice);
  const classes = useStyles();
  const dispatch = useDispatch();

  const onUpdateInvoice = (id) => {
    dispatch(toggleFormShow());
    dispatch(handleCurrentId(id));
  };

  return (
    <Paper className={classes.root}>
      <Button
        className={classes.btn}
        variant="contained"
        onClick={() => onUpdateInvoice(invoice._id)}
      >
        Edit
      </Button>
      <Button
        className={classes.btn}
        variant="contained"
        color="secondary"
        onClick={() => openDeleteModal()}
      >
        Delete
      </Button>

      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={() => dispatch(updateInvoiceStatus(invoice._id))}
      >
        Mark As Paid
      </Button>
    </Paper>
  );
};

export default SmallScreenBtns;
