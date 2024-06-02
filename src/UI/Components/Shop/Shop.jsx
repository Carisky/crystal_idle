import React from "react";
import style from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, setCoinsPerSec } from "../../../redux/reducer/reducer";
export default function Shop() {
  const visability = useSelector((state) => state.state.showShop);
  const coinsPerSec = useSelector((state) => state.state.coinsPerSec);
  const level = useSelector((state) => state.state.crystallLevel);
  const dispatch = useDispatch();
  return (
    <div
      className={style.shop}
      style={{
        display: visability,
      }}
    >
      <div>Shop</div>
      <button
        onClick={() => {
          if (level !== 3) {
            dispatch(increment());
            dispatch(setCoinsPerSec(coinsPerSec * level));
          }
        }}
      >
        level up
      </button>
    </div>
  );
}
