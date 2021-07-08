import React from 'react';
import ItemsList from './ItemsList/ItemsList';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4">New Invoice</Typography>

      <form>
        <Typography variant="h5" className={classes.heading} color="primary">
          Bill From
        </Typography>
        <div className={classes.label}>Street Address</div>
        <TextField variant="outlined" size="small" fullWidth />
        <div className={classes.flex}>
          <div className={classes.space}>
            <div className={classes.label}>City</div>
            <TextField variant="outlined" size="small" />
          </div>
          <div className={classes.space}>
            <div className={classes.label}>Post Code</div>
            <TextField variant="outlined" size="small" />
          </div>
          <div className={classes.space}>
            <div className={classes.label}>Country</div>
            <TextField variant="outlined" size="small" />
          </div>
        </div>

        <Typography variant="h5" className={classes.heading} color="primary">
          Bill to
        </Typography>
        <div className={classes.label}>Client's Name</div>
        <TextField variant="outlined" size="small" fullWidth />
        <div className={classes.label}>Client's Email</div>
        <TextField variant="outlined" size="small" fullWidth />
        <div className={classes.label}>Street Address</div>
        <TextField variant="outlined" size="small" fullWidth />
        <div className={classes.flex}>
          <div className={classes.space}>
            <div className={classes.label}>City</div>
            <TextField variant="outlined" size="small" />
          </div>
          <div className={classes.space}>
            <div className={classes.label}>Post Code</div>
            <TextField variant="outlined" size="small" />
          </div>
          <div className={classes.space}>
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

            <Select value={''} autoWidth>
              <MenuItem value={''}>
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

        <ItemsList />
        <div className={classes.btnGroup}>
          <Button variant="contained">Discard</Button>
          <div className={classes.btnRight}>
            <Button className={classes.btn} variant="outlined">
              Save As Draft
            </Button>
            <Button className={classes.btn} variant="contained" color="primary">
              Save And Send
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Form;
