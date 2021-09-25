import React from "react";

export default function Error({ message }) {
  return (
    <div style={{ padding: "15px", fontSize: "15px", color: "red" }}>
      Error: {message}
    </div>
  );
}
