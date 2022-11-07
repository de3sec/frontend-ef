import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    token: false,
    // extra
    errorMessage: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.errorMessage = "";
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      // extra
      state.errorMessage = action.payload;
    },
    logOut: (state, action) => {
      state.currentUser = null;
      state.isFetching = false;
    },
    addressUpdate: (state, action) => {
      state.currentUser.addresses = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut, addressUpdate } =
  userSlice.actions;

export default userSlice.reducer;
