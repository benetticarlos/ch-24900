import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  itemContainer: {
    border: '2px solid #000',
    display: 'flex',
    padding: '1vw',
    marginBottom: '2vh',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
  },
  textContainer: { display: 'flex', flexDirection: 'column' },
  img: {
    width: '200px',
    height: '200px',
  },
});
export const ItemDetail = ({ item }) => {
  const classes = useStyles();

  return (
    <div key={item.id} className={classes.itemContainer}>
      <img src={item.img} alt="imagen del producto" className={classes.img} />
      <div className={classes.textContainer}>
        <p className="title">{item.name}</p>
        <p className="price"> precio: {item.price}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
