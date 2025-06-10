import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export const fetchCars = createAsyncThunk(
  "cars/fetchData",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/cars");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
