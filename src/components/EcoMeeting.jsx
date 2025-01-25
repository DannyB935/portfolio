import {motion} from 'motion/react';
import {useTranslation} from "react-i18next";

import {EcoImages} from "../assets/ecomeeting/images.js";

export const EcoMeeting = () =>{

  const {t} = useTranslation();

  return (
    <section className={'flex flex-col items-center justify-center'}>
      <div className={'sticky top-0 h-[20vh] w-full text-center'}>
        <motion.h1
          className={'text-4xl font-semibold py-8'}
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{
            duration: 2.5,
            delay: 1.25,
            ease: 'linear', type: 'spring'
          }}
        >
          EcoMeeting
        </motion.h1>
      </div>
      {
        EcoImages.map((card, index) => (
          <div key={index} className={'h-[80vh] flex justify-center items-center sticky top-0 mb-[50vh]'}>
            <motion.div
              className={'bg-fourth shadow-2xl max-w-screen-2xl flex flex-col md:flex-row justify-between rounded-2xl p-4'}
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              <img className={'max-h-[40vh] md:max-w-[50%]'} src={card.image} alt={card.title}/>
              <div className={'flex flex-col md:max-w-[50%] justify-center'}>
                <h4 className={'font-semibold cardTitles w-full py-6 px-2 text-center'}>{card.title}</h4>
                <p className={'secondaryText text-balance p-2 md:px-12'}> {card.description} </p>
              </div>
            </motion.div>
          </div>
        ))
      }
    </section>
  );
}

