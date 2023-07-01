import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        followers: 0,
        following: 0
}

const statsSlice = createSlice({
    initialState,
    name: "stats",
    reducers: {
        changeFollowers: (state, date) => {
            const res = state.followers + date.payload;
            state.followers = res >= 0 ? res : 0;
        },
        changeFollowing: (state, date) => {
            const res = state.following + date.payload
            state.following = res >= 0 ? res : 0;
        },
    }
})
export const statsActions = statsSlice.actions;
export const statsReducer = statsSlice.reducer;