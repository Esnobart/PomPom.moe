import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "./characters/slice";

const store = configureStore({
    reducer: {
        characters: characterReducer
    }
})

export default store