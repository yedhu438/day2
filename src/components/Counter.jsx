import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const CounterApp = () => {
  
  const [counter, setCounter] = useState(0);

 
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Typography variant='h3'>Counter: {counter}</Typography>
          <div style={{ marginTop: '20px' }}>
            <Button
              variant='contained'
              color='primary'
              onClick={incrementCounter}
              style={{ marginRight: '10px' }}
            >
              +
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={decrementCounter}
            >
              -
            </Button>
          </div>
        </div>
      );
    };
    
    export default CounterApp;
