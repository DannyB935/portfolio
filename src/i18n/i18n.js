import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
          "my-description": "I'm a full-stack developer who loves creating great frontend designs to give great user experiences. I also build backends with ease and enjoy learning new tools and technologies",
          "resume": "Resume",
          "work": "Work experience",
          "first-job": {
            "title": "Maintenance on informatic systems",
            "start": "June 2023",
            "finish": "May 2024",
          },
          "second-job": {
            "title": "Administrative Assistant",
            "start": "June 2024",
            "finish": "Present"
          },
          "skills": "Skills & Technologies",
          "languages": "Programming Languages",
          "frameworks": "Frameworks & libraries"
        }
    },
    es: {
        translation: {
          "my-description": "Soy un desarrollador full-stack que le gusta crear grandes diseños frontend para dar grandes experiencias de usuario. También puedo crear backends con facilidad y disfruto aprendiendo nuevas herramientas y tecnologías",
          "resume": "Curriculum Vitae",
          "work": "Experiencia laboral",
          "first-job": {
            "title": "Matenimiento de sistemas informaticos",
            "start": "Junio 2023",
            "finish": "Mayo 2024",
          },
          "second-job": {
            "title": "Auxiliar Administrativo",
            "start": "Junio 2024",
            "finish": "Presente"
          },
          "skills": "Lenguajes & Tecnologías",
          "languages": "Lenguajes de Programación",
          "frameworks": "Frameworks & Librerías"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;