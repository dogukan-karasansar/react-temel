import "./App.css";
import User from "./components/User";
const friends = [
  { id: 1, name: "ahmet" },
  { id: 2, name: "mehmet" },
  { id: 3, name: "ayşe" },
];
function App() {
  return (
    <div>
      <User
        name="Doğukan"
        surname="Karasansar"
        age={19}
        isLogedIn={true}
        friends={friends}
        address={{
          title: "İstanbul",
          zip: 34513,
        }}
      />
    </div>
  );
}

export default App;
