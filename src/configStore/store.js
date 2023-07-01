import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "../reducers/userSlice";
import {statsReducer} from "../reducers/statsSlice";

export const store = configureStore({
   reducer:{
       user: userReducer,
       stats: statsReducer
   }
})