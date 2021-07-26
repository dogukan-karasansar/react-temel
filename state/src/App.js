import { useState } from "react";

function App() {
  const [name, setName] = useState("Doğukan");
  const [age, setAge] = useState(19);
  const [friends, setFriends] = useState(["ahmet", "mehmet"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34 });
  return (
    <div className="app">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("İbo")}>isim seç</button>
      <button onClick={() => setAge(25)}>yaş seç</button>
      <br />
      {friends.map((data) => {
        return <div>{data}</div>;
      })}
      <button onClick={() => setFriends([...friends, "ayşe"])}>
        Friends ata
      </button>
      <br />
      <h3>
        Adres: {address.title} /{" "}
        {address.zip.toString().length > 1 ? address.zip : "0" + address.zip}
      </h3>
      <button
        onClick={() => setAddress({ ...address, zip: 6, title: "Ankara" })}
      >
        Adres Ata
      </button>
    </div>
  );
}

export default App;
