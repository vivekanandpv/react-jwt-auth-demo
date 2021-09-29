import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authStatus',
  initialState: {
    isLoggedIn: false,
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});
