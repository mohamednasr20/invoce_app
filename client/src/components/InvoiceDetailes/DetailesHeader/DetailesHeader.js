import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import { deleteInvoice } from '../../../actions/invoices';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

const DetailesHeader = ({ invoice }) => {
  const classes = useStyles({ invoice });
  const dispatch = useDispatch();
  const history = useHistory();
  const invoices = useSelector((state) => state.GlobalState.invoices);

  const onDeleteInvoice = (id) => {
    history.push('/');
    dispatch(deleteInvoice(id));
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.statusFlex}>
        <div>Status</div>
        <div className={classes.status}>{invoice.status}</div>
      </div>

      <div>
        <Button className={classes.btn} variant="contained">
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
