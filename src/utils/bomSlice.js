import { createSlice } from "@reduxjs/toolkit";

const bomSlice = createSlice({
  name: "bomData",
  initialState: {
    data: [],
  },
  reducers: {
    addBom: (state, action) => {
      return action.payload;
    },
    setBom: (state, action) => {
      state.data = action.payload;
    },
    removeBom: (state, action) => {
      return null;
    },
  },
});

export const { addBom, setBom, removeBom } = bomSlice.actions;
export default bomSlice.reducer;
