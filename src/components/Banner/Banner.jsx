import { NavLink } from "react-router-dom";
import s from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={s.bannerContainer}>
      <h1 className={s.bannerTitle}>Find your perfect rental car</h1>
      <p className={s.bannerText}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <NavLink to="/catalog" className={s.banerButton}>
        View Catalog
      </NavLink>
    </div>
  );
};

export default Banner;
