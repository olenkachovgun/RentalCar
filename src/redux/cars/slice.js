import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  items: [],
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },

  pageInfo: {
    totalCars: 0,
    page: 0,
    totalPages: 0,
  },
  favorites: [],
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

  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
      };
      state.pageInfo.page = 1;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const {
          cars,
          totalCars,
          page: currentPageString,
          totalPages,
        } = action.payload;

        const currentPage = Number(currentPageString);
        const parsedTotalCars = Number(totalCars);
        const parsedTotalPages = Number(totalPages);

        if (!action.payload || !Array.isArray(action.payload.cars)) return;

        if (currentPage === 1) {
          state.items = cars;
        } else {
          state.items = [...state.items, ...cars];
        }

        state.pageInfo = {
          page: currentPage,
          totalCars: parsedTotalCars,
          totalPages: parsedTotalPages,
        };
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const { setFilters, clearFilters } = slice.actions;
export const carsReducer = slice.reducer;
