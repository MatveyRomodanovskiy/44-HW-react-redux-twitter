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
            state.name = date.payload!= '' ? date.payload : state.name;
        },
        changeAvatar: (state, date) => {
            state.avatar =date.payload!= '' ? date.payload : state.avatar;
        }
    },
});
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;