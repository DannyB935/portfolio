import {Toolbar} from "./components/Toolbar.jsx";
import {NameHeader} from "./components/NameHeader.jsx";
import {WorkExperience} from "./components/WorkExperience.jsx";
import {Skills} from "./components/Skills.jsx";
import {EcoMeeting} from "./components/EcoMeeting.jsx";

import {motion} from "motion/react"
import {useTranslation} from "react-i18next";

function App() {
  const {t} = useTranslation();

  return (
    <>
      <section>
        <Toolbar/>
        <NameHeader/>
        <div className='w-full my-4 md:my-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <WorkExperience/>
          <Skills/>
        </div>
        <motion.h1
          className={'text-contrast-mine text-center'}
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{
            duration: 2.5,
            delay: 1.25,
            ease: 'linear', type: 'spring'
          }}
        >
          {t('projects')}
        </motion.h1>
      </section>
      <section>
        <EcoMeeting/>
      </section>
    </>
  )
}

export default App
