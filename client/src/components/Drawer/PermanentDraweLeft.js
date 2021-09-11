import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';
import avatar from '../../assets/image-avatar.jpg';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from '../../assets/logo.svg';
import { switchTheme } from '../../actions/themeMode';
import { useDispatch, useSelector } from 'react-redux';

const PermanentDrawerLeft = () => {
  const classes = useStyles();
  const lgScreen = useMediaQuery('(min-width:960px)');
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.GlobalState.isDarkMode);

  const toggleMode = () => {
    dispatch(switchTheme());
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

          <Avatar src={avatar} alt="avatar" className={classes.avatar} />
        </Drawer>
      )}
    </div>
  );
};

export default PermanentDrawerLeft;
