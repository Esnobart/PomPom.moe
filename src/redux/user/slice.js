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
        userLoading: false,
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
          .addCase(logIn.pending, state => {
            state.userLoading = true;
          })
          .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            state.userLoading = false;
          })
          .addCase(logOut.fulfilled, state => {
            state.user = { nickname: null, email: null, password: null, avatar: null};
            state.token = null;
            state.isLogged = null;
          })
})

export const { registration } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;