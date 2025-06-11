import React, { useEffect } from "react";
import CarItem from "../CarItem/CarItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPagination,
} from "../../redux/cars/selectors.js";
import { fetchCars } from "../../redux/cars/operations.js";
import s from "./CarList.module.css";
import LoadMore from "../LoadMore/LoadMore.jsx";
import Loader from "../Loader/Loader.jsx";

const CarList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pageInfo = useSelector(selectPagination);
  const cars = useSelector(selectCars) || [];
  const currentPage = pageInfo.page || 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (cars.length === 0 && !isLoading && !error) {
      const abortController = new AbortController();
      dispatch(fetchCars(1, { signal: abortController.signal }));
      return () => {
        abortController.abort();
      };
    }
  }, [dispatch, cars.length, isLoading, error]);

  console.log("CarsList -", cars);

  if (isLoading && cars.length === 0) {
    return <Loader />;
  }
  if (error) {
    return <p className={s.errorMessage}>Error: {error}</p>;
  }
  const handleLoadMore = () => {
    dispatch(fetchCars(currentPage + 1));
  };

  return (
    <>
      <ul className={s.containerListCar}>
        {cars?.length > 0 &&
          cars.map((item) => <CarItem key={item.id} {...item} />)}
      </ul>
      {currentPage < pageInfo.totalPages && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
    </>
  );
};

export default CarList;
