import { createSlice } from "@reduxjs/toolkit";
import { Post_Interface } from "../types";


interface FilterState {
    allPosts: Post_Interface[];
    filteredPosts: Post_Interface[];
}

const initialState: FilterState = {
    allPosts: [],
    filteredPosts: [],
};

const filterSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {

        handleSetData: (state, action) => {
            state.allPosts = action.payload;
            state.filteredPosts = action.payload;
        },

        handleFilterData: (state, action) => {
            const filterText = action.payload.toLowerCase();
            state.filteredPosts = state.allPosts.filter((el) =>
                el.body.toLowerCase().includes(filterText)
            );
        },
    },
});

export default filterSlice.reducer;

export const { handleFilterData, handleSetData } = filterSlice.actions;
