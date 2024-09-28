import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "./characters/slice";
import { conesReducer } from "./cones/slice";
import { relicsReducer } from "./relics/slice";
import { planarsReducer } from "./planars/slice";

const store = configureStore({
    reducer: {
        characters: characterReducer,
        cones: conesReducer,
        relics: relicsReducer,
        planars: planarsReducer
    }
})

export default store