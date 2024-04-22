import { createSlice } from "@reduxjs/toolkit";

// ui stands for UserInterface

const initialState = { login: true };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.login = !state.login;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
