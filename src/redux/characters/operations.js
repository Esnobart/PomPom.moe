import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pompom-moe-back.onrender.com/api";

export const getCharacters = createAsyncThunk(
    "characters/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/characters`);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const getCharacter = createAsyncThunk(
    "characters/getOne",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/characters/${id}`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)
