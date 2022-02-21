import {createContext, useContext, useState } from 'react'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer'
import { products } from '../api/api'

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const addToCart = (counter, item) => {
    setCart([...cart, {...item, cantidad: counter}]);
  }
  return (
    <CartContext.Provider value={{addToCart, cart}}>
      {children}
    </CartContext.Provider>
  );
}

export default  CartContextProvider