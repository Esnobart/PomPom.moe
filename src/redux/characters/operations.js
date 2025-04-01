import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk(
    "characters/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/api/characters`);
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
            const response = await axios.get(`/api/characters/${id}`);
            console.log(response.data);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
