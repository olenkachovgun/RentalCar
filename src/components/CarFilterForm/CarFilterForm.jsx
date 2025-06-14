import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import s from "./CarFilterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { api, fetchCars } from "../../redux/cars/operations.js";
import { clearFilters, setFilters } from "../../redux/cars/slice.js";
import { selectFilters } from "../../redux/cars/selectors.js";
import { useEffect, useState } from "react";
import customSelectStyles from "./customSelectStyles.js";

const CarFilterForm = () => {
  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);
  const currentFilters = useSelector(selectFilters);

  const validationSchema = Yup.object().shape({
    brand: Yup.string(),
    rentalPrice: Yup.string(),
    minMileage: Yup.string().matches(/^\d*$/, "Must be a number").nullable(),
    maxMileage: Yup.string()
      .matches(/^\d*$/, "Must be a number")
      .nullable()
      .test("is-greater", "Must be greater than min mileage", function (value) {
        const { minMileage } = this.parent;
        if (!value || !minMileage) return true;
        return Number(value) > Number(minMileage);
      }),
  });

  const defaultValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await api.get("/brands");
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error.message);
      }
    };
    fetchBrands();
  }, []);

  const onSubmit = (values) => {
    const cleaned = Object.entries(values).reduce((acc, [key, val]) => {
      if (val !== "" && val !== null && val !== undefined) {
        acc[key] = val;
      }
      return acc;
    }, {});

    if (Object.keys(cleaned).length === 0) {
      dispatch(clearFilters());
      dispatch(fetchCars({ page: 1 }));
    } else {
      dispatch(setFilters(cleaned));
      dispatch(fetchCars({ page: 1, ...cleaned }));
    }
  };

  const brandOptions = [...brands.map((b) => ({ value: b, label: b }))];
  const priceOptions = [
    ...[30, 40, 50, 60, 70, 80].map((b) => ({
      value: b,
      label: b,
    })),
  ];

  return (
    <div>
      <Formik
        initialValues={currentFilters || defaultValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ setFieldValue, values }) => (
          <Form className={s.filterForm}>
            <div className={s.formGroup}>
              <label className={s.formLabel} htmlFor="brand">
                Car brand
              </label>
              <Select
                id="brand"
                name="brand"
                options={brandOptions}
                value={
                  brandOptions.find((opt) => opt.value === values.brand) || null
                }
                onChange={(option) =>
                  setFieldValue("brand", option?.value || "")
                }
                placeholder="Choose a brand"
                isClearable
                classNamePrefix="customSelect"
                styles={customSelectStyles}
              />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="rentalPrice" className={s.formLabel}>
                Price / 1 hour
              </label>
              <Select
                id="rentalPrice"
                name="rentalPrice"
                options={priceOptions}
                value={
                  priceOptions.find(
                    (opt) => opt.value === values.rentalPrice
                  ) || null
                }
                onChange={(option) =>
                  setFieldValue("rentalPrice", option?.value || "")
                }
                placeholder="Choose a price"
                isClearable
                classNamePrefix="customSelect"
                styles={customSelectStyles}
                formatOptionLabel={(option, { context }) =>
                  context === "value" ? `To $${option.value}` : option.label
                }
              />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="minMileage" className={s.formLabel}>
                Car mileage / km
              </label>
              <div className={s.mileageInputs}>
                <Field
                  type="number"
                  id="minMileage"
                  name="minMileage"
                  placeholder="From"
                  className={s.inputFieldFrom}
                />

                <Field
                  type="number"
                  id="maxMileage"
                  name="maxMileage"
                  placeholder="To"
                  className={s.inputFieldTo}
                />
              </div>
            </div>
            <button type="submit" className={s.searchBtn}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CarFilterForm;
