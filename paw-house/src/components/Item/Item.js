import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: '200px',
    height: '200px',
  },
});
export const Item = ({ item }) => {
  const classes = useStyles();

  return (
    <div key={item.id}>
      <img src={item.img} alt="imagen del producto" className={classes.img} />
      <p className="price"> precio: {item.price}</p>
      <p className="title">{item.name}</p>
    </div>
  );
};
