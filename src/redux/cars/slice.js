import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

// Початковий стан редюсера слайсу:
const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};
const handlePending = (state) => {
  state.isLoading = true;
  state.isError = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};
const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = slice.reducer;
