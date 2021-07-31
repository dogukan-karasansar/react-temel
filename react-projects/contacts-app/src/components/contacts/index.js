import React, { useEffect, useState } from "react";
import List from "./list";
import Form from "./form/index";
import "./styles.css";

export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Doğukan",
      phoneNumber: "12344324123",
    },
    {
      fullName: "Ayşe",
      phoneNumber: "342313123123",
    },
    {
      fullName: "Nazlı",
      phoneNumber: "554423",
    },
  ]);
  useEffect(() => {}, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}
