import React from 'react'
import style from "./style.module.css"
export default function Content({children}) {
  return (
    <div className={style.content}>
      {children}
    </div>
  )
}
