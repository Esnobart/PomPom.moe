import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "./characters/slice";
import { conesReducer } from "./cones/slice";
import { relicsReducer } from "./relics/slice";

const store = configureStore({
    reducer: {
        characters: characterReducer,
        cones: conesReducer,
        relics: relicsReducer
    }
})

export default store