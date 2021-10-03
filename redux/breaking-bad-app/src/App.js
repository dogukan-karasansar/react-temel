import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Detail from './pages/detail/detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/char/:char_id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
