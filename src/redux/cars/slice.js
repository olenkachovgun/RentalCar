import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

// Початковий стан редюсера слайсу:
const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  pageInfo: {
    totalCars: 0,
    page: 0,
    totalPages: 0,
  },
  favorites: [],
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
        console.log(action.payload);
        state.isLoading = false;
        state.isError = false;

        const {
          cars,
          totalCars,
          page: currentPageString,
          totalPages,
        } = action.payload;
        const currentPage = Number(currentPageString);

        if (currentPage === 1) {
          state.items = cars;
        } else {
          state.items = [...state.items, ...cars];
        }

        state.pageInfo = {
          page: currentPage,
          totalCars,
          totalPages,
        };
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = slice.reducer;
