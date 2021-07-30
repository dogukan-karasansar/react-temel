import React, { useEffect, useState } from "react";

const initalFormValues = { fullName: "", phoneNumber: "" };
export default function Form({ contacts, addContact }) {
  const [form, setForm] = useState(initalFormValues);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(initalFormValues)
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }
    addContact([...contacts, form]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            onChange={onChangeInput}
            name="fullName"
            placeholder="Name"
            value={form.fullName}
          />
        </div>
        <div>
          <input
            onChange={onChangeInput}
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
