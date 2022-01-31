import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core';
import { CartWidget } from '../cartWidget/CartWidget.js';
import logo from '../../logo-paw.svg';
import React from 'react';

const useStyles = makeStyles({
  bar: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    position: 'static',
  },
  toolbar: {
    display: 'flex',
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    display: 'flex',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    display: 'flex',
    width: '10vh',
  },
  content: {
    width: '80%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo}>
            <img className={classes.img} src={logo} />
          </div>
          <div className="content">
            <Button>informacion</Button>
            <Button>tienda</Button>
            <Button>adopción</Button>
          </div>
        </Toolbar>
        <CartWidget />
      </AppBar>
    </>
  );
};

export default NavBar;
