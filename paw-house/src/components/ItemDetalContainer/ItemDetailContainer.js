import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getItems } from '../../api/api';
import PetsIcon from '@material-ui/icons/Pets';

import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  title: { textAlignLast: 'center' },
});

export const ItemDetailContainer = ({ greeting }) => {
  const classes = useStyles();

  const { itemId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems.then((items) => {
      setProducts([items.find((i) => i.id === parseInt(itemId))]);
    });
  }, [itemId]);

  const productsLength = products.length;
  return (
    <div>
      <h1 className={classes.title}>
        <PetsIcon />
        {greeting}
        <PetsIcon />
      </h1>
      {productsLength > 0 ? <ItemDetail item={products[0]} /> : <p>cargando</p>}
    </div>
  );
};
