import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: '200px',
    height: '200px',
  },
});

export const Cart = () => {
    const classes = useStyles();
  const { cart, vaciarCarrito, totalPrice, eliminarItem } =
    useContext(CartContext);
  console.log(cart)


  return (
    <div>
      {cart.length === 0 ? (
        <h2>tu carrito está vacio</h2>
      ) : (
        <>
          {
          cart.map((producto) => {
            console.log(producto);
            return (
              <div key={producto.id}>
                <button onClick={() => eliminarItem(producto.id, producto.cantidad, producto.price)}>X</button>

                <img
                  src={producto.img}
                  alt="imagen del producto"
                  className={classes.img}
                />
                <h2>{producto.name}</h2>
                <h3>cantidad: {producto.cantidad}</h3>
                <h3>${producto.price}</h3>
              </div>
            );
          })}
          <h2>Precio total: ${totalPrice}</h2>
          <button onClick={vaciarCarrito}>vaciar carrito</button>
        </>
      )}
    </div>
  );
};
