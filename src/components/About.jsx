import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';
import picture from '../assets/images/logo-color.png';
import { styles } from '../styles';

const About = (props) => {
  const { handleBack } = props;
  return (
    <div className='max-sm:w-full max-sm:h-screen h-[500px] w-[400px]'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='blue-gradient w-full h-full p-[1px] rounded-[20px] shadow-card overflow-scroll'
      >
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full absolute top-2 left-2 max-sm:opacity-60'
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
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col'
        >
          <img
            src={picture}
            alt='Logo'
            className='h-[180px] rounded-[20px] mb-3'
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
      max-w-3xl leading-[30px] text-white'
          >
            I'm a Junior Software developer with experience with Typescript,
            JavaScript, Python and frameworks such as React, Angular, Node.js,
            Express.js, and Django amongst others. I am a quick learner and
            eager to grow as a developer.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
