import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pompom-moe-back.onrender.com/api";

export const getPlanars = createAsyncThunk(
    "cones/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/planars');
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
            const response = await axios.get(`/planars/${id}`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)