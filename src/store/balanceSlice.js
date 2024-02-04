import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    balance: 0,
  },
  reducers: {
    withdraw(state, action) {
      state.balance -= 100;
    },
    deposit(state, action) {
      state.balance += 100;
    },
  },
});

export const { withdraw, deposit } = balanceSlice.actions;
export default balanceSlice.reducer;
