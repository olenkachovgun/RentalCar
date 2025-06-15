import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";
registerLocale("en-US", enUS);
import toast, { Toaster } from "react-hot-toast";
import s from "./CarBookingForm.module.css";
import DatePicker from "react-datepicker";

const CarBookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").trim().max(52),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .max(52),
    bookingDate: Yup.date()
      .nullable()
      .min(new Date(), "Booking date cannot be in the past")
      .optional(),
    comment: Yup.string().optional().max(200),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formattedValues = {
        ...values,
        bookingDate: values.bookingDate
          ? values.bookingDate.toISOString()
          : null,
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data submitted:", formattedValues);
      toast.success("Your car booking has been successfully sent!");
      resetForm();
    } catch (error) {
      toast.error("Booking failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={s.carBookingFormContainer}>
      <h3 className={s.formTitle}>Book your car now</h3>
      <p className={s.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <Form className={s.form}>
            <div className={s.formField}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={s.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={s.errorText}
              />
            </div>
            <div className={s.formField}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={s.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={s.errorText}
              />
            </div>

            <div className={s.formField}>
              <DatePicker
                selected={values.bookingDate}
                onChange={(date) => {
                  setFieldValue("bookingDate", date);
                }}
                onBlur={() => setFieldTouched("bookingDate", true)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                placeholderText="Booking date"
                className={s.input}
                locale="en-US"
                isClearable
                formatWeekDay={(nameOfDay) =>
                  nameOfDay.toUpperCase().slice(0, 3)
                }
              />
              {errors.bookingDate && touched.bookingDate && (
                <div className={s.errorText}>{errors.bookingDate}</div>
              )}
            </div>
            <div className={s.formField}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={`${s.input} ${s.textarea}`}
                // rows="5"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={s.errorText}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={s.sendButton}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CarBookingForm;
