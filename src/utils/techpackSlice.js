import { createSlice } from "@reduxjs/toolkit";

const techpackSlice = createSlice({
  name: "techpackData",
  initialState: {
    data: [],
  },
  reducers: {
    setTechpack: (state, action) => {
      state.data = action.payload;
    },
    removeTechpack: (state, action) => {
      return null;
    },
  },
});

export const { setTechpack, removeTechpack } = techpackSlice.actions;
export default techpackSlice.reducer;
