import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
};
const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { toggleMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
