// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },
    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    }
  }
});

export default menu.reducer;

export const { activeItem, openDrawer } = menu.actions;
