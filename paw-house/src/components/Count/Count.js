import { makeStyles, Typography } from '@material-ui/core';
import { React, useState } from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  landing: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Count = ({stock}) => {
  const [counter, setCounter] = useState(0);

  const aumentar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const classes = useStyles();
  console.log(counter);
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={restar}>
        -
      </Button>
      <Typography>{counter}</Typography>
      <Button variant="contained" color="primary" onClick={aumentar}>
        +
      </Button>
    </div>
  );
};
