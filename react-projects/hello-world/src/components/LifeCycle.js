import { useEffect, useState } from "react";

export default function LifeCycle() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Ahmet");
  useEffect(() => {
    console.log("number state güncellendi");
  }, [number]);

  useEffect(() => {
    console.log("name state güncellendi");
  }, [name]);

  useEffect(() => {
    console.log("mount edildi");
  }, []);
  return (
    <div>
      {number}
      <button onClick={() => setNumber(number + 1)}>+</button>
      {name}
      <button onClick={() => setName("mehmet")}>+</button>
    </div>
  );
}
