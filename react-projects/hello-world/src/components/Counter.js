import { useEffect, useState } from "react";

export default function Counter() {
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
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval);
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
