import { useTranslation } from 'react-i18next';
import * as motion from "motion/react-client";

export const Skills = () => {
  const {t} = useTranslation();

  return (
    <div className='flex flex-col paddingCards items-center justify-center rounded-2xl shadow-2xl bg-secondary md:h-96 md:max-h-96'>
      <motion.div
        className={'flex flex-col'}
        initial={{opacity: 0, y: -30}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 2.5,
          delay: 1.25,
          ease: 'linear', type: 'spring'
        }}
      >
        <h3 className={'text-gray-700 mb-6 italic text-center'}>{t('skills')}</h3>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'}>

          <div className={'secondaryText ml-4'}>
            <h5 className={'text-gray-700'}>{t('languages')}</h5>
            <ul className={'space-y-2 text-gray-600 list-disc smallText'}>
              <li>Python</li>
              <li>JavaScript/TypeScript</li>
              <li>C#</li>
              <li>C++</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className={'secondaryText ml-4'}>
            <h5 className={'text-gray-700'}>{t('frameworks')}</h5>
            <ul className={'space-y-2 text-gray-600 list-disc smallText'}>
              <li>React, Vue, Angular</li>
              <li>Flask, FastAPI, .NET Core 8</li>
              <li>TailwindCSS, Bootstrap 5, Webix</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}