import { useState } from "react";

export default function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <span>Name</span>
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      <span>Surname</span>
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      Ad :{form.name}
      <br />
      Soyad: {form.surname}
    </div>
  );
}
