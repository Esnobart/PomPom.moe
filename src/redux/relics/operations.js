import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pompom-moe-back.onrender.com/api";

export const getRelics = createAsyncThunk(
    "relics/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/relics');
            console.log(response.data)
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
            const response = await axios.get(`/relics/${id}`);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)