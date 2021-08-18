import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  console.log(user);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, userName: "dodomania", bio: "skfdkfjsdkjfhsjdfsfhs" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "Loading" : "Login"}
        </button>
      )}
      <code>{JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}
