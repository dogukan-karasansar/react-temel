import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";

export default function Home() {
  const data = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
