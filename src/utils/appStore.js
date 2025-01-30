import { configureStore } from "@reduxjs/toolkit";
import bomReducer from "./bomSlice";

const appStore = configureStore({
  reducer: {
    bomData: bomReducer,
  },
});

export default appStore;
