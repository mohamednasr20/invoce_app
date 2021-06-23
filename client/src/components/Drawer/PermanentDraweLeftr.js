import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';

import avatar from '../../assets/image-avatar.jpg';
import iconMoon from '../../assets/icon-moon.svg';
import logo from '../../assets/logo.svg';

const drawerWidth = 103;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#252945',
  },

  logoDiv: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: 103,
    height: 103,
    background: '#7C5DFA',
    borderRadius: ' 0 20px 20px 0',
    marginBottom: 'auto',
  },
  logo: {
    width: 40,
    height: 37,
  },

  icons: {
    width: 20,
    height: 20,
    marginBottom: 20,
    display: 'block',
    margin: 'auto',
  },

  avatar: {
    margin: '20px auto',
  },
}));

const PermanentDrawerLeft = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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

        <img src={iconMoon} alt="moon" className={classes.icons} />

        <Avatar src={avatar} alt="avatar" className={classes.avatar} />
      </Drawer>
    </div>
  );
};

export default PermanentDrawerLeft;
