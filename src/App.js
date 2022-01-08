import React, { useState } from "react";
import { localStorageData } from "./localStorageData";
import { IntlProvider } from "react-intl";
import { translate } from "./translations";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  const [lang, setLang] = useState(localStorageData.getLocale() || "en-UK");

  return (
    <IntlProvider
      locale={lang}
      formats={{ number: "en" }}
      messages={translate[lang]}
    >
      <BrowserRouter>
        <Routes lang={lang} setLang={setLang} />
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
