import React, { useEffect, useRef, useState } from "react";
import CarItem from "../CarItem/CarItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPagination,
  selectFilters,
} from "../../redux/cars/selectors.js";
import { fetchCars } from "../../redux/cars/operations.js";
import s from "./CarList.module.css";
import LoadMore from "../LoadMore/LoadMore.jsx";
import Loader from "../Loader/Loader.jsx";
import { clearFilters, loadFavorites } from "../../redux/cars/slice.js";

const CarList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pageInfo = useSelector(selectPagination);
  const cars = useSelector(selectCars) || [];
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const currentPage = Number(pageInfo.page) || 1;

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, ...currentFilters }));
  }, [currentFilters, dispatch]);

  if (isLoading && cars.length === 0) {
    return <Loader />;
  }

  if (error) {
    return <p className={s.errorMessage}>Error: {error}</p>;
  }

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(fetchCars({ page: nextPage, ...currentFilters }));
  };

  return (
    <>
      {cars.length === 0 && !isLoading && !error ? (
        <p className={s.notFound}>No cars available</p>
      ) : (
        <ul className={s.containerListCar}>
          {cars?.length > 0 &&
            cars.map((item) => <CarItem key={item.id} {...item} />)}
        </ul>
      )}
      {currentPage < pageInfo.totalPages && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
    </>
  );
};

export default CarList;
