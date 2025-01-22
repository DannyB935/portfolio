import { useTranslation } from 'react-i18next';
import * as motion from "motion/react-client";

export const WorkExperience = () => {
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
        <h3 className={'text-center text-gray-700 mb-6 italic'}>{t('work')}</h3>
        <ul className={'space-y-4'}>
          <li>
            <p className={'secondaryText text-gray-600'}>
              {t('second-job.title')} - Universidad de Guadalajara
            </p>
            <p className={'smallText text-gray-600'}>{t('second-job.start')} - {t('second-job.finish')}</p>
          </li>
          <li>
            <p className={'secondaryText text-gray-600'}>
              {t('first-job.title')} - Universidad de Guadalajara
            </p>
            <p className={'smallText text-gray-600'}>{t('first-job.start')} - {t('first-job.finish')}</p>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}