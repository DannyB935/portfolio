import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "test": "Hi",
            "main":{
              "test": "Testing"
            }
        }
    },
    es: {
        translation: {
            "test": "Hola",
            "main":{
              "test": "Probando"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        },
    });

export default i18n;