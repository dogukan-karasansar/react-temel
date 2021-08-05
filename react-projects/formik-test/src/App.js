import { useFormik } from "formik";
import React from "react";

export default function App() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: "Doğukan",
      lastName: "Karasansar",
      email: "dkn@email.com",
      gender: "female",
      hobies: [],
      country: "tr",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          onChange={handleChange}
          name="firstName"
          placeholder="Jane"
          value={values.firstName}
        />
        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          onChange={handleChange}
          name="lastName"
          placeholder="Doe"
          value={values.lastName}
        />
        <br></br>

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
        <label htmlFor="gender">Cinsiyet</label>
        <span>Erkek</span>
        <input
          name="gender"
          value="male"
          onChange={handleChange}
          type="radio"
          checked={values.gender === "male"}
        />
        <span>Kadın</span>
        <input
          name="gender"
          value="female"
          onChange={handleChange}
          type="radio"
          checked={values.gender === "female"}
        />
        <br></br>
        <div>
          Football
          <input
            type="checkbox"
            name="hobies"
            value="football"
            onChange={handleChange}
          />
        </div>

        <div>
          Cinema
          <input
            type="checkbox"
            name="hobies"
            value="cinema"
            onChange={handleChange}
          />
        </div>

        <div>
          Walk
          <input
            type="checkbox"
            name="hobies"
            value="walk"
            onChange={handleChange}
          />
        </div>

        <br></br>
        <select value={values.country} onChange={handleChange} name="country">
          <option value="tr">TR</option>
          <option value="eng">ENG</option>
          <option value="abd">ABD</option>
        </select>
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}
