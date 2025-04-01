import { createSlice } from "@reduxjs/toolkit";
import { getPlanars, getPlanar } from "./operations";

const planarsSlice = createSlice({
    name: "planars",
    initialState: {
        data: null,
        loading: false,
        error: false,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getPlanars.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getPlanars.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPlanars.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(getPlanar.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getPlanar.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPlanar.rejected, (state) => {
                state.error = true;
                state.loading = false;
            }),
});

export const { clearRelicsList } = planarsSlice.actions;
export const planarsReducer = planarsSlice.reducer;
