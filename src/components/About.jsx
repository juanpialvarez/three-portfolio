import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';
import picture from '../assets/images/logo-color.png';
import { styles } from '../styles';

const About = (props) => {
  const { handleBack } = props;
  return (
    <div className='max-sm:w-full max-sm:h-screen h-[500px] w-[400px] z-20'>
      <button
        className={`${styles.sectionSubText} bg-transparent hover:bg-blue-500 text-white 
        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent 
        rounded absolute top-5 left-5`}
        onClick={(event) => handleBack()}
      >
        Back
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className='blue-gradient w-full h-full p-[1px] rounded-[20px]  
        overflow-scroll'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col mb-10 mt-14'
        >
          <img
            src={picture}
            alt='Logo'
            className='h-[180px] rounded-full mb-10'
          />
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-white`}>
              Introduction
            </p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px] text-white mb-5 max-sm:mb-14'
          >
            My name is Juan Pablo Alvarez. I'm a Software developer with
            experience in Typescript, JavaScript, Python and frameworks such as
            React, React Native, Angular, Node.js, Express.js, and Django
            amongst others. I am a quick learner and eager to grow as a
            developer.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
