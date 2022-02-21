import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {
  const {cart} = useContext(CartContext)

  
  console.log(cart);
  
  return (
    
    <div>
      CART
      {cart.map((producto) => (
        <div key={producto.id}>
          <h3>
            {producto.name}
          </h3>
        </div>
      ))}
    
    </div>

  )
}
