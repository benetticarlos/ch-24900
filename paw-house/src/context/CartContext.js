import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const isOnCart = (id) => {
    const res = cart.some((prod) => prod.id === id);
    return res;
  };

  const addToCart = (counter, item) => {
    if (isOnCart(item.id)) {
      alert('Este producto ya está en el carrito!');
    } else {
      setCart([...cart, { ...item, cantidad: counter }]);
      setTotalPrice(totalPrice + counter * item.price);
      setTotalItems(totalItems + counter);
    }
  };

  const vaciarCarrito = () => {
    setTotalPrice(0);
    setCart([]);
    setTotalItems(0);
  };

  const eliminarItem = (id, cantidad, precio) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);

    newCart.length !== 0
      ? setTotalPrice(totalPrice - cantidad * precio)
      : setTotalPrice(0);

    setTotalItems(totalItems - cantidad);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        vaciarCarrito,
        totalPrice,
        eliminarItem,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
