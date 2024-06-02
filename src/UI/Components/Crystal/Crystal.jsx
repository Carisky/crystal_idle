import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../../../redux/reducer/reducer";

export default function Crystal({crystalClass, coinsPerSec}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(incrementByAmount(coinsPerSec/20));
    }, 50);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <h1>{crystalClass}</h1>
    </div>
  );
}