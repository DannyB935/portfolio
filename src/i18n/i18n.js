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
          "frameworks": "Frameworks & libraries",
          "projects": "My Projects",
          "ecomeeting":{
            "description": "EcoMeeting was a school project. A social network where people can share tips, ideas or arrange meetings to help the environment.",
            "tips": "In this section people can share their tips and give them like or report them.",
            "meetings": "People not only could arrange meetings, they can also post things related to the environment.",
            "contact": "A simple form in which people can send suggestions, reports or contact us for any other issue."
          }
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
          "frameworks": "Frameworks & Librerías",
          "projects": "Mis Proyectos",
          "ecomeeting":{
            "description": "EcoMeeting fue un proyecto escolar. Una red social donde la gente puede compartir tips, ideas u organizarse para ayudar al medioambiente.",
            "tips": "En esta sección la gente puede compartir sus tips y las personas podríandar me gusta o reportarlos.",
            "meetings": "Además de realizar reuniones, la gente puede publicar cosas relacionadas con el medioambiente.",
            "contact": "Un formulario sencillo en el cual la gente puede enviar sugerencias, reportes o contactarnos para algún otro tema."
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
            escapeValue: false
        },
    });

export default i18n;