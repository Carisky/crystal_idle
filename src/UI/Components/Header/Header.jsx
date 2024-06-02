import React from 'react'
import { useSelector } from "react-redux";
import style from "./style.module.css"
export default function Header() {
  const value = useSelector((state) => state.state.value);

const formattedValue = (value !== null && value !== undefined) ? value.toFixed(4) : '0.0000';
const coinsPerSec = useSelector((state) => state.state.coinsPerSec);
  return (
    <header className={style.header}>
      <h1>{formattedValue}</h1>
      <h1>Coins/sec : {coinsPerSec}</h1>
    </header>
  )
}
