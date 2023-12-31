import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DrawerState = {
  shoppingDrawerIsOpen: boolean;
  itemDetailsDrawerIsOpen: boolean;
  newItemDrawerIsOpen: boolean;
};

const initialState: DrawerState = {
  shoppingDrawerIsOpen: true,
  itemDetailsDrawerIsOpen: false,
  newItemDrawerIsOpen: false,
};

export const drawer = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    closeAll: () => initialState,
    toggleShoppingDrawer: (state) => {
      state.shoppingDrawerIsOpen = !state.shoppingDrawerIsOpen;
      state.itemDetailsDrawerIsOpen = false;
      state.newItemDrawerIsOpen = false;
    },

    openItemDetailsDrawer: (state) => {
      state.shoppingDrawerIsOpen = false;
      state.itemDetailsDrawerIsOpen = true;
      state.newItemDrawerIsOpen = false;
    },

    closeItemDetailsDrawer: (state) => {
      state.shoppingDrawerIsOpen = true;
      state.itemDetailsDrawerIsOpen = false;
      state.newItemDrawerIsOpen = false;
    },

    openNewItemDrawer: (state) => {
      state.shoppingDrawerIsOpen = false;
      state.itemDetailsDrawerIsOpen = false;
      state.newItemDrawerIsOpen = true;
    },
  },
});

export const {
  closeAll,
  openItemDetailsDrawer,
  closeItemDetailsDrawer,
  toggleShoppingDrawer,
  openNewItemDrawer,
} = drawer.actions;

export const drawerSelector = (state: { drawer: DrawerState }) => state.drawer;

export default drawer.reducer;
