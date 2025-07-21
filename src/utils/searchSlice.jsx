import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResults: (state, action) => {
            Object.assign(state, action.payload)

        }
    }
})


export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;


/*
    cache: 
    time complexity to search to an array = O(n);
    time complexity to search to an obj = o(1);

    [i, ip, iph, iphone]

    {
        i:
        ip:
        iph:
        iphone:
    }
*/