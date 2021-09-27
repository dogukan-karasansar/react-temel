import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSelectKey } from "../redux/notes";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <input
      style={{
        borderRadius: "10px",
        borderWidth: "0.8px",
        borderColor: "#d9d9d9",
        width: "200px",
        height: "30px",
      }}
      placeholder="Search..."
      type="text"
      onChange={(e) => {
        dispatch(filterSelectKey(e.target.value));
      }}
    />
  );
}
