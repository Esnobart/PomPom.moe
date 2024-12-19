import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const signUp = createAsyncThunk(
    "user/signup",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', data);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const logIn = createAsyncThunk(
    "user/login",
    async (data, thunkAPI) => {
        try {
            const response = await axios.patch('/users/login', data);
            setAuthHeader(response.data.token);
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const logOut = createAsyncThunk(
    "user/logout",
    async (data, thunkAPI) => {
        try {
            const response = await axios.patch('/users/logout', data);
            clearAuthHeader();
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)