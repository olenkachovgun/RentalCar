import React from "react";
import s from "./CarImgSection.module.css";

const CarImgSection = ({ img, altText }) => {
  return <img src={img} alt={altText} className={s.carImg} />;
};

export default CarImgSection;
