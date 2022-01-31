import { makeStyles } from '@material-ui/core';
import React from 'react';

import PetsIcon from '@material-ui/icons/Pets';

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
    </div>
  );
};
