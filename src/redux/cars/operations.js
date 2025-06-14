import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export const fetchCars = createAsyncThunk(
  "cars/fetchData",
  async (option = {}, thunkAPI) => {
    const {
      page = 1,
      brand = null,
      rentalPrice = null,
      minMileage = null,
      maxMileage = null,
      signal,
    } = option;
    try {
      const params = new URLSearchParams();
      params.append("page", page);
      if (brand) {
        params.append("brand", brand);
      }
      if (rentalPrice) {
        params.append("rentalPrice", rentalPrice);
      }
      if (minMileage) {
        params.append("minMileage", minMileage);
      }
      if (maxMileage) {
        params.append("maxMileage", maxMileage);
      }
      const url = `/cars?${params.toString()}`;

      const { data } = await api.get(url, { signal });

      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const fetchCarId = createAsyncThunk(
//   "carDetails/fetchCarDetails",
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await api.get(`/cars/${id}`);
//       console.log(data);
//       return data;
//     } catch (error) {
//       const message = error?.response?.data?.message || error.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
