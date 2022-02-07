import { makeStyles } from '@material-ui/core';
import React from 'react';

import PetsIcon from '@material-ui/icons/Pets';
import { Count } from '../Count/Count';

const useStyles = makeStyles({
  landing: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const ItemListContainer = ({ greeting }) => {
  const classes = useStyles();

  return (
    <div className={classes.landing}>
      <h1>
        <PetsIcon />
        {greeting}
        <PetsIcon />
      </h1>
      <Count initial={0} stock={12} />
    </div>
  );
};
