import React from 'react';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextValidator } from 'react-material-ui-form-validator';
import useStyles from './styles';

const Item = ({ item, handleChangeItem, deleteItem }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4}>
        <TextValidator
          name="name"
          value={item.name}
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => handleChangeItem(e, item)}
          validators={['required']}
          errorMessages={['required']}
        />
      </Grid>
      <Grid item xs={2}>
        <TextValidator
          name="quantity"
          value={item.quantity}
          variant="outlined"
          size="small"
          onChange={(e) => handleChangeItem(e, item)}
          validators={['required', 'minNumber: 1']}
          errorMessages={['required', "quantity can't be  0"]}
        />
      </Grid>
      <Grid item xs={3}>
        <TextValidator
          name="price"
          value={item.price}
          variant="outlined"
          size="small"
          onChange={(e) => handleChangeItem(e, item)}
          validators={['required', 'minNumber: 1']}
          errorMessages={['required', "pric can't be 0"]}
        />
      </Grid>
      <Grid item xs={2}>
        <TextValidator
          name="total"
          value={
            item.quantity && item.price
              ? Number(item.quantity) * Number(item.price)
              : ''
          }
          variant="outlined"
          size="small"
          validators={['required']}
          errorMessages={['required']}
        />
      </Grid>
      <Grid item xs={1} className={classes.iconGrid}>
        <DeleteIcon
          className={classes.icon}
          onClick={() => deleteItem(item._id)}
        />
      </Grid>
    </Grid>
  );
};

export default Item;
