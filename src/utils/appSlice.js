import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchKey: "",
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setSearchKey } = appSlice.actions;
export default appSlice.reducer;
