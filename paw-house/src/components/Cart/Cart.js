import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);

  console.log(cart);

  return (
    <div>
      {cart.length === 0 ? (
        <h2>tu carrito está vacio</h2>
      ) : (
        <>
          {cart.map((producto) => (
            <div key={producto.id}>
              <h3>{producto.name}</h3>
            </div>
          ))}
          <button onClick={vaciarCarrito}>vaciar carrito</button>
        </>
      )}
    </div>
  );
};
