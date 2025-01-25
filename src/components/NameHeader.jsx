import { useTranslation } from 'react-i18next';
import * as motion from "motion/react-client";

export const NameHeader = () => {
  const {t} = useTranslation();

  return (
    <div
      className='flex flex-col w-full paddingCards items-center justify-center rounded-2xl shadow-2xl bg-primary md:text-center md:h-96 md:max-h-96'>
      <div className='font-semibold font-fancy'>
        <motion.p
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{
            duration: 2.5,
            delay: 0.7,
            ease: 'linear', type: 'spring'
          }}
          style={nameParagraph}
        >Daniel Bustos Ruiz
        </motion.p>
      </div>

      <div className='md:w-2/3 text-balance'>
        <motion.p
          className='secondaryText'
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{
            duration: 2.5,
            delay: 1.25,
            ease: 'linear', type: 'spring'
          }}
        >
          {t('my-description')}
        </motion.p>
      </div>

      <div className='my-6 px-6 socialMedia'>
        <motion.ul
          className='flex md:gap-12 space-x-4 underline underline-offset-8'
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{
            duration: 2.5,
            delay: 1.25,
            ease: 'linear', type: 'spring'
          }}
        >
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
          >
            <a href='#'>{t('resume')}</a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
          >
            <a href='https://www.linkedin.com/in/daniel-bustos-ruiz/' target={'_blank'}>LinkedIn</a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
          >
            <a href='https://github.com/DannyB935' target={'_blank'}>GitHub</a>
          </motion.li>
        </motion.ul>
      </div>

    </div>
  )
}

const nameParagraph = {
  fontSize: '58px',
  fontStyle: 'italic',
}