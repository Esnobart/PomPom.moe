import { createSlice } from "@reduxjs/toolkit"
import { getCharacter, getCharacters } from "./operations"

const characterSlice = createSlice({
    name: "characters",
    initialState: {
        characters: [],
        character: null,
        loading: false,
        error: false
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
            state.characters = action.payload;
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
            state.character = action.payload;
          })
          .addCase(getCharacter.rejected, state => {
            state.error = true;
            state.loading = false;
          })
})

export const characterReducer = characterSlice.reducer;