import { createSlice } from "@reduxjs/toolkit";
import { getRelics, getRelic } from "./operations";

const relicsSlice = createSlice({
    name: "relics",
    initialState: {
        data: [],
        loading: false,
        error: false,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRelics.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getRelics.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getRelics.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(getRelic.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getRelic.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getRelic.rejected, (state) => {
                state.error = true;
                state.loading = false;
            }),
});

export const { clearRelicsList } = relicsSlice.actions;
export const relicsReducer = relicsSlice.reducer;
