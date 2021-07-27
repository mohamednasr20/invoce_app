import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';

const DetailesHeader = ({ invoice }) => {
  const classes = useStyles({ invoice });

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
        <Button className={classes.btn} variant="contained" color="secondary">
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
