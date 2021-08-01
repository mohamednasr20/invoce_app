import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const TotalFooter = ({ total }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">Amount Due</Typography>
      <Typography className={classes.total}>{`$${total}`}</Typography>
    </div>
  );
};

export default TotalFooter;
