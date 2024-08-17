import { createSlice } from "@reduxjs/toolkit"
import { getCones, getCone } from "./operations";

const conesSlice = createSlice({
    name: "cones",
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    reducers: {
        clearConesList(state) {
        state.data = []
      }
    },
    extraReducers: (builder) => 
        builder
          .addCase(getCones.pending, state => {
            state.error = false;
            state.loading = true;
          })
          .addCase(getCones.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(getCones.rejected, state => {
            state.error = true;
            state.loading = false;
          })
          .addCase(getCone.pending, state => {
            state.error = false;
            state.loading = true;
          })
          .addCase(getCone.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(getCone.rejected, state => {
            state.error = true;
            state.loading = false;
          })
})

export const { clearConesList } = conesSlice.actions;
export const conesReducer = conesSlice.reducer;