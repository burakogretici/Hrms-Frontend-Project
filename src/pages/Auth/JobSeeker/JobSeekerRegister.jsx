import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { date } from "yup";
import './JobSeekerRegister.css';

export default function JobSeekerRegister() {
  return (
      <div className="formik" >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            nationalityId: "",
            email: "",
            dateOfBirth: date,
            password: "",
            confirmPassword: "", 
            agree: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            nationalityId: Yup.string().required(),
            email: Yup.string().email().required(),
            dateOfBirth: Yup.date().required(),
            password: Yup.string().required(),
            confirmPassword: Yup.string().required(),
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
              <div className="signUp">
              <h3>Sign Up</h3>
              </div>
              <label htmlFor="firstName"></label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="input"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName && (
                <div className="input-feedback">{errors.firstName}</div>
              )}
              <label htmlFor="lastName" ></label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="input"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && touched.lastName && (
                <div className="input-feedback">{errors.lastName}</div>
              )}
              <label htmlFor="nationalityId"></label>
              <input
                id="nationalityId"
                type="text"
                placeholder="Nationality Id "
                className="input"
                value={values.nationalityId}
                onChange={handleChange}
              />
              {errors.nationalityId && touched.nationalityId && (
                <div className="input-feedback">{errors.nationalityId}</div>
              )}
              <label htmlFor="email" className="topMargin">
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="input"
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="dateOfBirth"></label>
              <input
                id="dateOfBirth"
                type="date"
                placeholder="Date of Birth"
                className="input"
                value={values.dateOfBirth}
                onChange={handleChange}
              />
              {errors.dateOfBirth && touched.dateOfBirth && (
                <div className="input-feedback">{errors.dateOfBirth}</div>
              )}
             <label htmlFor="password"></label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="input"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
                <label htmlFor="confirmPassword"></label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="input"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="input-feedback">{errors.confirmPassword}</div>
              )}
              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox-label">
                  By accepting the contract.
                </label>
              </div>
              {errors.agree && (
                <div className="input-feedback">{errors.agree}</div>
              )}
              
              <button type="submit" disabled={!dirty || isSubmitting}>
                <u>Submit</u>
              </button>
            </form>
          )}
        </Formik>
      </div>
  );
}
