import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice"
import searchVideoReducer from "./searchVideoSlice"

const store = configureStore({
    reducer: {
        app : appReducer,
        search : searchReducer,
        searchVideo: searchVideoReducer
    }
})

export default store;