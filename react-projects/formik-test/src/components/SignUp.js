import { useFormik } from "formik";
import React from "react";
import validations from "./Validation";

export default function SignUp() {
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
          email: "",
          password: "",
          passwordConfirm: "",
        },
        onSubmit: (values) => {
          console.log(values);
        },
        validationSchema: validations
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
        />

        <br></br>
        <label htmlFor="email">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
        <br></br>
        <label htmlFor="email">Password Confirm</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
          value={values.passwordConfirm}
        />
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}
