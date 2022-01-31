import { makeStyles } from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
  cartbox: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cart: {
    // width: '100%',
    backgroundColor: 'grey',
  },
});

export const CartWidget = () => {
  const classes = useStyles();
  return (
    <div className={classes.cartbox}>
      <IconButton aria-label="add to shopping cart" className={classes.cart}>
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
};
