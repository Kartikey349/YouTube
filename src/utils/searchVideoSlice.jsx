import { createSlice } from "@reduxjs/toolkit";

const searchVideoSlice = createSlice({
    name: "searchVideo",
    initialState:{
        items: []
    },
    reducers: {
        showVideo: (state, action) => {
            state.items.push(action.payload);
        },
        clearShowVideo: (state) => {
            state.items = []
        }
    }
})

export const {showVideo, clearShowVideo} = searchVideoSlice.actions;

export default searchVideoSlice.reducer;