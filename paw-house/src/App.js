import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetalContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  CartContextProvider  from './context/CartContext';
import { Cart } from './components/Cart/Cart';
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={'Welcome to paw-house!'} />}
          />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer greeting={'Welcome to paw-house!'} />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer greeting={'Welcome to paw-house!'} />}
          />
          <Route
          path="/cart"
          element={<Cart />}
          />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
