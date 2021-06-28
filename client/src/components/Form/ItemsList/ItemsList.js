import React from 'react';
import Item from './Item/Item';
import { Typography, Grid, Button } from '@material-ui/core';

import useStyles from './styles';

const ItemsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="primary">
        Item List
      </Typography>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={5}>
          <Typography>Item Name</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>Qty.</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Price</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Total</Typography>
        </Grid>
      </Grid>
      <Item />
      <Item />
      <Item />
      <Item />
      <Button variant="contained" fullWidth className={classes.btn}>
        Add New Item
      </Button>
    </div>
  );
};

export default ItemsList;
