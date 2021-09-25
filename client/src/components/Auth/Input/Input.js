import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './styles';

const Input = ({ name, value, label, type, half = false, handleChange }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={half ? 6 : 12} className={classes.root}>
      <TextField
        name={name}
        value={value}
        type={type}
        label={label}
        variant="outlined"
        fullWidth
        onChange={handleChange}
        size="small"
      />
    </Grid>
  );
};

export default Input;
