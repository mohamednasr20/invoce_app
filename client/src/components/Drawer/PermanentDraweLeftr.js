import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';
import avatar from '../../assets/image-avatar.jpg';
import iconMoon from '../../assets/icon-moon.svg';
import logo from '../../assets/logo.svg';

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
