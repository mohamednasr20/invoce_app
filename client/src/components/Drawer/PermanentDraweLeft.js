import React from 'react';
import { useHistory } from 'react-router-dom';
import { Drawer, Avatar, Button } from '@material-ui/core';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';
import logo from '../../assets/logo.svg';
import { switchTheme } from '../../actions/genralState';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const PermanentDrawerLeft = () => {
  const classes = useStyles();
  const lgScreen = useMediaQuery('(min-width:960px)');
  const dispatch = useDispatch();
  const history = useHistory();
  const isDarkMode = useSelector((state) => state.globalState.isDarkMode);
  const authData = useSelector((state) => state.authReducer.authData);

  const toggleMode = () => {
    dispatch(switchTheme());
  };

  const handleLogout = () => {
    dispatch(logout());

    history.push('/auth');
  };

  return (
    <div className={classes.root}>
      {lgScreen && (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.logoDiv}>
            <img src={logo} alt="logo" className={classes.logo} />
          </div>

          <img
            src={isDarkMode ? iconSun : iconMoon}
            alt="moon"
            className={classes.icons}
            onClick={() => toggleMode()}
          />

          {authData && (
            <Avatar alt="avatar" className={classes.avatar}>
              {authData?.result.name.charAt(0)}
            </Avatar>
          )}
          {authData && (
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              logout
            </Button>
          )}
        </Drawer>
      )}
    </div>
  );
};

export default PermanentDrawerLeft;
