import React from 'react';
import { Item } from '../Item/Item';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export const ItemList = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.products}>
      {products.map((product) => {
        return <Item key={product.id} item={product} />;
      })}
    </div>
  );
};
