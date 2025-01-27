import {motion} from 'motion/react';
import {useTranslation} from "react-i18next";

export const CashPlan = () =>{

  const {t} = useTranslation();

  const cashImages = [
    {
      "image": "cashplan/CashLand.png",
      "title": t('cashplan.landing.title'),
      "description": t('cashplan.landing.description'),
    },
    {
      "image": "cashplan/CashExp.png",
      "title": t('cashplan.expenses.title'),
      "description":  t('cashplan.expenses.description'),
    },
    {
      "image": "cashplan/CashGoal.png",
      "title": t('cashplan.goals.title'),
      "description":  t('cashplan.goals.description'),
    },
    {
      "image": "cashplan/CashSave.png",
      "title": t('cashplan.savings.title'),
      "description":  t('cashplan.savings.description'),
    }
  ]

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
          CashPlan
        </motion.h1>
      </div>
      {
        cashImages.map((card, index) => (
          <div key={index} className={'h-[80vh] flex justify-center items-center sticky top-0 mb-[5vh]'}>
            <motion.div
              className={'bg-third-mine shadow-2xl max-w-screen-2xl flex flex-col md:flex-row justify-between rounded-2xl p-4'}
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              <motion.img className={'max-h-[40vh] md:max-w-[50%]'} src={card.image} alt={card.title}/>
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