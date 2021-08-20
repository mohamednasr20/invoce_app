import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const ItemGrid = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Typography variant="subtitle1">{item.name} </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">{item.quantity}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">{item.price}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">{item.total}</Typography>
      </Grid>
    </Grid>
  );
};

export default ItemGrid;
