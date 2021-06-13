import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Login.css";

export default function Login() {
  return (
    <div className="formik1">
      <Formik
        initialValues={{
          email: "",

          password: "",

          agree: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
          agree: Yup.bool().oneOf([true]),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 2000);
        }}
      >
        {({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleSubmit,
          handleReset,
          handleChange,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
           <div className="logIn">
           <h3>Log in</h3>
           </div>
    
            <label htmlFor="email" className="topMargin"></label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="input"
              value={values.email}
              onChange={handleChange}
            />

            <label htmlFor="password" className="topMargin"></label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="input"
              value={values.password}
              onChange={handleChange}
            />
            <div className="checkbox1">
              <input
                id="agree"
                type="checkbox"
                value={values.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="checkbox-label">
                Remember me
              </label>
            </div>
            {errors.agree && (
              <div className="input1">{errors.agree}</div>
            )}

            <button type="submit" disabled={!dirty || isSubmitting}>
              <u>Sign in</u>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
