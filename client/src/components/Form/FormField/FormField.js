import React from 'react';
import { TextValidator } from 'react-material-ui-form-validator';

const FormField = ({
  name,
  value,
  onChange,
  validators = ['required'],
  errorMessages = ['this field is required'],
  fullWidth = false,
  type = 'text',
}) => {
  return (
    <TextValidator
      name={name}
      value={value}
      variant="outlined"
      size="small"
      onChange={onChange}
      fullWidth={fullWidth}
      type={type}
      validators={validators}
      errorMessages={errorMessages}
    />
  );
};

export default FormField;
