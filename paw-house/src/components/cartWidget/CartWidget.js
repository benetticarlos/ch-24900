import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from '../../context/CartContext';

const useStyles = makeStyles({
  cartbox: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cart: {
    backgroundColor: 'grey',
  },
  itemsCounter: {
    textDecoration: 'none',
    color: 'black',
    placeSelf: 'center',
  },
});

export const CartWidget = () => {
  const classes = useStyles();
  const { totalItems } = useContext(CartContext);
  return (
    <div>
      {totalItems === 0 ? (
        <></>
      ) : (
        <div className={classes.cartbox}>
          <IconButton
            aria-label="add to shopping cart"
            className={classes.cart}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <span className={classes.itemsCounter}>{totalItems}</span>
        </div>
      )}
    </div>
  );
};
