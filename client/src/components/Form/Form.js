import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4">New Invoice</Typography>

      <form>
        <Typography variant="h6" color="primary">
          Bill From
        </Typography>
        <div className={classes.label}>Street Address</div>
        <TextField variant="outlined" size="small" fullWidth />
        <div className={classes.flex}>
          <div>
            <div className={classes.label}>City</div>
            <TextField variant="outlined" size="small" />
          </div>
          <div>
            <div className={classes.label}>Post Code</div>
            <TextField variant="outlined" size="small" />
          </div>
          <div>
            <div className={classes.label}>Country</div>
            <TextField variant="outlined" size="small" />
          </div>
        </div>

        <Typography variant="h6" color="primary">
          Bill to
        </Typography>
        <div className={classes.label}>Client's Name</div>
        <TextField variant="outlined" size="small" fullWidth />
        <div className={classes.label}>Client's Email</div>
        <TextField variant="outlined" size="small" fullWidth />
        <div className={classes.label}>Street Address</div>
        <TextField variant="outlined" size="small" fullWidth />
        <div className={classes.flex}>
          <div>
            <div className={classes.label}>City</div>
            <TextField variant="outlined" size="small" />
          </div>
          <div>
            <div className={classes.label}>Post Code</div>
            <TextField variant="outlined" size="small" />
          </div>
          <div>
            <div className={classes.label}>Country</div>
            <TextField variant="outlined" size="small" />
          </div>
        </div>

        <div className={classes.flex}>
          <div>
            <div className={classes.label}>Invoice Date</div>
            <TextField variant="outlined" size="small" fullWidth />
          </div>
          <div>
            <div className={classes.label}>Payment terms</div>

            <Select autoWidth="false">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={30}>Next 30 days</MenuItem>
              <MenuItem value={14}>Next 14 days</MenuItem>
              <MenuItem value={7}>Next 7 day</MenuItem>
              <MenuItem value={1}>Next 1 day</MenuItem>
            </Select>
          </div>
        </div>
        <div className={classes.label}>Payment Description</div>
        <TextField variant="outlined" size="small" fullWidth />
      </form>
    </Container>
  );
};

export default Form;
