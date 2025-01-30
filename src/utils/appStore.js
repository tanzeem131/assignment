import { configureStore } from "@reduxjs/toolkit";
import bomReducer from "./bomSlice";
import techpackReducer from "./techpackSlice";

const appStore = configureStore({
  reducer: {
    bomData: bomReducer,
    techpackData: techpackReducer,
  },
});

export default appStore;
