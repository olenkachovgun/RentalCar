import React, { useEffect } from "react";
import CarItem from "../CarItem/CarItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors.js";
import { fetchCars } from "../../redux/cars/operations.js";
import s from "./CarList.module.css";

const CarList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchCars({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);
  console.log("CarsList -", cars);

  return (
    <ul className={s.containerListCar}>
      {cars.cars.map((item) => (
        <CarItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CarList;
