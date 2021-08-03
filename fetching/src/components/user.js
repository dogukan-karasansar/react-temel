import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export default function User() {
  const { id } = useParams();
  const [loading, setSoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setSoading(false));
  }, [id]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}

      <p>Detail</p>
      <h5>{id}</h5>
      <h5>{user.username}</h5>
      <Link to={`/users/${parseInt(id) + 1}`}>Next User</Link>
    </div>
  );
}
