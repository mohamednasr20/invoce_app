import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

const Item = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4}>
        <TextField variant="outlined" size="small" fullWidth />
      </Grid>
      <Grid item xs={2}>
        <TextField variant="outlined" size="small" />
      </Grid>
      <Grid item xs={3}>
        <TextField variant="outlined" size="small" />
      </Grid>
      <Grid item xs={2}>
        <TextField variant="outlined" size="small" />
      </Grid>
      <Grid item xs={1} className={classes.iconGrid}>
        <DeleteIcon className={classes.icon} />
      </Grid>
    </Grid>
  );
};

export default Item;
