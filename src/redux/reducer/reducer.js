import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0.0000000,
  crystallLevel:1,
  coinsPerSec: 1,
  crystallClass: "lapis",
  showShop:"none",
  showGame:"flex"
};

const mySlice = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    increment: (state) => {
        if(state.crystallLevel!==3){
            state.crystallLevel += 1;
        }
    },
    swapVisability:(state)=>{
        if(state.showGame==="flex"){
            state.showShop="flex"
            state.showGame="none"
        }else{
            state.showShop="none"
            state.showGame="flex"
        }
    },
    incrementByAmount: (state, action) => {
      const incrementValue = action.payload;
      if (!isNaN(incrementValue)) {
        state.value += incrementValue;
      }
    },
    setCrystallClass: (state, action) => {
        const setValue = action.payload;
        if(action.payload!=null){
            state.crystallClass = setValue;
        }
      },
    setCoinsPerSec: (state, action) => {
      const newCoinsPerSec = action.payload;
      if (!isNaN(newCoinsPerSec)) {
        state.coinsPerSec = newCoinsPerSec;
      }
    },
  },
});

export const { increment, incrementByAmount, setCoinsPerSec, swapVisability, setCrystallClass } = mySlice.actions;

export default mySlice.reducer;
