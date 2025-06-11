import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export const fetchCars = createAsyncThunk(
  "cars/fetchData",
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await api.get(`/cars?page=${page}`);
      console.log(data);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
