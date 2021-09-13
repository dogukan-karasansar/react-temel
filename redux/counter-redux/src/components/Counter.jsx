import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  console.log(value);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}
