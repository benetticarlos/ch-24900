import { makeStyles, Typography } from '@material-ui/core';
import { React, useState } from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  landing: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Count = ({ initial, stock }) => {
  const [counter, setCounter] = useState(initial);

  const [cantidadStock, setCantidadStock] = useState(stock);
  const aumentar = () => {
    if (counter < cantidadStock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    console.log(`se agregaron ${counter} al carrito`);
    setCantidadStock(cantidadStock - counter);
    setCounter(initial);
  };

  const classes = useStyles();
  console.log(counter);
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={restar}>
        -
      </Button>
      <Typography>{counter}</Typography>
      <Button variant="contained" color="primary" onClick={aumentar}>
        +
      </Button>
      <Button variant="contained" color="secondary" onClick={onAdd}>
        add to cart
      </Button>
      <Typography> stock: {cantidadStock}</Typography>
    </div>
  );
};
