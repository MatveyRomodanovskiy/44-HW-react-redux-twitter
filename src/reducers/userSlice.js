import {createSlice} from "@reduxjs/toolkit";
const initialState = {
            name: 'Monster',
            avatar: 'https://www.gravatar.com/avatar/0&d=404'
       }

const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        changeName : (state, date) => {
            state.name = date.payload;
        },
        changeAvatar: (state, date) => {
            state.avatar = date.payload;
        }
    },
});
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;