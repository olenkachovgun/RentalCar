import React from "react";
import s from "./CarInfoSection.module.css";
import {
  carTypeFormat,
  formatMileage,
  parseAddress,
} from "../../utils/formatters.js";

const CarInfoSection = ({ car }) => {
  const { city, country } = parseAddress(car.address);

  return (
    <ul>
      <li className={s.mainInfo}>
        <h2 className={s.titleCar}>
          {`${car.brand} ${car.model}, ${car.year}`}

          <span className={s.titleSpan}>
            Id:
            {car.img.match(/\/(\d{4})-/)?.[1]}
          </span>
        </h2>
        <p className={s.adressCar}>
          <svg className="icon-year" width="16" height="16">
            <use href={`/icons.svg#icon-location`}></use>
          </svg>
          {city}, {country}
          <span className={s.mileageCar}>
            Mileage: {formatMileage(car.mileage)}
          </span>
        </p>
        <p className={s.priceCar}>{`$${car.rentalPrice}`}</p>
        <p className={s.descCar}>{car.description}</p>
      </li>
      <li className={s.rental}>
        <ul>
          <h3 className={s.titleInfo}>Rental Conditions:</h3>
          {car.rentalConditions.map((item) => (
            <li className={s.textInfo}>
              <svg className={s.iconItem} width="16" height="16">
                <use href={`/icons.svg#icon-item`}></use>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </li>
      <li className={s.specifications}>
        <ul>
          <h3 className={s.titleInfo}>Car Specifications: </h3>
          <li className={s.textInfo}>
            <svg className={s.iconItem} width="16" height="16">
              <use href={`/icons.svg#icon-calendar`}></use>
            </svg>
            Year: {car.year}
          </li>
          <li className={s.textInfo}>
            <svg className={s.iconItem} width="16" height="16">
              <use href={`/icons.svg#icon-car`}></use>
            </svg>
            Type: {carTypeFormat(car.type)}
          </li>
          <li className={s.textInfo}>
            <svg className={s.iconItem} width="16" height="16">
              <use href={`/icons.svg#icon-fuel`}></use>
            </svg>
            Fuel Consumption: {car.fuelConsumption}
          </li>
          <li className={s.textInfo}>
            <svg className={s.iconItem} width="16" height="16">
              <use href={`/icons.svg#icon-setting`}></use>
            </svg>
            Engine Size: {car.engineSize}
          </li>
        </ul>
      </li>
      <li className={s.accessories}>
        <ul>
          <h3 className={s.titleInfo}>Accessories and functionalities:</h3>
          {[...car.accessories, ...car.functionalities].map((item) => (
            <li className={s.textInfo}>
              <svg className={s.iconItem} width="16" height="16">
                <use href={`/icons.svg#icon-item`}></use>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default CarInfoSection;
