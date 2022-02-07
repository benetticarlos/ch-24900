import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Welcome to paw-house!'} />
    </>
  );
}

export default App;
