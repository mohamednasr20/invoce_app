import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const ItemsListHeader = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} sm={6}>
        <Typography variant="caption">Item Name</Typography>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Typography variant="caption">QTY.</Typography>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Typography variant="caption">Price</Typography>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Typography variant="caption">Total</Typography>
      </Grid>
    </Grid>
  );
};

export default ItemsListHeader;
