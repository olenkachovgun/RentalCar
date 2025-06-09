import React from "react";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <div>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p>Reliable and budget-friendly rentals for any journey</p>
        <button>View Catalog</button>
      </div>
    </div>
  );
};

export default HomePage;
