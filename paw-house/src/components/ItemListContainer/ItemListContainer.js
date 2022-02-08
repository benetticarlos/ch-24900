import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import PetsIcon from '@material-ui/icons/Pets';
import { Count } from '../Count/Count';
import { getItems } from '../../api/api';
import { ItemList } from '../ItemList/ItemList';

const useStyles = makeStyles({
  title: { textAlignLast: 'center' },
});

export const ItemListContainer = ({ greeting }) => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getItems.then((productos) => {
      console.log(productos);
      setProducts(productos);
    });
  }, []);

  return (
    <div>
      <h1 className={classes.title}>
        <PetsIcon />
        {greeting}
        <PetsIcon />
      </h1>
      {products.length > 0 ? <ItemList products={products} /> : <p>cargando</p>}
      <Count initial={0} stock={12} />
    </div>
  );
};
