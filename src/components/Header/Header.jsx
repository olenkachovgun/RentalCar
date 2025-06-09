import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <img
          src="/public/rent-car-logo.svg"
          alt="RentalCar Logo"
          className={s.logo}
        />
      </NavLink>
      <nav className={s.navHeader}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
