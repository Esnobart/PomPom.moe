import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "./characters/slice";
import { conesReducer } from "./cones/slice";

const store = configureStore({
    reducer: {
        characters: characterReducer,
        cones: conesReducer
    }
})

export default store