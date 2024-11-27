// src/components/formikForm.js
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Form submission handler
  const onSubmit = (values) => {
    console.log("Form data submitted:", values);
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="p" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="p" className="error" />
            </div>

            <div>
              <button type="submit">Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
