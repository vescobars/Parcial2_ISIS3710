import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEnMessages from "./locales/en.json";
import localeEsMessages from "./locales/es.json";
import {IntlProvider} from "react-intl";

const rawLocale = (navigator.userLanguage || navigator.language || navigator.browserLanguage).toLowerCase();
let locale;

if (rawLocale.startsWith("es")) {
  locale = "es";
} else {
  locale = "en";
}

const messages = locale.startsWith("es") ? localeEsMessages : localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages} >
        <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
