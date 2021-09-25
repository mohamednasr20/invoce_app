import React, { useState } from 'react';
import Input from './Input/Input';
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Grid,
  Button,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => setIsSignUp(!isSignUp);

  return (
    <Container component="main" className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" className={classes.header}>
          {isSignUp ? 'Sign up' : 'Sign in'}
        </Typography>

        <form className={classes.form}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  value=""
                  type="text"
                  label="First Name"
                  half
                />
                <Input
                  name="lastName"
                  value=""
                  type="text"
                  label="Last Name"
                  half
                />
              </>
            )}
            <Input name="email" value="" type="email" label="Email" />
            <Input name="password" value="" type="passowrd" label="Password" />
            {isSignUp && (
              <Input
                name="confirmPassowrd"
                value=""
                type="password"
                label="Confirm Password"
              />
            )}
          </Grid>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            fullWidth
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
        <Typography
          variant="subtitle1"
          className={classes.signState}
          onClick={handleSignUp}
        >
          {isSignUp
            ? 'Have an acount ? sign in'
            : "Don't have an acount ? sign up"}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Auth;
