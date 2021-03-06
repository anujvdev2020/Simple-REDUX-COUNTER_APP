import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice";
export default configureStore({
  reducer: {
    count: countReducer
  }
});
