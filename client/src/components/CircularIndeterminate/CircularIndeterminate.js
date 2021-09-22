import React from 'react';
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const CircularIndeterminate = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </div>
  );
};

export default CircularIndeterminate;
