import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();
  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {char && (
        <>
          <div>
            <h1>{char.name}</h1>
            <img src={char.img} style={{ width: "50%" }} alt={char.name}/>
          </div>
        </>
      )}
      {char && <pre>{JSON.stringify(char, null, 2)}</pre>}
    </div>
  );
}
