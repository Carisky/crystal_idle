import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from '../../../redux/reducer/reducer';

export default function Crystal() {
  const dispatch = useDispatch();
  const coinsPerSec = useSelector((state) => state.state.coinsPerSec);
  const crystallClass = useSelector((state) => state.state.crystallClass);
  const crystallLevel = useSelector((state) => state.state.crystallLevel);

  useEffect(() => {
    if (!isNaN(coinsPerSec)) {
      const interval = setInterval(() => {
        console.log(coinsPerSec * crystallLevel/ 20)
        dispatch(incrementByAmount(coinsPerSec * crystallLevel/ 20));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [dispatch,coinsPerSec]);

  return (
    <div style={{
      
    }}>
      <h1>{crystallClass}</h1>
    </div>
  );
}
