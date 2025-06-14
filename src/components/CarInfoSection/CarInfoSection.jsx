import React from "react";
import s from "./CarInfoSection.module.css";
import { formatMileage, parseAddress } from "../../utils/formatters.js";

const CarInfoSection = ({ car }) => {
  const { city, country } = parseAddress(car.address);
  return (
    <div>
      <div className={s.mainInfo}>
        <h2 className={s.titleCar}>
          {`${car.brand} ${car.model}, ${car.year}`}

          <span className={s.titleSpan}> id:5555</span>
        </h2>
        <p className={s.adressCar}>
          {city}, {country}
          <span className={s.mileageCar}>
            Mileage: {formatMileage(car.mileage)}
          </span>
        </p>
        <p className={s.priceCar}>{`$${car.rentalPrice}`}</p>
        <p className={s.descCar}>{car.description}</p>
      </div>
      <div className={s.rental}>
        <ul>Rental Conditions: </ul>
        {car.rentalConditions.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <div className={s.specifications}>
        <h3>Car Specifications: </h3>
      </div>
      <div className={s.accessories}>
        <h3>Accessories and functionalities:</h3>
      </div>
    </div>
  );
};

export default CarInfoSection;
