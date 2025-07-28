import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice"
import searchVideoReducer from "./searchVideoSlice"
import chatReducer from "./chatSlice"

const store = configureStore({
    reducer: {
        app : appReducer,
        search : searchReducer,
        searchVideo: searchVideoReducer,
        chat: chatReducer
    }
})

export default store;