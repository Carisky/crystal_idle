import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { swapVisability } from '../../../redux/reducer/reducer';
export default function Footer() {
const dispatch = useDispatch();

  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <div className={style.nav_element}>
          <div onClick={()=>{
            dispatch(swapVisability())
          }} className={style.nav_action}>Other Page</div>
        </div>
      </nav>
    </footer>
  );
}
