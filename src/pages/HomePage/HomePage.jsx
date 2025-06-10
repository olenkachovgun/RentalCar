import s from "./HomePage.module.css";
import Banner from "../../components/Banner/Banner.jsx";

const HomePage = () => {
  return (
    <div className={s.container}>
      <Banner />
    </div>
  );
};

export default HomePage;
