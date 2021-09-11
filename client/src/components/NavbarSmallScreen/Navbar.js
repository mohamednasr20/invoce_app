import React from 'react';
import useStyles from './styles';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/image-avatar.jpg';
import { switchTheme } from '../../actions/themeMode';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mDScreen = useMediaQuery('(max-width:960px)');

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.GlobalState.isDarkMode);

  const toggleMode = () => {
    dispatch(switchTheme());
  };

  return (
    <>
      {mDScreen && (
        <div className={classes.root}>
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
        </div>
      )}
    </>
  );
};

export default Navbar;
