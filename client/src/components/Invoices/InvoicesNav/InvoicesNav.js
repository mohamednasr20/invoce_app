import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFormShow } from '../../../actions/genralState';
import {
  Typography,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const InvoicesNav = ({ invoices, status, changeStatus }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const smScreen = useMediaQuery('(max-width:600px)');
  const showForm = useSelector((state) => state.globalState.showForm);

  const addNewInvoice = () => {
    if (!showForm) {
      dispatch(toggleFormShow());
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.header} variant="h4" color="textPrimary">
          Invoices
        </Typography>
        <Typography
          className={classes.caption}
          variant="caption"
          color="textSecondary"
        >
          {smScreen
            ? `Invoices ${invoices.length}`
            : `There are ${invoices.length} total invoices`}
        </Typography>
      </div>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="customized-select-label"
            className={classes.filterLabel}
          >
            {smScreen ? 'Filter' : 'Filter By Name'}
          </InputLabel>
          <Select
            className={classes.select}
            labelId="customized-select-label"
            id="customized-select"
            value={status}
            onChange={changeStatus}
          >
            <MenuItem value="">
              <em>all</em>
            </MenuItem>
            <MenuItem value={'pending'}>pending</MenuItem>
            <MenuItem value={'paid'}>paid</MenuItem>
            <MenuItem value={'draft'}>Draft</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={addNewInvoice}
        >
          <AddCircleIcon className={classes.icon} />
          {smScreen ? 'New' : 'New Invoice'}
        </Button>
      </div>
    </div>
  );
};

export default InvoicesNav;
