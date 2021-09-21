import React from 'react';
import { updateInvoiceStatus } from '../../../actions/invoices';
import { toggleFormShow, handleCurrentId } from '../../../actions/genralState';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper } from '@material-ui/core';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const DetailesHeader = ({ openDeleteModal }) => {
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.Invoices.invoice);
  const classes = useStyles({ invoice });
  const smScreen = useMediaQuery('(max-width:600px)');

  const onUpdateInvoice = (id) => {
    dispatch(toggleFormShow());
    dispatch(handleCurrentId(id));
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.statusFlex}>
        <div>Status</div>
        <div className={classes.status}>{invoice.status}</div>
      </div>
      {!smScreen && (
        <div>
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
        </div>
      )}
    </Paper>
  );
};

export default DetailesHeader;
