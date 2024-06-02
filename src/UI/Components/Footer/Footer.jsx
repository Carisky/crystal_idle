import React from "react";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <div className={style.nav_element}>
          <div className={style.nav_action}>Home</div>
        </div>
        <div className={style.nav_element}>
          <div className={style.nav_action}>Shop</div>
        </div>
      </nav>
    </footer>
  );
}
