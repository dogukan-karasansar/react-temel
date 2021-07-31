import React, { useState } from "react";

export default function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  console.log(filtered);
  return (
    <div>
      <input
        onChange={(e) => setFilterText(e.target.value)}
        placeholder={"Filter"}
        value={filterText}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullName}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      {`Total Contacts: ${filtered.length}`}
    </div>
  );
}
