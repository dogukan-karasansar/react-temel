import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes";

export default function NoteForm() {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const [color, setColor] = useState("pink");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note) {
      return;
    }
    dispatch(addNote({ note: note, color: color }));
    setNote("");
    setColor("pink");
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <textarea
          cols="60"
          rows="10"
          style={{ borderRadius: "5px" }}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "pink",
              borderWidth: "0px",
              margin: "5px",
            }}
            type="button"
            onClick={() => setColor("pink")}
          />
          <input
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "yellow",
              borderWidth: "0px",
              margin: "5px",
            }}
            type="button"
            onClick={() => setColor("yellow")}
          />
          <input
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "green",
              borderWidth: "0px",
              margin: "5px",
            }}
            type="button"
            onClick={() => setColor("green")}
          />
          <input
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "red",
              borderWidth: "0px",
              margin: "5px",
            }}
            type="button"
            onClick={() => setColor("red")}
          />
          <button
            style={{
              marginLeft: "150px",
              width: "100px",
              height: "45px",
              borderWidth: "0px",
              backgroundColor: "pink",
              borderRadius: "5px",
              marginTop: "5px",
              color: "white",
              fontSize: "17px",
            }}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
