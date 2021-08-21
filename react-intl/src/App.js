import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import "./App.css";

function App() {
  const messages = {
    "tr-TR": {
      title: "Merhaba Dünya",
      description: "yeni mesajlarınız geldi",
    },
    "en-EN": {
      title: "Hello World",
      description: "you have new messages",
    },
  };
  const [lang, setLang] = useState("tr-TR");
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id="title" />
        <br />
        <FormattedMessage id="description" />
        <br />
        <br />
        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-EN")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
