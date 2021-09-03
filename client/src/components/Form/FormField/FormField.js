import React from 'react';
import { TextField } from '@material-ui/core';

const FormField = ({
  name,
  value,
  fullWidth = false,
  onChange,
  type = 'text',
}) => {
  return (
    <TextField
      name={name}
      value={value}
      variant="outlined"
      size="small"
      onChange={onChange}
      fullWidth={fullWidth}
      type={type}
    />
  );
};

export default FormField;
