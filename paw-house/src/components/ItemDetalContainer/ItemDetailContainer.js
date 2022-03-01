import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getItems } from '../../api/api';
import PetsIcon from '@material-ui/icons/Pets';
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../../firebase'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { SettingsRemote } from '@material-ui/icons';

const useStyles = makeStyles({
  title: { textAlignLast: 'center' },
});

export const ItemDetailContainer = ({ greeting }) => {
  const classes = useStyles();

  const { itemId } = useParams();

  const [products, setProducts] = useState();

  useEffect(() => {
    // getItems.then((items) => {
    //   setProducts([items.find((i) => i.id === parseInt(itemId))]);
    // });

    const itemRef = doc(db, 'items', itemId);
    getDoc(itemRef).then((snapshot) => {
if (snapshot.exists()) {
  setProducts({ id: snapshot.id, ...snapshot.data() });
  console.log('products :>> ', products);
}
    }).catch(error => console.log(error))
  });

//   useEffect(() => {
// getDocs(collection(db, "items")).then(snapshot => {
// console.log("snap", snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
// }).catch(error => {console.log(error)})
//   }, [])

  // const productsLength = products.length;
  return (
    <div>
      <h1 className={classes.title}>
        <PetsIcon />
        {greeting}
        <PetsIcon />
      </h1>
      {products ? <ItemDetail item={products} /> : <p>cargando</p>}
    </div>
  );
};
