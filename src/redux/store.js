import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "./characters/slice";
import { conesReducer } from "./cones/slice";
import { relicsReducer } from "./relics/slice";
import { planarsReducer } from "./planars/slice";
import { modalsReducer } from "./modals/slice";
import { usersReducer } from "./user/slice";

const store = configureStore({
    reducer: {
        user: usersReducer,
        characters: characterReducer,
        cones: conesReducer,
        relics: relicsReducer,
        planars: planarsReducer,
        modals: modalsReducer
    }
})

export default store