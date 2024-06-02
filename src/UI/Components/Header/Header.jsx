import React from 'react'
import { useSelector } from "react-redux";
import style from "./style.module.css"
export default function Header() {
  const value = useSelector((state) => state.state.value);
  const formattedValue = value.toFixed(4);
  return (
    <header className={style.header}>
      <h1>{formattedValue}</h1>
    </header>
  )
}
