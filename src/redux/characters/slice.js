import { createSlice } from "@reduxjs/toolkit";
import { getCharacter, getCharacters } from "./operations";

const updateFilter = (state, action, filterType) => {
    const index = state.filter[filterType].indexOf(action.payload);
    if (index === -1) {
        state.filter[filterType].push(action.payload);
    } else {
        state.filter[filterType] = state.filter[filterType].filter(
            (item) => item !== action.payload
        );
    }
};

const characterSlice = createSlice({
    name: "characters",
    initialState: {
        characters: [],
        character: null,
        filter: {
            rarity: [],
            path: [],
            type: [],
        },
        loading: false,
        error: false,
    },
    reducers: {
        setCharacter(state) {
            state.character = null;
        },
        setFilter(state, action) {
            const { filterType, value } = action.payload;
            updateFilter(state, { payload: value }, filterType);
        },
        clearFilter(state) {
            state.filter = {
                rarity: [],
                path: [],
                type: [],
            };
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getCharacters.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.characters = action.payload;
            })
            .addCase(getCharacters.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(getCharacter.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getCharacter.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.character = action.payload;
            })
            .addCase(getCharacter.rejected, (state) => {
                state.error = true;
                state.loading = false;
            }),
});

export const { setCharacter, setFilter, clearFilter } = characterSlice.actions;
export const characterReducer = characterSlice.reducer;
