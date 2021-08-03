import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Users from "./components/users";
import Error404 from "./components/error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeStyle={{ backgroundColor: "black" }} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: "black" }} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: "black" }} to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
