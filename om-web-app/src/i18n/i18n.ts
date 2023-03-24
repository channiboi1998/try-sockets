import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
    ns: [],
    defaultNS: [],
  });

export default i18n;
