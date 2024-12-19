import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRelics = createAsyncThunk(
    "relics/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/relics');
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const getRelic = createAsyncThunk(
    "relics/getOne",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/api/relics/${id}`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)