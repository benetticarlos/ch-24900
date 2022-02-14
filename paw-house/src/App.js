import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetalContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={'Welcome to paw-house!'} />}
        />
        {/* // <ItemListContainer greeting={'Welcome to paw-house!'} /> */}
        <Route
          path="/category/:categoryName"
          element={<ItemListContainer greeting={'Welcome to paw-house!'} />}
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer greeting={'Welcome to paw-house!'} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
