import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import { deleteInvoice } from '../../../actions/invoices';
import { toggleFormShow, handleCurrentId } from '../../../actions/themeMode';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const DetailesHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const invoice = useSelector((state) => state.GlobalState.invoice);
  const classes = useStyles({ invoice });

  const onDeleteInvoice = (id) => {
    history.push('/');
    dispatch(deleteInvoice(id));
  };

  const onUpdateInvoice = (id) => {
    dispatch(toggleFormShow());
    dispatch(handleCurrentId(id));
    console.log(invoice);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.statusFlex}>
        <div>Status</div>
        <div className={classes.status}>{invoice.status}</div>
      </div>

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
          onClick={() => onDeleteInvoice(invoice._id)}
        >
          Delete
        </Button>

        <Button className={classes.btn} variant="contained" color="primary">
          Mark As Paid
        </Button>
      </div>
    </Paper>
  );
};

export default DetailesHeader;
