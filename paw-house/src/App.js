import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetalContainer/ItemDetailContainer';
function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer greeting={'Welcome to paw-house!'} /> */}
      <ItemDetailContainer greeting={'Welcome to paw-house!'} />
    </>
  );
}

export default App;
