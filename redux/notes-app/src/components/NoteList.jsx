import React from "react";
import { useSelector } from "react-redux";

export default function NoteList() {
  const items = useSelector((state) => state.notes.items);
  const filterKey = useSelector((state) => state.notes.filterKey);

  return (
    <div style={{ display: "flex", marginTop: "20px", flexDirection: "row" }}>
      {items
        .filter((item) => item["note"].toLowerCase().includes(filterKey))
        .map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              width: "auto",
              height: "40px",
              backgroundColor: item.color,
              borderRadius: "4px",
              alignItems: "center",
              color: "black",
              fontSize: "17px",
              margin: "5px",
              paddingRight: "15px",
              paddingLeft: "5px",
            }}
          >
            {item.note}
          </div>
        ))}
    </div>
  );
}
