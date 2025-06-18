import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./CarDetailsPage.module.css";
import CarImgSection from "../../components/CarImgSection/CarImgSection.jsx";
import CarBookingForm from "../../components/CarBookingForm/CarBookingForm.jsx";
import { selectError, selectIsLoading } from "../../redux/cars/selectors.js";
import CarInfoSection from "../../components/CarInfoSection/CarInfoSection.jsx";
import { api } from "../../redux/cars/operations.js";

const CarDetailsPage = () => {
  const { id } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await api.get(`/cars/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCar();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!car) {
    return <div>Car not found.</div>;
  }
  return (
    <div className={s.detailsPageContainer}>
      <div className={s.detailsContent}>
        <div className={s.leftSection}>
          <CarImgSection img={car.img} altText={`${car.make} ${car.model}`} />
          <CarBookingForm />
        </div>
        <div className={s.rightSection}>
          <CarInfoSection car={car} />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
