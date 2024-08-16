import { createSlice } from "@reduxjs/toolkit"
import { getCharacter, getCharacters } from "./operations"

const characterSlice = createSlice({
    name: "characters",
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    reducers: {
      clearList(state) {
        state.data = []
      }
    },
    extraReducers: (builder) => 
        builder
          .addCase(getCharacters.pending, state => {
            state.error = false;
            state.loading = true;
          })
          .addCase(getCharacters.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(getCharacters.rejected, state => {
            state.error = true;
            state.loading = false;
          })
          .addCase(getCharacter.pending, state => {
            state.error = false;
            state.loading = true;
          })
          .addCase(getCharacter.fulfilled, (state, action) => {
            state.error = false;
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(getCharacter.rejected, state => {
            state.error = true;
            state.loading = false;
          })
})

export const { clearList } = characterSlice.actions;
export const characterReducer = characterSlice.reducer;