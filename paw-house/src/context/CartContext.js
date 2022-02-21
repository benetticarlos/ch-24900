import {createContext, useContext, useState } from 'react'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer'
import { products } from '../api/api'

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const isOnCart = (id) => {
    const res = cart.some((prod) => prod.id === id)
    return res
  }


  const addToCart = (counter, item) => {
    if (isOnCart(item.id)) {
      alert('Este producto ya está en el carrito!')
    } else {
      setCart([...cart, { ...item, cantidad: counter }]);
    }
  }

  const vaciarCarrito = () => {
    setCart([])
  }



  
  return (
    <CartContext.Provider value={{ addToCart, cart, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
}

export default  CartContextProvider