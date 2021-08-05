import { useFormik } from "formik";
import React from "react";
import validationSchema from "./Validation";

export default function SignUp() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />

        {errors.email && touched.email && (
          <div style={{ color: "red" }}>{errors.email}</div>
        )}

        <br></br>
        <label htmlFor="email">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
        <br></br>
        <label htmlFor="email">Password Confirm</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div style={{ color: "red" }}>{errors.passwordConfirm}</div>
        )}
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}
