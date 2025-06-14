export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.isError;
export const selectPagination = (state) => state.cars.pageInfo;
export const selectFilters = (state) => state.cars.filters;
export const selectFavorites = (state) => state.cars.favorites;
