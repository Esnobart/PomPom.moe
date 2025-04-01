import { createSlice } from "@reduxjs/toolkit";
import { getCones, getCone } from "./operations";

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

const conesSlice = createSlice({
    name: "cones",
    initialState: {
        data: null,
        filter: {
            rarity: null,
            path: null,
        },
        loading: false,
        error: false,
    },
    reducers: {
        setFilter(state, action) {
            const { filterType, value } = action.payload;
            updateFilter(state, { payload: value }, filterType);
        },
        clearFilter(state) {
            state.filter = {
                rarity: null,
                path: null,
            };
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getCones.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getCones.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getCones.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(getCone.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getCone.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getCone.rejected, (state) => {
                state.error = true;
                state.loading = false;
            }),
});

export const { setFilter, clearFilter } = conesSlice.actions;
export const conesReducer = conesSlice.reducer;
