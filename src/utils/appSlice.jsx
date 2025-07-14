import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
})

export const {toggleMenu} = AppSlice.actions;

export default AppSlice.reducer;