import { Formik } from "formik";
import React from "react";

export default function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              onChange={handleChange}
              name="firstName"
              placeholder="Jane"
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              onChange={handleChange}
              name="lastName"
              placeholder="Doe"
            />
            <br></br>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
            />
            <br></br>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
