import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core';
import { CartWidget } from '../cartWidget/CartWidget.js';
import logo from '../../logo-paw.svg';
import React from 'react';
import { Link } from 'react-router-dom';

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
  cartButton: {
    display: 'flex',
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <Link to={'/'}>
            <div className={classes.logo}>
              <img className={classes.img} src={logo} />
            </div>
          </Link>
          <div className="content">
            <Link to={'/category/juguetes'}>
              <Button>juguetes</Button>
            </Link>
            <Link to={'/category/alimentos'}>
              <Button>alimento</Button>
            </Link>
            <Link to={'/category/adopcion'}>
              <Button>adopción</Button>
            </Link>
          </div>
        </Toolbar>
        <Link className={classes.cartButton} to={'/cart'}>
          <CartWidget />
        </Link>
      </AppBar>
    </>
  );
};

export default NavBar;
