import { createSlice } from "@reduxjs/toolkit";

const bomSlice = createSlice({
  name: "bomData",
  initialState: {
    data: [],
  },
  reducers: {
    setBom: (state, action) => {
      state.data = action.payload;
    },
    removeBom: (state, action) => {
      return null;
    },
  },
});

export const { setBom, removeBom } = bomSlice.actions;
export default bomSlice.reducer;
