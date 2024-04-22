import { createSlice } from "@reduxjs/toolkit";

// auth stands for authorization

const initialState = { isLogged: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
