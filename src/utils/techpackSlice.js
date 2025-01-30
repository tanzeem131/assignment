import { createSlice } from "@reduxjs/toolkit";

const techpackSlice = createSlice({
  name: "techpackData",
  initialState: {
    data: [],
  },
  reducers: {
    addTechpack: (state, action) => {
      return action.payload;
    },
    setTechpack: (state, action) => {
      state.data = action.payload;
    },
    removeTechpack: (state, action) => {
      return null;
    },
  },
});

export const { addTechpack, setTechpack, removeTechpack } =
  techpackSlice.actions;
export default techpackSlice.reducer;
