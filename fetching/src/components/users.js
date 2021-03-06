import React, { useEffect, useState } from "react";
import axios from "axios";
import {useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import User from "./user";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { path, url } = useRouteMatch();
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsers(data.data);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>
          <NavLink
            activeStyle={{ backgroundColor: "blue" }}
            to={`${url}/${user.id}`}
          >
            {user.name}
          </NavLink>
        </div>
      ))}
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User} />
      </Switch>
    </div>
  );
}
