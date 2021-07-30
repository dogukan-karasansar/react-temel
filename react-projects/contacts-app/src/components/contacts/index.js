import React, { useEffect, useState } from "react";
import List from "./list";
import Form from "./form/index";
import App from "../../App.css";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div style={App}>
      <List />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}
