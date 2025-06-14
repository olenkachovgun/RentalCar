import React from "react";
import s from "./CarItem.module.css";
import { NavLink } from "react-router-dom";
import {
  carTypeFormat,
  formatMileage,
  parseAddress,
} from "../../utils/formatters.js";

const CarItem = ({
  id,
  year,
  model,
  brand,
  img,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  const { city, country } = parseAddress(address);

  return (
    <li className={s.carCard}>
      <div className={s.itemImg}>
        <img src={img} alt={`${brand} ${model} ${year}`} loading="lazy" />
      </div>

      <div className={s.itemInfo}>
        <h3 className={s.carName}>
          {brand} <span className={s.model}>{model}</span>, {year}
        </h3>
        <p className={s.price}>${rentalPrice}</p>
      </div>
      <div className={s.detailsBlock}>
        <p className={s.detailItem}>
          <span>{city}</span>
          <span>{country}</span>
          <span>{rentalCompany}</span>
        </p>
        <p className={s.detailItem}>
          <span>{carTypeFormat(type)}</span>
          <span>{formatMileage(mileage)}</span>
        </p>
      </div>
      <NavLink to={`/catalog/${id}`} className={s.readMoreBtn}>
        Read more
      </NavLink>
    </li>
  );
};

export default CarItem;
