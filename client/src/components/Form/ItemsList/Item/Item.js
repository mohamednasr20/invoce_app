import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

const Item = ({ item, handleChangeItem }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4}>
        <TextField
          name="name"
          value={item.name}
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => handleChangeItem(e, item)}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          name="quantity"
          value={item.quantity}
          variant="outlined"
          size="small"
          onChange={(e) => handleChangeItem(e, item)}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          name="price"
          value={item.price}
          variant="outlined"
          size="small"
          onChange={(e) => handleChangeItem(e, item)}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          name="total"
          value={
            item.quantity && item.price
              ? Number(item.quantity) * Number(item.price)
              : ''
          }
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={1} className={classes.iconGrid}>
        <DeleteIcon className={classes.icon} />
      </Grid>
    </Grid>
  );
};

export default Item;
