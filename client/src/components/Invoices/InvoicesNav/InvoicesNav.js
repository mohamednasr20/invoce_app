import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './styles';

const InvoicesNav = ({ invoices }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h4" color="textPrimary">
          Invoices
        </Typography>
        <Typography variant="caption" color="textSecondary">
          There are {invoices.length} total invoices
        </Typography>
      </div>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="customized-select-label"
            className={classes.filterLabel}
          >
            Filter By Name
          </InputLabel>
          <Select
            className={classes.select}
            labelId="customized-select-label"
            id="customized-select"
            value={''}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'pending'}>pending</MenuItem>
            <MenuItem value={'paid'}>paid</MenuItem>
            <MenuItem value={'default'}>default</MenuItem>
          </Select>
        </FormControl>
        <Button className={classes.btn} variant="contained" color="primary">
          <AddCircleIcon className={classes.icon} />
          New Invoice
        </Button>
      </div>
    </div>
  );
};

export default InvoicesNav;
