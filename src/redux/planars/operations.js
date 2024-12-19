import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlanars = createAsyncThunk(
    "cones/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/planars');
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const getPlanar = createAsyncThunk(
    "cones/getOne",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/api/planars/${id}`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)