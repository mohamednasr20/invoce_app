import React from 'react';
import PermanentDrawerLeft from './components/Drawer/PermanentDraweLeftr';
import LogoSvg from './assets/logo.svg';

const App = () => {
  return (
    <>
      <PermanentDrawerLeft />
      <img src={LogoSvg} alt="logo" height="60" />
    </>
  );
};

export default App;
