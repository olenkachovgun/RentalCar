import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./redux/cars/slice.js";

// import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    // filters: filtersReducer,
  },
});
