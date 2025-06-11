import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import s from "./CarFilterForm.module.css";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";

const CarFilterForm = ({ initialValues }) => {
  const dispatch = useDispatch();
  const FeedbackSchema = Yup.object().shape({
    brand: Yup.string(),
    rentalPrice: Yup.string(),
    minMileage: Yup.string(),
    maxMileage: Yup.string(),
  });
  const defaultValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };
  const onSubmit = (values, action) => {
    const query = {
      brand: values.brand,
      rentalPrice: values.rentalPrice,
      minMileage: values.minMileage,
      maxMileage: values.maxMileage,
      page: 1,
    };

    dispatch(fetchCars(query));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues || defaultValues}
        onSubmit={onSubmit}
        validationSchema={FeedbackSchema}
        enableReinitialize={true}
      >
        <Form>
          <label htmlFor="brand">Car brand</label>
          <Field as="select" id="brand" name="brand">
            <option value="">Choose a brand</option>
            <option value="BMW">BMW</option>
            <option value="Volvo">Volvo</option>
          </Field>
          <label htmlFor="rentalPrice">Price / 1 hour</label>
          <Field as="select" id="rentalPrice" name="rentalPrice">
            <option value="">Choose a price</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </Field>
          <label htmlFor="minMileage">Car mileage / km</label>
          <Field
            type="number"
            id="minMileage"
            name="minMileage"
            placeholder="From"
          />
          <Field
            type="number"
            id="minMileagee"
            name="maxMileage"
            placeholder="To"
          />

          <button type="submit" className={s.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CarFilterForm;
