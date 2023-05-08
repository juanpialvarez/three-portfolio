import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';

const Contact = (props) => {
  const { handleBack } = props;
  return (
    <div className='max-sm:w-screen max-sm:h-screen h-[500px] w-[500px]  '>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='blue-gradient w-full h-full p-[1px] rounded-[20px] shadow-card flex justify-center items-center'
      >
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full absolute z-1 top-2 left-2  max-sm:opacity-60'
          onClick={(event) => handleBack()}
        >
          Back
        </button>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='rounded-[20px] py-5 px-12 h-full
          flex items-center justify-evenly flex-col overflow-scroll'
        >
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Contact.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.sectionSubText} text-white mt-10 text-center`}
          >
            Calle. Jose Ortega y Gasset 84 <br />
            Madrid, España.
          </motion.p>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.sectionSubText} text-[#ff36cb] mt-10`}
          >
            Phone 1:{' '}
            <a href='tel:+524423175868' className='text-white'>
              {' '}
              +34 910 60 66 82{' '}
            </a>
            <br />
            <br />
            Phone 2:{' '}
            <a href='tel:+524423175868' className='text-white'>
              {' '}
              +52 442 317 5868{' '}
            </a>
            <br />
            <br />
          </motion.p>

          <a
            className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full mb-10 mt-5'
            href='mailto:juanpabloalvarezv@gmail.com'
          >
            Email Me
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;