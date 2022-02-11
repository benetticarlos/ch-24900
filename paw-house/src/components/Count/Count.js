import { makeStyles, Typography } from '@material-ui/core';
import { React, useState } from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  counterButtons: {
    display: 'flex',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  addToCartButton: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '3vh',
  },
});

export const Count = ({ initial, stock, onAdd }) => {
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

  const classes = useStyles();
  console.log(counter);
  return (
    <div>
      <div className={classes.counterButtons}>
        <Button variant="contained" color="secondary" onClick={restar}>
          -
        </Button>
        <Typography>{counter}</Typography>
        <Button variant="contained" color="primary" onClick={aumentar}>
          +
        </Button>
      </div>
      <div className={classes.addToCartButton}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            onAdd({
              counter,
              cantidadStock,
              initial,
              setCantidadStock,
              setCounter,
            })
          }
        >
          add to cart
        </Button>
        <Typography> stock: {cantidadStock}</Typography>
      </div>
    </div>
  );
};
