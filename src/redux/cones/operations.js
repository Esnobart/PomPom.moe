import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCones = createAsyncThunk(
    "cones/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/cones');
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const getCone = createAsyncThunk(
    "cones/getOne",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/api/cones/${id}`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)