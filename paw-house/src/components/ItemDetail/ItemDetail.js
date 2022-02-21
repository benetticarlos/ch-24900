import React, { useState } from 'react';
import { Link, makeStyles } from '@material-ui/core';
import { Count } from '../Count/Count';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const useStyles = makeStyles({
  itemContainer: {
    border: '2px solid #000',
    display: 'flex',
    padding: '1vw',
    marginBottom: '2vh',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
  },
  textContainer: { display: 'flex', flexDirection: 'column' },
  img: {
    width: '200px',
    height: '200px',
  },
});
export const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState();
  const {addToCart, cart} = useContext(CartContext)
  
  const onAddItem = ({
    counter,
    cantidadStock,
    initial,
    setCantidadStock,
    setCounter,
  }) => {
    console.log(`se agregaron ${counter} al carrito`);
    setCantidadStock(cantidadStock - counter);
    setCounter(initial);
    setItemCount(counter);
    addToCart(counter, item);
  };
  const classes = useStyles();

  console.log('cart :>> ', cart);
  return (
    <div key={item.id} className={classes.itemContainer}>
      <img src={item.img} alt="imagen del producto" className={classes.img} />
      <div className={classes.textContainer}>
        <p className="title">{item.name}</p>
        <p className="price"> precio: {item.price}</p>
        <p>{item.description}</p>
      </div>
      {!itemCount ? (
        <Count initial={0} stock={12} onAdd={onAddItem} />
      ) : (
        <Link to="/cart">Ir al carrito</Link>
      )}
    </div>
  );
};
