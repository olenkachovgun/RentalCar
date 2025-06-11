import CarFilterForm from "../../components/CarFilterForm/CarFilterForm.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import s from "./CatalogPage.module.css"

const CatalogPage = () => {
  return (
    <div className={s.catalogPageContainer}>
      <CarFilterForm />
      <CarList />
      
    </div>
  );
};

export default CatalogPage;
