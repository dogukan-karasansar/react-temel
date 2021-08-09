import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <br />
      <Button />
    </ThemeProvider>
  );
}

export default App;
