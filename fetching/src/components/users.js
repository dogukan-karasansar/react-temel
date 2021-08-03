import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsers(data.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`user/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}
