import React from 'react';
import { Grid } from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';
import useStyles from './styles';

const Input = ({
  name,
  value,
  label,
  type,
  handleChange,
  half = false,
  error = false,
  helperText = '',
  validators = ['required'],
  errorMessages = ["can't be empty"],
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={half ? 6 : 12} className={classes.root}>
      <TextValidator
        name={name}
        value={value}
        type={type}
        label={label}
        variant="outlined"
        fullWidth
        onChange={handleChange}
        size="small"
        error={error}
        helperText={helperText}
        validators={validators}
        errorMessages={errorMessages}
      />
    </Grid>
  );
};

export default Input;
