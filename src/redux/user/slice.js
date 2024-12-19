import { createSlice } from "@reduxjs/toolkit"
import { signUp, logIn, logOut } from "./operations";

const usersSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            nickname: null,
            email: null,
            password: null,
            avatar: null
        },
        token: null,
        isLogged: false,
        isRefreshing: false
    },
    extraReducers: (builder) => 
        builder
          .addCase(signUp.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
          })
          .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
          })
          .addCase(logOut.fulfilled, state => {
            state.user = { nickname: null, email: null, password: null, avatar: null};
            state.token = null;
            state.isLogged = null;
          })
})

export const { registration } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;