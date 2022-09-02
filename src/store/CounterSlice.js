import { createSlice } from "@reduxjs/toolkit";
const CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
