import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  text: ""
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addCount: (state, action) => {
      console.log(initialState);
      state.count += 1;
    },
    deleteCount: (state, action) => {
      state.count -= 1;
    },
    resetCount: (state, actiom) => {
      state.count = 0;
    },
    setText: (state, action) => {
      state.text = action.payload;
    }
  }
});
export const countSelector = (state) => state.count;
export const {
  addCount,
  deleteCount,
  resetCount,
  setText
} = counterSlice.actions;
export default counterSlice.reducer;
