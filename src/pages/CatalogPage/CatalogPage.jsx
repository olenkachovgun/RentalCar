import CarFilterForm from "../../components/CarFilterForm/CarFilterForm.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import LoadMore from "../../components/LoadMore/LoadMore.jsx";

const CatalogPage = () => {
  return (
    <div>
      <CarFilterForm />
      <CarList />
      <LoadMore />
    </div>
  );
};

export default CatalogPage;
