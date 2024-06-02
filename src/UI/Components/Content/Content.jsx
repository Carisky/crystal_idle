import React from 'react'
import style from "./style.module.css"
import { useSelector } from 'react-redux';
export default function Content({children}) {
    
    const visability = useSelector((state) => state.state.showGame);
  return (
    <div style={{
        display:visability
    }} className={style.content}>
      {children}
    </div>
  )
}
