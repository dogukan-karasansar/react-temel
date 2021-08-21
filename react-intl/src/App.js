import { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import "./App.css";

function App() {
  const defaultLocale = localStorage.getItem("localKey") ?  localStorage.getItem("localKey") :  navigator.language;
  console.log(defaultLocale);
  const messages = {
    "tr-TR": {
      title: "Merhaba Dünya",
      description: "yeni mesajlarınız geldi",
    },
    "en-US": {
      title: "Hello World",
      description: "you have new messages",
    },
  };
  const [locale, setLocale] = useState(defaultLocale);
  useEffect(() => {
    localStorage.setItem("localKey", locale);
  }, [locale]);
  return (
    <div className="App">
      <IntlProvider messages={messages[locale]}>
        <FormattedMessage id="title" />
        <br />
        <FormattedMessage id="description" />
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
