import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Button() {
  const data = useContext(ThemeContext);
  console.log(data);
  return <div>Button {data}</div>;
}
