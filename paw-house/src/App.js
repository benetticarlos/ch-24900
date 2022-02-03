import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Count } from './components/Count/Count';
import { Typography } from '@material-ui/core';
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Welcome to paw-house!'} />
      <Typography> stock: 4</Typography>
      <Count stock={4}/>
    </>
  );
}

export default App;
