import React from "react";
import s from "./CarItem.module.css";
import { NavLink } from "react-router-dom";

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
  const addressParts = address ? address.split(", ") : [];
  const city = addressParts[addressParts.length - 2] || "";
  const country = addressParts[addressParts.length - 1] || "";
  const mileageInKm = mileage ? mileage * 1.60934 : 0;
  const formattedMileage =
    mileageInKm !== 0
      ? Math.round(mileageInKm).toLocaleString("en-US").replace(/,/g, " ")
      : "N/A";

  return (
    <li className={s.carCard}>
      <div className={s.itemImg}>
        <img src={img} alt={`${brand} ${model} ${year}`} />
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
          <span>{type}</span>
          <span>{formattedMileage} km</span>
        </p>
      </div>
      <NavLink to={`/catalog/${id}`} className={s.readMoreBtn}>
        Read more
      </NavLink>
    </li>
  );
};

export default CarItem;
